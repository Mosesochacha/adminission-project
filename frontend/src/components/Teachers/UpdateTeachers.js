import React, { useState, useEffect } from 'react';

const UpdateTeacherForm = ({ teacher }) => {
  const [firstName, setFirstName] = useState(teacher.first_name);
  const [lastName, setLastName] = useState(teacher.last_name);
  const [email, setEmail] = useState(teacher.email);
  const [phoneNumber, setPhoneNumber] = useState(teacher.phone_number);
  const [message, setMessage] = useState('');
  const [updatedTeacher, setUpdatedTeacher] = useState(null);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://admn-wzcg.onrender.com/teachers/${teacher.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber
      })
    })
    .then(response => response.json())
    .then(data => {
      setMessage(`Teacher with ID ${data.id} updated successfully.`);
      setUpdatedTeacher(data);
    })
    .catch(error => {
      console.error('Error updating teacher:', error);
      setMessage('An error occurred while updating the teacher.');
    });
  };

  useEffect(() => {
    if (updatedTeacher) {
      // Update the teacher in the Teachers table in the database
      fetch(`https://admn-wzcg.onrender.com/teachers/${updatedTeacher.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        // Do something with the updated teacher data, e.g. update the state of a Teachers table component
        console.log('Updated teacher data:', data);
      })
      .catch(error => {
        console.error('Error fetching updated teacher data:', error);
      });
    }
  }, [updatedTeacher]);

  return (
    <div>
      <h2>Update Teacher Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <button type="submit">Update</button>
      </form>
      <div>{message}</div>
    </div>
  );
};

export default UpdateTeacherForm;
