import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Loading from "../loading/loader";
import "./Login.css";



export default function Login({ exportValue }) {
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
    const res = await fetch("", {
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
      history.push("/home");
    } else {
      setMessage("");
      setError(data.error);
      setIsLoggingIn(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const res = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );
    const data = await res.json();
    if (data.message) {
      setMessage(data.message);
    } else {
      setMessage("");
      setError(data.error);
    }
    setIsLoggingIn(false);
  };

  if (isLoggedIn) {
    history.push("/home");
  }

  return (
    
    <center className="mt-5 ">
      <h1>Login</h1>
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
              <div className="load">{isLoggingIn && <Loading />}</div>
              
            {/* 
              <div onClick={handleLogin}>
                <button type="submit">Login</button>
              </div>

              <button onClick={handleLogin} type="submit" className="mt-3">
                Login
              </button> */}

              <center>
                <button
                  onClick={() => {
                    exportValue(email);
                  }}
                  type="submit"
                  className="mt-3"
                >
                  Login
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
                    to="/register"
                    className="link
"
                    style={{ color: "red" }}
                  >
                    Register
                  </NavLink>
                </p>
                <p>
                  Forgot your password?{" "}
                  <a href="reset" onClick={handleResetPassword}>
                    Reset it here
                  </a>
                </p>
              </center>
            </div>
          </div>
        </form>
      </div>
    </center>
  );
}
