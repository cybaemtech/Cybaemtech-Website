import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  FileText,
  Building2,
  Cog,
  HeartPulse,
  Truck,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Hotel,
} from "lucide-react";

// Industry showcase images
import healthImg from "@/assets/Industries/healthcare/hero/hero.png";
import mfgImg from "@/assets/Industries/manufacturing/our solutions/8 images/1.png";
import realEstateImg from "@/assets/Industries/real estate/hero/hero.png";
import logisticsImg from "@/assets/Industries/logistic/hero/hero.png";
import financeImg from "@/assets/Industries/finance/hero.png";
import retailImg from "@/assets/Industries/transform retail/hero/hero.png";
import eduImg from "@/assets/Industries/education/hero-bg.png";
import hospitalityImg from "@/assets/Industries/hospitality/hero/hero.png";

export interface IndustryCardItem {
  number: string;
  title: string;
  desc: string;
  link: string;
  image: string;
  icon: typeof HeartPulse;
}

export const industryList: IndustryCardItem[] = [
  {
    number: "01",
    title: "Real Estate",
    desc: "Property listing portals, tenant management platforms, builder CRM, and interactive 3D virtual tours.",
    link: "/industries/real-estate-technology-solutions",
    image: realEstateImg,
    icon: Building2,
  },
  {
    number: "02",
    title: "Manufacturing",
    desc: "Smart factory operations, MES execution systems, enterprise ERP, and industrial IoT machine telemetry.",
    link: "/industries/manufacturing-technology-solutions",
    image: mfgImg,
    icon: Cog,
  },
  {
    number: "03",
    title: "Healthcare",
    desc: "Hospital information systems, EHR/EMR platforms, patient portals, and HIPAA-compliant telehealth.",
    link: "/industries/healthcare-technology-solutions",
    image: healthImg,
    icon: HeartPulse,
  },
  {
    number: "04",
    title: "Logistics & Supply Chain",
    desc: "Real-time fleet tracking, automated warehouse management (WMS), and AI route optimization algorithms.",
    link: "/industries/logistics-supply-chain-technology-solutions",
    image: logisticsImg,
    icon: Truck,
  },
  {
    number: "05",
    title: "Financial Services",
    desc: "Secure banking portals, wealth management SaaS, automated KYC/AML fraud detection, and payment APIs.",
    link: "/industries/financial-services-technology-solutions",
    image: financeImg,
    icon: Landmark,
  },
  {
    number: "06",
    title: "Retail & E-Commerce",
    desc: "Omnichannel commerce stores, multi-location inventory syncing, POS systems, and customer loyalty CRM.",
    link: "/industries/retail-ecommerce-technology-solutions",
    image: retailImg,
    icon: ShoppingCart,
  },
  {
    number: "07",
    title: "Education & EdTech",
    desc: "Custom Learning Management Systems (LMS), Student Information Systems (SIS), and virtual classrooms.",
    link: "/industries/education-technology-solutions",
    image: eduImg,
    icon: GraduationCap,
  },
  {
    number: "08",
    title: "Hospitality & Travel",
    desc: "Commission-free direct booking engines, contactless guest mobile check-in, and PMS integrations.",
    link: "/industries/hospitality-technology-solutions",
    image: hospitalityImg,
    icon: Hotel,
  },
];

export default function IndustriesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

      const card = scrollContainerRef.current.firstElementChild as HTMLElement;
      const cardWidth = card ? card.clientWidth + 24 : 340;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(0, index), industryList.length - 1));
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollState, { passive: true });
      checkScrollState();
      return () => el.removeEventListener("scroll", checkScrollState);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.firstElementChild as HTMLElement;
      const step = card ? card.clientWidth + 24 : 340;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -step : step,
        behavior: "smooth",
      });
    }
  };

  const scrollToCard = (idx: number) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.firstElementChild as HTMLElement;
      const step = card ? card.clientWidth + 24 : 340;
      scrollContainerRef.current.scrollTo({
        left: idx * step,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="industries"
      className="relative py-16 sm:py-20 lg:py-22 bg-white overflow-hidden border-t border-b border-slate-100"
    >
      {/* Soft ambient background glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[140px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-sky-50/50 rounded-full blur-[120px] translate-x-1/3 pointer-events-none" />

      {/* Subtle corner grid accents */}
      <div className="absolute top-0 left-0 w-36 sm:w-56 h-36 sm:h-56 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:18px_18px] opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-36 sm:w-56 h-36 sm:h-56 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:18px_18px] opacity-25 pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10 max-w-7xl">
        {/* ── SECTION HEADER: Left Title + Right Navigation Controls ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-5 h-[2px] bg-primary rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-primary">
                INDUSTRIES WE SERVE
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#0a1435] tracking-tight leading-tight">
              Specialized Technology for <span className="text-primary">Key Industries</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed max-w-xl">
              We design, build, and scale mission-critical digital systems tailored to the exact regulatory, operational, and customer demands of your sector.
            </p>
          </div>

          {/* Right Navigation Controls: Carousel Arrows + Explore Link */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous Industry"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? "border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 shadow-xs active:scale-95 cursor-pointer"
                    : "border border-slate-200/50 text-slate-300 bg-slate-50/50 cursor-not-allowed opacity-40"
                }`}
              >
                <ArrowLeft size={18} strokeWidth={1.8} />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next Industry"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  canScrollRight
                    ? "border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 shadow-xs active:scale-95 cursor-pointer"
                    : "border border-slate-200/50 text-slate-300 bg-slate-50/50 cursor-not-allowed opacity-40"
                }`}
              >
                <ArrowRight size={18} strokeWidth={1.8} />
              </button>
            </div>

            <Link
              to="/industries/real-estate-technology-solutions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 hover:border-primary/50 bg-white hover:bg-blue-50/50 text-slate-800 hover:text-primary font-semibold text-xs sm:text-sm shadow-xs transition-all duration-200"
            >
              <span>All Industries</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* ── CAROUSEL OF INDUSTRY CARDS (3 FULL CARDS + 4TH HALF CARD, REDUCED HEIGHT, NO SCROLLER) ── */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory scroll-smooth pb-3 pt-1 -mx-5 px-5 md:mx-0 md:px-0"
        >
          {industryList.map((ind, index) => (
            <motion.div
              key={ind.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="w-[78vw] sm:w-[calc((100%-24px)/2.35)] lg:w-[calc((100%-72px)/3.45)] h-[370px] sm:h-[390px] lg:h-[400px] shrink-0 snap-start"
            >
              <Link
                to={ind.link}
                className="group relative w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden border border-slate-200/80 hover:border-primary/60 shadow-[0_8px_25px_rgba(15,23,42,0.12)] hover:shadow-[0_16px_35px_rgba(0,82,204,0.18)] transition-all duration-300 flex flex-col justify-end p-5 sm:p-6 cursor-pointer focus:outline-hidden block"
              >
                {/* 1. Full-Card Background Photo with Zoom on Hover */}
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out absolute inset-0"
                  loading="lazy"
                />

                {/* 2. Deep Gradient Overlay strictly tailored for contrast & text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15 group-hover:from-black group-hover:via-black/65 transition-all duration-300 pointer-events-none" />

                {/* 3. Bottom Content: Title + Description + Hover-Revealed READ MORE */}
                <div className="relative z-10 w-full">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors leading-snug mb-1.5 drop-shadow-md">
                    {ind.title}
                  </h3>

                  <p className="text-xs sm:text-[12.5px] text-slate-200/90 leading-relaxed line-clamp-2 font-normal drop-shadow">
                    {ind.desc}
                  </p>

                  {/* READ MORE - Displayed ONLY on hover */}
                  <div className="overflow-hidden transition-all duration-300 ease-out max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100 group-hover:mt-2.5">
                    <div className="flex items-center gap-2 text-[11.5px] sm:text-xs font-bold tracking-wider uppercase text-white/90 group-hover:text-blue-300 pt-2 border-t border-white/20">
                      <FileText size={13.5} strokeWidth={2} className="text-blue-400 shrink-0" />
                      <span>READ MORE</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Pagination Indicators ── */}
        <div className="flex items-center justify-between mt-5 px-1">
          <div className="flex items-center gap-1.5">
            {industryList.map((ind, idx) => (
              <button
                key={ind.title}
                type="button"
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to ${ind.title}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "w-7 bg-primary"
                    : "w-2 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>

          <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
            Scroll or drag to explore all 8 industries →
          </span>
        </div>
      </div>
    </section>
  );
}
