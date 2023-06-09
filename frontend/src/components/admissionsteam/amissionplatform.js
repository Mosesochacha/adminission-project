import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminPlatform(params) {
  return (
    <div>
       
      <div className="navbar navbar bg-body-tertiar">
        <div className="container-fluid">
          <NavLink exact activeClassName="active" to="/students">Students</NavLink>
          <NavLink exact activeClassName="active" to="/teachers">Teachers</NavLink>
          <NavLink exact activeClassName="active" to="/portal">Student Portal</NavLink>
          <NavLink exact activeClassName="active" to="/allstudents">All Students</NavLink>
        </div>
      </div>
    </div>
  );
}
