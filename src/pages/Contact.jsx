import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from "react-icons/fa";
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
      {/* Hero Section */}
      <section className="relative h-96 bg-blue-900 text-white overflow-hidden hro">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r opacity-90" />
        
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <motion.div
            className="max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact_pages.hero.title')}</h1>
            <p className="text-xl md:text-2xl">
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
            <div className="bg-white rounded-xl shadow-md p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('contact_pages.info.title')}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-blue-600 mt-1 mr-4">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t('contact_pages.info.addressTitle')}</h3>
                    <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t('contact_pages.info.address') }} />
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 mt-1 mr-4">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t('contact_pages.info.phoneTitle')}</h3>
                    <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t('contact_pages.info.phone') }} />
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 mt-1 mr-4">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t('contact_pages.info.emailTitle')}</h3>
                    <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t('contact_pages.info.email') }} />
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 mt-1 mr-4">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t('contact_pages.info.hoursTitle')}</h3>
                    <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t('contact_pages.info.hours') }} />
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-gray-800 mb-4">{t('contact_pages.info.emergencyTitle')}</h3>
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t('contact_pages.info.emergencyText') }} />
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
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('contact_pages.form.title')}</h2>
              
              {submitted ? (
                <motion.div 
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{t('contact_pages.form.successTitle')}</h3>
                  <p className="text-gray-700">
                    {t('contact_pages.form.successMessage')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        {t('contact_pages.form.nameLabel')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        {t('contact_pages.form.emailLabel')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        {t('contact_pages.form.phoneLabel')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                        {t('contact_pages.form.serviceLabel')}
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      >
                        <option value="">{t('contact_pages.form.serviceDefault')}</option>
                        {t('contact_pages.form.serviceOptions', { returnObjects: true }).map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      {t('contact_pages.form.messageLabel')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"
                      required
                    />
                    <label htmlFor="consent" className="text-gray-700">
                      {t('contact_pages.form.consentLabel')}
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300 shadow-md"
                  >
                    {t('contact_pages.form.submitButton')}
                  </button>
                </form>
              )}
            </div>
            
            {/* Map Section */}
            <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
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
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Consultation CTA */}
      <section className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('contact_pages.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
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