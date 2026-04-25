import { useEffect } from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { observeElements } from "@/lib/scrollAnimations";

export default function Contact() {
  useEffect(() => {
    observeElements();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden min-h-[300px] md:min-h-[400px] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 100%), url('https://media.base44.com/images/public/69cd58d9e084046ea93c855f/354bd1d0c_Physician_Trends_2021_Merritt_Hawkins2.png')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full pb-8">
          <p className="text-foreground text-sm font-semibold mb-2 font-body">Home / Contact</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary leading-tight">
            Our Contacts
          </h1>
        </div>
      </section>

      {/* Colored Bar */}
      <div className="h-2 bg-gradient-to-r from-primary via-accent to-yellow-500"></div>

      {/* Map Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5!2d78.784!3d10.073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c4e6a0000001%3A0x0!2sTiresha%20Complex%2C%20Barma%20Bazar%2C%20Karaikudi!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </section>

      {/* Contact Form & Cards Section */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: "#f5faf0" }}>
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/5 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2 font-poppins">Reach Out</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Form Section */}
            <div className="lg:col-span-2 bg-primary rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-8">
                <h3 className="font-heading text-xl font-bold text-white mb-6">Send Us a Message</h3>
                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/10 text-white px-4 py-3 rounded-xl outline-none placeholder:text-white/50 font-body text-sm border border-white/10 focus:border-white/40 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/10 text-white px-4 py-3 rounded-xl outline-none placeholder:text-white/50 font-body text-sm border border-white/10 focus:border-white/40 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-white/10 text-white px-4 py-3 rounded-xl outline-none placeholder:text-white/50 font-body text-sm border border-white/10 focus:border-white/40 transition-colors"
                  />
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="w-full bg-white/10 text-white px-4 py-3 rounded-xl outline-none placeholder:text-white/50 resize-none font-body text-sm border border-white/10 focus:border-white/40 transition-colors"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-xl transition-all shadow-md hover:shadow-lg font-poppins text-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              {/* Bottom decoration */}
              <div className="h-2 bg-gradient-to-r from-accent via-yellow-400 to-accent"></div>
            </div>

            {/* Contact Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-primary/10 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-xl">📞</span>
                </div>
                <h3 className="font-poppins font-bold text-primary text-sm uppercase tracking-wide mb-2">Phone</h3>
                <a href="tel:08270206699" className="text-foreground font-semibold text-base hover:text-primary transition-colors">082702 06699</a>
              </div>

              {/* Location Card */}
              <div className="bg-primary rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-xl">📍</span>
                </div>
                <h3 className="font-poppins font-bold text-white text-sm uppercase tracking-wide mb-2">Location</h3>
                <p className="text-white font-semibold text-sm">Tiresha Complex, Barma Bazar,</p>
                <p className="text-white/75 text-xs mt-1">30/7, near 2nd Beat, Muthupattinam,</p>
                <p className="text-white/75 text-xs">Karaikudi, Tamil Nadu 630001</p>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-primary/10 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-xl">✉️</span>
                </div>
                <h3 className="font-poppins font-bold text-primary text-sm uppercase tracking-wide mb-2">Email</h3>
                <a href="mailto:vasanthipiles@gmail.com" className="text-foreground font-semibold text-sm hover:text-primary transition-colors break-all">vasanthipiles@gmail.com</a>
              </div>

              {/* Working Hours Card */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-primary/10 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-xl">🕐</span>
                </div>
                <h3 className="font-poppins font-bold text-primary text-sm uppercase tracking-wide mb-2">Working Hours</h3>
                <p className="text-foreground font-semibold text-sm">Mon–Sat: 9am–1pm, 4:30–8pm</p>
                <p className="text-xs text-muted-foreground mt-1">Sunday: 9am–1pm only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}