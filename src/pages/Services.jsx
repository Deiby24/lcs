import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import serviceBG from '../assets/images/serviceBG.jpg';
import "../i18n";
import "../assets/styles/servicesPages.css";

const Services = () => {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState("all");


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const serviceItems = t('services.serviceItems', { returnObjects: true });
  const filteredServices = activeTab === "all"
  ? serviceItems
  : serviceItems.filter(service => 
      service.title.toLocaleLowerCase().includes(t(`services.filter.${activeTab}`).toLocaleLowerCase())
    );


  return (
    <div className="font-sans">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] sm:h-[500px] bg-blue-900 text-white overflow-hidden hro">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ 
            backgroundImage: `url(${serviceBG})`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r opacity-90" />

        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
          <motion.div
            className="max-w-4xl w-full text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('services.hero.title')}
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto text-gray-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('services.hero.subtitle')}
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors"
              >
                {t('services.hero.cta')}
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              {t('services.intro.title')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {t('services.intro.description')}
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES FILTER */}
{/* SERVICES FILTER */}
<section className="py-6 sm:py-8 bg-gradient-to-b from-yellow-50 to-white">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
      {Object.entries(t("services.filter", { returnObjects: true })).map(([key, label]) => (
        <button
          key={key}
          onClick={() => setActiveTab(key)}
          className={`px-4 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-base font-medium transition-all shadow-md
            ${activeTab === key ? "bg-yellow-600 text-white" : "bg-white text-gray-700 border border-yellow-400 hover:bg-yellow-500 hover:text-white"}`}
        >
          {label}
        </button>
      ))}
    </div>
  </div>
</section>

{/* SERVICES SECTION */}
<section className="py-12 sm:py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="flex flex-col sm:flex-row">
      <h2 className="services-title text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-0 sm:mr-6">
        {t("services.servicesTitle")}
      </h2>
      
      <div className="flex flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {filteredServices.map((service, index) => (
          <motion.div
            key={index}
            className="service-card p-5 sm:p-6 rounded-xl shadow-lg flex flex-col bg-opacity-50 border-t-4 hover:shadow-2xl transition-all border-yellow-500"
            style={{ backgroundColor: "rgba(243, 203, 115, 0.24)" }}
            whileHover={{ y: -8, scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl sm:text-5xl mb-4 p-3 rounded-full bg-white w-16 h-16 flex items-center justify-center shadow-lg border border-yellow-500">
              {service.icon || "📋"}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 flex-grow">
              {service.description}
            </p>
            <a href="#" className="text-sm font-medium text-yellow-600 hover:underline hover:text-yellow-700">
              {service.form}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>


{/* WHY CHOOSE US SECTION */}
<section className="py-16 bg-gradient-to-b from-yellow-50 to-white">
  <div className="container mx-auto px-6 lg:px-8">
    <div className="flex flex-col sm:flex-row">
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-0 sm:mr-6">
        <h2 className="title-section text-4xl font-extrabold text-yellow-800 mb-4">
          {t("services.whyChooseUs.title")}
        </h2>
        <p className="text-lg text-gray-700">
          {t("services.whyChooseUs.subtitle")}
        </p>
      </div>

      <div className="flex flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {t("services.whyChooseUs.items", { returnObjects: true }).map((item, index) => (
          <motion.div
            key={index}
            className="service-card bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-yellow-500 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto flex items-center justify-center mb-4 rounded-full bg-yellow-100 text-yellow-600 shadow-inner">
              <span className="text-5xl">{item.icon}</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {item.title}
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>



      {/* FORM SELECTOR SECTION */}
      <section className="py-12 sm:py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
        {t('services.forms.title')}
      </h2>
      <p className="text-lg sm:text-xl text-center text-gray-600 mb-8 sm:mb-12">
        {t('services.forms.subtitle')}
      </p>

      <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
          {t('services.forms.commonForms')}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {t('services.forms.formItems', { returnObjects: true }).map((form, index) => (
            <div 
              key={index}
              className="bg-white p-4 sm:p-5 rounded-lg border border-gray-200 shadow-sm 
                         hover:border-[#D4A017] hover:shadow-md transition-all duration-300"
            >
              <h4 className="font-semibold text-sm sm:text-base text-[#D4A017]">{form.name}</h4>
              <p className="text-xs sm:text-sm text-gray-600">{form.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <Link
            to="/contact"
            className="inline-block bg-[#D4A017] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg 
                       text-base sm:text-lg font-semibold shadow-md hover:brightness-110 transition-all"
          >
            {t('services.forms.cta')}
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* FINAL CTA SECTION */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-yellow-800 to-yellow-600 text-white">
  <div className="container mx-auto px-4 sm:px-6 text-center flex flex-col sm:flex-row justify-between h-full">
    <div className="flex-grow sm:flex-grow-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
        {t('services.cta.title')}
      </h2>
      <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
        {t('services.cta.subtitle')}
      </p>
    </div>
    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-auto sm:mt-0">
      <Link
        to="/contact"
        className="bg-white text-blue-800 px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:bg-blue-100 transition"
      >
        {t('services.cta.buttons.0')}
      </Link>
      <Link
        to="/services"
        className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-blue-800 transition"
      >
        {t('services.cta.buttons.1')}
      </Link>
    </div>
  </div>
</section>

    </div>
  );
};

export default Services;