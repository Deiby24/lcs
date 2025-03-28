import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            icon: <FaPhoneAlt className="text-amber-600 text-xl" />, 
            title: t('contact.cards.phone.title'), 
            description: t('contact.cards.phone.description'), 
            link: "tel:+1 5308637124", 
            linkText: t('contact.cards.phone.number')
          }, {
            icon: <FaEnvelope className="text-amber-600 text-xl" />, 
            title: t('contact.cards.email.title'), 
            description: t('contact.cards.email.description'), 
            link: "mailto:marketing.libertaslcs@gmail.com", 
            linkText: t('contact.cards.email.address')
          }, {
            icon: <FaCalendarAlt className="text-amber-600 text-xl" />, 
            title: t('contact.cards.appointment.title'), 
            description: t('contact.cards.appointment.description'), 
            link: "/appointment", 
            linkText: t('contact.cards.appointment.button'), 
            isButton: true
          }].map((card, index) => (
            <div key={index} className="bg-amber-50 p-6 rounded-lg border-2 border-amber-500 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{card.description}</p>
              {card.isButton ? (
                <a href={card.link} className="inline-block bg-amber-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-amber-700 hover:shadow-md transition">
                  {card.linkText}
                </a>
              ) : (
                <a href={card.link} className="text-amber-600 font-medium hover:text-amber-700 transition">
                  {card.linkText}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white p-6 rounded-lg text-center shadow-md">
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
