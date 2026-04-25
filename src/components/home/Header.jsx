import { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneIcon, MapPinIcon, MenuIcon, XIcon } from "@/components/icons/CustomIcons";

const LOGO_URL = "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/263ef81c0_Group260.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      {/* Top bar with Logo, Navigation and Contact Info */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <img src={LOGO_URL} alt="Vasanthi Piles Care" className="h-12 w-auto object-contain" />

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-foreground text-sm font-medium hover:text-primary transition-colors font-poppins">Home</Link>
            <Link to="/about" className="text-foreground text-sm font-medium hover:text-primary transition-colors font-poppins">About us</Link>
            <Link to="/treatment" className="text-foreground text-sm font-medium hover:text-primary transition-colors font-poppins">Treatment</Link>
            <Link to="/contact" className="text-foreground text-sm font-medium hover:text-primary transition-colors font-poppins">Contact</Link>
          </nav>

          {/* Top contact info */}
          <div className="hidden md:flex items-center gap-6 text-xs text-foreground">
            <a href="tel:08270206699" className="flex items-center gap-2 bg-amber-50 px-3 py-1.5 rounded hover:bg-amber-100 transition-colors">
              <PhoneIcon className="w-3.5 h-3.5 text-primary" />
              <div>
                <p className="font-semibold text-primary text-[11px]">CALL US</p>
                <p className="text-muted-foreground text-[10px]">082702 06699</p>
              </div>
            </a>
            <div className="flex items-center gap-2 bg-amber-50 px-3 py-1.5 rounded">
              <MapPinIcon className="w-3.5 h-3.5 text-primary" />
              <div>
                <p className="font-semibold text-primary text-[11px]">WORK HOURS</p>
                <p className="text-muted-foreground text-[10px]">9am–1pm, 4:30–8pm</p>
              </div>
            </div>
            <a href="https://wa.me/918270206699" target="_blank" rel="noopener noreferrer" className="bg-[#068434] text-white px-3 py-1.5 rounded flex items-center gap-2 hover:bg-green-600 transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>



      {/* Mobile Navigation */}
      <div className="lg:hidden bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            className="text-primary-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
        
        {mobileOpen && (
          <div className="border-t border-white/20 px-4 pb-4">
            <Link to="/" className="block text-primary-foreground text-sm font-medium py-2.5 border-b border-white/10 font-poppins">Home</Link>
            <Link to="/about" className="block text-primary-foreground text-sm font-medium py-2.5 border-b border-white/10 font-poppins">About us</Link>
            <Link to="/treatment" className="block text-primary-foreground text-sm font-medium py-2.5 border-b border-white/10 font-poppins">Treatment</Link>
            <Link to="/contact" className="block text-primary-foreground text-sm font-medium py-2.5 border-b border-white/10 font-poppins">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}