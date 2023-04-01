import React, { useState } from "react";
import "./Students.css";

function Students() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [admission_year, setAdmissionYear] = useState("");
  const [form, setForm] = useState("");

  const handleSubmit =  (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify
      ({
        first_name,last_name,email,gender,date_of_birth,admission_year,form
      }),
    };

    fetch("https://admn-wzcg.onrender.com/students", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h1>Student Registration</h1>
        <label>
          First Name:
          <input
            type="text"
            value={first_name}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={last_name}
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
            value={date_of_birth}
            onChange={(event) => setDateOfBirth(event.target.value)}
          />
        </label>
        <br />
        <label>
          Admission Year:
          <input
            type="number"
            value={admission_year}
            onChange={(event) => setAdmissionYear(event.target.value)}
          />
        </label>
        <br />
        <label>
          Form:
          <input
            type="number"
            value={form}
            onChange={(event) => setForm(event.target.value)}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Students;
