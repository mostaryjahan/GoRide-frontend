import CTASection from "@/components/modules/homepage/CTASection";
import DriverPartnership from "@/components/modules/homepage/DriverPartnership";
import HeroSection from "@/components/modules/homepage/HeroSection";
import HowItWorksSection from "@/components/modules/homepage/HowItWorksSection";
import ServiceHighlights from "@/components/modules/homepage/ServiceHighlights";
import ServicesSection from "@/components/modules/homepage/ServiceSection";
import StatsSection from "@/components/modules/homepage/StatsSection";
import TestimonialsSection from "@/components/modules/homepage/TestimonialsSection";

const Home = () => {

  return (
    <div>
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <ServicesSection />
      <ServiceHighlights />
      <DriverPartnership/>
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;