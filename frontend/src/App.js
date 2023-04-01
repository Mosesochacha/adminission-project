import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/casey/routes/Home"
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


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/course" component={Service} />
          <Route exact path="/contacts" component={Contact} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/allstudent" component={AllStudents} />
          <Route exact path="/portal" component={StudentPortal}/>
          <Route exact path="/students" component={Students}/>
          <Route exact path="/teachers" component={TeacherList}/>
          <Route exact path="/teachers/create" component={CreateTeacherForm} />
          <Route component={Loading} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
