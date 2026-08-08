export default function MarqueeRibbon() {
  const items = [
    "3+ Years Experience",
    "5+ Clients",
    "20+ Projects",
    "AI Powered",
    "100% Responsive",
    "Fast Delivery"
  ];

  return (
    <section className="w-full bg-[#000000] py-6 border-y border-white/5 overflow-hidden relative z-30 flex items-center">
      <div className="flex animate-marquee-left whitespace-nowrap">
        {/* Repeat the items multiple times to ensure a seamless infinite loop across large screens */}
        {[...Array(6)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex items-center">
            {items.map((item, index) => (
              <div key={index} className="flex items-center">
                <span 
                  className="text-white text-sm md:text-lg font-bold uppercase tracking-[0.15em] px-8 md:px-12 opacity-80" 
                  style={{ fontFamily: "'Maxine Sans Heavy', sans-serif" }}
                >
                  {item}
                </span>
                <span className="text-white/30 text-xl mx-2">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
