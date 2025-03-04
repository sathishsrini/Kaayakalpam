import React from "react";
import { motion } from "framer-motion";

// Images for benefits
import naturalImg from "../assets/natural.avif";
import healingImg from "../assets/holistic.jpg";
import balanceImg from "../assets/care.avif";

// Customer testimonials
const testimonials = [
  {
    id: 1,
    name: "Ananya R.",
    feedback: "Kaayakalpam's Ayurvedic treatments helped me regain my energy and balance. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 2,
    name: "Rahul M.",
    feedback: "Their herbal products have transformed my skin health naturally. Love their authenticity!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Priya S.",
    feedback: "A holistic approach to wellness that truly works. My stress levels have reduced significantly.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

// Benefits data
const benefits = [
  {
    id: 1,
    title: "100% Natural Healing",
    description: "We use pure Ayurvedic ingredients with no chemicals or additives.",
    image: naturalImg,
  },
  {
    id: 2,
    title: "Holistic Wellness",
    description: "Our approach balances the mind, body, and soul for overall health.",
    image: healingImg,
  },
  {
    id: 3,
    title: "Personalized Care",
    description: "Tailored treatments designed to meet your unique health needs.",
    image: balanceImg,
  },
];

const BenefitsTestimonials = () => {
  return (
    <div className="py-16 px-8 lg:px-16 bg-[#F5F5DC] text-[#2E3A23]">
      {/* Section Title */}
      <h2
        className="text-3xl lg:text-4xl text-center font-bold mb-10"
        style={{ fontFamily: "'Big Shoulders', sans-serif" }}
      >
        Why Choose <span className="text-[#6B4226]">Kaayakalpam?</span>
      </h2>

      {/* Benefits Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {benefits.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg max-w-sm"
          >
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-[#6B4226]">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Section */}
      <h2
        className="text-3xl lg:text-4xl text-center font-bold mt-16 mb-10"
        style={{ fontFamily: "'Big Shoulders', sans-serif" }}
      >
        What Our <span className="text-[#6B4226]">Clients Say</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md max-w-md"
          >
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full object-cover" />
              <h3 className="text-lg font-semibold text-[#6B4226]">{item.name}</h3>
            </div>
            <p className="mt-4 text-gray-700 italic">"{item.feedback}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsTestimonials;
