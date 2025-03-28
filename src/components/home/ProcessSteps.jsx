import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../../i18n";
import "../../assets/styles/steps.css"; // Importar los estilos

const ProcessSteps = () => {
  const { t } = useTranslation();
  const steps = [
    { step: t("step1"), description: t("description1") },
    { step: t("step2"), description: t("description2") },
    { step: t("step3"), description: t("description3") },
    { step: t("step4"), description: t("description4") },
  ];

  const titleAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stepAnimation = (index) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      },
    },
  });

  const iconAnimation = {
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.95 },
  };

  return (
    <section className="py-16 bg-gray-100 text-black">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-semibold mb-12 text-black"
          initial="hidden"
          animate="visible"
          variants={titleAnimation}
        >
          {t("process_title")}
        </motion.h2>

        <div className="steps-container relative flex flex-col md:flex-row items-center md:items-start justify-center space-y-12 md:space-y-0 md:space-x-12">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="step-card relative flex flex-col items-center text-center md:w-1/4 px-4"
              initial="hidden"
              animate="visible"
              variants={stepAnimation(index)}
              whileHover={{ y: -5 }}
            >
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-full w-16 h-1 bg-yellow-500"></div>
              )}

              <motion.div
                className="step-icon w-14 h-14 flex items-center justify-center bg-yellow-600 text-white rounded-full shadow-lg mb-4"
                variants={iconAnimation}
                whileHover="hover"
                whileTap="tap"
              >
                <FaCheckCircle size={30} />
              </motion.div>

              <div className="flex flex-col items-center">
                <h3 className="step-title text-lg font-semibold mb-2 text-black">{item.step}</h3>
                <p className="step-description text-sm text-gray-700 leading-relaxed">{item.description}</p>
              </div>

              <div className="step-number absolute -top-2 -right-2 bg-yellow-700 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
