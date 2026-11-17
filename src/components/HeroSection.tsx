import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticButton } from "./Navbar";
import type { Variants } from "framer-motion";
import heroVideo from "../assets/web video 01.mp4";
import heroBg from "../assets/hero-new.jpg";

const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-end justify-center pb-6 sm:pb-10 bg-slate-950">
      {/* Full-screen background image fallback & optimized video */}
      <div className="absolute inset-0 z-0">
    
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover relative z-10"
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Uniform dark overlay for readability, matching reference image */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10 w-full">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center"
        >
          {/* Badge */}
          {/* <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2.5 px-5 py-2 text-[13px] font-semibold tracking-wide uppercase text-white/90 border border-white/10 rounded-full bg-black/40 shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary" />
              ISO-Certified Global Technology Partner
            </span>
          </motion.div> */}

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-bold text-white mb-6 mt-10 text-center drop-shadow-2xl tracking-[-0.03em]"
            style={{ fontFamily: "'Plus Jakarta Sans', 'Space Grotesk', -apple-system, sans-serif", fontWeight: 800, lineHeight: 1.12, fontSize: 'clamp(40px, 6vw, 56px)' }}
          >
            Enterprise Technology Services and
            <br /> Software Development
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-3xl mx-auto mb-10 text-center font-normal leading-relaxed drop-shadow"
          >
            We deliver scalable custom enterprise technology, managed cloud security, and dedicated IT staff augmentation built for growing global enterprises.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <MagneticButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white border border-white/80 rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                Talk to an IT Architect
                <ArrowRight size={20} />
              </Link>
            </MagneticButton>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white border border-white/80 rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Explore Enterprise Case Studies
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Stats strip */}

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
