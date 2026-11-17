import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Cloud,
  TrendingUp,
  Layers,
  Smartphone,
  Globe,
  ShieldCheck,
  Server,
  Target,
  Share2,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

// Hero images
import swHero from "@/assets/services/Software & Platforms/hero-bg.png";
import cloudHero from "@/assets/services/CLOUD & SECURITY/hero-bg.png";
import growthHero from "@/assets/digital-growth-hero.png";

// Sub-section images from 'our solutions' folder
import swSub1 from "@/assets/our solutions/Software & Platforms/1.png";
import swSub2 from "@/assets/our solutions/Software & Platforms/2.png";
import swSub3 from "@/assets/our solutions/Software & Platforms/3.png";

import cloudSub1 from "@/assets/our solutions/Cloud & Security/1.png";
import cloudSub2 from "@/assets/our solutions/Cloud & Security/2.png";
import cloudSub3 from "@/assets/our solutions/Cloud & Security/3.png";

// Growth & Revenue sub-section images from solutions/growth-revenue page
import googleAdsImg from "@/assets/performance marketing/google-ads.png";
import seoImg from "@/assets/performance marketing/SEO_AGO.png";
import socialImg from "@/assets/performance marketing/Social-media-mng.png";

// Illustration below left side section
import leftIllustration from "@/assets/our solutions/img.png";

// Top right glass building background texture
import buildingCtImg from "@/assets/navbar/bilding-ct.png";

interface SubSection {
  step: string;
  title: string;
  desc: string;
  image: string;
  link: string;
  icon: typeof Code2;
}

interface ServiceCategory {
  id: string;
  step: string;
  navTitle: string;
  navSubtitle: string;
  icon: typeof Code2;
  tag: string;
  heroTitlePrefix: string;
  heroTitleHighlight: string;
  heroDesc: string;
  ctaText: string;
  ctaLink: string;
  heroImage: string;
  subSections: SubSection[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "software-platforms",
    step: "01",
    navTitle: "Software & Platforms",
    navSubtitle: "Build digital solutions that scale your business.",
    icon: Code2,
    tag: "SOFTWARE & PLATFORMS",
    heroTitlePrefix: "Build Digital Solutions That",
    heroTitleHighlight: "Scale",
    heroDesc: "Custom software, web and mobile platforms to streamline operations and drive growth.",
    ctaText: "Explore Software Solutions",
    ctaLink: "/software-platforms",
    heroImage: swHero,
    subSections: [
      {
        step: "01",
        title: "Enterprise Software",
        desc: "Scalable, secure, and high-performance enterprise applications.",
        image: swSub1,
        link: "/software-platforms/enterprise-software",
        icon: Layers,
      },
      {
        step: "02",
        title: "Mobile App Development",
        desc: "Native iOS & Android apps with modern and intuitive experiences.",
        image: swSub2,
        link: "/software-platforms/mobile-app-development",
        icon: Smartphone,
      },
      {
        step: "03",
        title: "Custom Web Systems",
        desc: "Modern and secure web applications tailored to your business.",
        image: swSub3,
        link: "/software-platforms/web-systems",
        icon: Globe,
      },
    ],
  },
  {
    id: "cloud-security",
    step: "02",
    navTitle: "Cloud & Security",
    navSubtitle: "Reliable infrastructure for what's next.",
    icon: Cloud,
    tag: "CLOUD & SECURITY",
    heroTitlePrefix: "Enterprise Cloud & Resilient",
    heroTitleHighlight: "Security",
    heroDesc: "Modernize infrastructure, automate compliance, and safeguard critical enterprise assets 24/7.",
    ctaText: "Explore Cloud Solutions",
    ctaLink: "/cloud-security",
    heroImage: cloudHero,
    subSections: [
      {
        step: "01",
        title: "IT Infrastructure Services",
        desc: "Managed IT, AMC, network & cloud.",
        image: cloudSub1,
        link: "/cloud-security/it-infrastructure-services",
        icon: Server,
      },
      {
        step: "02",
        title: "Cloud Solutions",
        desc: "Migration, deployment and optimization.",
        image: cloudSub2,
        link: "/cloud-security/cloud-solutions",
        icon: Cloud,
      },
      {
        step: "03",
        title: "Cybersecurity",
        desc: "Threat detection, data protection and proactive monitoring.",
        image: cloudSub3,
        link: "/cloud-security/cybersecurity",
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: "growth-revenue",
    step: "03",
    navTitle: "Growth & Revenue",
    navSubtitle: "Drive visibility and measurable growth.",
    icon: TrendingUp,
    tag: "GROWTH & REVENUE",
    heroTitlePrefix: "Turn Digital Presence into Real",
    heroTitleHighlight: "Business Growth",
    heroDesc: "We help businesses attract, engage, and convert the right audience through performance marketing, SEO, and social media strategies that deliver measurable results.",
    ctaText: "Explore Growth Solutions",
    ctaLink: "/digital-growth",
    heroImage: growthHero,
    subSections: [
      {
        step: "01",
        title: "Performance Marketing",
        desc: "Google Ads & Meta Ads management built for qualified leads and real ROI.",
        image: googleAdsImg,
        link: "/digital-growth/performance-marketing",
        icon: Target,
      },
      {
        step: "02",
        title: "SEO, AEO & GEO",
        desc: "Rank on Google, get cited in AI answers, and get found locally.",
        image: seoImg,
        link: "/digital-growth/seo-aeo-geo",
        icon: Search,
      },
      {
        step: "03",
        title: "Social Media Management",
        desc: "Build active presence, consistent branding, and engaging multi-platform content.",
        image: socialImg,
        link: "/digital-growth/social-media-management",
        icon: Share2,
      },
    ],
  },
];

const SolutionsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = serviceCategories[activeIndex];
  const sectionRef = useRef<HTMLElement>(null);

  // Optional subtle auto-rotate every 10s if user is inactive
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % serviceCategories.length);
    }, 12000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="relative pt-8 pb-16 lg:pt-12 lg:pb-20 bg-gradient-to-b from-[#f8fbff] via-[#ffffff] to-[#f4f8fd] overflow-hidden select-none"
    >
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

      {/* Dynamic 3D / Glass Ribbon Waves in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial glow centers */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-300/15 via-sky-200/20 to-blue-400/10 rounded-full blur-[120px]" />
        <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px]" />

        {/* Ambient Swooshing Glass Ribbon SVGs */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40 mix-blend-multiply"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 250C300 120 600 400 1000 180C1250 40 1450 150 1600 200"
            stroke="url(#blueWave1)"
            strokeWidth="70"
            strokeLinecap="round"
            className="opacity-25"
          />
          <path
            d="M-50 400C350 250 750 550 1150 300C1350 180 1500 220 1650 260"
            stroke="url(#blueWave2)"
            strokeWidth="35"
            strokeLinecap="round"
            className="opacity-30"
          />
          <path
            d="M100 800C450 680 850 820 1250 640C1450 550 1550 580 1700 600"
            stroke="url(#blueWave1)"
            strokeWidth="90"
            strokeLinecap="round"
            className="opacity-20"
          />
          <defs>
            <linearGradient id="blueWave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="blueWave2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="primary" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10 max-w-[1440px]">

        {/* TOP HEADER */}
        <div className="mb-6 lg:mb-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-slate-400" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-500">
                OUR SERVICES
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#0a1128] leading-[1.12] tracking-tight">
              Integrated Solutions for a{" "}
              <br /> <span className="text-primary">Stronger Tomorrow</span>
            </h2>
          </div>
        </div>

        {/* MAIN BODY: 3 LEFT SECTIONS + CENTER/RIGHT SHOWCASE */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* LEFT COLUMN: 3 NAVIGATION SECTIONS (ALIGNED TO TOP) + ILLUSTRATION */}
          <div className="lg:col-span-4 flex flex-col gap-4 relative">
            {/* 3 Nav Items Container */}
            <div className="flex flex-col gap-3.5 relative">
              {/* Connecting subtle vertical line (Desktop only) */}
              <div className="absolute left-[26px] top-6 bottom-6 w-[2px] bg-blue-100 hidden sm:block pointer-events-none" />

              {serviceCategories.map((cat, idx) => {
                const isActive = idx === activeIndex;
                const Icon = cat.icon;

                return (
                  <div key={cat.id} className="relative flex items-center gap-3.5 group">
                    {/* Step Number Badge on Timeline */}
                    <button
                      onClick={() => setActiveIndex(idx)}
                      type="button"
                      className={`w-9 h-9 rounded-full font-bold text-xs flex items-center justify-center shrink-0 z-10 transition-all duration-300 cursor-pointer ${isActive
                        ? "bg-primary text-white shadow-[0_4px_14px_rgba(0,82,204,0.4)] scale-105"
                        : "bg-white border border-slate-200 text-slate-400 group-hover:border-blue-300 group-hover:text-slate-600"
                        }`}
                      title={cat.navTitle}
                    >
                      {cat.step}
                    </button>

                    {/* Nav Card */}
                    <button
                      onClick={() => setActiveIndex(idx)}
                      type="button"
                      className={`flex-1 text-left rounded-[22px] p-3.5 sm:p-4 flex items-center gap-3.5 transition-all duration-300 cursor-pointer ${isActive
                        ? "bg-gradient-to-r from-blue-50/95 via-sky-50/70 to-white/95 border border-blue-200/90 shadow-[0_8px_24px_rgba(0,82,204,0.1)] backdrop-blur-sm"
                        : "bg-white/80 hover:bg-white border border-slate-200/70 hover:border-blue-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-md"
                        }`}
                    >
                      {/* Icon Circle */}
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isActive
                          ? "bg-white text-primary shadow-sm border border-blue-100"
                          : "bg-slate-50 border border-slate-100 text-slate-500 group-hover:text-primary group-hover:bg-blue-50/60"
                          }`}
                      >
                        <Icon size={20} strokeWidth={2} />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`font-display font-bold text-sm sm:text-[16px] leading-tight truncate transition-colors ${isActive ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
                            }`}
                        >
                          {cat.navTitle}
                        </h3>
                        <p className="text-slate-500 text-[11px] sm:text-xs mt-0.5 leading-snug line-clamp-1">
                          {cat.navSubtitle}
                        </p>
                      </div>

                      {/* Action Arrow */}
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isActive
                          ? "bg-primary text-white shadow-sm"
                          : "bg-slate-100 group-hover:bg-primary text-slate-400 group-hover:text-white"
                          }`}
                      >
                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Illustration below left side section */}
            <div className="hidden lg:flex w-full relative rounded-2xl overflow-hidden items-center justify-center pt-2">
              <img
                src={leftIllustration}
                alt="Solutions illustration"
                className="w-full h-auto max-h-[360px] object-contain drop-shadow-sm transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT SHOWCASE + 3 SUB-SECTIONS */}
          <div className="lg:col-span-8">
            <div className="relative rounded-[28px] bg-white/95 backdrop-blur-md border border-blue-100/90 shadow-[0_16px_40px_-10px_rgba(0,82,204,0.07)] p-5 sm:p-7 lg:p-8 overflow-hidden">

              {/* Smooth Background Gradient for Showcase */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/80 to-sky-50/20 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative z-10"
                >
                  {/* TOP SHOWCASE: TEXT + HERO IMAGE */}
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                    {/* Left: Headline, Description, Button */}
                    <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col items-start pt-3 sm:pt-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-3.5 h-[2px] bg-primary" />
                        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-primary">
                          {active.tag}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0a1128] leading-[1.15] tracking-tight mb-3">
                        {active.heroTitlePrefix}{" "}
                        <span className="text-primary">{active.heroTitleHighlight}</span>
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                        {active.heroDesc}
                      </p>

                      <Link
                        to={active.ctaLink}
                        className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-primary hover:bg-[#0041a8] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
                      >
                        <span>{active.ctaText}</span>
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>

                    {/* Right: Featured Hero Image Attached to Top-Right Corner */}
                    <div className="order-1 lg:order-2 lg:col-span-7 relative flex justify-center lg:justify-end items-start mt-0 lg:-mt-8 lg:-mr-8">
                      <div className="relative w-full max-w-[500px] lg:max-w-none flex justify-center lg:justify-end overflow-hidden rounded-2xl lg:rounded-none lg:rounded-bl-[28px] shadow-sm">
                        <img
                          src={active.heroImage}
                          alt={active.navTitle}
                          className="w-full h-auto max-h-[280px] sm:max-h-[300px] lg:max-h-[300px] xl:max-h-[325px] object-cover object-center lg:object-right-top transition-transform duration-500 hover:scale-[1.02]"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM: 3 SUB-SECTIONS CARDS (MATCHING IMG1 / INDUSTRY CARDS THEME) */}
                  <div className="grid sm:grid-cols-3 gap-3 sm:gap-3.5 lg:gap-4 sm:-mx-1 lg:-mx-2 pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-blue-100/70">
                    {active.subSections.map((sub) => (
                      <Link
                        key={sub.step + sub.title}
                        to={sub.link}
                        className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 h-44 sm:h-48 lg:h-[215px] flex flex-col justify-end p-4 sm:p-4.5 cursor-pointer border border-slate-100/80"
                      >
                        {/* Clear background photo with smooth hover zoom */}
                        <img
                          src={sub.image}
                          alt={sub.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                          loading="lazy"
                        />

                        {/* Gradient strictly at bottom behind text for legibility */}
                        <div className="absolute inset-x-0 bottom-0 pt-24 pb-4 px-4 sm:px-4.5 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none group-hover:from-black/95 group-hover:via-black/70 transition-all duration-300" />

                        {/* Card Content: Heading by default, heading + description on hover */}
                        <div className="relative z-10 w-full">
                          <h4 className="font-display text-sm sm:text-[15px] lg:text-base font-extrabold text-white leading-snug drop-shadow-md">
                            {sub.title}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-slate-200 leading-relaxed pt-1 sm:pt-0 sm:max-h-0 sm:opacity-0 sm:overflow-hidden sm:group-hover:max-h-20 sm:group-hover:opacity-100 sm:group-hover:pt-1.5 transition-all duration-300 ease-in-out line-clamp-2">
                            {sub.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;
