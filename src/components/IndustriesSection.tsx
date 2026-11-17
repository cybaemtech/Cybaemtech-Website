import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  HeartPulse,
  Cog,
  Building2,
  Truck,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Hotel,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { itemVariants } from "@/lib/animations";

// Background building texture matching top-right visual in reference
import buildingCtImg from "@/assets/navbar/bilding-ct.png";

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
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

      const card = scrollContainerRef.current.firstElementChild as HTMLElement;
      const cardWidth = card ? card.clientWidth + 24 : 320;
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
    <div className="w-full bg-[#f8fbff] py-16 lg:py-24 relative overflow-hidden border-t border-slate-200/60 font-sans">
      {/* Top right glass building background element matching the theme mockup */}
      <div className="absolute top-0 right-0 w-full sm:w-[60%] lg:w-[42%] h-80 lg:h-96 pointer-events-none overflow-hidden opacity-35 lg:opacity-45 z-0">
        <img
          src={buildingCtImg}
          alt=""
          className="w-full h-full object-cover object-left-top"
          loading="lazy"
        />
        {/* Soft fading gradient overlays so the building blends seamlessly into the light background */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#f8fbff]/60 to-[#f8fbff]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f8fbff]/40 to-[#f8fbff]" />
      </div>

      {/* Subtle world map / connection network vector overlay in the center header */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[720px] h-64 pointer-events-none opacity-20 z-0 hidden md:block">
        <svg viewBox="0 0 800 400" className="w-full h-full text-blue-500 fill-current">
          <circle cx="120" cy="120" r="3" />
          <circle cx="160" cy="140" r="2.5" />
          <circle cx="210" cy="110" r="3.5" />
          <circle cx="260" cy="160" r="2" />
          <circle cx="310" cy="130" r="3" />
          <circle cx="380" cy="90" r="4" />
          <circle cx="430" cy="140" r="2.5" />
          <circle cx="470" cy="110" r="3" />
          <circle cx="520" cy="160" r="3.5" />
          <circle cx="580" cy="120" r="2.5" />
          <circle cx="640" cy="150" r="3" />
          <path
            d="M120,120 Q210,80 380,90 T640,150"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="text-blue-400"
          />
          <path
            d="M160,140 Q310,180 470,110 T580,120"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="3 3"
            className="text-blue-300"
          />
        </svg>
      </div>

      <motion.div
        variants={itemVariants}
        className="w-full px-4 sm:px-6 lg:px-12 max-w-[1380px] mx-auto relative z-10"
      >
        {/* =========================================================================
            HEADER: TITLE, SUBTITLE & TOP-RIGHT STATS + BUTTON
            ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 sm:mb-16">
          {/* Left Column: Eyebrow, Title & Subtitle */}
          <div className="max-w-2xl">
            {/* Eyebrow tag */}
            <div className="text-primary font-bold text-xs tracking-wider uppercase flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-primary inline-block" />
              <span>INDUSTRIES WE SERVE</span>
            </div>

            {/* Main Title */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Specialized Technology for <br className="hidden sm:inline" />
              <span className="text-primary">Key Industries</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 mt-3.5 leading-relaxed max-w-xl">
              We design, build, and scale mission-critical digital systems tailored to the exact regulatory, operational, and customer demands of your sector.
            </p>
          </div>

          {/* Right Column: 2 Stats Badges + Blue Action Button */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center gap-6">
            {/* Stats row */}
            <div className="flex items-center gap-6 sm:gap-8">
              {/* Stat 1: 10+ Industries Served */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-50 text-primary flex items-center justify-center shrink-0 border border-sky-100/80 shadow-xs">
                  <Building2 size={19} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-slate-900 leading-none">
                    10+
                  </span>
                  <span className="text-xs text-slate-500 font-medium mt-1">
                    Industries Served
                  </span>
                </div>
              </div>

              {/* Stat 2: 250+ Happy Clients */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-50 text-primary flex items-center justify-center shrink-0 border border-sky-100/80 shadow-xs">
                  <Users size={19} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-slate-900 leading-none">
                    250+
                  </span>
                  <span className="text-xs text-slate-500 font-medium mt-1">
                    Happy Clients
                  </span>
                </div>
              </div>
            </div>

            {/* Blue Pill Button: Explore All Industries → */}
            <div className="flex items-center gap-3">
              {/* Prev / Next Slider Controls (visible only on mobile/tablet slider) */}
              <div className="flex lg:hidden items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  aria-label="Previous Industry"
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                    canScrollLeft
                      ? "bg-white text-slate-800 border border-slate-200/90 shadow-sm hover:bg-primary hover:text-white hover:border-primary active:scale-95 cursor-pointer"
                      : "bg-slate-100 text-slate-300 border border-slate-200/50 cursor-not-allowed opacity-50"
                  }`}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  aria-label="Next Industry"
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                    canScrollRight
                      ? "bg-white text-slate-800 border border-slate-200/90 shadow-sm hover:bg-primary hover:text-white hover:border-primary active:scale-95 cursor-pointer"
                      : "bg-slate-100 text-slate-300 border border-slate-200/50 cursor-not-allowed opacity-50"
                  }`}
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Blue Pill Button: Explore All Industries → */}
              <Link
                to="/industries/real-estate-technology-solutions"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-primary to-[#0066ff] hover:from-[#0047b3] hover:to-primary text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Explore All Industries</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================================
            8 INDUSTRY CARDS: Desktop = 2 Lines of 4 Cards (Grid 4 cols)
            Mobile = Horizontal Slider
            ========================================================================= */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex lg:grid lg:grid-cols-4 gap-5 sm:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none scrollbar-none scroll-smooth pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
          {industryList.map((ind) => (
            <Link
              key={ind.number}
              to={ind.link}
              className="shrink-0 lg:shrink w-[84vw] max-w-[305px] sm:w-[320px] lg:w-auto lg:max-w-none snap-start group bg-white rounded-2xl overflow-hidden border border-slate-100/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_18px_45px_-5px_rgba(0,82,204,0.14)] hover:border-blue-200/80 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Card Top: Photo Container with Number Badge and Organic Wave Curve */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Number Badge (e.g. 01, 02, etc.) */}
                <span className="absolute top-3 left-3 text-[11px] font-extrabold text-slate-700 bg-white/85 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-xs border border-white/70">
                  {ind.number}
                </span>

                {/* Exact Organic Wavy SVG Curve matching the screenshot */}
                <svg
                  className="absolute -bottom-[1px] inset-x-0 w-full text-white fill-current pointer-events-none"
                  viewBox="0 0 360 40"
                  preserveAspectRatio="none"
                  height="30"
                >
                  <path d="M0,18 C90,36 190,4 360,22 L360,40 L0,40 Z" />
                </svg>
              </div>

              {/* Floating Circular Icon Badge positioned right on the left dip of the wave */}
              <div className="relative -mt-6 ml-5 z-10 w-11 h-11 rounded-full bg-white shadow-md border border-slate-100/90 flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300">
                <ind.icon size={19} strokeWidth={2.2} />
              </div>

              {/* Card Body */}
              <div className="px-5 pb-5 pt-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-extrabold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    {ind.title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-slate-500 mt-2 leading-relaxed line-clamp-3">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary ">
                    Explore Solutions
                  </span>
                  <div className="w-8 h-8 rounded-full bg-sky-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-xs">
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

            </Link>
          ))}
        </div>

        {/* Slider Pagination Dots & Mobile Swipe Hint (mobile/tablet only) */}
        <div className="flex lg:hidden items-center justify-between mt-4 px-1">
          <div className="flex items-center gap-1.5">
            {industryList.map((ind, idx) => (
              <button
                key={ind.title}
                type="button"
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to ${ind.title}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-slate-400 font-medium sm:hidden">
            ← Swipe to explore →
          </span>
        </div>
      </div>
      </motion.div>
    </div>
  );
}
