import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { itInfrastructureServicesSeoData } from "@/data/seo/itInfrastructureServicesSeo";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Cloud,
  Shield,
  ShieldCheck,
  Server,
  Settings,
  Mail,
  Headphones,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Search,
  Lightbulb,
  Zap,
  BarChart2,
  Factory,
  Heart,
  GraduationCap,
  ShoppingCart,
  Building2,
  Truck,
  Briefcase,
  Cpu,
  Monitor,
  Activity,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  FileText,
  Globe2,
  Check,
  Lock,
} from "lucide-react";

// Existing images
import partnerAws from "@/assets/partners/aws.svg";
import partnerAzure from "@/assets/partners/azure.svg";
import partnerHp from "@/assets/partners/hp.svg";
import partnerLenovo from "@/assets/partners/lenovo.svg";
import partnerFortinet from "@/assets/partners/fortinet.svg";

import itInfraHeaderVideo from "@/assets/IT infra header.mp4";

// IT Infra Section Images
import middleImg1 from "@/assets/IT Infra/middle/1.png";
import middleImg2 from "@/assets/IT Infra/middle/2.png";
import middleImg3 from "@/assets/IT Infra/middle/3.png";
import middleImg4 from "@/assets/IT Infra/middle/4.png";
import middleImg5 from "@/assets/IT Infra/middle/5.png";
import middleImg6 from "@/assets/IT Infra/middle/6.png";

import sectionImg1 from "@/assets/IT Infra/sections/1.png";
import sectionImg2 from "@/assets/IT Infra/sections/2.png";
import sectionImg3 from "@/assets/IT Infra/sections/3.png";

// --- Partners List ---
const partnersList = [
  { name: "AWS", logo: partnerAws, isSvg: true },
  { name: "Microsoft Azure", logo: partnerAzure, isSvg: true },
  { name: "HP", logo: partnerHp, isSvg: true },
  { name: "Lenovo", logo: partnerLenovo, isSvg: true },
  { name: "Cisco", text: "CISCO" },
  { name: "VMware", text: "vmware" },
  { name: "Fortinet", logo: partnerFortinet, isSvg: true },
];

// --- 6 Core Services ---
const coreServices = [
  {
    title: "Cloud Solutions",
    icon: Cloud,
    image: middleImg1,
    link: "/cloud-security/cloud-solutions",
    desc: "Scalable, secure and cost-effective cloud solutions to accelerate your business growth.",
    bullets: [
      "Cloud Migration & Setup",
      "Multi-Cloud Support (AWS, Azure, GCP)",
      "Scalable Infrastructure",
      "Cloud Cost Optimization",
    ],
  },
  {
    title: "Network & Cybersecurity",
    icon: ShieldCheck,
    image: middleImg2,
    link: "/cloud-security/cybersecurity",
    desc: "Protect your business with robust network infrastructure and advanced security solutions.",
    bullets: [
      "Network Design & Implementation",
      "Firewall & Threat Protection",
      "24/7 Security Monitoring",
      "Compliance & Risk Management",
    ],
  },
  {
    title: "Infrastructure Setup",
    icon: Server,
    image: middleImg3,
    link: "#contact",
    desc: "Design, deploy and manage reliable IT infrastructure tailored to your business needs.",
    bullets: [
      "Server Setup & Configuration",
      "Storage & Backup Systems",
      "Virtualization & Data Center Setup",
      "High Availability & Disaster Recovery",
    ],
  },
  {
    title: "Managed IT Services",
    icon: Settings,
    image: middleImg4,
    link: "#contact",
    desc: "End-to-end IT management to keep your systems running smoothly, securely and efficiently.",
    bullets: [
      "24/7 Helpdesk Support",
      "Proactive Monitoring",
      "IT Infrastructure Management",
      "Hardware & Software Support",
    ],
  },
  {
    title: "Email Hosting",
    icon: Mail,
    image: middleImg5,
    link: "#contact",
    desc: "Secure, reliable and professional email hosting for seamless business communication.",
    bullets: [
      "Custom Domain Email",
      "Anti-Spam & Anti-Virus Protection",
      "Large Mailbox Storage",
      "Calendar & Collaboration Tools",
    ],
  },
  {
    title: "On-Premises & Remote Support",
    icon: Headphones,
    image: middleImg6,
    link: "#contact",
    desc: "Get expert support for your on-premises infrastructure and remote IT environments whenever you need it.",
    bullets: [
      "On-Site & Remote Assistance",
      "Troubleshooting & Issue Resolution",
      "User & Device Support",
      "Flexible Support Plans",
    ],
  },
];

// --- 4 Approach Steps ---
const processSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "Understand your goals, challenges and requirements.",
    icon: Search,
  },
  {
    step: "02",
    title: "Design",
    desc: "Create a tailored solution and roadmap.",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "Deliver",
    desc: "Implement with best practices and minimal disruption.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Optimize",
    desc: "Continuously monitor, support and improve.",
    icon: TrendingUp,
  },
];

// --- 8 Industries ---
const industriesList = [
  { name: "Manufacturing", icon: Factory, image: "/images/it-infra.webp" },
  { name: "Healthcare", icon: Heart, image: "/images/about-team-3.avif" },
  { name: "Education", icon: GraduationCap, image: "/images/education.webp" },
  { name: "Retail", icon: ShoppingCart, image: "/images/web-ecommerce.avif" },
  { name: "Financial Services", icon: Building2, image: "/images/about-datacenter.avif" },
  { name: "Logistics", icon: Truck, image: "/images/it-infra.png" },
  { name: "Professional Services", icon: Briefcase, image: "/images/about-team-1.webp" },
  { name: "Technology", icon: Cpu, image: "/images/cybersecurity/service-network.png" },
];

// --- FAQ List ---
const faqsList = [
  {
    question: "What IT infrastructure services do you provide?",
    answer:
      "We provide end-to-end enterprise IT infrastructure solutions including server architecture, enterprise network design and routing, cloud setup (AWS, Azure, M365), high-availability storage, proactive 24/7 monitoring, IT helpdesk support, and cybersecurity governance.",
  },
  {
    question: "Can you provide both infrastructure management and staff augmentation?",
    answer:
      "Yes. Cybaem Tech offers integrated solutions where you can combine fully managed infrastructure services with dedicated onsite or remote IT engineers, systems administrators, cloud architects, and helpdesk specialists deployed directly to augment your team.",
  },
  {
    question: "How does IT staff augmentation work?",
    answer:
      "We understand your exact technical requirements and company culture, then provide pre-vetted engineers within 48 to 72 hours. You manage their daily tasks while we take care of payroll, benefits, hardware provisioning, compliance, and ongoing skill development.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve enterprises across Manufacturing, Healthcare, Financial Services, Retail & E-Commerce, Logistics, Education, Technology, and Professional Services with industry-compliant, high-performance IT solutions.",
  },
];

export default function ITInfrastructure() {
  const { openConsultationModal } = useConsultationModal();

  // Mobile services carousel state (3 to 4 second timer)
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [isServicesPaused, setIsServicesPaused] = useState(false);
  const [servicesTouchStart, setServicesTouchStart] = useState<number | null>(null);

  useEffect(() => {
    if (isServicesPaused) return;
    const timer = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % coreServices.length);
    }, 3500); // 3.5 second timer (between 3 to 4s)
    return () => clearInterval(timer);
  }, [isServicesPaused]);

  const handleServicesTouchStart = (e: React.TouchEvent) => {
    setServicesTouchStart(e.targetTouches[0].clientX);
  };

  const handleServicesTouchEnd = (e: React.TouchEvent) => {
    if (servicesTouchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = servicesTouchStart - touchEnd;
    if (diff > 45) {
      setActiveServiceIndex((prev) => (prev + 1) % coreServices.length);
    } else if (diff < -45) {
      setActiveServiceIndex((prev) => (prev - 1 + coreServices.length) % coreServices.length);
    }
    setServicesTouchStart(null);
  };

  const handlePrevService = () => {
    setActiveServiceIndex((prev) => (prev - 1 + coreServices.length) % coreServices.length);
  };

  const handleNextService = () => {
    setActiveServiceIndex((prev) => (prev + 1) % coreServices.length);
  };

  const scrollToServices = () => {
    document.getElementById("technology-services")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentMobileService = coreServices[activeServiceIndex];
  const MobileIconComponent = currentMobileService.icon;

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans">
      <SEOHead {...itInfrastructureServicesSeoData} />
      <Navbar />

      {/* --- HERO SECTION (White Background with Video on Right) --- */}
      <section className="relative overflow-hidden bg-white text-slate-900 pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-slate-100">
        {/* Soft Background Radial Light */}
        <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-blue-50/70 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-40 left-10 w-[450px] h-[450px] bg-sky-50/80 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
                  ENTERPRISE TECHNOLOGY SERVICES
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.14] mb-6">
                IT Infrastructure, <br className="hidden sm:inline" /> Security & Talent for <br className="hidden sm:inline" />
                <span className="text-primary font-extrabold italic">Business Growth</span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
                We design, manage and secure modern IT infrastructure and provide
                skilled technology professionals to help your business grow faster,
                smarter and more secure.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3.5 rounded-lg shadow-lg shadow-blue-600/25 transition-all text-sm group"
                >
                  Explore Our Services
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button
                  onClick={openConsultationModal}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 font-medium px-6 py-3.5 rounded-lg shadow-xs transition-all text-sm"
                >
                  Book a Consultation
                </button>
              </div>

              {/* Trust Capabilities Bar */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-50 text-primary shrink-0">
                    <Headphones size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">24/7</span>
                    <span className="text-[11px] text-slate-500">IT Support</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-50 text-primary shrink-0">
                    <Shield size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">99.9%</span>
                    <span className="text-[11px] text-slate-500">Uptime Target</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-50 text-primary shrink-0">
                    <Award size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Certified</span>
                    <span className="text-[11px] text-slate-500">Specialists</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-50 text-primary shrink-0">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Flexible</span>
                    <span className="text-[11px] text-slate-500">Engagement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Video with Floating Badges */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[500px]">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-950">
                  <video
                    src={itInfraHeaderVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover max-h-[460px] rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Badge 1: Secure Infrastructure */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2 shadow-lg border border-slate-200/90 flex items-center gap-2">
                  <div className="p-1 rounded-md bg-blue-50 text-primary">
                    <Lock size={14} />
                  </div>
                  <span className="text-xs font-semibold text-slate-800">
                    Secure Infrastructure
                  </span>
                </div>

                {/* Floating Badge 2: Skilled IT Talent */}
                <div className="absolute top-10 -right-4 bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2 shadow-lg border border-slate-200/90 flex items-center gap-2">
                  <div className="p-1 rounded-md bg-emerald-50 text-emerald-600">
                    <Users size={14} />
                  </div>
                  <span className="text-xs font-semibold text-slate-800">
                    Skilled IT Talent
                  </span>
                </div>

                {/* Floating Badge 3: Scalable Systems */}
                <div className="absolute -bottom-4 right-6 bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2 shadow-lg border border-slate-200/90 flex items-center gap-2">
                  <div className="p-1 rounded-md bg-sky-50 text-sky-600">
                    <Cloud size={14} />
                  </div>
                  <span className="text-xs font-semibold text-slate-800">
                    Scalable Systems
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUSTED BY PARTNERS BAR --- */}
      <section className="py-8 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 shrink-0">
            Trusted by Growing Businesses
          </span>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 sm:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all">
            {partnersList.map((partner) => (
              <div key={partner.name} className="flex items-center">
                {partner.isSvg ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-6 sm:h-7 w-auto object-contain"
                  />
                ) : (
                  <span className="font-extrabold tracking-wider text-sm sm:text-base text-slate-700">
                    {partner.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR TECHNOLOGY SERVICES ("Technology Services for Every Business Need") --- */}
      <section id="technology-services" className="py-20 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-3">
            <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
              OUR TECHNOLOGY SERVICES
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Technology Services for Every Business Need
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-14">
            End-to-end IT services designed to keep your business connected, secure and always running.
          </p>

          {/* Mobile Slideshow View (Visible only on mobile < md) */}
          <div
            className="block md:hidden relative text-left"
            onTouchStart={handleServicesTouchStart}
            onTouchEnd={handleServicesTouchEnd}
            onMouseEnter={() => setIsServicesPaused(true)}
            onMouseLeave={() => setIsServicesPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeServiceIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.06)] p-5 flex flex-col justify-between overflow-hidden"
              >
                {/* Header: Icon, Title & Counter */}
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-[#EBF3FE] flex items-center justify-center shrink-0 text-[#1D63FF] shadow-xs">
                      <MobileIconComponent size={20} strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 leading-tight">
                      {currentMobileService.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 shrink-0">
                    0{activeServiceIndex + 1} / 06
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  {currentMobileService.desc}
                </p>

                {/* Reduced Image Banner (Clean & Proportional) */}
                <div className="w-full h-32 rounded-xl overflow-hidden relative bg-slate-950 mb-3.5 shadow-xs">
                  <img
                    src={currentMobileService.image}
                    alt={currentMobileService.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* 4 Feature Bullets */}
                <div className="space-y-1.5 mb-4">
                  {currentMobileService.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#1D63FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Check size={9} strokeWidth={3.5} />
                      </span>
                      <span className="text-xs font-medium text-slate-700 leading-tight">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button & Timer indicator */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  {currentMobileService.link.startsWith("#") ? (
                    <button
                      onClick={openConsultationModal}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-[#1D63FF] bg-[#EAF2FE] hover:bg-[#1D63FF] hover:text-white transition-all shadow-xs"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={13} />
                    </button>
                  ) : (
                    <Link
                      to={currentMobileService.link}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-[#1D63FF] bg-[#EAF2FE] hover:bg-[#1D63FF] hover:text-white transition-all shadow-xs"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={13} />
                    </Link>
                  )}

                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span>Auto-advance 3.5s</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Carousel Controls & Indicators */}
            <div className="flex items-center justify-between gap-3 mt-4 px-1">
              <button
                onClick={handlePrevService}
                aria-label="Previous service"
                className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 shadow-xs active:scale-95 transition-all"
              >
                <ChevronLeft size={16} />
              </button>

              {/* 6 Dots Indicator */}
              <div className="flex items-center gap-1.5">
                {coreServices.map((service, idx) => {
                  const isActive = idx === activeServiceIndex;
                  return (
                    <button
                      key={service.title}
                      onClick={() => setActiveServiceIndex(idx)}
                      aria-label={`Go to ${service.title}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        isActive ? "w-6 bg-[#1D63FF]" : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  );
                })}
              </div>

              <button
                onClick={handleNextService}
                aria-label="Next service"
                className="w-9 h-9 rounded-full bg-[#1D63FF] hover:bg-blue-700 text-white flex items-center justify-center shadow-md shadow-blue-500/25 active:scale-95 transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Desktop/Tablet 6 Services Grid (Hidden on mobile < md) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 text-left">
            {coreServices.map((service) => {
              const IconComponent = service.icon;
              const glowId = `curveGlow-${service.title.replace(/[^a-zA-Z0-9]/g, "")}`;
              return (
                <div
                  key={service.title}
                  className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)] hover:border-blue-400/90 transition-all duration-300 overflow-hidden flex flex-col sm:flex-row min-h-[300px]"
                >
                  {/* Left Content Container */}
                  <div className="w-full sm:w-[58%] p-5 sm:p-5 lg:p-5 xl:p-6 flex flex-col justify-between bg-white relative z-10 shrink-0">
                    <div>
                      {/* Icon + Title Header */}
                      <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
                        <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#EBF3FE] flex items-center justify-center shrink-0 text-[#1D63FF] group-hover:scale-105 group-hover:bg-[#1D63FF] group-hover:text-white transition-all duration-300 shadow-xs">
                          <IconComponent size={22} strokeWidth={2.2} />
                        </div>
                        <h3 className="text-base sm:text-[17px] font-bold text-slate-900 leading-tight group-hover:text-[#1D63FF] transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      {/* Short Description */}
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                        {service.desc}
                      </p>

                      {/* 4 Feature Bullets with Solid Blue Circular Checkmark */}
                      <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                        {service.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-center gap-2">
                            <span className="w-3.5 h-3.5 rounded-full bg-[#1D63FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                              <Check size={9} strokeWidth={3.5} />
                            </span>
                            <span className="text-[11px] sm:text-xs font-medium text-slate-700 leading-tight">
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Learn More Pill Button */}
                    <div className="pt-1">
                      {service.link.startsWith("#") ? (
                        <button
                          onClick={openConsultationModal}
                          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-[#1D63FF] bg-[#EAF2FE] hover:bg-[#1D63FF] hover:text-white transition-all duration-200 group/btn shadow-xs"
                        >
                          <span>Learn More</span>
                          <ArrowRight
                            size={13}
                            className="group-hover/btn:translate-x-0.5 transition-transform"
                          />
                        </button>
                      ) : (
                        <Link
                          to={service.link}
                          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-[#1D63FF] bg-[#EAF2FE] hover:bg-[#1D63FF] hover:text-white transition-all duration-200 group/btn shadow-xs"
                        >
                          <span>Learn More</span>
                          <ArrowRight
                            size={13}
                            className="group-hover/btn:translate-x-0.5 transition-transform"
                          />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Right Image Container with Curved Organic Arch Divider */}
                  <div className="w-full sm:w-[42%] relative min-h-[190px] sm:min-h-full overflow-hidden bg-slate-950 flex-1">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Subtle lighting overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950/20 via-transparent to-transparent pointer-events-none" />

                    {/* Desktop/Tablet Curved Arch SVG Divider */}
                    <svg
                      className="hidden sm:block absolute inset-y-0 -left-[1px] h-full w-12 md:w-14 lg:w-16 pointer-events-none z-10"
                      viewBox="0 0 60 100"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id={glowId} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
                          <stop offset="50%" stopColor="#60A5FA" stopOpacity="1" />
                          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.85" />
                        </linearGradient>
                      </defs>

                      {/* White mask connecting to left container */}
                      <path
                        d="M 0,0 L 52,0 C 12,26 12,74 52,100 L 0,100 Z"
                        fill="#FFFFFF"
                      />

                      {/* Ambient soft glow aura */}
                      <path
                        d="M 52,0 C 12,26 12,74 52,100"
                        fill="none"
                        stroke="#93C5FD"
                        strokeWidth="5"
                        strokeOpacity="0.4"
                      />

                      {/* Crisp neon cyan/blue edge line */}
                      <path
                        d="M 52,0 C 12,26 12,74 52,100"
                        fill="none"
                        stroke={`url(#${glowId})`}
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>

                    {/* Mobile Curved Divider */}
                    <svg
                      className="sm:hidden absolute top-0 inset-x-0 w-full h-6 pointer-events-none z-10"
                      viewBox="0 0 100 24"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M 0,0 L 100,0 L 100,4 Q 50,22 0,4 Z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M 100,4 Q 50,22 0,4"
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SPLIT 1: MANAGED IT SERVICES ("When IT Becomes a Business Risk") --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
                  MANAGED IT SERVICES
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                When IT Becomes <br />
                a <span className="text-primary">Business Risk</span>
              </h2>

              {/* Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Downtime, security threats or lack of skilled IT resources can impact your
                business. We help you stay ahead with proactive monitoring, rapid
                remediation, and structured governance.
              </p>

              {/* 4 Checkmarks */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Reduce Downtime", "Improve Security", "Ensure Compliance", "Control Costs"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="p-1 rounded-full bg-blue-600 text-white shrink-0">
                        <Check size={12} />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>

              {/* CTA Button */}
              <button
                onClick={openConsultationModal}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg text-sm shadow-sm transition-all group"
              >
                Schedule a Free Assessment
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            {/* Right Image with Floating Pillars */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-[480px]">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <img
                    src={sectionImg1}
                    alt="Corporate IT Management Strategy Meeting"
                    className="w-full h-auto object-cover max-h-[380px]"
                  />
                </div>

                {/* Right Stack of Pill Badges */}
                <div className="hidden sm:flex flex-col gap-2.5 absolute -right-6 top-8 z-10">
                  {[
                    { label: "Risk Assessment", icon: Search },
                    { label: "Security Audit", icon: Shield },
                    { label: "Strategic IT Roadmap", icon: MapPinIcon },
                    { label: "Ongoing Support", icon: Headphones },
                  ].map((badge) => {
                    const BIcon = badge.icon;
                    return (
                      <div
                        key={badge.label}
                        className="bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2 shadow-md border border-slate-200 flex items-center gap-2"
                      >
                        <div className="p-1 rounded-md bg-blue-50 text-primary">
                          <BIcon size={14} />
                        </div>
                        <span className="text-xs font-bold text-slate-800">
                          {badge.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SPLIT 2: IT TALENT SOLUTIONS ("The Right IT Talent, Exactly When You Need It") --- */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6 relative flex justify-center order-2 lg:order-1">
              <div className="relative w-full">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 w-full h-[380px] sm:h-[420px] lg:h-[460px] relative">
                  <img
                    src={sectionImg2}
                    alt="Skilled IT Engineers Collaborating"
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />
                </div>

                {/* Bottom Floating Pill */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200/90 flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-600 text-white shrink-0 shadow-md">
                    <Users size={18} />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 leading-tight">
                      Build High-Performing Teams Faster
                    </h5>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Deploy elite developers and sysadmins within 48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
                  IT TALENT SOLUTIONS
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                The Right IT Talent, <br />
                <span className="text-primary">Exactly When You Need It</span>
              </h2>

              {/* Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Scale your team with pre-vetted, skilled technology professionals who
                integrate seamlessly with your processes and culture.
              </p>

              {/* 4 Feature Boxes (2x2 Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                  <div className="p-2 rounded-lg bg-blue-50 text-primary w-fit mb-3">
                    <Users size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Dedicated Engineers
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Skilled professionals working exclusively for your team.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                  <div className="p-2 rounded-lg bg-blue-50 text-primary w-fit mb-3">
                    <Briefcase size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Project-Based Teams
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    On-demand teams for short or long-term projects.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                  <div className="p-2 rounded-lg bg-blue-50 text-primary w-fit mb-3">
                    <FileText size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Contract & Permanent Hiring
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Flexible hiring models as per your business needs.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                  <div className="p-2 rounded-lg bg-blue-50 text-primary w-fit mb-3">
                    <Globe2 size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Global Talent Access
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Access to a wide pool of skilled professionals.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg text-sm shadow-sm transition-all group"
              >
                Find Your IT Talent
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- INFRASTRUCTURE OPERATIONS ("Reliable Infrastructure. Proactive Management.") --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: 4 Key Points */}
            <div className="lg:col-span-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
                  INFRASTRUCTURE OPERATIONS
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                Reliable Infrastructure. <br />
                <span className="text-primary">Proactive Management.</span>
              </h2>

              {/* Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                We design, monitor and manage secure, high-performing IT environments so
                you can focus on your core business.
              </p>

              {/* 4 Feature Points */}
              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-blue-50 text-primary shrink-0">
                    <Monitor size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">24/7 Monitoring</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Continuous monitoring and rapid issue resolution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-blue-50 text-primary shrink-0">
                    <Cloud size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Cloud & Network Management
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      End-to-end infrastructure management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-blue-50 text-primary shrink-0">
                    <Server size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Backup & Disaster Recovery
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Keep your business running without interruption.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-blue-50 text-primary shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Security & Compliance
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Meet industry standards with robust security practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Live Status Datacenter Image */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-[480px]">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950">
                  <img
                    src={sectionImg3}
                    alt="System Analyst Monitoring Infrastructure"
                    className="w-full h-auto object-cover max-h-[420px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>

                {/* Floating System Health HUD card */}
                <div className="absolute top-6 right-6 bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/10 text-white w-52">
                  <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                    <span className="text-xs text-slate-400">System Health</span>
                    <span className="text-sm font-extrabold text-emerald-400">98.7%</span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span className="text-slate-200">Servers Online</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span className="text-slate-200">Network Secure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span className="text-slate-200">Backups Running</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span className="text-slate-200">No Critical Alerts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR PROCESS ("A Simple, Proven Approach") --- */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <div className="inline-flex items-center mb-2">
                <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
                  OUR PROCESS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                A Simple, Proven Approach
              </h2>
              <p className="text-slate-600 text-sm mt-1 max-w-xl">
                From understanding your goals to continuous optimization, we follow a
                structured process to deliver reliable IT solutions.
              </p>
            </div>

            <button
              onClick={openConsultationModal}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary border border-blue-300 rounded-lg px-4 py-2 hover:bg-blue-50 transition-colors shrink-0 self-start sm:self-auto"
            >
              Learn More About Our Process <ArrowRight size={13} />
            </button>
          </div>

          {/* 4 Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.step}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-primary mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                    <StepIcon size={22} />
                  </div>

                  <span className="text-xs font-bold text-primary tracking-wider mb-1 block">
                    {step.step}
                  </span>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES WE SERVE ("Industry-Aware IT Solutions") --- */}


      {/* --- BUSINESS IMPACT ("Outcomes That Matter") --- */}
      <section className="py-16 bg-[#0B1224] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* Left Header */}
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold tracking-wider uppercase text-sky-400 bg-sky-950/70 border border-sky-400/30 px-3.5 py-1 rounded-full">
                  BUSINESS IMPACT
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                Outcomes That <span className="text-blue-500">Matter</span>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Measurable results that help businesses stay secure, efficient and
                future-ready.
              </p>
            </div>

            {/* Right 4 Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-1">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm">
                <div className="p-2 rounded-xl bg-blue-500/10 text-sky-400 w-fit mx-auto mb-2">
                  <Shield size={20} />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white block">
                  99.9%
                </span>
                <span className="text-xs text-slate-400 font-medium">Uptime Target</span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm">
                <div className="p-2 rounded-xl bg-blue-500/10 text-sky-400 w-fit mx-auto mb-2">
                  <Headphones size={20} />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white block">
                  24/7
                </span>
                <span className="text-xs text-slate-400 font-medium">IT Support</span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm">
                <div className="p-2 rounded-xl bg-blue-500/10 text-sky-400 w-fit mx-auto mb-2">
                  <TrendingUp size={20} />
                </div>
                <span className="text-base sm:text-lg font-bold text-white block mt-1">
                  Flexible Scaling
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  As per your business needs
                </span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm">
                <div className="p-2 rounded-xl bg-blue-500/10 text-sky-400 w-fit mx-auto mb-2">
                  <Users size={20} />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white block">
                  150+
                </span>
                <span className="text-xs text-slate-400 font-medium">Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE TIERS ("Flexible Engagement Models") --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-3">
            <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
              SERVICE TIERS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Flexible <span className="text-primary">Engagement Models</span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-14">
            Choose the right engagement model for your IT needs.
          </p>

          {/* 3 Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Card 1: IT Service Plan */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6">
                  <FileText size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  IT Service Plan (Ongoing)
                </h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  Continuous, end-to-end management for your active systems and infrastructure.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Infrastructure Management",
                    "24/7 Monitoring",
                    "Security & Compliance",
                    "Continuous Support",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={openConsultationModal}
                  className="w-9 h-9 rounded-full bg-blue-50 text-primary flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors"
                >
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Card 2: Staff Augmentation (Highlighted - Most Popular) */}
            <div className="bg-[#0B1224] text-white border-2 border-blue-500 rounded-3xl p-8 shadow-2xl relative flex flex-col justify-between group">
              <span className="absolute -top-3.5 right-8 bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Most Popular
              </span>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-sky-400 flex items-center justify-center mb-6">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Staff Augmentation</h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Deploy elite, pre-vetted engineers to scale your internal engineering capacity.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Dedicated IT professionals",
                    "Flexible engagement",
                    "Multiple skillsets",
                    "Quick onboarding",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 size={14} className="text-sky-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={openConsultationModal}
                  className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 transition-colors shadow-md"
                >
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Card 3: Project-Based */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Project-Based</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  Turnkey milestone-based execution with guaranteed scope, timeline, and budget.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Short or long-term projects",
                    "Specialized skills",
                    "On-time delivery",
                    "Dedicated project manager",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={openConsultationModal}
                  className="w-9 h-9 rounded-full bg-blue-50 text-primary flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors"
                >
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FREQUENTLY ASKED QUESTIONS ("IT Infrastructure & Staffing — Answered") --- */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center mb-2">
                <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
                  FREQUENTLY ASKED QUESTIONS
                </span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                IT Infrastructure & Staffing —{" "}
                <span className="text-primary italic">Answered</span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary border border-blue-300 rounded-lg px-4 py-2 hover:bg-blue-50 transition-colors shrink-0 self-start sm:self-auto"
            >
              View All FAQs <ArrowRight size={13} />
            </Link>
          </div>

          {/* Accordion Questions */}
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqsList.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-slate-200 rounded-xl px-5 bg-white data-[state=open]:border-blue-500/50 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="text-sm sm:text-base font-semibold text-slate-800 hover:text-primary hover:no-underline py-4 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pb-4 pt-1 border-t border-slate-100">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* --- BOTTOM CTA BANNER ("Ready to Build a Stronger IT Foundation?") with Light Sky Blue BG --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF5FF] via-[#E1F0FF] to-[#D8ECFF] text-slate-900 py-20 sm:py-24 border-t border-sky-200/80">
        {/* Soft Ambient Light Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-sky-200/70 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-blue-200/50 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-4">
            <span className="text-[11px] font-bold tracking-wider uppercase text-sky-700 bg-white/90 border border-sky-300/80 px-4 py-1.5 rounded-full shadow-xs">
              LET'S BUILD TOGETHER
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Ready to Build a <span className="text-primary">Stronger IT Foundation?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            Get expert guidance on infrastructure, security and talent solutions tailored
            to your business.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openConsultationModal}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all text-sm group"
            >
              <span>Book a Consultation</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sky-50 text-slate-800 hover:text-primary border border-sky-200 hover:border-blue-300 font-semibold px-7 py-3.5 rounded-full shadow-sm transition-all text-sm"
            >
              <span>Talk to Our Team</span>
            </Link>
          </div>
        </div>
      </section>

      {/* --- SITE FOOTER --- */}
      <Footer />
    </div>
  );
}

// Helper icon component
function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
