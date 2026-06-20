// ============================================================================
// REFACTORED handleUpload.ts (merge-pdf) - Using Blob Pattern
// ============================================================================

import axios from "axios";
import type { errors as _ } from "../content";
import { resetErrorMessage, setField } from "../store";
import type { Action, Dispatch } from "@reduxjs/toolkit/react";

// ============================================================================
// FIX: Properly typed module variables (fixes TS7034)
// ============================================================================

let filesOnSubmit: string[] = [];
let prevState: string | null = null;

// ============================================================================
// TYPES
// ============================================================================

type ErrorCode =
  | "TOTAL_PAGES"
  | "PER_FILE_PAGES"
  | "MAX_FILES_EXCEEDED"
  | "FILE_TOO_LARGE"
  | "FILE_CORRUPT"
  | "NOT_SUPPORTED_TYPE"
  | "NO_FILES_SELECTED"
  | "EMPTY_FILE"
  | "UNKNOWN_ERROR";

interface ErrorResponse {
  errcode: ErrorCode;
}

// ============================================================================
// HELPERS
// ============================================================================

interface UploadResponse {
  blob: Blob;
  mimeType: string;
}

async function sendRequest(
  url: string,
  formData: FormData
): Promise<UploadResponse> {
  try {
    const response = await axios.post(url, formData, {
      responseType: "blob",
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });

    const blob = new Blob([response.data], {
      type: response.headers["content-type"] || "application/octet-stream",
    });

    return {
      blob,
      mimeType: response.headers["content-type"] || "application/octet-stream",
    };
  } catch (err: any) {
    // Error response might also be a Blob
    if (err.response?.data instanceof Blob) {
      try {
        const text = await err.response.data.text();
        err.response.data = JSON.parse(text);
      } catch (parseError) {
        console.error("Failed to parse error response:", parseError);
        err.response.data = { errcode: "UNKNOWN_ERROR" };
      }
    }
    throw err;
  }
}

/**
 * Parse error blob response to JSON
 */
async function parseErrorBlob(blob: Blob): Promise<ErrorResponse | null> {
  try {
    const text = await blob.text();
    return JSON.parse(text) as ErrorResponse;
  } catch {
    return null;
  }
}

// ============================================================================
// MIME TYPE LOOKUP TABLE
// ============================================================================

const mimeTypeLookupTable: {
  [key: string]: { outputFileMimeType: string; outputFileName: string };
} = {
  "application/zip": {
    outputFileMimeType: "application/zip",
    outputFileName: "merged.zip",
  },
  "application/pdf": {
    outputFileMimeType: "application/pdf",
    outputFileName: "merged.pdf",
  },
  "application/msword": {
    outputFileMimeType: "application/msword",
    outputFileName: "merged.docx",
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    outputFileMimeType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    outputFileName: "merged.docx",
  },
  "application/vnd.ms-excel": {
    outputFileMimeType: "application/vnd.ms-excel",
    outputFileName: "merged.xlsx",
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    outputFileMimeType:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    outputFileName: "merged.xlsx",
  },
  "application/vnd.ms-powerpoint": {
    outputFileMimeType: "application/vnd.ms-powerpoint",
    outputFileName: "merged.pptx",
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    outputFileMimeType:
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    outputFileName: "merged.pptx",
  },
  "text/plain": {
    outputFileMimeType: "text/plain",
    outputFileName: "merged.txt",
  },
};

// ============================================================================
// MAIN HANDLER (Refactored)
// ============================================================================

export const handleUpload = async (
  e: React.SubmitEvent<HTMLFormElement>,
  // NOTE: downloadBtn parameter REMOVED
  dispatch: Dispatch<Action>,
  state: {
    path: string;
    errorMessage: string;
    fileName: string;
    selectedPages: string;  // ← AND HERE
  },
  files: File[],
  errors: _,
  setDownloadBlob: (blob: Blob, filename: string) => void
) => {
  e.preventDefault();
  dispatch(setField({ isSubmitted: true }));

  if (!files) {
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // Extract file names from the File[] array
  const fileNames = files.map((file) => file.name);

  // Check if every file name in files is present in filesOnSubmit
  const allFilesPresent = fileNames.every((fileName) =>
    filesOnSubmit.includes(fileName)
  );

  const strState = JSON.stringify(state);

  if (
    allFilesPresent &&
    files.length === filesOnSubmit.length &&
    prevState === strState
  ) {
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    return;
  }

  prevState = strState;

  // ────────────────────────────────────────────────────────────────────────
  // Build FormData
  // ────────────────────────────────────────────────────────────────────────

  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  formData.append("selectedPages", state.selectedPages);

  // ────────────────────────────────────────────────────────────────────────
  // Build URL
  // ────────────────────────────────────────────────────────────────────────

  let url: string = "";

  // @ts-ignore
  if (process.env.NODE_ENV === "development") {
    url = `http://localhost:8000/api/${state.path}`;
  } else {
    url = `/api/${state.path}`;
  }

  // Early exit if there's already an error
  if (state.errorMessage) {
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // Get original filename for download
  const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");

  // ────────────────────────────────────────────────────────────────────────
  // API Call & Blob Handling
  // ────────────────────────────────────────────────────────────────────────

  try {
    // NEW: Use sendRequest helper
    const { blob, mimeType } = await sendRequest(url, formData);

    // Look up expected output format
    const mimeTypeData = mimeTypeLookupTable[mimeType] || {
      outputFileMimeType: mimeType,
      outputFileName: "",
    };

    const { outputFileMimeType, outputFileName } = mimeTypeData;

    // Ensure blob has correct MIME type
    const typedBlob = new Blob([blob], {
      type: outputFileMimeType || "application/octet-stream",
    });

    // ───────────────────────────────────────────────────────────────────────
    // NEW: Deferred download via setDownloadBlob
    // ───────────────────────────────────────────────────────────────────────
    setDownloadBlob(typedBlob, state.fileName || outputFileName);

    // Update UI state
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    dispatch(setField({ isSubmitted: false }));

    // Update tracking
    filesOnSubmit = files.map((f) => f.name);
  } catch (error) {
    // ───────────────────────────────────────────────────────────────────────
    // Error Handling
    // ───────────────────────────────────────────────────────────────────────

    if ((error as { code: string }).code === "ERR_NETWORK") {
      dispatch(setField({ errorMessage: errors.ERR_NETWORK.message }));
      dispatch(setField({ isSubmitted: false }));
      return;
    }

    // Handle server validation/auth errors
    if (axios.isAxiosError(error) && error.response?.data) {
      // Parse error response blob
      const errorData = await parseErrorBlob(error.response.data);

      if (errorData) {
        let limitationMsg = "";
        let errMsg = "";

        switch (errorData.errcode) {
          case "MAX_FILES_EXCEEDED":
            limitationMsg = errors.alerts.maxFiles;
            break;

          case "PER_FILE_PAGES":
            limitationMsg = errors.alerts.perFilePages;
            break;

          case "FILE_TOO_LARGE":
            limitationMsg = errors.alerts.fileSize;
            break;

          case "FILE_CORRUPT":
            limitationMsg = errMsg =
              errors["FILE_CORRUPT"]?.message || "File is corrupt";
            break;

          case "NOT_SUPPORTED_TYPE":
            errMsg = errors["NOT_SUPPORTED_TYPE"]?.message ||
              "File type not supported";
            break;

          case "NO_FILES_SELECTED":
            errMsg =
              errors["NO_FILES_SELECTED"]?.message || "No files selected";
            break;

          case "EMPTY_FILE":
            errMsg = errors["EMPTY_FILE"]?.message || "File is empty";
            break;

          default:
            errMsg = errors["UNKNOWN_ERROR"]?.message || "An error occurred";
        }

        if (errMsg) {
          dispatch(setField({ errorMessage: errMsg }));
        }

        if (limitationMsg) {
          dispatch(setField({ limitationMsg }));
        }
      }
    }

    dispatch(setField({ isSubmitted: false }));
  }
};