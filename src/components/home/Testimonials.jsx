import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import juanImage from "../../assets/images/juan.jpg";
import mariaImage from "../../assets/images/maria.jpg";
import carlosImage from "../../assets/images/juan.jpg";
import { useTranslation } from "react-i18next";
import "../../i18n";
import "../../assets/styles/testimonial.css"; // Importar los estilos

const Testimonials = () => {
  const { t } = useTranslation();
  const reviews = [
    { 
      id: "01", 
      name: "Juan Pérez", 
      comment: t("testimonials.review1"), 
      image: juanImage,
      rating: 5,
      date: "15/01/2024"
    },
    { 
      id: "02", 
      name: "María Gómez", 
      comment: t("testimonials.review2"), 
      image: mariaImage,
      rating: 5,
      date: "03/03/2024"
    },
    { 
      id: "03", 
      name: "Carlos Rodríguez", 
      comment: t("testimonials.review3"), 
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
            {t("testimonials.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="testimonial-card relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Número destacado */}
              <div className="testimonial-number absolute -top-6 -left-6 bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                {review.id}
              </div>
              
              {/* Imagen y nombre */}
              <div className="flex items-center mb-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="testimonial-image w-16 h-16 rounded-full object-cover border-2 border-yellow-500 shadow-md" 
                />
                <div className="ml-4">
                  <h3 className="testimonial-name font-semibold text-gray-800 text-lg">{review.name}</h3>
                  <div className="flex items-center mt-1 space-x-1 testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`text-lg ${i < review.rating ? "text-yellow-500" : "text-gray-300"}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Comillas más grandes */}
              <FaQuoteLeft className="text-yellow-500 text-3xl opacity-40 mb-3" />
              
              {/* Comentario */}
              <p className="testimonial-comment text-gray-700 mb-5 leading-relaxed text-lg">"{review.comment}"</p>
              
              {/* Fecha con color más tenue */}
              <p className="testimonial-date text-sm text-gray-400">{review.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
