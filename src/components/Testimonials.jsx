import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import juanImage from "../assets/images/juan.jpg";
import mariaImage from "../assets/images/maria.jpg";
import carlosImage from "../assets/images/juan.jpg";
import { useTranslation } from "react-i18next"; // Importar i18next
import "../i18n";




const Testimonials = () => {
  const { t } = useTranslation();
  const reviews = [
    { 
      id: "01", 
      name: "Juan Pérez", 
      comment: t('testimonials.review1'), 
      image: juanImage,
      rating: 5,
      date: "15/01/2024"
    },
    { 
      id: "02", 
      name: "María Gómez", 
      comment: t('testimonials.review2'), 
      image: mariaImage,
      rating: 5,
      date: "03/03/2024"
    },
    { 
      id: "03", 
      name: "Carlos Rodríguez", 
      comment: t('testimonials.review3'), 
      image: carlosImage,
      rating: 4,
      date: "28/02/2025"
    },
  ];
  return (
    <section className="py-16 bg-gray-100 text-gray-900" id="testimonios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="absolute -top-5 -left-5 bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                {review.id}
              </div>
              
              <div className="flex items-center mb-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400 shadow-sm" 
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">{review.name}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`text-sm ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <FaQuoteLeft className="text-yellow-400 text-xl opacity-20 mb-3" />
              
              <p className="text-gray-700 mb-5 leading-relaxed">"{review.comment}"</p>
              
              <p className="text-sm text-gray-500">{review.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;