import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../assets/styles/header.css";
import logo from "../assets/images/logo.png";
import "../i18n";

const languages = [
  { code: "es", label: "Español", flag: "https://flagcdn.com/w40/es.png" },
  { code: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "fr", label: "Français", flag: "https://flagcdn.com/w40/fr.png" },
  { code: "zh", label: "中文", flag: "https://flagcdn.com/w40/cn.png" },
  { code: "ar", label: "العربية", flag: "https://flagcdn.com/w40/sa.png" },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const observerRef = useRef(null);
  const headerRef = useRef(null);

  const selectedLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const heroSection = document.querySelector(".hro");
    if (!heroSection) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => setHasBackground(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    observerRef.current.observe(heroSection);
    return () => observerRef.current?.disconnect();
  }, [location.pathname]);

  useEffect(() => setMobileMenuOpen(false), [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`header ${hasBackground ? "scrolled" : ""}`} ref={headerRef}>
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        
        {/* Botón de menú móvil */}
        <button 
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {[...Array(3)].map((_, index) => (
            <div key={index} className={`bar ${mobileMenuOpen ? "open" : ""}`}></div>
          ))}
        </button>

        {/* Menú de navegación */}
        <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li><Link to="/">{t("home")}</Link></li>
            <li><Link to="/Services">{t("services_nav")}</Link></li>
            <li><Link to="/Contact">{t("contact_nav")}</Link></li>
            <li>
              <Link to="/appointment" className="cta-button bg-yellow-600">
                {t("appointment")}
              </Link>
            </li>
            
            {/* Selector de idioma */}
            <li>
              <button 
                className="cta-button flex items-center gap-2 bg-yellow-600"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img src={selectedLang.flag} alt={selectedLang.label} className="w-5 h-3" />
                <span>{selectedLang.label}</span>
              </button>
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-md animate-fade-in">
                  {languages.map((lang) => (
                    <li 
                      key={lang.code}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => changeLanguage(lang.code)}
                    >
                      <img src={lang.flag} alt={lang.label} className="w-5 h-3" />
                      {lang.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;