import { CheckIcon } from "@/components/icons/CustomIcons";

const treatments = [
  {
    id: 1,
    name: "Kshar Karma",
    subtitle: "For Piles & Fissure",
    tag: "Hemorrhoids & Anal Fissure",
    color: "bg-primary",
    image: "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/7d9a4af50_conceptual-3d-illustration-human-hernia.jpg",
    about: "Kshar Karma is a well-known Ayurvedic treatment mainly used for piles and fissure. It is a safe, simple, and non-surgical procedure that helps reduce pain, swelling, bleeding, burning sensation, and discomfort in the affected area. This treatment is suitable for patients who want effective relief without surgery.",
    howItWorks: "Kshar Karma works by using a medicated Ayurvedic application on the affected area. It helps reduce inflammation, control bleeding, and support faster healing. The treatment is designed to provide relief with minimal discomfort and allows patients to continue their daily activities normally.",
    benefits: [
      "No surgery required",
      "No bleeding",
      "No need for bed rest",
      "Minimal pain and discomfort",
      "Faster recovery",
      "No risk of recurrence",
      "Safe and effective treatment",
    ],
    procedure: [
      "The affected area is examined by the doctor",
      "The area is cleaned properly before treatment",
      "A medicated Ayurvedic application is applied carefully to the affected area",
      "The medicine helps reduce pain, swelling, bleeding, and burning sensation",
      "The procedure is simple and causes minimal discomfort",
      "Patients can continue their normal daily activities during the treatment period",
    ],
    duration: "Daily 5 minutes — 10 to 20 days",
  },
  {
    id: 2,
    name: "Kshar Sutra",
    subtitle: "For Fistula",
    tag: "Anal Fistula",
    color: "bg-accent",
    image: "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/ef63a8a65_Untitleddesign22.png",
    about: "Kshar Sutra is an Ayurvedic treatment mainly used for fistula. It is a non-surgical procedure that helps treat the infected tract safely and effectively. This treatment helps reduce pain, swelling, infection, pus discharge, and repeated discomfort in the affected area.",
    howItWorks: "A medicated Ayurvedic thread is used during the treatment to gradually clean the infected tract and support healing from inside. This method is known for providing better results without surgery and helps lower the chances of the problem coming back again.",
    benefits: [
      "Non-surgical treatment",
      "Helps control infection",
      "Reduces pus discharge",
      "Minimal pain during treatment",
      "No need for bed rest",
      "Supports better healing",
      "Low chance of recurrence",
      "Safe and reliable procedure",
    ],
    procedure: [
      "The fistula area is examined carefully",
      "The infected area is cleaned before treatment",
      "A medicated Kshar Sutra thread is placed in the affected tract",
      "The thread helps remove infection gradually",
      "Pain, swelling, and pus discharge are reduced over time",
      "The treatment is simple and causes less discomfort",
      "Patients can continue their regular activities during the treatment period",
    ],
    duration: "Daily 5 minutes — 10 to 20 days",
  },
];

export default function TreatmentsSection() {
  return (
    <section id="treatments" className="py-12 md:py-20" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-14">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2 font-poppins">
            Expert Care
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Our Primary Procedure
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-3" />
        </div>

        {/* Treatment Sections */}
        <div className="space-y-16">
          {treatments.map((treatment, idx) => (
            <div
              key={treatment.id}
              className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0 rounded-3xl overflow-hidden shadow-xl border border-primary/10`}
            >
              {/* Image */}
              <div className="lg:w-5/12 min-h-[300px] relative">
                <img
                 src={treatment.image}
                 alt={`${treatment.name} - ${treatment.subtitle} treatment at Vasanthi Piles Care`}
                 className="w-full h-full object-cover"
                 style={{ minHeight: "320px" }}
                />
                {/* Tag overlay */}
                <div className={`absolute top-5 left-5 ${treatment.color} text-white text-xs font-semibold px-4 py-1.5 rounded-full font-poppins shadow`}>
                  {treatment.tag}
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-7/12 bg-white p-8 md:p-10 flex flex-col">
                {/* Header */}
                <div className="mb-5">
                  <h3 className="font-heading text-3xl font-bold text-primary leading-tight">
                    {treatment.name}
                  </h3>
                  <p className="text-accent font-semibold text-sm mt-1 font-poppins">{treatment.subtitle}</p>
                </div>

                {/* About */}
                <div className="mb-5">
                  <h4 className="font-poppins font-bold text-sm text-foreground mb-2 uppercase tracking-wide">About the Treatment</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">{treatment.about}</p>
                </div>

                {/* How It Works */}
                <div className="mb-5">
                  <h4 className="font-poppins font-bold text-sm text-foreground mb-2 uppercase tracking-wide">{treatment.id === 1 ? "How It Helps" : "How It Works"}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">{treatment.howItWorks}</p>
                </div>

                {/* Benefits */}
                <div className="mb-5">
                  <h4 className="font-poppins font-bold text-sm text-foreground mb-3 uppercase tracking-wide">Benefits</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {treatment.benefits.map((benefit, j) => (
                      <div key={j} className="flex items-center gap-2.5">
                        <CheckIcon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground font-body">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Procedure */}
                <div className="mb-5">
                  <h4 className="font-poppins font-bold text-sm text-foreground mb-3 uppercase tracking-wide">Procedure</h4>
                  <ol className="space-y-2">
                    {treatment.procedure.map((step, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{j + 1}</span>
                        <span className="text-sm text-foreground font-body">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-3 bg-primary/5 rounded-xl px-5 py-3 mb-7 w-fit">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <p className="text-xs text-muted-foreground font-body uppercase tracking-wide">Treatment Duration</p>
                    <p className="text-sm font-semibold text-primary font-poppins">{treatment.duration}</p>
                  </div>
                </div>

                {/* CTA */}
                <div>
                  <a
                    href="/contact"
                    className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg font-poppins"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}