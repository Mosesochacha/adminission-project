import Destination from "./Destination";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid "
        heroImg="https://images.unsplash.com/photo-1478104718532-efe04cc3ff7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" title="Courses"

        btnClass="hide"

      />
      <Destination />
      <Footer />
    </>
  );
}

export default Service;
