import React, { useEffect, useMemo, useState, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from '../components/Banner'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
  const [imageLoaded, setImageLoaded] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 50
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  const handleImageLoad = useCallback((index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  }, []);

  const openLightbox = useCallback((src, alt, category) => {
    setSelectedImage({ src, alt, category });
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const videoSources = useMemo(
    () => [
      '/assets/videos/vid1.mp4',
      '/assets/videos/vid2.mp4',
      '/assets/videos/vid3.mp4',
      '/assets/videos/vid4.mp4',
    ],
    []
  );

  const photoSources = useMemo(
    () => [
      {
        src: '/assets/images/jardinJapones/jar1.webp',
        alt: 'Fotografía en Jardín Japonés',
        category: 'Landscape',
        description: 'Captura serena en el icónico Jardín Japonés de Buenos Aires'
      },
      {
        src: '/assets/images/go7.webp',
        alt: 'Teatro Ciego - Experiencia Sensorial',
        category: 'Event',
        description: 'Documentando experiencias únicas en el Teatro Ciego'
      },
      {
        src: '/assets/images/mc1.webp',
        alt: 'Evento Corporativo McDonald\'s',
        category: 'Commercial',
        description: 'Cobertura profesional de evento corporativo'
      },
      {
        src: '/assets/images/riv3.webp',
        alt: 'River Plate - Momento Deportivo',
        category: 'Sports',
        description: 'Capturando la pasión del fútbol argentino'
      },
      {
        src: '/assets/images/col10.webp',
        alt: 'Club Atlético Colón',
        category: 'Sports',
        description: 'Fotografía deportiva de alta calidad'
      },
      {
        src: '/assets/images/mc2.webp',
        alt: 'McDonald\'s - Activación de Marca',
        category: 'Commercial',
        description: 'Documentación de estrategias de marketing'
      },
      {
        src: '/assets/images/mc5.webp',
        alt: 'Campaña McDonald\'s',
        category: 'Commercial',
        description: 'Contenido visual para redes sociales'
      },
      {
        src: '/assets/images/vod6.webp',
        alt: 'Vodcast - Producción Audiovisual',
        category: 'Media',
        description: 'Behind the scenes de producción de podcast'
      },
      {
        src: '/assets/images/neg2.webp',
        alt: 'Negroni - Fotografía de Producto',
        category: 'Commercial',
        description: 'Fotografía comercial y de producto premium'
      },
      {
        src: '/assets/images/vod2.webp',
        alt: 'Estudio de Grabación',
        category: 'Media',
        description: 'Documentando el proceso creativo audiovisual'
      },
    ],
    []
  );

  return (
    <>
      <div className="home">
      {/* Banner mejorado */}
      <Banner />

      {/* Hero Section Profesional */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Capturando <span className="text-[#379299]">momentos únicos</span>
          </h2>
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Fotógrafo y filmmaker profesional especializado en eventos corporativos, 
            retratos artísticos y contenido audiovisual de alta calidad para marcas reconocidas.
          </p>
          <div 
            data-aos="fade-up" 
            data-aos-delay="400"
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-500"
          >
            <span className="bg-white px-4 py-2 rounded-full shadow">• Eventos Corporativos</span>
            <span className="bg-white px-4 py-2 rounded-full shadow">• Fotografía Deportiva</span>
            <span className="bg-white px-4 py-2 rounded-full shadow">• Contenido Comercial</span>
            <span className="bg-white px-4 py-2 rounded-full shadow">• Producciones Audiovisuales</span>
          </div>
        </div>
      </section>

      {/* Sección de Galería Mejorada - Video optimizado */}
      <section className="gallery-section relative py-20 text-white overflow-hidden">
        {/* Video de fondo optimizado - solo se carga cuando es necesario */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          style={{ filter: 'brightness(0.4) contrast(1.1)' }}
          poster="/assets/images/video-poster.jpg"
        >
          <source src="/assets/videos/fondoVideo.mp4" type="video/mp4" />
          {/* Fallback para browsers que no soportan video */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        </video>
        
        {/* Fallback de gradiente si el video no carga */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-50"></div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Galería de Fotos Profesional */}
          <div className="photo-gallery mb-20 mt-10">
            <div className="text-center mb-16">
              <h3 
                data-aos="fade-up"
                className="text-4xl md:text-5xl font-bold mb-4 text-white"
              >
                Galería Fotográfica
              </h3>
              <div 
                data-aos="fade-up" 
                data-aos-delay="200"
                className="w-24 h-1 bg-[#379299] mx-auto mb-6"
              ></div>
              <p 
                data-aos="fade-up" 
                data-aos-delay="400"
                className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
              >
                Una selección curada de mis trabajos más destacados en diferentes categorías profesionales
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {photoSources.map((photo, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer bg-gray-800"
                  onClick={() => openLightbox(photo.src, photo.alt, photo.category)}
                >
                  {/* Loading skeleton */}
                  {!imageLoaded[index] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse rounded-xl">
                      <div className="flex items-center justify-center h-80">
                        <div className="text-gray-500">
                          <svg className="w-12 h-12 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    width="380"
                    height="320"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    onLoad={() => handleImageLoad(index)}
                    className={`w-full h-80 object-cover transition-all duration-700 group-hover:scale-110 ${
                      imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      objectFit: 'cover',
                      aspectRatio: '380/320'
                    }}
                  />
                  
                  {/* Overlay con información */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-bold text-lg mb-2 leading-tight">{photo.alt}</p>
                      <p className="text-gray-200 text-sm mb-3 leading-relaxed">{photo.description}</p>
                      <span className="inline-block px-3 py-1 bg-[#379299] text-white text-xs rounded-full font-medium uppercase tracking-wide">
                        {photo.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Icono de zoom */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Galería de Videos Profesional */}
          <div className="video-gallery">
            <div className="text-center mb-16">
              <h3 
                data-aos="fade-up"
                className="text-4xl md:text-5xl font-bold mb-4 text-white"
              >
                Producciones Audiovisuales
              </h3>
              <div 
                data-aos="fade-up" 
                data-aos-delay="200"
                className="w-24 h-1 bg-[#379299] mx-auto mb-6"
              ></div>
              <p 
                data-aos="fade-up" 
                data-aos-delay="400"
                className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
              >
                Contenido audiovisual de alta calidad para marcas, eventos y proyectos creativos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {videoSources.map((videoSrc, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gray-900"
                >
                  <video
                    src={videoSrc}
                    controls
                    preload="none"
                    loading="lazy"
                    className="w-full aspect-video object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                    poster={`${videoSrc.replace('.mp4', '')}-poster.jpg`}
                  />
                  
                  {/* Overlay de información */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-white font-bold text-lg mb-2">
                      Producción Audiovisual {index + 1}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Contenido profesional creado con técnicas cinematográficas de vanguardia
                    </p>
                    <div className="flex items-center mt-3 space-x-2">
                      <span className="inline-block px-2 py-1 bg-[#379299] text-white text-xs rounded font-medium">
                        HD
                      </span>
                      <span className="inline-block px-2 py-1 bg-gray-700 text-white text-xs rounded font-medium">
                        Profesional
                      </span>
                    </div>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-16 h-16 bg-[#379299]/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#379299]">
        <div className="container mx-auto px-6 text-center">
          <h3 
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            ¿Listo para capturar tu próximo proyecto?
          </h3>
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Trabajemos juntos para crear contenido visual que destaque y conecte con tu audiencia. 
            Experiencia comprobada con marcas líderes del mercado.
          </p>
          <div 
            data-aos="fade-up" 
            data-aos-delay="400"
            className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
          >
            <a
              href="/contact"
              className="inline-block bg-white text-[#379299] font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contactar Ahora
            </a>
            <a
              href="/portfolio"
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Ver Portfolio Completo
            </a>
          </div>
        </div>
      </section>
    </div>

    {/* Lightbox Modal Profesional */}
    {selectedImage && (
      <div 
        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        onClick={closeLightbox}
      >
        <div className="relative max-w-5xl max-h-full animate-fadeIn">
          {/* Botón de cerrar */}
          <button
            onClick={closeLightbox}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            aria-label="Cerrar lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Imagen principal */}
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Información de la imagen */}
          <div className="bg-black/80 backdrop-blur-sm rounded-lg p-6 mt-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-white text-xl font-bold mb-2">{selectedImage.alt}</h3>
            <div className="flex items-center space-x-4">
              <span className="inline-block px-3 py-1 bg-[#379299] text-white text-sm rounded-full font-medium">
                {selectedImage.category}
              </span>
              <span className="text-gray-300 text-sm">Fede Forquera Photography</span>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}

export default Home;

