import React from 'react';
import { useContactModal } from "@/context/ContactModalContext";

export default function Footer() {
  const { openModal } = useContactModal();
  return (
    <footer className="relative bg-gradient-to-b from-[#1b3475] to-[#091b48] pt-20 pb-10 overflow-hidden">
      {/* Top Smoke Gradient to blend with section above */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#f4f7f9] to-transparent pointer-events-none z-0" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Top: Headline & CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <h2 className="text-white font-semibold text-4xl md:text-6xl lg:text-[5rem] tracking-tight leading-[1.05]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Ready To Start<br /> Something Great?
          </h2>
          <div className="flex items-center gap-3">
            <button onClick={() => openModal()} className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              Book a Call
            </button>
            <button onClick={() => openModal()} className="w-[56px] h-[56px] bg-white text-gray-900 rounded-full flex justify-center items-center hover:bg-gray-100 transition-colors shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Middle: Navigation Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
          <a href="#home" className="bg-white rounded-[1.5rem] p-6 md:p-8 flex flex-col justify-between h-[160px] md:h-[200px] transition-transform hover:scale-[1.02] shadow-xl">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900">
              <path d="M12 3l9 8v10h-6v-6H9v6H3V11z" />
            </svg>
            <span className="text-gray-900 font-medium text-xl md:text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>Home</span>
          </a>
          
          <a href="#about" className="border border-white/20 rounded-[1.5rem] p-6 md:p-8 flex flex-col justify-between h-[160px] md:h-[200px] transition-all hover:bg-white/10 hover:border-white/40">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span className="text-white font-medium text-xl md:text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>About</span>
          </a>
          
          <a href="#services" className="border border-white/20 rounded-[1.5rem] p-6 md:p-8 flex flex-col justify-between h-[160px] md:h-[200px] transition-all hover:bg-white/10 hover:border-white/40">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            <span className="text-white font-medium text-xl md:text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>Services</span>
          </a>
          
          <a href="#projects" className="border border-white/20 rounded-[1.5rem] p-6 md:p-8 flex flex-col justify-between h-[160px] md:h-[200px] transition-all hover:bg-white/10 hover:border-white/40">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span className="text-white font-medium text-xl md:text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>Portfolio</span>
          </a>
        </div>

        {/* Bottom: Divider & Links */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/60 text-sm md:text-base font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
            Designed & Developed By Nishant
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 bg-white rounded-full flex justify-center items-center text-gray-900 hover:scale-110 transition-transform">
              {/* LinkedIn */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.instagram.com/itsnisahnt_21/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex justify-center items-center text-gray-900 hover:scale-110 transition-transform">
              {/* Instagram */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
          
          <div className="flex items-center gap-6 text-white/60 text-sm md:text-base font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Portfolio</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
