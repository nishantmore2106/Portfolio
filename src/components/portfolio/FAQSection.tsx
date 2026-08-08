import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { useContactModal } from "@/context/ContactModalContext";

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

function FAQItem({ item, isOpen, onToggle, index }: { item: (typeof faqs)[0]; isOpen: boolean; onToggle: () => void; index: number }) {
  return (
    <FadeIn delay={index * 0.1} direction="up" className="bg-white rounded-[1.5rem] p-6 md:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] mb-4 transition-all duration-300">
      <button
        className="w-full flex items-center justify-between gap-4 text-left group"
        onClick={onToggle}
      >
        <span className="font-medium text-gray-900 text-lg md:text-xl pr-8" style={{ fontFamily: "'Inter', sans-serif" }}>
          {item.q}
        </span>
        <div className="flex-shrink-0 text-gray-900 text-2xl font-light w-6 h-6 flex items-center justify-center">
          {isOpen ? "−" : "+"}
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-500 text-sm md:text-base leading-relaxed pr-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            {item.a}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openModal } = useContactModal();

  return (
    <section id="faq" className="py-24 relative z-10 bg-gradient-to-b from-[#072974] to-[#eef1f8]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-8 items-start">
          
          {/* Left Side: Gradient Banner Card */}
          <FadeIn direction="right" className="bg-gradient-to-b from-[#6479f6] via-[#8fa3ff] to-[#f4f7fa] rounded-[2rem] p-10 md:p-14 flex flex-col justify-center items-center text-center min-h-[400px] lg:min-h-[500px] shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-2 text-white mb-6 font-medium text-sm md:text-base justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z"/>
              </svg>
              <span>FAQ Questions</span>
            </div>
            
            <h2 
              className="text-white font-semibold text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-12 tracking-tight text-center" 
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Got questions about<br /> working together?
            </h2>
            
            <div className="flex items-center gap-3 mt-auto justify-center">
              <button 
                onClick={() => openModal()}
                className="bg-[#111111] hover:bg-black text-white px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 shadow-xl"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Get In Touch
              </button>
              <button 
                onClick={() => openModal()}
                className="w-[56px] h-[56px] rounded-full bg-[#111111] hover:bg-black text-white flex justify-center items-center transition-transform hover:scale-105 shadow-xl"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </FadeIn>

          {/* Right Side: FAQ Cards */}
          <div className="flex flex-col">
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                index={i}
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
