import React, { useState, useEffect } from "react";
import "./Teachers.css";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);

  // Fetch the data from the API endpoint when the component mounts
  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((data) => setTeachers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Teachers</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.teacher_id}>
              <td>{teacher.teacher_id}</td>
              <td>{teacher.first_name}</td>
              <td>{teacher.last_name}</td>
              <td>{teacher.email}</td>
              <td>{teacher.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
