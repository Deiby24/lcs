import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSummary from '../components/home/ServicesSummary';
import ProcessSteps from '../components/home/ProcessSteps';
import Testimonials from '../components/home/Testimonials';
import ContactSection from '../components/home/ContactSection';
import BlogSection from '../components/home/BlogSection';
import AboutSection from '../components/home/AboutSection';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Libertas Consulting Services | Personalized U.S. Immigration Support</title>
        <meta
          name="description"
          content="We provide comprehensive solutions and personalized guidance for your immigration procedures in the United States."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://libertasconsultingservice.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Libertas Consulting Services" />
        <meta
          property="og:description"
          content="We help you understand and manage your immigration procedures with professional support."
        />
        <meta property="og:url" content="https://libertasconsultingservice.com/" />
        <meta property="og:image" content="https://libertasconsultingservice.com/libertaswhite.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Libertas Consulting Services" />
        <meta
          name="twitter:description"
          content="Expert immigration guidance and consulting for your journey to the United States."
        />
        <meta name="twitter:image" content="https://libertasconsultingservice.com/libertaswhite.png" />
      </Helmet>

      <div>
        <Hero />
        <AboutSection />
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
