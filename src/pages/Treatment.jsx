import { useEffect } from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import ConditionCardsSection from "@/components/treatment/ConditionCardsSection";
import ConditionDetailsSection from "@/components/treatment/ConditionDetailsSection";
import { observeElements } from "@/lib/scrollAnimations";

export default function Treatment() {
  useEffect(() => {
    observeElements();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden min-h-[400px] md:min-h-[500px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%), url('https://media.base44.com/images/public/69cd58d9e084046ea93c855f/354bd1d0c_Physician_Trends_2021_Merritt_Hawkins2.png')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Our Treatments
            </h1>
            <p className="text-foreground text-lg font-body">
              Advanced non-surgical solutions for anorectal conditions.
            </p>
          </div>
        </div>
      </section>

      <ConditionCardsSection />
      <ConditionDetailsSection />

      <Footer />
    </div>
  );
}