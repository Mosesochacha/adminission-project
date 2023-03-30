import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/12.jpeg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
    {/*https://images.unsplash.com/photo-1599725427295-6ed79ff8dbef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80  */}
       <Navbar />
      <Hero 
        cName="hero-mid "
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
      />
    </>
  );
}

export default About;
