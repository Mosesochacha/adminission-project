import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function TeacherById() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await axios.get(`https://admn-wzcg.onrender.com/teachers/${id}`);
        setTeacher(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTeacher();
  }, [id]);

  if (!teacher) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Name: {teacher.first_name} {teacher.last_name}</h2>
      <p>Email: {teacher.email}</p>
      <p>Phone Number: {teacher.phone_number}</p>
      <img src={teacher.image} alt={teacher.first_name} />
    </div>
  );
}

export default TeacherById;
