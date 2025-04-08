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
import { Helmet } from "react-helmet"; // Para SEO
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
    <>
<Helmet>
 
  <title>Libertas Consulting Service | Experts in immigration consulting</title>

  <meta name="description" content="Libertas offers personalized immigration consulting for residency, citizenship, visas, and more. Get your free consultation today." />


  <meta property="og:title" content="Immigration Law Experts | Libertas Consulting Services" />
  <meta property="og:description" content="Professional and trusted immigration advice. Get your free consultation with our experts today." />
  <meta property="og:url" content="https://libertasconsultingservice.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://libertasconsultingservice.com/libertaswhite.png" />
  <meta property="og:image:alt" content="Libertas Consulting Services Logo" />

  <html lang="en" />
</Helmet>
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
    </>
  );
};

export default App;