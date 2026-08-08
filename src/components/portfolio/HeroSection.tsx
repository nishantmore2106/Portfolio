import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Smoothly zoom in the image as the user scrolls down
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full overflow-hidden flex flex-col pt-0 md:pt-16 min-h-[100vh] md:min-h-[125vh]"
    >
      {/* Static Background Image with Scroll Zoom */}
      <motion.img
        style={{ scale }}
        src="/assets/image copy 23.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0 origin-center"
      />

      {/* Static Pill Cards (No floating animation) */}
      <FadeIn delay={0.2} direction="none" className="absolute top-[45%] md:top-[45%] -left-8 sm:-left-4 md:left-1/2 md:-translate-x-[180%] lg:-translate-x-[220%] -rotate-[15deg] z-10 pointer-events-none">
        <div className="bg-white rounded-full px-4 py-2 md:px-8 md:py-4 shadow-xl">
          <span className="text-[#1a1a1a] font-medium text-xs md:text-lg whitespace-nowrap tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>Web design</span>
        </div>
      </FadeIn>

      <FadeIn delay={0.3} direction="none" className="absolute top-[55%] md:top-[20%] -right-8 sm:-right-4 md:right-auto md:left-1/2 md:translate-x-[80%] lg:translate-x-[120%] rotate-[15deg] z-10 pointer-events-none">
        <div className="bg-white rounded-full px-4 py-2 md:px-8 md:py-4 shadow-xl">
          <span className="text-[#1a1a1a] font-medium text-xs md:text-lg whitespace-nowrap tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>Web design</span>
        </div>
      </FadeIn>

      {/* Content Area: Text (Left/Top) & Cards (Right/Bottom) */}
      <div className="relative flex-1 w-full px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between md:items-end z-30 pointer-events-auto pt-24 md:pt-32 pb-8 md:pb-[10vh]">
        
        {/* Left Side: Hero Text */}
        <FadeIn direction="up" delay={0.1} className="flex flex-col gap-2 max-w-2xl mb-auto md:mb-0">
          <p className="text-gray-800 font-medium text-lg md:text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            Hi, I'm Nishant.
          </p>
          <h1 className="text-[#1a1a1a] font-black text-[2rem] sm:text-[2.5rem] md:text-6xl lg:text-7xl leading-[1.05] tracking-tight" style={{ fontFamily: "'Maxine Sans Heavy', sans-serif" }}>
            Web Designer,<br className="hidden md:block" /> UI/UX & Landing<br className="hidden md:block" /> Page Designer
          </h1>
        </FadeIn>

        {/* Right Side: Stats Cards */}
        <div className="flex flex-col gap-4 w-full md:w-auto md:min-w-[320px] mt-auto md:mt-0 relative z-40">
          {/* Main Card */}
          <FadeIn direction="up" delay={0.2} className="bg-white rounded-[24px] p-6 flex justify-between items-center shadow-2xl transform transition-transform hover:scale-[1.02] w-full">
            <div className="flex flex-col text-left">
              <span className="text-gray-500 font-medium text-sm md:text-base leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>Years Crafting</span>
              <span className="text-gray-500 font-medium text-sm md:text-base leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>Digital Products</span>
            </div>
            <span className="text-gray-900 font-black text-4xl md:text-5xl" style={{ fontFamily: "'Maxine Sans Heavy', sans-serif" }}>3+</span>
          </FadeIn>

          {/* Sub Cards Container */}
          <div className="flex gap-4 w-full">
            <FadeIn direction="up" delay={0.3} className="bg-white rounded-[24px] p-4 flex flex-col items-center justify-center flex-1 shadow-2xl transform transition-transform hover:scale-[1.05]">
              <span className="text-gray-500 font-medium text-xs sm:text-sm mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Projects</span>
              <span className="text-gray-900 font-black text-2xl sm:text-3xl" style={{ fontFamily: "'Maxine Sans Heavy', sans-serif" }}>50+</span>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="bg-[#111] rounded-[24px] p-4 flex flex-col items-center justify-center flex-1 shadow-2xl transform transition-transform hover:scale-[1.05]">
              <span className="text-gray-400 font-medium text-xs sm:text-sm mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Clients</span>
              <span className="text-white font-black text-2xl sm:text-3xl" style={{ fontFamily: "'Maxine Sans Heavy', sans-serif" }}>20+</span>
            </FadeIn>
          </div>
        </div>
      </div>





      {/* Blur / Gradient Blend into Section 2 */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[25vh] z-20 pointer-events-none"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          maskImage: "linear-gradient(to bottom, transparent, black 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 100%)"
        }}
      />
    </section>
  );
}
