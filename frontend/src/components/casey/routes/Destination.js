import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import React, { useState, useEffect } from "react";
// import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import axios from "axios";


const Destination = () => {

  const [courses, setCourses] = useState([])
  useEffect(() => {
    axios.get("https://admn-wzcg.onrender.com/courses")
      .then((response) => {
        setCourses(response.data)
      })

  }, [])

  return (
    <div className="destination">
      <h1>Popular Courses</h1>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <div className="first-des">
              {/* description of the courses */}
              <div className="des-text">
                {/* the title */}
                <h2>{course.title}</h2>
                {/* the description of the course goes in the </p> */}
                <p>{course.description}</p>
              </div>
              {/* course images */}
              <div className="image">
                <img alt="courseImage1" src={Mountain1} />
                <img alt="courseImage2" src={Mountain2} />

              </div>


            </div>
          </div>
        )
      })}


    </div>
  );
};

export default Destination;
