import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
       <Navbar />
      <Hero 
        cName=""
        heroImg="https://images.unsplash.com/photo-1599725427295-6ed79ff8dbef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Start your journey with Us"
        text="Choose the best way to start your journey"
        buttonText="Start your journey"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default About;
