import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import LogoMarquee from "@/components/landing/LogoMarquee";
import Fleet from "@/components/landing/Fleet";
import HowItWorks from "@/components/landing/HowItWorks";
import LoyaltyRewards from "@/components/landing/LoyaltyRewards";
import WhyUs from "@/components/landing/WhyUs";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Fleet />
      <HowItWorks />
      <LoyaltyRewards />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
