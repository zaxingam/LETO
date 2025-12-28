import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const SplineHero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050505]">
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full z-0">
         {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#050505] z-10">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Initializing Environment</p>
            </div>
          </div>
        )}
        
        {/* Spline Iframe - Adjusted to remove potential scrollbars and fit perfectly */}
        <iframe 
          src='https://my.spline.design/genkubgreetingrobot-8QbqecVwkSuOWyeSaKspMQcp/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className={`w-full h-full transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          title="Spline 3D Robot"
        ></iframe>
        
        {/* Overlay Gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent opacity-80 pointer-events-none md:w-1/2"></div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pointer-events-none">
        <div className="max-w-2xl pointer-events-auto mt-20 md:mt-0">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-300">Series 04 Available Now</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9] animate-slide-up">
            ENGINEERED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">
              PERFECTION
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-md font-light leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            당신이 꿈꾸던 세상을 같이 만들어갑니다. 이제는 당신과 함께 걷겠습니다.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button className="group bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider flex items-center space-x-2 hover:bg-gray-200 transition-all transform hover:scale-105">
              <span>Explore Collection</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 rounded-full font-medium text-white border border-white/20 hover:bg-white/10 transition-all uppercase tracking-wide text-sm backdrop-blur-sm">
              View Specs
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden md:block text-gray-500">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default SplineHero;