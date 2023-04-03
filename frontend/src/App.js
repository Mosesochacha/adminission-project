import React from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Home from "./components/casey/routes/Home";
import About from "./components/casey/routes/About";
import Service from "./components/casey/routes/Service";
import Contact from "./components/casey/routes/Contact";
import Loading from "./components/loading/loader";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import AllStudents from "./components/studentportal/Allstudents";
import StudentPortal from "./components/studentportal/StudentPortal";
import Students from "./components/forminput/Students";
import TeacherList from "./components/Teachers/TeacherList";
import CreateTeacherForm from "./components/Teachers/CreateTeacher";
import ResetPassword from "./components/user/resetpassword";
import AdminPlatform from "./components/admissionsteam/amissionplatform";
import NavbarHome from "./components/admissionsteam/Admissionnav";
import Navbar from "./components/casey/routes/Navbar";

function App() {
  const location = useLocation();
  const path = location.pathname;
  let navbar;
  if (path === "/allstudents" || path === "/students" || path === "/portal" || path === "/teachers" || path === "/teachers/create") {
    navbar = <NavbarHome />;
  } else {
    navbar = <Navbar />;
  }
  return (
    <div className="App">
      <Router>
        {navbar}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/course" component={Service} />
          <Route exact path="/contacts" component={Contact} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/allstudents" component={AllStudents} />
          <Route exact path="/portal" component={StudentPortal} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/teachers" component={TeacherList} />
          <Route exact path="/all" component={AdminPlatform} />
          <Route exact path="/teachers/create" component={CreateTeacherForm} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route component={Loading} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
