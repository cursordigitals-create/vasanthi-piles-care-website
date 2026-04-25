import { Heart, Leaf, Shield, Zap } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Patient-Focused Care",
    description: "We believe every patient needs proper attention and comfortable treatment. Our clinic provides a friendly environment where patients can discuss their problems openly and receive the right care.",
  },
  {
    icon: Leaf,
    title: "Advanced Ayurvedic Methods",
    description: "We use trusted Ayurvedic techniques that are designed to treat the root cause of the problem. Our treatment methods are simple, effective, and suitable for different conditions.",
  },
  {
    icon: Shield,
    title: "Clean and Comfortable Environment",
    description: "Our clinic maintains a clean, safe, and hygienic environment for every patient. We focus on making the treatment experience smooth and comfortable.",
  },
  {
    icon: Zap,
    title: "Dedicated to Better Health",
    description: "Our goal is to help patients feel better, recover faster, and return to their normal daily routine with confidence.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2 font-poppins">
            Our Commitment
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            About Vasanthi Piles Care
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-3" />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-poppins font-bold text-lg text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}