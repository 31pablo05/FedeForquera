import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 50
    });
  }, []);

  const achievements = [
    { number: "500+", label: "Proyectos Completados", icon: "📸" },
    { number: "50+", label: "Marcas Trabajadas", icon: "🏢" },
    { number: "5+", label: "Años de Experiencia", icon: "⭐" },
    { number: "1000+", label: "Clientes Satisfechos", icon: "😊" }
  ];

  const services = [
    {
      title: "Fotografía de Eventos",
      description: "Cobertura completa de eventos corporativos, sociales y deportivos",
      icon: "🎉"
    },
    {
      title: "Producción Audiovisual",
      description: "Creación de contenido video profesional para marcas y empresas",
      icon: "🎬"
    },
    {
      title: "Fotografía Comercial",
      description: "Sesiones de producto, retratos corporativos y contenido publicitario",
      icon: "💼"
    },
    {
      title: "Contenido Digital",
      description: "Material visual optimizado para redes sociales y plataformas digitales",
      icon: "📱"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section con video de fondo */}
      <section className="pt-24 md:pt-20 relative h-[60vh] md:h-[65vh] lg:h-[75vh] xl:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-top"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="/assets/videos/fondoVideo.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay con patrón */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#379299]/30 to-black/60"></div>
        
        {/* Contenido principal */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white mt-8 md:mt-0">
          <div 
            data-aos="fade-up"
            className="max-w-4xl mx-auto pt-4 md:pt-0"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Federico <span className="text-[#379299]">Forquera</span>
            </h1>
            <p className="text-lg md:text-2xl font-light mb-6 md:mb-8 text-gray-200">
              Photographer & Filmmaker
            </p>
            <div className="w-24 h-1 bg-[#379299] mx-auto mb-6 md:mb-8"></div>
            <p 
              data-aos="fade-up" 
              data-aos-delay="300"
              className="text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 md:mb-12"
            >
              Transformando momentos ordinarios en recuerdos extraordinarios a través del lente. 
              Especializado en capturar la esencia auténtica de cada historia.
            </p>
            <div 
              data-aos="fade-up" 
              data-aos-delay="600"
              className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center mb-12 md:mb-8"
            >
              <a
                href="#experience"
                className="inline-block bg-[#379299] hover:bg-[#2d7a7f] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Conoce mi Historia
              </a>
              <a
                href="/portfolio"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#379299] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Ver Trabajos
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Sección de Logros */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            >
              Experiencia que <span className="text-[#379299]">Respalda</span>
            </h2>
            <div 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="w-24 h-1 bg-[#379299] mx-auto"
            ></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-[#379299] mb-2">
                  {achievement.number}
                </div>
                <p className="text-gray-600 font-medium text-sm md:text-base">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mi Historia - Sección mejorada */}
      <section id="experience" className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Mi <span className="text-[#379299]">Historia</span>
              </h2>
              <div className="w-24 h-1 bg-[#379299] mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Desde muy joven, descubrí que mi pasión era capturar momentos únicos que cuentan historias profundas. 
                Lo que comenzó como un hobby se transformó en una carrera profesional dedicada a la excelencia visual.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Especializado en fotografía de eventos, deportes y contenido comercial, he tenido el privilegio de 
                trabajar con marcas reconocidas como McDonald's, eventos deportivos de primera división, y producciones 
                audiovisuales de alto impacto.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-[#379299]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Certificaciones Profesionales</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-[#379299]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Equipamiento Profesional</span>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left" className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/assets/images/fede/fede7.webp" 
                  alt="Federico Forquera en acción profesional" 
                  loading="lazy"
                  className="w-full h-auto transform transition-all duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              {/* Elemento decorativo */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#379299]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#379299]/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Profesionales */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            >
              Servicios <span className="text-[#379299]">Especializados</span>
            </h2>
            <div 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="w-24 h-1 bg-[#379299] mx-auto mb-6"
            ></div>
            <p 
              data-aos="fade-up" 
              data-aos-delay="400"
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Ofrezco una gama completa de servicios fotográficos y audiovisuales adaptados a las necesidades específicas de cada cliente
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#379299] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center text-[#379299] font-medium hover:text-[#2d7a7f] transition-colors duration-200"
                  >
                    Consultar servicio
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería Personal Mejorada */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-[#379299] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Detrás del <span className="text-[#379299] bg-white px-2 py-1 rounded">Lente</span>
            </h2>
            <div 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="w-24 h-1 bg-white mx-auto mb-6"
            ></div>
            <p 
              data-aos="fade-up" 
              data-aos-delay="400"
              className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Una selección personal de momentos que definen mi visión artística y mi compromiso con la excelencia
            </p>
          </div>
          
          <div 
            data-aos="zoom-in"
            data-aos-delay="600"
            className="max-w-4xl mx-auto"
          >
            <Carousel 
              showThumbs={false} 
              infiniteLoop 
              autoPlay 
              interval={4000}
              showStatus={false}
              className="rounded-2xl overflow-hidden shadow-2xl bg-gray-800"
            >
              <div className="relative bg-gray-800">
                <img 
                  src="/assets/images/fede/fede11.webp" 
                  alt="Capturando la naturaleza en su máxima expresión" 
                  loading="lazy"
                  className="w-full h-[500px] object-contain bg-gray-800"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                  <h3 className="text-2xl font-bold mb-2">Fotografía de Naturaleza</h3>
                  <p className="text-gray-200">Capturando la belleza natural en cada detalle</p>
                </div>
              </div>
              <div className="relative bg-gray-800">
                <img 
                  src="/assets/images/fede/fede3.webp" 
                  alt="Retrato profesional en estudio" 
                  loading="lazy"
                  className="w-full h-[500px] object-contain bg-gray-800"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                  <h3 className="text-2xl font-bold mb-2">Retratos Profesionales</h3>
                  <p className="text-gray-200">Revelando la personalidad única de cada sujeto</p>
                </div>
              </div>
              <div className="relative bg-gray-800">
                <img 
                  src="/assets/images/fede/fede13.webp" 
                  alt="Fotografía urbana al atardecer" 
                  loading="lazy"
                  className="w-full h-[500px] object-contain bg-gray-800"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                  <h3 className="text-2xl font-bold mb-2">Fotografía Urbana</h3>
                  <p className="text-gray-200">La ciudad como lienzo de historias infinitas</p>
                </div>
              </div>
              <div className="relative bg-gray-800">
                <img 
                  src="/assets/images/fede/fede14.webp" 
                  alt="Cobertura de eventos especiales" 
                  loading="lazy"
                  className="w-full h-[500px] object-contain bg-gray-800"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                  <h3 className="text-2xl font-bold mb-2">Eventos Especiales</h3>
                  <p className="text-gray-200">Inmortalizando momentos únicos e irrepetibles</p>
                </div>
              </div>
              <div className="relative bg-gray-800">
                <img 
                  src="/assets/images/fede/fede5.webp" 
                  alt="Fotografía callejera espontánea" 
                  loading="lazy"
                  className="w-full h-[500px] object-contain bg-gray-800"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                  <h3 className="text-2xl font-bold mb-2">Street Photography</h3>
                  <p className="text-gray-200">Capturando la vida cotidiana con una mirada artística</p>
                </div>
              </div>
              <div className="relative bg-gray-800">
                <img 
                  src="/assets/images/fede/fede16.webp" 
                  alt="Técnicas avanzadas de iluminación" 
                  loading="lazy"
                  className="w-full h-[500px] object-contain bg-gray-800"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                  <h3 className="text-2xl font-bold mb-2">Técnica Profesional</h3>
                  <p className="text-gray-200">Dominando la luz para crear atmósferas únicas</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-[#379299]">
        <div className="container mx-auto px-6 text-center">
          <div 
            data-aos="fade-up"
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para crear algo <span className="bg-white text-[#379299] px-2 py-1 rounded">increíble</span> juntos?
            </h2>
            <p 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Cada proyecto es una nueva oportunidad para superar expectativas y crear contenido visual que impacte y perdure en el tiempo.
            </p>
            <div 
              data-aos="fade-up" 
              data-aos-delay="400"
              className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center"
            >
              <a
                href="/contact"
                className="inline-block bg-white text-[#379299] font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Iniciar Proyecto
              </a>
              <a
                href="/portfolio"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Ver Portfolio Completo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
