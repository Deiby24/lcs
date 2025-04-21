import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";

// Función para obtener el idioma guardado en localStorage, si existe
const getStoredLanguage = () => {
  const storedLang = localStorage.getItem("i18nextLng");
  return storedLang ? storedLang : "en"; // Devuelve el idioma guardado o 'en' por defecto
};

// Inicialización de i18next
i18n
  .use(backend) // Carga los archivos de traducción desde el servidor
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next)
  .init({
    lng: getStoredLanguage(), // Utiliza el idioma guardado o 'en' como predeterminado
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
    fallbackLng: "en", // Si no se encuentra el idioma, usar inglés
  });

export default i18n;
