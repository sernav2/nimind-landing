import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import nimedLogo from '/nimedtransformed.png';
import danceImage from '/baileymeditacion.png';
import heroVideo from './assets/video_meditacion.mp4';
import { Youtube, Headphones, BrainCircuit } from 'lucide-react';
import benefitImage1 from './assets/f8z3m6P3tScY.jpg';
import benefitImage2 from './assets/kNnAlgKaQvlB.jpg';
import benefitImage3 from './assets/QBU3JnO0oeOy.jpg';

function App() {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src={nimedLogo} alt="Nimind Logo" className="h-12 w-12 mr-3"/>
            <span className="text-3xl font-bold text-gray-800">Nimind</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#meditaciones" className="text-gray-600 hover:text-purple-600 transition duration-300">Meditaciones</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center text-white overflow-hidden">
        <video 
          autoPlay 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center z-10 p-4 animate__animated animate__fadeInUp">
          <h1 className="text-6xl font-extrabold mb-4">Encuentra tu calma interior con Nimind</h1>
          <p className="text-2xl mb-8">Meditaciones guiadas y personalizadas para tu bienestar.</p>
          <a 
            href="https://chat.whatsapp.com/E8JUBtxp4g0Ky5lZUiX3xg?mode=ac_t"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 transform hover:scale-105 animate-pulse"
          >
            Reserva tu meditación guiada
          </a>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-pastel-purple to-pastel-blue"></div>

      {/* Guided Meditations Section */}
      <section id="meditaciones" className="py-24 bg-purple-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Tu Oasis de Calma Digital</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">Accede a una librería curada de meditaciones en video y audio, diseñadas para guiarte hacia la serenidad y el enfoque en cualquier momento del día.</p>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="flex flex-col items-center">
              <Youtube className="h-16 w-16 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Contenido en Video</h3>
              <p className="text-gray-600">Sigue nuestras meditaciones guiadas en YouTube para una experiencia visual y auditiva completa.</p>
            </div>
            <div className="flex flex-col items-center">
              <Headphones className="h-16 w-16 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Audiolibros Exclusivos</h3>
              <p className="text-gray-600">Descarga nuestros audiolibros y lleva la calma contigo, incluso sin conexión a internet.</p>
            </div>
            <div className="flex flex-col items-center">
              <BrainCircuit className="h-16 w-16 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Técnicas para tu Mente</h3>
              <p className="text-gray-600">Aprende técnicas de mindfulness y respiración que podrás aplicar en tu vida diaria.</p>
            </div>
          </div>

          <Link 
            to="/videos"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-12 rounded-full text-2xl transition duration-300 transform hover:scale-105 shadow-lg animate-pulse"
          >
            Explorar la Colección
          </Link>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-pastel-purple to-pastel-blue"></div>

      {/* Dance and Meditation Section */}
      <section id="clases" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4 animate__animated animate__fadeInLeft">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Baile y meditación: energía y paz en un solo día</h2>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Muévete, respira y renueva tu energía</h3>
            <p className="text-lg text-gray-700 mb-4">Baila para liberar, medita para transformar.</p>
            <div className="space-y-3 text-gray-600">
              <p><strong>📍 Punto de reunión:</strong> Quiosco cercano al planetario</p>
              <p><strong>📅 Domingos:</strong> 12:00 PM</p>
              <p><strong>💰 Costo:</strong> $100 pesos</p>
            </div>
            <p className="mt-4 text-gray-700">Aprende los pasos básicos de salsa, bachata y cumbia con un enfoque práctico para que puedas salir a bailar con confianza, y complementa la experiencia con una meditación guiada para recargar tu mente y encontrar calma interior.</p>
            <div className="mt-6">
              <h4 className="font-bold text-lg">¡Confirma tu asistencia y ven a divertirte!</h4>
              <a 
                href="https://chat.whatsapp.com/E8JUBtxp4g0Ky5lZUiX3xg?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full text-md transition duration-300 transform hover:scale-105 animate-pulse"
              >
                Unirse al Grupo
              </a>
            </div>
          </div>
          <div className="md:w-1/2 p-4 animate__animated animate__fadeInRight">
            <img src={danceImage} alt="Clase de baile y meditación" className="rounded-lg shadow-2xl w-full"/>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-pastel-purple to-pastel-blue"></div>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Beneficios de la Meditación Guiada</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src={benefitImage1} alt="Beneficio 1" className="rounded-lg shadow-lg mx-auto h-64 w-full object-cover"/>
              <h3 className="text-2xl font-bold my-4">Reduce el Estrés</h3>
              <p className="text-gray-600">Encuentra la calma y reduce la ansiedad del día a día con prácticas de mindfulness y relajación profunda.</p>
            </div>
            <div className="text-center">
              <img src={benefitImage2} alt="Beneficio 2" className="rounded-lg shadow-lg mx-auto h-64 w-full object-cover"/>
              <h3 className="text-2xl font-bold my-4">Mejora el Enfoque</h3>
              <p className="text-gray-600">Entrena tu mente para concentrarte mejor y aumentar tu productividad en todas las áreas de tu vida.</p>
            </div>
            <div className="text-center">
              <img src={benefitImage3} alt="Beneficio 3" className="rounded-lg shadow-lg mx-auto h-64 w-full object-cover"/>
              <h3 className="text-2xl font-bold my-4">Promueve el Bienestar</h3>
              <p className="text-gray-600">Cultiva una sensación de paz interior, equilibrio emocional y felicidad duradera a través de la meditación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Nimind. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
