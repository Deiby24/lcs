import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import serviceBG from '../assets/images/serviceBG.jpg';


const ServiceDetail = () => {
  const { form } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [currentService, setCurrentService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const serviceItems = t("services.serviceItems", { returnObjects: true }) || [];
    
    if (!form || serviceItems.length === 0) {
      setIsLoading(false);
      return;
    }

    const decodedForm = decodeURIComponent(form).toLowerCase();
    const foundService = serviceItems.find((item) => decodedForm === item.form.toLowerCase());

    // Simular carga para mejor UX
    const timer = setTimeout(() => {
      setCurrentService(foundService || null);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [form, t]);

  useEffect(() => {
    if (!currentService) return;

    const serviceItems = t("services.serviceItems", { returnObjects: true }) || [];
    const translatedService = serviceItems.find((item) => item.id === currentService.id);

    if (!translatedService) return;

    const translatedForm = encodeURIComponent(translatedService.form);
    const newPath = `/services/${translatedForm}`;

    if (window.location.pathname !== newPath) {
      navigate(newPath, { replace: true });
    }
  }, [i18n.language, currentService, navigate, t]);

  // const handleContactClick = () => {
  //   navigate("/Appointment", { state: { service: currentService?.form } });
  // };

  const handleServicesClick = () => {
    navigate("/services");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-md">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">😕</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t("serviceNotFound")}</h2>
            <p className="text-gray-600 mb-6">
              {t("serviceNotFoundDescription") || "El servicio que buscas no está disponible en este momento."}
            </p>
            <button
              onClick={handleServicesClick}
              className="px-6 py-3 bg-gradient-to-r from-yellow-800 to-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all shadow-md"
            >
              {t("viewAllServices") || "Ver todos los servicios"}
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans bg-white overflow-hidden">
      {/* Hero Section Mejorada */}
      <section className="relative py-28 md:py-36 bg-gradient-to-br text-white overflow-hidden hro">
        <div className="absolute inset-0 hro"
        style={{ 
          backgroundImage: `url(${serviceBG})`,
          
        }}>
          <div className="absolute inset-0 bg-gradient-to-t  to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-6xl justify-center ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-block px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium"
            >
              {currentService.title}
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {currentService.form}
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto md:mx-0 text-white">
              {currentService.contentSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Mejor estructura visual */}
      <section className="py-20 bg-gray-50 " >
      <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {currentService.content}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-800 to-yellow-600 mx-auto rounded-full"></div>
          </motion.div>
        <div className="container mx-auto px-6 max-w-5xl">
         

          <div className="grid md:grid-cols-2 gap-8">
            {["contentFirstPoint", "contentSecondPoint", "contentThirdPoint", "contentFourPoint"].map((key, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group md:min-w-[900px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-8 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start space-x-5 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 text-white shadow-md">
                          <span className="text-xl font-bold">{index + 1}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {currentService[key]}
                        </h3>
                      </div>
                    </div>
                    <p 
                      className="text-gray-600 leading-relaxed flex-grow"
                      dangerouslySetInnerHTML={{ __html: currentService[`${key}Text`].replace(/\n/g, '<br/>') }}
                    />
                    {/* {index % 2 === 0 && (
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                          {index === 0 ? "Estrategia" : index === 2 ? "Implementación" : "Solución"}
                        </span>
                      </div>
                    )} */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Section - Más interactivo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl justify-center">
          <motion.div 
            className="relative bg-gradient-to-r from-yellow-800 to-yellow-600 rounded-2xl p-10 text-center text-white shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-white/10"></div>
            
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <svg className="w-14 h-14 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </motion.div>
            <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10 text-white">
              {currentService.contentFinal}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Más profesional */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl text-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm p-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              {t("readyToTransform") || "¿Listo para transformar tu negocio?"}
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              {t("serviceCTA.description") || "Nuestro equipo de expertos está listo para ayudarte a alcanzar tus objetivos con soluciones personalizadas a tus necesidades."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactClick}
                className="px-8 py-4 bg-gradient-to-r from-yellow-800 to-yellow-600 text-white font-medium rounded-xl hover:from-yellow-700 hover:to-yellow-600 transition-all duration-300 shadow-lg"
              >
                {t("requestConsultation") || "Solicitar consulta gratuita"}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleServicesClick}
                className="px-8 py-4 bg-white text-blue-600 font-medium rounded-xl border border-blue-200 hover:bg-blue-50 transition-all duration-300 shadow-sm"
              >
                {t("viewAllServices") || "Ver todos los servicios"}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default ServiceDetail;