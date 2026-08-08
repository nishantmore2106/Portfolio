import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Slow down the video playback speed (0.5 = half speed)
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section 
      id="about" 
      className="relative w-full flex flex-col items-center justify-start overflow-hidden bg-black"
    >
      {/* Video Container with Overlaid Text */}
      <div className="relative w-full h-[90vh] md:h-[115vh] flex items-center justify-center">
        <video 
          ref={videoRef}
          src="/assets/animo-spiral-stream-720p (3).webm" 
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay 
          loop 
          muted 
          playsInline
        />
        
        {/* TechStack Text Overlay - No Background */}
        <div className="relative z-20 w-full flex flex-col items-center justify-center px-4 pointer-events-none mix-blend-difference -translate-y-20 md:-translate-y-40">
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-center tracking-[0.3em] uppercase mb-2 md:mb-4 max-w-[90vw] md:max-w-[70vw] mx-auto leading-relaxed"
            style={{ 
              fontFamily: "'Maxine Sans Heavy', sans-serif",
              fontSize: "clamp(0.55rem, 1vw, 0.9rem)"
            }}
          >
            CHATGPT • GEMINI • ANTIGRAVITY • GOOGLE LABS • CLAUDE • FRAMER • NODE.JS • TAILWIND • REACT • SUPABASE
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 0.9, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-white text-center leading-[0.8] tracking-tighter w-full"
            style={{ 
              fontFamily: "'Maxine Sans Heavy', sans-serif",
              fontSize: "clamp(3rem, 12vw, 25rem)", 
              whiteSpace: "nowrap"
            }}
          >
            TechStack
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
