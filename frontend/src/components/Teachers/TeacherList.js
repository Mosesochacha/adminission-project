import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios.get('https://admn-wzcg.onrender.com/teachers')
      .then(response => {
        const modifiedData = response.data.map(teacher => {
          return {
            id: teacher.id,
            first_name: teacher.first_name,
            last_name: teacher.last_name,
            email: teacher.email,
            phone_number: teacher.phone_number,
            // image: 'https://loremflickr.com/300/300/teacher'
          }
        });
        setTeachers(modifiedData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Teachers</h1>
      <table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(teacher => (
            <tr key={teacher.id}>
              {/* <td>{teacher.id}</td> */}
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

export default TeacherList;
