import React, { useState } from "react";
import "./Send.css";

export default function SendCode({ history }) {
  const [email, setResetEmail] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "http://localhost:4000/reset_password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email
        }),
      }
    );
    try {
      const data = await res.json();
      if (data.message) {
        setMessage(data.message);
        history.push("/reset-password");
      } else {
        setMessage("");
        setError(data.error);
      }
    } catch (err) {
      console.log(err);
      setError("An error occurred while trying to reset your password.");
    }
  };
  

  const handleCancel = () => {
    setMessage("");
  };

  return (
    <div className="send-container card">
      <h2>Reset Password</h2>
      <form>
        <label htmlFor="reset-email">Enter your email:</label>
        <br />
        <input
          type="email"
          name="reset-email"
          placeholder="ENTER EMAIL"
          required
          value={email}
          onChange={(e) => setResetEmail(e.target.value)}
        />
        <br />

        <button 
          type="submit"
          className="send-code-button"
          onClick={handleResetPassword}
        >
          Send Verification Code
        </button>
        <button
          type="button"
          className="cancel-button"
          onClick={() => {
            history.push("/login");
            handleCancel();
          }}
        >
          Cancel
        </button>

        <br />
        <div style={{ display: message || error ? "" : "none" }}>
          {message && <p>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        
      </form>
    </div>
  );
}
