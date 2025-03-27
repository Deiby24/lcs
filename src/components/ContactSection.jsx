import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Tarjetas de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Teléfono */}
          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <FaPhoneAlt className="text-amber-600 text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{t('contact.cards.phone.title')}</h3>
            </div>
            <p className="text-gray-600 mb-4">{t('contact.cards.phone.description')}</p>
            <a 
              href="tel:+19015551234" 
              className="text-amber-600 font-medium hover:text-amber-700 transition"
            >
              {t('contact.cards.phone.number')}
            </a>
          </div>

          {/* Email */}
          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <FaEnvelope className="text-amber-600 text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{t('contact.cards.email.title')}</h3>
            </div>
            <p className="text-gray-600 mb-4">{t('contact.cards.email.description')}</p>
            <a 
              href="mailto:info@libertasconsulting.com" 
              className="text-amber-600 font-medium hover:text-amber-700 transition"
            >
              {t('contact.cards.email.address')}
            </a>
          </div>

          {/* Consulta */}
          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <FaCalendarAlt className="text-amber-600 text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{t('contact.cards.appointment.title')}</h3>
            </div>
            <p className="text-gray-600 mb-4">{t('contact.cards.appointment.description')}</p>
            <a 
              href="/contacto" 
              className="inline-block bg-amber-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-amber-700 transition"
            >
              {t('contact.cards.appointment.button')}
            </a>
          </div>
        </div>

        {/* Ubicación */}
        <div className="mt-12 bg-gray-50 p-6 rounded-lg text-center">
          <div className="flex items-center justify-center mb-3">
            <FaMapMarkerAlt className="text-amber-600 mr-2" />
            <h3 className="font-medium text-gray-800">{t('contact.cards.location.title')}</h3>
          </div>
          <p className="text-gray-600">
            {t('contact.cards.location.address')}<br />
            {t('contact.cards.location.hours')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;