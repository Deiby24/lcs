import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import "../i18n";
import { useTranslation } from "react-i18next";

const FloatingButtons = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const showMessage = () => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 8000);
    };

    showMessage(); // Mostrar inmediatamente
    const interval = setInterval(showMessage, 60000); // Mostrar cada minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 right-4 flex items-end justify-between">
      {/* Botones de redes sociales */}
      <div className="flex flex-col space-y-2">
        <a 
          href="https://www.facebook.com/profile.php?id=61574561734460&locale=es_LA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#0F172A] text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition flex items-center justify-center"
        >
          <FaFacebookF className="w-5 h-5" />
        </a>
        <a 
          href="https://www.instagram.com/libertaslcs/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#0F172A] text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition flex items-center justify-center"
        >
          <FaInstagram className="w-5 h-5" />
        </a>
      </div>
      
      {/* Botón de WhatsApp */}
      <div className="relative">
        {showTooltip && (
          <div className="absolute right-16 bottom-3 bg-green-500 text-white text-sm py-1 px-3 rounded-lg shadow-md animate-fadeInOut text-center" style={{width: '170px'}}>
          {t("wtpButton")}
          </div>
        )}
        <a 
          href="https://wa.me/15308637124" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default FloatingButtons;
