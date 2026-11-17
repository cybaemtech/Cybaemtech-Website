import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { azureServicesSeoData } from "@/data/seo/azureServicesSeo";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import StrategySessionForm from "@/components/StrategySessionForm";
import {
  Cloud,
  Shield,
  TrendingDown,
  Users,
  Activity,
  Server,
  Database,
  Code,
  Lock,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Layout,
  Target,
  Rocket,
  Check,
  Zap,
  Headphones,
  Play,
  Pause,
  Layers,
  Sparkles,
  BarChart3,
  ShieldCheck,
  RefreshCw,
  Network,
  Cpu,
  MonitorCheck,
  KeyRound,
  HardDrive,
  Briefcase,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Assets
import azureHeroImg from "@/assets/cloud/1.png";

// Data items
const azureReadinessCards = [
  {
    icon: Server,
    title: "Infrastructure complexity is accelerating",
    desc: "Servers, networks, storage accounts, subscriptions, and databases have grown organically over time, creating administrative overhead and blind spots.",
  },
  {
    icon: Network,
    title: "Your Microsoft ecosystem is expanding",
    desc: "Microsoft 365, on-premises Active Directory, cloud applications, and Azure subscriptions must work seamlessly without creating identity vulnerabilities.",
  },
  {
    icon: MonitorCheck,
    title: "Users need secure remote desktops (AVD)",
    desc: "Distributed teams and hybrid staff require virtual desktops that are performant, centrally secured, cost-optimized, and simple to manage.",
  },
  {
    icon: Cpu,
    title: "Migrating from VMware, Hyper-V, or on-premise",
    desc: "Transitioning legacy servers, SQL databases, and file shares to Azure requires structured migration waves with zero operational downtime.",
  },
  {
    icon: BarChart3,
    title: "Azure costs are unpredictable each month",
    desc: "You need real-time visibility into subscription consumption, rightsizing overprovisioned VMs, and Azure Hybrid Benefit cost savings.",
  },
  {
    icon: Shield,
    title: "Disaster recovery strategy remains untested",
    desc: "Having snapshots in Azure Backup isn't enough. You need verified RPO/RTO objectives, Azure Site Recovery automation, and failover drills.",
  },
];

const azureLifecycleStages = [
  {
    num: "01",
    title: "Assess & Architect",
    subtitle: "Design Azure around your workloads — not around a product list.",
    desc: "We translate business growth targets into scalable Azure Landing Zones, secure subscription hierarchies, and cost-controlled virtual network topologies.",
    caps: [
      "Azure Architecture Assessment",
      "Azure Landing Zone Planning",
      "Subscription & Resource Governance",
      "Virtual WAN & ExpressRoute Design",
      "High Availability & Availability Zones",
      "Azure Cost Estimation & Sizing",
    ],
    outcome: "A clear Azure architectural foundation before capital expenditure.",
  },
  {
    num: "02",
    title: "Migrate & Modernize",
    subtitle: "Move what makes sense. Modernize what creates value.",
    desc: "Whether transitioning physical servers, VMware ESXi, Hyper-V, or cross-cloud workloads from AWS/GCP, we follow structured migration waves with automated rollback contingencies.",
    caps: [
      "Azure Migrate Server Migration",
      "VMware & Hyper-V Workload Transition",
      "Live Azure SQL Database Migration",
      "Cross-Cloud AWS/GCP to Azure Migration",
      "Active Directory Domain Services Migration",
      "Pilot Wave Validation & Cutover Testing",
    ],
    outcome: "Zero data loss with proven staging cutover windows.",
  },
  {
    num: "03",
    title: "Secure Identity & Access",
    subtitle: "Your cloud security starts with who has access.",
    desc: "Azure environments are deeply interconnected with users, devices, and applications. We implement Zero Trust identity governance powered by Microsoft Entra ID.",
    caps: [
      "Microsoft Entra ID (Azure AD) Architecture",
      "Conditional Access & Adaptive MFA",
      "Privileged Identity Management (PIM)",
      "Single Sign-On (SSO) Integration",
      "Hybrid Active Directory (Entra Connect)",
      "Microsoft 365 Identity Hardening",
    ],
    outcome: "Complete control over identities, devices, and privileged permissions.",
  },
  {
    num: "04",
    title: "Protect Infrastructure & Data",
    subtitle: "Build resilience before an outage occurs.",
    desc: "A backup is only one part of business continuity. We architect automated disaster recovery that restores business operations within tight RPO/RTO SLAs.",
    caps: [
      "Azure Backup & Recovery Services Vault",
      "Azure Site Recovery (ASR) Orchestration",
      "Cross-Region Disaster Recovery Pairing",
      "Immutable Storage & Ransomware Defense",
      "SQL Database Point-in-Time Recovery",
      "Regular Automated Failover Drills",
    ],
    outcome: "Guaranteed business recovery with verifiable RTO < 15 minutes.",
  },
  {
    num: "05",
    title: "Modernize Applications & DevOps",
    subtitle: "Turn Azure into a high-velocity engineering platform.",
    desc: "Modern Azure environments support microservices, containerization, and automated release cycles that empower development teams to ship faster.",
    caps: [
      "Azure App Service & Container Apps",
      "Azure Kubernetes Service (AKS)",
      "Azure DevOps & GitHub Actions CI/CD",
      "Serverless Azure Functions & Logic Apps",
      "Azure API Management & Gateway",
      "Azure Cosmos DB & Managed SQL",
    ],
    outcome: "Repeatable, automated application deployments with elastic scale.",
  },
  {
    num: "06",
    title: "Enable Secure Virtual Workspaces",
    subtitle: "Deliver desktops and applications wherever your team works.",
    desc: "Azure Virtual Desktop provides secure, centrally administered Windows 11 multi-session environments for remote and branch employees with lower compute overhead.",
    caps: [
      "Azure Virtual Desktop (AVD) Deployment",
      "Windows 11 Multi-Session Host Pools",
      "FSLogix User Profile Management",
      "Secure Application Streaming",
      "Entra ID & MFA Session Protection",
      "Dynamic Autoscale for Cost Optimization",
    ],
    outcome: "High-performance virtual desktops with centralized enterprise control.",
  },
  {
    num: "07",
    title: "Manage & Operate Azure",
    subtitle: "24/7 proactive monitoring, patching, and FinOps optimization.",
    desc: "Offload routine infrastructure maintenance, patch management, security alerts, and night-shift escalations to our certified Azure engineers.",
    caps: [
      "24/7 Network Operations Center (NOC)",
      "Automated OS Patching & Vulnerability Scans",
      "Continuous Azure Cost Management (FinOps)",
      "Incident Response SLA under 15 Minutes",
      "Monthly Executive Health Reviews",
      "Dedicated Azure Account Manager",
    ],
    outcome: "Uncompromised uptime, lower monthly bills, and peace of mind.",
  },
];

const azureProblemCards = [
  {
    q: "“Our servers are still on-premise.”",
    d: "Evaluate what workloads should migrate, what should stay hybrid, and how migration waves should be safely orchestrated.",
    action: "Plan My Azure Migration",
  },
  {
    q: "“We are already running Azure.”",
    d: "Get an independent architectural review of security posture, performance bottlenecks, cost optimization, and operational hygiene.",
    action: "Review My Azure Environment",
  },
  {
    q: "“We run VMware or Hyper-V clusters.”",
    d: "Build a structured, phased migration strategy for virtualized workloads using Azure Migrate with automated testing.",
    action: "Discuss Server Migration",
  },
  {
    q: "“Our Microsoft identity environment is complex.”",
    d: "Consolidate Microsoft Entra ID, access controls, MFA policies, and hybrid Active Directory federation.",
    action: "Assess My Azure Identity",
  },
  {
    q: "“Our workforce needs secure virtual desktops.”",
    d: "Deploy Azure Virtual Desktop (AVD) for centrally secured desktop and application delivery to remote workers.",
    action: "Explore Azure Virtual Desktop",
  },
  {
    q: "“Our internal IT team is overloaded.”",
    d: "Transition 24/7 monitoring, patch management, backup verification, and Azure troubleshooting to an SLA-backed team.",
    action: "Discuss Managed Azure Services",
  },
];

const azureLeadershipCards = [
  {
    role: "CEO / Founder",
    quote: "“Will Azure simplify our technology footprint while providing elastic scalability for growth?”",
    focus: [
      "Scalable, enterprise-grade infrastructure",
      "Uninterrupted business continuity",
      "Single accountable Microsoft partner",
      "Strategic technology roadmap",
    ],
  },
  {
    role: "CTO / CIO",
    quote: "“Is our Azure architecture modern, automated, hybrid-ready, and resilient against downtime?”",
    focus: [
      "Modern Azure Landing Zones",
      "Hybrid cloud & Azure Arc connectivity",
      "Containerized microservices (AKS)",
      "Infrastructure as Code & CI/CD automation",
    ],
  },
  {
    role: "CFO / Finance Head",
    quote: "“Are we gaining financial governance, transparency, and cost predictability over our cloud?”",
    focus: [
      "Comprehensive Azure cost visibility",
      "Azure Hybrid Benefit & Reservations",
      "Rightsizing overprovisioned VMs",
      "Predictable monthly operating budgets",
    ],
  },
  {
    role: "IT & Security Head",
    quote: "“Can we enforce Zero-Trust access, protect endpoints, and secure our Microsoft identity layer?”",
    focus: [
      "Entra ID, MFA & Conditional Access",
      "Privileged Identity Management (PIM)",
      "Microsoft Defender for Cloud",
      "Automated Azure Backup & Site Recovery",
    ],
  },
];

const AzureServices = () => {
  const { openConsultationModal } = useConsultationModal();
  const formRef = useRef<HTMLDivElement>(null);

  // Sliders state for mobile UI
  const readinessSliderRef = useRef<HTMLDivElement>(null);
  const [readinessActive, setReadinessActive] = useState(0);

  const problemSliderRef = useRef<HTMLDivElement>(null);
  const [problemActive, setProblemActive] = useState(0);

  const leadershipSliderRef = useRef<HTMLDivElement>(null);
  const [leadershipActive, setLeadershipActive] = useState(0);

  // 4-second slideshow state for END-TO-END CAPABILITY on mobile UI
  const [activeLifecycleStage, setActiveLifecycleStage] = useState(0);
  const [isLifecyclePaused, setIsLifecyclePaused] = useState(false);

  useEffect(() => {
    if (isLifecyclePaused) return;
    const interval = setInterval(() => {
      setActiveLifecycleStage((prev) => (prev + 1) % azureLifecycleStages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isLifecyclePaused]);

  const scrollToForm = () => {
    const el = document.getElementById("strategy-session-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSliderScroll = (
    ref: React.RefObject<HTMLDivElement>,
    setter: (idx: number) => void
  ) => {
    if (!ref.current) return;
    const { scrollLeft, clientWidth } = ref.current;
    if (clientWidth > 0) {
      const idx = Math.round(scrollLeft / (clientWidth * 0.78));
      setter(idx);
    }
  };

  const scrollToSlide = (
    ref: React.RefObject<HTMLDivElement>,
    index: number,
    setter: (idx: number) => void
  ) => {
    if (!ref.current) return;
    const cards = ref.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setter(index);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans">
      <SEOHead {...azureServicesSeoData} />
      <Navbar />

      {/* =========================================================================
          HERO SECTION: SIGNATURE LIGHT CYBAEM ATMOSPHERE
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-blue-50/30 pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* Soft Radial Ambient Lights */}
        <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-sky-400/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 left-10 w-[450px] h-[450px] bg-blue-300/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Pill Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#0078D4] bg-sky-100/70 border border-sky-200 px-3.5 py-1 rounded-full flex items-center gap-1.5">
                  <Cloud size={13} className="text-[#0078D4]" />
                  CYBAEM TECH • MICROSOFT AZURE SERVICES
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6 font-display">
                Microsoft Azure Services Designed Around{" "}
                <span className="text-[#0078D4]">Your Business.</span>
              </h1>

              {/* Punchy Subheading */}
              <p className="text-lg sm:text-xl font-semibold text-slate-700 mb-4">
                Modernize your infrastructure. Secure your identity. Control your cloud.
              </p>

              {/* Lead Paragraph */}
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
                Microsoft Azure delivers unmatched synergy across infrastructure, Windows Server,
                Microsoft Entra ID, SQL databases, and modern virtual desktops. CybaemTech helps organizations
                assess, architect, migrate, secure, optimize, and manage Azure environments with 24/7 SLA-backed excellence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 bg-[#0078D4] hover:bg-[#006CBE] text-white font-semibold px-7 py-3.5 rounded-xl shadow-md shadow-sky-600/20 hover:shadow-lg hover:shadow-sky-600/30 transition-all text-sm group cursor-pointer"
                >
                  Book a Free Strategy Session
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button
                  onClick={openConsultationModal}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 font-semibold px-6 py-3.5 rounded-xl transition-all text-sm group cursor-pointer"
                >
                  <Play size={13} className="text-[#0078D4] fill-[#0078D4]" />
                  Talk to an Azure Specialist
                </button>
              </div>

              {/* Trust Capabilities Pill Row */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-sky-50 text-[#0078D4] shrink-0">
                    <KeyRound size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Entra ID Zero-Trust
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-sky-50 text-[#0078D4] shrink-0">
                    <TrendingDown size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Azure FinOps Control
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-sky-50 text-[#0078D4] shrink-0">
                    <Activity size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    99.99% Uptime SLA
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-sky-50 text-[#0078D4] shrink-0">
                    <Zap size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Zero-Downtime Migration
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px]">
                {/* Hero Showcase Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sky-200/80 bg-white group">
                  <div className="relative aspect-[4/3.4] overflow-hidden bg-slate-50">
                    <img
                      src={azureHeroImg}
                      alt="Cybaem Tech Microsoft Azure Cloud Architecture & Management"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                  </div>

               
                </div>

                {/* Floating Badge Top-Right */}
                <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0078D4] flex items-center justify-center">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block leading-tight">
                      Zero-Trust Ready
                    </span>
                    <span className="text-[10px] text-slate-500">Entra ID & MFA</span>
                  </div>
                </div>

                {/* Floating Badge Bottom-Left */}
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <TrendingDown size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block leading-tight">
                      30%+ Avg. Savings
                    </span>
                    <span className="text-[10px] text-slate-500">Azure Cost Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: GROWTH CHALLENGES (AZURE READINESS CHECK)
          [SLIDER ON MOBILE, GRID ON DESKTOP]
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#0078D4] bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full">
                AZURE READINESS CHECK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Is Your Azure Environment Ready for the Next Stage of Growth?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Moving to Azure is straightforward. Designing an Azure environment that remains secure,
              cost-conscious, easily manageable, and scalable under enterprise load requires proven architecture.
            </p>
          </div>

          {/* Desktop Grid (Hidden on Mobile) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {azureReadinessCards.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_40px_-5px_rgba(0,120,212,0.12)] hover:border-sky-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0078D4] flex items-center justify-center mb-6 group-hover:bg-[#0078D4] group-hover:text-white transition-colors duration-300 shadow-xs">
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0078D4] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider View (Visible on Mobile Only) */}
          <div className="md:hidden">
            <div
              ref={readinessSliderRef}
              onScroll={() => handleSliderScroll(readinessSliderRef, setReadinessActive)}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 -mx-4 px-4"
            >
              {azureReadinessCards.map((item, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-[84vw] max-w-[320px] snap-center bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0078D4] flex items-center justify-center mb-4 shadow-xs">
                      <item.icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots for Mobile Slider */}
            <div className="flex justify-center items-center gap-1.5 mt-3">
              {azureReadinessCards.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToSlide(readinessSliderRef, dotIdx, setReadinessActive)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    readinessActive === dotIdx ? "w-6 bg-[#0078D4]" : "w-2 bg-slate-300"
                  }`}
                  aria-label={`Slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: AZURE ECOSYSTEM (PREMIUM DARK SLATE BANNER)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#071328] text-white relative overflow-hidden">
        {/* Glow vector */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-wider uppercase text-sky-300 bg-sky-900/60 border border-sky-700/50 px-3.5 py-1 rounded-full">
                CONNECTED TECHNOLOGY PLATFORM
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-4">
              Azure Is More Than Cloud Infrastructure
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              For modern enterprises, Azure isn't simply moving virtual machines. It connects your
              infrastructure, identity, cloud apps, and modern workplace into a single resilient operating platform:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              {
                title: "Infrastructure",
                icon: Server,
                desc: "Azure VMs, Virtual Networks, ExpressRoute, Azure Storage, and hybrid on-prem connectivity.",
              },
              {
                title: "Identity & Entra",
                icon: Lock,
                desc: "Microsoft Entra ID, Conditional Access, Multi-Factor Authentication, and seamless hybrid SSO.",
              },
              {
                title: "Modern Apps",
                icon: Code,
                desc: "Azure App Service, Azure Kubernetes Service (AKS), Container Apps, APIs, and Azure SQL.",
              },
              {
                title: "Virtual Workplace",
                icon: Layout,
                desc: "Azure Virtual Desktop (AVD), FSLogix profile containers, and secure remote application publishing.",
              },
              {
                title: "Security & SOC",
                icon: Shield,
                desc: "Microsoft Defender for Cloud, Microsoft Sentinel SIEM, Network Security Groups, and Key Vault.",
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-900/70 backdrop-blur-sm border border-sky-500/20 p-6 rounded-2xl flex flex-col justify-between hover:border-sky-400/50 transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
                    <pillar.icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Core Philosophy Banner */}
          <div className="bg-gradient-to-r from-sky-950/60 via-blue-900/40 to-sky-950/60 border border-sky-500/30 p-8 rounded-2xl max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl font-bold text-sky-100 leading-snug">
              “The goal is never to spin up arbitrary cloud products. <br className="hidden sm:inline" />
              The goal is to engineer a predictable, secure Azure foundation that accelerates business growth.”
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: START WITH AN AZURE STRATEGY SESSION (ROADMAP & DELIVERABLE)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#0078D4] bg-sky-50 border border-sky-200/80 px-3.5 py-1 rounded-full">
                STRATEGIC ROADMAP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Start With a Microsoft Azure Strategy Session
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Know what you have. Understand what needs to change. Make decisions backed by data.
              Our Microsoft Azure Strategy Session provides a structured, executive-level technical review with tangible action steps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left: What We Inspect */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0078D4] flex items-center justify-center">
                    <Target size={20} />
                  </div>
                  What We Review in Your Strategy Session
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      title: "Infrastructure & Virtual Networks",
                      desc: "Virtual machines, storage accounts, subnets, ExpressRoute/VPN tunnels, and dependency mapping.",
                    },
                    {
                      title: "Identity & Entra ID Security",
                      desc: "Microsoft Entra ID, Conditional Access policies, MFA adoption, role-based access, and privileged accounts.",
                    },
                    {
                      title: "FinOps & Azure Cost Optimization",
                      desc: "Underutilized compute, orphaned managed disks, unattached public IPs, and Azure Hybrid Benefit eligibility.",
                    },
                    {
                      title: "Resilience & Business Continuity",
                      desc: "Azure Backup configurations, Recovery Services vaults, Azure Site Recovery, and tested RPO/RTO SLAs.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-[#0078D4] mt-2 shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                        <p className="text-slate-600 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                  Session Format & Delivery
                </span>
                <p className="text-sm text-slate-700">
                  Comprehensive 1-on-1 strategy session completed with <strong>actionable documentation</strong> within 3–5 business days.
                </p>
              </div>
            </div>

            {/* Right: What You Receive */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-sky-200 shadow-md shadow-sky-500/5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Rocket size={20} />
                  </div>
                  What You Gain from the Session
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      label: "Current State Topology Blueprint",
                      desc: "Complete visual diagram of your existing infrastructure, networks, and identities.",
                    },
                    {
                      label: "Security & Risk Exposure Audit",
                      desc: "Prioritized severity breakdown of identity risks, exposed endpoints, and backup gaps.",
                    },
                    {
                      label: "Actionable FinOps Savings Targets",
                      desc: "Concrete recommendations to trim monthly Azure bills via Reservations and Rightsizing.",
                    },
                    {
                      label: "Target Architecture & Roadmap",
                      desc: "Step-by-step phased execution plan with realistic timelines, resource requirements, and costs.",
                    },
                  ].map((res, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3"
                    >
                      <CheckCircle2 size={18} className="text-[#0078D4] mt-0.5 shrink-0" />
                      <div>
                        <span className="text-sm font-bold text-slate-900 block">{res.label}</span>
                        <span className="text-xs text-slate-600">{res.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button
                  onClick={scrollToForm}
                  className="w-full py-3.5 bg-[#0078D4] hover:bg-[#006CBE] text-white rounded-xl font-bold transition-all shadow-md text-sm cursor-pointer"
                >
                  Book a Free Strategy Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: 7-STAGE AZURE LIFECYCLE (END-TO-END CAPABILITY)
          [4-SECOND SLIDESHOW ON MOBILE, STACKED LIST ON DESKTOP]
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#0078D4] bg-sky-50 border border-sky-200/80 px-3.5 py-1 rounded-full">
                END-TO-END CAPABILITY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              One Partner Across the Azure Lifecycle
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              From architectural blueprint and zero-downtime migration to identity hardening and 24/7 managed NOC operations.
            </p>
          </div>

          {/* Desktop Stacked View (Hidden on Mobile) */}
          <div className="hidden md:block space-y-6">
            {azureLifecycleStages.map((stage, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row gap-8 items-start justify-between"
              >
                <div className="lg:w-1/3">
                  <span className="text-4xl sm:text-5xl font-black text-sky-100 font-display block mb-2">
                    {stage.num}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{stage.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0078D4] mb-3">
                    {stage.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">{stage.desc}</p>
                </div>

                <div className="lg:w-2/3 w-full border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Core Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {stage.caps.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={15} className="text-[#0078D4] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-sky-50/80 border border-sky-100 rounded-xl p-3.5 flex items-center gap-2.5">
                    <span className="text-xs font-bold text-[#0078D4] uppercase tracking-wider shrink-0">
                      Outcome:
                    </span>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      {stage.outcome}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile 4-Second Auto Slideshow View (Visible on Mobile Only) */}
          <div
            className="md:hidden"
            onMouseEnter={() => setIsLifecyclePaused(true)}
            onMouseLeave={() => setIsLifecyclePaused(false)}
            onTouchStart={() => setIsLifecyclePaused(true)}
            onTouchEnd={() => setIsLifecyclePaused(false)}
          >
            {/* Top 4-Second Timer Progress Bar */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-4">
              <motion.div
                key={activeLifecycleStage}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
                className="h-full bg-[#0078D4]"
              />
            </div>

            {/* Slideshow Active Card with Smooth Transitions */}
            <AnimatePresence mode="wait">
              {(() => {
                const stage = azureLifecycleStages[activeLifecycleStage];
                return (
                  <motion.div
                    key={activeLifecycleStage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg flex flex-col gap-5"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-3xl font-black text-sky-200 font-display">
                          {stage.num}
                        </span>
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-50 text-[#0078D4] border border-sky-200/80">
                          Stage {activeLifecycleStage + 1} of {azureLifecycleStages.length}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {stage.title}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#0078D4] mb-3">
                        {stage.subtitle}
                      </p>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-4">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Core Capabilities
                      </h4>
                      <div className="space-y-2 mb-4">
                        {stage.caps.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 size={14} className="text-[#0078D4] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-sky-50/90 border border-sky-100 rounded-xl p-3 flex items-start gap-2">
                        <span className="text-[11px] font-bold text-[#0078D4] uppercase tracking-wider shrink-0 mt-0.5">
                          Outcome:
                        </span>
                        <span className="text-xs text-slate-700 font-medium">
                          {stage.outcome}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            {/* Slideshow Navigation Controls (Prev / Next & Dots) */}
            <div className="flex items-center justify-between mt-5 pt-2">
              <button
                type="button"
                onClick={() =>
                  setActiveLifecycleStage(
                    (prev) => (prev - 1 + azureLifecycleStages.length) % azureLifecycleStages.length
                  )
                }
                className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-[#0078D4] hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
                aria-label="Previous lifecycle stage"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Numbered Indicator Dots */}
              <div className="flex items-center gap-1.5">
                {azureLifecycleStages.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setActiveLifecycleStage(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeLifecycleStage === dotIdx ? "w-6 bg-[#0078D4]" : "w-2 bg-slate-200"
                    }`}
                    aria-label={`Go to stage ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveLifecycleStage((prev) => (prev + 1) % azureLifecycleStages.length)
                }
                className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-[#0078D4] hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
                aria-label="Next lifecycle stage"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: WHAT ARE YOU TRYING TO SOLVE? (PROBLEM-FIRST ENGINEERING)
          [SLIDER ON MOBILE, GRID ON DESKTOP]
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-slate-50/60 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#0078D4] bg-sky-50 border border-sky-200/80 px-3.5 py-1 rounded-full">
                PROBLEM-FIRST ENGINEERING
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              What Are You Trying to Solve?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Start with the business outcome — not an arbitrary cloud catalog.
            </p>
          </div>

          {/* Desktop Grid (Hidden on Mobile) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {azureProblemCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
                    {card.q}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {card.d}
                  </p>
                </div>

                <button
                  onClick={scrollToForm}
                  className="text-xs font-bold text-[#0078D4] hover:text-[#005a9e] inline-flex items-center gap-1.5 transition-colors group cursor-pointer pt-2"
                >
                  {card.action}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            ))}
          </div>

          {/* Mobile Slider View (Visible on Mobile Only) */}
          <div className="md:hidden">
            <div
              ref={problemSliderRef}
              onScroll={() => handleSliderScroll(problemSliderRef, setProblemActive)}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 -mx-4 px-4"
            >
              {azureProblemCards.map((card, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-[84vw] max-w-[320px] snap-center bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                      {card.q}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {card.d}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="text-xs font-bold text-[#0078D4] hover:text-[#005a9e] inline-flex items-center gap-1.5 transition-colors group cursor-pointer pt-2 border-t border-slate-100"
                  >
                    {card.action}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination Dots for Mobile Slider */}
            <div className="flex justify-center items-center gap-1.5 mt-3">
              {azureProblemCards.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToSlide(problemSliderRef, dotIdx, setProblemActive)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    problemActive === dotIdx ? "w-6 bg-[#0078D4]" : "w-2 bg-slate-300"
                  }`}
                  aria-label={`Problem slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: LEADERSHIP PERSPECTIVES (EXECUTIVE ALIGNMENT)
          [SLIDER ON MOBILE, GRID ON DESKTOP]
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#0078D4] bg-sky-50 border border-sky-200/80 px-3.5 py-1 rounded-full">
                EXECUTIVE ALIGNMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Azure Through the Lens of Your Leadership
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Different stakeholders care about different outcomes. We align with each:
            </p>
          </div>

          {/* Desktop Grid (Hidden on Mobile) */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {azureLeadershipCards.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#0078D4] uppercase tracking-wider block mb-2">
                    {p.role}
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-900 mb-6 italic">
                    {p.quote}
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    CybaemTech Delivery Focus
                  </span>
                  <div className="space-y-1.5">
                    {p.focus.map((f, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check size={13} className="text-[#0078D4] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider View (Visible on Mobile Only) */}
          <div className="md:hidden">
            <div
              ref={leadershipSliderRef}
              onScroll={() => handleSliderScroll(leadershipSliderRef, setLeadershipActive)}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 -mx-4 px-4"
            >
              {azureLeadershipCards.map((p, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-[84vw] max-w-[320px] snap-center bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#0078D4] uppercase tracking-wider block mb-2">
                      {p.role}
                    </span>
                    <p className="text-sm font-bold text-slate-900 mb-4 italic leading-snug">
                      {p.quote}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 mt-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                      CybaemTech Delivery Focus
                    </span>
                    <div className="space-y-1">
                      {p.focus.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                          <Check size={12} className="text-[#0078D4] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots for Mobile Slider */}
            <div className="flex justify-center items-center gap-1.5 mt-3">
              {azureLeadershipCards.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToSlide(leadershipSliderRef, dotIdx, setLeadershipActive)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    leadershipActive === dotIdx ? "w-6 bg-[#0078D4]" : "w-2 bg-slate-300"
                  }`}
                  aria-label={`Leadership slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: STRATEGY SESSION FORM (GET STARTED • BOOK A FREE STRATEGY SESSION)
          ========================================================================= */}
      <section ref={formRef} className="py-20 lg:py-24 bg-[#0A101D] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Form Left Pitch */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-[11px] font-bold tracking-wider uppercase text-sky-300 bg-sky-900/60 border border-sky-700/50 px-3.5 py-1 rounded-full">
                  1-ON-1 STRATEGY SESSION
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-6">
                Don't Guess. Book Your Azure Strategy Session.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                Get an independent, executive-level technical review of your Azure architecture, Microsoft identity,
                monthly spending, and disaster recovery roadmap.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <p className="text-sm text-slate-300">
                    Complimentary 1-on-1 strategy session covering architecture, Entra ID, and cloud spending.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <p className="text-sm text-slate-300">
                    Actionable roadmap with clear savings and risk mitigation targets.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <p className="text-sm text-slate-300">
                    Direct consultation with a certified Microsoft Azure Solutions Architect.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Component: GET STARTED • Book a Free Strategy Session */}
            <div className="lg:col-span-7">
              <StrategySessionForm
                accentColor="#0078D4"
                tagText="GET STARTED"
                title="Book a Free Strategy Session"
                subtitle="Share your details and our Microsoft Azure Architects will connect with you with a tailored strategy for your business."
                buttonText="Book My Strategy Session"
                defaultService="Cloud Solutions (AWS & Microsoft Azure)"
                id="strategy-session-form"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: FREQUENTLY ASKED QUESTIONS (ACCORDION)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#0078D4] bg-sky-50 border border-sky-200/80 px-3.5 py-1 rounded-full">
                COMMON QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Clear answers regarding Azure strategy, migration, Entra ID security, AVD, and managed operations.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {[
              {
                q: "What is covered in a Free Microsoft Azure Strategy Session?",
                a: "In your strategy session, our Microsoft-certified Azure architects evaluate your infrastructure, Active Directory / Entra ID posture, workload migration readiness, and Azure Cost Management opportunities to deliver a clear, actionable cloud roadmap.",
              },
              {
                q: "What Microsoft Azure services does CybaemTech provide?",
                a: "CybaemTech provides comprehensive Microsoft Azure consulting, Landing Zone architecture, physical/virtual server migration, Microsoft Entra ID governance, Azure Virtual Desktop (AVD), Azure Backup & Site Recovery, App Services, AKS containerization, and 24/7 SLA-backed managed NOC support.",
              },
              {
                q: "Can you migrate our existing on-premise physical or VMware servers to Azure?",
                a: "Yes. We execute end-to-end migrations for physical servers, VMware ESXi clusters, Hyper-V virtual machines, SQL Server databases, and Windows file shares using Azure Migrate with phased wave cutovers and minimal disruption.",
              },
              {
                q: "Can you migrate workloads from AWS or Google Cloud to Azure?",
                a: "Yes. Cross-cloud migrations and multi-cloud architectures are standard engagements for our team, evaluating database schemas, storage transfers, and network connectivity between clouds.",
              },
              {
                q: "Can you manage Microsoft Entra ID (Azure AD) and hybrid identity?",
                a: "Absolutely. We configure Microsoft Entra ID, Single Sign-On (SSO), Multi-Factor Authentication (MFA), Conditional Access policies, Role-Based Access Control (RBAC), and hybrid Active Directory synchronization via Entra Connect.",
              },
              {
                q: "How does CybaemTech implement Azure Virtual Desktop (AVD)?",
                a: "We design and deploy turnkey AVD environments utilizing Windows 11 Enterprise Multi-Session, FSLogix user profile containers on Azure Files, application publishing, Entra ID MFA integration, and dynamic autoscale automation to lower compute costs.",
              },
              {
                q: "Do you provide 24/7 ongoing Azure managed services?",
                a: "Yes. Our 24/7 Managed NOC provides continuous health monitoring, automated OS security patching, backup verification, proactive incident escalation (<15 min SLA), and ongoing FinOps cost optimization.",
              },
              {
                q: "How do you help organizations reduce their monthly Azure bills?",
                a: "Through structured Azure FinOps: rightsizing overprovisioned VMs, eliminating orphaned disks, enabling Azure Hybrid Benefit for Windows Server & SQL Server licenses, and structuring 1-year or 3-year Azure Reserved Virtual Machine Instances for up to 40%+ savings.",
              },
              {
                q: "Do you provide Azure backup and disaster recovery solutions?",
                a: "Yes. We configure Azure Backup, Recovery Services vaults, Azure Site Recovery (ASR), cross-region replication, and automated failover drills designed to meet demanding Recovery Point (RPO) and Recovery Time (RTO) objectives.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-slate-200 rounded-xl px-5 bg-white data-[state=open]:border-sky-500/50 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="text-sm sm:text-base font-semibold text-slate-800 hover:text-[#0078D4] hover:no-underline py-4 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pb-4 pt-1 border-t border-slate-100">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CONSULTATION CARD
          ========================================================================= */}
      <section className="py-16 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sky-50/80 border border-sky-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0078D4] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Headphones size={22} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Need help architecting or migrating your Azure cloud?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                  Connect directly with our Azure Solutions Architects to discuss workload specifications,
                  Entra ID security, and cost optimization milestones.
                </p>
              </div>
            </div>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 bg-[#0A101D] hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-full shrink-0 shadow-sm transition-all group cursor-pointer"
            >
              Book a Free Strategy Session
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AzureServices;
