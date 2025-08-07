import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <header className="relative w-full h-screen min-h-[80vh] max-h-[100vh] overflow-hidden">
      {/* Imagen de fondo optimizada */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/fede/fede10-recortado.webp"
          alt="Fede Forquera - Photographer & Filmmaker"
          className="w-full h-full object-cover object-center md:object-top"
          loading="eager"
        />
        {/* Overlay profesional */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Contenido del Banner */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Título principal mejorado */}
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          >
            <span className="block">FEDE FORQUERA</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#379299] mt-2">
              Photographer & Filmmaker
            </span>
          </h1>

          {/* Subtítulo profesional */}
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
            className="text-lg sm:text-xl md:text-2xl font-light mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto"
            style={{
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
            }}
          >
            Capturando momentos únicos que perduran para siempre
          </p>

          {/* Línea decorativa */}
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="600"
            className="w-24 h-1 bg-[#379299] mx-auto mb-8"
          ></div>

          {/* Botón CTA mejorado */}
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="900"
            className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
          >
            <Link
              to="/Portfolio"
              className="inline-block bg-[#379299] hover:bg-[#2d7a7f] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-[#379299]"
            >
              Ver Portfolio
            </Link>
            <Link
              to="/Contact"
              className="inline-block bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Contactar
            </Link>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="1200"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
