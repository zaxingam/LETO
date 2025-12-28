import React from 'react';
import { Layers, Shield, Zap, Microscope } from 'lucide-react';

const MaterialSection: React.FC = () => {
  const specs = [
    { label: "Tensile Strength", value: "950 MPa" },
    { label: "Density", value: "4.5 g/cm³" },
    { label: "Heat Resistance", value: "600°C" },
    { label: "Thickness", value: "0.8 mm" },
  ];

  return (
    <section id="materials" className="bg-[#0a0a0a] py-24 md:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <h4 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2">Raw Material Science</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">원소재의 미학</h2>
          </div>
          <p className="text-gray-400 mt-4 md:mt-0 max-w-md text-sm md:text-base leading-relaxed">
            우리는 타협하지 않습니다. LETO는 F1 레이싱 카와 우주선에 사용되는 최고급 카본 파이버와 티타늄 합금만을 사용하여 제조됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Visual Representation */}
          <div className="relative group">
            <div className="aspect-square md:aspect-[4/5] rounded-lg overflow-hidden relative">
               {/* Placeholder for Raw Material Texture - Using Unsplash for abstract texture */}
              <img 
                src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1000&auto=format&fit=crop" 
                alt="Carbon Fiber Texture" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6">
                <p className="text-xs font-mono text-blue-400 mb-1">MATERIAL ID: CF-X1</p>
                <h3 className="text-2xl font-bold text-white">Forged Carbon</h3>
              </div>
            </div>
            
            {/* Floating Info Card */}
            <div className="absolute top-6 right-6 glass-panel p-4 rounded-lg border border-white/10 max-w-[180px] transform md:translate-x-12 opacity-90">
              <Microscope size={20} className="text-blue-500 mb-2" />
              <p className="text-xs text-gray-300 leading-tight">
                Micro-structure analysis confirms zero structural defects under 500x magnification.
              </p>
            </div>
          </div>

          {/* Right Column: Technical Details */}
          <div className="flex flex-col justify-center space-y-12">
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Shield className="text-white/80" size={28} />
                <h4 className="text-lg font-semibold text-white">Impact Absorption</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  독자적인 충격 분산 레이어링 기술로 낙하 시 기기에 가해지는 충격을 98% 흡수합니다.
                </p>
              </div>
              <div className="space-y-3">
                <Layers className="text-white/80" size={28} />
                <h4 className="text-lg font-semibold text-white">Nano Coating</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  소수성 나노 코팅 처리로 지문과 유분으로부터 자유로우며, 언제나 새것 같은 촉감을 유지합니다.
                </p>
              </div>
              <div className="space-y-3">
                <Zap className="text-white/80" size={28} />
                <h4 className="text-lg font-semibold text-white">MagSafe Enhanced</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  네오디뮴 N52 자석 배열로 순정 케이스보다 2배 더 강력한 자력을 제공합니다.
                </p>
              </div>
            </div>

            {/* Spec Table */}
            <div className="bg-[#111] rounded-xl p-6 border border-white/5">
              <h5 className="text-xs font-mono text-gray-500 uppercase mb-4 border-b border-white/5 pb-2">Technical Specifications</h5>
              <div className="grid grid-cols-2 gap-y-4">
                {specs.map((spec, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-xs text-gray-500">{spec.label}</span>
                    <span className="text-sm font-mono text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialSection;