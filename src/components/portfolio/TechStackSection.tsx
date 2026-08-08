import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Glitch Clothing", category: "E-Commerce", url: "https://glitchcolhing.netlify.app" },
  { title: "Beyond Growth", category: "Landing Page", url: "https://beyondgrowth.netlify.app" },
  { title: "Lumina Web Agency", category: "Agency Website", url: "https://luminawebagencie.netlify.app" },
  { title: "Journey With AI", category: "AI Experience", url: "https://journeywithai.netlify.app" },
  { title: "Snow Luxury", category: "Luxury Brand", url: "https://snowluxury.netlify.app" },
  { title: "Builder Aura", category: "SaaS Platform", url: "https://buidleraura.netlify.app" },
  { title: "Voltix Aura", category: "Tech Product", url: "https://voltixaura.netlify.app" },
  { title: "Japan Escape", category: "Travel Experience", url: "https://traveljapanescape.netlify.app" },
  { title: "Quiet Shelf", category: "Lifestyle Brand", url: "https://quiteshelf.netlify.app" },
  { title: "Hiroshi Samurai", category: "Creative Portfolio", url: "https://hiroshi-samurai.netlify.app" },
  { title: "Midway Hotel", category: "Hospitality", url: "https://midway-hotel.netlify.app" },
];

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const totalProjects = projects.length;
    const cards = gsap.utils.toArray<HTMLElement>(".browser-card");

    // Set initial states directly via GSAP (not inline styles)
    // Card 0 is fully visible, all others are hidden below
    cards.forEach((card, i) => {
      if (i === 0) {
        gsap.set(card, {
          rotateX: 0,
          y: 0,
          z: 0,
          opacity: 1,
          visibility: "visible",
        });
      } else {
        gsap.set(card, {
          rotateX: 30,
          y: 60,
          z: -100,
          opacity: 0,
          visibility: "hidden",
        });
      }
    });

    const ctx = gsap.context(() => {
      // Create one ScrollTrigger that drives progress manually
      ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: `+=${totalProjects * 100}%`,
        scrub: 0,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const rawIndex = progress * (totalProjects - 1);
          const currentIdx = Math.floor(rawIndex);
          const fraction = rawIndex - currentIdx;

          setActiveIndex(Math.min(currentIdx, totalProjects - 1));

          // Track scrolling state
          setIsScrolling(true);
          if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
          scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 200);

          // Animate each card based on progress
          cards.forEach((card, i) => {
            if (i < currentIdx) {
              // Already flipped away
              gsap.set(card, {
                rotateX: -90,
                y: -50,
                z: -300,
                opacity: 0,
                visibility: "hidden",
              });
            } else if (i === currentIdx) {
              // Currently active card — flipping away
              gsap.set(card, {
                rotateX: fraction * -90,
                y: fraction * -50,
                z: fraction * -300,
                opacity: 1 - fraction * 0.8,
                visibility: "visible",
              });
            } else if (i === currentIdx + 1) {
              // Next card — rising into view
              gsap.set(card, {
                rotateX: 30 - fraction * 30,
                y: 60 - fraction * 60,
                z: -100 + fraction * 100,
                opacity: fraction,
                visibility: "visible",
              });
            } else {
              // Future cards — hidden in stack
              gsap.set(card, {
                rotateX: 30,
                y: 60,
                z: -100,
                opacity: 0,
                visibility: "hidden",
              });
            }
          });
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="h-screen w-full relative"
      style={{ backgroundColor: "#000000", overflow: "hidden" }}
    >
      {/* 3D Perspective Container */}
      <div
        className="w-full h-full flex items-center justify-center relative"
        style={{ perspective: "1800px", perspectiveOrigin: "50% 50%" }}
      >
        {/* Browser Stack */}
        <div
          className="relative w-[92vw] sm:w-[85vw] md:w-[78vw] lg:w-[72vw] aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/10]"
          style={{
            maxWidth: "1300px",
            transformStyle: "preserve-3d",
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.url}
              className="browser-card absolute inset-0"
              style={{
                zIndex: projects.length - i,
                willChange: "transform, opacity",
                transformOrigin: "center bottom",
                transformStyle: "preserve-3d",
              }}
            >
              {/* macOS Browser Frame */}
              <div
                className="w-full h-full rounded-[20px] overflow-hidden flex flex-col"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: [
                    "0 40px 100px rgba(0,0,0,0.7)",
                    "0 15px 40px rgba(0,0,0,0.5)",
                    "inset 0 1px 0 rgba(255,255,255,0.08)",
                    "inset 0 -1px 0 rgba(255,255,255,0.02)",
                  ].join(", "),
                  background: "#1a1a1a",
                }}
              >
                {/* Toolbar */}
                <div
                  className="flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 flex-shrink-0"
                  style={{
                    background: "linear-gradient(180deg, #2d2d2d 0%, #262626 100%)",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Traffic lights */}
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-[0_0_4px_rgba(255,95,87,0.4)]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-[0_0_4px_rgba(254,188,46,0.4)]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-[0_0_4px_rgba(40,200,64,0.4)]" />
                  </div>

                  {/* Navigation arrows */}
                  <div className="hidden sm:flex items-center gap-2 ml-2">
                    <svg className="w-3.5 h-3.5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <svg className="w-3.5 h-3.5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Address bar */}
                  <div
                    className="flex-1 mx-2 sm:mx-8 py-1.5 px-4 rounded-lg text-center"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {/* Lock icon */}
                      <svg className="w-3 h-3 text-white/25 flex-shrink-0 hidden sm:block" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/35 text-[10px] sm:text-[11px] font-mono tracking-wider truncate">
                        {project.url.replace("https://", "")}
                      </span>
                    </div>
                  </div>

                  {/* Menu dots */}
                  <div className="hidden sm:flex items-center gap-1 ml-2">
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                  </div>
                </div>

                {/* Live Website Viewport - Memory Optimized */}
                <div className="flex-1 relative overflow-hidden bg-[#0a0a0a]">
                  {Math.abs(activeIndex - i) <= 1 ? (
                    <iframe
                      src={project.url}
                      title={project.title}
                      className="w-full h-full border-0 animate-in fade-in duration-700"
                      loading="eager" // Eager because we are manually controlling mounting
                      sandbox="allow-scripts allow-same-origin allow-popups"
                      style={{
                        pointerEvents: isScrolling ? "none" : "auto",
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white/10 border-t-white/40 rounded-full animate-spin mb-4" />
                      <span className="text-white/20 text-[10px] font-mono tracking-widest uppercase">
                        Optimizing Memory...
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Info Overlay — Bottom Bar */}
        <div className="absolute bottom-[3%] sm:bottom-[6%] left-0 w-full flex justify-center z-50 pointer-events-none px-4">
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-6 px-6 sm:px-10 py-3 sm:py-4 rounded-2xl sm:rounded-full"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Counter */}
            <span className="text-white/30 text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase">
              {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>

            {/* Separator (desktop only) */}
            <div className="hidden sm:block w-px h-4 bg-white/10" />

            {/* Title */}
            <h3
              className="text-white text-sm sm:text-xl font-semibold tracking-tight text-center"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {projects[activeIndex].title}
            </h3>

            {/* Separator (desktop only) */}
            <div className="hidden sm:block w-px h-4 bg-white/10" />

            {/* Category */}
            <span className="text-white/40 text-[9px] sm:text-xs tracking-[0.15em] uppercase text-center">
              {projects[activeIndex].category}
            </span>

            {/* View Live Link */}
            <a
              href={projects[activeIndex].url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 sm:mt-0 text-white/60 hover:text-white text-[10px] sm:text-xs tracking-[0.15em] uppercase transition-colors duration-300 pointer-events-auto"
            >
              View Live →
            </a>
          </div>
        </div>

        {/* Skip Navigation (Jump to 4th or 6th section) */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
          <a
            href="#projects"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-xl group shadow-lg"
            title="Skip up to Section 4"
          >
            <svg className="w-4 h-4 text-white/50 group-hover:text-white group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </a>
          <a
            href="#workflow"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-xl group shadow-lg"
            title="Skip down to Section 6"
          >
            <svg className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}