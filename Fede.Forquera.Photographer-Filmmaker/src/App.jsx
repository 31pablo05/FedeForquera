// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop'; // Ajusta la ruta según corresponda

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="App bg-[#1d5050] min-h-screen">
                {/* Componente Navbar */}
                <Navbar /> 

                {/* Rutas de la aplicación */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AboutMe" element={<AboutMe />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>

                {/* Botón de WhatsApp */}
                <WhatsAppButton /> 

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
