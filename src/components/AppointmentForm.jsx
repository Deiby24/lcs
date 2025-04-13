import React, { useState } from "react";
import { FaWhatsapp,  FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaIdCard, FaClipboardList } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../i18n";
import Select from 'react-select';
import callingCodes from 'country-calling-code';

const sortedCountries = callingCodes
  .sort((a, b) => a.country.localeCompare(b.country))
  .map(item => ({
    value: `+${item.countryCodes[0]}`,
    label: `+${item.countryCodes[0]} (${item.country})`
  }));



const ReservaCita = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    prefijo: "+1",
    telefono: "",
    ciudad: "",
    identificacion: "",
    fecha: "",
    hora: "",
    motivo: "I'm not sure"
  });

  const [submitted, setSubmitted] = useState(false);

  const motivosCita = [
    { value: "I'm not sure", label: t("Seleccione un servicio") },
    { value: "U.S. Citizenship Form N-400", label: t("Ciudadanía Americana (Formulario N-400)") },
    { value: "Certificate of Citizenship Form N-600", label: t("Certificado de Ciudadanía (Formulario N-600)") },
    { value: "Renew Certificate of Citizenship Form N-565", label: t("Renovar Certificado de Ciudadanía (Formulario N-565)") },
    { value: "Green Card Renewal Form I-90", label: t("Renovación de Green Card (Formulario I-90)") },
    { value: "Remove Conditions for Residence Form I-751", label: t("Eliminar condiciones de residencia (Formulario I-751)") },
    { value: "Adjustment of Status Form I-485", label: t("Ajuste de Estatus (Formulario I-485)") },
    { value: "Green Card for Family Member Form I-130", label: t("Green Card para familiar (Formulario I-130)") },
    { value: "Employment Authorization Card (EAD) Form I-765", label: t("Permiso de Trabajo (Formulario I-765)") },
    { value: "Deferred Action for Childhood Arrivals Form I-821D (DACA)", label: t("Acción Diferida (DACA) (Formulario I-821D)") },
    { value: "Green Card Lottery (DV)", label: t("Lotería de Green Card (DV)") }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const enviarWhatsApp = (e) => {
    e.preventDefault();
    
    // Número de WhatsApp de la empresa (cambiar por el número real)
    const whatsappNumber = "5308637124"; // Reemplaza con tu número
    const prefijoWhatsapp = "+1".replace('+', ''); // Quitar el + para el link
    
    // Crear mensaje con los datos del formulario
    const message = `*${t("Nueva Solicitud de Cita")}*%0A%0A
*${t("Nombre")}:* ${form.nombre}%0A
*${t("Email")}:* ${form.email}%0A
*${t("Teléfono")}:* ${form.prefijo} ${form.telefono}%0A
*${t("Ciudad")}:* ${form.ciudad}%0A
*${t("Identificación")}:* ${form.identificacion}%0A
*${t("Motivo de la cita")}:* ${form.motivo}%0A
*${t("Fecha deseada")}:* ${form.fecha}%0A
*${t("Hora deseada")}:* ${form.hora}%0A%0A
*${t("Por favor confirmar disponibilidad")}.*`;
    
    // Crear enlace de WhatsApp con prefijo internacional
    const whatsappLink = `https://wa.me/${prefijoWhatsapp}${whatsappNumber}?text=${message}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappLink, '_blank');
    
    // Mostrar confirmación
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    
    // Resetear formulario
    setForm({
      ...form,
      nombre: "",
      email: "",
      telefono: "",
      ciudad: "",
      identificacion: "",
    });
  };

  return (
    <div className="relative">
      <div 
        className="hro absolute top-[-100px] left-0 w-full h-[1px] "
        aria-hidden="true"
      />
      <section className="h-20"></section>

      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl my-8">
        <div className="hro"/>
        <div className="text-center mb-6">
          <div className="bg-green-100 inline-flex p-3 rounded-full mb-4">
            <FaWhatsapp className="text-green-600 text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{t("Solicitud de Cita por WhatsApp")}</h2>
          <p className="text-gray-600 mt-2">{t("Complete el formulario y será redirigido a WhatsApp para confirmar")}</p>
        </div>
        
        {submitted && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded">
            <p>{t("¡Formulario completado! Será redirigido a WhatsApp.")}</p>
          </div>
        )}

        <form onSubmit={enviarWhatsApp} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="text-gray-400" />
            </div>
            <input
              type="text"
              name="nombre"
              placeholder={t("Nombre completo")}
              required
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              value={form.nombre}
              onChange={handleChange}
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaEnvelope className="text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              placeholder={t("Correo electrónico")}
              required
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1">
  <Select
    name="prefijo"
    options={sortedCountries}
    value={sortedCountries.find(opt => opt.value === form.prefijo)}
    onChange={(selectedOption) => handleChange({ target: { name: 'prefijo', value: selectedOption.value } })}
    className="basic-single"
    classNamePrefix="select"
    placeholder="Selecciona un prefijo"
    isSearchable
  />
</div>
            <div className="col-span-2 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhone className="text-gray-400" />
              </div>
              <input
                type="tel"
                name="telefono"
                placeholder={t("Número de teléfono")}
                required
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                value={form.telefono}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaMapMarkerAlt className="text-gray-400" />
            </div>
            <input
              type="text"
              name="ciudad"
              placeholder={t("Ciudad de residencia")}
              required
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              value={form.ciudad}
              onChange={handleChange}
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaIdCard className="text-gray-400" />
            </div>
            <input
              type="text"
              name="identificacion"
              placeholder={t("Número de identificación")}
              required
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              value={form.identificacion}
              onChange={handleChange}
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaClipboardList className="text-gray-400" />
            </div>
            <select
              name="motivo"
              value={form.motivo}
              onChange={handleChange}
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition appearance-none"
              required
            >
              {motivosCita.map((motivo) => (
                <option key={motivo.value} value={motivo.value}>
                  {motivo.label}
                </option>
              ))}
            </select>
          </div>

          {/* <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCalendarAlt className="text-gray-400" />
              </div>
              <input
                type="date"
                name="fecha"
                required
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                value={form.fecha}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaClock className="text-gray-400" />
              </div>
              <input
                type="time"
                name="hora"
                required
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                value={form.hora}
                onChange={handleChange}
              />
            </div>
          </div> */}

          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md"
            >
              <FaWhatsapp /> {t("Enviar por WhatsApp")}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>{t("Al enviar este formulario, será redirigido a WhatsApp para confirmar su cita.")}</p>
        </div>
      </div>
    </div>
  );
};

export default ReservaCita;