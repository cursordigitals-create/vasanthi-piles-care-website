import { FacebookIcon, TwitterIcon, InstagramIcon, SendIcon } from "@/components/icons/CustomIcons";

const LOGO_URL = "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/1ae975c78_Group261.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={LOGO_URL} alt="Vasanthi Piles Care" className="h-14 w-auto object-contain" />

            </div>
            <p className="text-xs opacity-70 leading-relaxed font-body">
              Leading the Way in Medical
              <br />
              Excellence. Trusted Care.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-bold text-sm mb-4 underline underline-offset-4 decoration-accent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-xs opacity-70 hover:opacity-100 transition-opacity font-body">Appointment</a></li>
              <li><a href="/treatment" className="text-xs opacity-70 hover:opacity-100 transition-opacity font-body">Treatment</a></li>
              <li><a href="/about" className="text-xs opacity-70 hover:opacity-100 transition-opacity font-body">About Us</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-poppins font-bold text-sm mb-4 underline underline-offset-4 decoration-accent">
              Contact Us
            </h4>
            <ul className="space-y-2 text-xs opacity-70 font-body">
              <li>Call: 082702 06699</li>
              <li>Email: vasanthipiles@gmail.com</li>
              <li>Tiresha Complex, Barma Bazar,</li>
              <li>30/7, Muthupattinam, Karaikudi,</li>
              <li>Tamil Nadu 630001</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-poppins font-bold text-sm mb-4 underline underline-offset-4 decoration-accent">
              Newsletter
            </h4>
            <div className="flex items-center gap-0 mt-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 text-xs px-3 py-2.5 rounded-l-md outline-none placeholder:text-white/40 font-body"
              />
              <button className="bg-accent hover:bg-accent/90 px-3 py-2.5 rounded-r-md transition-colors">
                <SendIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] opacity-50 font-body">
            © 2026 Designed and Developed by{" "}
            <a href="https://cursordigitals.in/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-100 transition-opacity">
              CURSOR DIGITALS
            </a>
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <FacebookIcon className="w-3 h-3" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <TwitterIcon className="w-3 h-3" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <InstagramIcon className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}