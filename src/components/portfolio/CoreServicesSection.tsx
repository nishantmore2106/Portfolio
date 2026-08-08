import React from 'react';
import FadeIn from "@/components/ui/FadeIn";
import { useContactModal } from "@/context/ContactModalContext";

export default function CoreServicesSection() {
  const { openModal } = useContactModal();
  // Smoky particle aurora — many overlapping irregular radial blobs
  const cardGradient = `
    radial-gradient(ellipse 80% 60% at 20% 15%, rgba(120,140,255,0.70) 0%, transparent 65%),
    radial-gradient(ellipse 55% 45% at 80% 10%, rgba(180,160,255,0.55) 0%, transparent 60%),
    radial-gradient(ellipse 65% 50% at 55% 35%, rgba(100,130,255,0.45) 0%, transparent 55%),
    radial-gradient(ellipse 70% 40% at 10% 55%, rgba(200,210,255,0.50) 0%, transparent 65%),
    radial-gradient(ellipse 50% 60% at 85% 50%, rgba(160,180,255,0.40) 0%, transparent 60%),
    radial-gradient(ellipse 80% 50% at 40% 75%, rgba(230,235,255,0.60) 0%, transparent 65%),
    radial-gradient(ellipse 45% 35% at 70% 80%, rgba(210,220,255,0.50) 0%, transparent 55%),
    radial-gradient(ellipse 60% 30% at 25% 90%, rgba(240,242,255,0.65) 0%, transparent 60%),
    radial-gradient(ellipse 90% 40% at 50% 100%, rgba(255,255,255,0.55) 0%, transparent 70%),
    linear-gradient(160deg, #4a60ee 0%, #7a8fff 35%, #c5ccff 65%, #eef0ff 100%)
  `;
  const cardClass = "rounded-[1.75rem] overflow-hidden border border-white/30 shadow-none backdrop-blur-md";

  return (
    <section
      id="services"
      className="relative overflow-hidden pt-32 md:pt-48 pb-24 md:pb-32"
    >
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Header */}
        <FadeIn direction="up" className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
            </svg>
            <span className="text-purple-300 font-semibold text-sm tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
              Core Services
            </span>
          </div>
          <h2
            className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Design Solutions Built<br />For Growth
          </h2>
        </FadeIn>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">

          {/* Card 1 — top left */}
          <FadeIn direction="up" delay={0.1}
            className={`${cardClass} min-h-[400px] md:min-h-[460px] p-8 md:p-10 flex flex-col relative`}
            style={{ background: cardGradient }}
          >
            <div className="relative z-10">
              <h3 className="text-white font-semibold tracking-tight text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>UI/UX Design</h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-[90%]" style={{ fontFamily: "'Inter', sans-serif" }}>
                UI/UX for Mobile App
              </p>
            </div>
            
            {/* Floating Tags */}
            <div className="absolute bottom-0 left-0 right-0 h-64 md:h-72 pointer-events-none overflow-hidden">
              <div className="relative w-full h-full scale-[1.15] md:scale-[1.25] origin-bottom">
                {/* Marketing equivalent */}
                <div className="absolute bottom-[35%] left-[15%] bg-[#f4f5f9] px-5 py-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
                  <span className="text-[#3a3a40] text-[13px] font-medium whitespace-nowrap">Prototyping</span>
                </div>
                {/* Taxes equivalent (Rotated) */}
                <div className="absolute bottom-[40%] left-[45%] bg-[#f4f5f9] px-5 py-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.05)] transform rotate-[28deg] origin-left">
                  <span className="text-[#3a3a40] text-[13px] font-medium whitespace-nowrap">User Research</span>
                </div>
                {/* Income equivalent */}
                <div className="absolute bottom-[20%] left-[35%] bg-[#f4f5f9] px-5 py-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.05)] z-10">
                  <span className="text-[#3a3a40] text-[13px] font-medium whitespace-nowrap">Wireframing</span>
                </div>
                {/* Utility equivalent */}
                <div className="absolute bottom-[15%] left-[8%] bg-[#f4f5f9] px-5 py-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
                  <span className="text-[#3a3a40] text-[13px] font-medium whitespace-nowrap">Figma</span>
                </div>
                {/* Rent equivalent */}
                <div className="absolute bottom-[2%] left-[8%] bg-[#f4f5f9] px-5 py-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
                  <span className="text-[#3a3a40] text-[13px] font-medium whitespace-nowrap">UI Design</span>
                </div>
                {/* Software equivalent */}
                <div className="absolute bottom-[15%] right-[10%] bg-[#f4f5f9] px-5 py-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
                  <span className="text-[#3a3a40] text-[13px] font-medium whitespace-nowrap">React.js</span>
                </div>
                {/* Operations equivalent */}
                <div className="absolute bottom-[2%] right-[10%] bg-[#f4f5f9] px-5 py-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
                  <span className="text-[#3a3a40] text-[13px] font-medium whitespace-nowrap">Tailwind</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 2 — top center */}
          <FadeIn direction="up" delay={0.2}
            className={`${cardClass} min-h-[400px] md:min-h-[460px] flex flex-col p-8 md:p-10 pb-0 md:pb-0 relative bg-white`}
          >
            <div className="relative z-10 mb-8">
              <h3 className="text-gray-900 font-semibold tracking-tight text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Landing Pages</h3>
              <ul className="text-gray-600 text-sm md:text-base leading-relaxed max-w-[90%] space-y-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Landing Page</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Scroll Trigger Landing Page</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>3D Landing Page</li>
              </ul>
            </div>
            
            {/* Image Container */}
            <div className="w-full aspect-video relative mt-auto mb-8 rounded-[1.5rem] overflow-hidden border-[3px] border-[#3b82f6] shadow-xl">
              <img 
                src="/assets/landing_page_mockup.png" 
                alt="Landing Page Mockup" 
                className="absolute inset-0 w-full h-full object-cover object-center" 
              />
            </div>
          </FadeIn>

          {/* Card 3 — right, spans 2 rows */}
          <FadeIn direction="up" delay={0.3}
            className={`${cardClass} md:row-span-2 min-h-[500px] md:min-h-0 flex flex-col bg-white`}
          >
            {/* Top Image Container */}
            <div className="w-full relative h-[45%] md:h-[55%] shrink-0">
              <img 
                src="/assets/image copy 27.png" 
                alt="Impact" 
                className="w-full h-full object-cover object-top" 
              />
              {/* Fade to white at the bottom edge of the image to blend smoothly into the card body */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
            </div>
            
            {/* Bottom Content Container */}
            <div className="p-8 md:p-10 flex flex-col flex-1 relative z-10 bg-white">
              {/* Pill Badge */}
              <div className="bg-[#f0f3f8] text-[#3a3a40] text-[13px] md:text-sm font-medium px-5 py-2 rounded-full self-start mb-6 md:mb-8">
                Trusted By Global Partners
              </div>
              
              <h3 className="text-gray-900 font-bold tracking-tight text-4xl md:text-5xl mb-4 leading-[1.1]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Let's Create<br />Impact
              </h3>
              
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-[90%]">
                Let's create meaningful and lasting digital impact to grow your business.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex items-center gap-2 mt-auto">
                <button onClick={() => openModal()} className="bg-[#111111] text-white font-medium text-sm md:text-base px-8 py-4 rounded-full hover:bg-black transition-transform hover:scale-105 duration-300">
                  Get In Touch
                </button>
                <button onClick={() => openModal()} className="bg-[#111111] text-white p-4 rounded-full hover:bg-black transition-transform hover:scale-105 duration-300 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Card 4 — bottom left */}
          <FadeIn direction="up" delay={0.4}
            className={`${cardClass} min-h-[360px] md:min-h-[420px] flex flex-col p-8 md:p-10 pb-0 md:pb-0 relative`}
            style={{ background: cardGradient }}
          >
            <div className="relative z-10 mb-8">
              <h3 className="text-white font-semibold tracking-tight text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Web Experience</h3>
              <ul className="text-white/90 text-sm md:text-base leading-relaxed max-w-[90%] space-y-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>Seamless responsive websites</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>Ecommerce Website</li>
              </ul>
            </div>
            
            {/* Image Row Container */}
            <div className="w-full flex flex-col md:flex-row items-end justify-between gap-3 md:gap-4 mt-auto mb-8 relative z-10">
              <div className="w-full md:flex-1 aspect-video rounded-xl overflow-hidden border-[1.5px] border-white/30 shadow-[0_4px_15px_rgba(0,0,0,0.1)] relative">
                <img src="/assets/web_mockup_1.png" alt="Dashboard Mockup" className="absolute inset-0 w-full h-full object-cover object-center" />
              </div>
              <div className="w-full md:flex-1 aspect-video rounded-xl overflow-hidden border-[1.5px] border-white/30 shadow-[0_4px_15px_rgba(0,0,0,0.1)] relative transform md:translate-y-2">
                <img src="/assets/web_mockup_2.png" alt="E-commerce Mockup" className="absolute inset-0 w-full h-full object-cover object-center" />
              </div>
              <div className="w-full md:flex-1 aspect-video rounded-xl overflow-hidden border-[1.5px] border-white/30 shadow-[0_4px_15px_rgba(0,0,0,0.1)] relative">
                <img src="/assets/web_mockup_3.png" alt="App Mockup" className="absolute inset-0 w-full h-full object-cover object-center" />
              </div>
            </div>
          </FadeIn>

          {/* Card 5 — bottom center */}
          <FadeIn direction="up" delay={0.5}
            className={`${cardClass} min-h-[360px] md:min-h-[420px] relative bg-[#f0f3f8] overflow-hidden flex flex-col p-8 md:p-10 pb-0`}
          >
            <div className="relative z-10 mb-8">
              <h3 className="text-gray-900 font-semibold tracking-tight text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Development</h3>
              <ul className="text-gray-600 text-sm md:text-base leading-relaxed max-w-[90%] space-y-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Pixel-perfect front-end</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Netlify Development</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Domains Deployment</li>
              </ul>
            </div>
            <img 
              src="/assets/image 30 (1).png" 
              alt="Graphic" 
              className="absolute bottom-0 left-0 w-full h-auto object-contain object-bottom" 
            />
          </FadeIn>

        </div>

        {/* Policy Note */}
        <FadeIn direction="up" delay={0.6} className="mt-12 md:mt-16 bg-[#eef1f8] border border-blue-100 rounded-2xl p-6 md:p-8 flex items-start gap-4 shadow-sm max-w-4xl mx-auto transition-transform hover:scale-[1.01]">
          <div className="text-blue-500 mt-1 shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-2 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>Project Policy Notice</h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Please note: Clients are required to provide all necessary project documents and an advanced payment by the midway point of the established timeline (half-time of the due date).
            </p>
          </div>
        </FadeIn>
        
      </div>
    </section>
  );
}
