import React, { useEffect, useState } from "react";
import "./StudentPortal.css";
import axios from "axios";


export default function AllStudents(params) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("https://admn-wzcg.onrender.com/students").then((res) => {
      // Set the initial state of the students with empty string values
      const updatedStudents = res.data.map((student) => ({
        ...student,
        editing: false,
        first_name: student.first_name || "",
        last_name: student.last_name || "",
        email: student.email || "",
        date_of_birth: student.date_of_birth || "",
        admission_year: student.admission_year || "",
      }));
      setStudents(updatedStudents);
    });
  }, []);

  // Delete a student with the specified ID
  const handleDelete = (id) => {
    axios
      .delete(`https://admn-wzcg.onrender.com/students/${id}`)
      .then((res) => {
        console.log(res.data);
        // Update the student list in state
        setStudents(students.filter((student) => student.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Update a student with the specified ID
  const handleUpdate = (id, updatedData) => {
    axios
      .put(`https://admn-wzcg.onrender.com/students/${id}`, updatedData)
      .then((res) => {
        console.log(res.data);
        // Update the student list in state
        setStudents(
          students.map((student) => {
            if (student.id === id) {
              return { ...student, ...updatedData, editing: false };
            }
            return student;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Cancel editing for a student
  const handleCancel = (id) => {
    setStudents(
      students.map((student) => {
        if (student.id === id) {
          return { ...student, editing: false };
        }
        return student;
      })
    );
  };

  // Start editing for a student
  const handleEdit = (id) => {
    setStudents(
      students.map((student) => {
        if (student.id === id) {
          return { ...student, editing: true };
        }
        return student;
      })
    );
  };

  // Save changes for a student
  const handleSave = (id, updatedData) => {
    handleUpdate(id, updatedData);
  };

  return (
    <div> 
     
      <h1>Students</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Admission Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                {student.editing ? (
                  <>
                    <input
                      type="text"
                      value={student.first_name}
                      onChange={(e) =>
                        setStudents(
                          students.map((s) =>
                            s.id === student.id
                              ? { ...s, first_name: e.target.value }
                              : s
                          )
                        )
                      }
                    />
                    <input
                      type="text"
                      value={student.last_name}
                      onChange={(e) =>
                        setStudents(
                          students.map((s) =>
                            s.id === student.id
                              ? { ...s, last_name: e.target.value }
                              : s
                          )
                        )
                      }
                    />
                  </>
                ) : (
                  `${student.first_name} ${student.last_name}`
                )}
              </td>
              <td>
                {student.editing ? (
                  <input
                    type="email"
                    value={student.email}
                    onChange={(e) =>
                      setStudents(
                        students.map((s) =>
                          s.id === student.id
                            ? { ...s, email: e.target.value }
                            : s
                        )
                      )
                    }
                  />
                ) : (
                  student.email
                )}
              </td>
              <td>
                {student.editing ? (
                  <input
                    type="date"
                    value={student.date_of_birth}
                    onChange={(e) =>
                      setStudents(
                        students.map((s) =>
                          s.id === student.id
                            ? { ...s, date_of_birth: e.target.value }
                            : s
                        )
                      )
                    }
                  />
                ) : (
                  student.date_of_birth
                )}
              </td>
              <td>
                {student.editing ? (
                  <input
                    type="text"
                    value={student.admission_year}
                    onChange={(e) =>
                      setStudents(
                        students.map((s) =>
                          s.id === student.id
                            ? { ...s, admission_year: e.target.value }
                            : s
                        )
                      )
                    }
                  />
                ) : (
                  student.admission_year
                )}
              </td>
              <td>
                {student.editing ? (
                  <>
                    <button
                      onClick={() =>
                        handleSave(student.id, {
                          first_name: student.first_name,
                          last_name: student.last_name,
                          email: student.email,
                          date_of_birth: student.date_of_birth,
                          admission_year: student.admission_year,
                        })
                      }
                    >
                      Save
                    </button>
                    <button onClick={() => handleCancel(student.id)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleDelete(student.id)}>
                      Delete
                    </button>
                    <button onClick={() => handleEdit(student.id)}>
                      Update
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
