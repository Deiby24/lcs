import React from "react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-10 text-gray-800">
          Contáctanos
        </h2>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300">
          <p className="text-lg italic text-gray-700">
            Agende una consulta con nuestros abogados expertos.
          </p>

          <a
            href="/contact"
            className="block mt-6 bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Contactar Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
