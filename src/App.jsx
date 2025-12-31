import React, { useState } from 'react';
import { 
  Wrench, 
  Droplet, 
  Phone, 
  Clock, 
  CheckCircle, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight,
  Shield,
  Star,
  Flame,
  HelpCircle,
  FileText,
  Moon,
  Hammer,
  Instagram,
  Facebook
} from 'lucide-react';

// Icono personalizado de TikTok
const TikTokIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // ========================================================================
  // CONFIGURACIÓN DEL LOGO
  // ========================================================================
  // IMPORTANTE: Sube tu archivo de logo a la carpeta 'public/images' en GitHub
  // y asegúrate de que se llame 'logo.png'.
  const logoUrl = "/images/logo.png"; 

  // TU NUEVO LINK DE WHATSAPP
  const whatsappLink = "https://wa.link/w0x2bj";

  const services = [
    {
      icon: <Flame className="w-8 h-8 text-blue-600" />,
      title: "¿Agua fría o Calefón malo?",
      description: "Reparación y mantención de calefones y termos. Con el gas no se juega. Soy instalador autorizado SEC. Realizo reparación, mantención y normalización de calefonts y cocinas con la seguridad y normativa que tu hogar necesita.",
      image: "/images/calefont.jpg" 
    },
    {
      icon: <Droplet className="w-8 h-8 text-blue-600" />,
      title: "¿Humedad en la pared o la cuenta subió? (Reparación de Fugas)",
      description: "No dejes que el agua (y tu dinero) sigan corriendo. Localizamos y reparamos filtraciones visibles o evidentes en tuberías de cobre, PVC, Pex o PPR. Vamos al grano y solucionamos la rotura.",
      image: "/images/fugas.jpg"
    },
    {
      icon: <Hammer className="w-8 h-8 text-blue-600" />,
      title: "¿Tu baño se ve antiguo o quieres renovarlo? (Remodelaciones)",
      description: "Transformamos tu baño por completo. Realizamos cambio de tina por receptáculo (shower door), renovación de artefactos, cambio de cerámicas y grifería. Dale una nueva vida y valor a tu hogar.",
      image: "/images/remodelacion.jpg"
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "¿WC, ducha o lavaplatos tapado? (Destapes Domiciliarios)",
      description: "Solucionamos esos molestos atascos en los artefactos de tu baño o cocina de forma rápida. Recupera la normalidad de tu hogar sin máquinas invasivas ni ensuciar de más.",
      image: "/images/destape.jpg"
    }
  ];

  const googleReviews = [
    { 
      name: "Claudio Ahumada", 
      date: "hace 2 semanas",   
      rating: 5,
      text: "Muy atento, rápido en contestar y también en venir a ver el problema. Explica detalladamente su diagnóstico del problema y es transparente respecto a lo que recomienda para arreglarlo. Recomendado!", 
      initial: "C" 
    },
    { 
      name: "Valmac Gestión Inmobiliaría y Propiedades", 
      date: "Hace un mes", 
      rating: 5,
      text: "Muy buena atención, responsable en todos los trabajos que le hemos encomendado en diferentes propiedades, recomendado al 1000%",
      initial: "V"
    },
    { 
      name: "Patricia Galindo", 
      date: "3 semanas atrás", 
      rating: 5,
      text: "El servicio fue excelente. El profesional fue muy puntual y responsable. Detectó con precisión el problema al revisar exhaustivamente todas las posibles fallas. Además, se aseguró de contar con el repuesto necesario antes de comenzar y dejó el área de trabajo completamente limpia. El precio está totalmente acorde con la calidad y el trabajo realizado. ¡Muy recomendado!",
      initial: "P"
    }
  ];

  const faqs = [
    {
      question: "¿Cobran la visita técnica?",
      answer: "Sí, la visita tiene un costo asociado. Esto cubre los gastos de traslado, combustible y el tiempo del profesional para realizar el diagnóstico en terreno.",
      icon: <MapPin className="w-6 h-6 text-blue-600" />
    },
    {
      question: "¿Atienden urgencias de noche?",
      answer: "Sí, entendemos que las emergencias no tienen horario. Contamos con disponibilidad para atender urgencias en horario nocturno y fines de semana.",
      icon: <Moon className="w-6 h-6 text-blue-600" />
    },
    {
      question: "¿Entregan documento tributario?",
      answer: "Sí, trabajamos de manera formal y emitimos boleta de honorarios electrónica por todos los servicios realizados.",
      icon: <FileText className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <div className="font-sans text-gray-800 bg-white">
      
      {/* Navbar */}
      <nav className="fixed w-full bg-white z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-3">
                <img 
                  src={logoUrl} 
                  alt="Logo Sur Gasfitería" 
                  className="h-12 w-auto object-contain"
                  // Fallback por si la imagen no carga o no existe aún
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/150/2563eb/ffffff?text=LOGO+SG";
                  }} 
                />
                <span className="font-bold text-xl tracking-tight text-blue-900">Sur Gasfitería</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-blue-600 font-medium transition">Inicio</a>
              <a href="#servicios" className="text-gray-600 hover:text-blue-600 font-medium transition">Servicios</a>
              <a href="#nosotros" className="text-gray-600 hover:text-blue-600 font-medium transition">Nosotros</a>
              <a href="tel:+56983185140" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-blue-700 transition flex items-center shadow-lg shadow-blue-600/20">
                <Phone className="w-4 h-4 mr-2" />
                +56 9 8318 5140
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#inicio" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={toggleMenu}>Inicio</a>
              <a href="#servicios" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={toggleMenu}>Servicios</a>
              <a href="#nosotros" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={toggleMenu}>Nosotros</a>
              <a href="tel:+56983185140" className="block mt-4 text-center px-3 py-3 rounded-md text-base font-bold bg-blue-600 text-white" onClick={toggleMenu}>
                Llamar Ahora
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-20 lg:pt-28 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90 z-10"></div>
          <img 
             src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
             alt="Gasfiter trabajando"
             className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-10 lg:mb-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Disponibles 24/7 para Emergencias
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Soluciones de Gasfitería <span className="text-blue-400">Rápidas y Garantizadas</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Especialistas certificados por la SEC. Atendemos fugas, destapes y reparaciones en toda la Región del Biobío. Coordinación rápida y puntualidad garantizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="tel:+56983185140" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition shadow-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  +56 9 8318 5140
                </a>
                <a 
                  href={whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition flex items-center justify-center"
                >
                  Solicitar Cotización
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
              
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-blue-200 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Certificación SEC
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Garantía 6 meses
                </div>
              </div>
            </div>

            {/* Formulario Hero (Desktop) */}
            <div className="hidden lg:block bg-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Agenda tu visita</h3>
              <p className="text-gray-500 mb-6 text-sm">Te responderemos en menos de 15 minutos.</p>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="+56 9..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Problema</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white">
                    <option>Urgencia / Fuga de Agua</option>
                    <option>Calefont / Agua Caliente</option>
                    <option>Destape de Cañerías</option>
                    <option>Instalación</option>
                    <option>Otro</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-md">
                  Solicitar Visita Técnica
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Nuestros Servicios</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">¿Qué problema necesitas resolver?</h3>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Atendemos hogares y empresas de la zona. Nos enfocamos en un trabajo honesto y bien hecho, realizando las reparaciones necesarias con profesionalismo para entregar una solución definitiva a tu problema.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group overflow-hidden flex flex-col">
                <div className="p-8 pb-0">
                  <div className="mb-6 p-3 bg-blue-50 rounded-lg inline-block group-hover:bg-blue-100 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                {/* Contenedor de la Imagen del Servicio */}
                <div className="mt-auto h-48 w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.backgroundColor = '#f3f4f6'; 
                      e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400 text-sm">Foto del servicio</div>';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                ¿Por qué elegir a <span className="text-blue-600">Sur Gasfitería</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Entendemos que un problema de gasfitería es urgente y estresante. Nos enfocamos en darte tranquilidad y una solución definitiva.
              </p>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                {[
                  { title: "Transparencia Total", desc: "Presupuestos claros antes de empezar. Sin sorpresas ni cobros ocultos." },
                  { title: "Personal Certificado", desc: "Técnicos con licencia SEC al día para trabajos de gas." },
                  { title: "Limpieza y Orden", desc: "Dejamos tu casa igual o más limpia que cuando llegamos." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Nuevas Tarjetas: Años de Experiencia y Certificación */}
              <div className="mt-12 flex flex-wrap justify-center gap-6">
                <div className="bg-white border border-gray-100 shadow-lg rounded-2xl px-8 py-4 flex items-center gap-4 min-w-[200px] transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Star className="w-6 h-6 text-blue-600 fill-current" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-gray-900">5+</div>
                    <div className="text-sm text-gray-600 font-medium">Años de Experiencia</div>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 shadow-lg rounded-2xl px-8 py-4 flex items-center gap-4 min-w-[200px] transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-gray-900">Certificación</div>
                    <div className="text-sm text-gray-600 font-medium">SEC Vigente</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Style Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Opiniones de nuestros clientes</h2>
            <div className="flex justify-center items-center gap-2 mb-2">
              <span className="text-2xl font-bold text-gray-900">5.0</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-500">Basado en reseñas de Google</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {googleReviews.map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-lg">
                      {review.initial}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{review.name}</div>
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </div>
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6" />
                </div>
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
             <a 
               href="https://www.google.com/maps/search/Sur+Gasfiter%C3%ADa/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="inline-flex items-center text-blue-600 font-semibold hover:underline"
             >
               Ver todas las opiniones en Google Maps <ArrowRight className="w-4 h-4 ml-1" />
             </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-500">Resolvemos tus dudas antes de la visita.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="mb-4 p-3 bg-blue-100 rounded-lg inline-block text-blue-600">
                  {faq.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Síguenos en Redes Sociales</h2>
            <p className="text-gray-500 mt-2">Mira nuestros trabajos recientes y novedades.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://www.instagram.com/surgasfiteria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-200 text-gray-700 font-medium hover:text-pink-600 hover:border-pink-200 hover:shadow-md transition-all group"
            >
              <Instagram className="w-6 h-6 text-gray-400 group-hover:text-pink-600 transition-colors" />
              <span>@surgasfiteria</span>
            </a>
            
            <a 
              href="https://web.facebook.com/profile.php?id=61583341726547" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-200 text-gray-700 font-medium hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <Facebook className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
              <span>Sur Gasfitería</span>
            </a>

            <a 
              href="https://www.tiktok.com/@sur.gasfiteria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-200 text-gray-700 font-medium hover:text-black hover:border-gray-400 hover:shadow-md transition-all group"
            >
              <TikTokIcon className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
              <span>@sur.gasfiteria</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA / Contacto */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-blue-900 rounded-2xl shadow-xl overflow-hidden relative">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-800 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-600 rounded-full opacity-30"></div>
            
            <div className="relative p-10 md:p-16 z-10">
              <h2 className="text-3xl font-extrabold text-white mb-4">¿Tienes una emergencia ahora?</h2>
              <p className="text-lg text-blue-100 mb-8">No dejes que el problema empeore. Llámanos y vamos en camino.</p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <a 
                  href="tel:+56983185140" 
                  className="w-full md:w-auto px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition flex items-center justify-center shadow-lg transform hover:-translate-y-1"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Llamar Urgencia (+56 9 8318 5140)
                </a>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition flex items-center justify-center shadow-lg transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6 mr-3 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  Enviar WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-gray-100 p-6 text-sm text-gray-500 border-t border-gray-200">
              <div className="flex justify-center items-center gap-2">
                <MapPin className="w-4 h-4" />
                Atendemos en Concepción, San Pedro, Hualpén, Coronel, Tomé, Talcahuano, Chiguayante, Penco, toda la región del Biobío, etc.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4 text-white">
                {/* LOGO EN EL FOOTER */}
                <img 
                  src={logoUrl} 
                  alt="Logo Sur Gasfitería" 
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/150/2563eb/ffffff?text=LOGO+SG";
                  }} 
                />
                <span className="font-bold text-xl">Sur Gasfitería</span>
              </div>
              <p className="text-sm">Soluciones profesionales para tu hogar y empresa. Calidad y rapidez garantizada.</p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Fugas de Agua</a></li>
                <li><a href="#" className="hover:text-white transition">Destapes</a></li>
                <li><a href="#" className="hover:text-white transition">Calefonts</a></li>
                <li><a href="#" className="hover:text-white transition">Gasfitería General</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +56 9 8318 5140</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Concepción, Región del Biobío</li>
                <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> Lun-Dom: 24 Horas</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Certificación</h4>
              <p className="text-sm mb-4">Todos nuestros técnicos cuentan con certificación SEC vigente.</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            © 2026 Sur Gasfitería. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
