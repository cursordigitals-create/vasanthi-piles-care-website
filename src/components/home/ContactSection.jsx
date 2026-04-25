import { Phone, MapPin, Mail, Clock } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "PHONE",
    lines: ["082702 06699"],
  },
  {
    icon: MapPin,
    title: "LOCATION",
    lines: ["Tiresha Complex, Barma Bazar,", "30/7, Muthupattinam, Karaikudi,", "Tamil Nadu 630001"],
  },
  {
    icon: Mail,
    title: "EMAIL",
    lines: ["vasanthipiles@gmail.com"],
  },
  {
    icon: Clock,
    title: "WORKING HOURS",
    lines: ["Mon–Sat: 9am–1pm, 4:30–8pm", "Sunday: 9am–1pm"],
  },
];

export default function ContactSection() {
  return (
    <section className="py-8 md:py-12 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2 font-poppins">
            Get in Touch
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Contact
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactCards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-poppins font-bold text-sm text-foreground mb-2">
                {card.title}
              </h3>
              {card.lines.map((line, j) => (
                card.title === 'PHONE' ? (
                  <a key={j} href={`tel:${line.replace(/\s/g, '')}`} className="text-muted-foreground text-xs font-body hover:text-primary transition-colors block">{line}</a>
                ) : card.title === 'EMAIL' ? (
                  <a key={j} href={`mailto:${line}`} className="text-muted-foreground text-xs font-body hover:text-primary transition-colors block">{line}</a>
                ) : (
                  <p key={j} className="text-muted-foreground text-xs font-body">{line}</p>
                )
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}