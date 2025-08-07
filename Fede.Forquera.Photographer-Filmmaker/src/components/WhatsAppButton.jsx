import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ message = '¡Hola! Quiero más información.' }) => {
  // Número de teléfono fijo
  const phoneNumber = '+54114567890';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none flex items-center justify-center animate-bounce"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-white text-4xl" />
    </button>
  );
};

export default WhatsAppButton;
