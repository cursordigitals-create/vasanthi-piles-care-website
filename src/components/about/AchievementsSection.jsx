const achievements = [
  {
    number: "240+",
    label: "Satisfied Patients",
  },
  {
    number: "15+",
    label: "Years Experience",
  },
  {
    number: "100%",
    label: "Success Rate",
  },
];

export default function AchievementsSection() {
  return (
    <section className="py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {achievements.map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-poppins mb-2">
                {item.number}
              </div>
              <p className="text-sm md:text-base font-poppins opacity-90">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}