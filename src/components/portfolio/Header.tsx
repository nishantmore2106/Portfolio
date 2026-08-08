import { motion } from "framer-motion";
import { useState } from "react";
import { useContactModal } from "@/context/ContactModalContext";

const menuLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Services", href: "#services" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useContactModal();
  return (
    <header className="fixed top-0 left-0 w-full px-6 md:px-12 py-6 z-[100] flex justify-between items-center bg-transparent pointer-events-none">
      
      {/* Left Box: Logo */}
      <div className="flex items-center gap-1 cursor-pointer pointer-events-auto">
        <img 
          src="/assets/image copy 36.png" 
          alt="Nishant Logo" 
          className="w-[72px] h-[72px] object-contain"
        />
        <span className="bg-white text-black px-3 py-1 rounded-lg font-semibold text-xl tracking-tight mix-blend-difference shadow-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          Nishant
        </span>
      </div>

      {/* Center: Nav Links */}
      <nav className="hidden lg:flex items-center gap-8 pointer-events-auto bg-white/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/40 shadow-sm">
        {menuLinks.map((link, i) => (
          <a 
            key={link.name} 
            href={link.href}
            className={`font-medium text-[15px] transition-colors ${i === 0 ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Right: CTA Button */}
      <div className="flex items-center gap-2 pointer-events-auto">
        <button 
          onClick={() => openModal()}
          className="hidden md:flex items-center justify-center bg-[#111111] hover:bg-black text-white px-7 py-3 rounded-full font-medium text-[15px] transition-colors shadow-lg"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Get In Touch
        </button>
        <button 
          onClick={() => openModal()}
          className="hidden md:flex w-12 h-12 items-center justify-center bg-[#111111] hover:bg-black text-white rounded-full transition-colors shadow-lg"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-12 h-12 flex items-center justify-center bg-[#111111] hover:bg-black text-white rounded-full transition-colors shadow-lg"
        >
          {isMenuOpen ? (
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <line x1="18" y1="6" x2="6" y2="18"></line>
               <line x1="6" y1="6" x2="18" y2="18"></line>
             </svg>
          ) : (
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <line x1="3" y1="12" x2="21" y2="12"></line>
               <line x1="3" y1="6" x2="21" y2="6"></line>
               <line x1="3" y1="18" x2="21" y2="18"></line>
             </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[85px] left-6 right-6 bg-white/95 backdrop-blur-xl rounded-[1.5rem] p-6 shadow-2xl border border-gray-100 md:hidden pointer-events-auto flex flex-col gap-4 z-[110]">
          {menuLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-lg text-gray-800 hover:text-blue-600 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              openModal();
            }}
            className="mt-4 flex items-center justify-center bg-[#111111] text-white px-7 py-3 rounded-full font-medium text-[15px] shadow-lg w-fit"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Get In Touch
          </button>
        </div>
      )}
      
    </header>
  );
}
