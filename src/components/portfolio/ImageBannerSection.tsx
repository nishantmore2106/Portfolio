import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ImageBannerSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Smoothly zoom in the image as it scrolls through the viewport
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  return (
    <section ref={containerRef} className="w-full h-[60vh] md:h-[80vh] bg-[#000000] relative overflow-hidden flex items-center justify-center pointer-events-none">
      <motion.img 
        style={{ scale }}
        src="/assets/image copy 11.png" 
        alt="Divider Banner" 
        className="w-full h-full object-cover opacity-100 origin-center" 
      />
    </section>
  );
}
