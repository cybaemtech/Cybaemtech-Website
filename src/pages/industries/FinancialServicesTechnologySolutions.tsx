import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  BarChart3,
  Building2,
  Landmark,
  CreditCard,
  Wallet,
  ShieldCheck,
  LineChart,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Star,
  Lock,
  Workflow,
  Cpu,
  Bot,
  Layers,
  FileCheck,
  ArrowUpRight,
  Shield,
  Eye,
  Settings,
  HeartHandshake
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import StrategySessionForm from "@/components/StrategySessionForm";
import IndustryProvenImpactSection from "@/components/IndustryProvenImpactSection";

import finHeroImg from "@/assets/Industries/finance/hero.png";
import finSol1 from "@/assets/Industries/finance/our solutions/01_wealth_management.png";
import finSol2 from "@/assets/Industries/finance/our solutions/02_financial_workflow_automation.png";
import finSol3 from "@/assets/Industries/finance/our solutions/03_financial_data_analytics.png";
import finSol4 from "@/assets/Industries/finance/our solutions/04_risk_compliance_systems.png";
import finSol5 from "@/assets/Industries/finance/our solutions/05_financial_platform_modernization.png";
import finSol6 from "@/assets/Industries/finance/our solutions/06_ai_powered_banking.png";
import finSol7 from "@/assets/Industries/finance/our solutions/07_financial_services_consulting.png";
import finSol8 from "@/assets/Industries/finance/our solutions/08_payment_systems.png";

import finE2E1 from "@/assets/Industries/finance/end to end finance/1.png";
import finE2E2 from "@/assets/Industries/finance/end to end finance/2.png";
import finE2E3 from "@/assets/Industries/finance/end to end finance/3.png";
import finE2E4 from "@/assets/Industries/finance/end to end finance/4.png";

import finPrj1 from "@/assets/Industries/finance/finance projects/1.png";
import finPrj2 from "@/assets/Industries/finance/finance projects/2.png";
import finPrj3 from "@/assets/Industries/finance/finance projects/3.png";

export default function FinancialServicesTechnologySolutions() {
  const { openConsultationModal } = useConsultationModal();

  const [activeProjectSlide, setActiveProjectSlide] = useState(0);

  // Quick Services / Capabilities Ribbon (6 items)
  const quickServices = [
    { title: "Wealth Management", icon: Landmark, href: "#solutions" },
    { title: "Core Banking Solutions", icon: Building2, href: "#solutions" },
    { title: "Digital Payments & Wallets", icon: CreditCard, href: "#solutions" },
    { title: "Risk & Compliance Systems", icon: ShieldCheck, href: "#solutions" },
    { title: "Financial Analytics & Reporting", icon: LineChart, href: "#solutions" },
    { title: "Custom FinTech Solutions", icon: Sparkles, href: "#solutions" },
  ];

  // 8 Solutions for Today's Financial Landscape (Dark Cards matching screenshot)
  const solutions = [
    {
      id: "wealth-management",
      title: "Wealth Management",
      desc: "Strengthen service offerings, modernize technology, and leverage data and AI.",
      tag: "WealthTech",
      image: finSol1,
    },
    {
      id: "workflow-automation",
      title: "Financial Workflow Automation",
      desc: "Automate processes and improve operational efficiency.",
      tag: "Automation",
      image: finSol2,
    },
    {
      id: "data-analytics",
      title: "Financial Data & Analytics",
      desc: "Turn data into actionable insights with real-time analytics.",
      tag: "Analytics",
      image: finSol3,
    },
    {
      id: "risk-compliance",
      title: "Risk & Compliance Systems",
      desc: "Ensure regulatory compliance with secure and scalable solutions.",
      tag: "RegTech",
      image: finSol4,
    },
    {
      id: "platform-modernization",
      title: "Financial Platform Modernization",
      desc: "Upgrade legacy systems with modern, scalable architectures.",
      tag: "Modernization",
      image: finSol5,
    },
    {
      id: "ai-banking",
      title: "AI-Powered Banking Solutions",
      desc: "Deliver intelligent customer experiences with AI and ML.",
      tag: "AI & ML",
      image: finSol6,
    },
    {
      id: "consulting",
      title: "Financial Services Consulting",
      desc: "Get expert guidance for digital transformation and growth.",
      tag: "Consulting",
      image: finSol7,
    },
    {
      id: "payment-systems",
      title: "Payment Systems",
      desc: "Build secure and seamless digital payment experiences.",
      tag: "Payments",
      image: finSol8,
    },
  ];

  // 4 End-to-End Solutions (Matching 2x2 grid from screenshot)
  const endToEndSolutions = [
    {
      title: "Core Banking Systems",
      desc: "Modern, scalable, and secure banking platforms.",
      tag: "Banking Core",
      image: finE2E1,
    },
    {
      title: "Digital Lending Solutions",
      desc: "Streamline loan origination and management.",
      tag: "Lending Tech",
      image: finE2E2,
    },
    {
      title: "Fraud Detection & Risk Management",
      desc: "AI-driven fraud detection and real-time risk monitoring.",
      tag: "Risk & Security",
      image: finE2E3,
    },
    {
      title: "Financial Reporting & BI",
      desc: "Data-driven reports for better strategic decisions.",
      tag: "Reporting & BI",
      image: finE2E4,
    },
  ];

  // 4 Feature Pillars (Built for the Financial Services Industry)
  const whyPillars = [
    {
      icon: Building2,
      title: "Industry Focused",
      desc: "Solutions tailored for banks, NBFCs, fintechs and financial enterprises.",
    },
    {
      icon: FileCheck,
      title: "Regulatory Expertise",
      desc: "Solutions aligned with RBI, SEBI and global compliance standards.",
    },
    {
      icon: HeartHandshake,
      title: "Better Customer Experience",
      desc: "Modern solutions that enhance customer engagement and satisfaction.",
    },
    {
      icon: Shield,
      title: "Reliable Technology Partner",
      desc: "From strategy to support, we help you on your digital transformation journey.",
    },
  ];

  // 4-Step Process
  const processSteps = [
    {
      number: "01",
      title: "Understand Your Goals",
      desc: "We learn about your business, challenges and growth objectives.",
    },
    {
      number: "02",
      title: "Build a Customized Strategy",
      desc: "Tailored plan for systems, integration, compliance and scalability.",
    },
    {
      number: "03",
      title: "Develop & Implement",
      desc: "We design, develop and deploy the solution end-to-end.",
    },
    {
      number: "04",
      title: "Support & Grow",
      desc: "Ongoing support and optimization for better results.",
    },
  ];

  // Featured Projects
  const featuredProjects = [
    {
      title: "Digital Banking Platform",
      subtitle: "For a Leading Bank",
      tag: "Digital Banking",
      image: finPrj1,
    },
    {
      title: "Investment Analytics System",
      subtitle: "For Wealth Management Firm",
      tag: "WealthTech Analytics",
      image: finPrj2,
    },
    {
      title: "Payment Gateway Integration",
      subtitle: "For FinTech Company",
      tag: "Payment Systems",
      image: finPrj3,
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
        title="Financial Services Technology Solutions | FinTech, Core Banking & WealthTech - Cybaem Tech"
        description="Transform financial services with digital innovation. Custom core banking, wealth management, payment systems, AI banking, and fraud detection solutions built by Cybaem Tech."
        canonical="https://www.cybaemtech.com/industries/financial-services-technology-solutions"
      />

      {/* Global Navbar */}
      <Navbar />

      <main id="main-content" className="overflow-hidden">
        <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden border-b border-slate-200/60">
          {/* Full background financial visual - clear image with no color added */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <img
              src={finHeroImg}
              alt="Financial Services Technology Solutions"
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
                <div className="text-primary font-bold text-xs tracking-wider uppercase">
                  FINANCIAL SERVICES TECHNOLOGY SOLUTIONS
                </div>

                {/* Hero Title */}
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                  Transform Financial Services with{" "}
                  <span className="text-primary block sm:inline">
                    Digital Innovation
                  </span>
                </h1>

                {/* Hero Description */}
                <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                  From financial operations to customer-facing experiences, we build secure digital solutions that connect data, processes, and people across the financial ecosystem.
                </p>

                {/* 4 Feature Points with Checkmark Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Secure & Compliant Solutions",
                    "Data-Driven Decision Making",
                    "Seamless Customer Experiences",
                    "End-to-End Support & Modernization",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center shrink-0 shadow-xs">
                        <Check size={12} className="text-white stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stat Badge Card (Increase Operational Efficiency 3x) */}
                <div className="pt-2">
                  <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_10px_25px_-5px_rgba(15,35,60,0.08)]">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <BarChart3 size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                        Increase
                      </p>
                      <p className="text-sm font-bold text-slate-800">
                        Operational Efficiency
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
                  tagText="— GET STARTED"
                  title="Book a Free Strategy Session"
                  subtitle="Share your details and our financial services experts will get in touch with a tailored strategy for your business."
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
            3. SOLUTIONS FOR TODAY'S FINANCIAL LANDSCAPE (8 Dark Cards)
            ========================================================================= */}
        <section id="solutions" className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            {/* Header + CTA Row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block mb-2">
                  — OUR SOLUTIONS
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Solutions for today&apos;s financial landscape
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                  From financial operations to customer-facing experiences, we build secure digital that connect data, processes, and people.
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

            {/* 8 Cards Grid (Aspect ratio 1086 x 1448, clear image, no border radius, heading at bottom, description on hover) */}
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
            4. END-TO-END FINANCIAL TECHNOLOGY SOLUTIONS (2x2 Grid)
            ========================================================================= */}
        <section id="end-to-end" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Heading, Description & Button */}
              <div className="lg:col-span-5 space-y-5">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  End-to-End Financial Technology Solutions
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  We help financial institutions build secure, compliant, and scalable digital platforms that improve customer experiences, enhance operational efficiency, and drive growth.
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

              {/* Right Column: 2x2 Grid of Horizontal Cards */}
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

                      {/* Middle Content + Right Action Button */}
                      <div className="flex-1 p-3.5 sm:p-4 flex items-center justify-between gap-3 min-w-0">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                            {item.desc}
                          </p>
                        </div>

                        {/* Right Circular Action Button */}
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
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
        <IndustryProvenImpactSection industryName="Financial Services" />

        {/* =========================================================================
            6. BUILT FOR THE FINANCIAL SERVICES INDUSTRY (WHY CYBAEM TECH)
            ========================================================================= */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block mb-2">
                — WHY CYBAEM TECH
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Built for the Financial Services Industry
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                We understand the unique challenges of financial institutions and deliver technology solutions that create real impact.
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
                — OUR PROCESS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                A Simple Process to Get Started
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                We make it easy for financial institutions to adopt the right technology and see measurable results.
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
            8. FINANCIAL TECHNOLOGY (Digital Solutions for Modern Financial Services)
            ========================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block mb-2">
                  FINANCIAL TECHNOLOGY
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Digital Solutions for Modern Financial Services
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl">
                  Explore technology solutions that help banks, fintech startups, and wealth management firms streamline financial workflows, ensure regulatory compliance, and enhance customer trust.
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
                    <span className="absolute top-4 left-4 z-10 text-[10px] font-bold text-white bg-slate-900/70 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
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
            9. FINAL BOTTOM CTA BANNER (READY TO TRANSFORM)
            ========================================================================= */}
        <section className="py-16 sm:py-20 bg-[#071d33] text-white relative overflow-hidden">
          {/* Subtle industrial grid lines */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:28px_28px]" />

          {/* Financial district skyline background visual on right */}
          <div
            className="absolute right-0 top-0 w-full md:w-3/4 lg:w-3/5 h-full opacity-65 lg:opacity-80 pointer-events-none bg-cover bg-center md:bg-right contrast-105 brightness-110"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80')",
            }}
          />
          {/* Smooth gradient: dark on left for text readability, clear and light on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071d33] from-35% via-[#071d33]/75 via-65% to-transparent pointer-events-none" />
          {/* Ambient light glow on the right to brighten the section */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-xs font-bold tracking-[0.16em] uppercase text-sky-400 block mb-2">
                  — READY TO TRANSFORM
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
                  Let&apos;s Build a Stronger Financial Future
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  Book a free strategy session with our financial services technology experts and discover how we can help you drive innovation, improve efficiency, and deliver better customer experiences.
                </p>

                {/* 3 Badges */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-sky-400" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-sky-400" />
                    <span>No Obligation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-sky-400" />
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
