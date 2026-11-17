import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  BarChart3,
  Hotel,
  Bed,
  Building2,
  CalendarCheck,
  UtensilsCrossed,
  Settings,
  ChevronLeft,
  ChevronRight,
  Star,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  Smartphone,
  Heart,
  Globe,
  Share2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import StrategySessionForm from "@/components/StrategySessionForm";
import IndustryProvenImpactSection from "@/components/IndustryProvenImpactSection";

// Industry Assets
import hospHeroImg from "@/assets/Industries/hospitality/hero/hero.png";
import hospSol1 from "@/assets/Industries/hospitality/solutions/1.png";
import hospSol2 from "@/assets/Industries/hospitality/solutions/2.png";
import hospSol3 from "@/assets/Industries/hospitality/solutions/3.png";
import hospSol4 from "@/assets/Industries/hospitality/solutions/4.png";
import hospSol5 from "@/assets/Industries/hospitality/solutions/5.png";
import hospSol6 from "@/assets/Industries/hospitality/solutions/6.png";
import hospSol7 from "@/assets/Industries/hospitality/solutions/7.png";
import hospSol8 from "@/assets/Industries/hospitality/solutions/8.png";

import hospE2E1 from "@/assets/Industries/hospitality/end_to_end/1.png";
import hospE2E2 from "@/assets/Industries/hospitality/end_to_end/2 right above.png";
import hospE2E3 from "@/assets/Industries/hospitality/end_to_end/3 below 1st.png";
import hospE2E4 from "@/assets/Industries/hospitality/end_to_end/last below 2.png";

import hospPrj1 from "@/assets/Industries/hospitality/projects/1.png";
import hospPrj2 from "@/assets/Industries/hospitality/projects/2.png";
import hospPrj3 from "@/assets/Industries/hospitality/projects/3.png";

export default function HospitalityTechnologySolutions() {
  const { openConsultationModal } = useConsultationModal();

  const [activeProjectSlide, setActiveProjectSlide] = useState(0);

  // Quick Services / Capabilities Ribbon (6 items matching screenshot)
  const quickServices = [
    { title: "Guest Experience Platforms", icon: Bed, href: "#solutions" },
    { title: "Property Management Systems", icon: Building2, href: "#solutions" },
    { title: "Reservation & Booking Systems", icon: CalendarCheck, href: "#solutions" },
    { title: "Restaurant & F&B Solutions", icon: UtensilsCrossed, href: "#solutions" },
    { title: "Hospitality Analytics & Reporting", icon: BarChart3, href: "#solutions" },
    { title: "Custom Hospitality Software", icon: Settings, href: "#solutions" },
  ];

  // 8 Solutions for Today's Hospitality Environment (Dark Cards matching screenshot)
  const solutions = [
    {
      id: "guest-experience",
      title: "Guest Experience Platforms",
      desc: "Streamline operations, create memorable guest experiences, and foster greater brand loyalty.",
      tag: "Guest Experience",
      image: hospSol1,
    },
    {
      id: "pms-systems",
      title: "Property Management Systems (PMS)",
      desc: "Manage rooms, housekeeping, maintenance, and hotel operations with ease.",
      tag: "Hotel PMS",
      image: hospSol2,
    },
    {
      id: "reservation-booking",
      title: "Reservation & Booking Systems",
      desc: "Enable direct bookings, channel management, and real-time availability.",
      tag: "Booking Engine",
      image: hospSol3,
    },
    {
      id: "restaurant-fb",
      title: "Restaurant & Food Service Solutions",
      desc: "From table reservations to kitchen operations, manage your F&B business efficiently.",
      tag: "F&B Management",
      image: hospSol4,
    },
    {
      id: "hospitality-analytics",
      title: "Hospitality Analytics & Business Intelligence",
      desc: "Turn guest data into actionable insights to improve revenue and operational efficiency.",
      tag: "Hospitality BI",
      image: hospSol5,
    },
    {
      id: "ai-hospitality-ops",
      title: "AI-Powered Hospitality Operations",
      desc: "Automate tasks, predict demand, and enhance guest services with AI.",
      tag: "Hospitality AI",
      image: hospSol6,
    },
    {
      id: "guest-portals-apps",
      title: "Guest Portals & Mobile Apps",
      desc: "Provide self-service check-in, digital concierge, and personalized experiences.",
      tag: "Guest App",
      image: hospSol7,
    },
    {
      id: "loyalty-rewards",
      title: "Loyalty & Rewards Platforms",
      desc: "Build and manage loyalty programs to increase guest retention and lifetime value.",
      tag: "Loyalty & Rewards",
      image: hospSol8,
    },
  ];

  // 4 End-to-End Hospitality Technology Solutions (Matching 2x2 grid from screenshot)
  const endToEndSolutions = [
    {
      title: "Hotel Website Development",
      desc: "Modern, responsive websites with booking integration.",
      image: hospE2E1,
    },
    {
      title: "Restaurant Management Systems",
      desc: "Table reservations, menu management and F&B operations.",
      image: hospE2E2,
    },
    {
      title: "Channel Manager Integration",
      desc: "Sync bookings across OTA platforms (Booking.com, Expedia, etc.).",
      image: hospE2E3,
    },
    {
      title: "Guest Engagement & Loyalty Solutions",
      desc: "Personalized offers, rewards and guest communication.",
      image: hospE2E4,
    },
  ];

  // 4 Feature Pillars (Built for the Hospitality Industry)
  const whyPillars = [
    {
      icon: Hotel,
      title: "Industry Focused",
      desc: "Solutions tailored for hotels, resorts, restaurants and travel businesses.",
    },
    {
      icon: Smartphone,
      title: "Integrated Platforms",
      desc: "Connect bookings, PMS, POS, CRM and analytics in one ecosystem.",
    },
    {
      icon: Heart,
      title: "Better Guest Experiences",
      desc: "Personalized, seamless and digital-first experiences.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Technology Partner",
      desc: "From strategy to support, we help you on your digital transformation journey.",
    },
  ];

  // 4-Step Process (A Simple Process to Get Started)
  const processSteps = [
    {
      number: "01",
      title: "Understand Your Goals",
      desc: "We learn about your business, audience and challenges.",
    },
    {
      number: "02",
      title: "Build a Customized Strategy",
      desc: "Tailored plan for hospitality operations, guest experience and integrations.",
    },
    {
      number: "03",
      title: "Develop & Implement",
      desc: "We design, develop and deploy that solution end-to-end.",
    },
    {
      number: "04",
      title: "Support & Grow",
      desc: "Ongoing support and optimization for better results.",
    },
  ];

  // Featured Projects (Hospitality Projects We've Delivered)
  const featuredProjects = [
    {
      title: "Luxury Hotel Resort",
      subtitle: "Website & Booking Platform",
      tag: "Resort Platform",
      image: hospPrj1,
    },
    {
      title: "Restaurant Chain",
      subtitle: "POS Management System",
      tag: "F&B Management",
      image: hospPrj2,
    },
    {
      title: "Boutique Hotel",
      subtitle: "Property Management System",
      tag: "Boutique PMS",
      image: hospPrj3,
    },
  ];

  const nextProject = () => {
    setActiveProjectSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setActiveProjectSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-primary selection:text-white">
      <SEOHead
        title="Hospitality Technology Solutions | Cybaem Tech"
        description="Transform hospitality experiences with Cybaem Tech. Property management systems (PMS), guest experience platforms, real-time booking engines, F&B POS systems, and hotel analytics."
        canonical="https://www.cybaemtech.com/industries/hospitality-technology-solutions"
      />

      {/* Global Navbar */}
      <Navbar />

      <main id="main-content" className="overflow-hidden">
        {/* =========================================================================
            1. HERO SECTION & STRATEGY SESSION FORM
            ========================================================================= */}
        <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden border-b border-slate-200/60">
          {/* Full background hospitality visual - clear image with no color added */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <img
              src={hospHeroImg}
              alt="Hospitality Technology Solutions"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>

          {/* Subtle white shade effect on left side portion for clean text legibility */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-b from-white/90 via-white/60 to-transparent lg:bg-gradient-to-r lg:from-white/90 lg:via-white/65 lg:to-transparent pointer-events-none z-0" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Left Column: Heading, Description, 4 Checkpoints & 3x Stat Callout */}
              <div className="lg:col-span-7 space-y-6">
                {/* Eyebrow tag */}
                <div className="text-primary font-bold text-xs tracking-wider uppercase flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-primary inline-block" />
                  <span>HOSPITALITY TECHNOLOGY SOLUTIONS</span>
                </div>

                {/* Hero Title */}
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                  Transform Hospitality <br />
                  Experiences with <br />
                  <span className="text-primary">Digital Innovation</span>
                </h1>

                {/* Hero Description */}
                <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                  We design intelligent hospitality platforms that connect guests, staff, operations, reservations, and business systems into a unified digital ecosystem.
                </p>

                {/* 4 Feature Points with Checkmark Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Seamless Guest Experiences",
                    "Smart Operations & Management",
                    "Integrated Booking & Reservation Systems",
                    "Data-Driven Hospitality Insights",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-xs">
                        <Check size={12} className="text-white stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stat Badge Card (Increase Guest Satisfaction by up to 3x) */}
                <div className="pt-2">
                  <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_10px_25px_-5px_rgba(15,35,60,0.08)]">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <BarChart3 size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 leading-tight">
                        Increase <br />Guest Satisfaction by up to
                      </p>
                    </div>
                    <div className="pl-3 border-l border-slate-200">
                      <span className="text-3xl font-black text-slate-900 block leading-none">
                        3x
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Converting Strategy Lead Capture Form */}
              <div className="lg:col-span-5">
                <StrategySessionForm
                  tagText="GET STARTED"
                  title="Book a Free Strategy Session"
                  subtitle="Share your details and our hospitality experts will get in touch with a tailored strategy for your business."
                  buttonText="Book My Strategy Session"
                  orgLabel="Company Name"
                  orgPlaceholder="Enter company name"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. QUICK SERVICES / CAPABILITIES RIBBON (6 items)
            ========================================================================= */}
        <section className="bg-white py-6 border-b border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {quickServices.map((srv) => (
                <a
                  key={srv.title}
                  href={srv.href}
                  className="flex flex-col items-center justify-center p-3 text-center rounded-xl bg-slate-50/70 hover:bg-slate-100/80 border border-slate-200/60 hover:border-primary/30 transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center mb-2.5 transition-colors">
                    <srv.icon size={20} />
                  </div>
                  <span className="text-xs font-bold text-slate-800 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                    {srv.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. SOLUTIONS FOR TODAY'S HOSPITALITY ENVIRONMENT (8 Dark Cards)
            ========================================================================= */}
        <section id="solutions" className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            {/* Header + CTA Row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block mb-2">
                  OUR SOLUTIONS
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Solutions for today&apos;s hospitality <br className="hidden sm:inline" />
                  environment
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                  We design intelligent hospitality platforms that connect guests, staff, operations, reservations, and business systems into a unified digital ecosystem.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="#end-to-end"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Explore All Solutions</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* 8 Cards Grid (Aspect ratio 1086 x 1448, clear image, heading at bottom, description on hover) */}
            <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:pb-0">
              {solutions.map((item) => (
                <div
                  key={item.id}
                  className="shrink-0 w-[230px] sm:w-auto snap-start group relative rounded-xl sm:rounded-none overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 aspect-[1086/1448] flex flex-col justify-end p-4 sm:p-6"
                >
                  {/* Clear background photo with NO color effects & NO border radius on desktop */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient strictly at bottom behind text for legibility */}
                  <div className="absolute inset-x-0 bottom-0 pt-28 pb-4 px-4 sm:pt-32 sm:pb-6 sm:px-6 bg-gradient-to-t from-black/90 via-black/55 to-transparent pointer-events-none group-hover:from-black/95 group-hover:via-black/70 transition-all duration-300" />

                  {/* Card Content: Heading + Description default on mobile, expandable on desktop hover */}
                  <div className="relative z-10 w-full">
                    <h3 className="font-display text-sm sm:text-xl lg:text-2xl font-bold sm:font-extrabold text-white leading-snug drop-shadow-md line-clamp-2 sm:line-clamp-none">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm text-slate-200 leading-relaxed pt-1.5 sm:pt-0 sm:max-h-0 sm:opacity-0 sm:overflow-hidden sm:group-hover:max-h-40 sm:group-hover:opacity-100 sm:group-hover:pt-2 transition-all duration-300 ease-in-out line-clamp-3 sm:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Mobile swipe hint */}
            <div className="sm:hidden flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium mt-3">
              <span>← Swipe horizontally to explore solutions →</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. END-TO-END HOSPITALITY TECHNOLOGY SOLUTIONS (2x2 Grid)
            ========================================================================= */}
        <section id="end-to-end" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Heading, Description & Button */}
              <div className="lg:col-span-5 space-y-5">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  End-to-End Hospitality <br className="hidden sm:inline" />
                  Technology Solutions
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  We help hotels, resorts, restaurants, and travel businesses build scalable, secure, and integrated digital platforms that enhance guest experiences, streamline operations, and drive growth.
                </p>

                <div className="pt-2">
                  <a
                    href="#strategy-form"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Explore All Solutions</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Right Column: 2x2 Grid of Horizontal Cards with Thumbnails & Checkmark */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {endToEndSolutions.map((item) => (
                    <div
                      key={item.title}
                      className="group bg-white rounded-2xl border border-slate-200/90 hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-300 flex items-stretch overflow-hidden"
                    >
                      {/* Left Thumbnail Image - Edge to edge, no padding, no margin, larger size */}
                      <div className="w-24 sm:w-28 shrink-0 relative overflow-hidden bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Middle Content + Right Checkmark */}
                      <div className="flex-1 p-3.5 sm:p-4 flex items-center justify-between gap-3 min-w-0">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                            {item.desc}
                          </p>
                        </div>

                        {/* Right Checkmark Circle Icon matching screenshot */}
                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. PROVEN IMPACT (Common Dark Navy Banner)
            ========================================================================= */}
        <IndustryProvenImpactSection industryName="Hospitality" />

        {/* =========================================================================
            6. BUILT FOR THE HOSPITALITY INDUSTRY (WHY CYBAEM TECH)
            ========================================================================= */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block mb-2">
                WHY CYBAEM TECH
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Built for the Hospitality Industry
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                We understand the unique challenges of hospitality businesses and deliver technology solutions that create real impact.
              </p>
            </div>

            {/* 4 Feature Pillars Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {whyPillars.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-6 border border-slate-200/90 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2.5 sm:mb-4 transition-transform group-hover:scale-105">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-display text-xs sm:text-base font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug line-clamp-2 sm:line-clamp-none">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm text-slate-600 mt-1 sm:mt-2 leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. OUR PROCESS (A Simple Process to Get Started)
            ========================================================================= */}
        <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block mb-2">
                OUR PROCESS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                A Simple Process to Get Started
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                We make it easy for hospitality businesses to adopt the right technology and see measurable results.
              </p>
            </div>

            {/* 4 Step Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {processSteps.map((step, idx) => (
                <div
                  key={step.number}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs relative flex flex-col items-center text-center justify-between group hover:border-primary/40 transition-colors"
                >
                  <div className="flex flex-col items-center text-center w-full">
                    {/* Number Badge - Centered */}
                    <div className="w-10 h-10 rounded-full bg-primary text-white font-black text-sm flex items-center justify-center mb-4 mx-auto shadow-sm group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>

                    <h3 className="font-display text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-primary transition-colors text-center">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed text-center">
                      {step.desc}
                    </p>
                  </div>

                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-10 z-10 text-slate-300">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. HOSPITALITY TECHNOLOGY (Digital Solutions for Modern Hospitality)
            ========================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block mb-2">
                  HOSPITALITY TECHNOLOGY
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Digital Solutions for Modern Hospitality
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl">
                  Explore technology solutions that help hoteliers, resort operators, and restaurant groups streamline front-and-back office operations and enhance guest experiences.
                </p>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevProject}
                  aria-label="Previous project"
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-primary hover:text-primary flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={nextProject}
                  aria-label="Next project"
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-primary hover:text-primary flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* 3 Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProjects.map((prj) => (
                <div
                  key={prj.title}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Project Image */}
                  <div className="h-52 relative overflow-hidden bg-slate-900">
                    <img
                      src={prj.image}
                      alt={prj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] font-bold text-white bg-slate-900/70 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                      {prj.tag}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-start">
                    <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-primary block mb-2">
                      {prj.tag}
                    </span>
                    <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                      {prj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                      {(prj as any).desc || prj.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. FINAL BOTTOM CTA BANNER (READY TO ELEVATE YOUR HOSPITALITY BUSINESS)
            ========================================================================= */}
        <section className="py-16 sm:py-20 bg-[#07162c] text-white relative overflow-hidden">
          {/* Subtle grid lines */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:28px_28px]" />

          {/* Luxury Resort illuminated pool background on right */}
          <div
            className="absolute right-0 top-0 w-full md:w-3/4 lg:w-3/5 h-full opacity-65 lg:opacity-80 pointer-events-none bg-cover bg-center md:bg-right contrast-105 brightness-110"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80')",
            }}
          />
          {/* Smooth gradient: dark on left for text readability, clear and light on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07162c] from-35% via-[#07162c]/75 via-65% to-transparent pointer-events-none" />
          {/* Ambient light glow on the right to brighten the section */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block mb-2">
                  READY TO ELEVATE YOUR HOSPITALITY BUSINESS
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
                  Let&apos;s Build a Smarter Hospitality Future
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  Book a free strategy session with our hospitality technology experts and discover how we can help you enhance guest experiences, streamline operations, and drive higher revenue.
                </p>

                {/* 3 Badges */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>No Obligation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>Tailored for Your Business</span>
                  </div>
                </div>
              </div>

              {/* Right CTA Button */}
              <div className="shrink-0">
                <a
                  href="#strategy-form"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-extrabold text-sm sm:text-base transition-all shadow-xl active:scale-95 cursor-pointer"
                >
                  <span>Book a Free Strategy Session</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer variant="dark" />
    </div>
  );
}
