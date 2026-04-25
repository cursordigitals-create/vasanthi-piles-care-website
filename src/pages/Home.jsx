import { useEffect } from "react";
import Header from "../components/home/Header";
import HeroSection from "../components/home/HeroSection";
import WelcomeSection from "../components/home/WelcomeSection";
import PatientTestimonials from "../components/home/PatientTestimonials";
import VideoTestimonialsSection from "../components/home/VideoTestimonialsSection";
import TreatmentsSection from "../components/home/TreatmentsSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/home/Footer";
import { observeElements } from "@/lib/scrollAnimations";

export default function Home() {
  useEffect(() => {
    observeElements();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <TreatmentsSection />
      <PatientTestimonials />
      <VideoTestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}