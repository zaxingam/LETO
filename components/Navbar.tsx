import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Materials', href: '#materials' },
    { name: 'Technology', href: '#tech' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col cursor-pointer select-none group">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold tracking-tighter text-white font-sans group-hover:text-gray-200 transition-colors">LETO</span>
            {/* Custom Logo Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2H18V6H6V18H2V2Z" fill="#0891b2" />
              <path d="M22 6H18V22H6V18H22V6Z" fill="transparent" stroke="#0891b2" strokeWidth="0" /> 
              {/* Simplified geometric shape inspired by image */}
              <rect x="14" y="2" width="8" height="8" fill="#0e7490" />
              <path d="M14 14L22 22H14V14Z" fill="#ea580c" />
            </svg>
          </div>
          <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase pl-0.5 group-hover:text-blue-400 transition-colors">Leading Together</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-400 hover:text-white transition-colors">
             Search
          </button>
          <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:bg-gray-200 transition-colors uppercase tracking-wider">
            <span>Shop Now</span>
            <ShoppingBag size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10">
            <button className="w-full bg-white text-black py-3 rounded-md font-bold uppercase tracking-wider">
              Shop Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;