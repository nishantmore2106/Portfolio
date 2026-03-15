import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Elevate Studio",
    tag: "AI LANDING PAGE",
    description: "Premium design studio landing page.",
    image: "/Elevate.png",
    link: "https://id-preview--125e7b6a-9371-4626-bd0e-7fb8aa9dec80.lovable.app/",
    accent: "#D0FF71"
  },
  {
    title: "InsightIQ",
    tag: "DASHBOARD",
    description: "Analytics platform.",
    image: "/insgihtIQ.png",
    link: "https://id-preview--a4bd5a3d-239e-4598-9010-e676decef9a9.lovable.app/dashboard",
    accent: "#D0FF71"
  },
  {
    title: "FlowSync AI",
    tag: "AI TOOL",
    description: "Workflow automation system.",
    image: "/Flowsync.png",
    link: "https://id-preview--7b2d079a-40b1-4903-9522-7f7ac5769d3d.lovable.app/",
    accent: "#D0FF71"
  },
  {
    title: "Loom AI",
    tag: "AI PLATFORM",
    description: "Documentation platform.",
    image: "/LOOM.AI.png",
    link: "https://id-preview--15a96c45-aed9-4ed3-b2c9-dcfe251de89c.lovable.app/",
    accent: "#D0FF71"
  },
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;
        
        const rect = container.getBoundingClientRect();
        const start = container.offsetTop;
        const total = container.offsetHeight;
        const viewHeight = window.innerHeight;
        
        // Progress within this section (0 to 1)
        const progress = Math.max(0, Math.min(1, -rect.top / (total - viewHeight)));
        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const projectWidth = 100; // 100vw
  const totalWidth = projects.length * projectWidth;
  const horizontalX = scrollProgress * (totalWidth - 100);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-screen overflow-hidden flex items-center">
        {/* Progress Guide Line */}
        <div className="absolute bottom-12 left-12 right-12 h-[1px] bg-white/10 z-20">
          <div 
            className="h-full bg-[#D0FF71] transition-all duration-100 ease-out" 
            style={{ width: `${scrollProgress * 100}%` }} 
          />
        </div>

        {/* The Track */}
        <div 
          ref={railRef}
          className="flex flex-nowrap h-full will-change-transform"
          style={{ transform: `translateX(${-horizontalX}vw)` }}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="w-screen h-screen flex-shrink-0 flex items-center justify-center p-6 md:p-24 relative overflow-hidden"
            >
              {/* Parallax Background Title */}
              <div 
                className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none select-none z-0"
                style={{
                  transform: `translateX(${(scrollProgress * 200) - (index * 50)}px)`,
                  transition: "transform 0.1s linear"
                }}
              >
                <h2 className="text-[30vw] font-black uppercase whitespace-nowrap font-syne text-transparent" style={{ WebkitTextStroke: "1px white" }}>
                  {project.title.split(" ")[0]}
                </h2>
              </div>

              {/* Project Card */}
              <div 
                className="relative z-10 w-full max-w-6xl aspect-video rounded-[2.5rem] overflow-hidden group shadow-2xl"
                style={{
                  perspective: "2000px",
                  background: "#121212",
                  border: "1px solid rgba(255,255,255,0.08)"
                }}
              >
                {/* 3D Layers */}
                <div 
                  className="w-full h-full relative transition-transform duration-500 ease-out preserve-3d group-hover:rotate-x-2 group-hover:rotate-y-[-2deg]"
                >
                  {/* Base Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Glass Info Panel */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 flex flex-col items-start gap-4">
                    <span className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest bg-[#D0FF71] text-black">
                      {project.tag}
                    </span>
                    
                    <h3 className="text-4xl md:text-7xl font-black uppercase font-syne text-white leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/60 max-w-md text-lg leading-relaxed">
                      {project.description}
                    </p>
                    
                    <button
                      onClick={() => window.open(project.link, "_blank")}
                      className="mt-4 px-8 py-3.5 rounded-full bg-white text-black font-bold uppercase text-xs tracking-wider hover:bg-[#D0FF71] transition-colors flex items-center gap-2 group/btn"
                    >
                      Explore Project
                      <span className="inline-block transition-transform group-hover/btn:translate-x-1">→</span>
                    </button>
                  </div>

                  {/* Aesthetic Glow */}
                  <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[#D0FF71]/10 blur-[120px] rounded-full pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
