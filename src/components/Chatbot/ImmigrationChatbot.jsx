import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaRobot, FaTimes, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import MiniSearch from 'minisearch';

const SmartChatbot = () => {
  const [state, setState] = useState({
    isOpen: false,
    messages: [],
    inputMessage: '',
    isTyping: false,
    searchEngine: null
  });

  const messagesEndRef = useRef(null);

  // Respuestas rápidas predefinidas
  const quickResponses = {
    'hola': '¡Hola! Soy tu asistente de inmigración. ¿En qué puedo ayudarte hoy?',
    'horario': 'Nuestro horario de atención es de lunes a viernes de 9am a 6pm, y sábados de 10am a 2pm.',
    'contacto': 'Puedes contactarnos por WhatsApp para atención personalizada:'
  };

  // Servicios comunes con sus variaciones de nombres
  const servicesMap = {
    'tarjeta': 'Green Card Renewal Form I-90',
    'residencia': 'Green Card Renewal Form I-90',
    'renovacion': 'Green Card Renewal Form I-90',
    'ciudadania': 'U.S. Citizenship Form N-400',
    'naturalizacion': 'U.S. Citizenship Form N-400',
    'visa': 'Work Visa Application',
    'trabajo': 'Employment Authorization (EAD) Form I-765',
    'daca': 'DACA Renewal Form I-821D'
  };

  // Inicializar el motor de búsqueda
  useEffect(() => {
    if (state.isOpen && !state.searchEngine) {
      const miniSearch = new MiniSearch({
        fields: ['text', 'keywords'],
        storeFields: ['text', 'title']
      });

      // Extraer contenido de la página
      const pageContent = extractPageContent();
      miniSearch.addAll(pageContent);
      
      setState(s => ({ ...s, searchEngine: miniSearch }));
      
      // Mensaje inicial
      setTimeout(() => {
        setState(s => ({
          ...s,
          messages: [{
            text: "¡Hola! Soy tu asistente virtual. Puedo responder preguntas sobre nuestros servicios de inmigración.",
            sender: 'bot'
          }]
        }));
      }, 500);
    }
  }, [state.searchEngine]);

  // Función para extraer contenido estructurado de la página
  const extractPageContent = () => {
    const services = Array.from(document.querySelectorAll('.service-card')).map((card, id) => ({
      id: `service-${id}`,
      title: card.querySelector('h3')?.innerText || 'Servicio de inmigración',
      text: card.innerText,
      keywords: card.getAttribute('data-keywords') || ''
    }));

    const aboutText = {
      id: 'about-section',
      title: 'Sobre nosotros',
      text: document.querySelector('#about')?.innerText || '',
      keywords: 'información contacto dirección teléfono'
    };

    return [...services, aboutText];
  };

  // Manejar envío de mensajes
  const handleSendMessage = async () => {
    if (!state.inputMessage.trim()) return;

    // Agregar mensaje del usuario
    setState(s => ({
      ...s,
      messages: [...s.messages, { text: s.inputMessage, sender: 'user' }],
      inputMessage: '',
      isTyping: true
    }));

    // Procesar después de breve retraso
    setTimeout(() => {
      const response = generateResponse(state.inputMessage);
      setState(s => ({
        ...s,
        messages: [...s.messages, response],
        isTyping: false
      }));
    }, 800);
  };

  // Generar respuesta inteligente
  const generateResponse = (question) => {
    const lowerQuestion = question.toLowerCase();

    // 1. Verificar respuestas rápidas
    for (const [keyword, response] of Object.entries(quickResponses)) {
      if (lowerQuestion.includes(keyword)) {
        if (keyword === 'contacto') {
          return {
            text: response,
            sender: 'bot',
            options: [{ text: 'Abrir WhatsApp', action: 'whatsapp' }]
          };
        }
        return { text: response, sender: 'bot' };
      }
    }

    // 2. Verificar servicios comunes
    for (const [keyword, serviceName] of Object.entries(servicesMap)) {
      if (lowerQuestion.includes(keyword)) {
        return {
          text: `Para información sobre ${serviceName}, encontré esto en nuestra página:`,
          sender: 'bot',
          options: [{ text: 'Ver detalles', action: 'search', query: serviceName }]
        };
      }
    }

    // 3. Búsqueda semántica si el motor está listo
    if (state.searchEngine) {
      const results = state.searchEngine.search(question, {
        prefix: true,
        fuzzy: 0.2,
        boost: { title: 2 }
      });

      if (results.length > 0) {
        return {
          text: `Encontré esta información relevante:\n\n${results[0].text.substring(0, 200)}...`,
          sender: 'bot',
          options: [
            { text: 'Ver más detalles', action: 'whatsapp' },
            { text: 'Buscar otra cosa', action: 'continue' }
          ]
        };
      }
    }

    // 4. Respuesta por defecto
    return {
      text: "No encontré información suficiente para responder tu pregunta. Nuestros agentes pueden ayudarte mejor por WhatsApp.",
      sender: 'bot',
      options: [{ text: 'Hablar con agente', action: 'whatsapp' }]
    };
  };

  // Manejar acciones de botones
  const handleAction = (action, query) => {
    if (action === 'whatsapp') {
      const phone = '1234567890'; // Tu número de WhatsApp
      const message = `Consulta sobre: ${query || state.inputMessage}`;
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
      
      setState(s => ({
        ...s,
        messages: [...s.messages, {
          text: "Te estoy redirigiendo a WhatsApp para atención personalizada. ¡Gracias!",
          sender: 'bot'
        }]
      }));
    }
    // Otras acciones pueden agregarse aquí
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setState(s => ({ ...s, isOpen: !s.isOpen }))}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50"
      >
        {state.isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </button>

      {/* Ventana de chat */}
      {state.isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-xl flex flex-col z-50 border border-gray-200">
          {/* Encabezado */}
          <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <FaRobot className="mr-2" />
              <h3 className="font-semibold">Asistente Virtual</h3>
            </div>
            <button 
              onClick={() => setState(s => ({ ...s, isOpen: false }))}
              className="text-white hover:text-gray-200"
            >
              <FaTimes />
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80">
            {state.messages.map((msg, i) => (
              <div key={i} className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-3 rounded-lg ${msg.sender === 'user' 
                  ? 'bg-blue-100 text-blue-900 rounded-br-none' 
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}>
                  {msg.text}
                </div>
                {msg.options && (
                  <div className="mt-2 space-y-2">
                    {msg.options.map((opt, j) => (
                      <button
                        key={j}
                        onClick={() => handleAction(opt.action, opt.query)}
                        className={`block w-full text-left p-2 rounded text-sm flex items-center ${
                          opt.action === 'whatsapp' 
                            ? 'bg-green-50 text-green-700 hover:bg-green-100'
                            : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                        }`}
                      >
                        {opt.action === 'whatsapp' && <FaWhatsapp className="mr-2" />}
                        {opt.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {state.isTyping && (
              <div className="text-left mb-3">
                <div className="inline-block p-3 bg-gray-100 text-gray-800 rounded-lg rounded-bl-none">
                  <FaSpinner className="animate-spin inline mr-2" />
                  <span>Buscando información...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                value={state.inputMessage}
                onChange={(e) => setState(s => ({ ...s, inputMessage: e.target.value }))}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Escribe tu pregunta..."
                className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={state.isTyping}
                className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 disabled:opacity-50"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SmartChatbot;