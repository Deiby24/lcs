import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import { Helmet } from "react-helmet";

const Appointment = () => {
  return (
    <>
      <Helmet>
        <title>Schedule Your Appointment | Libertas Consulting Service - Expert Immigration Consulting</title>
        <meta
          name="description"
          content="Book an appointment with our expert immigration consultants to receive professional guidance on your U.S. immigration process."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Schedule Your Appointment | Libertas Consulting Service - Expert Immigration Consulting"
        />
        <meta
          property="og:description"
          content="Schedule your consultation today and start your immigration process with expert guidance from our team."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://libertasconsultingservice.com/appointment"
        />
        <meta
          property="og:image"
          content="https://libertasconsultingservice.com/libertaswhite.png"
        />
        <meta property="og:site_name" content="Libertas Consulting Service" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <AppointmentForm />
    </>
  );
};

export default Appointment;
