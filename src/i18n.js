import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";


i18n
  .use(backend) // Carga los archivos de traducción desde el servidor
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next)
  .init({

    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
    fallbackLng: "en",

  });

export default i18n;
