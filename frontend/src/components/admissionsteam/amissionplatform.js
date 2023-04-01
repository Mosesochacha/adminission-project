import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminPlatform(params) {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to= "students">Students</NavLink>
          <NavLink to= "teachers">Techers</NavLink>
          <NavLink to="studentp">studentportal</NavLink>
        </div>
      </nav>
      <h1>hello</h1>
    </div>
  );
}
