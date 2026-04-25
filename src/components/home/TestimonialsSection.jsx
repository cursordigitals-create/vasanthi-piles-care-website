const GALLERY_IMAGES = [
  "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/f9bda04d4_generated_dd5121bc.png",
  "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/dd9ca670e_generated_61a59253.png",
  "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/7404c5cf7_generated_704407d8.png",
  "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/8dcd2f273_generated_bc2e5f0f.png",
  "https://media.base44.com/images/public/69cd58d9e084046ea93c855f/094f8ead8_generated_8dd1a8a1.png",
];

import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function TestimonialsSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const containerWidth = container.clientWidth;
    let scrollPos = 0;

    const interval = setInterval(() => {
      scrollPos += 2;
      if (scrollPos > scrollWidth - containerWidth) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
    }, 30);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What our Client says
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed font-body">
            Vasanthi Piles Care offers specialized treatment for piles/hemorrhoids, fistula, anal fissure, 
            pilonidal sinus, rectal prolapse. Our treatments are designed to provide effective relief 
            without surgery, ensuring comfortable and faster recovery.
          </p>
        </div>

        {/* Client Videos Gallery */}
        <div className="flex overflow-x-auto gap-3 pb-4 -mx-4 px-4" ref={scrollContainerRef} style={{ scrollBehavior: 'smooth' }}>
          <div className="flex gap-3 min-w-min">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className="aspect-[9/16] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex-shrink-0 w-48 sm:w-56 border-4 border-slate-200"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Client testimonial ${i + 1}`}
                  className="w-full h-full object-cover"
                  onClick={() => setSelectedImage(img)}
                />
              </div>
            ))}
          </div>
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-sm">
            {selectedImage && <img src={selectedImage} alt="Full view" className="w-full h-auto rounded-lg" />}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}