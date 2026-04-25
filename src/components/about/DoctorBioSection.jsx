export default function DoctorBioSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div>
            <img 
              src="https://media.base44.com/images/public/69cd58d9e084046ea93c855f/dd9ca670e_generated_61a59253.png"
              alt="Dr. D. Bakshi"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>

          {/* Bio */}
          <div>
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2 font-poppins">
              Meet Our Expert
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dr. D. Bakshi
            </h2>
            <p className="text-primary font-semibold text-lg mb-6 font-poppins">
              Ayurvedic Proctologist
            </p>

            <div className="space-y-4 text-sm text-muted-foreground font-body leading-relaxed mb-6">
              <p>
                Dr. D. Bakshi is an experienced Ayurvedic Proctologist with 12 years of expertise in treating piles, fissure, fistula, and pilonidal sinus. He holds B.A.M.S. and M.D. (Acu) qualifications with Registration No: 2630 / Ayurveda.
              </p>
              <p>
                He specializes in safe and effective non-surgical treatments like Kshar Karma and Kshar Sutra. With a patient-focused approach, Dr. D. Bakshi is known for providing personalized care, faster recovery, and trusted treatment solutions without surgery.
              </p>
            </div>

            {/* Qualifications */}
            <div className="space-y-2">
              <h3 className="font-poppins font-bold text-foreground mb-3">Qualifications</h3>
              <ul className="space-y-2 text-xs text-muted-foreground font-body">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>B.A.M.S. (Bachelor of Ayurvedic Medicine and Surgery)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>M.D. (Acu) - Ayurveda Specialization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Registration No: 2630 / Ayurveda</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}