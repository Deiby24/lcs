import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Para la navegación
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Appointment from "./pages/Appointment";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ImmigrationChatbot from "./components/Chatbot/ImmigrationChatbot";
// import AgendarCita from "./pages/AgendarCita";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        {/* <Route path="/sobre-mi" element={<SobreMi />} /> */}
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Appointment" element={<Appointment />} />
      </Routes>
      <ImmigrationChatbot />
      <Footer />
    </Router>
  );
};

export default App;