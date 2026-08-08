import FadeIn from "@/components/ui/FadeIn";
import { useContactModal } from "@/context/ContactModalContext";

export default function ServicesSection() {
  const { openModal } = useContactModal();
  return (
    <section 
      id="about" 
      className="pt-16 pb-16 md:pt-24 md:pb-[40rem] lg:pb-[45rem] bg-[#f0f3f8] min-h-[110vh] md:min-h-[155vh] flex flex-col md:flex-row items-start relative overflow-hidden"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24 relative z-20">
        
        {/* Left Side: Tag */}
        <FadeIn direction="right" delay={0.1} className="flex items-center gap-2 text-gray-800 shrink-0 mt-3">
          {/* Blue Star Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
          </svg>
          <span className="font-semibold text-lg tracking-wide text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>About Me</span>
        </FadeIn>

        {/* Right Side: Content */}
        <div className="flex flex-col gap-10 max-w-4xl">
          {/* Headline Text */}
          <FadeIn direction="right" delay={0.2}>
            <h2 
              className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2.25rem] font-medium text-gray-900 leading-[1.3] tracking-tight" 
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              I create thoughtful digital experiences that connect strategy, usability, and visual clarity to build high-converting landing pages.
            </h2>
          </FadeIn>
          
          {/* CTA Buttons */}
          <FadeIn direction="right" delay={0.3}>
            <div className="flex items-center gap-3 mt-4 justify-center md:justify-start">
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
        </div>

      </div>

      {/* Portrait Image at Bottom Left */}
      <FadeIn direction="up" delay={0.2} className="relative md:absolute mt-12 md:mt-0 md:bottom-12 md:left-8 lg:left-24 w-full md:w-[50%] lg:w-[550px] max-w-[600px] z-0 pointer-events-none self-center md:self-auto">
        <img 
          src="/assets/image copy 25.png" 
          alt="Portrait" 
          className="w-[95%] mx-auto md:w-full h-auto object-contain object-bottom" 
        />
        {/* Bottom Fade to blend into background */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f0f3f8] via-[#f0f3f8]/80 to-transparent pointer-events-none" />
      </FadeIn>

      {/* Grid Cards at Bottom Right */}
      <div className="relative md:absolute mt-8 md:mt-0 md:bottom-16 md:right-8 lg:right-12 z-10 w-full px-6 md:px-0 md:max-w-[850px] grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Card 1 */}
        <FadeIn direction="up" delay={0.1} className="bg-white rounded-[1.5rem] p-8 flex justify-between items-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium text-base">Years Crafting</span>
            <span className="text-gray-500 font-medium text-base">Digital Products</span>
          </div>
          <span className="text-gray-900 font-black text-5xl" style={{ fontFamily: "'Maxine Sans Heavy', sans-serif" }}>3+</span>
        </FadeIn>

        {/* Card 2 */}
        <FadeIn direction="up" delay={0.2} className="bg-white rounded-[1.5rem] p-8 flex justify-between items-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium text-base">Successful</span>
            <span className="text-gray-500 font-medium text-base">Projects Delivered</span>
          </div>
          <span className="text-gray-900 font-black text-5xl" style={{ fontFamily: "'Maxine Sans Heavy', sans-serif" }}>20+</span>
        </FadeIn>

        {/* Card 3: Client Satisfaction */}
        <FadeIn direction="up" delay={0.3} className="bg-white rounded-[1.5rem] p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between h-[220px]">
          <div>
            <span className="text-gray-900 font-black text-4xl" style={{ fontFamily: "'Maxine Sans Heavy', sans-serif" }}>5+</span>
            <p className="text-gray-500 font-medium text-base mt-2">Happy Client<br />Partnerships</p>
          </div>
          <div className="flex items-center gap-2 mt-4 bg-gray-50 w-fit px-4 py-2 rounded-full border border-gray-100">
            <span className="text-yellow-400 text-xl leading-none">★</span>
            <span className="font-semibold text-gray-800 text-base">5.0</span>
          </div>
        </FadeIn>

        {/* Card 4: Skills Pills */}
        <FadeIn direction="up" delay={0.4} className="bg-white rounded-[1.5rem] p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between h-[220px] overflow-hidden relative">
          <h3 className="text-gray-900 font-bold text-xl leading-tight w-3/4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Strategic Thinking,<br />Clean Execution
          </h3>
          <div className="flex flex-col gap-2 mt-4">
            <div className="bg-gray-100 text-gray-600 text-sm font-semibold px-4 py-2 rounded-full w-fit">UI/UX Design</div>
            <div className="bg-gray-100 text-gray-600 text-sm font-semibold px-4 py-2 rounded-full w-fit">Landing Pages</div>
          </div>
          <div className="absolute -right-4 bottom-8 bg-gray-100 text-gray-600 text-sm font-semibold px-6 py-2 rounded-full -rotate-45 shadow-sm border border-white">
            AI Powered
          </div>
        </FadeIn>

        {/* Card 5: Available */}
        <FadeIn direction="up" delay={0.5} className="bg-white rounded-[1.5rem] p-8 flex justify-between items-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium text-base">Available For</span>
            <span className="text-gray-500 font-medium text-base">New Opportunities</span>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
          </div>
        </FadeIn>

        {/* Card 6: Design Quality */}
        <FadeIn direction="up" delay={0.6} className="bg-white rounded-[1.5rem] p-8 flex justify-between items-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium text-base">Pixel-Perfect</span>
            <span className="text-gray-500 font-medium text-base">Execution</span>
          </div>
          <span className="text-gray-900 font-black text-5xl" style={{ fontFamily: "'Maxine Sans Heavy', sans-serif" }}>100%</span>
        </FadeIn>

        {/* Card 7: Speed & Performance */}
        <FadeIn direction="up" delay={0.7} className="bg-white rounded-[1.5rem] p-8 flex justify-between items-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium text-base">Lightning Fast</span>
            <span className="text-gray-500 font-medium text-base">Performance</span>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
        </FadeIn>

        {/* Card 8: Code Quality */}
        <FadeIn direction="up" delay={0.8} className="bg-white rounded-[1.5rem] p-8 flex justify-between items-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium text-base">Clean & Scalable</span>
            <span className="text-gray-500 font-medium text-base">Architecture</span>
          </div>
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </FadeIn>
        
      </div>
    </section>
  );
}
