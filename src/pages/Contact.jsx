import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle, FaUser } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="font-sans bg-gray-50">
      <section className="relative h-96 bg-blue-900 text-white overflow-hidden hro">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            {t('contact_pages.hero.title')}
          </h1>
          <p className="text-xl text-white md:text-2xl mt-4 drop-shadow-md">
            {t('contact_pages.hero.subtitle')}
          </p>
        </motion.div>
      </div>
    </section>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(500px,500px)_1fr] gap-10">
          {/* Contact Info - Columna izquierda con tamaños fijos */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="self-start lg:sticky lg:top-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full border-2 border-yellow-400">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-yellow-400 whitespace-nowrap overflow-hidden text-ellipsis">
                {t('contact_pages.info.title')}
              </h2>
              
              <div className="space-y-6">
                {/* Dirección */}
                <div className="flex items-start min-h-[90px]">
                  <div className="text-yellow-500 mt-1 mr-5 flex-shrink-0">
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>
                  <div className="min-w-[200px] max-w-[280px]">
                    <h3 className="font-semibold text-gray-900 text-lg md:text-xl mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                      {t('contact_pages.info.addressTitle')}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg line-clamp-3" dangerouslySetInnerHTML={{ __html: t('contact_pages.info.address') }}>
                      
                    </p>
                  </div>
                </div>
                
                {/* Teléfono */}
                <div className="flex items-start min-h-[90px]">
                  <div className="text-yellow-500 mt-1 mr-5 flex-shrink-0">
                    <FaPhone className="text-2xl" />
                  </div>
                  <div className="min-w-[200px] max-w-[280px]">
                    <h3 className="font-semibold text-gray-900 text-lg md:text-xl mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                      {t('contact_pages.info.phoneTitle')}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg hover:text-yellow-600 transition duration-300 cursor-pointer line-clamp-2" dangerouslySetInnerHTML={{ __html: t('contact_pages.info.phone') }}>
                      
                    </p>
                  </div>
                </div>
                
                {/* Correo */}
                <div className="flex items-start min-h-[90px]">
                  <div className="text-yellow-500 mt-1 mr-5 flex-shrink-0">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <div className="min-w-[200px] max-w-[280px]">
                    <h3 className="font-semibold text-gray-900 text-lg md:text-xl mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                      {t('contact_pages.info.emailTitle')}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg hover:text-yellow-600 transition duration-300 cursor-pointer line-clamp-2" dangerouslySetInnerHTML={{ __html: t('contact_pages.info.email') }}>
                     
                    </p>
                  </div>
                </div>
                
                {/* Horario */}
                <div className="flex items-start min-h-[90px]">
                  <div className="text-yellow-500 mt-1 mr-5 flex-shrink-0">
                    <FaClock className="text-2xl" />
                  </div>
                  <div className="min-w-[200px] max-w-[280px]">
                    <h3 className="font-semibold text-gray-900 text-lg md:text-xl mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                      {t('contact_pages.info.hoursTitle')}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg line-clamp-3"  dangerouslySetInnerHTML={{ __html: t('contact_pages.info.hours') }}>
                      
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Contacto de emergencia */}
              <div className="mt-8 bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400">
                <h3 className="font-semibold text-gray-900 text-lg mb-3 line-clamp-2">
                  {t('contact_pages.info.emergencyTitle')}
                </h3>
                <p className="text-gray-700 text-base line-clamp-3" dangerouslySetInnerHTML={{ __html: t('contact_pages.info.emergencyText') }}>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Columna derecha con tamaños controlados */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-yellow-100 rounded-xl shadow-xl p-8 sm:p-10 border-2 border-yellow-300">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-8 whitespace-nowrap overflow-hidden text-ellipsis">
                {t("contact_pages.form.title")}
              </h2>
              
              {submitted ? (
                <motion.div
                  className="bg-green-50 border-2 border-green-300 rounded-lg p-8 text-center shadow-md"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <FaCheckCircle className="text-green-600 text-5xl mx-auto mb-6" />
                  <h3 className="text-xl md:text-2xl font-semibold text-green-800 mb-4 line-clamp-2">
                    {t("contact_pages.form.successTitle")}
                  </h3>
                  <p className="text-gray-700 text-lg line-clamp-3">
                    {t("contact_pages.form.successMessage")}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="min-w-[250px]">
                      <label htmlFor="name" className="block text-yellow-900 font-medium mb-3 text-lg whitespace-nowrap overflow-hidden text-ellipsis">
                        {t("contact_pages.form.nameLabel")} *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-4 top-4 text-yellow-700 text-xl" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border-2 border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition bg-yellow-50 text-lg"
                          required
                        />
                      </div>
                    </div>
                    <div className="min-w-[250px]">
                      <label htmlFor="email" className="block text-yellow-900 font-medium mb-3 text-lg whitespace-nowrap overflow-hidden text-ellipsis">
                        {t("contact_pages.form.emailLabel")} *
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-4 top-4 text-yellow-700 text-xl" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border-2 border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition bg-yellow-50 text-lg"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="min-w-[250px]">
                    <label htmlFor="phone" className="block text-yellow-900 font-medium mb-3 text-lg whitespace-nowrap overflow-hidden text-ellipsis">
                      {t("contact_pages.form.phoneLabel")} *
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-4 top-4 text-yellow-700 text-xl" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition bg-yellow-50 text-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="min-w-full">
                    <label htmlFor="message" className="block text-yellow-900 font-medium mb-3 text-lg whitespace-nowrap overflow-hidden text-ellipsis">
                      {t("contact_pages.form.messageLabel")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-[200px] px-4 py-3 border-2 border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition bg-yellow-50 text-lg"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold text-xl rounded-lg transition duration-300 shadow-md whitespace-nowrap"
                  >
                    {t("contact_pages.form.submitButton")}
                  </button>
                </form>
              )}
            </div>
            
            {/* Mapa */}
            <div className="mt-10 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-200">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 p-6 border-b-2 whitespace-nowrap overflow-hidden text-ellipsis">
                {t('contact_pages.map.title')}
              </h2>
              <iframe
                title={t('contact_pages.map.title')}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.9878449242398!3d40.74844097138986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689879321413!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[400px]"
              ></iframe>
              <div className="p-6 bg-gray-100 text-center">
                <a 
                  href="https://goo.gl/maps/2v5y3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 text-lg whitespace-nowrap"
                >
                  {t('contact_pages.map.button')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;