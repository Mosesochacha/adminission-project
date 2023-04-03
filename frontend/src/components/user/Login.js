import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    const res = await fetch("https://admn-wzcg.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (data.message) {
      setMessage(data.message);
      setIsLoggedIn(true);


      window.location.reload();
    } else {
      setMessage("");
      setError(data.errors);
      console.log(data.errors);
      setIsLoggingIn(false);
    }
  };

  if (isLoggedIn) {
    history.push("/home");
  }

  return (
    <center className="mt-5 ">
      <div className="sign_in">
        <form onSubmit={handleLogin}>
          <div className="card " style={{ width: "16rem" }}>
            <div className="card-body ">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="ENTER PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <center>
                <button type="submit" disabled={isLoggingIn}>
                  {isLoggingIn ? "LoggingIn..." : "LOGIN"}
                </button>
                <br />
                <div>
                  {message && <p>{message}</p>}
                  {error && <p>{error}</p>}
                </div>
                <br />
                <p>
                  Not a member?{" "}
                  <NavLink
                    to="/signup"
                    className="link
"
                    style={{ color: "red" }}
                  >
                    Register
                  </NavLink>
                </p>
                <p>
                  Forgot your password?{" "}
                  <NavLink
                    to="/reset-password"
                    className="link
"
                    style={{ color: "blue" }}
                  >
                    Reset it here
                  </NavLink>
                </p>
              </center>
            </div>
          </div>
         
        </form>
      </div>
    </center>
  );
}