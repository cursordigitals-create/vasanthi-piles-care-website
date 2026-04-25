import { AlertIcon, CheckIcon, ClockIcon, CalendarIcon, ZapIcon, ChevronRightIcon } from "@/components/icons/CustomIcons";

const conditionDetails = [
  {
    id: "piles",
    name: "Piles (Hemorrhoids)",
    description: "Piles are swollen veins near the rectal area that can cause pain, bleeding, swelling, itching, and discomfort during bowel movements. Many people may also feel pain or irritation while sitting for a long time. Early treatment can help reduce pain and avoid further complications.",
    image: "https://images.unsplash.com/photo-1631217314830-6557c2be4bd2?w=800&h=600&fit=crop",
    problems: [
      "Pain during bowel movement",
      "Bleeding",
      "Swelling",
      "Itching",
      "Discomfort while sitting",
    ],
    treatment: "Kshar Karma Treatment",
    treatmentDesc: "A time-tested ayurvedic procedure using medicated paste to treat internal and external hemorrhoids with minimal discomfort and faster recovery.",
    procedure: "Approximately 5 minutes per session",
    recovery: "Usually 10 to 20 days",
  },
  {
    id: "fissure",
    name: "Anal Fissure",
    description: "Fissure is a small cut or tear near the anal area that can cause severe pain, burning sensation, and bleeding while passing stool. This condition can make daily activities uncomfortable if not treated properly.",
    image: "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/35b4de8cc_Screenshot2026-04-04at72410PM.png",
    problems: [
      "Sharp pain",
      "Burning sensation",
      "Bleeding",
      "Irritation",
      "Difficulty while passing stool",
    ],
    treatment: "Kshar Karma Therapy",
    treatmentDesc: "A specialized ayurvedic treatment combining medicated applications and sphincter relaxation techniques to heal the fissure without conventional surgery.",
    procedure: "Approximately 5 minutes per session",
    recovery: "Usually 10 to 20 days",
  },
  {
    id: "fistula",
    name: "Anal Fistula",
    description: "Fistula is a small infected tunnel near the anal area that can cause pain, swelling, pus discharge, and repeated infection. If left untreated, it may lead to more discomfort and complications over time.",
    image: "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/31cce217c_high-angle-doctor-explaining-anatomy.jpg",
    problems: [
      "Pain",
      "Swelling",
      "Pus discharge",
      "Irritation",
      "Repeated infection",
    ],
    treatment: "Kshar Sutra Thread Technique",
    treatmentDesc: "An internationally recognized ayurvedic procedure with high success rates, using a specialized medicated thread to eliminate the fistula tract with minimal recurrence.",
    procedure: "Approximately 5 minutes per session",
    recovery: "Usually 10 to 20 days",
  },
  {
    id: "pilonidal-sinus",
    name: "Pilonidal Sinus",
    description: "Pilonidal Sinus is an infection near the tailbone area that can cause pain, swelling, redness, pus discharge, and discomfort while sitting or walking. Early treatment is important to avoid further infection and pain.",
    image: "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/d82ebc3e8_images6.jpeg",
    problems: [
      "Pain near tailbone",
      "Swelling",
      "Redness",
      "Pus discharge",
      "Difficulty while sitting",
    ],
    treatment: "Kshar Sutra Sinus Management",
    treatmentDesc: "A minimally invasive ayurvedic approach combining specialized thread technique with proper wound management for complete sinus elimination with low recurrence.",
    procedure: "Approximately 5 minutes per session",
    recovery: "Usually 10 to 20 days",
  },
];

export default function ConditionDetailsSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-muted/10 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-16">
          {conditionDetails.map((condition, idx) => (
            <div
              key={condition.id}
              id={condition.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-border"
            >
              {/* Hero Section with Image */}
              <div className="relative w-full aspect-video overflow-hidden bg-muted" style={{background: 'linear-gradient(110deg, #e2e8f0 30%, #f1f5f9 50%, #e2e8f0 70%)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite'}}>
                <img
                  src={condition.id === 'piles' ? 'https://media.base44.com/images/public/69cd58d9e084046ea93c855f/7d9a4af50_conceptual-3d-illustration-human-hernia.jpg' : condition.id === 'fissure' ? 'https://media.base44.com/images/public/69cd58d9e084046ea93c855f/35b4de8cc_Screenshot2026-04-04at72410PM.png' : condition.id === 'fistula' ? 'https://media.base44.com/images/public/69cd58d9e084046ea93c855f/ef63a8a65_Untitleddesign22.png' : 'https://media.base44.com/images/public/69cd58d9e084046ea93c855f/d82ebc3e8_images6.jpeg'}
                  alt={`${condition.name} - condition illustration at Vasanthi Piles Care`}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  style={{opacity: 0, transition: 'opacity 0.4s'}}
                  onLoad={(e) => e.target.style.opacity = 1}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent hover:from-black/30 hover:via-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-12 text-white">
                  <h2 className="font-heading text-2xl md:text-5xl font-bold mb-2 md:mb-3">
                    {condition.name}
                  </h2>
                  <p className="text-white/90 text-sm md:text-lg leading-relaxed max-w-2xl font-body">
                    {condition.description}
                  </p>
                </div>
              </div>

              {/* Detailed Content */}
              <div className="p-5 md:p-12">
                {/* What are the problems? */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-8">
                    <AlertIcon className="w-6 h-6 text-primary" />
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                      Common Problems & Symptoms
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {condition.problems.map((problem, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-xl p-5 hover:shadow-md transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <AlertIcon className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span className="text-red-900 font-semibold text-sm font-poppins">
                            {problem}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Treatment Method */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-8">
                    <ZapIcon className="w-6 h-6 text-accent" />
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                      Our Treatment Approach
                    </h3>
                  </div>
                  <div className="bg-gradient-to-br from-accent/10 to-amber-100/50 rounded-2xl p-8 border border-accent/30">
                    <h4 className="font-heading text-2xl font-bold text-foreground mb-3">
                      {condition.treatment}
                    </h4>
                    <p className="text-muted-foreground text-base leading-relaxed font-body mb-6 max-w-3xl">
                      {condition.treatmentDesc}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 border border-accent/20">
                        <div className="flex items-center gap-3 mb-3">
                          <ClockIcon className="w-6 h-6 text-accent" />
                          <h5 className="font-poppins font-bold text-foreground text-lg">Procedure Time</h5>
                        </div>
                        <p className="text-accent font-semibold text-base">{condition.procedure}</p>
                      </div>
                      <div className="bg-white rounded-xl p-6 border border-accent/20">
                        <div className="flex items-center gap-3 mb-3">
                          <CalendarIcon className="w-6 h-6 text-accent" />
                          <h5 className="font-poppins font-bold text-foreground text-lg">Recovery Time</h5>
                        </div>
                        <p className="text-accent font-semibold text-base">{condition.recovery}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-12 bg-gradient-to-br from-green-50 to-green-100/30 rounded-2xl p-8 border border-green-200">
                  <h3 className="font-heading text-2xl font-bold text-green-900 mb-6">Why Our Treatment Works</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-green-900 font-body">Non-surgical and minimally invasive approach</p>
                    </div>
                    <div className="flex items-start gap-3">
                       <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                       <p className="text-green-900 font-body">Faster recovery with minimal downtime</p>
                    </div>
                    <div className="flex items-start gap-3">
                       <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                       <p className="text-green-900 font-body">Time-tested ayurvedic methodology</p>
                    </div>
                    <div className="flex items-start gap-3">
                       <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                       <p className="text-green-900 font-body">Low recurrence rates and long-term results</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <a
                    href="#contact"
                    className="inline-block bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold text-base px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-xl font-poppins"
                  >
                    Book Your Appointment Now
                  </a>
                  <p className="text-muted-foreground text-sm font-body">Safe, effective, and quick recovery</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}