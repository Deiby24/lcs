import React from "react";
import { motion } from "framer-motion";

const services = [
  { number: "01", title: "Visas de Trabajo", description: "Te ayudamos a obtener la visa laboral que necesitas." },
  { number: "02", title: "Residencia Permanente", description: "Asesoría para conseguir tu residencia legalmente." },
  { number: "03", title: "Ciudadanía", description: "Te guiamos en el proceso de naturalización." },
  { number: "04", title: "Defensa Migratoria", description: "Protegemos tus derechos en casos de deportación." },
];

const ServicesSummary = () => {
  return (
    <motion.section 
      className="py-20 text-center bg-gradient-to-b from-gray-100 to-gray-200"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Título */}
      <motion.h2 
        className="text-4xl font-semibold text-gray-800 mb-6 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Nuestros Servicios
      </motion.h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
        Soluciones legales para visas, residencia y ciudadanía con asesoría experta.
      </p>

      {/* Tarjetas de Servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="p-8 bg-white shadow-md rounded-lg border border-gray-200 transition-all transform hover:shadow-lg hover:border-yellow-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-3xl font-semibold text-yellow-600">{service.number}.</span>
            <h3 className="text-xl font-medium text-gray-800 mt-2 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
            <a href="#" className="mt-4 inline-block text-yellow-600 font-medium text-sm hover:underline">
              Leer más →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ServicesSummary;
