import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const steps = [
  { step: "Evaluación", description: "Revisamos tu caso y te damos la mejor opción migratoria." },
  { step: "Documentación", description: "Te ayudamos a reunir todos los documentos necesarios." },
  { step: "Aplicación", description: "Presentamos tu solicitud ante las autoridades migratorias." },
  { step: "Resultado", description: "Te acompañamos hasta obtener una respuesta." },
];

const ProcessSteps = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-semibold mb-12 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nuestro Proceso
        </motion.h2>

        {/* Línea de tiempo */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center space-y-8 md:space-y-0 md:space-x-10">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center md:w-1/4 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Línea de conexión */}
              

              {/* Ícono */}
              <div className="w-14 h-14 flex items-center justify-center bg-primary text-white rounded-full shadow-lg">
                <FaCheckCircle size={30} />
              </div>

              {/* Contenido */}
              <h3 className="text-lg font-semibold mt-4">{item.step}</h3>
              <p className="text-gray-300 text-sm mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
