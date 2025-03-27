import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Importar i18next
import "../i18n";



const ProcessSteps = () => {
  const { t } = useTranslation();
  const steps = [
    { 
      step: t("step1"), 
      description: t("description1") 
    },
    { 
      step: t("step2"), 
      description:  t("description2") 
    },
    { 
      step: t("step3"), 
      description: t("description3")
    },
    { 
      step: t("step4"), 
      description: t("description4")
    },
  ];
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-semibold mb-12 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("process_title")}
        </motion.h2>

        {/* Línea de tiempo */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center space-y-8 md:space-y-0 md:space-x-10">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center md:w-1/4 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Línea de conexión */}
              

              {/* Ícono */}
              <div className="w-14 h-14 flex items-center justify-center bg-primary text-white rounded-full shadow-lg">
                <FaCheckCircle size={30} />
              </div>

              {/* Contenido */}
              <h3 className="text-lg font-semibold mt-4">{item.step}</h3>
              <p className="text-gray-300 text-sm mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
