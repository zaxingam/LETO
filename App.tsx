import React from 'react';
import Navbar from './components/Navbar';
import SplineHero from './components/SplineHero';
import MaterialSection from './components/MaterialSection';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <main>
        <SplineHero />
        
        {/* Transitional Banner */}
        <div className="w-full bg-black py-10 border-t border-b border-white/5 overflow-hidden whitespace-nowrap">
           <div className="inline-block animate-[scroll_20s_linear_infinite]">
             <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mx-8 opacity-20 uppercase">
                Future Protection — Advanced Materials — Precision Engineering —
             </span>
             <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mx-8 opacity-20 uppercase">
                Future Protection — Advanced Materials — Precision Engineering —
             </span>
           </div>
        </div>

        <ProductShowcase />
        <MaterialSection />
        
        {/* Call to Action Section */}
        <section className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Experience the <br /> 
              <span className="text-blue-500">Unseen.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              가장 진보된 보호력을 가장 얇은 두께로. <br/>
              LETO와 함께 미래를 손에 넣으세요.
            </p>
            <button className="bg-white text-black px-12 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Buy Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;