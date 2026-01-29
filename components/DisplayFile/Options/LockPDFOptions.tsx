import { useDispatch } from "react-redux";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import type { edit_page } from "../../../src/content";
import { setField } from "../../../src/store";

export const LockPDFOptions = ({
  lock_pdf,
}: {
  lock_pdf: edit_page["lock_pdf"];
}) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setShowError(false);
    if (value && repeatPassword && value === repeatPassword) {
      dispatch(setField({ password: value }));
    } else if (value !== repeatPassword) {
      dispatch(setField({ password: "" }));
    }
  };

  const handleRepeatPasswordChange = (value: string) => {
    setRepeatPassword(value);
    if (password && value) {
      if (password === value) {
        setShowError(false);
        dispatch(setField({ password: value }));
      } else {
        setShowError(true);
        dispatch(setField({ password: "" }));
      }
    } else {
      setShowError(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ marginBottom: "20px", color: "#2c3e50" }}>
        {lock_pdf.title}
      </h3>

      <div style={{ marginBottom: "15px", position: "relative" }}>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
          placeholder={lock_pdf.password}
          style={{
            width: "100%",
            padding: "12px",
            paddingRight: "45px",
            border: "1px solid #dfe6e9",
            borderRadius: "4px",
            fontSize: "14px",
            outline: "none",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#0984e3")}
          onBlur={(e) => (e.target.style.borderColor = "#dfe6e9")}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#636e72",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0984e3")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#636e72")}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <div style={{ marginBottom: "15px", position: "relative" }}>
        <input
          type={showRepeatPassword ? "text" : "password"}
          value={repeatPassword}
          onChange={(e) => handleRepeatPasswordChange(e.target.value)}
          placeholder={lock_pdf.repeatPassword}
          style={{
            width: "100%",
            padding: "12px",
            paddingRight: "45px",
            border: `1px solid ${showError ? "#d63031" : "#dfe6e9"}`,
            borderRadius: "4px",
            fontSize: "14px",
            outline: "none",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) =>
            (e.target.style.borderColor = showError ? "#d63031" : "#0984e3")
          }
          onBlur={(e) =>
            (e.target.style.borderColor = showError ? "#d63031" : "#dfe6e9")
          }
        />
        <button
          type="button"
          onClick={() => setShowRepeatPassword(!showRepeatPassword)}
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#636e72",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0984e3")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#636e72")}
        >
          {showRepeatPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {showError && (
        <div
          style={{
            color: "#d63031",
            fontSize: "13px",
            marginTop: "-10px",
            marginBottom: "10px",
          }}
        >
          {lock_pdf.no_match}
        </div>
      )}
    </div>
  );
};
