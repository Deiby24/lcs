import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-amber-500 mb-4">{t('footer.companyName')}</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex justify-start space-x-4 mt-6">
              <Link to="/services" className="text-gray-400 hover:text-amber-500 transition text-lg w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 hover:border-amber-500">
                <FaFacebookF />
              </Link>
              <Link to="/services" className="text-gray-400 hover:text-amber-500 transition text-lg w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 hover:border-amber-500">
                <FaTwitter />
              </Link>
              <Link to="/services" className="text-gray-400 hover:text-amber-500 transition text-lg w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 hover:border-amber-500">
                <FaInstagram />
              </Link>
              <Link to="/services" className="text-gray-400 hover:text-amber-500 transition text-lg w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 hover:border-amber-500">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-amber-500 pb-2">
              {t('footer.services.title')}
            </h3>
            <ul className="space-y-2">
              {t('footer.services.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>
                  <Link to="/services" className="text-gray-300 hover:text-amber-500 transition text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-amber-500 pb-2">
              {t('footer.contact.title')}
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: t('footer.contact.address') }} />
              </li>
              <li className="flex items-center">
                <FaPhone className="text-amber-500 mr-3" />
                <a href="tel:+19015551234" className="hover:text-amber-500 transition">
                  {t('footer.contact.phone')}
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-amber-500 mr-3" />
                <a href="mailto:info@libertasconsulting.com" className="hover:text-amber-500 transition">
                  {t('footer.contact.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos reservados y enlaces legales */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p 
            className="text-gray-400 text-xs mb-4 md:mb-0"
            dangerouslySetInnerHTML={{ __html: t('footer.legal.copyright') }}
          />
          <div className="flex space-x-4">
            {t('footer.legal.links', { returnObjects: true }).map((link, index) => (
              <Link 
                key={index} 
                to="/legal" 
                className="text-gray-400 hover:text-amber-500 transition text-xs"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;