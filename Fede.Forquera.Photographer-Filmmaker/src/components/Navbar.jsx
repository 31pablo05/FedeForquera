import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detecta el scroll para modificar la apariencia de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cierra el menú móvil cuando cambia la ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Simula loading state en navegación
  const handleNavigation = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  // Cuando se hace scroll, el fondo se transforma con glassmorphism
  const navClasses = scrolled 
    ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl transition-all duration-500 fixed top-0 left-0 right-0 z-50"
    : "bg-gradient-to-r from-black/40 to-transparent backdrop-blur-sm transition-all duration-500 fixed top-0 left-0 right-0 z-50";

  const navLinks = [
    { name: "Inicio", path: "/", icon: "🏠" },
    { name: "Sobre mí", path: "/AboutMe", icon: "👨‍💼" },
    { name: "Portfolio", path: "/Portfolio", icon: "📸" },
    { name: "Contacto", path: "/Contact", icon: "📞" }
  ];

  // Determina si un enlace está activo
  const isActiveLink = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`${navClasses} py-3 px-4`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo simplificado */}
        <Link 
          to="/" 
          className="group transition-transform duration-300 hover:scale-105"
          onClick={handleNavigation}
        >
          <div className="relative">
            <img
              src="/assets/logo/logo-color-curvas.webp"
              alt="Fede Forquera - Photographer & Filmmaker"
              className="h-12 w-auto drop-shadow-2xl transition-all duration-300 group-hover:drop-shadow-3xl"
              width="89"
              height="48"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              style={{ 
                maxWidth: '89px', 
                height: 'auto',
                objectFit: 'contain'
              }}
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#379299]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
        </Link>

        {/* Botón hamburguesa mejorado para móviles */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="relative w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#379299] transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center w-full h-full">
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : 'mb-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'mb-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Menú principal simplificado */}
        <ul className="hidden md:flex items-center space-x-1">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={handleNavigation}
                className={`
                  relative group flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300
                  ${isActiveLink(item.path) 
                    ? 'bg-[#379299] text-white shadow-lg transform scale-105' 
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                <span className="text-sm opacity-70 group-hover:opacity-100">{item.icon}</span>
                <span className="tracking-wide">{item.name}</span>
                
                {/* Indicador de página activa */}
                {isActiveLink(item.path) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                )}
                
                {/* Efecto hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#379299]/0 via-[#379299]/10 to-[#379299]/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú desplegable mejorado para móviles */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/5 backdrop-blur-xl border-t border-white/10 mt-4 rounded-xl mx-4">
          <ul className="py-4 space-y-2">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={() => {
                    setIsOpen(false);
                    handleNavigation();
                  }}
                  className={`
                    group flex items-center space-x-3 px-6 py-3 mx-2 rounded-lg font-medium transition-all duration-300
                    ${isActiveLink(item.path) 
                      ? 'bg-[#379299] text-white shadow-lg' 
                      : 'text-[#379299] hover:text-white hover:bg-[#379299]/80'
                    }
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <span className="text-lg opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                    {item.icon}
                  </span>
                  <span className="tracking-wide">{item.name}</span>
                  
                  {/* Flecha indicadora */}
                  <div className="ml-auto">
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isActiveLink(item.path) ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
            
            {/* Información adicional en móvil */}
            <li className="px-6 pt-4 pb-2">
              <div className="text-center">
                <p className="text-[#379299] text-xs mb-2 font-medium">Sígueme en redes</p>
                <div className="flex justify-center space-x-4">
                  <a href="https://www.instagram.com/fede_forquera/" target="_blank" rel="noopener noreferrer" 
                     className="text-[#379299]/70 hover:text-[#379299] transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/federico-forquera-9280b8203/" target="_blank" rel="noopener noreferrer"
                     className="text-[#379299]/70 hover:text-[#379299] transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#379299] to-[#2d7a7f] z-50">
          <div className="h-full bg-white/30 animate-pulse"></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
