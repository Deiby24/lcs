import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../i18n";
import "../../assets/styles/serviceHome.css"; // Importar los estilos
import { Link } from "react-router-dom";

const ServicesSummary = () => {
  const { t } = useTranslation();
  const services = [
    { 
      number: "01", 
      title: t("title_visa"),
      description: t("description_visa")
    },
    { 
      number: "02",
      title: t("title_Residency"),
      description: t("description_Residency")
    },
    { 
      number: "03",
      title: t("title_Citizenship"),
      description: t("description_Citizenship")
    },
    { 
      number: "04",
      title: t("title_Immigration"),
      description: t("description_Immigration"),
    },
  ];

  return (
    <motion.section 
      className="py-20 text-center bg-gray-100 text-gray-900"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2 
        className="text-4xl font-bold text-gray-800 mb-6 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("services_title")}
      </motion.h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
        {t("services_description")}
      </p>

      <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="service-card p-8 bg-white shadow-lg rounded-2xl border border-gray-200 transition-all transform hover:shadow-xl hover:border-yellow-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-4xl font-bold text-yellow-600">{service.number}.</span>
            <h3 className="service-title text-2xl font-semibold text-gray-800 mt-3 mb-4">
              {service.title}
            </h3>
            <p className="service-description text-gray-600 text-md leading-relaxed">
              {service.description}
            </p>
            <Link 
              to="/Services" 
              className="service-button mt-6 inline-block text-yellow-600 font-semibold text-md hover:underline hover:text-yellow-700 transition-all"
            >
              Leer más →
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ServicesSummary;
