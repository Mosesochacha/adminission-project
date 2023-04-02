import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";

export default function ResetPassword() {
  const [resetEmail, setResetEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    const res = await fetch("https://admn-wzcg.onrender.com/r/verify-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: resetEmail,
        code: resetCode,
      }),
    });
    const data = await res.json();
    if (data.message === "Code verified") {
      setMessage(data.message);
      setResetCode("");
    } else {
      setMessage("");
      setError(data.error);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://admn-wzcg.onrender.com/r/update-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: resetEmail,
          code: resetCode,
          password: newPassword,
        }),
      }
    );
    const data = await res.json();
    if (data.message === "Password updated") {
      setMessage(data.message);
      setResetEmail("");
      setResetCode("");
      setNewPassword("");
      history.push("/login");
    } else {
      setMessage("");
      setError(data.error);
    }
  };

  return (
    <div>
      {message !== "Password updated" && (
        <>
          <h2>Verify Code</h2>
          <form onSubmit={handleVerifyCode}>
            <label htmlFor="reset-code">Enter the verification code:</label>
            <br />
            <input
              type="text"
              name="reset-code"
              required
              value={resetCode}
              onChange={(e) => setResetCode(e.target.value)}
            />
            <br />
            <button type="submit">Verify Code</button>
            <br />
            <div style={{ display: message ? "" : "none" }}>
              {message && <p>{message}</p>}
              {error && <p>{error}</p>}
            </div>
          </form>
        </>
      )}

      {message === "Code verified" && (
        <>
          <h2>Update Password</h2>
          <form onSubmit={handleUpdatePassword}>
            <label htmlFor="new-password">Enter your new password:</label>
            <br />
            <input
              type="password"
              name="new-password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <br />
            <button type="submit">Update Password</button>
            <br />
            <div style={{ display: message ? "" : "none" }}>
              {message && <p>{message}</p>}
              {error && <p>{error}</p>}
            </div>
          </form>
        </>
      )}
    </div>
  );
}
