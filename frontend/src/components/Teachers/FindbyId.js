import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TeacherDetailsID(props) {
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://admn-wzcg.onrender.com/teachers/${props.id}`)
      .then(response => {
        const modifiedData = {
          id: response.data.id,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
          phone_number: response.data.phone_number,
        
        };
        setTeacher(modifiedData);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, [props.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Teacher Details</h1>
      <h2>Name: {teacher.first_name} {teacher.last_name}</h2>
      <p>Email: {teacher.email}</p>
      <p>Phone Number: {teacher.phone_number}</p>
    </div>
  );
}

export default TeacherDetailsID;
