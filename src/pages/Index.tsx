import CustomCursor from "@/components/portfolio/CustomCursor";
import Header from "@/components/portfolio/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import ServicesSection from "@/components/portfolio/ServicesSection";

import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CoreServicesSection from "@/components/portfolio/CoreServicesSection";

import FAQSection from "@/components/portfolio/FAQSection";
import CTASection from "@/components/portfolio/CTASection";
import FinalImageSection from "@/components/portfolio/FinalImageSection";

import Footer from "@/components/portfolio/Footer";
import PricingSection from "@/components/portfolio/PricingSection"; 
import MarqueeRibbon from "@/components/portfolio/MarqueeRibbon";
// ScrollingPortrait removed — replaced by bubble reveal hero
import GlobalSpotlight from "@/components/portfolio/GlobalSpotlight";
import VerticalProgress from "@/components/portfolio/VerticalProgress";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <GlobalSpotlight />
      <VerticalProgress />

      <Header />
      <main>
        <HeroSection />
        <MarqueeRibbon />
        <div className="section-divider" />
        <ServicesSection />
        
        <div className="relative">
          {/* Continuous background image across the end of Projects and all of Core Services */}
          <img 
            src="/assets/image copy 26.png" 
            alt="" 
            className="absolute bottom-0 left-0 w-full z-0 pointer-events-none object-cover object-top" 
            style={{ height: "2200px", maxHeight: "100%" }} 
          />
          
          <div className="relative z-10">
            <ProjectsSection />
            <CoreServicesSection />
          </div>

          {/* Blur & Color Blend into the Pricing Section */}
          <div className="absolute bottom-[-1px] left-0 w-full h-48 pointer-events-none z-20 bg-gradient-to-b from-transparent to-[#072974] backdrop-blur-md [mask-image:linear-gradient(to_bottom,transparent,black)]" />
        </div>

        <PricingSection />

        <FAQSection />
        <CTASection />
        <FinalImageSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
