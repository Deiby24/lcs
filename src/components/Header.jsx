import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import '../assets/styles/header.css';
import logo from '../assets/images/logo.png';

const Header = () => {

  const headerRef = useRef(null);
  const navListRef = useRef(null);
  const [bgColor, setBgColor] = useState("#000"); // Estado para el color de fondo

  const getBrightness = (color) => {
    const rgb = color.match(/\d+/g);
    if (rgb) {
      return (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
    }
    return 0;
  };

  useEffect(() => {
    const header = headerRef.current;
    const navList = navListRef.current;

    if (header && navList) {
      header.style.backgroundColor = bgColor; // Aplica el color de fondo
      const brightness = getBrightness(bgColor);
      navList.style.color = brightness > 125 ? 'black' : 'white';
    }
  }, [bgColor]); // Se ejecuta cuando cambia el color de fondo

  const changeBackgroundColor = () => {
    const colors = ["#000", "#fff", "#ff0000", "#00ff00", "#0000ff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo de la abogada" />
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/proyectos">Proyectos</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/AgendarCita" className="cta-button">
              Agendar Cita
            </Link>
            </li>
          </ul>
      
        </nav>
      </div>
    </header>
  );
};

export default Header;