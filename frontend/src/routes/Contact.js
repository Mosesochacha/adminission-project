/* eslint-disable no-unused-vars */
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
 import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
    <h1>Hello</h1>
      <Navbar />
      <Hero 
        cName="hero-mid "
        heroImg="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" title="Contacts" btnClass="hide"/>
    </>
  );
}

export default Contact;
