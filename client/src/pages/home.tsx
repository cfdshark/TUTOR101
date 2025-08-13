import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import SubjectsSection from "@/components/subjects-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <SubjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
