const posts = [
  {
    tag: "LANDING PAGE ARCHITECTURE",
    date: "Jan 15, 2025",
    title: "The Hidden Structural Mistake Killing AI Startup Conversions",
    description:
      "Your AI product isn’t the problem — your landing page architecture is. This breakdown explains how positioning, hierarchy, and conversion sequencing directly impact signups.",
    gradient: "linear-gradient(135deg, #1a1f2e 0%, #0f1420 100%)",
  },
  {
    tag: "SaaS CONVERSION",
    date: "Dec 28, 2024",
    title: "Engineering Clarity: The Exact Structure I Use for High-Converting SaaS Landing Systems",
    description:
      "Conversion doesn’t happen by accident. It’s engineered through messaging clarity, friction control, visual rhythm, and performance optimization.",
    gradient: "linear-gradient(135deg, #1a2820 0%, #101f14 100%)",
  },
];


export default function BlogSection() {
  return (
    <section className="py-24 relative z-10 " id="blogs">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#D0FF71" }}>
              Blog
            </p>
            <h2
              className="text-foreground font-black uppercase leading-none"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "-0.03em",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              DESIGN INSIGHTS
              <br />
              &amp; IDEAS
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs leading-relaxed md:text-right">
            Thoughts on conversion design, AI tools, and building digital systems that perform.
          </p>
        </div>

        {/* Blog cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <a
              key={i}
              href="#"
              className="hover-lift block rounded-3xl overflow-hidden"
              style={{
                background: post.gradient,
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              data-cursor-hover
            >
              {/* Image placeholder */}
              <div
                className="w-full relative overflow-hidden"
                style={{ height: "220px" }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: post.gradient }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="font-black uppercase text-center"
                    style={{
                      color: "rgba(208,255,113,0.15)",
                      fontSize: "clamp(2rem, 6vw, 4rem)",
                      letterSpacing: "-0.04em",
                      fontFamily: "'Syne', sans-serif",
                    }}
                  >
                    {post.tag}
                  </div>
                </div>
                {/* Accent tag */}
                <div className="absolute top-5 left-5">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: "#D0FF71", color: "#0f0f0f" }}
                  >
                    {post.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                  {post.date}
                </p>
                <h3
                  className="text-foreground font-bold mb-3 leading-snug"
                  style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.15rem" }}
                >
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-5 flex items-center gap-2" style={{ color: "#D0FF71" }}>
                  <span className="text-sm font-medium">Read Article</span>
                  <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
