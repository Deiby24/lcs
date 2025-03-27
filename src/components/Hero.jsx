import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../assets/styles/hero.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Importar i18next
import "../i18n";


// Ejemplo de hero con fondo oscuro y acentos dorados
const Hero = () => {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <section className="relative h-screen bg-black bg-opacity-50  text-white overflow-hidden hro">
      <div
        className="hero absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }} // Efecto parallax
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <motion.div
          className="max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("hero_title")} 
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t("hero_subtitle")}
          </motion.p>

          <motion.button
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={() => navigate("/appointment")}
          >
            {t("hero_button")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;