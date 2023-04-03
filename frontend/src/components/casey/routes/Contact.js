/* eslint-disable no-unused-vars */
import Hero from "./Hero";
import Footer from "./Footer"
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      
      <Hero
        cName="hero-mid "
        heroImg="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" title="Contacts"

        btnClass="hide"

      />
      <ContactForm />

      <Footer />
    </>
  );
}

export default Contact;
