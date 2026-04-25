import { ChevronRightIcon } from "@/components/icons/CustomIcons";

const conditions = [
  {
    id: 1,
    name: "Piles",
    description: "Pain, bleeding, swelling, and discomfort during bowel movements. Safe non-surgical treatment available for faster relief.",
  },
  {
    id: 2,
    name: "Fissure",
    description: "Burning sensation, pain, and cuts near the anal area. Effective treatment available without surgery or bed rest.",
  },
  {
    id: 3,
    name: "Fistula",
    description: "Infection, swelling, and pus discharge near the anal area. Advanced Kshar Sutra treatment helps provide long-term relief.",
  },
  {
    id: 4,
    name: "Pilonidal Sinus",
    description: "Painful swelling and infection near the tailbone area. Early treatment helps avoid further complications and discomfort.",
  },
];

export default function ConditionCardsSection() {
  return (
    <section data-observe="up" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2 font-poppins">
            What We Treat
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Conditions We Care For
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-3" />
        </div>

        {/* Condition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {conditions.map((condition, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white to-muted/30 rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${i * 75}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading font-bold text-lg text-foreground">
                  {condition.name}
                </h3>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ChevronRightIcon className="w-4 h-4 text-primary" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-body mb-6">
                {condition.description}
              </p>
              <a
                href={`#${condition.name.toLowerCase()}`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm font-poppins transition-colors"
              >
                Read More
                <ChevronRightIcon className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}