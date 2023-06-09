import Hero from "./Hero";
import Footer from "./Footer";
import AboutUs from "./AboutUs";

function About() {
  return (
    <>
    {/*https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80  */}
      <Hero 
        cName="hero-mid "
        heroImg="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" title="About" 
         
         btnClass="hide"

        />
       <AboutUs/>
       <Footer />
    </>
  );
}

export default About;
