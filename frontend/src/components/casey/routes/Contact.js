/* eslint-disable no-unused-vars */
import Hero from "./Hero";
import Navbar from "./Navbar";
 import Footer from "./Footer"
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero-mid "
        heroImg="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" title="Contacts" 
        
        // btnClass="hide"

        />
    </>
  );
}

export default Contact;
