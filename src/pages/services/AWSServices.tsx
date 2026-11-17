import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { awsServicesSeoData } from "@/data/seo/awsServicesSeo";
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
  Layers,
  Sparkles,
  BarChart3,
  ShieldCheck,
  RefreshCw,
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
import awsHeroImg from "@/assets/cloud/2.png";

// Data items
const awsHealthCards = [
  {
    icon: TrendingDown,
    title: "Your AWS costs keep increasing",
    desc: "You receive large monthly bills, but lack granularity into what resources or idle workloads drive them, and where savings can be safely achieved.",
  },
  {
    icon: Users,
    title: "Engineers managing servers instead of code",
    desc: "Patching, EC2 monitoring, network alerts, and troubleshooting consume valuable developer hours that should be invested in core business features.",
  },
  {
    icon: Shield,
    title: "Security & IAM getting harder to control",
    desc: "Unmanaged access keys, broad IAM roles, unsegmented VPCs, and compliance standards (ISO 27001, SOC 2, HIPAA) require constant scrutiny.",
  },
  {
    icon: Server,
    title: "Planning an on-premise or cross-cloud migration",
    desc: "Migrating databases, microservices, and legacy applications requires dependency mapping, phased wave cutovers, and zero business interruption.",
  },
  {
    icon: Activity,
    title: "Disaster recovery strategy is untested",
    desc: "Having snapshots in S3 is not a tested DR strategy. You need verifiable RPO/RTO SLAs, multi-region replication, and automated failover.",
  },
  {
    icon: Cloud,
    title: "Need senior cloud skills without full-time overhead",
    desc: "Hiring dedicated DevOps, Solutions Architects, and 24/7 SRE teams is slow and costly. You need an on-demand, SLA-backed technology partner.",
  },
];

const awsLifecycleStages = [
  {
    num: "01",
    title: "Assess & Architect",
    subtitle: "Lay the foundation right the first time.",
    desc: "We translate business growth targets into scalable AWS multi-account structures, secure VPC topologies, and cost-controlled infrastructure.",
    caps: [
      "AWS Well-Architected Review",
      "VPC & Subnet Segmentation",
      "Multi-Account Organization (AWS Control Tower)",
      "High Availability & Multi-AZ Design",
      "AWS Cost Modeling & Sizing",
      "IAM Role & Access Governance",
    ],
    outcome: "Eliminates technical debt before significant engineering investments.",
  },
  {
    num: "02",
    title: "Migrate & Modernize",
    subtitle: "Move workloads without downtime.",
    desc: "Whether transitioning physical servers, VMware clusters, or cross-cloud workloads, we follow structured migration waves with automated rollback contingencies.",
    caps: [
      "Live Database Migration (AWS DMS)",
      "Server & VM Migration (AWS MGN)",
      "Containerization (ECS & EKS)",
      "Serverless Migration (Lambda & API Gateway)",
      "Storage Sync to S3 & EFS",
      "Cutover Validation & Smoke Testing",
    ],
    outcome: "Zero data loss with proven staging cutover windows.",
  },
  {
    num: "03",
    title: "Secure & Protect",
    subtitle: "Build security into every tier.",
    desc: "Automated threat detection, least-privilege IAM permissions, DDoS protection, and encrypted storage configurations designed for stringent compliance.",
    caps: [
      "AWS WAF & Shield DDoS Protection",
      "AWS GuardDuty & Security Hub",
      "KMS Data Encryption at Rest & in Transit",
      "Automated Cross-Region Backups (AWS Backup)",
      "Disaster Recovery (RTO < 15 min, RPO < 5 min)",
      "Compliance Auditing (SOC 2, ISO 27001, GDPR)",
    ],
    outcome: "Continuous threat defense and immediate audit readiness.",
  },
  {
    num: "04",
    title: "Optimize & Automate",
    subtitle: "Efficiency, visibility, and automation.",
    desc: "We build repeatable CI/CD pipelines, container orchestration, and FinOps policies that lower operational overhead and boost developer velocity.",
    caps: [
      "Infrastructure as Code (Terraform & CloudFormation)",
      "CI/CD Pipelines (CodePipeline & GitHub Actions)",
      "Kubernetes Management (Amazon EKS)",
      "Continuous FinOps & Savings Plans",
      "Centralized CloudWatch & OpenSearch Dashboards",
      "Auto-Remediation Lambdas",
    ],
    outcome: "Higher engineering velocity with lower monthly AWS spend.",
  },
  {
    num: "05",
    title: "Manage & Operate",
    subtitle: "24/7 NOC monitoring and incident support.",
    desc: "Offload 2am alerts and routine maintenance to our cloud engineers so your team stays focused on product development.",
    caps: [
      "24/7 Network Operations Center (NOC)",
      "Automated OS Patching & Vulnerability Scans",
      "Proactive Performance Tuning",
      "Escalation SLAs under 15 Minutes",
      "Monthly Executive Health Reviews",
      "Dedicated Cloud Account Manager",
    ],
    outcome: "Uncompromised uptime with complete operational peace of mind.",
  },
];

const awsLeadershipCards = [
  {
    role: "CEO / Founder",
    quote: "“Will our cloud support growth without creating technical debt or outage risk?”",
    focus: [
      "Continuous uptime & SLA guarantees",
      "Rapid go-to-market speed",
      "Single accountable tech partner",
      "Protected brand reputation",
    ],
  },
  {
    role: "CTO / Engineering Lead",
    quote: "“Is the architecture clean, automated, observable, and easy for engineers to ship on?”",
    focus: [
      "Infrastructure as Code (IaC)",
      "Modern CI/CD delivery",
      "Containerized microservices",
      "Zero manual patching toil",
    ],
  },
  {
    role: "CFO / Finance Head",
    quote: "“Where is our AWS capital going, and how can we prevent surprise month-end spikes?”",
    focus: [
      "Transparent cost attribution",
      "Savings Plans & Reserved Instances",
      "Right-sizing idle resources",
      "Predictable monthly budgeting",
    ],
  },
  {
    role: "CISO / Compliance Head",
    quote: "“Are our access permissions, encrypted databases, and VPC networks secure from threats?”",
    focus: [
      "Zero Trust IAM governance",
      "Automated threat monitoring",
      "Fast disaster recovery failover",
      "SOC 2 & ISO compliance posture",
    ],
  },
];

const AWSServices = () => {
  const { openConsultationModal } = useConsultationModal();
  const formRef = useRef<HTMLDivElement>(null);

  // Sliders state for mobile UI
  const healthSliderRef = useRef<HTMLDivElement>(null);
  const [healthActive, setHealthActive] = useState(0);

  const leadershipSliderRef = useRef<HTMLDivElement>(null);
  const [leadershipActive, setLeadershipActive] = useState(0);

  // 4-second slideshow state for END-TO-END CAPABILITY on mobile UI
  const [activeLifecycleStage, setActiveLifecycleStage] = useState(0);
  const [isLifecyclePaused, setIsLifecyclePaused] = useState(false);

  useEffect(() => {
    if (isLifecyclePaused) return;
    const interval = setInterval(() => {
      setActiveLifecycleStage((prev) => (prev + 1) % awsLifecycleStages.length);
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
      <SEOHead {...awsServicesSeoData} />
      <Navbar />

      {/* =========================================================================
          HERO SECTION: SIGNATURE LIGHT CYBAEM ATMOSPHERE
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-blue-50/30 pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* Soft Radial Ambient Lights */}
        <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 left-10 w-[450px] h-[450px] bg-sky-300/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Pill Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-100/70 border border-blue-200 px-3.5 py-1 rounded-full flex items-center gap-1.5">
                  <Cloud size={13} className="text-primary" />
                  CYBAEM TECH • AWS CLOUD SERVICES
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6 font-display">
                AWS Cloud Services Designed Around{" "}
                <span className="text-primary">Your Business.</span>
              </h1>

              {/* Punchy Subheading */}
              <p className="text-lg sm:text-xl font-semibold text-slate-700 mb-4">
                Secure your cloud. Control your costs. Scale with confidence.
              </p>

              {/* Lead Paragraph */}
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
                AWS provides unprecedented elasticity, but high performance requires rigorous architecture,
                proactive security governance, FinOps cost controls, and continuous management. CybaemTech
                helps modern enterprises assess, migrate, optimize, and manage AWS workloads without the overhead.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all text-sm group cursor-pointer"
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
                  <Play size={13} className="text-primary fill-blue-600" />
                  Talk to an AWS Specialist
                </button>
              </div>

              {/* Trust Capabilities Pill Row */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-50 text-primary shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Well-Architected
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-50 text-primary shrink-0">
                    <TrendingDown size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    FinOps Cost Control
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-50 text-primary shrink-0">
                    <Activity size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    99.99% Uptime SLA
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-50 text-primary shrink-0">
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
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-200/80 bg-white group">
                  <div className="relative aspect-[4/3.4] overflow-hidden bg-slate-50">
                    <img
                      src={awsHeroImg}
                      alt="Cybaem Tech AWS Cloud Architecture & Management"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                  </div>

              
                </div>

                {/* Floating Badge Top-Right */}
                <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                    <Shield size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block leading-tight">
                      Security-First
                    </span>
                    <span className="text-[10px] text-slate-500">IAM & Least Privilege</span>
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
                    <span className="text-[10px] text-slate-500">Cost Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: GROWTH CHALLENGES (CLOUD HEALTH CHECK)
          [SLIDER ON MOBILE, GRID ON DESKTOP]
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
                CLOUD HEALTH CHECK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Is Your AWS Environment Ready for Your Next Stage of Growth?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Your cloud environment may be running today — but that doesn't mean it is operating securely,
              cost-effectively, or with room for rapid scale.
            </p>
          </div>

          {/* Desktop Grid (Hidden on Mobile) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {awsHealthCards.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_40px_-5px_rgba(0,82,204,0.12)] hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-xs">
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
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
              ref={healthSliderRef}
              onScroll={() => handleSliderScroll(healthSliderRef, setHealthActive)}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 -mx-4 px-4"
            >
              {awsHealthCards.map((item, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-[84vw] max-w-[320px] snap-center bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4 shadow-xs">
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
              {awsHealthCards.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToSlide(healthSliderRef, dotIdx, setHealthActive)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    healthActive === dotIdx ? "w-6 bg-primary" : "w-2 bg-slate-300"
                  }`}
                  aria-label={`Health slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: 4 BUSINESS PERSPECTIVES (PREMIUM DARK SLATE BANNER)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#071328] text-white relative overflow-hidden">
        {/* Glow vector */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-wider uppercase text-blue-300 bg-blue-900/60 border border-blue-700/50 px-3.5 py-1 rounded-full">
                HOLISTIC ARCHITECTURE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-4">
              Before Recommending Services, We Understand Your Business
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              The goal isn't to spin up more AWS services. It's to build the right operating environment.
              We analyze your cloud through four connected lenses:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Business Lens",
                question: "How should cloud infrastructure support revenue, market expansion, and operational resilience?",
                accent: "border-sky-500/30",
              },
              {
                title: "Technology Lens",
                question: "Is the AWS architecture secure, modular, highly available, and ready for containerized workloads?",
                accent: "border-blue-500/30",
              },
              {
                title: "Finance (FinOps)",
                question: "Where is capital committed, where is waste occurring, and how can reserved instances save spend?",
                accent: "border-emerald-500/30",
              },
              {
                title: "Security & Risk",
                question: "Are IAM policies, VPC boundaries, encryption keys, and audit logs aligned to compliance mandates?",
                accent: "border-purple-500/30",
              },
            ].map((lens, idx) => (
              <div
                key={idx}
                className={`bg-slate-900/70 backdrop-blur-sm border ${lens.accent} p-7 rounded-2xl flex flex-col justify-between`}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
                    0{idx + 1} • Lens
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{lens.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{lens.question}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Core Philosophy Banner */}
          <div className="bg-gradient-to-r from-blue-900/40 via-blue-800/30 to-blue-900/40 border border-blue-500/30 p-8 rounded-2xl max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl font-bold text-blue-100 leading-snug">
              “The objective is never to consume more AWS products. <br className="hidden sm:inline" />
              The objective is to make AWS run smoothly so you can focus on building your business.”
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: START WITH A CLOUD STRATEGY SESSION (ROADMAP & DELIVERABLE)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
                STRATEGIC ROADMAP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Start With an AWS Cloud Strategy Session
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Gain architectural clarity and cost transparency before committing engineering hours.
              Our AWS Cloud Strategy Session provides an executive-level technical review with tangible action steps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left: What We Review */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                    <Target size={20} />
                  </div>
                  What We Review in Your Strategy Session
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      title: "Architecture & Resilience",
                      desc: "Multi-AZ availability, auto-scaling configurations, load balancing, and failure isolation.",
                    },
                    {
                      title: "FinOps Cost Optimization",
                      desc: "Underutilized EC2/RDS instances, orphaned EBS volumes, right-sizing, and Savings Plans.",
                    },
                    {
                      title: "Identity & Security Posture",
                      desc: "IAM least-privilege, root account locks, CloudTrail auditing, GuardDuty alerts, and VPC ingress.",
                    },
                    {
                      title: "Scalability for Growth",
                      desc: "Verifying if current databases and application layers can handle 5x user traffic spikes.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
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
                  Comprehensive 1-on-1 session delivered with <strong>actionable documentation</strong> within 3–5 business days.
                </p>
              </div>
            </div>

            {/* Right: What You Receive */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-blue-200 shadow-md shadow-blue-500/5 flex flex-col justify-between">
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
                      label: "Current State Blueprint",
                      desc: "Complete topology diagram of your existing AWS infrastructure.",
                    },
                    {
                      label: "Risk & Exposure Report",
                      desc: "Prioritized severity breakdown of security, backup, and downtime risks.",
                    },
                    {
                      label: "Actionable Savings Opportunities",
                      desc: "Specific recommendations to lower AWS bills without performance compromises.",
                    },
                    {
                      label: "Target Architecture Roadmap",
                      desc: "Step-by-step phased execution plan with realistic timelines and cost estimates.",
                    },
                  ].map((res, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3"
                    >
                      <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
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
                  className="w-full py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all shadow-md text-sm cursor-pointer"
                >
                  Book a Free Strategy Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: 5-STAGE AWS LIFECYCLE (END-TO-END CAPABILITY)
          [4-SECOND SLIDESHOW ON MOBILE, STACKED LIST ON DESKTOP]
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
                END-TO-END CAPABILITY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              One Partner Across the AWS Lifecycle
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              From architectural blueprint to production deployment and 24/7 ongoing operations.
            </p>
          </div>

          {/* Desktop Stacked View (Hidden on Mobile) */}
          <div className="hidden md:block space-y-6">
            {awsLifecycleStages.map((stage, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row gap-8 items-start justify-between"
              >
                <div className="lg:w-1/3">
                  <span className="text-4xl sm:text-5xl font-black text-blue-100 font-display block mb-2">
                    {stage.num}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{stage.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
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
                        <CheckCircle2 size={15} className="text-primary shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50/80 border border-blue-100 rounded-xl p-3.5 flex items-center gap-2.5">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider shrink-0">
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
                className="h-full bg-primary"
              />
            </div>

            {/* Slideshow Active Card with Smooth Transitions */}
            <AnimatePresence mode="wait">
              {(() => {
                const stage = awsLifecycleStages[activeLifecycleStage];
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
                        <span className="text-3xl font-black text-blue-200 font-display">
                          {stage.num}
                        </span>
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-primary border border-blue-200/80">
                          Stage {activeLifecycleStage + 1} of {awsLifecycleStages.length}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {stage.title}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
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
                            <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-blue-50/90 border border-blue-100 rounded-xl p-3 flex items-start gap-2">
                        <span className="text-[11px] font-bold text-primary uppercase tracking-wider shrink-0 mt-0.5">
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
                    (prev) => (prev - 1 + awsLifecycleStages.length) % awsLifecycleStages.length
                  )
                }
                className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-primary hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
                aria-label="Previous lifecycle stage"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Numbered Indicator Dots */}
              <div className="flex items-center gap-1.5">
                {awsLifecycleStages.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setActiveLifecycleStage(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeLifecycleStage === dotIdx ? "w-6 bg-primary" : "w-2 bg-slate-200"
                    }`}
                    aria-label={`Go to stage ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveLifecycleStage((prev) => (prev + 1) % awsLifecycleStages.length)
                }
                className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-primary hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
                aria-label="Next lifecycle stage"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: LEADERSHIP PERSPECTIVES (EXECUTIVE ALIGNMENT)
          [SLIDER ON MOBILE, GRID ON DESKTOP]
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-slate-50/60 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
                EXECUTIVE ALIGNMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              AWS Through the Lens of Your Leadership
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Different stakeholders care about different outcomes. We align with each:
            </p>
          </div>

          {/* Desktop Grid (Hidden on Mobile) */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {awsLeadershipCards.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">
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
                        <Check size={13} className="text-primary shrink-0" />
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
              {awsLeadershipCards.map((p, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-[84vw] max-w-[320px] snap-center bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">
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
                          <Check size={12} className="text-primary shrink-0" />
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
              {awsLeadershipCards.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToSlide(leadershipSliderRef, dotIdx, setLeadershipActive)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    leadershipActive === dotIdx ? "w-6 bg-primary" : "w-2 bg-slate-300"
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Form Left Pitch */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-[11px] font-bold tracking-wider uppercase text-blue-300 bg-blue-900/60 border border-blue-700/50 px-3.5 py-1 rounded-full">
                  1-ON-1 STRATEGY SESSION
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-6">
                Your AWS Environment Could Be Doing More.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                Let's discover where to optimize, scale, and save. Book a 1-on-1 Strategy Session with our
                Senior Cloud Solutions Architects — no sales pitch, just an honest discussion on architecture, costs, and scalability.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <p className="text-sm text-slate-300">
                    Tailored architectural evaluation for security, performance, and AWS spending.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <p className="text-sm text-slate-300">
                    Actionable roadmap with clear savings and risk mitigation targets.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <p className="text-sm text-slate-300">
                    Direct 1-on-1 strategy session with a Senior AWS Solutions Architect.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Component: GET STARTED • Book a Free Strategy Session */}
            <div className="lg:col-span-7">
              <StrategySessionForm
                tagText="GET STARTED"
                title="Book a Free Strategy Session"
                subtitle="Share your details and our AWS Cloud Architects will connect with you with a tailored strategy for your business."
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
              <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
                COMMON QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Clear answers regarding AWS strategy, migration, architecture, security, and ongoing support.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {[
              {
                q: "What is covered in a Free AWS Strategy Session?",
                a: "In your strategy session, our Senior Cloud Architects review your existing setup or planned deployment, identify high-impact cost optimization areas, assess security and IAM postures, and provide a clear target architecture roadmap.",
              },
              {
                q: "Can CybaemTech migrate our existing on-premise servers and databases to AWS?",
                a: "Yes. We execute end-to-end migrations for virtual machines (VMware/Hyper-V), physical servers, SQL/PostgreSQL databases, and web applications using AWS Application Migration Service (MGN) and Database Migration Service (DMS) with minimal downtime.",
              },
              {
                q: "Can you review an existing AWS environment built by another team?",
                a: "Absolutely. We perform comprehensive AWS Well-Architected Reviews to evaluate current security postures, IAM permissions, network design, and cost leaks, followed by a prioritized remediation roadmap.",
              },
              {
                q: "Do you provide 24/7 ongoing AWS managed services?",
                a: "Yes. Our 24/7 Managed NOC provides continuous uptime monitoring, OS patching, backup verification, automated incident escalation (<15 min response time), and proactive capacity management.",
              },
              {
                q: "How do you help organizations reduce their AWS bills?",
                a: "Through structured FinOps: identifying idle or unattached resources, right-sizing overprovisioned instances, transitioning storage tiers to S3 Glacier/Intelligent-Tiering, and structuring 1-year or 3-year Compute Savings Plans for up to 40%+ savings.",
              },
              {
                q: "Can you implement Disaster Recovery on AWS?",
                a: "Yes. We design multi-region and multi-AZ disaster recovery architectures with automated cross-region replication and tested failover mechanisms to meet strict Recovery Point (RPO) and Recovery Time (RTO) objectives.",
              },
              {
                q: "Can CybaemTech support hybrid and multi-cloud architectures?",
                a: "Yes. Many of our enterprise clients run workloads across AWS, Microsoft Azure, Google Cloud, and on-premises datacenters connected via AWS Direct Connect and site-to-site VPN tunnels.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-slate-200 rounded-xl px-5 bg-white data-[state=open]:border-blue-500/50 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="text-sm sm:text-base font-semibold text-slate-800 hover:text-primary hover:no-underline py-4 text-left">
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
          <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Headphones size={22} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Need help architecting or migrating your AWS cloud?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                  Connect directly with our AWS architects to discuss workload specifications,
                  cost optimization, and strategic migration milestones.
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

export default AWSServices;
