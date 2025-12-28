import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'Stealth Black Titanium',
    description: 'Matte finish titanium with soft-touch polymer grip.',
    price: '₩89,000',
    image: 'https://images.unsplash.com/photo-1603539507424-bf507b5ae177?q=80&w=800&auto=format&fit=crop', // generic sleek phone
    features: ['Grade 5 Titanium', '3m Drop Protection']
  },
  {
    id: '2',
    name: 'Glacial Silver',
    description: 'Raw aluminum finish with clear anti-yellowing coat.',
    price: '₩85,000',
    image: 'https://images.unsplash.com/photo-1592910147752-5e0c5f0a631c?q=80&w=800&auto=format&fit=crop',
    features: ['Anodized Aluminum', 'MagSafe Compatible']
  },
  {
    id: '3',
    name: 'Carbon Fiber Pro',
    description: 'Real forged carbon fiber backplate.',
    price: '₩105,000',
    image: 'https://images.unsplash.com/photo-1616353071855-2c045c4458ae?q=80&w=800&auto=format&fit=crop',
    features: ['Forged Carbon', 'Ultra Light']
  },
];

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="bg-[#050505] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 font-mono uppercase tracking-wider">
            2024 Collection
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-4">The Lineup</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            정교함의 극치. 단순한 케이스가 아닌, 당신의 디바이스를 완성하는 마지막 조각입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300">
              {/* Image Area */}
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {product.features.map((feature, i) => (
                        <span key={i} className="text-[10px] uppercase font-bold tracking-wider bg-black/50 backdrop-blur-md text-white px-2 py-1 rounded">
                            {feature}
                        </span>
                    ))}
                </div>
              </div>

              {/* Info Area */}
              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{product.name}</h3>
                  <span className="text-white font-mono">{product.price}</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">{product.description}</p>
                
                <button className="w-full py-3 border border-white/10 rounded text-sm font-medium text-white hover:bg-white hover:text-black transition-all flex items-center justify-center space-x-2 group-hover:border-white/50">
                  <span>View Details</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;