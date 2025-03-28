import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSummary from '../components/home/ServicesSummary';
import ProcessSteps from '../components/home/ProcessSteps';
import Testimonials from '../components/home/Testimonials';
import ContactSection from '../components/home/ContactSection';
import BlogSection from '../components/home/BlogSection';
import AboutSection from '../components/home/AboutSection';


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
