import { NavLink, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Register.css";
import Loading from "../loading/loader";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [cachedResponse, setCachedResponse] = useState({});
  const history = useHistory();

  useEffect(() => {
    // Add input validation here
  }, [username, email, password, passwordConfirmation]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "password_confirmation":
        setPasswordConfirmation(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsRegistering(true);
    if (username in cachedResponse) {
      const data = cachedResponse[username];
      if (data.message) {
        history.push("/login"); // redirect to login page
        return;
      } else {
        setError(data.errors);
        setIsRegistering(false);
        return;
      }
    }
    const response = await fetch("https://admn-wzcg.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    });
    const { message, errors } = await response.json();
    if (message) {
      history.push("/login"); // redirect to login page
    } else {
      setError(errors);
      setIsRegistering(false);
    }
    setCachedResponse({ ...cachedResponse, [username]: { message, errors } });
  };
  return (
    <div
      className="d-flex flex-column mb-3"
      style={{ width: "20rem", margin: "0 auto" }}
    >
      <div className="card ">
        <form onSubmit={handleSubmit} className="d-flex flex-column mb-3">
          <h1>Register</h1>
          <label>Username</label>
          <input
            placeholder="Enter full name"
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
          <label>Email:</label>
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          {isRegistering && <Loading />}
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <label>Confirm password:</label>
          <input
            placeholder="Re-enter password"
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={handleInputChange}
          />
          <button type="submit">
            {isRegistering ? "Registering..." : "Register"}
          </button>

          <p>
            Already a member? <NavLink to="/login">Login</NavLink>
          </p>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}
