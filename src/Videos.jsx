import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Headphones, ThumbsUp, MessageSquare, PlayCircle, Download, Zap, Moon, ShieldCheck, Award, Star } from 'lucide-react';

const videoData = [
  { id: 'dQw4w9WgXcQ', title: 'Meditación Guiada para Principiantes' },
  { id: '3tmd-ClpJxA', title: 'Meditación para Reducir la Ansiedad' },
  { id: 'L_jWHffIx5E', title: 'Mindfulness para Mejorar el Enfoque' },
  { id: '8-mS20v5d6s', title: 'Meditación para Dormir Profundamente' },
  { id: 'kJQP7kiw5Fk', title: 'Visualización para la Abundancia' },
  { id: 'z9bZufPHFLU', title: 'Meditación de Gratitud' },
];

const Videos = () => {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  return (
    <div className="bg-[#F0FFF0] text-[#5C4033] min-h-screen font-serif animate__animated animate__fadeIn">
      <header className="bg-white/80 backdrop-blur-sm p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <Link to="/" className="text-xl sm:text-2xl font-bold text-[#228B22] hover:text-green-700 transition-colors">
          &larr; Volver a Nimind
        </Link>
      </header>

      <main className="flex flex-col lg:flex-row p-2 sm:p-4 md:p-8 gap-8">
        <div className="lg:w-2/3 flex flex-col gap-8 order-1">
          <div className="animate__animated animate__fadeInLeft">
            {/* Video Player */}
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl h-[50vh] sm:h-[60vh] md:h-[75vh] border-4 border-white/50">
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&color=white`}
                title={currentVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-4 mb-2 text-[#5C4033]">{currentVideo.title}</h2>
          </div>
        </div>

        <aside className="lg:w-1/3 flex flex-col gap-8 animate__animated animate__fadeInRight order-2 lg:order-3">
          {/* Sidebar */}
          {/* Video List */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 border-b border-gray-300 pb-2 text-[#5C4033]">Próximos Videos</h3>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {videoData.map((video, index) => (
                <div 
                  key={video.id} 
                  className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-md ${currentVideo.id === video.id ? 'bg-[#87CEEB]/50 shadow-inner' : 'bg-white/50'}`}
                  onClick={() => setCurrentVideo(video)}
                >
                  <img 
                    src={`https://i3.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-24 h-14 sm:w-28 sm:h-16 object-cover rounded-lg"
                  />
                  <span className="font-semibold text-sm sm:text-md text-[#5C4033]">{video.title}</span>
                  {currentVideo.id === video.id && <PlayCircle className="h-6 w-6 text-[#228B22] ml-auto"/>}
                </div>
              ))}
            </div>
          </div>

          {/* Audio Pack CTA */}
          <div className="bg-gradient-to-br from-[#87CEEB] to-[#228B22] p-6 rounded-2xl text-center shadow-xl text-white">
            <Headphones className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 animate__animated animate__tada" />
            <h3 className="text-xl sm:text-2xl font-extrabold mb-2">Pack de 20 Audios de Meditación</h3>
            <p className="text-md sm:text-lg mb-4">Lleva la calma contigo a donde vayas. Escucha sin conexión.</p>
            <p className="text-3xl sm:text-4xl font-bold mb-4">$5 USD</p>
            <a 
              href="https://chat.whatsapp.com/E8JUBtxp4g0Ky5lZUiX3xg?mode=ac_t"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block bg-white hover:bg-gray-100 text-[#228B22] font-bold py-3 px-6 rounded-full text-md sm:text-lg transition duration-300 transform hover:scale-105 shadow-md animate-pulse"
            >
              Comprar en WhatsApp
            </a>
          </div>

          {/* Promotional Section */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center">
            <h4 className="text-lg sm:text-xl font-bold mb-4 text-[#5C4033]">¿Por qué elegir nuestro pack?</h4>
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-[#228B22]" />
                <span className="text-sm sm:text-base text-[#5C4033]">Garantía de satisfacción de 7 días.</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-[#228B22]" />
                <span className="text-sm sm:text-base text-[#5C4033]">Contenido de alta calidad grabado por profesionales.</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="h-6 w-6 text-[#228B22]" />
                <span className="text-sm sm:text-base text-[#5C4033]">Más de 1,000 clientes felices.</span>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Videos;