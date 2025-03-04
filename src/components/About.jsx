import React from "react";
import { motion } from "framer-motion";
import pot from "../assets/pot.png";
import AboutBg from "../assets/bg.webp";

const About = () => {
  return (
    <div
      className="relative h-screen flex flex-col lg:flex-row items-center justify-center text-center lg:text-left 
      text-white bg-cover bg-center bg-no-repeat px-8 lg:px-10 py-10"
      style={{ backgroundImage: `url(${AboutBg})`, fontFamily: "'Kurale', serif" }} // ✅ Using Kurale for body text
    >
      {/* Pot Image - Moves from Right to Left with Delayed Effect */}
      <motion.img
        src={pot}
        alt="Ayurvedic Pot"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="w-3/4 lg:w-1/2 h-auto max-w-md"
      />

      {/* Text Content - Moves from Left to Right with a Fade-In Effect */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="lg:w-1/2 lg:pl-12"
      >
        <p
          className="text-[#a7952a] text-lg lg:text-xl leading-relaxed stroke-text" // Added stroke-text class
          style={{ fontFamily: "'Big Shoulders', sans-serif" }} // ✅ Heading Font
        >
          <b className="text-[#F2A154]">Kaayakalpam</b> believes in the power of nature to heal, restore, and rejuvenate.
          Rooted in the ancient wisdom of Ayurveda and holistic wellness, our mission is to
          bring balance to your body, mind, and soul.
          <br />
          <br />
          We offer <b className="text-[#aa8f70]">authentic Ayurvedic treatments, herbal products</b>, and personalized wellness
          solutions designed to enhance your well-being naturally. Our approach blends traditional
          healing practices with modern insights, ensuring a holistic and sustainable path to health.
          <br />
          <br />
          <b className="text-[#E27D60]">Join us</b> on this journey towards inner harmony and vitality—because true wellness starts
          from within.
        </p>
      </motion.div>
    </div>
  );
};

export default About;