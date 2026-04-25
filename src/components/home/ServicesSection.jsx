import { Activity, Heart, Zap, Shield, Stethoscope, TrendingUp } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Activity,
      title: "Non-Surgical Treatment",
      description: "Advanced techniques without invasive procedures for faster recovery."
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Patient-centered approach focusing on comfort and dignity."
    },
    {
      icon: Zap,
      title: "Latest Technology",
      description: "State-of-the-art equipment for precise and effective treatments."
    },
    {
      icon: Shield,
      title: "Safe & Effective",
      description: "Proven methods with minimal side effects and high success rates."
    },
    {
      icon: Stethoscope,
      title: "Expert Consultation",
      description: "Thorough diagnosis and personalized treatment plans."
    },
    {
      icon: TrendingUp,
      title: "Fast Recovery",
      description: "Minimal downtime allowing you to return to normal activities quickly."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed font-body">
            We provide comprehensive anorectal care with modern treatment options designed for your comfort and quick recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}