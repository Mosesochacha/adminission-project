import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Logout() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleLogout = async (e) => {
    e.preventDefault();
    const res = await fetch("API", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.message) {
      setMessage(data.message);
      setError("");
    } else {
      setMessage("");
      setError(data.error);
    }
  };
  return (
    <div>
      <NavLink to="./">
      <button onClick={handleLogout}>LOGOUT</button>
      </NavLink>
      <div>{message && <p>{message}</p>}</div>
      <div>{error && <p>{error}</p>}</div>
    </div>
  );
}
