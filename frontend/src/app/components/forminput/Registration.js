import React, { useState } from "react";
import './Registration.css'

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [admissionYear, setAdmissionYear] = useState("");
  const [classId, setClassId] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Gender:
        <input
          type="text"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="date"
          value={dateOfBirth}
          onChange={(event) => setDateOfBirth(event.target.value)}
        />
      </label>
      <br />
      <label>
        Admission Year:
        <input
          type="number"
          value={admissionYear}
          onChange={(event) => setAdmissionYear(event.target.value)}
        />
      </label>
      <br />
      <label>
        Class ID:
        <input
          type="number"
          value={classId}
          onChange={(event) => setClassId(event.target.value)}
        />
      </label>
      <br />
   
      <button type="submit">Submit</button>
    </form>
    </div>
    
  );
}
 export default Registration