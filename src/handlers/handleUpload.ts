import axios from "axios";
import { downloadConvertedFile } from "../downloadFile";
import type { errors as _ } from "../content";
import { type RefObject } from "react";
import { resetErrorMessage, setField, type ToolState } from "../store";
import type { Action, Dispatch } from "@reduxjs/toolkit/react";
import { parseErrorResponse } from "../utils";
let filesOnSubmit = [];
let prevState = null;
export const handleUpload = async (
  e: React.FormEvent<HTMLFormElement>,
  downloadBtn: RefObject<HTMLAnchorElement>,
  dispatch: Dispatch<Action>,
  state: {
    path: string;
    errorMessage: string;
    fileName: string;
    rotations: {
      k: string;
      r: number;
    }[];
    passwords: {
      k: string;
      p: string;
    }[];
    selectedLanguages: {
      k: string;
      langs: string[];
    }[],
    converter: "free" | "premium",
    pdf_a_format: ToolState["pdf_a_format"]
  },
  files: File[],
  errors: _
) => {
  e.preventDefault();
  dispatch(setField({ isSubmitted: true }));

  if (!files) return;
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

  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  formData.append("rotations", JSON.stringify(state.rotations));
  formData.append("passwords", JSON.stringify(state.passwords));
  formData.append("selectedLanguages", JSON.stringify(state.selectedLanguages));
  formData.append("pdf_a_format", String(state?.pdf_a_format));
  let url: string = "";
  let endpoint = state.converter === "free" ? "/api/" : "/premium/";
  if (
    state.path === "pdf-to-pdf-a" ||
    state.path === "pdf-to-text" ||
    state.path === "word-to-pdf" ||
    state.path === "powerpoint-to-pdf" ||
    state.path === "html-to-pdf"
  ) {
    endpoint = "/api/";
  }

  // @ts-ignore
  if (process.env.NODE_ENV === "development") {
    url = `http://localhost:8000${endpoint}${state.path}`;
  } else {
    url = `${endpoint}${state.path}`;
  }
  if (state.errorMessage) {
    return;
  }
  const originalFileName =
    state.fileName || files[0]?.name?.split(".").slice(0, -1).join(".");

  const mimeTypeLookupTable: {
    [key: string]: { outputFileMimeType: string; outputFileName: string };
  } = {
    "application/zip": {
      outputFileMimeType: "application/zip",
      outputFileName: `${originalFileName || "PDFEquips"}-compressed.zip`,
    },
    "application/pdf": {
      outputFileMimeType: "application/pdf",
      outputFileName: `${originalFileName}.pdf`,
    },
    "application/msword": {
      outputFileMimeType: "application/msword",
      outputFileName: `${originalFileName}.docx`,
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
      outputFileMimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      outputFileName: `${originalFileName}.docx`,
    },
    "application/vnd.ms-excel": {
      outputFileMimeType: "application/vnd.ms-excel",
      outputFileName: `${originalFileName}.xlsx`,
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
      outputFileMimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      outputFileName: `${originalFileName}.xlsx`,
    },
    "application/vnd.ms-powerpoint": {
      outputFileMimeType: "application/vnd.ms-powerpoint",
      outputFileName: `${originalFileName}.pptx`,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    {
      outputFileMimeType:
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      outputFileName: `${originalFileName}.pptx`,
    },
    "text/plain": {
      outputFileMimeType: "text/plain",
      outputFileName: `${originalFileName}.txt`,
    },
  };

  try {
    const response = await axios.post(url, formData, {
      responseType: "arraybuffer",
      withCredentials: true
    });
    // const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");
    const mimeType = response.data.type || response.headers["content-type"];
    const mimeTypeData = mimeTypeLookupTable[mimeType] || {
      outputFileMimeType: mimeType,
      outputFileName: "",
    };
    const { outputFileMimeType, outputFileName } = mimeTypeData;
    const compressedFileSize = response.data.byteLength;

    // Dispatch the compressed file size to Redux store
    dispatch(
      setField({
        compressedFileSize: compressedFileSize,
      })
    );

    dispatch(setField({ showDownloadBtn: true }));
    downloadConvertedFile(
      response,
      outputFileMimeType,
      outputFileName || state.fileName,
      downloadBtn
    );
    filesOnSubmit = files.map((f) => f.name);

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      dispatch(resetErrorMessage());
      dispatch(setField({ isSubmitted: false }));
    }
  } catch (error) {
    if ((error as { code: string }).code === "ERR_NETWORK") {
      dispatch(setField({ errorMessage: errors.ERR_NETWORK.message }));
      return;
    }

    // Handle server validation/auth errors
    if (axios.isAxiosError(error) && error.response) {
      try {
        const errorCodeMap: Record<string, string> = {
          // File validation errors
          'FILE_NOT_UPLOADED': errors.alerts.fileNotUploaded,
          'FILE_EMPTY': errors.alerts.fileEmpty,
          'FILE_TOO_LARGE': errors.alerts.fileTooLarge,
          'INVALID_FILE_TYPE': errors.alerts.invalidFileType,
          'FILE_CORRUPT': errors.alerts.fileCorrupt,
          'INSUFFICIENT_CONVERSION_UNITS': errors.alerts.insufficientUnits,
          // Auth errors
          'AUTH_TOKEN_MISSING': errors.alerts.authRequired,
          'AUTH_TOKEN_EXPIRED': errors.alerts.sessionExpired,
          'AUTH_INVALID_TOKEN': errors.alerts.invalidToken,
          'AUTH_USER_NOT_FOUND': errors.alerts.userNotFound,
          'AUTH_SERVER_ERROR': errors.alerts.authError,
          'SERVER_CONFIG_ERROR': errors.alerts.serverError,
          'MAX_PAGES_EXCEEDED': errors.MAX_PAGES_EXCEEDED.message,
        };

        const { errorCode } = parseErrorResponse(error);

        const message = errorCodeMap[errorCode];

        if (message) {
          dispatch(setField({ limitationMsg: message }));
          dispatch(setField({ errorCode }));
          return;
        }
      } catch {
        // Failed to parse error response
      }
    }

    dispatch(setField({ isSubmitted: false }));
  } finally {
    dispatch(setField({ isSubmitted: false }));
  }
};
