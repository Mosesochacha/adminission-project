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
            image: 'https://loremflickr.com/300/300/teacher'
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
      <div className="card-container">
        {teachers.map(teacher => (
          <div key={teacher.id} className="card">
            <img src={teacher.image} alt={teacher.first_name} />
            <h2>{teacher.first_name} {teacher.last_name}</h2>
            <p>Email: {teacher.email}</p>
            <p>Phone Number: {teacher.phone_number}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherList;
