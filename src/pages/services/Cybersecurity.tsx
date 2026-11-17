import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { cybersecuritySeoData } from "@/data/seo/cybersecuritySeo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import cybaemLogo from "@/assets/cybaem-logo.png";

// Service Images from OUR SERVICES folder
import serviceImg1 from "@/assets/cyber/OUR SERVICES/01_security_assessment.png";
import serviceImg2 from "@/assets/cyber/OUR SERVICES/02_network_security.png";
import serviceImg3 from "@/assets/cyber/OUR SERVICES/03_endpoint_security.png";
import serviceImg4 from "@/assets/cyber/OUR SERVICES/04_identity_access_management.png";
import serviceImg5 from "@/assets/cyber/OUR SERVICES/05_data_security_encryption.png";
import serviceImg6 from "@/assets/cyber/OUR SERVICES/06_threat_detection_monitoring.png";
import serviceImg7 from "@/assets/cyber/OUR SERVICES/07_security_compliance.png";
import serviceImg8 from "@/assets/cyber/OUR SERVICES/08_incident_response_recovery.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield,
  ShieldCheck,
  Lock,
  Database,
  UserCheck,
  Search,
  Network,
  Laptop,
  Fingerprint,
  Radio,
  FileCheck2,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Monitor,
  Settings,
  Activity,
  Headphones,
  Zap,
  TrendingDown,
  Building2,
  Factory,
  Car,
  Heart,
  GraduationCap,
  ShoppingCart,
  Briefcase,
  Menu,
  X,
  Server,
  Cloud,
} from "lucide-react";

// --- Sub-Components & Data ---

const navServices = [
  { title: "IT Infrastructure Services", href: "/cloud-security/it-infrastructure-services" },
  { title: "Enterprise Software Development", href: "/software-platforms/enterprise-software" },
  { title: "Mobile App Development", href: "/software-platforms/mobile-app-development" },
  { title: "Web Systems & Platforms", href: "/software-platforms/web-systems" },
  { title: "Performance Marketing", href: "/digital-growth/performance-marketing" },
];

const navIndustries = [
  { name: "IT & Software", href: "#industries" },
  { name: "Manufacturing", href: "#industries" },
  { name: "Automotive & Logistics", href: "#industries" },
  { name: "Healthcare", href: "#industries" },
  { name: "Education", href: "#industries" },
  { name: "Retail & E-commerce", href: "#industries" },
  { name: "Professional Services", href: "#industries" },
];

const approachSteps = [
  {
    step: "01",
    title: "Assess",
    desc: "Identify risks, vulnerabilities and security gaps.",
    icon: Search,
  },
  {
    step: "02",
    title: "Protect",
    desc: "Implement security controls and best practices.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Monitor",
    desc: "Continuous monitoring and threat detection.",
    icon: Monitor,
  },
  {
    step: "04",
    title: "Respond",
    desc: "Quick response and recovery support.",
    icon: Settings,
  },
];

const servicesList = [
  {
    title: "Security Assessment & Risk Analysis",
    desc: "Identify security risks, vulnerabilities and compliance gaps in your IT environment.",
    image: serviceImg1,
    icon: Search,
  },
  {
    title: "Network Security",
    desc: "Protect your network with firewalls, IDS/IPS, secure access and segmentation.",
    image: serviceImg2,
    icon: Network,
  },
  {
    title: "Endpoint Security",
    desc: "Secure desktops, laptops, servers and mobile devices from advanced threats.",
    image: serviceImg3,
    icon: Laptop,
  },
  {
    title: "Identity & Access Management",
    desc: "Manage user access with MFA, SSO and least-privilege controls.",
    image: serviceImg4,
    icon: Fingerprint,
  },
  {
    title: "Data Security & Encryption",
    desc: "Protect sensitive data with encryption, access controls and DLP solutions.",
    image: serviceImg5,
    icon: Database,
  },
  {
    title: "Threat Detection & Monitoring",
    desc: "24x7 monitoring, threat detection and incident response.",
    image: serviceImg6,
    icon: Radio,
  },
  {
    title: "Security Compliance",
    desc: "Support for industry standards like ISO 27001, SOC 2, GDPR and more.",
    image: serviceImg7,
    icon: FileCheck2,
  },
  {
    title: "Incident Response & Recovery",
    desc: "Rapid response, containment and recovery to minimize business impact.",
    image: serviceImg8,
    icon: AlertTriangle,
  },
];

const metricsList = [
  {
    value: "99.9%",
    label: "Threats Blocked",
    icon: ShieldCheck,
  },
  {
    value: "24/7",
    label: "Security Monitoring",
    icon: Headphones,
  },
  {
    value: "60%",
    label: "Faster Response",
    icon: Zap,
  },
  {
    value: "80%",
    label: "Reduced Risk",
    icon: TrendingDown,
  },
];

const industriesList = [
  { name: "IT & Software", icon: Monitor },
  { name: "Manufacturing", icon: Factory },
  { name: "Automotive & Logistics", icon: Car },
  { name: "Healthcare", icon: Heart },
  { name: "Education", icon: GraduationCap },
  { name: "Retail & E-commerce", icon: ShoppingCart },
  { name: "Professional Services", icon: Briefcase },
];

const partnerHighlights = [
  "End-to-end cybersecurity services under one partner",
  "Proactive threat detection and continuous monitoring",
  "Deep 24x7 frameworks and compliance support",
  "Experienced security specialists and modern tools",
  "Flexible engagement models for projects or managed services",
];

const faqsList = [
  {
    question: "What cybersecurity services do you provide?",
    answer:
      "We provide full-spectrum enterprise cybersecurity services including Vulnerability Assessment and Penetration Testing (VAPT), 24/7 Security Operations Center (SOC) monitoring, Next-Gen Network Firewalls and IDS/IPS, Endpoint Detection and Response (EDR/XDR), Cloud Security (CSPM), Identity and Access Management (IAM/MFA), Data Loss Prevention (DLP), and Compliance Readiness (ISO 27001, SOC 2, GDPR).",
  },
  {
    question: "Can you help with security compliance (ISO 27001, GDPR, etc.)?",
    answer:
      "Yes. Our certified compliance auditors assist with complete lifecycle compliance advisory for ISO 27001, SOC 2 Type II, GDPR, HIPAA, and PCI-DSS. We conduct initial gap assessments, draft customized policies, implement necessary technical security controls, conduct mock audits, and accompany you throughout the formal certification process.",
  },
  {
    question: "Do you provide 24x7 monitoring and incident response?",
    answer:
      "Yes, our Security Operations Center operates 24 hours a day, 7 days a week, 365 days a year. We employ AI-driven SIEM and automated threat telemetry to spot anomalies in real time, with immediate incident containment SLAs (under 15 minutes for critical threats), forensic isolation, and rapid disaster recovery.",
  },
  {
    question: "Can you secure a multi-cloud environment?",
    answer:
      "Absolutely. We engineer multi-cloud security architectures spanning AWS, Microsoft Azure, Google Cloud, and private hybrid datacenters. We implement centralized Identity Governance, Cloud Security Posture Management (CSPM), microsegmentation, and Zero-Trust network policies so your workloads remain protected across all cloud providers.",
  },
];

export default function Cybersecurity() {
  const { openConsultationModal } = useConsultationModal();

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans">
      <SEOHead {...cybersecuritySeoData} />
      <Navbar />

      {/* --- HERO SECTION (White Theme with Ambient Light) --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-blue-50/30 text-slate-900 pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* Soft Background Radial Light & Atmosphere */}
        <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 left-10 w-[450px] h-[450px] bg-sky-300/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-100/70 border border-blue-200 px-3.5 py-1 rounded-full">
                  CYBERSECURITY SERVICES
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-6">
                Stronger Security <br />
                for a <span className="text-primary">Safer Business.</span>
              </h1>

              {/* Paragraph */}
              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
                Protect your people, data and infrastructure with proactive,
                end-to-end cybersecurity solutions designed for today's evolving
                threats.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                <button
                  onClick={openConsultationModal}
                  className="inline-flex items-center justify-center gap-2 bg-[#0A101D] hover:bg-slate-800 text-white font-medium px-6 py-3.5 rounded-lg shadow-sm hover:shadow transition-all text-sm group"
                >
                  Request a Free Security Assessment
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button
                  onClick={openConsultationModal}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 font-medium px-6 py-3.5 rounded-lg transition-all text-sm group"
                >
                  Talk to an Expert
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              {/* Trust Capability Bar */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-50 text-primary shrink-0">
                    <Shield size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Threat Protection
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-50 text-primary shrink-0">
                    <Database size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Data Security
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-50 text-primary shrink-0">
                    <UserCheck size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Identity & Access
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-50 text-primary shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Compliance Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual (Security Operations Center 24/7 Monitoring) */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[580px] lg:max-w-[640px]">
                {/* Glow ring under image */}
                <div className="absolute inset-0 bg-blue-500/15 rounded-3xl blur-2xl transform scale-95 pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-200/80 bg-slate-950">
                  <img
                    src="/images/cybersecurity/hero-cyber-soc.jpg"
                    alt="Security Operations Center 24/7 Monitoring"
                    className="relative z-10 w-full h-auto object-cover max-h-[520px] transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR APPROACH SECTION ("Detect. Protect. Respond.") --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-3">
            <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
              OUR APPROACH
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Detect. Protect. Respond.
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-16">
            A proactive and layered approach to keep your business secure from
            evolving cyber threats.
          </p>

          {/* Process Timeline Flow */}
          <div className="relative">
            {/* Connecting Curved Wave Line (Desktop) */}
            <div className="hidden lg:block absolute top-[36px] left-[10%] right-[10%] h-[2px] z-0">
              <svg
                className="w-full h-12 overflow-visible"
                viewBox="0 0 1000 40"
                fill="none"
              >
                <path
                  d="M 50,20 Q 250,-10 500,20 T 950,20"
                  stroke="#93C5FD"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 relative z-10">
              {approachSteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.step}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Circle Icon Badge */}
                    <div className="relative mb-5">
                      <div className="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-primary group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm">
                        <IconComponent size={24} />
                      </div>
                      {/* Step Number Tag */}
                      <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2 mt-1">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 max-w-[210px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR SERVICES SECTION ("Comprehensive Cybersecurity Solutions") --- */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-3">
            <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
              OUR SERVICES
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Comprehensive Cybersecurity Solutions
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-14">
            End-to-end services to protect your infrastructure, data and people.
          </p>

          {/* 8 Services Grid (4x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {servicesList.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col group"
                >
                  {/* Top Image Preview */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  </div>

                  {/* Body with overlapping icon */}
                  <div className="p-5 pt-0 relative flex-1 flex flex-col">
                    {/* Floating circular icon badge */}
                    <div className="-mt-6 mb-4 w-12 h-12 rounded-xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-primary group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <IconComp size={20} />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4 flex-1">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- PROACTIVE CYBERSECURITY ("Stay Ahead of Cyber Threats.") --- */}
      <section className="py-12 lg:py-16 bg-[#00081C] text-white relative overflow-hidden">
        {/* Section Background Image Layer - True proportional 2163x727 cinematic widescreen banner */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/cybersecurity/proactive-cyber-bg.jpg"
            alt="Proactive Cybersecurity Threat Protection"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px] lg:min-h-[440px]">
            {/* Left Content & Stats */}
            <div className="lg:col-span-6 xl:col-span-6 py-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold tracking-wider uppercase text-sky-400 bg-sky-950/80 border border-sky-400/30 px-3 py-0.5 rounded-full">
                  PROACTIVE CYBERSECURITY
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white mb-3 leading-[1.15]">
                Stay Ahead <br />
                of <span className="text-blue-500">Cyber Threats.</span>
              </h2>

              {/* Subtitle */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-lg">
                We combine people, process and technology to provide continuous
                protection against evolving threats.
              </p>

              {/* 4 Stat Boxes (2x2 Grid) */}
              <div className="grid grid-cols-2 gap-3.5 max-w-md">
                {metricsList.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={metric.label}
                      className="bg-[#020B1E]/60 border border-white/10 rounded-xl p-3.5 backdrop-blur-md hover:border-blue-500/40 transition-colors shadow-lg shadow-black/20"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {metric.value}
                        </span>
                        <div className="p-1 rounded-md bg-blue-500/10 text-blue-400">
                          <Icon size={16} />
                        </div>
                      </div>
                      <span className="text-[11px] sm:text-xs text-slate-400 font-medium block">
                        {metric.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side spacer on desktop so the glowing globe, lock shield, and orbit lines stay fully visible */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-6 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES WE SUPPORT SECTION ("Cybersecurity for Every Industry") --- */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-3">
            <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
              INDUSTRIES WE SUPPORT
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Cybersecurity for Every Industry
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-14">
            Tailored security solutions for a wide range of industries and
            business sizes.
          </p>

          {/* 7 Industry Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {industriesList.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.name}
                  className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-blue-400 hover:-translate-y-1 transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                    <IconComp size={20} />
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-800 group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE CYBAEMTECH ("Your Trusted Cybersecurity Partner") --- */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image (SOC Operations Center) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                <img
                  src="/images/cybersecurity/soc-partner.png"
                  alt="Cybaem Tech Security Operations Center"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-semibold">24/7 Active SOC Defense</span>
                  </div>
                  <span className="text-slate-300">ISO 27001 Certified</span>
                </div>
              </div>
            </div>

            {/* Right Bullet List */}
            <div className="lg:col-span-6">
              {/* Badge */}
              <div className="inline-flex items-center mb-3">
                <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
                  WHY CHOOSE CYBAEMTECH
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-8">
                Your Trusted Cybersecurity Partner
              </h2>

              {/* Checkmark List */}
              <div className="space-y-4">
                {partnerHighlights.map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-blue-600 text-white mt-0.5 shrink-0">
                      <CheckCircle2 size={15} />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-slate-700 leading-snug">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FREQUENTLY ASKED QUESTIONS ("Common Questions") --- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center mb-2">
                <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
                  FREQUENTLY ASKED QUESTIONS
                </span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Common Questions
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Quick answers to help you understand our cybersecurity services.
              </p>
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

      {/* --- BOTTOM CTA BANNER ("Get a Free Cybersecurity Assessment") --- */}
      <section className="relative overflow-hidden bg-[#0A101D] text-white py-20 sm:py-24">
        {/* Background Image of Luxury High-Tech Boardroom with CYBAEM TECH illuminated wall */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cybersecurity/cyber-assessment-cta.png"
            alt="Cybaem Tech Boardroom"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040814] via-[#040814]/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[11px] font-bold tracking-wider uppercase text-sky-400 bg-sky-950/70 border border-sky-400/30 px-3.5 py-1 rounded-full">
                READY TO STRENGTHEN YOUR SECURITY?
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Get a Free Cybersecurity Assessment
            </h2>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Let our experts assess your current security posture and recommend
              the right solution for your business.
            </p>

            {/* White Pill Button */}
            <button
              onClick={openConsultationModal}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-primary font-semibold px-6 py-3.5 rounded-full shadow-lg transition-all text-sm group"
            >
              Request a Free Assessment
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>

      {/* --- SITE FOOTER --- */}
      <Footer />
    </div>
  );
}
