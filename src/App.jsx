import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Para la navegación
import Header from "./components/Header";
import Home from "./pages/Home";
// import Servicios from "./pages/Servicios";
import SobreMi from "./pages/About";
// import Contacto from "./pages/Contacto";
// import AgendarCita from "./pages/AgendarCita";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/servicios" element={<Servicios />} /> */}
        <Route path="/sobre-mi" element={<SobreMi />} />
        {/* <Route path="/contacto" element={<Contacto />} />
        <Route path="/agendar-cita" element={<AgendarCita />} /> */}
      </Routes>
    </Router>
  );
};

export default App;