import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  initials: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    initials: "CTO",
    name: "CTO",
    role: "Client, FinTech Company",
    quote:
      "CYBAEM transformed our IT operations with 24/7 support and robust security monitoring, helping us achieve higher uptime and stronger operational resilience.",
    rating: 5,
  },
  {
    id: 2,
    initials: "HIT",
    name: "Head of IT",
    role: "Client, Manufacturing Group",
    quote:
      "Their cloud team helped us migrate to Azure seamlessly, reducing infrastructure costs by 30% while improving application performance and scalability.",
    rating: 5,
  },
  {
    id: 3,
    initials: "ML",
    name: "Marketing Lead",
    role: "Client, SaaS Startup",
    quote:
      "Digital campaigns delivered a 2× boost in qualified leads within just 90 days, significantly improving our online visibility and conversion rates.",
    rating: 5,
  },
  {
    id: 4,
    initials: "EM",
    name: "Engineering Manager",
    role: "Client, Enterprise Software Company",
    quote:
      "CYBAEM's software development team delivered a scalable enterprise application with modern architecture, accelerating our digital transformation and improving operational efficiency.",
    rating: 5,
  },
];

const ClientTestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance testimonials every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#fafcff] relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-3.5"
          >
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.22em] text-primary uppercase">
              — WHAT OUR CLIENTS SAY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0a1128] tracking-tight leading-[1.18]"
          >
            Trusted by{" "}
            <span className="text-primary">Leaders,</span>
            <br /> Proven by{" "}
            <span className="text-primary">Results.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto mt-3.5"
          >
            Real stories from real partnerships that drive real impact.
          </motion.p>
        </div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-[26px] p-7 sm:p-12 border border-slate-200/80 shadow-[0_15px_45px_rgba(0,40,120,0.04)] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1.5 mb-5 sm:mb-6">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 italic text-[15px] sm:text-[17px] leading-relaxed mb-8 font-normal">
                  “{current.quote}”
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#dbe8f8] text-[#1b4369] font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 tracking-wide">
                    {current.initials}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {current.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 font-normal mt-0.5">
                      {current.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Pill & Dots inside the Card bottom */}
            <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10 pt-2">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${idx === activeIndex
                      ? "w-8 h-2.5 bg-[#1b4369]"
                      : "w-2.5 h-2.5 bg-[#d0dbe7] hover:bg-slate-300"
                    }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;
