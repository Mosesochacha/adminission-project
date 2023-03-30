/* eslint-disable no-unused-vars */
import "./styles.css";
import { BrowserRouter, Route, } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Registration from "./app/components/forminput/Registration";

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

        <Route exact path="/contact us">
          <Contact />
        </Route>

        <Route exact path="/Signup">
          <Registration />
        </Route>

      </BrowserRouter>

    </div>
  );
}
