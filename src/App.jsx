import {React, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"; // Para la navegación
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Appointment from "./pages/Appointment";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FloatingButtons from "./components/FloatingButtons";
import ServiceDetail from "./pages/ServiceDetail";
// import AgendarCita from "./pages/AgendarCita";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {

  return (
    <Router basename={process.env.PUBLIC_URL || ''}>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/services/:form" element={<ServiceDetail />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Appointment" element={<Appointment />} />
      </Routes>
      <FloatingButtons />
      <Footer />
    </Router>
  );
};

export default App;