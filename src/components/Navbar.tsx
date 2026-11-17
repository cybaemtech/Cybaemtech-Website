import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Server,
  Shield,
  ShieldAlert,
  Code2,
  Globe,
  Users,
  TrendingUp,
  BarChart2,
  Linkedin,
  Building2,
  Sparkles,
  BookOpen,
  Briefcase,
  Smartphone,
  Cloud,
  Share2,
  Search,
  Laptop,
  ChevronRight,
  HeartPulse,
  Factory,
  Truck,
  Landmark,
  ShoppingBag,
  GraduationCap,
  Hotel,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import MobileMenu, { AnimatedHamburger } from "./MobileMenu";
import cybaemLogo from "@/assets/cybaem-logo.png";
import { useConsultationModal } from "@/context/ConsultationModalContext";

import softwarePlatformImg from "@/assets/navbar/Software-Platform.png";
import cloudSecurityImg from "@/assets/navbar/cloud-security.png";
import growthRevenueImg from "@/assets/navbar/Growth-renew.png";
import buildingCtImg from "@/assets/navbar/bilding-ct.png";

export const industriesDropdownItems = [
  {
    title: "Real Estate",
    desc: "Proptech, portals, CRM & builder growth.",
    href: "/industries/real-estate-technology-solutions",
    icon: Building2,
  },
  {
    title: "Manufacturing",
    desc: "Smart factory, IoT & industrial automation.",
    href: "/industries/manufacturing-technology-solutions",
    icon: Factory,
  },
  {
    title: "Healthcare",
    desc: "Digital health, hospital & patient care tech.",
    href: "/industries/healthcare-technology-solutions",
    icon: HeartPulse,
  },
  {
    title: "Logistics & Supply Chain",
    desc: "Fleet tracking, warehousing & freight.",
    href: "/industries/logistics-supply-chain-technology-solutions",
    icon: Truck,
  },
  {
    title: "Financial Services",
    desc: "Fintech, secure banking & wealth solutions.",
    href: "/industries/financial-services-technology-solutions",
    icon: Landmark,
  },
  {
    title: "Retail & eCommerce",
    desc: "Omnichannel platforms & commerce growth.",
    href: "/industries/retail-ecommerce-technology-solutions",
    icon: ShoppingBag,
  },
  {
    title: "Education",
    desc: "EdTech, LMS & digital learning platforms.",
    href: "/industries/education-technology-solutions",
    icon: GraduationCap,
  },
  {
    title: "Hospitality",
    desc: "Hotel ops, guest experience & booking tech.",
    href: "/industries/hospitality-technology-solutions",
    icon: Hotel,
  },
];

export const aboutDropdownItems = [
  {
    title: "About Us",
    desc: "Our story, vision, values & mission.",
    href: "/about",
    icon: Building2,
  },
  {
    title: "Life At CybaemTech",
    desc: "Work culture, celebrations & team spirit.",
    href: "/life-at-cybaemtech",
    icon: Sparkles,
  },
  {
    title: "Leadership",
    desc: "Meet our executive and technical leaders.",
    href: "/leadership",
    icon: Users,
  },
  {
    title: "Blog",
    desc: "Tech insights, industry trends & articles.",
    href: "/blog",
    icon: BookOpen,
  },
  {
    title: "Careers",
    desc: "Join our team & build your future with us.",
    href: "/careers",
    icon: Briefcase,
  },
];

export const solutionsColumns = [
  {
    num: "01",
    label: "DIGITAL PRODUCTS",
    title: "Software & Platforms",
    subtitle: "Build, integrate and scale digital platforms for your business.",
    mainHref: "/software-platforms",
    exploreText: "Explore all Software & Platforms",
    image: softwarePlatformImg,
    items: [
      {
        title: "Enterprise Software",
        desc: "Custom software to solve real business challenges.",
        slug: "enterprise-software",
        href: "/software-platforms/enterprise-software",
        icon: Laptop,
      },
      {
        title: "Mobile App Development",
        desc: "iOS & Android apps for modern businesses.",
        slug: "mobile-app-development",
        href: "/software-platforms/mobile-app-development",
        icon: Smartphone,
      },
      {
        title: "Website Designing",
        desc: "Modern, secure and high-performing websites.",
        slug: "web-systems",
        href: "/software-platforms/web-systems",
        icon: Globe,
      },
    ],
  },
  {
    num: "02",
    label: "IT INFRASTRUCTURE",
    title: "Cloud & Security",
    subtitle: "Reliable, secure and scalable IT infrastructure for modern businesses.",
    mainHref: "/cloud-security",
    exploreText: "Explore all Cloud & Security",
    image: cloudSecurityImg,
    items: [
      {
        title: "IT Infrastructure Services",
        desc: "Managed IT, AMC, network & cloud.",
        slug: "it-infrastructure-services",
        href: "/cloud-security/it-infrastructure-services",
        icon: Server,
      },
      {
        title: "Cloud Solutions",
        desc: "Migration, deployment and optimization.",
        slug: "cloud-solutions",
        href: "/cloud-security/cloud-solutions",
        icon: Cloud,
      },
      {
        title: "Cybersecurity",
        desc: "Threat detection, data protection and proactive monitoring.",
        slug: "cybersecurity",
        href: "/cloud-security/cybersecurity",
        icon: Shield,
      },
    ],
  },
  {
    num: "03",
    label: "DIGITAL GROWTH",
    title: "Growth & Revenue",
    subtitle: "Increase visibility, generate quality leads and drive measurable growth.",
    mainHref: "/digital-growth",
    exploreText: "Explore all Growth & Revenue",
    image: growthRevenueImg,
    items: [
      {
        title: "Performance Marketing",
        desc: "Google Ads & Meta Ads management.",
        slug: "performance-marketing",
        href: "/digital-growth/performance-marketing",
        icon: BarChart2,
      },
      {
        title: "SEO, AEO & GEO",
        desc: "Rank higher with AI-powered search strategies.",
        slug: "seo-aeo-geo",
        href: "/digital-growth/seo-aeo-geo",
        icon: Search,
      },
      {
        title: "Social Media Management",
        desc: "Build your brand and engage your audience.",
        slug: "social-media-management",
        href: "/digital-growth/social-media-management",
        icon: Share2,
      },
    ],
  },
];

const Navbar = () => {
  const { openConsultationModal } = useConsultationModal();
  const { pathname } = useLocation();
  const isSolutionsActive =
    pathname.startsWith("/solutions") ||
    pathname.startsWith("/digital-growth") ||
    pathname.startsWith("/digital-marketing") ||
    pathname === "/cloud-solutions" ||
    pathname === "/cybersecurity" ||
    pathname === "/software-platforms" ||
    pathname === "/software-development" ||
    pathname === "/cloud-security" ||
    pathname === "/digital-growth";
  const isAboutActive =
    pathname === "/about" ||
    pathname === "/life-at-cybaemtech" ||
    pathname.startsWith("/leadership") ||
    pathname.startsWith("/blog") ||
    pathname.startsWith("/careers");
  const isIndustriesActive = pathname.startsWith("/industries");

  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const solutionsBtnRef = useRef<HTMLButtonElement>(null);
  const dropdownCardRef = useRef<HTMLDivElement>(null);
  const [caretLeft, setCaretLeft] = useState<number | null>(null);

  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const industriesDropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const aboutTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const industriesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateCaretPosition = useCallback(() => {
    if (solutionsBtnRef.current && dropdownCardRef.current) {
      const btnRect = solutionsBtnRef.current.getBoundingClientRect();
      const cardRect = dropdownCardRef.current.getBoundingClientRect();
      const btnCenter = btnRect.left + btnRect.width / 2;
      setCaretLeft(btnCenter - cardRect.left);
    }
  }, []);

  useEffect(() => {
    if (solutionsOpen) {
      updateCaretPosition();
      const id = requestAnimationFrame(updateCaretPosition);
      const timer = setTimeout(updateCaretPosition, 50);
      window.addEventListener("resize", updateCaretPosition);
      return () => {
        cancelAnimationFrame(id);
        clearTimeout(timer);
        window.removeEventListener("resize", updateCaretPosition);
      };
    }
  }, [solutionsOpen, updateCaretPosition]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSolutionsOpen(true);
    requestAnimationFrame(updateCaretPosition);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 200);
  };

  const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutOpen(true);
  };

  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => setAboutOpen(false), 200);
  };

  const handleIndustriesEnter = () => {
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    setIndustriesOpen(true);
  };

  const handleIndustriesLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => setIndustriesOpen(false), 200);
  };

  const navItems = [
    {label:"Home",href:"/",isRoute:true},
    { label: "Our Solutions", href: "#solutions", hasMega: true },
    { label: "Industries", href: "/industries", hasIndustriesDropdown: true },
    // { label: "Portfolio", href: "/portfolio", isRoute: true },
    { label: "About Us", href: "/about", hasAboutDropdown: true },
    { label: "Contact Us", href: "/contact", isRoute: true },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-500 ${scrolled ? "border-b border-border/15" : ""}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "py-3 sm:py-4" : "py-4 sm:py-6"}`}
          >
            <Link to="/" className="flex items-center">
              <img
                src={cybaemLogo}
                alt="Cybaem Tech"
                className="h-9 sm:h-11 w-auto"
                width={180}
                height={44}
              />
            </Link>

            {/* Right side: Desktop nav + Enquire button */}
            <div className="flex items-center gap-6 lg:gap-8">
              {/* Desktop nav */}
              <div className="hidden md:flex items-center gap-6 lg:gap-7">
              {navItems.map((item) =>
                item.hasMega ? (
                  <div
                    key={item.label}
                    className="static"
                    ref={dropdownRef}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                  >
                    <button
                      ref={solutionsBtnRef}
                      className={`text-base transition-all duration-200 flex items-center gap-1.5 ${solutionsOpen
                        ? "text-primary font-semibold px-2 py-1.5"
                        : isSolutionsActive
                          ? "text-primary font-semibold px-2 py-1.5"
                          : "text-muted-foreground hover:text-primary font-medium px-2 py-1.5"
                        }`}
                    >
                      {item.label}
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        className={`mt-0.5 transition-transform duration-200 ${solutionsOpen ? "rotate-180 text-primary" : ""
                          }`}
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {solutionsOpen && (
                        <div
                          className={`absolute left-1/2 -translate-x-1/2 z-50 pointer-events-auto ${scrolled ? "top-[calc(100%-8px)] pt-2" : "top-[calc(100%-16px)] pt-2"
                            }`}
                        >
                          {/* Caret pointing towards Our Solutions button */}
                          <div
                            className="absolute top-0.5 w-3.5 h-3.5 bg-white rotate-45 border-t border-l border-slate-200/80 z-20 shadow-[-2px_-2px_4px_rgba(0,0,0,0.03)]"
                            style={
                              caretLeft !== null
                                ? { left: `${caretLeft}px`, transform: "translateX(-50%) rotate(45deg)" }
                                : { left: "280px", transform: "translateX(-50%) rotate(45deg)" }
                            }
                          />

                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 28,
                            }}
                          >
                            <div
                              ref={dropdownCardRef}
                              className="bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(15,35,60,0.18),0_10px_25px_-5px_rgba(15,35,60,0.08)] border border-slate-100 p-6 sm:p-7 w-[96vw] max-w-[1240px] text-slate-900 relative z-10"
                            >
                              <div className="flex divide-x divide-slate-100 w-full">
                                {solutionsColumns.map((col, idx) => (
                                  <div
                                    key={col.label}
                                    className={`flex-1 min-w-0 flex flex-col justify-between ${idx === 0
                                      ? "pr-6"
                                      : idx === 1
                                        ? "px-6"
                                        : "px-6"
                                      }`}
                                  >
                                    <div>
                                      {/* Category Header */}
                                      <div className="flex items-center justify-between mb-2">
                                        <div className="text-xs font-semibold flex items-center gap-1.5 font-mono text-slate-500">
                                          <span>{col.num}</span>
                                          <span className="w-6 h-[1.5px] inline-block bg-slate-200" />
                                        </div>
                                        <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-500 whitespace-nowrap">
                                          {col.label}
                                        </span>
                                      </div>

                                      {/* Column Title, Arrow & Subtitle */}
                                      <div className="mb-4">
                                        <div className="flex items-center gap-2">
                                          <h3 className="font-display text-[19px] font-bold text-slate-900 leading-tight whitespace-nowrap">
                                            {col.title}
                                          </h3>
                                          
                                        </div>
                                        <p className="text-xs text-slate-500 leading-relaxed mt-1.5 line-clamp-2">
                                          {col.subtitle}
                                        </p>
                                      </div>

                                      {/* Service items */}
                                      <div className="space-y-2">
                                        {col.items.map((it) => (
                                          <Link
                                            key={it.title}
                                            to={it.href}
                                            onClick={() => setSolutionsOpen(false)}
                                            className="group flex items-center justify-between p-2.5 px-3 rounded-2xl border border-slate-100/90 bg-[#f8fafc]/70 hover:bg-white hover:border-slate-200 hover:shadow-xs transition-all duration-200"
                                          >
                                            <div className="flex items-center gap-2.5 min-w-0">
                                              <div className="w-8 h-8 rounded-xl bg-sky-50 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#e0edff] transition-all">
                                                <it.icon size={16} />
                                              </div>
                                              <div className="min-w-0 pr-1">
                                                <span className="text-[13px] font-semibold text-slate-900 group-hover:text-primary transition-colors block leading-tight truncate">
                                                  {it.title}
                                                </span>
                                                <span className="text-[11px] text-slate-500 block leading-snug truncate mt-0.5">
                                                  {it.desc}
                                                </span>
                                              </div>
                                            </div>
                                            <ChevronRight
                                              size={14}
                                              className="text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5"
                                            />
                                          </Link>
                                        ))}
                                      </div>
                                    </div>

                                    {/* Footer link */}
                                    <div className="mt-4 pt-3 flex items-center justify-between border-t border-slate-100">
                                      <Link
                                        to={col.mainHref}
                                        onClick={() => setSolutionsOpen(false)}
                                        className="text-xs font-semibold text-[#0a2540] hover:text-primary flex items-center gap-1.5 transition-colors group"
                                      >
                                        <span className="truncate">{col.exploreText}</span>
                                        <ArrowRight
                                          size={13}
                                          className="group-hover:translate-x-0.5 transition-transform shrink-0"
                                        />
                                      </Link>
                                      <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5 shrink-0 ml-2">
                                        <span className="w-4 h-[1px] bg-slate-200 inline-block" />
                                        <span>{col.num}</span>
                                      </div>
                                    </div>
                                  </div>
                                ))}

                                {/* Column 4: Turning Ideas into Impact (Portfolio promo card) */}
                                <div className="w-[245px] shrink-0 pl-6 flex flex-col">
                                  <div className="relative rounded-2xl overflow-hidden flex flex-col justify-between p-6 bg-white flex-1 min-h-[360px] group border border-slate-100 shadow-xs">
                                    {/* Background image */}
                                    <img
                                      src={buildingCtImg}
                                      alt="Turning Ideas into Impact"
                                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Gradient overlay for readability */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-transparent" />

                                    {/* Top content */}
                                    <div className="relative z-10">
                                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-slate-700 uppercase">
                                        <span>OUR PORTFOLIO</span>
                                        <span className="w-5 h-[1.5px] bg-slate-400 inline-block" />
                                      </div>

                                      <h3 className="font-display text-2xl font-extrabold text-slate-900 leading-tight mt-3">
                                        Turning Ideas <br />
                                        into <span className="text-primary">Impact</span>
                                      </h3>

                                      <p className="text-xs text-slate-600 leading-relaxed mt-2.5">
                                        Discover our work and see how we deliver real results across industries.
                                      </p>

                                      <Link
                                        to="/portfolio"
                                        onClick={() => setSolutionsOpen(false)}
                                        className="inline-flex items-center gap-2.5 mt-5 group/btn"
                                      >
                                        <div className="w-8 h-8 rounded-full bg-[#0a2540] group-hover/btn:bg-primary text-white flex items-center justify-center transition-colors shadow-xs shrink-0">
                                          <ArrowRight
                                            size={14}
                                            className="group-hover/btn:translate-x-0.5 transition-transform"
                                          />
                                        </div>
                                        <span className="text-xs font-bold text-slate-900 group-hover/btn:text-primary transition-colors">
                                          View Portfolio
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.hasAboutDropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    ref={aboutDropdownRef}
                    onMouseEnter={handleAboutEnter}
                    onMouseLeave={handleAboutLeave}
                  >
                    <button
                      className={`text-base transition-all duration-200 flex items-center gap-1.5 ${aboutOpen
                        ? "text-primary font-semibold px-2 py-1.5"
                        : isAboutActive
                          ? "text-primary font-semibold px-2 py-1.5"
                          : "text-muted-foreground hover:text-primary font-medium px-2 py-1.5"
                        }`}
                    >
                      {item.label}
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        className={`mt-0.5 transition-transform duration-200 ${aboutOpen ? "rotate-180 text-primary" : ""
                          }`}
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {aboutOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 pointer-events-auto">
                          {/* Caret pointing towards About Us button */}
                          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white rotate-45 border-t border-l border-slate-200/80 z-20 shadow-[-2px_-2px_4px_rgba(0,0,0,0.03)]" />

                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 28,
                            }}
                          >
                            <div className="bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(15,35,60,0.18),0_10px_25px_-5px_rgba(15,35,60,0.08)] border border-slate-100 p-3 sm:p-3.5 min-w-[340px] max-w-[360px] text-slate-900 relative z-10">
                              <div className="space-y-1.5">
                                {aboutDropdownItems.map((it) => (
                                  <Link
                                    key={it.title}
                                    to={it.href}
                                    onClick={() => setAboutOpen(false)}
                                    className="group flex items-center justify-between p-2.5 px-3 rounded-2xl border border-slate-100/90 bg-[#f8fafc]/70 hover:bg-white hover:border-slate-200 hover:shadow-xs transition-all duration-200"
                                  >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                      <div className="w-8 h-8 rounded-xl bg-sky-50 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#e0edff] transition-all">
                                        <it.icon size={16} />
                                      </div>
                                      <div className="min-w-0 pr-1">
                                        <span className="text-[13px] font-semibold text-slate-900 group-hover:text-primary transition-colors block leading-tight truncate">
                                          {it.title}
                                        </span>
                                        <span className="text-[11px] text-slate-500 block leading-snug truncate mt-0.5">
                                          {it.desc}
                                        </span>
                                      </div>
                                    </div>
                                    <ChevronRight
                                      size={14}
                                      className="text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-1"
                                    />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.hasIndustriesDropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    ref={industriesDropdownRef}
                    onMouseEnter={handleIndustriesEnter}
                    onMouseLeave={handleIndustriesLeave}
                  >
                    <button
                      className={`text-base transition-all duration-200 flex items-center gap-1.5 ${industriesOpen
                        ? "text-primary font-semibold px-2 py-1.5"
                        : isIndustriesActive
                          ? "text-primary font-semibold px-2 py-1.5"
                          : "text-muted-foreground hover:text-primary font-medium px-2 py-1.5"
                        }`}
                    >
                      {item.label}
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        className={`mt-0.5 transition-transform duration-200 ${industriesOpen ? "rotate-180 text-primary" : ""
                          }`}
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {industriesOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 pointer-events-auto">
                          {/* Caret pointing towards Industries button */}
                          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white rotate-45 border-t border-l border-slate-200/80 z-20 shadow-[-2px_-2px_4px_rgba(0,0,0,0.03)]" />

                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 28,
                            }}
                          >
                            <div className="bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(15,35,60,0.18),0_10px_25px_-5px_rgba(15,35,60,0.08)] border border-slate-100 p-4 sm:p-5 min-w-[620px] max-w-[660px] text-slate-900 relative z-10">
                              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 px-1">
                                <div>
                                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-500 block">
                                    INDUSTRIES WE SERVE
                                  </span>
                                  <h4 className="text-sm font-bold text-slate-900">
                                    Specialized Technology & Digital Solutions
                                  </h4>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setIndustriesOpen(false);
                                    openConsultationModal();
                                  }}
                                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 cursor-pointer"
                                >
                                  <span>Custom Solution</span>
                                  <ArrowRight size={12} />
                                </button>
                              </div>

                              <div className="grid grid-cols-2 gap-2">
                                {industriesDropdownItems.map((it) => (
                                  <Link
                                    key={it.title}
                                    to={it.href}
                                    onClick={() => setIndustriesOpen(false)}
                                    className="group flex items-center justify-between p-2.5 px-3 rounded-2xl border border-slate-100/90 bg-[#f8fafc]/70 hover:bg-white hover:border-slate-200 hover:shadow-xs transition-all duration-200"
                                  >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                      <div className="w-8 h-8 rounded-xl bg-sky-50 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#e0edff] transition-all">
                                        <it.icon size={16} />
                                      </div>
                                      <div className="min-w-0 pr-1">
                                        <span className="text-[13px] font-semibold text-slate-900 group-hover:text-primary transition-colors block leading-tight truncate">
                                          {it.title}
                                        </span>
                                        <span className="text-[11px] text-slate-500 block leading-snug truncate mt-0.5">
                                          {it.desc}
                                        </span>
                                      </div>
                                    </div>
                                    <ChevronRight
                                      size={14}
                                      className="text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-1"
                                    />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (item as any).isRoute ? (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    end={item.href === "/"}
                    className={({ isActive }) =>
                      `text-base font-medium px-2 py-1.5 transition-colors duration-200 ${
                        isActive
                          ? "text-primary font-semibold"
                          : "text-muted-foreground hover:text-primary"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium px-2 py-1.5 text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ),
              )}
            </div>

            <div className="flex items-center gap-3">
              <MagneticButton>
                <button
                  type="button"
                  onClick={openConsultationModal}
                  className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-primary text-white rounded-xl hover:bg-primary transition-colors cursor-pointer shadow-sm"
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={15} />
                </button>
              </MagneticButton>
              <AnimatedHamburger
                isOpen={mobileOpen}
                toggle={() => setMobileOpen(!mobileOpen)}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.15, y: y * 0.15 });
  };

  const handleLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

export default Navbar;
