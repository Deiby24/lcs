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
          wtpButton: "Chat with us!",
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
              id: 1,
              title: "Citizenship",
              description: "Assistance with Form N-400 for a smooth citizenship process.",
              form: "Form N-400",
              content: "USCIS Form N-400: Application for U.S. Citizenship",
              contentSubtitle: "Do You Qualify?",
              contentFirstPoint: "Residence",
              contentFirstPointText: "To qualify for U.S. citizenship, you must have been a permanent resident (Green Card holder) for at least 5 years. If you are married to a U.S. citizen, this period is reduced to 3 years. During this time, you must have lived continuously in the United States.",
              contentSecondPoint: "Physical Presence",
              contentSecondPointText: "You must have been physically present in the United States for at least 30 months out of the last 5 years before filing your application. If you are married to a U.S. citizen, you must have been present for at least 18 months out of the last 3 years.",
              contentThirdPoint: "Good Moral Character",
              contentThirdPointText: "To be eligible, you must demonstrate good moral character. This includes paying taxes, obeying U.S. laws, and having no serious criminal record. USCIS will evaluate your conduct during the required residency period.",
              contentFourPoint: "Oath of Allegiance",
              contentFourPointText: "One of the final steps to obtaining citizenship is taking the Oath of Allegiance to the United States. By doing so, you pledge to support and defend the Constitution and the laws of the country, renouncing allegiance to other countries.",
              contentFinal: "If you meet these basic requirements, you can proceed to complete and submit Form N-400 to begin your path to U.S. citizenship. Good luck!"
            },
            {
              id: 2,
              title: "Employment Authorization",
              description: "Expert guidance on Form I-765 to obtain your Employment Authorization Document.",
              form: "Form I-765",
              content: "Everything You Need to Know About EAD",
              contentSubtitle: "Employment Authorization Document that allows legal work in the United States",
              contentFirstPoint: "What is EAD?",
              contentFirstPointText: "The Employment Authorization Document (EAD) is a work permit issued by USCIS that demonstrates your legal right to work in the U.S. It is obtained through Form I-765 and contains: your name, photo, A-number, immigration category, and validity dates.",
              contentSecondPoint: "Who Needs to Apply?",
              contentSecondPointText: "People who are not citizens or permanent residents but need to work legally, including:\n- Asylum seekers/refugees\n- Students (certain types of employment)\n- Adjustment of status applicants\n- TPS beneficiaries\n- Spouses of visa holders (K, J-2, E, L)",
              contentThirdPoint: "Types and Application Process",
              contentThirdPointText: "1. Initial EAD: First application\n2. Renewal: Submit ≤120 days before expiration\n3. Replacement: For lost/damaged cards\n\nProcess: Submit Form I-765 to receive temporary authorization (duration varies by immigration status). Approval allows work for any employer without sponsorship.",
              contentFourPoint: "Key Benefits",
              contentFourPointText: "- Legal work authorization\n- No employer restrictions\n- Valid for completing Form I-9\n- Work flexibility\n\nNote: Processing times vary. Renew early to avoid employment interruptions.",
              contentFinal: "For updated information on requirements and processing times, always check the official USCIS website."
            },
            {
              id: 3,
              title: "Green Card",
              description: "Support with Form I-485 to adjust your status to permanent resident.",
              form: "Form I-485",
              content: "Adjustment of Status for Permanent Residence",
              contentSubtitle: "Green Card application from within the United States",
              contentFirstPoint: "What is Form I-485?",
              contentFirstPointText: "Form I-485 allows certain foreigners in the U.S. to change their immigration status to permanent resident (obtain Green Card). It must be filed with USCIS and is available for people with:\n- Approved immigrant petition\n- Current priority date\n- Valid status in the country",
              contentSecondPoint: "Eligibility Requirements",
              contentSecondPointText: "1. Be physically present in the U.S.\n2. Have an approved immigrant petition (unless asylum/refugee)\n3. Visa available (current priority date)\n4. No serious immigration violations\n5. Be admissible to the U.S.",
              contentThirdPoint: "Eligible Categories",
              contentThirdPointText: "1. Family: Spouses, parents or children of U.S. citizens\n2. Employment: Employer-sponsored\n3. Asylum/Refugees: After 1 year in status\n4. Special Cases: VAWA, SIV, among others\n\n*People outside the U.S. must follow consular processing",
              contentFourPoint: "Benefits and Process",
              contentFourPointText: "Advantages:\n- Allows work with EAD while processing\n- Possibility to travel with Advance Parole\n- Path to citizenship (after 3-5 years)\n\nProcess:\n1. Submit I-485 + documents\n2. Attend biometrics\n3. Interview (in most cases)\n4. USCIS decision\n\n*Refugees are fee-exempt",
              contentFinal: "For more information about specific requirements and necessary documentation, visit the official USCIS website or consult with a qualified immigration attorney."
            },
            {
              id: 4,
              title: "Visas",
              description: "Help with Form DS-160 for B1/B2 visitor visas for business or tourism.",
              form: "Form DS-160",
              content: "B1/B2 Visa Application Process",
              contentSubtitle: "Online application for business (B1) or tourism (B2) visas",
              contentFirstPoint: "What is Form DS-160?",
              contentFirstPointText: "The DS-160 is the mandatory electronic form to apply for:\n\n• Business visas (B1)\n• Tourism visas (B2)\n• Combined B1/B2 visas\n\nIt must be completed before scheduling the consular interview.",
              contentSecondPoint: "Key Requirements",
              contentSecondPointText: "Required documentation:\n\n1. Valid passport (6+ months validity)\n2. Recent digital photo (5x5 cm, white background)\n3. Travel itinerary (flights, accommodation)\n4. Proof of economic/social ties in your country\n5. For B1: Company letter detailing trip purpose",
              contentThirdPoint: "Step-by-Step Process",
              contentThirdPointText: "1. Complete the DS-160 online:\n   - Personal data\n   - Travel history\n   - Employment information\n   - U.S. contacts\n\n2. Pay the MRV fee ($160 USD)\n\n3. Schedule interview at the consulate\n\n4. Attend appointment with all documents",
              contentFourPoint: "Key Tips",
              contentFourPointText: "To increase approval chances:\n\n• Verify all data 3 times\n• Answers must match your documentation\n• Prepare for the interview:\n  - Clearly explain trip purpose\n  - Demonstrate you'll return to your country\n  - Bring original documents and copies\n\n• Avoid mentioning intent to work or study",
              contentFinal: "Important: The DS-160 doesn't guarantee visa approval. The final decision is made by the consular officer during the interview. Typical processing: 2-3 weeks."
            },
            {
              id: 5,
              title: "Family Sponsorship",
              description: "Green Card for relatives with Form I-130.",
              form: "Form I-130",
              content: "Family-Based Immigration Petition",
              contentSubtitle: "Help your relative obtain lawful permanent residence in the U.S.",
              contentFirstPoint: "What is Form I-130?",
              contentFirstPointText: "Form I-130 is used by U.S. citizens and permanent residents to:\n\n• Establish a qualifying relationship with a foreign relative\n• Initiate the family-based immigration process\n• Secure a visa number for eligible relatives\n\nThis is the first step in obtaining a Green Card for your family member.",
              contentSecondPoint: "Who Can You Sponsor?",
              contentSecondPointText: "U.S. Citizens Can Petition:\n- Spouse\n- Parents\n- Children (any age/marital status)\n- Siblings\n\nPermanent Residents Can Petition:\n- Spouse\n- Unmarried children (any age)\n\nNote: You must file separate I-130 forms for each relative.",
              contentThirdPoint: "Required Documentation",
              contentThirdPointText: "Essential evidence includes:\n\n1. Proof of your status:\n   - Birth certificate (U.S. citizens)\n   - Naturalization certificate\n   - Green Card (permanent residents)\n\n2. Proof of relationship:\n   - Marriage certificates\n   - Birth certificates\n   - Adoption decrees\n\n3. Financial support evidence (for later I-864 filing)",
              contentFourPoint: "Process Overview",
              contentFourPointText: "1. File Form I-130 with USCIS\n2. Wait for petition approval\n3. Relative applies for visa:\n   - Abroad: Through consular processing\n   - In U.S.: Via Form I-485 adjustment\n\nProcessing Times:\n• Immediate relatives: No wait\n• Others: Varies by category/country (1-10+ years)\n\nNote: All applicants must pass medical and background checks",
              contentFinal: "Important: Approval of I-130 doesn't guarantee a visa. Your relative must still meet all eligibility requirements. Consult an immigration attorney for complex cases."
            },
            {
              id: 6,
              title: "DACA Renewal",
              description: "Renew your DACA status with Form I-821D.",
              form: "Form I-821D",
              content: "DACA Program Overview",
              contentSubtitle: "Temporary protection for eligible individuals who came to the U.S. as children",
              contentFirstPoint: "Current DACA Status",
              contentFirstPointText: "• Renewals Only: USCIS currently only processes DACA renewal applications\n• No New Applications: Initial applications are not being accepted\n• Limited Window: Only recipients whose status expires between September 5, 2017 and March 5, 2018 can renew\n\nNote: Those who never had DACA cannot currently apply",
              contentSecondPoint: "Eligibility Requirements",
              contentSecondPointText: "To qualify for DACA you must:\n\n1. Have entered U.S. before age 16\n2. Been under 31 as of June 15, 2012\n3. Lived continuously in U.S. since June 15, 2007\n4. Been physically present on June 15, 2012\n5. Had no lawful status as of June 15, 2012\n6. Meet education/military requirements:\n   - Currently in school OR\n   - High school diploma/GED OR\n   - Honorably discharged veteran\n7. No serious criminal history",
              contentThirdPoint: "Required Documentation",
              contentThirdPointText: "Proof needed includes:\n\n• Identity Documents:\n  - Passport/birth certificate\n  - Government-issued IDs\n\n• Continuous Residence Proof:\n  - School/medical records\n  - Employment history\n  - Financial records\n\n• Education/Military Proof:\n  - Diplomas/transcripts\n  - GED certificate\n  - Military service records",
              contentFourPoint: "Application Process",
              contentFourPointText: "For eligible renewals:\n\n1. File Form I-821D\n2. Submit Form I-765 for work authorization\n3. Pay $495 fee\n4. Provide biometrics\n5. Wait for USCIS processing\n\nProcessing Time: Typically 4-6 months\n\nBenefits:\n• Protection from deportation\n• Work authorization\n• Social Security number\n\nNote: DACA does NOT provide:\n• Legal permanent status\n• Path to citizenship\n• Federal financial aid eligibility",
              contentFinal: "Important: If your DACA expired after March 2018, consult an immigration attorney immediately. Court rulings may affect program availability - check USCIS website for updates before applying."
            },
            {
              id: 7,
              title: "Asylum Application",
              description: "Assistance with Form I-589 for asylum seekers.",
              form: "Form I-589",
              content: "Protection from Persecution in the U.S.",
              contentSubtitle: "Legal process for individuals fearing persecution in their home country",
              contentFirstPoint: "What is Form I-589?",
              contentFirstPointText: "Form I-589 serves three key purposes:\n\n• Application for asylum (permanent protection)\n• Request for withholding of removal (deportation protection)\n• Protection under the Convention Against Torture (CAT)\n\nThis is the primary form for seeking protection in the U.S. based on fear of persecution.",
              contentSecondPoint: "Eligibility Requirements",
              contentSecondPointText: "To qualify you must:\n\n1. Demonstrate well-founded fear of persecution due to:\n   - Race/Religion\n   - Nationality\n   - Political opinion\n   - Social group membership\n\n2. Be physically present in the U.S. (regardless of entry method)\n3. File within 1 year of arrival (with exceptions for extraordinary circumstances)\n4. Not have:\n   - Previous deportation orders\n   - Denied asylum application after full hearing",
              contentThirdPoint: "Required Documentation",
              contentThirdPointText: "Essential evidence includes:\n\n• Completed Form I-589\n• Detailed personal statement:\n  - Specific incidents of persecution\n  - Country conditions\n  - Why you can't return\n\n• Supporting evidence:\n  - Medical/psychological reports\n  - Police reports\n  - News articles\n  - Witness statements\n  - Certified translations of all foreign documents\n\n• Two passport-style photos",
              contentFourPoint: "Application Process & Benefits",
              contentFourPointText: "Filing Steps:\n1. Complete and sign Form I-589\n2. Compile supporting evidence\n3. Submit to USCIS\n4. Attend biometrics appointment\n5. Interview with asylum officer\n6. Receive decision\n\nPotential Benefits:\n• Protection from deportation\n• Work authorization\n• Path to permanent residency\n• Ability to petition for family members\n• Access to social services",
              contentFinal: "Important: Asylum cases are complex. Strongly recommended to:\n• Consult with an immigration attorney\n• Submit application within 1-year deadline\n• Provide detailed, consistent evidence\n• Check USCIS website for current processing times"
            },
            {
              id: 8,
              title: "Certificate of Citizenship",
              description: "Establish your status with Form N-600.",
              form: "Form N-600",
              content: "Certificate of U.S. Citizenship: Form N-600",
              contentSubtitle: "A person born outside the United States to U.S. citizen parents may have already acquired U.S. citizenship. To document their citizenship status based on their ancestry, they can file Form N-600, Application for Certificate of Citizenship.",
              contentFirstPoint: "Who Should File Form N-600?",
              contentFirstPointText: "A person can file Form N-600 if they are trying to claim U.S. citizenship by law while in the United States or if they were born abroad to U.S. citizen parents.",
              contentSecondPoint: "Automatic Citizenship by Law",
              contentSecondPointText: "They automatically become a U.S. citizen if they meet the following requirements:\n- Citizen Parent: At least one parent is a U.S. citizen by birth or through the naturalization process.\n- Residence in the United States: The individual lives in the U.S. with their U.S. citizen parent.\n- Legal Admission as a Permanent Resident: The individual was legally admitted as a permanent resident.\n- Underage: The individual is still under 18 years of age.\n- Legal Custody: The individual is the biological child under the legal custody of a U.S. citizen parent before turning 16.",
              contentThirdPoint: "Citizenship by Birth Abroad",
              contentThirdPointText: "An individual born outside the United States to U.S. citizen parents may claim citizenship automatically at birth if they meet the following requirements:\n- Both parents are U.S. citizens, and one of them resided in the U.S. before the individual's birth.\n- Or, if one parent is a foreign citizen and the other is a U.S. citizen who, before the individual's birth, was physically present in the U.S. for a period or periods totaling no less than five years, at least two of which were after the parent turned 14.",
              contentFourPoint: "Additional Requirements",
              contentFourPointText: "A person may also apply for a Certificate of Citizenship if the following happened before turning 18 and before February 27, 2001:\n- The individual lived continuously in the U.S. after being legally admitted as a permanent resident; and\n- Both parents, the parent awarded physical and legal custody, or the sole surviving parent is a U.S. citizen by naturalization.",
              contentFivePoint: "Application by a Parent or Guardian",
              contentFivePointText: "If an individual was adopted or is the biological child under 18 who meets the requirements for citizenship under the Immigration and Nationality Act (INA), the Form N-600 application must be submitted by the U.S. citizen parent or legal guardian who has legal and physical custody of the child.",
              contentSixPoint: "How to File Form N-600?",
              contentSixPointText: "To start the process, you must complete and submit Form N-600 along with the required documentation demonstrating that you meet the specified criteria. This certificate serves as official proof of your status as a U.S. citizen."
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
              emergencyText: "Our only contact line for immigration matters is <span class='font-semibold'>+1 5308637124</span>."
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
              title: "Office Location",
              button:'See on google maps'
            },
            cta: {
              title: "Schedule a Free Consultation",
              subtitle: "Book a 30-minute consultation with one of our immigration experts to discuss your specific needs.",
              button: "Book Now"
            },
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
          wtpButton: "¡Chatea con nosotros!",
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
                id: 1,
                title: "Ciudadanía",
                description: "Asistencia con el Formulario N-400 para un proceso de ciudadanía sin problemas.",
                form: "Formulario N-400",
                content: "Formulario N-400 de USCIS: Solicitud de Ciudadanía Estadounidense",
                contentSubtitle: "¿Cumples con los requisitos?",
                contentFirstPoint: "Residencia",
                contentFirstPointText: "Para calificar para la ciudadanía estadounidense, debes haber sido residente permanente (titular de Green Card) durante al menos 5 años. Si estás casado con un ciudadano estadounidense, este período se reduce a 3 años. Durante este tiempo, debes haber vivido continuamente en Estados Unidos.",
                contentSecondPoint: "Presencia Física",
                contentSecondPointText: "Debes haber estado físicamente presente en Estados Unidos durante al menos 30 meses de los últimos 5 años antes de presentar tu solicitud. Si estás casado con un ciudadano estadounidense, debes haber estado presente durante al menos 18 meses de los últimos 3 años.",
                contentThirdPoint: "Buen Carácter Moral",
                contentThirdPointText: "Para ser elegible, debes demostrar buen carácter moral. Esto incluye pagar impuestos, obedecer las leyes de EE.UU. y no tener antecedentes penales graves. USCIS evaluará tu conducta durante el período de residencia requerido.",
                contentFourPoint: "Juramento de Lealtad",
                contentFourPointText: "Uno de los pasos finales para obtener la ciudadanía es tomar el Juramento de Lealtad a Estados Unidos. Al hacerlo, prometes apoyar y defender la Constitución y las leyes del país, renunciando a la lealtad a otros países.",
                contentFinal: "Si cumples con estos requisitos básicos, puedes proceder a completar y enviar el Formulario N-400 para comenzar tu camino hacia la ciudadanía estadounidense. ¡Buena suerte!"
              },
              {
                id: 2,
                title: "Autorización de Empleo",
                description: "Orientación experta en el Formulario I-765 para obtener tu Documento de Autorización de Empleo.",
                form: "Formulario I-765",
                content: "Todo lo que necesitas saber sobre el EAD",
                contentSubtitle: "Documento de Autorización de Empleo que permite trabajar legalmente en Estados Unidos",
                contentFirstPoint: "¿Qué es el EAD?",
                contentFirstPointText: "El Employment Authorization Document (EAD) es un permiso de trabajo emitido por USCIS que demuestra tu derecho legal a trabajar en EE.UU. Se obtiene mediante el Formulario I-765 y contiene: tu nombre, foto, número A, categoría migratoria y fechas de validez.",
                contentSecondPoint: "¿Quién necesita solicitarlo?",
                contentSecondPointText: "Personas que no son ciudadanas ni residentes permanentes pero necesitan trabajar legalmente, incluyendo:\n- Asilados/refugiados\n- Estudiantes (ciertos tipos de empleo)\n- Solicitantes de ajuste de estatus\n- Beneficiarios de TPS\n- Cónyuges de titulares de visas (K, J-2, E, L)",
                contentThirdPoint: "Tipos y proceso de solicitud",
                contentThirdPointText: "1. EAD inicial: Primera solicitud\n2. Renovación: Presentar ≤120 días antes de la expiración\n3. Reemplazo: Para tarjetas perdidas/dañadas\n\nProceso: Presentar Form I-765 para recibir autorización temporal (la duración varía según estatus migratorio). La aprobación permite trabajar para cualquier empleador sin necesidad de patrocinio.",
                contentFourPoint: "Beneficios clave",
                contentFourPointText: "- Autorización legal para trabajar\n- Sin restricciones de empleador\n- Válido para completar el Form I-9\n- Flexibilidad laboral\n\nNota: Los tiempos de procesamiento varían. Renueva con anticipación para evitar interrupciones en tu empleo.",
                contentFinal: "Para información actualizada sobre requisitos y tiempos de procesamiento, consulta siempre el sitio web oficial de USCIS."
              },
              {
                id: 3,
                title: "Green Card",
                description: "Soporte con el Formulario I-485 para ajustar tu estatus a residente permanente.",
                form: "Formulario I-485",
                content: "Ajuste de Estatus para Residencia Permanente",
                contentSubtitle: "Solicitud de Green Card desde dentro de Estados Unidos",
                contentFirstPoint: "¿Qué es el Formulario I-485?",
                contentFirstPointText: "El Form I-485 permite a ciertos extranjeros en EE.UU. cambiar su estatus migratorio a residente permanente (obtener Green Card). Debe presentarse ante USCIS y está disponible para personas con:\n- Petición de inmigrante aprobada\n- Fecha de prioridad vigente\n- Estatus válido en el país",
                contentSecondPoint: "Requisitos de Elegibilidad",
                contentSecondPointText: "1. Estar físicamente presente en EE.UU.\n2. Tener una petición de inmigrante aprobada (a menos que sea asilado/refugiado)\n3. Visa disponible (fecha de prioridad corriente)\n4. No tener violaciones migratorias graves\n5. Ser admisible a EE.UU.",
                contentThirdPoint: "Categorías Elegibles",
                contentThirdPointText: "1. Familiares: Cónyuges, padres o hijos de ciudadanos estadounidenses\n2. Empleo: Patrocinados por empleador\n3. Asilados/Refugiados: Después de 1 año en estatus\n4. Casos Especiales: VAWA, SIV, entre otros\n\n*Personas fuera de EE.UU. deben seguir el proceso consular",
                contentFourPoint: "Beneficios y Proceso",
                contentFourPointText: "Ventajas:\n- Permite trabajar con EAD mientras se procesa\n- Posibilidad de viajar con Advance Parole\n- Camino a ciudadanía (después de 3-5 años)\n\nProceso:\n1. Presentar I-485 + documentos\n2. Asistir a biométricos\n3. Entrevista (en la mayoría de casos)\n4. Decisión de USCIS\n\n*Refugiados están exentos de tarifa",
                contentFinal: "Para mayor información sobre requisitos específicos y documentación necesaria, visite el sitio oficial de USCIS o consulte con un abogado de inmigración calificado."
              },
              {
                id: 4,
                title: "Visados",
                description: "Ayuda con el Formulario DS-160 para visados de visita B1/B2 para negocios o turismo.",
                form: "Formulario DS-160",
                content: "Proceso de Solicitud de Visado B1/B2",
                contentSubtitle: "Solicitud en línea para visados de negocios (B1) o turismo (B2)",
                contentFirstPoint: "¿Qué es el Formulario DS-160?",
                contentFirstPointText: "El DS-160 es el formulario electrónico obligatorio para solicitar:\n\n• Visados de negocios (B1)\n• Visados de turismo (B2)\n• Visados combinados B1/B2\n\nEs necesario completarlo antes de programar la entrevista consular.",
                contentSecondPoint: "Requisitos Clave",
                contentSecondPointText: "Documentación necesaria:\n\n1. Pasaporte válido (6+ meses de vigencia)\n2. Foto digital reciente (5x5 cm, fondo blanco)\n3. Itinerario de viaje (vuelos, alojamiento)\n4. Prueba de lazos económicos/sociales en tu país\n5. Para B1: Carta de la empresa detallando el propósito del viaje",
                contentThirdPoint: "Proceso Paso a Paso",
                contentThirdPointText: "1. **Completar el DS-160** en línea:\n   - Datos personales\n   - Historial de viajes\n   - Información laboral\n   - Contactos en EE.UU.\n\n2. **Pagar la tarifa** MRV ($160 USD)\n\n3. **Programar entrevista** en el consulado\n\n4. **Asistir a la cita** con todos los documentos",
                contentFourPoint: "Consejos Clave",
                contentFourPointText: "Para aumentar tus posibilidades de aprobación:\n\n• Verifica 3 veces todos los datos\n• Las respuestas deben ser consistentes con tu documentación\n• Prepara para la entrevista:\n  - Explica claramente el propósito del viaje\n  - Demuestra que regresarás a tu país\n  - Lleva documentos originales y copias\n\n• Evita mencionar intención de trabajar o estudiar",
                contentFinal: "Importante: El DS-160 no garantiza la aprobación del visado. La decisión final la toma el oficial consular durante la entrevista. Procesamiento típico: 2-3 semanas."
              },
              {
                id: 5,
                title: "Patrocinio Familiar",
                description: "Green Card para familiares con el Formulario I-130.",
                form: "Formulario I-130",
                content: "Petición de Inmigración Basada en Familia",
                contentSubtitle: "Ayuda a tu familiar a obtener residencia permanente legal en EE.UU.",
                contentFirstPoint: "¿Qué es el Formulario I-130?",
                contentFirstPointText: "El Form I-130 es utilizado por ciudadanos y residentes permanentes de EE.UU. para:\n\n• Establecer una relación familiar calificada\n• Iniciar el proceso de inmigración basado en familia\n• Obtener un número de visa para familiares elegibles\n\nEste es el primer paso para obtener una Green Card para tu familiar.",
                contentSecondPoint: "¿A Quién Puedes Patrocinar?",
                contentSecondPointText: "Ciudadanos Estadounidenses Pueden Peticionar:\n- Cónyuge\n- Padres\n- Hijos (cualquier edad/estado civil)\n- Hermanos\n\nResidentes Permanentes Pueden Peticionar:\n- Cónyuge\n- Hijos solteros (cualquier edad)\n\nNota: Debes presentar formularios I-130 separados para cada familiar.",
                contentThirdPoint: "Documentación Requerida",
                contentThirdPointText: "Evidencia esencial incluye:\n\n1. Prueba de tu estatus:\n   - Acta de nacimiento (ciudadanos)\n   - Certificado de naturalización\n   - Green Card (residentes permanentes)\n\n2. Prueba de relación familiar:\n   - Certificados de matrimonio\n   - Actas de nacimiento\n   - Decretos de adopción\n\n3. Evidencia de apoyo financiero (para el posterior Form I-864)",
                contentFourPoint: "Resumen del Proceso",
                contentFourPointText: "1. Presentar Form I-130 ante USCIS\n2. Esperar aprobación de la petición\n3. Familiar solicita visa:\n   - En el extranjero: A través de procesamiento consular\n   - En EE.UU.: Mediante ajuste de estatus (Form I-485)\n\nTiempos de Procesamiento:\n• Familiares inmediatos: Sin espera\n• Otros: Varía por categoría/país (1-10+ años)\n\nNota: Todos los solicitantes deben pasar exámenes médicos y de antecedentes",
                contentFinal: "Importante: La aprobación del I-130 no garantiza la visa. Tu familiar aún debe cumplir con todos los requisitos de elegibilidad. Consulta con un abogado de inmigración para casos complejos."
              },
              {
                id: 6,
                title: "Renovación de DACA",
                description: "Renueva tu estatus DACA con el Formulario I-821D.",
                form: "Formulario I-821D",
                content: "Resumen del Programa DACA",
                contentSubtitle: "Protección temporal para personas elegibles que llegaron a EE.UU. siendo niños",
                contentFirstPoint: "Estado Actual de DACA",
                contentFirstPointText: "• Solo Renovaciones: USCIS actualmente solo procesa solicitudes de renovación de DACA\n• No se Aceptan Nuevas Solicitudes: No se están aceptando aplicaciones iniciales\n• Ventana Limitada: Solo pueden renovar quienes tengan estatus que expire entre el 5 de septiembre de 2017 y el 5 de marzo de 2018\n\nNota: Quienes nunca tuvieron DACA no pueden aplicar actualmente",
                contentSecondPoint: "Requisitos de Elegibilidad",
                contentSecondPointText: "Para calificar para DACA debes:\n\n1. Haber ingresado a EE.UU. antes de los 16 años\n2. Tener menos de 31 años al 15 de junio de 2012\n3. Haber residido continuamente en EE.UU. desde el 15 de junio de 2007\n4. Estar físicamente presente el 15 de junio de 2012\n5. No tener estatus legal al 15 de junio de 2012\n6. Cumplir requisitos educativos/militares:\n   - Estar actualmente en la escuela O\n   - Tener diploma de secundaria/GED O\n   - Ser veterano con baja honorable\n7. No tener historial criminal grave",
                contentThirdPoint: "Documentación Requerida",
                contentThirdPointText: "Pruebas necesarias incluyen:\n\n• Documentos de Identidad:\n  - Pasaporte/acta de nacimiento\n  - Identificaciones gubernamentales\n\n• Prueba de Residencia Continua:\n  - Registros escolares/médicos\n  - Historial laboral\n  - Registros financieros\n\n• Prueba Educativa/Militar:\n  - Diplomas/transcripciones\n  - Certificado de GED\n  - Registros de servicio militar",
                contentFourPoint: "Proceso de Solicitud",
                contentFourPointText: "Para renovaciones elegibles:\n\n1. Presentar Form I-821D\n2. Enviar Form I-765 para autorización de trabajo\n3. Pagar tarifa de $495\n4. Proporcionar biométricos\n5. Esperar procesamiento de USCIS\n\nTiempo de Procesamiento: Típicamente 4-6 meses\n\nBeneficios:\n• Protección contra deportación\n• Autorización de trabajo\n• Número de Seguro Social\n\nNota: DACA NO provee:\n• Estatus de residente permanente\n• Camino a ciudadanía\n• Elegibilidad para ayuda financiera federal",
                contentFinal: "Importante: Si tu DACA expiró después de marzo 2018, consulta inmediatamente con un abogado de inmigración. Fallos judiciales pueden afectar la disponibilidad del programa - verifica el sitio web de USCIS para actualizaciones antes de aplicar."
              },
              {
                id: 7,
                title: "Solicitud de Asilo",
                description: "Asistencia con el Formulario I-589 para solicitantes de asilo.",
                form: "Formulario I-589",
                content: "Protección contra Persecución en EE.UU.",
                contentSubtitle: "Proceso legal para personas que temen persecución en su país de origen",
                contentFirstPoint: "¿Qué es el Formulario I-589?",
                contentFirstPointText: "El Form I-589 sirve para tres propósitos clave:\n\n• Solicitud de asilo (protección permanente)\n• Petición de suspensión de remoción (protección contra deportación)\n• Protección bajo la Convención contra la Tortura (CAT)\n\nEste es el formulario principal para buscar protección en EE.UU. basado en temor de persecución.",
                contentSecondPoint: "Requisitos de Elegibilidad",
                contentSecondPointText: "Para calificar debes:\n\n1. Demostrar temor fundado de persecución por:\n   - Raza/Religión\n   - Nacionalidad\n   - Opinión política\n   - Pertenencia a grupo social\n\n2. Estar físicamente presente en EE.UU. (sin importar método de entrada)\n3. Presentar dentro de 1 año de llegada (con excepciones por circunstancias extraordinarias)\n4. No tener:\n   - Órdenes de deportación previas\n   - Solicitud de asilo denegada después de audiencia completa",
                contentThirdPoint: "Documentación Requerida",
                contentThirdPointText: "Evidencia esencial incluye:\n\n• Form I-589 completado\n• Declaración personal detallada:\n  - Incidentes específicos de persecución\n  - Condiciones del país\n  - Por qué no puedes regresar\n\n• Evidencia de apoyo:\n  - Reportes médicos/psicológicos\n  - Reportes policiales\n  - Artículos de noticias\n  - Declaraciones de testigos\n  - Traducciones certificadas de documentos extranjeros\n\n• Dos fotos tipo pasaporte",
                contentFourPoint: "Proceso de Solicitud y Beneficios",
                contentFourPointText: "Pasos para Presentar:\n1. Completar y firmar Form I-589\n2. Compilar evidencia de apoyo\n3. Enviar a USCIS\n4. Asistir a cita de biométricos\n5. Entrevista con oficial de asilo\n6. Recibir decisión\n\nBeneficios Potenciales:\n• Protección contra deportación\n• Autorización de trabajo\n• Camino a residencia permanente\n• Capacidad de peticionar por familiares\n• Acceso a servicios sociales",
                contentFinal: "Importante: Los casos de asilo son complejos. Se recomienda fuertemente:\n• Consultar con un abogado de inmigración\n• Presentar solicitud dentro del plazo de 1 año\n• Proporcionar evidencia detallada y consistente\n• Verificar el sitio web de USCIS para tiempos de procesamiento actuales"
              },
              {
                id: 8,
                title: "Certificado de Ciudadanía",
                description: "Establece tu estatus con el Formulario N-600.",
                form: "Formulario N-600",
                content: "Certificado de Ciudadanía Estadounidense: Formulario N-600",
                contentSubtitle: "Una persona nacida fuera de EE.UU. de padres ciudadanos estadounidenses puede haber adquirido ya la ciudadanía. Para documentar su estatus de ciudadanía basado en su ascendencia, pueden presentar el Formulario N-600, Solicitud de Certificado de Ciudadanía.",
                contentFirstPoint: "¿Quién Debe Presentar el Formulario N-600?",
                contentFirstPointText: "Una persona puede presentar el Form N-600 si está tratando de reclamar la ciudadanía estadounidense por ley mientras está en EE.UU. o si nació en el extranjero de padres ciudadanos estadounidenses.",
                contentSecondPoint: "Ciudadanía Automática por Ley",
                contentSecondPointText: "Se convierten automáticamente en ciudadanos estadounidenses si cumplen con los siguientes requisitos:\n- Padre Ciudadano: Al menos un padre es ciudadano por nacimiento o naturalización.\n- Residencia en EE.UU.: El individuo vive en EE.UU. con su padre ciudadano.\n- Admisión Legal como Residente Permanente: El individuo fue admitido legalmente como residente permanente.\n- Menor de Edad: El individuo aún es menor de 18 años.\n- Custodia Legal: El individuo es hijo biológico bajo custodia legal de padre ciudadano antes de cumplir 16.",
                contentThirdPoint: "Ciudadanía por Nacimiento en el Extranjero",
                contentThirdPointText: "Un individuo nacido fuera de EE.UU. de padres ciudadanos puede reclamar ciudadanía automática al nacer si cumple:\n- Ambos padres son ciudadanos, y uno residió en EE.UU. antes del nacimiento.\n- O, si un padre es extranjero y el otro es ciudadano que, antes del nacimiento, estuvo físicamente presente en EE.UU. por al menos 5 años (2 después de los 14).",
                contentFourPoint: "Requisitos Adicionales",
                contentFourPointText: "Una persona también puede aplicar si antes de cumplir 18 y antes del 27/02/2001:\n- Vivió continuamente en EE.UU. como residente permanente legal; y\n- Ambos padres, el padre con custodia, o el único padre sobreviviente se naturalizó como ciudadano.",
                contentFivePoint: "Solicitud por Padre o Tutor",
                contentFivePointText: "Para hijos adoptados o biológicos menores de 18 que cumplen requisitos bajo el INA, la solicitud debe ser presentada por el padre ciudadano o tutor legal que tenga custodia.",
                contentSixPoint: "¿Cómo Presentar el Formulario N-600?",
                contentSixPointText: "Para iniciar el proceso, debes completar y presentar el Form N-600 con la documentación requerida que demuestre que cumples los criterios especificados. Este certificado sirve como prueba oficial de tu estatus como ciudadano estadounidense."
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
  emergencyText: "Nuestra única línea de contacto para asuntos de inmigración es <span class='font-semibold'>+1 5308637124</span>."
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
              title: "Ubicación de la Oficina",
              button:'Ver en google maps',
            },
            cta: {
              title: "Programe una Consulta Gratuita",
              subtitle: "Reserve una consulta de 30 minutos con uno de nuestros expertos en inmigración para discutir sus necesidades específicas.",
              button: "Reservar Ahora"
            },
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
          wtpButton: "Discutez avec nous !",
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
                id: 1,
                title: "Citoyenneté",
                description: "Assistance avec le formulaire N-400 pour un processus de citoyenneté sans problème.",
                form: "Formulaire N-400",
                content: "Formulaire USCIS N-400 : Demande de citoyenneté américaine",
                contentSubtitle: "Êtes-vous éligible ?",
                contentFirstPoint: "Résidence",
                contentFirstPointText: "Pour être éligible à la citoyenneté américaine, vous devez être résident permanent (titulaire d'une Green Card) depuis au moins 5 ans. Si vous êtes marié à un citoyen américain, cette période est réduite à 3 ans. Pendant ce temps, vous devez avoir vécu continuellement aux États-Unis.",
                contentSecondPoint: "Présence physique",
                contentSecondPointText: "Vous devez avoir été physiquement présent aux États-Unis pendant au moins 30 mois sur les 5 dernières années avant de déposer votre demande. Si vous êtes marié à un citoyen américain, vous devez avoir été présent pendant au moins 18 mois sur les 3 dernières années.",
                contentThirdPoint: "Bon caractère moral",
                contentThirdPointText: "Pour être éligible, vous devez faire preuve d'un bon caractère moral. Cela inclut le paiement des impôts, le respect des lois américaines et l'absence de casier judiciaire grave. L'USCIS évaluera votre conduite pendant la période de résidence requise.",
                contentFourPoint: "Serment d'allégeance",
                contentFourPointText: "L'une des dernières étapes pour obtenir la citoyenneté est de prêter serment d'allégeance aux États-Unis. Ce faisant, vous promettez de soutenir et de défendre la Constitution et les lois du pays, en renonçant à votre allégeance à d'autres pays.",
                contentFinal: "Si vous remplissez ces conditions de base, vous pouvez remplir et soumettre le formulaire N-400 pour commencer votre parcours vers la citoyenneté américaine. Bonne chance !"
              },
              {
                id: 2,
                title: "Autorisation de travail",
                description: "Conseils d'experts sur le formulaire I-765 pour obtenir votre document d'autorisation de travail.",
                form: "Formulaire I-765",
                content: "Tout ce que vous devez savoir sur l'EAD",
                contentSubtitle: "Document d'autorisation de travail permettant de travailler légalement aux États-Unis",
                contentFirstPoint: "Qu'est-ce que l'EAD ?",
                contentFirstPointText: "Le Document d'Autorisation de Travail (EAD) est un permis de travail délivré par l'USCIS qui prouve votre droit légal de travailler aux États-Unis. Il est obtenu via le formulaire I-765 et contient : votre nom, photo, numéro A, catégorie d'immigration et dates de validité.",
                contentSecondPoint: "Qui doit en faire la demande ?",
                contentSecondPointText: "Les personnes qui ne sont pas citoyennes ou résidentes permanentes mais qui ont besoin de travailler légalement, y compris :\n- Demandeurs d'asile/réfugiés\n- Étudiants (certains types d'emploi)\n- Demandeurs d'ajustement de statut\n- Bénéficiaires du TPS\n- Conjoints de titulaires de visa (K, J-2, E, L)",
                contentThirdPoint: "Types et processus de demande",
                contentThirdPointText: "1. EAD initial : Première demande\n2. Renouvellement : Soumettre ≤120 jours avant expiration\n3. Remplacement : Pour cartes perdues/endommagées\n\nProcessus : Soumettre le formulaire I-765 pour recevoir une autorisation temporaire (la durée varie selon le statut migratoire). L'approbation permet de travailler pour tout employeur sans parrainage.",
                contentFourPoint: "Avantages clés",
                contentFourPointText: "- Autorisation légale de travailler\n- Aucune restriction d'employeur\n- Valide pour compléter le formulaire I-9\n- Flexibilité professionnelle\n\nRemarque : Les délais de traitement varient. Renouvelez à l'avance pour éviter les interruptions d'emploi.",
                contentFinal: "Pour des informations actualisées sur les exigences et les délais de traitement, consultez toujours le site officiel de l'USCIS."
              },
              {
                id: 3,
                title: "Carte verte",
                description: "Aide avec le formulaire I-485 pour ajuster votre statut à résident permanent.",
                form: "Formulaire I-485",
                content: "Ajustement de statut pour résidence permanente",
                contentSubtitle: "Demande de carte verte depuis les États-Unis",
                contentFirstPoint: "Qu'est-ce que le formulaire I-485 ?",
                contentFirstPointText: "Le formulaire I-485 permet à certains étrangers aux États-Unis de changer leur statut migratoire en résident permanent (obtenir une carte verte). Il doit être déposé auprès de l'USCIS et est disponible pour les personnes ayant :\n- Une pétition d'immigrant approuvée\n- Une date de priorité actuelle\n- Un statut valide dans le pays",
                contentSecondPoint: "Exigences d'éligibilité",
                contentSecondPointText: "1. Être physiquement présent aux États-Unis\n2. Avoir une pétition d'immigrant approuvée (sauf réfugié/demandeur d'asile)\n3. Visa disponible (date de priorité actuelle)\n4. Aucune violation grave des lois d'immigration\n5. Être admissible aux États-Unis",
                contentThirdPoint: "Catégories éligibles",
                contentThirdPointText: "1. Famille : Conjoints, parents ou enfants de citoyens américains\n2. Emploi : Parrainés par un employeur\n3. Réfugiés/Demandeurs d'asile : Après 1 an de statut\n4. Cas spéciaux : VAWA, SIV, entre autres\n\n*Les personnes hors des États-Unis doivent suivre le processus consulaire",
                contentFourPoint: "Avantages et processus",
                contentFourPointText: "Avantages :\n- Permet de travailler avec EAD pendant le traitement\n- Possibilité de voyager avec Advance Parole\n- Chemin vers la citoyenneté (après 3-5 ans)\n\nProcessus :\n1. Soumettre I-485 + documents\n2. Assister à la prise d'empreintes biométriques\n3. Entretien (dans la plupart des cas)\n4. Décision de l'USCIS\n\n*Les réfugiés sont exemptés de frais",
                contentFinal: "Pour plus d'informations sur les exigences spécifiques et la documentation nécessaire, visitez le site officiel de l'USCIS ou consultez un avocat spécialisé en immigration qualifié."
              },
              {
                id: 4,
                title: "Visas",
                description: "Aide avec le formulaire DS-160 pour les visas de visiteur B1/B2 pour affaires ou tourisme.",
                form: "Formulaire DS-160",
                content: "Processus de demande de visa B1/B2",
                contentSubtitle: "Demande en ligne pour visas d'affaires (B1) ou de tourisme (B2)",
                contentFirstPoint: "Qu'est-ce que le formulaire DS-160 ?",
                contentFirstPointText: "Le DS-160 est le formulaire électronique obligatoire pour demander :\n\n• Visas d'affaires (B1)\n• Visas de tourisme (B2)\n• Visas combinés B1/B2\n\nIl doit être complété avant de programmer l'entretien consulaire.",
                contentSecondPoint: "Exigences clés",
                contentSecondPointText: "Documents nécessaires :\n\n1. Passeport valide (6+ mois de validité)\n2. Photo numérique récente (5x5 cm, fond blanc)\n3. Itinéraire de voyage (vols, hébergement)\n4. Preuve de liens économiques/sociaux dans votre pays\n5. Pour B1 : Lettre de l'entreprise détaillant l'objet du voyage",
                contentThirdPoint: "Processus étape par étape",
                contentThirdPointText: "1. **Compléter le DS-160** en ligne :\n   - Données personnelles\n   - Historique de voyages\n   - Informations professionnelles\n   - Contacts aux États-Unis\n\n2. **Payer les frais** MRV (160 USD)\n\n3. **Programmer l'entretien** au consulat\n\n4. **Assister au rendez-vous** avec tous les documents",
                contentFourPoint: "Conseils clés",
                contentFourPointText: "Pour augmenter vos chances d'approbation :\n\n• Vérifiez toutes les données 3 fois\n• Les réponses doivent correspondre à votre documentation\n• Préparez-vous pour l'entretien :\n  - Expliquez clairement l'objet du voyage\n  - Démontrez que vous retournerez dans votre pays\n  - Apportez les documents originaux et copies\n\n• Évitez de mentionner l'intention de travailler ou étudier",
                contentFinal: "Important : Le DS-160 ne garantit pas l'approbation du visa. La décision finale est prise par l'officier consulaire pendant l'entretien. Délai de traitement typique : 2-3 semaines."
              },
              {
                id: 5,
                title: "Parrainage familial",
                description: "Carte verte pour les membres de la famille avec le formulaire I-130.",
                form: "Formulaire I-130",
                content: "Pétition d'immigration basée sur la famille",
                contentSubtitle: "Aidez votre parent à obtenir une résidence permanente légale aux États-Unis",
                contentFirstPoint: "Qu'est-ce que le formulaire I-130 ?",
                contentFirstPointText: "Le formulaire I-130 est utilisé par les citoyens et résidents permanents américains pour :\n\n• Établir une relation familiale qualifiante\n• Lancer le processus d'immigration basé sur la famille\n• Obtenir un numéro de visa pour les parents éligibles\n\nC'est la première étape pour obtenir une carte verte pour votre membre de la famille.",
                contentSecondPoint: "Qui pouvez-vous parrainer ?",
                contentSecondPointText: "Les citoyens américains peuvent parrainer :\n- Conjoint\n- Parents\n- Enfants (tout âge/état civil)\n- Frères et sœurs\n\nLes résidents permanents peuvent parrainer :\n- Conjoint\n- Enfants célibataires (tout âge)\n\nRemarque : Vous devez déposer des formulaires I-130 séparés pour chaque parent.",
                contentThirdPoint: "Documents requis",
                contentThirdPointText: "Les preuves essentielles incluent :\n\n1. Preuve de votre statut :\n   - Acte de naissance (citoyens)\n   - Certificat de naturalisation\n   - Carte verte (résidents permanents)\n\n2. Preuve de relation familiale :\n   - Certificats de mariage\n   - Actes de naissance\n   - Décrets d'adoption\n\n3. Preuve de soutien financier (pour le futur formulaire I-864)",
                contentFourPoint: "Aperçu du processus",
                contentFourPointText: "1. Déposer le formulaire I-130 auprès de l'USCIS\n2. Attendre l'approbation de la pétition\n3. Le parent demande le visa :\n   - À l'étranger : Par traitement consulaire\n   - Aux États-Unis : Via ajustement de statut (formulaire I-485)\n\nDélais de traitement :\n• Parents immédiats : Pas d'attente\n• Autres : Varie selon catégorie/pays (1-10+ ans)\n\nRemarque : Tous les demandeurs doivent passer des examens médicaux et de vérification des antécédents",
                contentFinal: "Important : L'approbation du I-130 ne garantit pas le visa. Votre parent doit toujours remplir toutes les conditions d'éligibilité. Consultez un avocat spécialisé en immigration pour les cas complexes."
              },
              {
                id: 6,
                title: "Renouvellement DACA",
                description: "Renouvelez votre statut DACA avec le formulaire I-821D.",
                form: "Formulaire I-821D",
                content: "Aperçu du programme DACA",
                contentSubtitle: "Protection temporaire pour les personnes éligibles arrivées aux États-Unis enfants",
                contentFirstPoint: "Statut actuel de DACA",
                contentFirstPointText: "• Renouvellements uniquement : L'USCIS ne traite actuellement que les demandes de renouvellement DACA\n• Pas de nouvelles demandes : Les demandes initiales ne sont pas acceptées\n• Fenêtre limitée : Seuls les bénéficiaires dont le statut expire entre le 5 septembre 2017 et le 5 mars 2018 peuvent renouveler\n\nRemarque : Ceux qui n'ont jamais eu de DACA ne peuvent pas actuellement faire de demande",
                contentSecondPoint: "Exigences d'éligibilité",
                contentSecondPointText: "Pour être éligible à DACA, vous devez :\n\n1. Être entré aux États-Unis avant 16 ans\n2. Avoir moins de 31 ans au 15 juin 2012\n3. Avoir vécu continuellement aux États-Unis depuis le 15 juin 2007\n4. Être physiquement présent le 15 juin 2012\n5. Ne pas avoir de statut légal au 15 juin 2012\n6. Remplir les exigences éducatives/militaires :\n   - Être actuellement à l'école OU\n   - Avoir un diplôme d'études secondaires/GED OU\n   - Être vétéran avec congé honorable\n7. Ne pas avoir d'antécédents criminels graves",
                contentThirdPoint: "Documents requis",
                contentThirdPointText: "Les preuves nécessaires incluent :\n\n• Documents d'identité :\n  - Passeport/acte de naissance\n  - Pièces d'identité gouvernementales\n\n• Preuve de résidence continue :\n  - Dossiers scolaires/médicaux\n  - Historique d'emploi\n  - Dossiers financiers\n\n• Preuve éducative/militaire :\n  - Diplômes/relevés de notes\n  - Certificat GED\n  - Dossiers de service militaire",
                contentFourPoint: "Processus de demande",
                contentFourPointText: "Pour les renouvellements éligibles :\n\n1. Déposer le formulaire I-821D\n2. Soumettre le formulaire I-765 pour l'autorisation de travail\n3. Payer les frais de 495$\n4. Fournir des données biométriques\n5. Attendre le traitement par l'USCIS\n\nDélai de traitement : Typiquement 4-6 mois\n\nAvantages :\n• Protection contre la déportation\n• Autorisation de travail\n• Numéro de sécurité sociale\n\nRemarque : DACA ne fournit PAS :\n• Statut de résident permanent\n• Chemin vers la citoyenneté\n• Éligibilité à l'aide financière fédérale",
                contentFinal: "Important : Si votre DACA a expiré après mars 2018, consultez immédiatement un avocat spécialisé en immigration. Les décisions judiciaires peuvent affecter la disponibilité du programme - vérifiez le site Web de l'USCIS pour les mises à jour avant de faire une demande."
              },
              {
                id: 7,
                title: "Demande d'asile",
                description: "Assistance avec le formulaire I-589 pour les demandeurs d'asile.",
                form: "Formulaire I-589",
                content: "Protection contre la persécution aux États-Unis",
                contentSubtitle: "Processus juridique pour les personnes craignant la persécution dans leur pays d'origine",
                contentFirstPoint: "Qu'est-ce que le formulaire I-589 ?",
                contentFirstPointText: "Le formulaire I-589 sert à trois objectifs clés :\n\n• Demande d'asile (protection permanente)\n• Demande de suspension d'expulsion (protection contre la déportation)\n• Protection sous la Convention contre la torture (CAT)\n\nC'est le formulaire principal pour demander une protection aux États-Unis basée sur la crainte de persécution.",
                contentSecondPoint: "Exigences d'éligibilité",
                contentSecondPointText: "Pour être éligible, vous devez :\n\n1. Démontrer une crainte fondée de persécution en raison de :\n   - Race/Religion\n   - Nationalité\n   - Opinion politique\n   - Appartenance à un groupe social\n\n2. Être physiquement présent aux États-Unis (quelle que soit la méthode d'entrée)\n3. Déposer la demande dans l'année suivant l'arrivée (avec exceptions pour circonstances extraordinaires)\n4. Ne pas avoir :\n   - D'ordres d'expulsion précédents\n   - De demande d'asile refusée après audience complète",
                contentThirdPoint: "Documents requis",
                contentThirdPointText: "Les preuves essentielles incluent :\n\n• Formulaire I-589 complété\n• Déclaration personnelle détaillée :\n  - Incidents spécifiques de persécution\n  - Conditions du pays\n  - Pourquoi vous ne pouvez pas retourner\n\n• Preuves à l'appui :\n  - Rapports médicaux/psychologiques\n  - Rapports de police\n  - Articles de journaux\n  - Déclarations de témoins\n  - Traductions certifiées de tous documents étrangers\n\n• Deux photos d'identité",
                contentFourPoint: "Processus de demande et avantages",
                contentFourPointText: "Étapes de dépôt :\n1. Compléter et signer le formulaire I-589\n2. Compiler les preuves à l'appui\n3. Soumettre à l'USCIS\n4. Assister au rendez-vous biométrique\n5. Entretien avec un officier d'asile\n6. Recevoir la décision\n\nAvantages potentiels :\n• Protection contre la déportation\n• Autorisation de travail\n• Chemin vers la résidence permanente\n• Possibilité de parrainer des membres de la famille\n• Accès aux services sociaux",
                contentFinal: "Important : Les cas d'asile sont complexes. Il est fortement recommandé de :\n• Consulter un avocat spécialisé en immigration\n• Soumettre la demande dans le délai d'un an\n• Fournir des preuves détaillées et cohérentes\n• Vérifier le site Web de l'USCIS pour les délais de traitement actuels"
              },
              {
                id: 8,
                title: "Certificat de citoyenneté",
                description: "Établissez votre statut avec le formulaire N-600.",
                form: "Formulaire N-600",
                content: "Certificat de citoyenneté américaine : Formulaire N-600",
                contentSubtitle: "Une personne née hors des États-Unis de parents citoyens américains peut avoir déjà acquis la citoyenneté. Pour documenter leur statut de citoyenneté basé sur leur ascendance, ils peuvent déposer le formulaire N-600, Demande de certificat de citoyenneté.",
                contentFirstPoint: "Qui doit déposer le formulaire N-600 ?",
                contentFirstPointText: "Une personne peut déposer le formulaire N-600 si elle cherche à revendiquer la citoyenneté américaine par la loi tout en étant aux États-Unis ou si elle est née à l'étranger de parents citoyens américains.",
                contentSecondPoint: "Citoyenneté automatique par la loi",
                contentSecondPointText: "Ils deviennent automatiquement citoyens américains s'ils remplissent les conditions suivantes :\n- Parent citoyen : Au moins un parent est citoyen par naissance ou naturalisation.\n- Résidence aux États-Unis : La personne vit aux États-Unis avec son parent citoyen.\n- Admission légale comme résident permanent : La personne a été légalement admise comme résidente permanente.\n- Mineur : La personne a moins de 18 ans.\n- Garde légale : La personne est l'enfant biologique sous la garde légale d'un parent citoyen avant 16 ans.",
                contentThirdPoint: "Citoyenneté par naissance à l'étranger",
                contentThirdPointText: "Une personne née hors des États-Unis de parents citoyens peut revendiquer la citoyenneté automatique à la naissance si elle remplit :\n- Les deux parents sont citoyens, et l'un a résidé aux États-Unis avant la naissance.\n- Ou, si un parent est étranger et l'autre citoyen qui, avant la naissance, était physiquement présent aux États-Unis pendant au moins 5 ans (dont 2 après 14 ans).",
                contentFourPoint: "Exigences supplémentaires",
                contentFourPointText: "Une personne peut aussi demander un certificat si avant 18 ans et avant le 27/02/2001 :\n- Elle a vécu continuellement aux États-Unis comme résidente permanente légale ; et\n- Ses deux parents, le parent ayant la garde, ou le seul parent survivant est devenu citoyen par naturalisation.",
                contentFivePoint: "Demande par un parent ou tuteur",
                contentFivePointText: "Pour les enfants adoptés ou biologiques de moins de 18 ans remplissant les conditions sous l'INA, la demande doit être soumise par le parent citoyen ou tuteur légal ayant la garde.",
                contentSixPoint: "Comment déposer le formulaire N-600 ?",
                contentSixPointText: "Pour commencer le processus, vous devez compléter et soumettre le formulaire N-600 avec les documents requis démontrant que vous remplissez les critères spécifiés. Ce certificat sert de preuve officielle de votre statut de citoyen américain."
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
              emergencyTitle: "Contact d'Urgence",
              emergencyText: "Notre seule ligne de contact pour les questions d'immigration est <span class='font-semibold'>+1 5308637124</span>."
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
              title: "Emplacement du bureau",
              button:'Voir sur google maps',
            },
            cta: {
              title: "Planifier une consultation gratuite",
              subtitle: "Réservez une consultation de 30 minutes avec l'un de nos experts en immigration pour discuter de vos besoins spécifiques.",
              button: "Réserver maintenant"
            },
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
          wtpButton: "与我们聊天！",
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
                id: 1,
                title: "公民身份",
                description: "协助填写N-400表格，顺利申请美国公民身份。",
                form: "N-400表格",
                content: "USCIS表格N-400：美国公民身份申请",
                contentSubtitle: "您是否符合资格？",
                contentFirstPoint: "居住要求",
                contentFirstPointText: "申请美国公民身份，您必须持有绿卡至少5年。若配偶为美国公民，此期限缩短为3年。在此期间，您必须持续居住在美国。",
                contentSecondPoint: "实际居留时间",
                contentSecondPointText: "提交申请前的5年内，您必须在美国实际居留至少30个月。若配偶为美国公民，则需在3年内实际居留至少18个月。",
                contentThirdPoint: "良好道德品质",
                contentThirdPointText: "申请人需证明具备良好道德品质，包括依法纳税、遵守美国法律且无严重犯罪记录。USCIS将评估您在规定居留期间的行为表现。",
                contentFourPoint: "效忠宣誓",
                contentFourPointText: "获得公民身份的最后步骤是进行效忠宣誓，承诺支持并捍卫美国宪法和法律，放弃对其他国家的效忠。",
                contentFinal: "若满足基本要求，即可填写并提交N-400表格，开启您的美国公民申请之路。祝您顺利！"
              },
              {
                id: 2,
                title: "工作许可",
                description: "专业指导I-765表格申请，获取就业授权文件(EAD)。",
                form: "I-765表格",
                content: "EAD工卡全面指南",
                contentSubtitle: "允许在美国合法工作的就业授权文件",
                contentFirstPoint: "什么是EAD？",
                contentFirstPointText: "就业授权文件(EAD)是由USCIS签发的工作许可证，证明您在美国的合法工作权利。通过提交I-765表格获得，卡面包含：姓名、照片、A号码、移民类别及有效期。",
                contentSecondPoint: "适用人群",
                contentSecondPointText: "非公民或永久居民但需合法工作者，包括：\n- 庇护申请者/难民\n- 留学生(特定工作类型)\n- 身份调整申请人\n- TPS受益者\n- 签证持有人配偶(K/J-2/E/L类)", // Corregido el nombre de la propiedad
                contentThirdPoint: "申请类型与流程",
                contentThirdPointText: "1. 首次申请：初次办理EAD\n2. 续期：有效期届满前120天内提交\n3. 补办：遗失/损坏补发\n\n流程：提交I-765表格获取临时工作授权(有效期因移民身份而异)。获批后可不受雇主限制自由工作。",
                contentFourPoint: "核心优势",
                contentFourPointText: "- 合法工作许可\n- 无雇主限制 \n- 可用于填写I-9表格\n- 工作选择灵活\n\n注意：处理时间可能变化，建议提前续期以避免工作中断。",
                contentFinal: "请始终查阅USCIS官网获取最新申请要求与处理时间。 \n"
              },
              {
                id: 3,
                title: "绿卡",
                description: "协助办理I-485表格调整身份成为永久居民。",
                form: "I-485表格",
                content: "永久居民身份调整申请",
                contentSubtitle: "在美国境内申请绿卡",
                contentFirstPoint: "什么是I-485表格？",
                contentFirstPointText: "I-485表格允许特定在美外国人将移民身份调整为永久居民(获得绿卡)。需向USCIS提交，适用人群需满足：\n- 移民申请已获批\n- 优先日期当前\n- 在美身份合法有效",
                contentSecondPoint: "资格要求",
                contentSecondPointText: "1. 实际居住在美国境内\n2. 持有已批准的移民申请(庇护/难民除外)\n3. 签证名额可用(当前优先日期)\n4. 无严重移民违规记录\n5. 符合美国入境许可条件",
                contentThirdPoint: "适用类别",
                contentThirdPointText: "1. 亲属移民：美国公民的配偶/父母/子女\n2. 职业移民：雇主担保\n3. 庇护/难民：获得身份满1年后\n4. 特殊类别：VAWA家暴受害者、SIV特殊移民等\n\n*境外申请人需通过领事处理程序",
                contentFourPoint: "优势与流程",
                contentFourPointText: "优势：\n- 审理期间可凭EAD工作\n- 可申请Advance Parole旅行许可\n- 3-5年后可申请公民身份\n\n流程：\n1. 提交I-485及证明材料\n2. 完成生物识别采集\n3. 参加面谈(多数情况)\n4. 等待USCIS裁决\n\n*难民可豁免申请费用",
                contentFinal: "具体申请要求及文件清单，请查阅USCIS官网或咨询专业移民律师。"
              },
              {
                id: 4,
                title: "签证",
                description: "协助填写DS-160表格申请B1/B2商务旅游签证。",
                form: "DS-160表格",
                content: "B1/B2签证申请指南",
                contentSubtitle: "商务(B1)或旅游(B2)签证在线申请",
                contentFirstPoint: "什么是DS-160表格？",
                contentFirstPointText: "DS-160是申请以下签证的必填电子表格：\n\n• 商务签证(B1)\n• 旅游签证(B2)\n• B1/B2组合签证\n\n完成此表是预约领事面谈的前提条件。",
                contentSecondPoint: "核心材料",
                contentSecondPointText: "需准备文件：\n\n1. 有效护照(剩余有效期6个月以上)\n2. 近期白底电子照片(5x5厘米)\n3. 行程计划(机票/酒店预订)\n4. 本国经济/社会联系证明\n5. B1签证需附加公司说明信(详述出行目的)",
                contentThirdPoint: "申请步骤",
                contentThirdPointText: "1. 在线填写DS-160表格：\n   - 个人信息\n   - 旅行历史\n   - 工作经历\n   - 美国联系人\n\n2. 支付MRV签证费(160美元)\n\n3. 预约使领馆面谈\n\n4. 携带全套材料出席面谈",
                contentFourPoint: "关键技巧",
                contentFourPointText: "提高通过率要点：\n\n• 三重核对所有信息\n• 回答内容需与证明材料一致\n• 面谈准备：\n  - 明确说明出行目的\n  - 证明您会返回本国\n  - 携带原件及复印件\n\n• 避免提及工作或留学意图",
                contentFinal: "重要提示：DS-160不保证签证获批。最终决定权在领事官员。常规处理时间2-3周。"
              },
              {
                id: 5,
                title: "亲属移民",
                description: "通过I-130表格为家人申请绿卡。",
                form: "I-130表格",
                content: "亲属移民申请指南",
                contentSubtitle: "帮助亲属获得美国永久居留权",
                contentFirstPoint: "什么是I-130表格？",
                contentFirstPointText: "I-130表格用于：\n\n• 建立合格亲属关系\n• 启动亲属移民程序\n• 为符合条件亲属获取签证名额\n\n这是为家人申请绿卡的第一步。",
                contentSecondPoint: "可申请对象",
                contentSecondPointText: "美国公民可为以下亲属申请：\n- 配偶\n- 父母\n- 子女(不限年龄/婚姻状况)\n- 兄弟姐妹\n\n绿卡持有者可申请：\n- 配偶\n- 未婚子女(不限年龄)\n\n注：每位亲属需单独提交I-130表格",
                contentThirdPoint: "所需材料",
                contentThirdPointText: "基本证据包括：\n\n1. 申请人身份证明：\n   - 出生证明(公民)\n   - 入籍证书\n   - 绿卡(永久居民)\n\n2. 亲属关系证明：\n   - 结婚证\n   - 出生证明\n   - 收养文件\n\n3. 经济担保材料(后续需提交I-864表格)",
                contentFourPoint: "流程概览",
                contentFourPointText: "1. 向USCIS提交I-130表格\n2. 等待申请批准\n3. 亲属申请签证：\n   - 境外：通过领事处理\n   - 境内：提交I-485调整身份\n\n处理时间：\n• 直系亲属：无排期\n• 其他类别：视类别/国家而定(1-10+年)\n\n注：所有申请人需通过体检及背景调查",
                contentFinal: "重要说明：I-130批准不保证签证获批。亲属仍需满足所有资格要求。复杂案例建议咨询移民律师。"
              },
              {
                id: 6,
                title: "DACA续签",
                description: "使用I-821D表格续签童年入境暂缓遣返身份。",
                form: "I-821D表格",
                content: "DACA计划详解",
                contentSubtitle: "为童年抵美者提供临时保护",
                contentFirstPoint: "当前政策状态",
                contentFirstPointText: "• 仅受理续签：USCIS目前只处理DACA续签申请\n• 暂停新申请：不接受首次申请\n• 有限窗口期：仅2017年9月5日至2018年3月5日期间到期者可续签\n\n注：从未获得DACA者目前无法申请",
                contentSecondPoint: "资格标准",
                contentSecondPointText: "申请人需满足：\n\n1. 16岁前入境美国\n2. 2012年6月15日时未满31岁\n3. 2007年6月15日起持续居住美国\n4. 2012年6月15日实际在美\n5. 2012年6月15日无合法身份\n6. 满足教育/军事要求：\n   - 在读或\n   - 高中毕业/GED证书或\n   - 荣誉退伍军人\n7. 无重大犯罪记录",
                contentThirdPoint: "申请材料",
                contentThirdPointText: "需提交证明：\n\n• 身份文件：\n  - 护照/出生证明\n  - 政府签发身份证件\n\n• 持续居住证明：\n  - 学校/医疗记录\n  - 工作证明\n  - 财务记录\n\n• 教育/军事证明：\n  - 毕业证/成绩单\n  - GED证书\n  - 服役记录",
                contentFourPoint: "申请流程",
                contentFourPointText: "符合条件者续签步骤：\n\n1. 提交I-821D表格\n2. 同时提交I-765工卡申请\n3. 缴纳495美元费用\n4. 完成生物识别\n5. 等待USCIS审核\n\n处理时间：通常4-6个月\n\n权益：\n• 免遭遣返\n• 工作许可\n• 社会安全号\n\n注：DACA不提供：\n• 永久居民身份\n• 入籍途径\n• 联邦助学金资格",
                contentFinal: "重要提示：若您的DACA在2018年3月后过期，请立即咨询移民律师。法院裁决可能影响计划有效性，提交前请查阅USCIS官网最新政策。"
              },
              {
                id: 7,
                title: "庇护申请",
                description: "协助填写I-589表格申请政治庇护。",
                form: "I-589表格",
                content: "美国庇护保护计划",
                contentSubtitle: "为母国遭受迫害者提供法律保护",
                contentFirstPoint: "I-589表格用途",
                contentFirstPointText: "该表格用于：\n\n• 申请庇护(永久保护)\n• 请求暂缓遣返\n• 根据《禁止酷刑公约》寻求保护\n\n是基于迫害恐惧申请美国保护的核心表格。",
                contentSecondPoint: "申请条件",
                contentSecondPointText: "申请人需证明：\n\n1. 有充分理由恐惧因以下原因遭受迫害：\n   - 种族/宗教\n   - 国籍\n   - 政治观点\n   - 特定社会群体身份\n\n2. 实际身处美国(不论入境方式)\n3. 抵达后1年内提交(特殊情况例外)\n4. 无：\n   - 先前驱逐令\n   - 庇护申请被拒记录",
                contentThirdPoint: "证据材料",
                contentThirdPointText: "关键证据包括：\n\n• 完整填写的I-589表格\n• 详细个人陈述：\n  - 具体迫害经历\n  - 母国现状\n  - 无法返回的原因\n\n• 辅助证据：\n  - 医疗/心理报告\n  - 警方记录\n  - 新闻报道\n  - 证人陈述\n  - 外文文件认证翻译件\n\n• 2张护照规格照片",
                contentFourPoint: "流程与权益",
                contentFourPointText: "申请步骤：\n1. 填写签署I-589表格\n2. 整理证据材料\n3. 提交USCIS\n4. 完成生物识别\n5. 参加庇护官面谈\n6. 等待裁决\n\n可能权益：\n• 免遭驱逐\n• 工作授权\n• 转绿卡途径\n• 申请家人团聚\n• 享受社会服务",
                contentFinal: "重要提醒：庇护案件复杂性强，强烈建议：\n• 咨询专业移民律师\n• 把握1年申请时限\n• 提供详实一致证据\n• 查询USCIS最新处理时间"
              },
              {
                id: 8,
                title: "公民证书",
                description: "通过N-600表格确认美国公民身份。",
                form: "N-600表格",
                content: "美国公民证书申请指南",
                contentSubtitle: "为海外出生的美国公民子女提供身份证明",
                contentFirstPoint: "适用人群",
                contentFirstPointText: "以下情况可提交N-600申请：\n• 根据法律自动获得公民身份者\n• 美国公民父母在海外出生的子女\n\n用于通过血统关系证明公民身份。",
                contentSecondPoint: "自动获得条件",
                contentSecondPointText: "满足以下条件自动成为公民：\n- 父母至少一方为美国公民(出生或归化)\n- 子女与公民父母共同在美居住\n- 持有合法永久居民身份\n- 年龄未满18岁\n- 16岁前处于公民父母法定监护下",
                contentThirdPoint: "海外出生情形",
                contentThirdPointText: "海外出生者若符合：\n• 父母双方为公民且一方在美居住过\n或\n• 父母一方为公民且满足：\n  - 子女出生前在美居住满5年\n  - 其中2年在14岁之后\n可自动获得公民身份",
                contentFourPoint: "特殊要求",
                contentFourPointText: "2001年2月27日前未满18岁且满足：\n- 持绿卡持续在美居住\n- 父母双方/监护父母/单亲通过归化成为公民\n也可申请公民证书",
                contentFivePoint: "监护人申请",
                contentFivePointText: "18岁以下收养/亲生子女符合《移民国籍法》要求时，申请须由具有法定监护权的美国公民父母或监护人提交。",
                contentSixPoint: "申请方式",
                contentSixPointText: "启动流程需提交N-600表格及相关证明材料。该证书是官方公民身份证明文件。"
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
              emergencyTitle: "紧急联系方式",
              emergencyText: "我们唯一的移民事务联系电话是 <span class='font-semibold'>+1 5308637124</span>."
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
              title: "办公室位置",
              button:'在谷歌地图上查看',
            },
            cta: {
              title: "安排免费咨询",
              subtitle: "预约30分钟的咨询与我们的一位移民专家讨论您的具体需求。",
              button: "立即预约"
            },
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
