// Datos que el chatbot puede usar para responder
const servicesData = [
    {
      name: "U.S. Citizenship Form N-400",
      description: "Proceso para obtener la ciudadanía americana",
      requirements: "5 años de residencia (3 si casado con ciudadano), buen carácter moral, exámenes de inglés y educación cívica"
    },
    {
      name: "Green Card Renewal Form I-90",
      description: "Renovación de la tarjeta de residencia permanente",
      requirements: "Green Card a punto de expirar o ya expirada (en últimos 6 meses)"
    },
    // Agrega más servicios según tu página
  ];
  
  export const getChatbotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Respuestas básicas
    if (input.includes('hola') || input.includes('hi') || input.includes('hello')) {
      return {
        text: "¡Hola! ¿En qué puedo ayudarte hoy? Puedo informarte sobre ciudadanía, green cards, visas y más.",
        sender: 'bot'
      };
    }
    
    if (input.includes('horario') || input.includes('horas') || input.includes('schedule')) {
      return {
        text: "Nuestro horario de atención es de lunes a viernes de 9am a 6pm, y sábados de 10am a 2pm.",
        sender: 'bot'
      };
    }
    
    if (input.includes('contacto') || input.includes('contact') || input.includes('hablar')) {
      return {
        text: "Puedes comunicarte con nosotros por WhatsApp para atención personalizada inmediata:",
        sender: 'bot',
        options: [{ text: 'Abrir WhatsApp', action: 'whatsapp' }]
      };
    }
    
    // Buscar coincidencias con servicios
    const matchedService = servicesData.find(service => 
      input.includes(service.name.toLowerCase().split(' ')[0]) || 
      service.name.toLowerCase().includes(input)
    );
    
    if (matchedService) {
      return {
        text: `Para ${matchedService.name}:\n${matchedService.description}\n\nRequisitos: ${matchedService.requirements}\n\n¿Quieres más información?`,
        sender: 'bot',
        options: [{ text: 'Hablar con agente', action: 'whatsapp' }]
      };
    }
    
    // Respuesta por defecto
    return {
      text: "No estoy seguro de entender tu pregunta. Nuestros agentes pueden ayudarte mejor por WhatsApp:",
      sender: 'bot',
      options: [{ text: 'Hablar con agente por WhatsApp', action: 'whatsapp' }]
    };
  };