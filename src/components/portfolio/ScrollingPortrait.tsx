import { useEffect, useState, useCallback, useRef } from "react";

interface AnchorCoords {
  absoluteX: number;
  absoluteY: number;
}

interface AnchorsState {
  hero: AnchorCoords;
  services: AnchorCoords;
  about: AnchorCoords;
}

export default function ScrollingPortrait() {
  const [scrollY, setScrollY] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [anchors, setAnchors] = useState<AnchorsState | null>(null);
  const rafRef = useRef<number>();
  
  const updateCoords = useCallback((width: number, height: number) => {
    const heroEl = document.getElementById("portrait-hero-anchor");
    const servicesEl = document.getElementById("portrait-services-anchor");
    const aboutEl = document.getElementById("portrait-about-anchor");

    if (heroEl && servicesEl && aboutEl) {
      const getAbsoluteCenter = (el: HTMLElement): AnchorCoords => {
        const rect = el.getBoundingClientRect();
        return {
          absoluteX: rect.left + window.scrollX + rect.width / 2,
          absoluteY: rect.top + window.scrollY + rect.height / 2
        };
      };

      setAnchors({
        hero: getAbsoluteCenter(heroEl),
        services: getAbsoluteCenter(servicesEl),
        about: getAbsoluteCenter(aboutEl)
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setDimensions({ width: w, height: h });
      updateCoords(w, h); // Pass directly to avoid stale state
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call
    
    // Multiple delayed checks as layout stabilizes (images loading, etc)
    const timers = [
      setTimeout(handleResize, 500),
      setTimeout(handleResize, 1500),
      setTimeout(handleResize, 3000)
    ];
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      timers.forEach(clearTimeout);
    };
  }, [updateCoords]);

  if (dimensions.width < 100 || !anchors) return null;

  // ANIMATION CONFIG
  const vwc = dimensions.width / 2;
  const vhc = dimensions.height / 2;

  // Timing: Start journey after a bit of scroll
  const heroEndScroll = 50; 
  // Landing: When the About section's anchor is centered in viewport
  const landingScroll = anchors.about.absoluteY - vhc;
  
  const progress = Math.max(0, Math.min(1, (scrollY - heroEndScroll) / (landingScroll - heroEndScroll)));

  let targetX: number;
  let targetY: number;
  let rotation: number = 0;
  const scale = 1 + Math.sin(progress * Math.PI) * 0.1;

  if (progress <= 0) {
    // Stage 1: Locked to Hero position
    targetX = anchors.hero.absoluteX - vwc;
    targetY = anchors.hero.absoluteY - scrollY - vhc;
    rotation = 0;
  } else if (progress < 1) {
    // Stage 2: Traveling
    const p1 = Math.min(1, progress / 0.5);
    const p2 = Math.max(0, (progress - 0.5) / 0.5);

    if (progress < 0.5) {
      // Hero to Services
      targetX = (anchors.hero.absoluteX - vwc) + (anchors.services.absoluteX - vwc - (anchors.hero.absoluteX - vwc)) * p1;
      targetY = (anchors.hero.absoluteY - scrollY - vhc) + (anchors.services.absoluteY - scrollY - vhc - (anchors.hero.absoluteY - scrollY - vhc)) * p1;
    } else {
      // Services to About
      targetX = (anchors.services.absoluteX - vwc) + (anchors.about.absoluteX - vwc - (anchors.services.absoluteX - vwc)) * p2;
      targetY = (anchors.services.absoluteY - scrollY - vhc) + (anchors.about.absoluteY - scrollY - vhc - (anchors.services.absoluteY - scrollY - vhc)) * p2;
    }
    rotation = progress * 360;
  } else {
    // Stage 3: Locked to About position
    targetX = anchors.about.absoluteX - vwc;
    targetY = anchors.about.absoluteY - scrollY - vhc;
    rotation = 360;
  }

  if (isNaN(targetX) || isNaN(targetY)) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[49] flex items-center justify-center">
      <div 
        className="relative"
        style={{
          transform: `translate3d(${targetX}px, ${targetY}px, 0) scale(${scale})`,
          perspective: "2000px",
          transformStyle: "preserve-3d" // Ensure parents preserve 3D
        }}
      >
        <div 
          className="portrait-inner relative"
          style={{
            width: "clamp(240px, 32vw, 420px)",
            height: "clamp(320px, 42vw, 540px)",
            borderRadius: "3rem",
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
            background: "transparent", // Background handled by sides
          }}
        >
          {/* FRONT SIDE */}
          <div 
            className="absolute inset-0 w-full h-full rounded-[3rem] overflow-hidden"
            style={{ 
              backfaceVisibility: "hidden", 
              transform: "rotateY(0deg)",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: `0 40px 100px rgba(0,0,0,0.8), 0 0 60px rgba(208,255,113,${0.1 + Math.sin(progress * Math.PI) * 0.2})`,
            }}
          >
            <img
              src="/potrait (2).png"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
            {/* Front Gloss */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          </div>

          {/* BACK SIDE */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center rounded-[3rem] p-10 text-center"
            style={{ 
              background: "#D0FF71",
              backfaceVisibility: "hidden", 
              transform: "rotateY(180deg)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
            }}
          >
            <span className="text-[#0f0f0f] font-black leading-none text-7xl uppercase font-syne opacity-10 blur-[2px] absolute select-none">
              PORTFOLIO
            </span>
            <div className="relative text-[#0f0f0f] font-black text-5xl uppercase font-syne leading-none">
              NISHANT<br/>MORE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
