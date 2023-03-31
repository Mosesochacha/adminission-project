/* eslint-disable no-unused-vars */
import "./styles.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

import Login from "./app/components/user/Login"
import Register from "./app/components/user/Register";
import StudentRegistration from "./app/components/forminput/StudentRegistration";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>

        {/* Home */}
        <Route exact path="/" >
          <Home />
        </Route>

        <Route exact path="/home" >
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

        <Route exact path="/contacts">
          <Contact />
        </Route>

        <Route exact path="/course">
          <Service />
        </Route> 
        {/* closing tag added */}

        <Route exact path="/Signup">
          <Register />
        </Route>

        {/* Login */}
        <Route exact path="/Login">
          <Login />
        </Route>

        {/* Register */}
        <Route exact path="/Register">
          <Register />
        </Route>

      </BrowserRouter>


    </div>
  );
}
