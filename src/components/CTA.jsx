import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  // Scroll to Footer when "Contact Us" is clicked
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to Services when "Explore Our Products" is clicked
  const scrollToServices = () => {
    const services = document.getElementById("services");
    if (services) {
      services.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#1B3B2B] text-white py-16 px-8 lg:px-16 relative overflow-hidden">
      {/* Diagonal Background Animation */}
      <motion.div
        initial={{ rotate: -45, scale: 1.5, opacity: 0 }}
        whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 bg-[#2E5A43] transform origin-bottom-right"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)" }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl lg:text-5xl font-bold mb-4"
          style={{ fontFamily: "'Big Shoulders', sans-serif" }}
        >
          🌿 Start Your Wellness Journey Today!
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg lg:text-xl text-gray-300 mb-8"
        >
          Experience the power of Ayurveda and holistic healing with our expert-curated treatments and herbal products. Take the first step towards a healthier, balanced life.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button className="bg-[#F4E06D] text-[#1B3B2B] px-6 py-3 rounded-lg font-semibold hover:bg-[#E27D60] transition-colors duration-300">
            Book a Consultation
          </button>
          <button
            onClick={scrollToServices}
            className="bg-[#E27D60] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#F4E06D] hover:text-[#1B3B2B] transition-colors duration-300"
          >
            Explore Our Products
          </button>
          <button
            onClick={scrollToFooter}
            className="bg-transparent border-2 border-[#F4E06D] text-[#F4E06D] px-6 py-3 rounded-lg font-semibold hover:bg-[#F4E06D] hover:text-[#1B3B2B] transition-colors duration-300"
          >
            Contact Us
          </button>
        </motion.div>

        {/* Form Fields */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-[#2E5A43] p-8 rounded-lg text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-lg bg-[#1B3B2B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4E06D]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-[#1B3B2B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4E06D]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg bg-[#1B3B2B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4E06D]"
            />
          </div>
          <textarea
            placeholder="Message/Query"
            rows="4"
            className="w-full p-3 rounded-lg bg-[#1B3B2B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4E06D] mb-6"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#F4E06D] text-[#1B3B2B] px-6 py-3 rounded-lg font-semibold hover:bg-[#E27D60] transition-colors duration-300"
          >
            Submit
          </button>
        </motion.form>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <span className="text-sm text-gray-300">✅ 100% Natural</span>
          <span className="text-sm text-gray-300">✅ Certified Ayurveda Experts</span>
          <span className="text-sm text-gray-300">✅ Trusted by Thousands</span>
        </motion.div>
      </div>
    </div>
  );
};

export default CTA;
