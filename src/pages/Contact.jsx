import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle,FaUser } from "react-icons/fa";
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
      <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Info */}
        <motion.div 
          className="lg:w-1/3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-10 h-full border border-yellow-400">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-yellow-400 pb-2">
              {t('contact_pages.info.title')}
            </h2>
            
            <div className="space-y-8">
              {/** Dirección */}
              <div className="flex items-start">
                <div className="text-yellow-500 mt-1 mr-4">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{t('contact_pages.info.addressTitle')}</h3>
                  <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: t('contact_pages.info.address') }} />
                </div>
              </div>
              
              {/** Teléfono */}
              <div className="flex items-start">
                <div className="text-yellow-500 mt-1 mr-4">
                  <FaPhone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{t('contact_pages.info.phoneTitle')}</h3>
                  <p className="text-gray-700 hover:text-yellow-600 transition duration-300 cursor-pointer" 
                     dangerouslySetInnerHTML={{ __html: t('contact_pages.info.phone') }} />
                </div>
              </div>
              
              {/** Correo */}
              <div className="flex items-start">
                <div className="text-yellow-500 mt-1 mr-4">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{t('contact_pages.info.emailTitle')}</h3>
                  <p className="text-gray-700 hover:text-yellow-600 transition duration-300 cursor-pointer" 
                     dangerouslySetInnerHTML={{ __html: t('contact_pages.info.email') }} />
                </div>
              </div>
              
              {/** Horario */}
              <div className="flex items-start">
                <div className="text-yellow-500 mt-1 mr-4">
                  <FaClock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{t('contact_pages.info.hoursTitle')}</h3>
                  <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: t('contact_pages.info.hours') }} />
                </div>
              </div>
            </div>
            
            {/** Contacto de emergencia */}
            <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                {t('contact_pages.info.emergencyTitle')}
              </h3>
              <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: t('contact_pages.info.emergencyText') }} />
            </div>
          </div>
        </motion.div>

          
          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
<div className="bg-yellow-100 rounded-xl shadow-lg p-8 border border-yellow-300">
      <h2 className="text-3xl font-bold text-yellow-900 mb-6">
        {t("contact_pages.form.title")}
      </h2>
      {submitted ? (
        <motion.div
          className="bg-green-50 border border-green-300 rounded-lg p-6 text-center shadow-md"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <FaCheckCircle className="text-green-600 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            {t("contact_pages.form.successTitle")}
          </h3>
          <p className="text-gray-700">{t("contact_pages.form.successMessage")}</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-yellow-900 font-medium mb-2">
                {t("contact_pages.form.nameLabel")} *
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-4 text-yellow-700" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition bg-yellow-50"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-yellow-900 font-medium mb-2">
                {t("contact_pages.form.emailLabel")} *
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-4 text-yellow-700" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition bg-yellow-50"
                  required
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-yellow-900 font-medium mb-2">
                {t("contact_pages.form.phoneLabel")}
              </label>
              <div className="relative">
                <FaPhone className="absolute left-3 top-4 text-yellow-700" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition bg-yellow-50"
                />
              </div>
            </div>
            <div>
              <label htmlFor="service" className="block text-yellow-900 font-medium mb-2">
                {t("contact_pages.form.serviceLabel")}
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition bg-yellow-50"
              >
                <option value="">{t("contact_pages.form.serviceDefault")}</option>
                {t("contact_pages.form.serviceOptions", { returnObjects: true }).map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-yellow-900 font-medium mb-2">
              {t("contact_pages.form.messageLabel")} *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition bg-yellow-50"
              required
            ></textarea>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              className="w-5 h-5 text-yellow-600 border-yellow-400 rounded focus:ring-yellow-500 mr-2"
              required
            />
            <label htmlFor="consent" className="text-yellow-900">
              {t("contact_pages.form.consentLabel")}
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-700 transition duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            <span>📄</span> {t("contact_pages.form.submitButton")}
          </button>
        </form>
      )}
    </div>
            
            {/* Map Section */}
            <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 p-4 border-b">Ubicación</h2>
              <iframe
                title={t('contact_pages.map.title')}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.9878449242398!3d40.74844097138986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689879321413!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="p-4 bg-gray-100 text-center">
                <a 
                  href="https://goo.gl/maps/2v5y3" 
                  target="_blank" 
                  className="inline-block bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Consultation CTA */}
      <section className="bg-gradient-to-r from-yellow-800 to-yellow-600 text-white text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('contact_pages.cta.title')}</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            {t('contact_pages.cta.subtitle')}
          </p>
          <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-100 transition duration-300 shadow-lg">
            {t('contact_pages.cta.button')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;