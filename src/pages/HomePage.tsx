import CTASection from "@/components/modules/homepage/CTASection";
import FAQSection from "@/components/modules/homepage/Faq";
import HeroSection from "@/components/modules/homepage/HeroSection";
import HowItWorksSection from "@/components/modules/homepage/HowItWorksSection";
// import LiveTrackingDemo from "@/components/modules/homepage/Livetracking";
import PromoSection from "@/components/modules/homepage/Promo";
import SafetyFeatures from "@/components/modules/homepage/SafetySection";
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
      <PromoSection />
      <SafetyFeatures />
      {/* <LiveTrackingDemo /> */}
      <CTASection />
      <TestimonialsSection />
      <FAQSection/>
    </div>
  );
};

export default Home;
