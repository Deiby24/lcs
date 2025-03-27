import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import serviceBG from '../assets/images/serviceBG.jpg';

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
    : serviceItems.filter(service => service.title.toLowerCase().includes(activeTab));

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
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-800 px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:bg-blue-100 transition duration-300"
              >
                {t('services.hero.cta')}
              </Link>
            </motion.div>
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
      <section className="py-6 sm:py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-base font-medium ${activeTab === "all" ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
            >
              {t('services.filter.all')}
            </button>
            <button
              onClick={() => setActiveTab("citizenship")}
              className={`px-4 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-base font-medium ${activeTab === "citizenship" ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
            >
              {t('services.filter.citizenship')}
            </button>
            <button
              onClick={() => setActiveTab("employment")}
              className={`px-4 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-base font-medium ${activeTab === "employment" ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
            >
              {t('services.filter.employment')}
            </button>
            <button
              onClick={() => setActiveTab("green")}
              className={`px-4 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-base font-medium ${activeTab === "green" ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
            >
              {t('services.filter.greenCard')}
            </button>
            <button
              onClick={() => setActiveTab("visa")}
              className={`px-4 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-base font-medium ${activeTab === "visa" ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
            >
              {t('services.filter.visas')}
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            {t('services.servicesTitle')}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                className={`p-4 sm:p-6 rounded-xl shadow-md flex flex-col bg-opacity-50 border-t-4 hover:shadow-lg transition-all`}
                style={{ 
                  backgroundColor: index % 2 === 0 ? 'rgba(219, 234, 254, 0.5)' : 'rgba(209, 250, 229, 0.5)',
                  borderColor: index % 2 === 0 ? '#3b82f6' : '#10b981'
                }}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 p-2 sm:p-3 rounded-full bg-white w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center shadow-sm">
                  {service.icon || "📋"}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">{service.description}</p>
                <div className="text-xs sm:text-sm font-medium text-blue-600">{service.form}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-12 sm:py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 sm:mb-6">
              {t('services.whyChooseUs.title')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-700">
              {t('services.whyChooseUs.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {t('services.whyChooseUs.items', { returnObjects: true }).map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-md text-center"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-blue-600">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </motion.div>
            ))}
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
            
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-inner">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
                {t('services.forms.commonForms')}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {t('services.forms.formItems', { returnObjects: true }).map((form, index) => (
                  <div 
                    key={index}
                    className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-blue-400 transition"
                  >
                    <h4 className="font-medium text-sm sm:text-base text-blue-600">{form.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{form.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 sm:mt-8 text-center">
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold shadow-md hover:bg-blue-700 transition"
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
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            {t('services.cta.title')}
          </h2>
          <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
            {t('services.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
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