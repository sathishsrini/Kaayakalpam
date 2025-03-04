import React from "react";
import { motion } from "framer-motion";

// Importing images for offerings
import treatmentImg from "../assets/ayurveda.png";
import herbalImg from "../assets/Herbal.webp";
import wellnessImg from "../assets/plan.png";

// Offerings data
const Servicesdata = [
  {
    id: 1,
    name: "Ayurvedic Treatments",
    description: "Experience the healing power of Ayurveda with our personalized therapies.",
    image: treatmentImg,
  },
  {
    id: 2,
    name: "Herbal Products",
    description: "Natural, chemical-free herbal products for a healthier lifestyle.",
    image: herbalImg,
  },
  {
    id: 3,
    name: "Holistic Wellness Plans",
    description: "Customized wellness programs blending Ayurveda and modern science.",
    image: wellnessImg,
  },
];

const Services = () => {
  return (
    <div className="py-16 px-4 lg:px-16 bg-[#1B3B2B] text-white">
      {/* Title */}
      <h2
        className="text-3xl lg:text-4xl text-center font-bold mb-12"
        style={{ fontFamily: "'Big Shoulders', sans-serif" }}
      >
        Our Offerings
      </h2>

      {/* Offerings Cards in Horizontal Layout */}
      <div className="flex flex-wrap justify-center gap-8">
        {Servicesdata.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="bg-[#2E5A43] rounded-xl overflow-hidden shadow-lg w-full sm:w-[45%] lg:w-[30%] max-w-sm hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#F4E06D] mb-2">{item.name}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;