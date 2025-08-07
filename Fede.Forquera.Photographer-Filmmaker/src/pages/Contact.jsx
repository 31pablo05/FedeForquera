import React, { useState, useEffect } from 'react';
import { sendEmail } from '../components/emailjs.jsx'; // Asegúrate que la ruta sea la correcta
import { 
    FaUser, 
    FaEnvelope, 
    FaCommentDots, 
    FaWhatsapp, 
    FaPaperPlane, 
    FaCheckCircle, 
    FaTimesCircle, 
    FaPhone, 
    FaMapMarkerAlt,
    FaInstagram, 
    FaLinkedin, 
    FaFacebook
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [statusMessage, setStatusMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
            offset: 50
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        sendEmail(e.target)
            .then(
                () => {
                    setStatusMessage('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.');
                    setIsSuccess(true);
                    setShowModal(true);
                    setFormData({ name: '', email: '', message: '' });
                    setIsLoading(false);
                },
                () => {
                    setStatusMessage('Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.');
                    setIsSuccess(false);
                    setShowModal(true);
                    setIsLoading(false);
                }
            );
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleWhatsApp = () => {
        const whatsappMessage = `Hola, soy ${formData.name || 'un cliente interesado'}. Me gustaría solicitar información sobre tus servicios de fotografía y filmmaking.`;
        window.open(`https://wa.me/541144567890?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    };
    
    const handleEmailDirect = () => {
        const mailtoLink = `mailto:fedeforquera@example.com?subject=Consulta sobre servicios de fotografía&body=Hola Federico, soy ${formData.name || 'un cliente interesado'}. Me gustaría solicitar más información sobre tus servicios.`;
        window.location.href = mailtoLink;
    };

    const contactMethods = [
        {
            icon: FaWhatsapp,
            title: "WhatsApp",
            description: "Respuesta inmediata",
            action: handleWhatsApp,
            color: "from-green-500 to-green-600",
            hoverColor: "hover:from-green-600 hover:to-green-700"
        },
        {
            icon: FaEnvelope,
            title: "Email Directo",
            description: "fedeforquera@example.com",
            action: handleEmailDirect,
            color: "from-blue-500 to-blue-600",
            hoverColor: "hover:from-blue-600 hover:to-blue-700"
        },
        {
            icon: FaPhone,
            title: "Teléfono",
            description: "+54 11 4456-7890",
            action: () => window.open('tel:+541144567890'),
            color: "from-purple-500 to-purple-600",
            hoverColor: "hover:from-purple-600 hover:to-purple-700"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative py-20 px-4 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <div className="text-center mb-16 px-2">
                        <h1 
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#379299] to-cyan-400 break-words"
                            data-aos="fade-up"
                        >
                            Hablemos
                        </h1>
                        <div 
                            className="w-24 h-1 bg-gradient-to-r from-[#379299] to-cyan-400 mx-auto mb-8"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        ></div>
                        <p 
                            className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-2"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            ¿Tienes un proyecto en mente? Me encantaría conocer tu visión y ayudarte a convertirla en realidad.
                            <span className="block mt-4 text-base sm:text-lg text-[#379299] font-medium">
                                Cada historia merece ser contada de la mejor manera.
                            </span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full">
                        {/* Formulario */}
                        <div 
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl w-full"
                            data-aos="fade-right"
                        >
                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Envíame un mensaje</h2>
                            <form onSubmit={handleSubmit} className="space-y-6 w-full">
                                <div className="relative w-full">
                                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#379299] text-lg" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Tu Nombre"
                                        required
                                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#379299] focus:ring-2 focus:ring-[#379299]/50 transition-all duration-300 text-sm sm:text-base"
                                    />
                                </div>
                                <div className="relative w-full">
                                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#379299] text-lg" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Tu Email"
                                        required
                                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#379299] focus:ring-2 focus:ring-[#379299]/50 transition-all duration-300 text-sm sm:text-base"
                                    />
                                </div>
                                <div className="relative w-full">
                                    <FaCommentDots className="absolute left-4 top-6 text-[#379299] text-lg" />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Cuéntame sobre tu proyecto..."
                                        required
                                        rows="5"
                                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#379299] focus:ring-2 focus:ring-[#379299]/50 transition-all duration-300 resize-none text-sm sm:text-base"
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={isLoading}
                                    className="w-full py-4 bg-gradient-to-r from-[#379299] to-cyan-400 text-white rounded-lg font-semibold flex items-center justify-center hover:shadow-lg hover:shadow-[#379299]/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                                >
                                    {isLoading ? (
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    ) : (
                                        <FaPaperPlane className="mr-2" />
                                    )}
                                    {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                                </button>
                            </form>
                        </div>

                        {/* Métodos de contacto */}
                        <div 
                            className="space-y-6 w-full"
                            data-aos="fade-left"
                        >
                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Otras formas de contacto</h2>
                            {contactMethods.map((method, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer transform hover:scale-105 w-full"
                                    onClick={method.action}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`p-3 sm:p-4 rounded-full bg-gradient-to-r ${method.color} ${method.hoverColor} transition-all duration-300`}>
                                            <method.icon className="text-white text-lg sm:text-xl" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-white font-semibold text-base sm:text-lg truncate">{method.title}</h3>
                                            <p className="text-gray-300 text-sm sm:text-base truncate">{method.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Redes sociales */}
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 w-full">
                                <h3 className="text-white font-semibold text-base sm:text-lg mb-4">Sígueme en redes</h3>
                                <div className="flex space-x-4 justify-center sm:justify-start">
                                    <a 
                                        href="https://instagram.com/fedeforquera" 
                                        className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaInstagram className="text-white text-lg" />
                                    </a>
                                    <a 
                                        href="https://linkedin.com/in/fedeforquera" 
                                        className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-110"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin className="text-white text-lg" />
                                    </a>
                                    <a 
                                        href="https://facebook.com/fedeforquera" 
                                        className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-110"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaFacebook className="text-white text-lg" />
                                    </a>
                                </div>
                            </div>

                            {/* Información adicional */}
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 w-full">
                                <h3 className="text-white font-semibold text-base sm:text-lg mb-4">Información</h3>
                                <div className="space-y-3 text-gray-300">
                                    <div className="flex items-center space-x-3">
                                        <FaMapMarkerAlt className="text-[#379299] flex-shrink-0" />
                                        <span className="text-sm sm:text-base">Buenos Aires, Argentina</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <FaUser className="text-[#379299] flex-shrink-0" />
                                        <span className="text-sm sm:text-base">Disponible para proyectos</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal mejorado */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50 p-4">
                    <div 
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 text-center max-w-md w-full shadow-2xl mx-4"
                        data-aos="zoom-in"
                    >
                        {isSuccess ? (
                            <FaCheckCircle className="text-green-400 text-4xl sm:text-5xl mb-4 mx-auto" />
                        ) : (
                            <FaTimesCircle className="text-red-400 text-4xl sm:text-5xl mb-4 mx-auto" />
                        )}
                        <p className={`text-base sm:text-lg mb-6 ${isSuccess ? "text-green-300" : "text-red-300"} px-2`}>
                            {statusMessage}
                        </p>
                        <button 
                            onClick={handleCloseModal} 
                            className="px-6 py-3 bg-gradient-to-r from-[#379299] to-cyan-400 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#379299]/30 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contact;
