import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const GALLERY_IMAGES = [
  "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/f9bda04d4_generated_dd5121bc.png",
  "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/dd9ca670e_generated_61a59253.png",
  "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/7404c5cf7_generated_704407d8.png",
  "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/8dcd2f273_generated_bc2e5f0f.png",
  "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/094f8ead8_generated_8dd1a8a1.png",
];

export default function WelcomeSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section data-observe="up" className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2 font-poppins">
            Welcome to Vasanthi Piles Care
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Advanced Non-Surgical Care for Piles, Fissure & Fistula
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed font-body">
            At Vasanthi Piles Care, we understand how much these conditions can affect your daily life. That is why our experienced team uses trusted Ayurvedic methods to offer gentle, effective, and lasting relief — so you can get back to living comfortably without the worry of surgery or long recovery times.
          </p>
        </div>

        {/* CTA Link */}
        <div className="text-center mb-10">
          <a
            href="#treatments"
            className="inline-flex items-center gap-2 text-accent hover:text-primary font-semibold text-sm transition-colors font-poppins"
          >
            Read about Treatment begins
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Image Gallery */}
        <div className="flex overflow-x-auto gap-3 pb-4 -mx-4 px-4">
          <div className="flex gap-3 min-w-min">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className="aspect-[3/4] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex-shrink-0 w-40 sm:w-48 md:w-56"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Vasanthi Piles Care clinic facility image ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-3xl">
            {selectedImage && <img src={selectedImage} alt="Vasanthi Piles Care clinic - full view" className="w-full h-auto rounded-lg" />}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}