import React from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import "../../assets/styles/about.css";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-gray-100 text-gray-900 about-container">
      <div className="container mx-auto px-4 text-center" style={{ display:"contents" }}>
        <h2 className="text-4xl font-bold text-gray-800 mb-8 relative pb-4 about-title">
          {t("about_title")}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-amber-500"></span>
        </h2>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border-t-4 border-amber-500 about-content">
          <p className="text-gray-700 text-lg leading-relaxed">
            <span className="font-semibold text-amber-600">
              Libertas Consulting Services LLC
            </span>
            , {t("about_description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
