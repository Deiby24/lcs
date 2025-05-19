import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <HelmetProvider>
      <Router basename={process.env.PUBLIC_URL || ""}>
        <ScrollToTop />
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
    </HelmetProvider>
  );
};

export default App;
