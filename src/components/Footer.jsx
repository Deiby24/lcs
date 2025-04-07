import React from "react";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const services = t('footer.services.items', { returnObjects: true });
  const legalLinks = t('footer.legal.links', { returnObjects: true });

  return (
    <footer className="bg-gradient-to-t from-[#0F172A] to-[#1C1F2A] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">{t('footer.companyName')}</h2>
            <p className="text-[#E0E0E0] text-sm leading-relaxed">{t('footer.description')}</p>
            <div className="flex justify-start space-x-4 mt-6">
              <a href="https://www.facebook.com/profile.php?id=61574561734460&locale=es_LA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C99E4D] transition text-lg w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 hover:border-[#C99E4D]">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/libertaslcs/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C99E4D] transition text-lg w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 hover:border-[#C99E4D]">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-4 border-b border-[#D4AF37] pb-2">{t('footer.services.title')}</h3>
            <ul className="space-y-2">
                {Array.isArray(services) &&
                  services.map((item, index) => (
                    <li key={index}>
                      <Link to="/services" className="text-[#E0E0E0] hover:text-[#C99E4D] transition text-sm">
                        {item}
                      </Link>
                    </li>
                  ))
                }
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-4 border-b border-[#D4AF37] pb-2">{t('footer.contact.title')}</h3>
            <ul className="space-y-3 text-[#E0E0E0] text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#C99E4D] mt-1 mr-3 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: t('footer.contact.address') }} />
              </li>
              <li className="flex items-center">
                <FaPhone className="text-[#C99E4D] mr-3" />
                <a href="tel:+1 5308637124" className="hover:text-[#C99E4D] transition">{t('footer.contact.phone')}</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#C99E4D] mr-3" />
                <a href="mailto:marketing.libertaslcs@gmail.com" className="hover:text-[#C99E4D] transition">{t('footer.contact.email')}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos reservados y enlaces legales */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-4 md:mb-0" dangerouslySetInnerHTML={{ __html: t('footer.legal.copyright') }} />
          <div className="flex space-x-4">
          {Array.isArray(legalLinks) && legalLinks.map((link, index) => (
            <Link key={index} to="/legal" className="text-gray-400 hover:text-[#C99E4D] transition text-xs">{link}</Link>
          ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
