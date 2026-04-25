const HERO_DOCTOR = "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/354bd1d0c_Physician_Trends_2021_Merritt_Hawkins2.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="bg-[#eff8e3] w-full px-4 pl-8 md:pl-16 py-20 relative md:py-28 grid md:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Left Content */}
        <div className="px-5 space-y-8 z-10">
          <div>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 font-poppins">WELCOME TO VASANTHI PILES CARE</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4">
              Best Non-Surgical Treatment for{" "}
              <span className="text-primary">Piles, Fissure &amp; Fistula</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-xl">
              Vasanthi Piles Care provides specialized and advanced treatment for piles, fissure, fistula, and pilonidal sinus using proven non-surgical techniques like Kshar Karma and Kshar Sutra. Our treatments focus on delivering effective relief with minimal pain, faster recovery, and long-lasting results without the need for surgery.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="/treatment"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
              
              Treatments
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-primary text-primary hover:bg-primary/5 text-sm font-semibold px-8 py-3 rounded-lg transition-all">
              
              Learn More
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary font-heading">240+</p>
              <p className="text-xs text-muted-foreground mt-1 font-body">Satisfied Patients</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary font-heading">15+</p>
              <p className="text-xs text-muted-foreground mt-1 font-body">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary font-heading">100%</p>
              <p className="text-xs text-muted-foreground mt-1 font-body">Success Rate</p>
            </div>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="relative h-full flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-border">
              <img
              src="https://media.base44.com/images/public/69cd58d9e084046ea93c855f/7b62f7eb1_anal-rectal-pain-spasm.png"
              alt="Non-surgical piles, fissure and fistula treatment illustration at Vasanthi Piles Care"
              className="w-full h-full object-cover aspect-square" />
              
            </div>
            
            {/* Floating Cards */}
            <a href="#about" className="absolute -left-6 -bottom-6 bg-white rounded-2xl p-4 shadow-xl border border-border backdrop-blur-sm max-w-xs hover:shadow-2xl transition-all cursor-pointer group">
              <p className="text-xs text-primary mb-2 font-body font-semibold">Chief Doctor</p>
              <p className="text-sm font-semibold text-foreground mb-3 font-body group-hover:text-primary transition-colors">Dr. D. Bakshi</p>
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                  <span className="text-primary font-bold">DB</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Specialist</p>
                  <p className="text-xs text-muted-foreground">Ayurvedic Proctologist</p>
                </div>
              </div>
            </a>
            
            <div className="absolute -right-6 top-20 bg-primary text-white rounded-2xl p-4 shadow-xl max-w-xs">
              <p className="text-xs font-semibold mb-2 opacity-90">Treatment Success</p>
              <p className="text-2xl font-bold font-heading">+98%</p>
              <p className="text-xs mt-1 opacity-90">Recovery Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}