import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import { Helmet } from "react-helmet-async";

const Appointment = () => {
  return (
    <>
      <Helmet>
        {/* SEO básico */}
        <title>
          Schedule Your Appointment | Libertas Consulting Service - Expert Immigration Consulting
        </title>
        <link rel="canonical" href="https://libertasconsultingservice.com/appointment" />
        <meta
          name="description"
          content="Book an appointment with our expert immigration consultants to receive professional guidance on your U.S. immigration process."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Schedule Your Appointment | Libertas Consulting Service - Expert Immigration Consulting"
        />
        <meta
          property="og:description"
          content="Schedule your consultation today and start your immigration process with expert guidance from our team."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://libertasconsultingservice.com/appointment" />
        <meta
          property="og:image"
          content="https://libertasconsultingservice.com/libertaswhite.png"
        />
        <meta property="og:site_name" content="Libertas Consulting Service" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Schedule Your Appointment | Libertas Consulting Service - Expert Immigration Consulting"
        />
        <meta
          name="twitter:description"
          content="Book an appointment with our expert immigration consultants for professional U.S. immigration guidance."
        />
        <meta
          name="twitter:image"
          content="https://libertasconsultingservice.com/libertaswhite.png"
        />
        <meta name="twitter:site" content="@LibertasConsult" />
      </Helmet>
      <AppointmentForm />
    </>
  );
};

export default Appointment;
