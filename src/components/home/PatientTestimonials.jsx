import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function PatientTestimonials() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      name: "M. Karuppiah",
      text: "I had piles for many years and was struggling a lot. Sitting and working was very difficult. After taking treatment here, the pain reduced step by step. Now I can do my daily work normally without any problem."
    },
    {
      name: "S. Meenakshi",
      text: "I came with severe fissure pain and was unable to even sit properly. The doctor guided me clearly and started treatment. Within a few days, I felt good relief. Now I am comfortable and pain-free."
    },
    {
      name: "R. Muthuraman",
      text: "I was suffering from fistula and didn't know what to do. After starting treatment, the condition improved gradually. The process was smooth, and recovery was better than I expected."
    },
    {
      name: "K. Lakshmi",
      text: "I had piles symptoms like pain and bleeding. It was affecting my daily life. After treatment, I could see clear improvement. Now I feel normal and more confident."
    },
    {
      name: "P. Chelladurai",
      text: "I was worried about my problem and delayed treatment for a long time. After coming here, I understood the condition properly and started treatment. Now I feel much better and free from discomfort."
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2 font-poppins">
            Patient Stories
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
        </div>

        {/* Testimonials Scrollable */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-border"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-2 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="flex-shrink-0 w-72 bg-muted/50 rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-body italic">
                  "{testimonial.text}"
                </p>
                {/* Name */}
                <p className="font-heading font-bold text-foreground text-sm">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-border"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}