import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSummary from '../components/home/ServicesSummary';
import ProcessSteps from '../components/home/ProcessSteps';
import Testimonials from '../components/home/Testimonials';
import ContactSection from '../components/home/ContactSection';
import BlogSection from '../components/home/BlogSection';
import AboutSection from '../components/home/AboutSection';
import { Helmet } from "react-helmet";


const Home = () => {
    return (
        <>
        <Helmet>
            <title>Libertas Consulting Service | Asesoría en procesos migratorios</title>
            <meta name="description" content="Brindamos soluciones integrales y orientación personalizada para tus trámites migratorios en Estados Unidos." />
            <meta name="robots" content="index, follow" />

            {/* Open Graph */}
            <meta property="og:title" content="Libertas Consulting Service | Asesoría en procesos migratorios" />
            <meta property="og:description" content="Te ayudamos a entender y gestionar tus trámites de inmigración con acompañamiento profesional." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://libertasconsultingservice.com/" />
            <meta property="og:image" content="https://libertasconsultingservice.com/libertaswhite.png" />
        </Helmet>
        <div>
            <Hero />
            <AboutSection/>
            <ServicesSummary />
            <ProcessSteps />

            <Testimonials />
            
            <BlogSection />
            <ContactSection />
        </div>
        </>
    );
};

export default Home;
