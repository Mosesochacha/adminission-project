import React, { useState } from "react";
import axios from "axios";
import "./resetpassword.css";

function PasswordReset() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const [submitEmail ,setSubmitEmail] = useState(true);
  const [submitPassword ,setSubmitPassword] = useState(false);
  const [submitToken ,setSubmitToken] = useState(false);


  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://admn-wzcg.onrender.com/reset_password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email
      }),
    });
    const data = await res.json();
    if (data.message) {
      setMessage(data.message);
      setSubmitEmail(false);
      setSubmitToken(true);
      setSubmitPassword(false);
    } else {
      setMessage("");
      setErrors(data.errors);
      setSubmitEmail(true);
      setSubmitToken(false);
      setPasswordConfirmation(false);
      setSubmitPassword(false);
    }
  };

  const handleTokenSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`https://admn-wzcg.onrender.com/reset_password/${token}/edit`)
      .then((response) => {
        setMessage("");
        
        setErrors([]);
        if (response.data.valid_token) {
          setPassword("");
          setPasswordConfirmation("");
          setSubmitEmail(false);
          setSubmitToken(false);
          setSubmitPassword(true);
        } else {
          setErrors(["Invalid or expired verification code."]);
        }
      })
      .catch((error) => {
        setMessage("");
        setErrors(error.response.data.errors);
      });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`https://admn-wzcg.onrender.com/reset_password`, {
        password,
        password_confirmation: passwordConfirmation
      })
      .then((response) => {
        setMessage(response.data.message);
        setErrors([]);
      })
      .catch((error) => {
        setMessage("");
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="reset">
      <h1>Reset Password</h1>
      {submitEmail && (
        <form onSubmit={handleEmailSubmit}>
          <label htmlFor="email">Enter your email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
      {submitToken && (
        <form onSubmit={handleTokenSubmit}>
          <label htmlFor="token">Enter verification code:</label>
          <input
            type="text"
            id="token"
            name="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
          {message && <p>{message}</p>}
          {errors && <div>{errors}</div>}
        </form>
      )}
      {submitPassword && (
        <form onSubmit={handlePasswordSubmit}>
          <label htmlFor="password">Enter new password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="passwordConfirmation">Confirm new password:</label>
          <input
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
          {message && <p>{message}</p>}
          {errors && <div>{errors}</div>}
        </form>
      )}
    </div>
  );
}

export default PasswordReset;
