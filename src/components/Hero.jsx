import React from "react";
import { motion } from "framer-motion";
import Herobg from "../assets/Herobg.png";
import yoga from "../assets/mm.png";

const Hero = () => {
  return (
    <div
      className="relative h-screen flex flex-col lg:flex-row items-center justify-center text-center lg:text-left text-white bg-cover bg-center bg-no-repeat px-16 py-15 overflow-hidden"
      style={{ backgroundImage: `url(${Herobg})` }}
    >
      {/* Diagonal Background Animation */}
      <motion.div
        initial={{ rotate: -45, scale: 1.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 bg-[#2E5A43] transform origin-bottom-right"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)" }}
      ></motion.div>

      {/* Hero Text - Moves from Left to Right */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3 }}
        className="lg:w-1/2 relative z-10"
      >
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
          Nurture Your Mind, <br />
          Body, and Soul <br /> –– <br />
          <span className="text-green-950">Embrace the Journey <br />to Wellness.</span>
        </h1>
      </motion.div>

      {/* Yoga Image - Moves from Right to Left */}
      <motion.img
        src={yoga}
        alt="Yoga Pose"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3 }}
        className="w-1/2 h-auto relative z-10"
      />
    </div>
  );
};

export default Hero;
