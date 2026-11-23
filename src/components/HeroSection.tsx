import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Laptop,
  Server,
  BarChart2,
  Smartphone,
  Cloud,
  Search,
  Globe,
  ShieldCheck,
  Share2,
} from "lucide-react";
import type { Variants } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const servicesList = [
  {
    label: "Software",
    icon: Laptop,
    href: "/software-platforms/enterprise-software",
  },
  {
    label: "Infrastructure",
    icon: Server,
    href: "/cloud-security/it-infrastructure-services",
  },
  {
    label: "Marketing",
    icon: BarChart2,
    href: "/digital-growth/performance-marketing",
  },
  {
    label: "Apps",
    icon: Smartphone,
    href: "/software-platforms/mobile-app-development",
  },
  {
    label: "Cloud",
    icon: Cloud,
    href: "/cloud-security/cloud-solutions",
  },
  {
    label: "SEO",
    icon: Search,
    href: "/digital-growth/seo-aeo-geo",
  },
  {
    label: "Websites",
    icon: Globe,
    href: "/software-platforms/web-systems",
  },
  {
    label: "Security",
    icon: ShieldCheck,
    href: "/cloud-security/cybersecurity",
  },
  {
    label: "Social",
    icon: Share2,
    href: "/digital-growth/social-media-management",
  },
];

const HeroSection = () => {
  const handleScrollDown = () => {
    const nextSection =
      document.getElementById("partners") ||
      document.getElementById("trust-anchor") ||
      document.querySelector("section:nth-of-type(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-between items-center bg-slate-950 pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12">
      {/* ── BACKGROUND IMAGE & OVERLAYS ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Cybaem Tech Enterprise Security Operations Center"
          className="w-full h-full object-cover object-center relative z-0"
          fetchPriority="high"
          loading="eager"
        />

        {/* Video background commented out as requested
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
        */}

        {/* Balanced overlay that keeps the SOC room and monitors clearly visible while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-slate-950/85 pointer-events-none" />

        {/* Decorative corner grid accents matching reference mockup */}
        <div className="absolute top-0 left-0 w-36 sm:w-56 h-36 sm:h-56 bg-[radial-gradient(#475569_1.2px,transparent_1.2px)] [background-size:18px_18px] opacity-35 pointer-events-none" />
        <div className="absolute top-0 right-0 w-36 sm:w-56 h-36 sm:h-56 bg-[radial-gradient(#475569_1.2px,transparent_1.2px)] [background-size:18px_18px] opacity-35 pointer-events-none" />
      </div>

      {/* ── TOP/CENTER HERO CONTENT ── */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10 w-full my-auto">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="w-full max-w-5xl lg:max-w-6xl mx-auto flex flex-col items-center justify-center text-center"
        >
          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-extrabold text-white text-center drop-shadow-2xl tracking-[-0.03em] max-w-5xl mx-auto"
            style={{
              fontFamily:
                "'Plus Jakarta Sans', 'Space Grotesk', -apple-system, sans-serif",
              lineHeight: 1.16,
              fontSize: "clamp(28px, 4.3vw, 52px)",
            }}
          >
            <span className="block">Enterprise Technology Services </span>
            <span className="block">and Software Development</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base md:text-lg text-slate-200/90 max-w-4xl mx-auto text-center font-normal leading-relaxed drop-shadow mt-5 sm:mt-6 mb-8 sm:mb-12 px-2 sm:px-4"
          >
            <span className="block">
              We deliver scalable custom enterprise technology, managed cloud security,
            </span>
            <span className="block">
              and dedicated IT staff augmentation built for growing global enterprises.
            </span>
          </motion.p>

          {/* Center Down Arrow Scroll Button */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <button
              type="button"
              onClick={handleScrollDown}
              aria-label="Scroll down to explore"
              className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-white/60 bg-white/5 hover:bg-white/15 hover:border-white text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer group hover:scale-105 active:scale-95"
            >
              <ArrowDown
                size={22}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* ── BOTTOM SERVICES MARQUEE FEATURE STRIP ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl mx-auto px-4 relative z-10 mt-auto pt-6"
      >
        <p className="text-sm sm:text-base text-slate-300 font-medium text-center tracking-wide mb-3.5 sm:mb-4">
          Our enterprise services &amp; solutions cover:
        </p>

        <div className="relative overflow-hidden w-full py-3.5 group">
          {/* Subtle edge fades for smooth marquee entry and exit */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-slate-950 via-slate-950/60 to-transparent z-10 pointer-events-none" />

          <div
            className="flex w-max animate-marquee group-hover:[animation-play-state:paused] items-center"
            style={{ animationDuration: "35s" }}
          >
            {[...servicesList, ...servicesList, ...servicesList, ...servicesList].map(
              (item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    to={item.href}
                    className="flex items-center gap-2.5 px-5 sm:px-7 lg:px-8 py-1.5 shrink-0 text-white hover:text-sky-300 transition-colors duration-200 text-sm sm:text-base font-semibold group/item cursor-pointer"
                  >
                    <Icon
                      size={20}
                      className="text-white group-hover/item:text-sky-300 shrink-0 stroke-[2] transition-colors"
                    />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </Link>
                );
              },
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
