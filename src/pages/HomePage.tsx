import CTASection from "@/components/modules/homepage/CTASection";
import HeroSection from "@/components/modules/homepage/HeroSection";
import HowItWorksSection from "@/components/modules/homepage/HowItWorksSection";
import ServiceHighlights from "@/components/modules/homepage/ServiceHighlights";
import StatsSection from "@/components/modules/homepage/StatsSection";
import TestimonialsSection from "@/components/modules/homepage/TestimonialsSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <ServiceHighlights />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;
