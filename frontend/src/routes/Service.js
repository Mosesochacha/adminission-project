/* eslint-disable no-unused-vars */
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero-mid "
        heroImg="https://images.unsplash.com/photo-1478104718532-efe04cc3ff7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" title="Courses" 
        
        // btnClass="hide"

        />
    </>
  );
}

export default Service;
