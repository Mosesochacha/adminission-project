import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);
  const [verificationCodeValid, setVerificationCodeValid] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      return setErrorMessage("Please enter an email address.");
    }
    try {
      const response = await axios.post(
        "https://admn-wzcg.onrender.com/reset_password",
        { email }
      );

      if (response.status === 200) {
        setSuccessMessage(response.data.success_message);
        setVerificationCodeSent(true);
        setErrorMessage("");
      } else {
        setVerificationCodeSent(false);
        setErrorMessage(response.data.error_message);
        setSuccessMessage("");
      }
    } catch (error) {
      setVerificationCodeSent(false);
      if (error.response.data?.error_message) {
        setErrorMessage(error.response.data.error_message);
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
      setSuccessMessage("");
    }
  };

  const handleTokenSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://admn-wzcg.onrender.com/reset_password/${token}/edit`
      );
      setVerificationCodeValid(response.data.valid_token);
      setErrorMessage("");
    } catch (error) {
      setVerificationCodeValid(error.response.data.valid_token);
      if (error.response.data?.error_message) {
        setErrorMessage(error.response.data.error_message);
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `https://admn-wzcg.onrender.com/reset_password/${token}`,
        { password }
      );
      setSuccessMessage(response.data.success_message);
      setErrorMessage("");
      history.push("/login");
    } catch (error) {
      if (error.response.data?.error_message) {
        setErrorMessage(error.response.data.error_message);
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
      setSuccessMessage("");
    }
  };

  return (
    <div className="send-container card">
      <form onSubmit={handleEmailSubmit}>
        <label htmlFor="email">Enter your email address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send verification code</button>
      </form>

      {verificationCodeSent && !verificationCodeValid && (
        <div>
          <p>{errorMessage}</p>
          <button onClick={() => setVerificationCodeSent(false)}>
            Try again
          </button>
        </div>
      )}

      {verificationCodeSent && verificationCodeValid && (
        <>
          <form onSubmit={handleTokenSubmit}>
            <label htmlFor="token">Enter your verification code:</label>
            <input
              type="text"
              id="token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
            <button type="submit">Verify code</button>
          </form>

          <form onSubmit={handlePasswordSubmit}>
            <label htmlFor="password">Choose a new password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Update password</button>
          </form>
        </>
      )}

      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && verificationCodeSent && verificationCodeValid && (
        <p style={{ color: "red" }}>{errorMessage}</p>
      )}
    </div>
  );
}