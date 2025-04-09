import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import { Helmet } from "react-helmet";

const Appointment = () => {
  return (
    <>
      <Helmet>
        <title>Agenda tu cita | Libertas Consulting Service</title>
        <meta
          name="description"
          content="Programa una reunión con nuestro equipo de consultoría para recibir orientación clara y profesional sobre procesos migratorios."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Agenda tu cita | Libertas Consulting Service"
        />
        <meta
          property="og:description"
          content="Haz tu cita y empieza tu proceso de inmigración con acompañamiento profesional."
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
      </Helmet>
      <AppointmentForm />
    </>
  );
};

export default Appointment;
