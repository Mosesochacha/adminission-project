import React, { useState } from 'react';

const CreateTeacherForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

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

    fetch('https://admn-wzcg.onrender.com/teachers', {
      method: 'POST',
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
      setMessage(`Teacher with ID ${data.id} created successfully.`);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
    })
    .catch(error => {
      console.error('Error creating teacher:', error);
      setMessage('An error occurred while creating the teacher.');
    });
  };

  return (
    <div>
      <h2>Create a New Teacher</h2>
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
        <button type="submit">Create</button>
      </form>
      <div>{message}</div>
    </div>
  );
};

export default CreateTeacherForm;
