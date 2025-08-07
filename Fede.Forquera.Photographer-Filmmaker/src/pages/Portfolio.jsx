// Portfolio.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BannerVideo from '../components/BannerVideo';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import Card4 from '../components/Card4';
import Card5 from '../components/Card5';
import Card6 from '../components/Card6';

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 50
    });
  }, []);

  const portfolioProjects = [
    {
      component: Card1,
      category: "Deportes & Eventos",
      description: "Cobertura fotográfica de eventos deportivos de alto impacto"
    },
    {
      component: Card2,
      category: "Corporativo",
      description: "Producción audiovisual para marcas reconocidas"
    },
    {
      component: Card3,
      category: "Gastronomía",
      description: "Fotografía comercial y de productos gastronómicos"
    },
    {
      component: Card4,
      category: "Cultura & Arte",
      description: "Documentación de experiencias artísticas únicas"
    },
    {
      component: Card5,
      category: "Eventos Corporativos",
      description: "Registro profesional de eventos empresariales"
    },
    {
      component: Card6,
      category: "Contenido Digital",
      description: "Producción audiovisual para plataformas digitales"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Banner Video */}
      <BannerVideo />

      {/* Header Section - Movido hacia abajo */}
      <div className="relative -mt-32 pt-40 pb-8 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 
            className="  text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#379299] to-cyan-400"
            data-aos="fade-up"
          >
            Portfolio
          </h1>
          <div 
            className="w-24 h-1 bg-gradient-to-r from-[#379299] to-cyan-400 mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
          <p 
            className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Una colección de mis trabajos más destacados en fotografía y filmmaking.
            <span className="block mt-4 text-lg text-[#379299] font-medium">
              Cada proyecto cuenta una historia única y profesional.
            </span>
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4">
        <div 
          className="max-w-6xl mx-auto"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Proyectos Completados" },
              { number: "50+", label: "Clientes Satisfechos" },
              { number: "5+", label: "Años de Experiencia" },
              { number: "99%", label: "Satisfacción Cliente" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#379299] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            data-aos="fade-up"
          >
            Mis Trabajos
            <span className="block text-xl md:text-2xl text-[#379299] font-normal mt-4">
              Experiencias visuales que marcan la diferencia
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => {
              const Component = project.component;
              return (
                <div 
                  key={index}
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <div className="relative">
                    {/* Category Label */}
                    <div className="absolute -top-4 left-4 z-10">
                      <span className="bg-gradient-to-r from-[#379299] to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Card Container */}
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#379299]/20">
                      <Component />
                      
                      {/* Description Overlay */}
                      <div className="p-6 bg-gradient-to-t from-slate-900/90 to-transparent">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-4 bg-gradient-to-r from-slate-900 via-[#379299]/20 to-slate-900">
        <div 
          className="max-w-4xl mx-auto text-center"
          data-aos="fade-up"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para crear algo increíble juntos?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Cada proyecto es una oportunidad de crear algo único y memorable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-[#379299] to-cyan-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-[#379299]/30 transition-all duration-300 hover:scale-105"
            >
              Iniciar Proyecto
            </a>
            <a 
              href="/about"
              className="border-2 border-[#379299] text-[#379299] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#379299] hover:text-white transition-all duration-300"
            >
              Conocer Más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
