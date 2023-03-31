
import React ,{ useState , useEffect }from "react";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import axios from "axios";


const Destination = () => {

  const [courses , setCourses] =useState([])
  useEffect(() =>{
    axios.get("api")
    .then((response) =>{
       setCourses(response.data)
    })
   
  },[])

  return (
    <div className="destination">
      <h1>Popular Courses</h1>
      <h1>Courses give you the opportunity</h1>
        {courses.map((course)=>{
          return(
            <div key={course.id}>
               <p>name{course.decription}</p> 
               <div className="first-des">
        {/* description of the courses */}
        <div className="des-text">
        {/* the title */}
         <h2>Computer Science </h2>
         {/* the description of the course goes in the <p></p> */}
        <p></p>
      </div>
      {/* course images */}
        <div className="image">
        <img alt="courseImage1" src="/"/>
       
          
       </div>

      </div>
               <img alt="courseImage2" src={course.image}/>
            </div>
          )
        })}
     

    </div>
  );
};

export default Destination;
