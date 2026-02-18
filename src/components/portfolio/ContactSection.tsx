import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch("https://formspree.io/f/xykdpwva", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  if (response.ok) {
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      service: "",
      message: "",
    });
  } else {
    alert("Something went wrong. Please try again.");
  }
};


  const inputClass =
    "w-full bg-transparent border border-border rounded-xl px-4 py-3.5 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors";

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Portrait card */}
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{
                height: "clamp(380px, 50vw, 560px)",
                background: "linear-gradient(135deg, #1a1a1a 0%, #252525 50%, #1a1a1a 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Portrait image */}
              <img
                src="/potrait (2).png"
                alt="Contact Portrait"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Accent glow */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 70%, rgba(208,255,113,0.08) 0%, transparent 70%)",
                }}
              />
              {/* Initials */}
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="text-center" style={{ fontFamily: "'Syne', sans-serif" }}>
                  <div
                    className="font-black"
                    style={{ fontSize: "6rem", color: "rgba(208,255,113,0.3)", letterSpacing: "-0.05em" }}
                  >
                    NM
                  </div>
                  <p className="text-muted-foreground text-sm tracking-widest uppercase mt-2">
                    Let's build together
                  </p>
                </div>
              </div>
            </div>

            {/* Accent bubble */}
            <div
              className="absolute flex items-center justify-center w-16 h-16 rounded-full font-bold"
              style={{
                backgroundColor: "#D0FF71",
                color: "#0f0f0f",
                top: "24px",
                right: "-8px",
                transform: "rotate(15deg)",
              }}
            >
              <div className="text-center leading-tight">
                <div className="text-lg">🤝</div>
                <div className="text-xs font-bold">Hi!</div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#D0FF71" }}>
              Contact
            </p>
            <h2
              className="text-foreground font-black uppercase leading-none mb-8"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                letterSpacing: "-0.03em",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              LET'S WORK
              <br />
              TOGETHER
            </h2>

            {submitted ? (
              <div
                className="p-8 rounded-2xl text-center"
                style={{ backgroundColor: "rgba(208,255,113,0.08)", border: "1px solid #D0FF71" }}
              >
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-bold text-foreground mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  className={inputClass}
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className={inputClass}
                  type="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <select
                  className={inputClass}
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  style={{ appearance: "none", 
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                    textDecorationColor: "rgba(208,255,113,0.5)",
                    
                  }}
                >
                  <option value="" disabled>
                    Service Needed
                  </option>
                  <option>AI Landing Page Architecture</option>
                  <option>Conversion Design</option>
                  <option>Web Design</option>
                  <option>Planning &amp; Strategy</option>
                  <option>Other</option>
                </select>
                <textarea
                  className={inputClass}
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold uppercase tracking-wide text-sm transition-opacity hover:opacity-85"
                  style={{ backgroundColor: "#D0FF71", color: "#0f0f0f" }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
