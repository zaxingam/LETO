import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-2">LETO.</h3>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-6">Leading Together</p>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Designing the future of personal technology protection through advanced material science and robotics-inspired aesthetics.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-white cursor-pointer transition-colors">Titanium Series</li>
              <li className="hover:text-white cursor-pointer transition-colors">Carbon Series</li>
              <li className="hover:text-white cursor-pointer transition-colors">Accessories</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-white cursor-pointer transition-colors">Warranty</li>
              <li className="hover:text-white cursor-pointer transition-colors">Shipping & Returns</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          <div>
             <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-6">Newsletter</h4>
             <div className="flex border-b border-white/20 pb-2">
               <input 
                 type="email" 
                 placeholder="Email Address" 
                 className="bg-transparent border-none outline-none text-white text-sm w-full placeholder-gray-600"
               />
               <button className="text-gray-400 hover:text-white uppercase text-xs font-bold">Join</button>
             </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-xs text-gray-600">© 2024 LETO Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-xs text-gray-600 hover:text-gray-400 cursor-pointer">Privacy</span>
            <span className="text-xs text-gray-600 hover:text-gray-400 cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;