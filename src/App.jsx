import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services"; // Import the Services component
import BenefitsTestimonials from "./components/BenefitsTestimonials"; // ✅ Missing import added
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      
      <div id="services">
        <Services />
      </div>
      {/* <Services /> Services component */}
      <BenefitsTestimonials /> {/* Now correctly imported */}
      <CTA />
      {/* <Footer /> */}
      
      <div id="footer">
      <Footer />
      </div>
    </div>
  );
}

export default App;
