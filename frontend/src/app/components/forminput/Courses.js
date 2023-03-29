import React, { useState } from 'react';

const Courses = ({ courses }) => {
  const [course, setCourse] = useState({
    name: '',
    description: '',
    class_id: '',
    teacher_id: '',
    year: '',
    term: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCourse({...course, [name]: value});
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Add the new course to the list of existing courses
    courses.push(course);
    setCourse({
      name: '',
      description: '',
      class_id: '',
      teacher_id: '',
      year: '',
      term: ''
    });
  };

  return (
    <div>
        
      <form onSubmit={handleSubmit}>
      <h1>Courses</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={course.name} onChange={handleInputChange} />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={course.description} onChange={handleInputChange}></textarea>

        <label htmlFor="class_id">Class ID:</label>
        <input type="number" id="class_id" name="class_id" value={course.class_id} onChange={handleInputChange} />

        <label htmlFor="teacher_id">Teacher ID:</label>
        <input type="number" id="teacher_id" name="teacher_id" value={course.teacher_id} onChange={handleInputChange} />

        <label htmlFor="year">Year:</label>
        <input type="number" id="year" name="year" value={course.year} onChange={handleInputChange} />

        <label htmlFor="term">Term:</label>
        <input type="number" id="term" name="term" value={course.term} onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>
    
    </div>
  );
};

export default Courses;
