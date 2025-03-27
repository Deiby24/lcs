import React from 'react';
import Hero from '../components/Hero';

import ServicesSummary from '../components/ServicesSummary';
import ProcessSteps from '../components/ProcessSteps';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import BlogSection from '../components/BlogSection';
import AboutSection from '../components/AboutSection';


const Home = () => {
    return (
        <div>
            <Hero />
            <AboutSection/>
            <ServicesSummary />
            <ProcessSteps />

            <Testimonials />
            
            <BlogSection />
            <ContactSection />
        </div>
    );
};

export default Home;
