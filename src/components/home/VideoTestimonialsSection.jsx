import { useState, useEffect, useRef } from "react";
import { base44 } from "@/api/base44Client";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VideoTestimonialsSection() {
  const [videoTestimonials, setVideoTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const items = await base44.entities.GalleryItem.filter(
        { category: 'testimonial', type: 'video' },
        '-created_date',
        100
      );
      setVideoTestimonials(items);
      setLoading(false);
    };
    fetchTestimonials();
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 260, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-[#eff8e3]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin mx-auto"></div>
        </div>
      </section>
    );
  }

  if (videoTestimonials.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-[#eff8e3]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2 font-poppins">
            Patient Stories
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Video Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Hear from our patients about their treatment experience and recovery journey
          </p>
        </div>

        {/* Scroll Container with Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-border"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrollable Row */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videoTestimonials.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-52">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border">
                  <div className="relative w-full bg-slate-900" style={{ aspectRatio: '9/16' }}>
                    <video src={item.mediaUrl} controls className="w-full h-full object-cover" />
                  </div>
                  {item.showTitle !== false && (
                    <div className="p-3">
                      <p className="font-heading font-bold text-sm text-foreground truncate">{item.title}</p>
                    </div>
                  )}
                </div>
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