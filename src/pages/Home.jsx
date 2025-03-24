import React from 'react';
import Hero from '../components/Hero';

import ServicesSummary from '../components/ServicesSummary';
import ProcessSteps from '../components/ProcessSteps';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import BlogSection from '../components/BlogSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <ServicesSummary />
            <ProcessSteps />

            <Testimonials />
            
            <BlogSection />
            <ContactSection />
        </div>
    );
};

export default Home;
