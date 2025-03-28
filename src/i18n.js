import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          services_nav: "Services",
          contact_nav: "Contact",
          appointment: "Schedule Consultation",
          hero_title: "Expert Immigration Legal Services",
          hero_subtitle: "Comprehensive legal solutions and personalized guidance for all your immigration needs.",
          hero_button: "Request Consultation",
          about_title: "About Our Firm",
          about_description: "Our team brings decades of combined experience from immigration offices, providing specialized representation for all immigration matters in Jacksonville, Florida. We are committed to guiding the Hispanic community through the complexities of U.S. immigration law.",
          title_visa: "Employment Visas",
          description_visa: "Strategic guidance for obtaining work authorization and employment-based visas in the United States.",
          title_Residency: "Permanent Residency",
          description_Residency: "Complete representation for family-based and employment-based green card applications.",
          title_Citizenship: "Naturalization",
          description_Citizenship: "End-to-end assistance with U.S. citizenship applications and naturalization proceedings.",
          title_Immigration: "Removal Defense",
          description_Immigration: "Aggressive representation in deportation proceedings and immigration court.",
          services_title: "Our Legal Services",
          services_description: "Full-spectrum immigration solutions with expert legal counsel for individuals and families.",
          
          process_title: "Our Legal Process",
          step1: "Case Assessment",
          description1: "Thorough evaluation of your circumstances to determine optimal immigration pathways.",
          step2: "Document Preparation",
          description2: "Meticulous compilation and preparation of all required supporting evidence.",
          step3: "Petition Filing",
          description3: "Precise submission of applications to USCIS with premium case management.",
          step4: "Case Resolution",
          description4: "Dedicated representation through final adjudication and beyond.",

          testimonials: {
            title: "What Our Clients Say",
            subtitle: "Real experiences from people who trusted our immigration services",
            review1: "Thanks to their help, I got my residency in record time. Their knowledge of the process was invaluable.",
            review2: "A reliable and professional team. They guided me through every step of my citizenship process. 100% recommended!",
            review3: "Excellent customer service. They quickly answered all my questions about my work visa.",
          },
          contact: {
            title: "Need help with your immigration case?",
            subtitle: "Our experts are ready to assist you. Contact us today for a personalized consultation.",
            cards: {
              phone: {
                title: "Call Us",
                description: "Available Monday to Friday from 9am to 4:30pm",
                number: "+1 5308637124"
              },
              email: {
                title: "Email Us",
                description: "We'll respond within 24 hours",
                address: "marketing.libertaslcs@gmail.com"
              },
              appointment: {
                title: "Schedule Consultation",
                description: "First consultation",
                button: "Request Appointment"
              },
              location: {
                title: "Office in Jacksonville, FL 32216",
                address: "4063 Salisbury Road, Suite 110",
                hours: "Hours: Monday to Friday 9am-4:30pm"
              }
            }
          },
          footer: {
            companyName: "Libertas Consulting Services  LCS",
            description: "Immigration law experts with 20 years of experience, providing reliable and personalized advice for your future in the United States. Main offices in Jacksonville, FL.",
            services: {
              title: "Services",
              items: [
                "Political Asylum",
                "Status Adjustment",
                "Green Card Renewal",
                "US Citizenship",
                "Work Permits"
              ]
            },
            contact: {
              title: "Contact",
              address: "4063 Salisbury Road, Suite 110<br />Jacksonville, FL 32216",
              phone: "+1 5308637124",
              email: "marketing.libertaslcs@gmail.com"
            },
            legal: {
              copyright: `&copy; ${new Date().getFullYear()} Libertas Consulting Services LCS. All rights reserved.`,
              links: [
                "Terms of Service",
                "Privacy Policy",
                "Legal Notice"
              ]
            }
          },
          services: {
            hero: {
              title: "Immigration Services for Your Future",
              subtitle: "Guiding You Through Every Step of the Immigration Process",
              cta: "Get Started Today"
            },
            intro: {
              title: "Your Trusted Immigration Partner",
              description: "Our expert advisors provide personalized assistance for all your immigration needs, ensuring a smooth and successful journey to residency. We work directly with USCIS services, ensuring accuracy and efficiency in every application."
            },
            filter: {
              all: "All Services",
              citizenship: "Citizenship",
              employment: "Employment",
              greenCard: "Green Card",
              visas: "Visas",
              family: "Family",
            },
            servicesTitle: "Our Immigration Services",
            serviceItems: [
              {
                title: "Citizenship",
                description: "Assistance with Form N-400 for a seamless citizenship application process.",
                form: "Form N-400"
              },
              {
                title: "Employment Authorization",
                description: "Expert guidance on Form I-765 to obtain your Employment Authorization Document.",
                form: "Form I-765"
              },
              {
                title: "Green Card",
                description: "Support with Form I-485 for adjusting your status to permanent resident.",
                form: "Form I-485"
              },
              {
                title: "Visas",
                description: "Help with Form DS-160 for B1/B2 visitor visas for business or tourism.",
                form: "Form DS-160"
              },
              {
                title: "Family Sponsorship",
                description: "Green Card for family members with Form I-130.",
                form: "Form I-130"
              },
              {
                title: "DACA Renewal",
                description: "Renew your DACA status with Form I-821D.",
                form: "Form I-821D"
              },
              {
                title: "Asylum Application",
                description: "Assistance with Form I-589 for asylum seekers.",
                form: "Form I-589"
              },
              {
                title: "Certificate of Citizenship",
                description: "Establish status with Form N-600.",
                form: "Form N-600"
              }
            ],
            whyChooseUs: {
              title: "Why Choose Our Immigration Services?",
              subtitle: "We make the complex immigration process simple, transparent, and successful.",
              items: [
                {
                  icon: "🏛️",
                  title: "USCIS Expertise",
                  description: "Our team works directly with USCIS services, ensuring your applications meet all requirements."
                },
                {
                  icon: "👨‍⚖️",
                  title: "Personalized Guidance",
                  description: "One-on-one support from experienced professionals who understand your unique situation."
                },
                {
                  icon: "📈",
                  title: "High Success Rate",
                  description: "Proven track record of helping clients achieve their immigration goals efficiently."
                }
              ]
            },
            forms: {
              title: "We Work With All USCIS Services",
              subtitle: "Select the form of your preference to obtain information about your request. Our agents will be willing to help you with your request.",
              commonForms: "Common USCIS Forms",
              formItems: [
                {
                  name: "Form N-400",
                  description: "Application for Naturalization"
                },
                {
                  name: "Form I-485",
                  description: "Application to Register Permanent Residence"
                },
                {
                  name: "Form I-765",
                  description: "Application for Employment Authorization"
                },
                {
                  name: "Form I-130",
                  description: "Petition for Alien Relative"
                },
                {
                  name: "Form I-751",
                  description: "Petition to Remove Conditions on Residence"
                },
                {
                  name: "Form I-821D",
                  description: "Consideration of Deferred Action for Childhood Arrivals"
                }
              ],
              cta: "Need Help With a Specific Form?"
            },
            cta: {
              title: "Ready to Begin Your Immigration Journey?",
              subtitle: "Don't navigate the complex immigration process alone. Let our experts handle the paperwork while you focus on your future.",
              buttons: [
                "Schedule a Consultation",
                "Learn More About Our Services"
              ]
            },
          },
          contact_pages: {  // Cambiado de 'contact' a 'contact_nav'
            hero: {
              title: "Contact Us",
              subtitle: "Get in touch with our immigration experts today"
            },
            info: {
              title: "Our Office",
              addressTitle: "Address",
              address: "4063 Salisbury Road <br/> Suite 110 <br/> Jacksonville FL 32216",
              phoneTitle: "Phone",
              phone: "+1 5308637124",
              emailTitle: "Email",
              email: "marketing.libertaslcs@gmail.com",
              hoursTitle: "Hours",
              hours: "Monday - Friday: 9am - 4:30pm<br />Saturday: Closed<br />Sunday: Closed",
              emergencyTitle: "Emergency Contact",
              emergencyText: "For urgent immigration matters outside business hours, please call our emergency line at <span class='font-semibold'>+1 5308637124</span>."
            },
            form: {
              title: "Send Us a Message",
              nameLabel: "Full Name",
              emailLabel: "Email Address",
              phoneLabel: "Phone Number",
              serviceLabel: "Service Interested In",
              serviceDefault: "Select a service",
              serviceOptions: [
                "Citizenship",
                "Green Card",
                "Work Visa",
                "Family Sponsorship",
                "DACA",
                "Asylum",
                "Other"
              ],
              messageLabel: "Your Message",
              consentLabel: "I consent to having this website store my submitted information so they can respond to my inquiry.",
              submitButton: "Send Message",
              successTitle: "Thank You!",
              successMessage: "Your message has been sent successfully. Our team will get back to you within 24 hours."
            },
            map: {
              title: "Office Location"
            },
            cta: {
              title: "Schedule a Free Consultation",
              subtitle: "Book a 30-minute consultation with one of our immigration experts to discuss your specific needs.",
              button: "Book Now"
            }
          },
          news: {
            info: {
              blog_title: "Latest News",
              blog_description: "Stay informed about immigration laws and changes in the United States.",
              read_more: "Read more →"
            }
          },
          "Solicitud de Cita por WhatsApp": "Appointment Request via WhatsApp",
      "Complete el formulario y será redirigido a WhatsApp para confirmar": "Fill out the form and you'll be redirected to WhatsApp to confirm",
      "Nombre completo": "Full name",
      "Correo electrónico": "Email",
      "Número de teléfono": "Phone number",
      "Ciudad de residencia": "City of residence",
      "Número de identificación": "ID number",
      "Seleccione un servicio": "Select a service",
      "Fecha deseada": "Desired date",
      "Hora deseada": "Desired time",
      "Enviar por WhatsApp": "Send via WhatsApp",
      "Al enviar este formulario, será redirigido a WhatsApp para confirmar su cita.": "When submitting this form, you'll be redirected to WhatsApp to confirm your appointment.",
      "¡Formulario completado! Será redirigido a WhatsApp.": "Form completed! You'll be redirected to WhatsApp.",
      "Nueva Solicitud de Cita": "New Appointment Request",
      "Nombre": "Name",
      "Email": "Email",
      "Teléfono": "Phone",
      "Ciudad": "City",
      "Identificación": "ID",
      "Motivo de la cita": "Appointment reason",
      "Por favor confirmar disponibilidad": "Please confirm availability",
      
      // Motivos de cita
      "Ciudadanía Americana (Formulario N-400)": "U.S. Citizenship (Form N-400)",
      "Certificado de Ciudadanía (Formulario N-600)": "Certificate of Citizenship (Form N-600)",
      "Renovar Certificado de Ciudadanía (Formulario N-565)": "Renew Certificate of Citizenship (Form N-565)",
      "Renovación de Green Card (Formulario I-90)": "Green Card Renewal (Form I-90)",
      "Eliminar condiciones de residencia (Formulario I-751)": "Remove Conditions for Residence (Form I-751)",
      "Ajuste de Estatus (Formulario I-485)": "Adjustment of Status (Form I-485)",
      "Green Card para familiar (Formulario I-130)": "Green Card for Family Member (Form I-130)",
      "Permiso de Trabajo (Formulario I-765)": "Employment Authorization (Form I-765)",
      "Acción Diferida (DACA) (Formulario I-821D)": "Deferred Action for Childhood Arrivals (DACA) (Form I-821D)",
      "Lotería de Green Card (DV)": "Green Card Lottery (DV)"
        },
      },
        es: {
          translation: {
            home: "Inicio",
            services_nav: "Servicios Legales",
            contact_nav: "Contacto",
            appointment: "Consultar Disponibilidad",
            hero_title: "Expertos en Derecho Migratorio",
            hero_subtitle: "Soluciones legales integrales y asesoramiento personalizado para todas sus necesidades de inmigración.",
            hero_button: "Solicitar Consulta",
            about_title: "Nuestro Despacho",
            about_description: "Nuestro equipo cuenta con décadas de experiencia combinada en oficinas de inmigración, ofreciendo representación especializada para todo tipo de casos migratorios en Jacksonville, Florida. Estamos comprometidos a guiar a la comunidad hispana a través de las complejidades del sistema migratorio estadounidense.",
            title_visa: "Visas de Trabajo",
            description_visa: "Asesoramiento estratégico para obtener autorización laboral y visas de empleo en Estados Unidos.",
            title_Residency: "Residencia Permanente",
            description_Residency: "Representación integral para solicitudes de green card basadas en familia o empleo.",
            title_Citizenship: "Naturalización",
            description_Citizenship: "Asistencia completa con solicitudes de ciudadanía y procesos de naturalización.",
            title_Immigration: "Defensa contra Deportación",
            description_Immigration: "Representación vigorosa en procedimientos de deportación y cortes migratorias.",
            services_title: "Nuestros Servicios Legales",
            services_description: "Soluciones migratorias integrales con asesoría legal especializada para individuos y familias.",
            
            process_title: "Nuestro Proceso Legal",
            step1: "Evaluación de Caso",
            description1: "Análisis exhaustivo de sus circunstancias para determinar las mejores opciones migratorias.",
            step2: "Preparación Documental",
            description2: "Recopilación meticulosa de toda la evidencia y documentación requerida.",
            step3: "Presentación de Petición",
            description3: "Envío preciso de aplicaciones al USCIS con gestión premium de su caso.",
            step4: "Resolución Final",
            description4: "Representación dedicada hasta la adjudicación final y más allá.",
            testimonials: {
              title: "Lo que dicen nuestros clientes",
              subtitle: "Experiencias reales de personas que han confiado en nuestros servicios migratorios",
              review1: "Gracias a su ayuda, pude obtener mi residencia en tiempo récord. Su conocimiento del proceso fue invaluable.",
              review2: "Un equipo confiable y profesional. Me guiaron en cada paso de mi proceso de ciudadanía. ¡Los recomiendo al 100%!",
              review3: "Excelente servicio al cliente. Resolvieron todas mis dudas sobre mi visa de trabajo rápidamente.",
            },
            contact: {
              title: "¿Necesitas ayuda con tu caso de inmigración?",
              subtitle: "Nuestros expertos están listos para asesorarte. Contacta hoy mismo para una consulta personalizada.",
              cards: {
                phone: {
                  title: "Llámanos",
                  description: "Disponibles de lunes a viernes de 9am a 4:30pm",
                  number: "+1 5308637124"
                },
                email: {
                  title: "Escríbenos",
                  description: "Responderemos en menos de 24 horas",
                  address: "marketing.libertaslcs@gmail.com"
                },
                appointment: {
                  title: "Agenda Consulta",
                  description: "Primera consulta",
                  button: "Solicitar Cita"
                },
                location: {
                  title: "Oficina en Jacksonville, FL 32216",
                  address: "4063 Salisbury Road, Suite 110",
                  hours: "Horario: Lunes a Viernes 9am-4:30pm"
                }
              }
            },
            footer: {
              companyName: "Libertas Consulting Services  LCS",
              description: "Expertos en leyes migratorias con 20 años de experiencia, brindando asesoría confiable y personalizada para tu futuro en Estados Unidos. Oficinas principales en Jacksonville, FL.",
              services: {
                title: "Servicios",
                items: [
                  "Asilo Político",
                  "Ajuste de Estatus",
                  "Renovación de Green Card",
                  "Ciudadanía Americana",
                  "Permisos de Trabajo"
                ]
              },
              contact: {
                title: "Contacto",
                address: "4063 Salisbury Road, Suite 110<br />Jacksonville, FL 32216",
                phone: "+1 5308637124",
                email: "marketing.libertaslcs@gmail.com"
              },
              legal: {
                copyright: `&copy; ${new Date().getFullYear()} Libertas Consulting Services LCS. Todos los derechos reservados.`,
                links: [
                  "Términos de Servicio",
                  "Política de Privacidad",
                  "Aviso Legal"
                ]
              }
            },
            services: {
              hero: {
                title: "Servicios de Inmigración para Tu Futuro",
                subtitle: "Guiándote en Cada Paso del Proceso Migratorio",
                cta: "Comienza Hoy"
              },
              intro: {
                title: "Tu Socio Confiable en Inmigración",
                description: "Nuestros asesores expertos brindan asistencia personalizada para todas tus necesidades migratorias, garantizando un viaje exitoso hacia la residencia. Trabajamos directamente con los servicios de USCIS, asegurando precisión y eficiencia en cada solicitud."
              },
              filter: {
                all: "Todos los Servicios",
                citizenship: "Ciudadanía",
                employment: "Empleo",
                greenCard: "Green Card",
                visas: "Visados",
                family: "Familiar",
              },
              servicesTitle: "Nuestros Servicios Migratorios",
              serviceItems: [
                {
                  title: "Ciudadanía",
                  description: "Asistencia con el Formulario N-400 para un proceso de ciudadanía sin problemas.",
                  form: "Formulario N-400"
                },
                {
                  title: "Autorización de Empleo",
                  description: "Orientación experta en el Formulario I-765 para obtener tu Documento de Autorización de Empleo.",
                  form: "Formulario I-765"
                },
                {
                  title: "Green Card",
                  description: "Soporte con el Formulario I-485 para ajustar tu estatus a residente permanente.",
                  form: "Formulario I-485"
                },
                {
                  title: "Visados",
                  description: "Ayuda con el Formulario DS-160 para visados de visita B1/B2 para negocios o turismo.",
                  form: "Formulario DS-160"
                },
                {
                  title: "Patrocinio Familiar",
                  description: "Green Card para familiares con el Formulario I-130.",
                  form: "Formulario I-130"
                },
                {
                  title: "Renovación de DACA",
                  description: "Renueva tu estatus DACA con el Formulario I-821D.",
                  form: "Formulario I-821D"
                },
                {
                  title: "Solicitud de Asilo",
                  description: "Asistencia con el Formulario I-589 para solicitantes de asilo.",
                  form: "Formulario I-589"
                },
                {
                  title: "Certificado de Ciudadanía",
                  description: "Establece tu estatus con el Formulario N-600.",
                  form: "Formulario N-600"
                }
              ],
              whyChooseUs: {
                title: "¿Por Qué Elegir Nuestros Servicios Migratorios?",
                subtitle: "Hacemos que el complejo proceso migratorio sea simple, transparente y exitoso.",
                items: [
                  {
                    icon: "🏛️",
                    title: "Experiencia con USCIS",
                    description: "Nuestro equipo trabaja directamente con los servicios de USCIS, asegurando que tus solicitudes cumplan todos los requisitos."
                  },
                  {
                    icon: "👨‍⚖️",
                    title: "Orientación Personalizada",
                    description: "Apoyo personalizado de profesionales experimentados que comprenden tu situación única."
                  },
                  {
                    icon: "📈",
                    title: "Alto Índice de Éxito",
                    description: "Historial comprobado de ayudar a clientes a alcanzar sus metas migratorias de manera eficiente."
                  }
                ]
              },
              forms: {
                title: "Trabajamos con Todos los Servicios de USCIS",
                subtitle: "Selecciona el formulario de tu preferencia para obtener información sobre tu solicitud. Nuestros agentes estarán dispuestos a ayudarte con tu trámite.",
                commonForms: "Formularios Comunes de USCIS",
                formItems: [
                  {
                    name: "Formulario N-400",
                    description: "Solicitud de Naturalización"
                  },
                  {
                    name: "Formulario I-485",
                    description: "Solicitud de Residencia Permanente"
                  },
                  {
                    name: "Formulario I-765",
                    description: "Solicitud de Autorización de Empleo"
                  },
                  {
                    name: "Formulario I-130",
                    description: "Petición para Familiar Extranjero"
                  },
                  {
                    name: "Formulario I-751",
                    description: "Petición para Eliminar Condiciones de Residencia"
                  },
                  {
                    name: "Formulario I-821D",
                    description: "Consideración de Acción Diferida para Llegados en la Infancia"
                  }
                ],
                cta: "¿Necesitas Ayuda con un Formulario Específico?"
              },
              cta: {
                title: "¿Listo para Comenzar tu Proceso Migratorio?",
                subtitle: "No navegues solo por el complejo proceso de inmigración. Deja que nuestros expertos manejen el papeleo mientras tú te enfocas en tu futuro.",
                buttons: [
                  "Agendar una Consulta",
                  "Conoce Más Sobre Nuestros Servicios"
                ]
              }
            },
            contact_pages: {  // Cambiado de 'contact' a 'contact_nav'
              hero: {
                title: "Contáctenos",
                subtitle: "Comuníquese con nuestros expertos en inmigración hoy mismo"
              },
              info: {
                title: "Nuestra Oficina",
                addressTitle: "Dirección",
                address: "4063 Salisbury Road <br/> Suite 110 <br/> Jacksonville FL 32216",
                phoneTitle: "Teléfono",
                phone: "+1 5308637124",
                emailTitle: "Correo Electrónico",
                email: "marketing.libertaslcs@gmail.com",
                hoursTitle: "Horario",
                hours: "Lunes - Viernes: 9am - 4:30pm <br />Sábado: Cerrado<br />Domingo: Cerrado",
                emergencyTitle: "Contacto de Emergencia",
                emergencyText: "Para asuntos migratorios urgentes fuera del horario laboral, llame a nuestra línea de emergencia al <span class='font-semibold'>+1 5308637124</span>."
              },
              form: {
                title: "Envíenos un Mensaje",
                nameLabel: "Nombre Completo",
                emailLabel: "Correo Electrónico",
                phoneLabel: "Número de Teléfono",
                serviceLabel: "Servicio de Interés",
                serviceDefault: "Seleccione un servicio",
                serviceOptions: [
                  "Ciudadanía",
                  "Green Card",
                  "Visa de Trabajo",
                  "Patrocinio Familiar",
                  "DACA",
                  "Asilo",
                  "Otro"
                ],
                messageLabel: "Su Mensaje",
                consentLabel: "Doy mi consentimiento para que este sitio web almacene mi información enviada para que puedan responder a mi consulta.",
                submitButton: "Enviar Mensaje",
                successTitle: "¡Gracias!",
                successMessage: "Su mensaje ha sido enviado con éxito. Nuestro equipo se comunicará con usted dentro de 24 horas."
              },
              map: {
                title: "Ubicación de la Oficina"
              },
              cta: {
                title: "Programe una Consulta Gratuita",
                subtitle: "Reserve una consulta de 30 minutos con uno de nuestros expertos en inmigración para discutir sus necesidades específicas.",
                button: "Reservar Ahora"
              }
            },
            news: {
              info: {
                blog_title: "Últimas Noticias",
                blog_description: "Manténgase informado sobre las leyes y cambios en materia de inmigración en Estados Unidos.",
                read_more: "Leer más →"
              }
            },
            "Solicitud de Cita por WhatsApp": "Solicitud de Cita por WhatsApp",
            "Complete el formulario y será redirigido a WhatsApp para confirmar": "Complete el formulario y será redirigido a WhatsApp para confirmar",
            "Nombre completo": "Nombre completo",
            "Correo electrónico": "Correo electrónico",
            "Número de teléfono": "Número de teléfono",
            "Ciudad de residencia": "Ciudad de residencia",
            "Número de identificación": "Número de identificación",
            "Seleccione un servicio": "Seleccione un servicio",
            "Fecha deseada": "Fecha deseada",
            "Hora deseada": "Hora deseada",
            "Enviar por WhatsApp": "Enviar por WhatsApp",
            "Al enviar este formulario, será redirigido a WhatsApp para confirmar su cita.": "Al enviar este formulario, será redirigido a WhatsApp para confirmar su cita.",
            "¡Formulario completado! Será redirigido a WhatsApp.": "¡Formulario completado! Será redirigido a WhatsApp.",
            "Nueva Solicitud de Cita": "Nueva Solicitud de Cita",
            "Nombre": "Nombre",
            "Email": "Email",
            "Teléfono": "Teléfono",
            "Ciudad": "Ciudad",
            "Identificación": "Identificación",
            "Motivo de la cita": "Motivo de la cita",
            "Por favor confirmar disponibilidad": "Por favor confirmar disponibilidad",

            "Ciudadanía Americana (Formulario N-400)": "Ciudadanía Americana (Formulario N-400)",
            "Certificado de Ciudadanía (Formulario N-600)": "Certificado de Ciudadanía (Formulario N-600)",
            "Renovar Certificado de Ciudadanía (Formulario N-565)": "Renovar Certificado de Ciudadanía (Formulario N-565)",
            "Renovación de Green Card (Formulario I-90)": "Renovación de Green Card (Formulario I-90)",
            "Eliminar condiciones de residencia (Formulario I-751)": "Eliminar condiciones de residencia (Formulario I-751)",
            "Ajuste de Estatus (Formulario I-485)": "Ajuste de Estatus (Formulario I-485)",
            "Green Card para familiar (Formulario I-130)": "Green Card para familiar (Formulario I-130)",
            "Permiso de Trabajo (Formulario I-765)": "Permiso de Trabajo (Formulario I-765)",
            "Acción Diferida (DACA) (Formulario I-821D)": "Acción Diferida (DACA) (Formulario I-821D)",
            "Lotería de Green Card (DV)": "Lotería de Green Card (DV)"
          },
        },
        fr: {
          translation: {
            home: "Accueil",
            services_nav: "Services Juridiques",
            contact_nav: "Contact",
            appointment: "Planifier une Consultation",
            hero_title: "Experts en Droit de l'Immigration",
            hero_subtitle: "Solutions juridiques complètes et conseils personnalisés pour tous vos besoins en matière d'immigration.",
            hero_button: "Demander une Consultation",
            about_title: "Notre Cabinet",
            about_description: "Notre équipe cumule des décennies d'expérience dans les services d'immigration, offrant une représentation spécialisée pour toutes les affaires d'immigration à Jacksonville, Floride. Nous nous engageons à guider la communauté hispanique à travers les complexités du système d'immigration américain.",
            title_visa: "Visas de Travail",
            description_visa: "Conseils stratégiques pour obtenir une autorisation de travail et des visas professionnels aux États-Unis.",
            title_Residency: "Résidence Permanente",
            description_Residency: "Représentation complète pour les demandes de carte verte familiale ou professionnelle.",
            title_Citizenship: "Naturalisation",
            description_Citizenship: "Assistance complète pour les demandes de citoyenneté américaine et les procédures de naturalisation.",
            title_Immigration: "Défense contre l'Expulsion",
            description_Immigration: "Représentation vigoureuse dans les procédures d'expulsion et les tribunaux d'immigration.",
            services_title: "Nos Services Juridiques",
            services_description: "Solutions d'immigration complètes avec conseils juridiques experts pour les particuliers et les familles.",
            
            process_title: "Notre Processus Juridique",
            step1: "Évaluation du Cas",
            description1: "Analyse approfondie de votre situation pour déterminer les meilleures options d'immigration.",
            step2: "Préparation des Documents",
            description2: "Compilation méticuleuse de toutes les preuves et documents requis.",
            step3: "Dépôt de la Demande",
            description3: "Soumission précise des dossiers à l'USCIS avec gestion premium de votre cas.",
            step4: "Résolution Finale",
            description4: "Représentation dédiée jusqu'à la décision finale et au-delà.",
            testimonials: {
              title: "Ce que disent nos clients",
              subtitle: "Expériences réelles de personnes qui ont fait confiance à nos services d'immigration",
              review1: "Grâce à leur aide, j'ai obtenu ma résidence en un temps record. Leur connaissance du processus a été inestimable.",
              review2: "Une équipe fiable et professionnelle. Ils m'ont guidé à chaque étape de mon processus de citoyenneté. 100% recommandé !",
              review3: "Excellente service client. Ils ont rapidement répondu à toutes mes questions sur mon visa de travail.",
            },
            contact: {
              title: "Besoin d'aide pour votre dossier d'immigration ?",
              subtitle: "Nos experts sont prêts à vous aider. Contactez-nous dès aujourd'hui pour une consultation personnalisée.",
              cards: {
                phone: {
                  title: "Appelez-nous",
                  description: "Disponible du lundi au vendredi de 9h à 18h",
                  number: "+1 5308637124"
                },
                email: {
                  title: "Écrivez-nous",
                  description: "Nous répondrons dans les 24 heures",
                  address: "marketing.libertaslcs@gmail.com"
                },
                appointment: {
                  title: "Prendre Rendez-vous",
                  description: "Première consultation",
                  button: "Demander un Rendez-vous"
                },
                location: {
                  title: "Bureau à Jacksonville, FL 32216",
                  address: "4063 Salisbury Road, Suite 110",
                  hours: "Heures d'ouverture : Lundi au Vendredi 9h-16:30h"
                }
              }
            },
            footer: {
              companyName: "Libertas Consulting Services LCS",
              description: "Experts en droit de l'immigration avec 20 ans d'expérience, fournissant des conseils fiables et personnalisés pour votre avenir aux États-Unis. Bureaux principaux à Jacksonville, FL.",
              services: {
                title: "Services",
                items: [
                  "Asile Politique",
                  "Ajustement de Statut",
                  "Renouvellement de Carte Verte",
                  "Citoyenneté Américaine",
                  "Permis de Travail"
                ]
              },
              contact: {
                title: "Contact",
                address: "4063 Salisbury Road, Suite 110<br />Jacksonville, FL 32216",
                phone: "+1 5308637124",
                email: "marketing.libertaslcs@gmail.com"
              },
              legal: {
                copyright: `&copy; ${new Date().getFullYear()} Libertas Consulting Services LCS. Tous droits réservés.`,
                links: [
                  "Conditions d'Utilisation",
                  "Politique de Confidentialité",
                  "Mentions Légales"
                ]
              }
            },
            services: {
              hero: {
                title: "Services d'Immigration pour Votre Avenir",
                subtitle: "Vous Guider à Chaque Étape du Processus d'Immigration",
                cta: "Commencez Aujourd'hui"
              },
              intro: {
                title: "Votre Partenaire de Confiance en Immigration",
                description: "Nos conseillers experts fournissent une assistance personnalisée pour tous vos besoins en matière d'immigration, garantissant un parcours fluide et réussi vers la résidence. Nous travaillons directement avec les services de l'USCIS, assurant précision et efficacité dans chaque demande."
              },
              filter: {
                all: "Tous les Services",
                citizenship: "Citoyenneté",
                employment: "Travail",
                greenCard: "Carte Verte",
                visas: "Visas",
                family: "Familial",
              },
              servicesTitle: "Nos Services d'Immigration",
              serviceItems: [
                {
                  title: "Citoyenneté",
                  description: "Assistance avec le Formulaire N-400 pour un processus de naturalisation sans heurts.",
                  form: "Formulaire N-400"
                },
                {
                  title: "Autorisation de Travail",
                  description: "Conseils d'experts sur le Formulaire I-765 pour obtenir votre document d'autorisation de travail.",
                  form: "Formulaire I-765"
                },
                {
                  title: "Carte Verte",
                  description: "Soutien avec le Formulaire I-485 pour ajuster votre statut à résident permanent.",
                  form: "Formulaire I-485"
                },
                {
                  title: "Visas",
                  description: "Aide avec le Formulaire DS-160 pour les visas de visiteur B1/B2 pour affaires ou tourisme.",
                  form: "Formulaire DS-160"
                },
                {
                  title: "Parrainage Familial",
                  description: "Carte Verte pour les membres de la famille avec le Formulaire I-130.",
                  form: "Formulaire I-130"
                },
                {
                  title: "Renouvellement DACA",
                  description: "Renouvelez votre statut DACA avec le Formulaire I-821D.",
                  form: "Formulaire I-821D"
                },
                {
                  title: "Demande d'Asile",
                  description: "Assistance avec le Formulaire I-589 pour les demandeurs d'asile.",
                  form: "Formulaire I-589"
                },
                {
                  title: "Certificat de Citoyenneté",
                  description: "Établissez votre statut avec le Formulaire N-600.",
                  form: "Formulaire N-600"
                }
              ],
              whyChooseUs: {
                title: "Pourquoi Choisir Nos Services d'Immigration?",
                subtitle: "Nous rendons le processus complexe d'immigration simple, transparent et réussi.",
                items: [
                  {
                    icon: "🏛️",
                    title: "Expertise USCIS",
                    description: "Notre équipe travaille directement avec les services de l'USCIS, garantissant que vos demandes répondent à toutes les exigences."
                  },
                  {
                    icon: "👨‍⚖️",
                    title: "Conseil Personnalisé",
                    description: "Un soutien personnalisé de professionnels expérimentés qui comprennent votre situation unique."
                  },
                  {
                    icon: "📈",
                    title: "Taux de Réussite Élevé",
                    description: "Antécédents prouvés d'aide aux clients pour atteindre efficacement leurs objectifs d'immigration."
                  }
                ]
              },
              forms: {
                title: "Nous Travaillons avec Tous les Services de l'USCIS",
                subtitle: "Sélectionnez le formulaire de votre choix pour obtenir des informations sur votre demande. Nos agents seront heureux de vous aider avec votre demande.",
                commonForms: "Formulaires USCIS Courants",
                formItems: [
                  {
                    name: "Formulaire N-400",
                    description: "Demande de Naturalisation"
                  },
                  {
                    name: "Formulaire I-485",
                    description: "Demande d'Enregistrement de Résidence Permanente"
                  },
                  {
                    name: "Formulaire I-765",
                    description: "Demande d'Autorisation de Travail"
                  },
                  {
                    name: "Formulaire I-130",
                    description: "Pétition pour un Parent Étranger"
                  },
                  {
                    name: "Formulaire I-751",
                    description: "Pétition pour Lever les Conditions de Résidence"
                  },
                  {
                    name: "Formulaire I-821D",
                    description: "Examen de l'Action Différée pour les Arrivées dans l'Enfance"
                  }
                ],
                cta: "Besoin d'Aide avec un Formulaire Spécifique?"
              },
              cta: {
                title: "Prêt à Commencer Votre Parcours d'Immigration?",
                subtitle: "Ne naviguez pas seul dans le processus complexe d'immigration. Laissez nos experts gérer les formalités administratives pendant que vous vous concentrez sur votre avenir.",
                buttons: [
                  "Planifier une Consultation",
                  "En Savoir Plus sur Nos Services"
                ]
              }
            },
            contact_pages: {  // Cambiado de 'contact' a 'contact_nav'
              hero: {
                title: "Contactez-nous",
                subtitle: "Contactez nos experts en immigration dès aujourd'hui"
              },
              info: {
                title: "Notre Bureau",
                addressTitle: "Adresse",
                address: "4063 Salisbury Road <br/> Suite 110 <br/> Jacksonville FL 32216",
                phoneTitle: "Téléphone",
                phone: "+1 5308637124",
                emailTitle: "Email",
                email: "marketing.libertaslcs@gmail.com",
                hoursTitle: "Heures d'ouverture",
                hours: "Lundi - Vendredi: 9h - 16:30h<br />Samedi: Fermé<br />Dimanche: Fermé",
                emergencyTitle: "Contact d'urgence",
                emergencyText: "Pour les questions d'immigration urgentes en dehors des heures d'ouverture, veuillez appeler notre ligne d'urgence au <span class='font-semibold'>+1 5308637124</span>."
              },
              form: {
                title: "Envoyez-nous un message",
                nameLabel: "Nom complet",
                emailLabel: "Adresse e-mail",
                phoneLabel: "Numéro de téléphone",
                serviceLabel: "Service intéressé",
                serviceDefault: "Sélectionnez un service",
                serviceOptions: [
                  "Citoyenneté",
                  "Carte Verte",
                  "Visa de Travail",
                  "Parrainage Familial",
                  "DACA",
                  "Asile",
                  "Autre"
                ],
                messageLabel: "Votre message",
                consentLabel: "Je consens à ce que ce site Web stocke mes informations soumises afin qu'ils puissent répondre à ma demande.",
                submitButton: "Envoyer le message",
                successTitle: "Merci!",
                successMessage: "Votre message a été envoyé avec succès. Notre équipe vous répondra dans les 24 heures."
              },
              map: {
                title: "Emplacement du bureau"
              },
              cta: {
                title: "Planifier une consultation gratuite",
                subtitle: "Réservez une consultation de 30 minutes avec l'un de nos experts en immigration pour discuter de vos besoins spécifiques.",
                button: "Réserver maintenant"
              }
            },
            news: {
              info:{
                blog_title: "Dernières nouvelles",
                blog_description: "Restez informé sur les lois et les changements en matière d'immigration aux États-Unis.",
                read_more: "En savoir plus →",
              }
            },
            "Solicitud de Cita por WhatsApp": "Demande de rendez-vous via WhatsApp",
      "Complete el formulario y será redirigido a WhatsApp para confirmar": "Remplissez le formulaire et vous serez redirigé vers WhatsApp pour confirmer",
      "Nombre completo": "Nom complet",
      "Correo electrónico": "Email",
      "Número de teléfono": "Numéro de téléphone",
      "Ciudad de residencia": "Ville de résidence",
      "Número de identificación": "Numéro d'identification",
      "Seleccione un servicio": "Sélectionnez un service",
      "Fecha deseada": "Date souhaitée",
      "Hora deseada": "Heure souhaitée",
      "Enviar por WhatsApp": "Envoyer via WhatsApp",
      "Al enviar este formulario, será redirigido a WhatsApp para confirmar su cita.": "En soumettant ce formulaire, vous serez redirigé vers WhatsApp pour confirmer votre rendez-vous.",
      "¡Formulario completado! Será redirigido a WhatsApp.": "Formulaire complété! Vous serez redirigé vers WhatsApp.",
      "Nueva Solicitud de Cita": "Nouvelle demande de rendez-vous",
      "Nombre": "Nom",
      "Email": "Email",
      "Teléfono": "Téléphone",
      "Ciudad": "Ville",
      "Identificación": "Identification",
      "Motivo de la cita": "Motif du rendez-vous",
      "Por favor confirmar disponibilidad": "Veuillez confirmer la disponibilité",
      
      // Motivos de cita
      "Ciudadanía Americana (Formulario N-400)": "Citoyenneté américaine (Formulaire N-400)",
      "Certificado de Ciudadanía (Formulario N-600)": "Certificat de citoyenneté (Formulaire N-600)",
      "Renovar Certificado de Ciudadanía (Formulario N-565)": "Renouveler le certificat de citoyenneté (Formulaire N-565)",
      "Renovación de Green Card (Formulario I-90)": "Renouvellement de la carte verte (Formulaire I-90)",
      "Eliminar condiciones de residencia (Formulario I-751)": "Supprimer les conditions de résidence (Formulaire I-751)",
      "Ajuste de Estatus (Formulario I-485)": "Ajustement de statut (Formulaire I-485)",
      "Green Card para familiar (Formulario I-130)": "Carte verte pour un membre de la famille (Formulaire I-130)",
      "Permiso de Trabajo (Formulario I-765)": "Autorisation de travail (Formulaire I-765)",
      "Acción Diferida (DACA) (Formulario I-821D)": "Action différée (DACA) (Formulaire I-821D)",
      "Lotería de Green Card (DV)": "Loterie de la carte verte (DV)"
          },
        },
        zh: {
          translation: {
            home: "首页",
            services_nav: "法律服务",
            contact_nav: "联系我们",
            appointment: "预约咨询",
            hero_title: "专业移民法律服务",
            hero_subtitle: "为您提供全面的法律解决方案和个性化的移民指导",
            hero_button: "请求咨询",
            about_title: "关于我们",
            about_description: "我们的团队在移民局拥有数十年的综合经验，为佛罗里达州杰克逊维尔的各种移民案件提供专业代理。我们致力于帮助西班牙裔社区应对美国移民体系的复杂性。",
            title_visa: "工作签证",
            description_visa: "为您提供获取美国工作授权和就业签证的战略指导",
            title_Residency: "永久居留",
            description_Residency: "全面代理家庭或就业为基础的绿卡申请",
            title_Citizenship: "入籍归化",
            description_Citizenship: "全程协助美国公民身份申请和归化程序",
            title_Immigration: "驱逐辩护",
            description_Immigration: "在驱逐程序和移民法庭中提供强有力的代理",
            services_title: "我们的法律服务",
            services_description: "为个人和家庭提供全方位的移民解决方案和专业法律咨询",
            
            process_title: "我们的法律流程",
            step1: "案件评估",
            description1: "全面分析您的情况以确定最佳移民途径",
            step2: "文件准备",
            description2: "精心整理所有需要的证明文件和材料",
            step3: "申请提交",
            description3: "精准向USCIS提交申请并提供优质案件管理",
            step4: "案件解决",
            description4: "全程代理直至最终裁决及后续事宜",
            testimonials: {
              title: "客户评价",
              subtitle: "信任我们移民服务的客户的真实体验",
              review1: "在他们的帮助下，我以创纪录的时间获得了居留权。他们对流程的了解非常宝贵。",
              review2: "可靠专业的团队。他们指导我完成公民身份申请的每一步。100%推荐！",
              review3: "出色的客户服务。他们迅速解答了我关于工作签证的所有问题。",
            },
            contact: {
              title: "需要移民案件帮助吗？",
              subtitle: "我们的专家随时准备为您提供帮助。立即联系我们获取个性化咨询。",
              cards: {
                phone: {
                  title: "电话联系",
                  description: "周一至周五上午9点至下午4:30可用",
                  number: "+1 530-863-7124"
                },
                email: {
                  title: "发送邮件",
                  description: "我们将在24小时内回复",
                  address: "marketing.libertaslcs@gmail.com"
                },
                appointment: {
                  title: "预约咨询",
                  description: "首次咨询",
                  button: "申请预约"
                },
                location: {
                  title: "佛罗里达州杰克逊维尔办公室",
                  address: "4063 Salisbury Road  Suite 110  Jacksonville FL 32216",
                  hours: "营业时间：周一至周五 上午9点至下午4:30"
                }
              }
            },
            footer: {
              companyName: "Libertas Consulting Services  LCS",
              description: "拥有20年经验的移民法律专家，为您的美国未来提供可靠和个性化的建议。主要办事处位于佛罗里达州杰克逊维尔。",
              services: {
                title: "服务项目",
                items: [
                  "政治庇护",
                  "身份调整",
                  "绿卡更新",
                  "美国公民身份",
                  "工作许可"
                ]
              },
              contact: {
                title: "联系方式",
                address: "4063 Salisbury Road,Suite 110 <br />Jacksonville FL 32216",
                phone: "+1 5308637124",
                email: "marketing.libertaslcs@gmail.com"
              },
              legal: {
                copyright: `&copy; ${new Date().getFullYear()} Libertas Consulting Services LCS。保留所有权利。`,
                links: [
                  "服务条款",
                  "隐私政策",
                  "法律声明"
                ]
              }
            },
            services: {
              hero: {
                title: "移民服务为您的未来",
                subtitle: "指导您完成移民过程的每一步",
                cta: "立即开始"
              },
              intro: {
                title: "您可信赖的移民合作伙伴",
                description: "我们的专家顾问为您所有的移民需求提供个性化协助，确保顺利成功地获得居留权。我们直接与USCIS服务合作，确保每份申请的准确性和效率。"
              },
              filter: {
                all: "所有服务",
                citizenship: "公民身份",
                employment: "工作授权",
                greenCard: "绿卡",
                visas: "签证",
                family: "家庭担保",
              },
              servicesTitle: "我们的移民服务",
              serviceItems: [
                {
                  title: "公民身份",
                  description: "协助填写N-400表格，顺利完成公民身份申请流程。",
                  form: "表格N-400"
                },
                {
                  title: "工作授权",
                  description: "专家指导填写I-765表格以获得工作授权文件。",
                  form: "表格I-765"
                },
                {
                  title: "绿卡",
                  description: "支持填写I-485表格调整身份成为永久居民。",
                  form: "表格I-485"
                },
                {
                  title: "签证",
                  description: "协助填写DS-160表格申请B1/B2商务或旅游访问签证。",
                  form: "表格DS-160"
                },
                {
                  title: "家庭担保",
                  description: "通过I-130表格为家人申请绿卡。",
                  form: "表格I-130"
                },
                {
                  title: "DACA续签",
                  description: "通过I-821D表格续签您的DACA身份。",
                  form: "表格I-821D"
                },
                {
                  title: "庇护申请",
                  description: "协助寻求庇护者填写I-589表格。",
                  form: "表格I-589"
                },
                {
                  title: "公民证书",
                  description: "通过N-600表格确立身份。",
                  form: "表格N-600"
                }
              ],
              whyChooseUs: {
                title: "为什么选择我们的移民服务？",
                subtitle: "我们将复杂的移民过程变得简单、透明且成功。",
                items: [
                  {
                    icon: "🏛️",
                    title: "USCIS专业知识",
                    description: "我们的团队直接与USCIS服务合作，确保您的申请符合所有要求。"
                  },
                  {
                    icon: "👨‍⚖️",
                    title: "个性化指导",
                    description: "来自理解您独特情况的经验丰富的专业人士的一对一支持。"
                  },
                  {
                    icon: "📈",
                    title: "高成功率",
                    description: "帮助客户高效实现移民目标的良好记录。"
                  }
                ]
              },
              forms: {
                title: "我们处理所有USCIS服务",
                subtitle: "选择您需要的表格获取相关信息。我们的顾问很乐意帮助您完成申请。",
                commonForms: "常见USCIS表格",
                formItems: [
                  {
                    name: "表格N-400",
                    description: "入籍申请"
                  },
                  {
                    name: "表格I-485",
                    description: "永久居留登记申请"
                  },
                  {
                    name: "表格I-765",
                    description: "工作许可申请"
                  },
                  {
                    name: "表格I-130",
                    description: "外籍亲属申请"
                  },
                  {
                    name: "表格I-751",
                    description: "解除居留条件申请"
                  },
                  {
                    name: "表格I-821D",
                    description: "童年入境暂缓遣返考虑"
                  }
                ],
                cta: "需要特定表格的帮助？"
              },
              cta: {
                title: "准备好开始您的移民之旅了吗？",
                subtitle: "不要独自应对复杂的移民流程。让我们的专家处理文书工作，您只需专注于未来。",
                buttons: [
                  "预约咨询",
                  "了解更多服务"
                ]
              }
            },
            contact_pages: {  // Cambiado de 'contact' a 'contact_nav'
              hero: {
                title: "联系我们",
                subtitle: "立即与我们的移民专家取得联系"
              },
              info: {
                title: "我们的办公室",
                addressTitle: "地址",
                address: "4063 萨利斯伯里路 <br/> 110 室 <br /> 佛罗里达州杰克逊维尔 32216",
                phoneTitle: "电话",
                phone: "+1 5308637124",
                emailTitle: "电子邮件",
                email: "marketing.libertaslcs@gmail.com",
                hoursTitle: "营业时间",
                hours: "周一 - 周五: 上午9点 - 下午4:30 <br /> 周六 - 周日: 休息",
                emergencyTitle: "紧急联系",
                emergencyText: "对于工作时间以外的紧急移民事务，请拨打我们的紧急热线 <span class='font-semibold'>+1 5308637124</span>。"
              },
              form: {
                title: "发送消息给我们",
                nameLabel: "全名",
                emailLabel: "电子邮件地址",
                phoneLabel: "电话号码",
                serviceLabel: "感兴趣的服务",
                serviceDefault: "选择服务",
                serviceOptions: [
                  "公民身份",
                  "绿卡",
                  "工作签证",
                  "家庭担保",
                  "DACA",
                  "庇护",
                  "其他"
                ],
                messageLabel: "您的消息",
                consentLabel: "我同意本网站存储我提交的信息以便他们可以回复我的咨询。",
                submitButton: "发送消息",
                successTitle: "谢谢您!",
                successMessage: "您的消息已成功发送。我们的团队将在24小时内回复您。"
              },
              map: {
                title: "办公室位置"
              },
              cta: {
                title: "安排免费咨询",
                subtitle: "预约30分钟的咨询与我们的一位移民专家讨论您的具体需求。",
                button: "立即预约"
              }
            },
            news: {
              info: {
                blog_title: "暂无新闻",
                blog_description: "当前语言不支持新闻内容。",
                read_more: "返回首页 →"
              }
            },
            "Solicitud de Cita por WhatsApp": "通过WhatsApp预约",
      "Complete el formulario y será redirigido a WhatsApp para confirmar": "填写表格后，您将被重定向到WhatsApp进行确认",
      "Nombre completo": "全名",
      "Correo electrónico": "电子邮件",
      "Número de teléfono": "电话号码",
      "Ciudad de residencia": "居住城市",
      "Número de identificación": "身份证号码",
      "Seleccione un servicio": "选择服务",
      "Fecha deseada": "期望日期",
      "Hora deseada": "期望时间",
      "Enviar por WhatsApp": "通过WhatsApp发送",
      "Al enviar este formulario, será redirigido a WhatsApp para confirmar su cita.": "提交此表格后，您将被重定向到WhatsApp确认您的预约。",
      "¡Formulario completado! Será redirigido a WhatsApp.": "表格已完成！您将被重定向到WhatsApp。",
      "Nueva Solicitud de Cita": "新的预约请求",
      "Nombre": "姓名",
      "Email": "电子邮件",
      "Teléfono": "电话",
      "Ciudad": "城市",
      "Identificación": "身份证",
      "Motivo de la cita": "预约原因",
      "Por favor confirmar disponibilidad": "请确认可用性",
      
      // Motivos de cita
      "Ciudadanía Americana (Formulario N-400)": "美国公民身份 (表格 N-400)",
      "Certificado de Ciudadanía (Formulario N-600)": "公民证书 (表格 N-600)",
      "Renovar Certificado de Ciudadanía (Formulario N-565)": "更新公民证书 (表格 N-565)",
      "Renovación de Green Card (Formulario I-90)": "绿卡更新 (表格 I-90)",
      "Eliminar condiciones de residencia (Formulario I-751)": "取消居住条件 (表格 I-751)",
      "Ajuste de Estatus (Formulario I-485)": "身份调整 (表格 I-485)",
      "Green Card para familiar (Formulario I-130)": "家庭成员绿卡 (表格 I-130)",
      "Permiso de Trabajo (Formulario I-765)": "工作许可 (表格 I-765)",
      "Acción Diferida (DACA) (Formulario I-821D)": "童年入境暂缓遣返 (DACA) (表格 I-821D)",
      "Lotería de Green Card (DV)": "绿卡抽签 (DV)"
          }
        }
    },
    fallbackLng: "es", // Idioma por defecto
    detection: {
      order: ["localStorage", "navigator"], // Detecta primero en localStorage y luego en el navegador
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
