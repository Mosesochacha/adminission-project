import { useState, useEffect } from "react";
import {  useHistory } from "react-router-dom";
import "./StudentPortal.css";

const StudentPortal = () => {
  const [students, setStudents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("https://admn-wzcg.onrender.com/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error(err));
  }, []);

  const handleUpdateStatus = (admissionId, newStatus) => {
    fetch(`https://admn-wzcg.onrender.com/students/${admissionId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the admission status in the students array
        const updatedStudents = students.map((student) => {
          const updatedAdmissions = student.admissions.map((admission) => {
            if (admission.id === data.id) {
              admission.status = data.status;
            }
            return admission;
          });
          return { ...student, admissions: updatedAdmissions };
        });
        setStudents(updatedStudents);
      })
      .catch((err) => console.error(err));
  };

  // Filter students to only include those with at least one admission in "waiting" status
  const waitingStudents = students.filter((student) =>
    student.admissions.some((admission) => admission.status === "waiting")
  );

  return (
    <div className="bg warning">
      <h2>Students</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Admission Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {waitingStudents.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.gender}</td>
                <td>{student.email}</td>
                <td>{student.date_of_birth}</td>
                <td>
                  {student.admissions.map((admission) => (
                    <div key={admission.id}>{admission.status}</div>
                  ))}
                </td>
                <td>
                  {student.admissions.map((admission) => {
                    if (admission.status === "accepted") {
                      return null;
                    } else {
                      return (
                        <div key={admission.id}>
                          <button
                            onClick={() => {
                              handleUpdateStatus(admission.id, "accepted");
                              history.push("/portal");
                            }}
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => {
                              handleUpdateStatus(admission.id, "declined");
                              history.push("/portal");
                            }}
                          >
                            Decline
                          </button>
                        </div>
                      );
                    }
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentPortal;
