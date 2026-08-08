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
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="pb-24 md:pb-32 relative overflow-hidden"
    >
      {/* Solid background fading out at the bottom to reveal continuous background */}
      <div className="absolute inset-0 bg-[#f0f3f8] z-0 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black calc(100% - 200px), transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black calc(100% - 200px), transparent 100%)' }} />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          {/* My Portfolio Badge */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
            </svg>
            <span className="text-gray-700 font-semibold text-base" style={{ fontFamily: "'Inter', sans-serif" }}>My Portfolio</span>
          </div>

          {/* /SELECTED WORK title */}
          <h2
            className="text-gray-900 font-black text-3xl md:text-5xl tracking-tight relative z-10 text-center"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Projects That Delivered<br />Real Impact
          </h2>
        </div>

        {/* Filter bar */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div className="flex items-center gap-6">
            <button className="text-gray-900 font-semibold text-sm border-b-2 border-gray-900 pb-0.5">All</button>
            <button className="text-gray-400 font-medium text-sm hover:text-gray-700 transition-colors">Real Project</button>
            <button className="text-gray-400 font-medium text-sm hover:text-gray-700 transition-colors">Exploration</button>
          </div>
          <a
            href="#projects"
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors group"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            View All Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

        {/* 2-column grid of 10 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-white rounded-[1.5rem] overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.14)] transition-shadow duration-300"
            >
              {/* Live iframe preview */}
              <div className="relative w-full overflow-hidden bg-gray-100" style={{ height: "300px" }}>
                {/* Browser-style top bar */}
                <div className="absolute top-0 left-0 right-0 z-10 bg-white/90 backdrop-blur-sm flex items-center gap-2 px-4 py-2.5 border-b border-gray-100">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-400 font-medium truncate">
                    {project.url.replace("https://", "")}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-700 transition-colors shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>

              {/* iframe wrapper with scale trick for desktop preview */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ top: "36px", height: "calc(100% - 36px)" }}
              >
                <iframe
                  src={project.url}
                  title={project.title}
                  className="border-0 absolute top-0 left-0"
                  style={{
                    width: "300%",
                    height: "300%",
                    transform: "scale(0.333333)",
                    transformOrigin: "top left",
                    pointerEvents: "none",
                  }}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>

                {/* Clickable overlay to open project */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/20 backdrop-blur-[1px]"
                  style={{ top: "36px" }}
                >
                  <div className="bg-white text-gray-900 font-semibold text-sm px-5 py-3 rounded-full shadow-xl flex items-center gap-2 -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                    View Live Site
                  </div>
                </a>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-5">
                <h3
                  className="text-gray-900 font-semibold text-lg mb-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-gray-100 text-gray-500 text-xs font-semibold px-4 py-1.5 rounded-full">
                    {project.category}
                  </span>
                  <span className="bg-gray-100 text-gray-500 text-xs font-semibold px-4 py-1.5 rounded-full">
                    Nishant More
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
