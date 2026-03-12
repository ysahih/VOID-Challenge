import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { FaTrophy } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Nos offres', href: '#' },
    { name: 'Nos jeux', href: '#' },
    { name: 'Album 2025', href: '#' },
    { name: 'À propos', href: '#' },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50 font-['Poppins']">
      {/* 96px x-padding for the navbar (px-24 in Tailwind) */}
      <div className="max-w-[1440px] mx-auto px-3 md:px-6 lg:px-24">
        <div className="flex justify-between items-center h-[72px]">
          
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0 gap-2 cursor-pointer group">
            {/* Logo with white filled icon and gradient background exactly as shown */}
            <div className="bg-gradient-to-br from-[#16A34A] to-[#0B6B3A] w-10 h-10 rounded-[12px] flex items-center justify-center shadow-lg shadow-primary-green/20">
              <FaTrophy className="text-white w-5 h-5 fill-white" />
            </div>
            <div className="ml-1 flex items-center text-[22px] font-bold tracking-tight">
              <span className="text-[#DC2626]">You</span>
              <span className="text-[#1F2937]">can</span>
              <span className="text-[#B01219]">win</span>
            </div>
            <div className="flex items-center mt-2 py-[2px] bg-badge-bg px-2.5 rounded-full">
              <span className="text-[10px] font-semibold text-primary-green tracking-wider uppercase">Games</span>
            </div>
          </div>

          {/* Links and CTA grouped together on the right */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#374151] text-[14px] font-medium hover:text-primary-green transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <button className="cursor-pointer group/btn bg-gradient-to-r from-accent-green to-primary-green text-white px-6 h-[40px] rounded-xl text-[14px] font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-[0_10px_30px_-5px_rgba(22,163,74,0.4)] shadow-md">
              Demander une démo
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-6 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-sm font-medium text-nav-text hover:text-primary-green hover:bg-gray-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 px-3">
              <button className="w-full bg-gradient-to-r from-accent-green to-primary-green text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg">
                Demander une démo
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
