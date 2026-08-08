import FadeIn from "@/components/ui/FadeIn";

export default function CTASection() {
  return (
    <section className="relative w-full flex items-center justify-center bg-[#f3f6f9]">
      <FadeIn direction="up">
        <img 
          src="/assets/image copy 34.png" 
          alt="Banner Background" 
          className="w-full h-auto object-contain z-0"
        />
      </FadeIn>
      
    </section>
  );
}
