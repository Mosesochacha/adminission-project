import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1613896527026-f195d5c818ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        title="Start your journey with Us"
        text="Choose the best way to start your journey"
        buttonText="Start your journey"
        url="/"
        btnClass="show"
      />
      <Footer />
    </>
  );
}

export default Home;
