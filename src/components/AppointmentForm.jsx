import { div } from "@tensorflow/tfjs";
import React, { useState } from "react";
import { FaWhatsapp, FaCalendarAlt, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaIdCard, FaClock, FaClipboardList } from "react-icons/fa";

const ReservaCita = () => {
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
    { value: "I'm not sure", label: "Seleccione un servicio " },
    { value: "U.S. Citizenship Form N-400", label: "Ciudadanía Americana (Formulario N-400)" },
    { value: "Certificate of Citizenship Form N-600", label: "Certificado de Ciudadanía (Formulario N-600)" },
    { value: "Renew Certificate of Citizenship Form N-565", label: "Renovar Certificado de Ciudadanía (Formulario N-565)" },
    { value: "Green Card Renewal Form I-90", label: "Renovación de Green Card (Formulario I-90)" },
    { value: "Remove Conditions for Residence Form I-751", label: "Eliminar condiciones de residencia (Formulario I-751)" },
    { value: "Adjustment of Status Form I-485", label: "Ajuste de Estatus (Formulario I-485)" },
    { value: "Green Card for Family Member Form I-130", label: "Green Card para familiar (Formulario I-130)" },
    { value: "Employment Authorization Card (EAD) Form I-765", label: "Permiso de Trabajo (Formulario I-765)" },
    { value: "Deferred Action for Childhood Arrivals Form I-821D (DACA)", label: "Acción Diferida (DACA) (Formulario I-821D)" },
    { value: "Green Card Lottery (DV)", label: "Lotería de Green Card (DV)" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const enviarWhatsApp = (e) => {
    e.preventDefault();
    
    // Número de WhatsApp de la empresa (cambiar por el número real)
    const whatsappNumber = "3108947847"; // Reemplaza con tu número
    const prefijoWhatsapp = "+57".replace('+', ''); // Quitar el + para el link
    
    // Crear mensaje con los datos del formulario
    const message = `*Nueva Solicitud de Cita*%0A%0A
*Nombre:* ${form.nombre}%0A
*Email:* ${form.email}%0A
*Teléfono:* ${form.prefijo} ${form.telefono}%0A
*Ciudad:* ${form.ciudad}%0A
*Identificación:* ${form.identificacion}%0A
*Motivo de la cita:* ${form.motivo}%0A
*Fecha deseada:* ${form.fecha}%0A
*Hora deseada:* ${form.hora}%0A%0A
*Por favor confirmar disponibilidad.*`;
    
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
      fecha: "",
      hora: ""
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
        <h2 className="text-2xl font-bold text-gray-800">Solicitud de Cita por WhatsApp</h2>
        <p className="text-gray-600 mt-2">Complete el formulario y será redirigido a WhatsApp para confirmar</p>
      </div>
      
      {submitted && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded">
          <p>¡Formulario completado! Será redirigido a WhatsApp.</p>
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
            placeholder="Nombre completo"
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
            placeholder="Correo electrónico"
            required
            className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1">
            <select
              name="prefijo"
              value={form.prefijo}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
            >
              <option value="+1">+1 (USA)</option>
              <option value="+52">+52 (MX)</option>
              <option value="+57">+57 (CO)</option>
              <option value="+58">+58 (VE)</option>
              <option value="+51">+51 (PE)</option>
              <option value="+56">+56 (CL)</option>
              <option value="+54">+54 (AR)</option>
              <option value="+593">+593 (EC)</option>
              <option value="+507">+507 (PA)</option>
            </select>
          </div>
          <div className="col-span-2 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaPhone className="text-gray-400" />
            </div>
            <input
              type="tel"
              name="telefono"
              placeholder="Número de teléfono"
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
            placeholder="Ciudad de residencia"
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
            placeholder="Número de identificación"
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

        <div className="grid grid-cols-2 gap-4">
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
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md"
          >
            <FaWhatsapp /> Enviar por WhatsApp
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Al enviar este formulario, será redirigido a WhatsApp para confirmar su cita.</p>
      </div>
    </div>
    </div>
  );
};

export default ReservaCita;