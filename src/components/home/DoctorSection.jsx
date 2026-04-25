export default function DoctorSection() {
  const doctors = [
    {
      name: "Dr. Rajendra Prasad",
      specialty: "Anorectal Surgeon",
      image: "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/354bd1d0c_Physician_Trends_2021_Merritt_Hawkins2.png",
      description: "Specializing in non-surgical treatment of piles, fistula, and related conditions."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Experts
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed font-body">
            Our experienced doctors are dedicated to providing compassionate, effective care using modern non-surgical techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.name} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={doctor.image} alt={doctor.name} className="w-full h-80 object-cover" />
              <div className="p-6 bg-white">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{doctor.name}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{doctor.specialty}</p>
                <p className="text-muted-foreground text-sm font-body">{doctor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}