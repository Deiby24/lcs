import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import juanImage from "../assets/images/juan.jpg";
import mariaImage from "../assets/images/maria.jpg";

const reviews = [
  { id: "01", name: "Juan Pérez", comment: "Gracias a su ayuda, pude obtener mi residencia en tiempo récord.",image: juanImage },
{ id: "02", name: "María Gómez", comment: "Un equipo confiable y profesional. ¡Los recomiendo al 100%!", image: mariaImage },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-semibold mb-10 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Testimonios
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              
              <span className="text-lg font-bold text-yellow-600 absolute top-4 left-4">{review.id}.</span>
              
              <FaQuoteLeft className="text-yellow-500 text-3xl opacity-30 mb-4" />

              <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-16 h-16 rounded-full mb-4 border-2 border-yellow-500 justify-self-center" 
                />

              <p className="text-lg italic text-gray-700">"{review.comment}"</p>
              <p className="text-gray-800 font-semibold mt-4">- {review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
