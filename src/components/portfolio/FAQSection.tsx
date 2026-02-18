import { useState } from "react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "I specialize in AI landing page design & architecture, conversion-focused web design, and digital system planning. From strategy sessions to pixel-perfect builds, I handle the full design lifecycle.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most landing pages are delivered within 7–14 business days depending on scope. Full website projects typically take 3–6 weeks. I'll provide a clear timeline before we start.",
  },
  {
    q: "How many revisions are included?",
    a: "All projects include 2 rounds of revisions after the initial delivery. Additional revisions can be arranged at an hourly rate. My goal is to get it right the first time.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes — I offer monthly maintenance and optimization packages for clients who want continued improvements based on real performance data.",
  },
  {
    q: "How do I get started?",
    a: "Simply fill out the contact form below or reach out via email. I'll schedule a free 30-minute strategy call to understand your goals and provide a custom proposal.",
  },
];

function FAQItem({ item, isOpen, onToggle }: { item: (typeof faqs)[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid hsl(var(--border))" }}>
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        onClick={onToggle}
        data-cursor-hover
      >
        <span
          className="font-semibold text-foreground group-hover:text-accent transition-colors text-sm"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {item.q}
        </span>
        <div className={`service-arrow flex-shrink-0 ${isOpen ? "open" : ""}`} />
      </button>
      <div className={`service-accordion-content ${isOpen ? "open" : ""}`}>
        <p className="pb-5 text-muted-foreground text-sm leading-relaxed">{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#D0FF71" }}>
              FAQ
            </p>
            <h2
              className="text-foreground font-black uppercase leading-none mb-6"
              style={{
                fontSize: "clamp(1rem, 4vw, 3.5rem)",
                letterSpacing: "-0.03em",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              FREQUENTLY
              <br />
              ASKED
              <br />
              QUESTIONS
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              Everything you need to know before we start working together. Still
              have questions? Send me a message.
            </p>
          </div>

          {/* Right — Accordion */}
          <div style={{ borderTop: "1px solid hsl(var(--border))" }}>
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
