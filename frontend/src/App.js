/* eslint-disable no-unused-vars */
import "./styles.css";
import { BrowserRouter, Route, } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Navbar from "./components/Navbar";
import TeacherList from "./components/Teachers/TeacherList";
import CreateTeacherForm from "./components/Teachers/CreateTeacher";
// import UpdateTeacherForm from "./components/Teachers/UpdateTeachers";
// import DeleteTeacher from "./components/Teachers/DeleteTeacher";



export default function App() {
  return (
    <div className="App">
      <BrowserRouter>

        {/* Navbar */}

        <Route exact path="/">
          <Navbar />
        </Route>

        {/* Home */}

        <Route exact path="/home">
          <Home />
        </Route>

        {/*about */}

        <Route exact path="/about">
          <About />
        </Route>

        {/* services */}

        <Route exact path="/services">
          <Service />
        </Route>

        {/* contact us */}

        <Route exact path="/contact us">
          <Contact/>
        </Route>

        <Route exact path="/teachers">
          <TeacherList />
        </Route>

        <Route exact path="/teachers/create">
          <CreateTeacherForm />
        </Route>

        {/* <Route exact path="/teachers/:id" component={UpdateTeacherForm} /> */}

        {/* <Route exact path="/teachers/:id/delete">
          <DeleteTeacher />
        </Route> */}


      </BrowserRouter>

    </div>
  );
}
