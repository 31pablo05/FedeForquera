import React, { useState } from 'react';

const Card1 = () => {
  const [showImages, setShowImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  // Array de imágenes adicionales
  const images = [
    "/assets/images/Maraton-asics.webp/mar6.webp",
    "/assets/images/Maraton-asics.webp/mar4.webp",
    "/assets/images/Maraton-asics.webp/mar8.webp",
    "/assets/images/Maraton-asics.webp/mar9.webp",
    "/assets/images/Maraton-asics.webp/mar10.webp",
    "/assets/images/Maraton-asics.webp/mar3.webp",
    "/assets/images/Maraton-asics.webp/mar7.webp"
  ];

  return (
    <div className="relative group">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-800">
        <img 
          src="/assets/images/Maraton-asics.webp/mar8.webp" 
          alt="Maratón Asics 2024" 
          className="w-full h-80 object-cover cursor-pointer transition-transform duration-700 group-hover:scale-110"
          onClick={() => openModal("/assets/images/Maraton-asics.webp/mar8.webp")}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#379299] transition-colors duration-300">
            Maratón Asics
          </h3>
          <p className="text-gray-300 mb-4 opacity-90">
            Asics Maratón 2024 - Cobertura completa del evento deportivo
          </p>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowImages(prev => !prev);
            }} 
            className="flex items-center gap-2 text-[#379299] hover:text-cyan-400 font-semibold transition-colors duration-300 group-hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            {showImages ? (
              <>
                <span>Ocultar Galería</span>
                <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            ) : (
              <>
                <span>Ver Galería</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Expanded Gallery */}
      {showImages && (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
          {images.map((src, index) => (
            <div key={index} className="relative group/item overflow-hidden rounded-xl cursor-pointer">
              <img 
                src={src}
                alt={`Maratón Asics - Imagen ${index + 1}`}
                className="w-full h-32 object-cover transition-all duration-300 group-hover/item:scale-110"
                onClick={() => openModal(src)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover/item:scale-100 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-sm z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-[95vw] max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10 backdrop-blur-sm hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image */}
            <img 
              src={selectedImage} 
              alt="Imagen completa" 
              className="max-h-[95vh] max-w-[95vw] object-contain rounded-xl shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
              <p className="text-white text-lg font-medium">Maratón Asics 2024</p>
              <p className="text-gray-300 text-sm">Haz clic fuera de la imagen para cerrar</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card1;
