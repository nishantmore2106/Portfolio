const testimonials = [
  {
    stars: 5,
    quote:
      "Nishant completely transformed our landing page. The conversion rate jumped 47% within the first month. Absolute genius at AI-driven design.",
    name: "Alex Chen",
    role: "Founder, TechFlow AI",
    initial: "AC",
  },
  {
    stars: 4,
    quote:
      "Working with Nishant felt effortless. He understood our brand immediately and delivered a page that exceeded every expectation.",
    name: "Sarah Mitchell",
    role: "CMO, Elevate Studio",
    initial: "SM",
  },
  {
    stars: 3,
    quote:
      "The attention to detail is incredible. Every section was designed with purpose — our bounce rate dropped significantly after launch.",
    name: "Marcus Williams",
    role: "CEO, InsightIQ",
    initial: "MW",
  },
  {
    stars: 5,
    quote:
      "Fast, professional, and incredibly talented. Nishant delivered a premium portfolio site that perfectly represents our agency.",
    name: "Priya Sharma",
    role: "Creative Director, Pixel Labs",
    initial: "PS",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#D0FF71", fontSize: "1rem" }}>★</span>
      ))}
    </div>
  );
}

function Avatar({ initial }: { initial: string }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
      style={{ backgroundColor: "rgba(208,255,113,0.15)", color: "#D0FF71" }}
    >
      {initial}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#D0FF71" }}>
            Testimonials
          </p>
          <h2
            className="text-foreground font-black uppercase leading-none"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.03em",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            WHAT MY CLIENTS SAY
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {/* Stat card — white */}
          <div
            className="bento-card flex flex-col justify-between"
            style={{ background: "#ffffff", color: "#0f0f0f" }}
          >
            <div>
              <div className="text-xs uppercase tracking-widest mb-6 opacity-60">
                Happy Clients
              </div>
              <div
                className="font-black leading-none mb-2"
                style={{ fontSize: "4.5rem", letterSpacing: "-0.04em", fontFamily: "'Syne', sans-serif" }}
              >
                6+
              </div>
              <p className="text-sm opacity-70">clients worldwide with 98% satisfaction rate</p>
            </div>
            <div className="mt-6 text-xs uppercase tracking-widest opacity-50">
              Since 2022
            </div>
          </div>

          {/* Stat card — accent */}
          <div
            className="bento-card flex flex-col justify-between"
            style={{ backgroundColor: "#D0FF71", color: "#0f0f0f" }}
          >
            <div>
              <div className="text-xs uppercase tracking-widest mb-6 opacity-60">
                Avg. Conversion Lift
              </div>
              <div
                className="font-black leading-none mb-2"
                style={{ fontSize: "4.5rem", letterSpacing: "-0.04em", fontFamily: "'Syne', sans-serif" }}
              >
                +40%
              </div>
              <p className="text-sm opacity-70">average increase in conversion for clients</p>
            </div>
            <div className="mt-6 text-xs uppercase tracking-widest opacity-50">
              Measured Results
            </div>
          </div>

          {/* First testimonial */}
          <div className="bento-card">
            <Stars count={testimonials[0].stars} />
            <p className="text-foreground text-sm leading-relaxed mb-6">
              "{testimonials[0].quote}"
            </p>
            <div className="flex items-center gap-3">
              <Avatar initial={testimonials[0].initial} />
              <div>
                <p className="text-foreground text-sm font-semibold">{testimonials[0].name}</p>
                <p className="text-muted-foreground text-xs">{testimonials[0].role}</p>
              </div>
            </div>
          </div>

          {/* Remaining testimonials */}
          {testimonials.slice(1).map((t, i) => (
            <div key={i} className="bento-card">
              <Stars count={t.stars} />
              <p className="text-foreground text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <Avatar initial={t.initial} />
                <div>
                  <p className="text-foreground text-sm font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
