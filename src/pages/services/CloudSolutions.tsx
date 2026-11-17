import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { cloudSolutionsSeoData } from "@/data/seo/cloudSolutionsSeo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import cybaemLogoIcon from "@/assets/cybaem-logo-icon.png";
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
  TrendingUp,
  Settings,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Search,
  BarChart3,
  Network,
  Cpu,
  Database,
  Lock,
  Activity,
  Layers,
  Sparkles,
  Server,
  FolderLock,
  LineChart,
  Code2,
  HardDrive,
  Headphones,
  Building2,
  Factory,
  Car,
  Heart,
  GraduationCap,
  ShoppingCart,
  Users,
  Compass,
  Play,
  CheckCircle2,
  Globe,
  Zap,
  Check,
} from "lucide-react";

// Cloud Section Images
import cloudHeaderImg from "@/assets/cloud header.png";
import cloudImg1 from "@/assets/cloud/1.png";
import cloudImg2 from "@/assets/cloud/2.png";
import cloudImg3 from "@/assets/cloud/3.png";
import cloudImg4 from "@/assets/cloud/4.png";

// --- Ecosystem Cards ---
const ecosystemCards = [
  {
    name: "Amazon Web Services",
    desc: "Scalable, secure and high-performance infrastructure.",
    logo: "/images/cloud/aws.svg",
    isSvg: true,
  },
  {
    name: "Microsoft Azure",
    desc: "Modern cloud with enterprise-grade security and hybrid capabilities.",
    logo: "/images/cloud/azure.svg",
    isSvg: true,
  },
  {
    name: "CYBAEM TECH",
    desc: "Your Cloud Technology Partner",
    isCenter: true,
  },
  {
    name: "Microsoft 365",
    desc: "Productivity, collaboration and secure cloud workspaces.",
    logo: "/images/cloud/microsoft.svg",
    isSvg: true,
  },
  {
    name: "Multi-Cloud & Hybrid",
    desc: "Flexible solutions across AWS, Azure, GCP and on-premise environments.",
    icon: Cloud,
  },
];

// --- 6 Core Services ---
const cloudServices = [
  {
    title: "Cloud Strategy & Consulting",
    desc: "Assess, plan and design the right cloud strategy for your business and budget.",
    icon: Layers,
  },
  {
    title: "Migration & Modernization",
    desc: "Move servers, applications, databases and workloads with minimal disruption.",
    icon: Cloud,
  },
  {
    title: "Infrastructure & Hosting",
    desc: "Deploy and manage virtual machines, networks, storage, databases and web applications.",
    icon: Server,
  },
  {
    title: "Security, Backup & DR",
    desc: "Strengthen security, implement backup and disaster recovery, and ensure business continuity.",
    icon: ShieldCheck,
  },
  {
    title: "Applications, Data & DevOps",
    desc: "Build and run modern applications with automation, containers and managed databases.",
    icon: Settings,
  },
  {
    title: "Managed Cloud Services",
    desc: "Ongoing monitoring, administration, performance tuning and cost optimization.",
    icon: LineChart,
  },
];

// --- Platform Tabs & Details ---
const platformsData = [
  {
    id: "aws",
    name: "Amazon Web Services",
    shortName: "Amazon Web Services",
    titleLine1: "Amazon Web",
    titleHighlight: "Services",
    logo: "/images/cloud/aws.svg",
    link: "/cloud-services/aws",
    linkText: "Explore AWS Services",
    playText: "See How We Help Businesses Scale with AWS",
    desc: "A flexible, scalable and secure cloud platform with a wide range of services for modern business workloads.",
    image: cloudImg2,
    fourCapabilities: [
      {
        title: "Compute & Containers",
        desc: "EC2, Auto Scaling, Lambda, ECS, EKS",
        icon: Layers,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
      },
      {
        title: "Storage & Databases",
        desc: "S3, EBS, EFS, RDS, DynamoDB, Aurora",
        icon: Database,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
      },
      {
        title: "Security & Identity",
        desc: "IAM, VPC, WAF, GuardDuty, Security Hub",
        icon: ShieldCheck,
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
      },
      {
        title: "Monitoring & DevOps",
        desc: "CloudWatch, CloudTrail, CodePipeline, Route 53",
        icon: BarChart3,
        iconBg: "bg-amber-50",
        iconColor: "text-amber-500",
      },
    ],
    featuresList: [
      { label: "High Availability", icon: Activity, iconBg: "bg-purple-50", iconColor: "text-purple-600" },
      { label: "Auto Scaling", icon: LineChart, iconBg: "bg-blue-50", iconColor: "text-blue-600" },
      { label: "Global Infrastructure", icon: Globe, iconBg: "bg-sky-50", iconColor: "text-sky-600" },
      { label: "Cost Optimization", icon: Database, iconBg: "bg-amber-50", iconColor: "text-amber-600" },
    ],
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    shortName: "Microsoft Azure",
    titleLine1: "Microsoft",
    titleHighlight: "Azure",
    logo: "/images/cloud/azure.svg",
    link: "/cloud-services/microsoft-azure",
    linkText: "Explore Azure Services",
    playText: "See How We Help Businesses Scale with Azure",
    desc: "Enterprise-grade cloud platform optimized for hybrid environments, Microsoft ecosystems, and secure enterprise apps.",
    image: cloudImg1,
    fourCapabilities: [
      {
        title: "Compute & Virtual Machines",
        desc: "Virtual Machines, App Services, Functions, AVD",
        icon: Layers,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
      },
      {
        title: "Storage & Databases",
        desc: "Azure SQL, Cosmos DB, Blob Storage, Data Lake",
        icon: Database,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
      },
      {
        title: "Security & Governance",
        desc: "Microsoft Entra ID, Sentinel, Defender for Cloud",
        icon: ShieldCheck,
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
      },
      {
        title: "Hybrid & DevOps",
        desc: "Azure Arc, Azure DevOps, AKS, ExpressRoute",
        icon: BarChart3,
        iconBg: "bg-amber-50",
        iconColor: "text-amber-500",
      },
    ],
    featuresList: [
      { label: "Enterprise Security", icon: ShieldCheck, iconBg: "bg-purple-50", iconColor: "text-purple-600" },
      { label: "Hybrid Capabilities", icon: Layers, iconBg: "bg-blue-50", iconColor: "text-blue-600" },
      { label: "Global Infrastructure", icon: Globe, iconBg: "bg-sky-50", iconColor: "text-sky-600" },
      { label: "Cost Optimization", icon: Database, iconBg: "bg-amber-50", iconColor: "text-amber-600" },
    ],
  },
  {
    id: "m365",
    name: "Microsoft 365",
    shortName: "Microsoft 365",
    titleLine1: "Microsoft",
    titleHighlight: "365",
    logo: "/images/cloud/microsoft.svg",
    link: "/contact",
    linkText: "Explore M365 Solutions",
    playText: "See How We Help Modernize Digital Workplaces",
    desc: "Modern digital workplace empowering teams with cloud productivity, Teams collaboration, Intune endpoint security, and Exchange.",
    image: cloudImg3,
    fourCapabilities: [
      {
        title: "Workplace & Collaboration",
        desc: "Teams, SharePoint, OneDrive, Office 365 Suite",
        icon: Users,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
      },
      {
        title: "Email & Exchange",
        desc: "Exchange Online, Hybrid Mail, Spam Defense",
        icon: Database,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
      },
      {
        title: "Endpoint & Identity",
        desc: "Intune, Defender for Endpoint, Autopilot, SSO",
        icon: ShieldCheck,
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
      },
      {
        title: "Compliance & Security",
        desc: "Purview, Data Loss Prevention (DLP), Audit",
        icon: BarChart3,
        iconBg: "bg-amber-50",
        iconColor: "text-amber-500",
      },
    ],
    featuresList: [
      { label: "Zero-Trust Identity", icon: ShieldCheck, iconBg: "bg-purple-50", iconColor: "text-purple-600" },
      { label: "Cloud Collaboration", icon: Users, iconBg: "bg-blue-50", iconColor: "text-blue-600" },
      { label: "Endpoint Protection", icon: Globe, iconBg: "bg-sky-50", iconColor: "text-sky-600" },
      { label: "Compliance & DLP", icon: Database, iconBg: "bg-amber-50", iconColor: "text-amber-600" },
    ],
  },
  {
    id: "multicloud",
    name: "Multi-Cloud & Hybrid",
    shortName: "Multi-Cloud & Hybrid",
    titleLine1: "Multi-Cloud &",
    titleHighlight: "Hybrid",
    icon: Cloud,
    link: "/contact",
    linkText: "Consult on Multi-Cloud",
    playText: "See How We Help Unify Multi-Cloud Workloads",
    desc: "Unified hybrid governance linking AWS, Microsoft Azure, Google Cloud, and on-premises VMware infrastructure under one SLA.",
    image: cloudImg4,
    fourCapabilities: [
      {
        title: "Workload Orchestration",
        desc: "Kubernetes, OpenShift, Anthos, Terraform",
        icon: Layers,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
      },
      {
        title: "Storage & Data Fabric",
        desc: "Snowflake, BigQuery, Cross-Cloud Object Storage",
        icon: Database,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
      },
      {
        title: "Security & Governance",
        desc: "Zero-Trust, Multi-Cloud CSPM, SIEM/SOAR",
        icon: ShieldCheck,
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
      },
      {
        title: "Monitoring & FinOps",
        desc: "Datadog, Prometheus, Spend Optimization",
        icon: BarChart3,
        iconBg: "bg-amber-50",
        iconColor: "text-amber-500",
      },
    ],
    featuresList: [
      { label: "Vendor Independence", icon: Activity, iconBg: "bg-purple-50", iconColor: "text-purple-600" },
      { label: "Cross-Cloud Scaling", icon: LineChart, iconBg: "bg-blue-50", iconColor: "text-blue-600" },
      { label: "Unified Governance", icon: Globe, iconBg: "bg-sky-50", iconColor: "text-sky-600" },
      { label: "FinOps Optimization", icon: Database, iconBg: "bg-amber-50", iconColor: "text-amber-600" },
    ],
  },
];

// --- 4 Approach Steps ---
const approachSteps = [
  {
    step: "01",
    title: "Assess",
    desc: "Understand your current environment, goals and requirements.",
    icon: Search,
  },
  {
    step: "02",
    title: "Architect",
    desc: "Design the right solution for security, performance and cost.",
    icon: Network,
  },
  {
    step: "03",
    title: "Migrate",
    desc: "Execute migration with minimal risk and business continuity.",
    icon: Cloud,
  },
  {
    step: "04",
    title: "Manage",
    desc: "Ongoing monitoring, optimization and expert support.",
    icon: Settings,
  },
];

// --- 7 Industries ---
const industriesList = [
  { name: "IT & Software", icon: Cpu },
  { name: "Manufacturing", icon: Factory },
  { name: "Automotive & Logistics", icon: Car },
  { name: "Healthcare", icon: Heart },
  { name: "Education", icon: GraduationCap },
  { name: "Retail & E-commerce", icon: ShoppingCart },
  { name: "Professional Services", icon: Users },
];

// --- FAQ List ---
const faqsList = [
  {
    question: "Can you migrate existing servers and applications to the cloud?",
    answer:
      "Yes. We specialize in seamless, zero-downtime migrations of legacy on-premises servers, VMware/Hyper-V virtual machines, SQL/Oracle databases, and enterprise applications to AWS or Microsoft Azure. Our engineers conduct thorough pre-migration assessments, dependency mapping, pilot cutovers, and final synchronization to ensure total business continuity.",
  },
  {
    question: "Do you provide ongoing cloud management?",
    answer:
      "Yes. Cybaem Tech provides 24/7/365 managed cloud operations covering infrastructure monitoring, patch management, security hardening, automated backups, cost optimization (FinOps), and SLA-backed incident response. We ensure your cloud infrastructure runs efficiently without straining your internal IT teams.",
  },
  {
    question: "Can you support hybrid and multi-cloud environments?",
    answer:
      "Absolutely. We architect and manage hybrid and multi-cloud environments connecting your on-premises datacenters with AWS, Microsoft Azure, and Microsoft 365 through secure site-to-site VPNs, AWS Direct Connect, and Azure ExpressRoute. We provide centralized governance, identity synchronization, and single-pane observability.",
  },
];

export default function CloudSolutions() {
  const { openConsultationModal } = useConsultationModal();
  const [activePlatform, setActivePlatform] = useState("aws");

  const platformIds = platformsData.map((p) => p.id);

  const handlePrevPlatform = () => {
    const currentIndex = platformIds.indexOf(activePlatform);
    const nextIndex = (currentIndex - 1 + platformIds.length) % platformIds.length;
    setActivePlatform(platformIds[nextIndex]);
  };

  const handleNextPlatform = () => {
    const currentIndex = platformIds.indexOf(activePlatform);
    const nextIndex = (currentIndex + 1) % platformIds.length;
    setActivePlatform(platformIds[nextIndex]);
  };

  const currentPlatform =
    platformsData.find((p) => p.id === activePlatform) || platformsData[0];

  const scrollToServices = () => {
    document.getElementById("cloud-services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans">
      <SEOHead {...cloudSolutionsSeoData} />
      {/* Standard Site Navbar */}
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-blue-50/30 pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* Soft Background Radial Light & Cloud Atmosphere */}
        <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 left-10 w-[450px] h-[450px] bg-sky-300/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-100/70 border border-blue-200 px-3.5 py-1 rounded-full">
                  CLOUD SOLUTIONS
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-6">
                Transform Your <br />
                Business <span className="text-primary">with Cloud.</span>
              </h1>

              {/* Paragraph */}
              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
                Strategy, migration, security, managed services and ongoing
                support across AWS, Microsoft Azure, Microsoft 365 and multi-cloud
                environments — all in one place.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                <button
                  onClick={openConsultationModal}
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3.5 rounded-lg shadow-sm hover:shadow transition-all text-sm group"
                >
                  Request a Free Assessment
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 font-medium px-6 py-3.5 rounded-lg transition-all text-sm group"
                >
                  <Play size={14} className="text-primary fill-blue-600" />
                  Explore Services
                </button>
              </div>

              {/* Trust Capabilities Bar */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-50 text-primary shrink-0">
                    <Shield size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Secure by Design
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-50 text-primary shrink-0">
                    <TrendingUp size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Scalable Infrastructure
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-50 text-primary shrink-0">
                    <Layers size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Cost Optimized
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-50 text-primary shrink-0">
                    <Settings size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    End-to-End Support
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual (Cloud Server Stack with Floating Badges) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[580px] lg:max-w-[640px]">
                {/* Main Datacenter / Cloud Server Preview Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-200/80 bg-white">
                  <img
                    src={cloudHeaderImg}
                    alt="Enterprise Cloud Solutions & Infrastructure"
                    className="w-full h-auto object-cover max-h-[520px]"
                  />
                </div>

                {/* Floating Badge: AWS */}
                <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-slate-200 flex items-center gap-2.5 animate-in fade-in duration-300">
                  <img src="/images/cloud/aws.svg" alt="AWS" className="h-6 w-auto" />
                  <span className="text-xs font-bold text-slate-800">AWS</span>
                </div>

                {/* Floating Badge: Microsoft Azure */}
                <div className="absolute top-8 -right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-slate-200 flex items-center gap-2.5 animate-in fade-in duration-500">
                  <img src="/images/cloud/azure.svg" alt="Azure" className="h-6 w-auto" />
                  <span className="text-xs font-bold text-slate-800">Microsoft Azure</span>
                </div>

                {/* Floating Badge: Microsoft 365 */}
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-slate-200 flex items-center gap-2.5 animate-in fade-in duration-700">
                  <img
                    src="/images/cloud/microsoft.svg"
                    alt="Microsoft 365"
                    className="h-5 w-auto"
                  />
                  <span className="text-xs font-bold text-slate-800">Microsoft 365</span>
                </div>

                {/* Floating Badge: Multi-Cloud */}
                <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-slate-200 flex items-center gap-2.5 animate-in fade-in duration-900">
                  <div className="p-1 rounded-md bg-blue-50 text-primary">
                    <Cloud size={18} />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Multi-Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR CLOUD ECOSYSTEM --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-3">
            <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
              OUR CLOUD ECOSYSTEM
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            One Partner. Complete Cloud Possibilities.
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-14">
            We provide consulting, implementation and managed services across leading
            cloud platforms.
          </p>

          {/* 5 Connected Ecosystem Cards Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch">
            {ecosystemCards.map((card, idx) => {
              if (card.isCenter) {
                return (
                  <div
                    key={card.name}
                    className="bg-blue-50/70 border-2 border-blue-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-md relative hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-3 shadow-md shadow-blue-600/30">
                      <img
                        src={cybaemLogoIcon}
                        alt="Cybaem Tech"
                        className="w-10 h-10 object-contain filter brightness-0 invert"
                      />
                    </div>
                    <h3 className="text-sm font-extrabold text-blue-900 uppercase tracking-wider mb-1">
                      {card.name}
                    </h3>
                    <p className="text-xs font-medium text-blue-700">{card.desc}</p>
                  </div>
                );
              }

              const IconC = card.icon;

              return (
                <div
                  key={card.name}
                  className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-blue-400 transition-all group"
                >
                  <div className="h-12 flex items-center justify-center mb-3">
                    {card.isSvg ? (
                      <img src={card.logo} alt={card.name} className="h-12 w-auto object-contain" />
                    ) : IconC ? (
                      <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                        <IconC size={22} />
                      </div>
                    ) : null}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {card.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- OUR SERVICES ("Cloud Solutions, End to End.") --- */}
      <section id="cloud-services" className="py-20 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center mb-2">
                <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
                  OUR SERVICES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Cloud Solutions, End to End.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                From strategy to ongoing management, we cover every stage of your cloud
                journey.
              </p>
            </div>


          </div>

          {/* 6 Cards (3 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {cloudServices.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Floating Icon Box */}
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <IconComp size={22} />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

        
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- EXPLORE SERVICES BY PLATFORM (Theme updated according to mockup) --- */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#F6F9FD] via-white to-[#F0F5FD] text-slate-900 border-y border-slate-200/70 relative overflow-hidden">
        {/* Soft atmospheric gradient lighting matching the mockup */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-300/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-200/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main 2-Column Content Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Eyebrow + Title + Subtitle + Platform Tabs + 2x2 Capability Cards + CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
                    CLOUD SERVICES
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-tight leading-[1.12] mb-3">
                  Cloud Solutions Built<br />
                   Around{" "}
                  <span className="bg-clip-text text-primary">
                    Your Business
                  </span>
                </h2>

                {/* Subtitle */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl font-normal">
                  Leverage the power of leading cloud platforms to build, modernize, and scale your business with secure, high-performance and future-ready infrastructure.
                </p>

                {/* Platform Tab Selectors (Horizontal Pills) */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-6">
                  {platformsData.map((platform) => {
                    const isActive = activePlatform === platform.id;
                    const IconC = platform.icon;
                    return (
                      <button
                        key={platform.id}
                        onClick={() => setActivePlatform(platform.id)}
                        className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-white border-2 border-blue-600 text-blue-700 shadow-md shadow-blue-500/15 ring-4 ring-blue-500/10"
                            : "bg-white/80 hover:bg-white border border-slate-200/90 text-slate-600 hover:text-slate-900 shadow-2xs hover:border-slate-300"
                        }`}
                      >
                        {platform.logo ? (
                          <img
                            src={platform.logo}
                            alt={platform.name}
                            style={{ maxHeight: "16px", maxWidth: "55px", width: "auto" }}
                            className="h-4 w-auto object-contain shrink-0"
                          />
                        ) : IconC ? (
                          <IconC size={15} className={isActive ? "text-blue-600" : "text-slate-500"} />
                        ) : null}
                        <span className="whitespace-nowrap">{platform.shortName || platform.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* 2x2 Grid of Capability Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-6">
                  {currentPlatform.fourCapabilities.map((cap, idx) => {
                    const Icon = cap.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white/95 backdrop-blur-sm rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-md hover:border-blue-300 transition-all duration-300 flex items-center justify-between gap-3 group cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${cap.iconBg} ${cap.iconColor}`}
                          >
                            <Icon size={20} strokeWidth={2.2} />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-[13px] sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                              {cap.title}
                            </h4>
                            <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-snug font-medium">
                              {cap.desc}
                            </p>
                          </div>
                        </div>
                      
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                <Link
                  to={currentPlatform.link}
                  className="inline-flex items-center gap-2.5 bg-primary hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-lg shadow-slate-950/20 hover:shadow-xl transition-all group"
                >
                  <span>{currentPlatform.linkText}</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={openConsultationModal}
                  className="inline-flex items-center gap-2.5 text-left group cursor-pointer"
                >
                  <span className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                    <Play size={12} className="ml-0.5 fill-current" />
                  </span>
                  <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 max-w-[200px] leading-tight">
                    {currentPlatform.playText}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: Platform Visual Showcase with Floating Overlays */}
            <div className="lg:col-span-6 relative flex items-center justify-center pt-8 sm:pt-6 lg:pt-0">
              {/* Main Building Facade Showcase (Generous height, seamless high-tech look) */}
              <div className="relative w-full rounded-[32px] overflow-hidden shadow-[0_25px_60px_rgba(15,23,42,0.14)] border border-slate-200/90 bg-slate-900 min-h-[480px] lg:h-[540px] group">
                <img
                  src={currentPlatform.image}
                  alt={currentPlatform.name}
                  className="w-full h-full object-cover object-[center_32%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Ambient Warm Golden & Sunset lighting glow overlays matching mockup */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/15 via-transparent to-blue-600/20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />

                {/* Floating Stylized 3D Cloud Top-Right */}
                <div
                  className="absolute top-4 sm:top-5 right-5 sm:right-6 z-20 pointer-events-none"
                  style={{ filter: "drop-shadow(0 12px 24px rgba(56, 189, 248, 0.4))" }}
                >
               
                </div>

            
            
              </div>
            </div>
          </div>

          {/* Full-Width Bottom Glassmorphic Stats Bar (4 Pillars) */}
          <div className="mt-14 w-full bg-white/80 backdrop-blur-xl border border-white/90 rounded-[28px] sm:rounded-full py-5 px-6 sm:px-10 shadow-[0_10px_35px_rgba(15,23,42,0.04)] ring-1 ring-slate-900/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
              {/* 1. Global Infrastructure */}
              <div className="flex items-center gap-3.5 px-3">
                <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Globe size={22} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 leading-tight">
                    Global Infrastructure
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Regions & Availability Zones
                  </div>
                </div>
              </div>

              {/* 2. Enterprise Security */}
              <div className="flex items-center gap-3.5 px-3">
                <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Shield size={22} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 leading-tight">
                    Enterprise Security
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Compliance, Privacy & Control
                  </div>
                </div>
              </div>

              {/* 3. Scalable Solutions */}
              <div className="flex items-center gap-3.5 px-3">
                <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Layers size={22} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 leading-tight">
                    Scalable Solutions
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    From Startups to Enterprises
                  </div>
                </div>
              </div>

              {/* 4. Reliable Performance */}
              <div className="flex items-center gap-3.5 px-3">
                <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Zap size={22} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 leading-tight">
                    Reliable Performance
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Built for Mission-Critical Workloads
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR APPROACH ("A Simple, Proven Cloud Journey") --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-3">
            <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
              OUR APPROACH
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            A Simple, Proven Cloud Journey
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-16">
            A structured approach to ensure a secure, smooth and successful cloud adoption.
          </p>

          {/* 4 Step Linear Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {approachSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={step.step} className="relative">
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col items-center h-full group">
                    {/* Circle Icon Badge */}
                    <div className="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-primary mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <StepIcon size={24} />
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

                  {/* Connecting Arrow for desktop (between steps) */}
                  {idx < approachSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-slate-100 border border-slate-200 items-center justify-center text-slate-400">
                      <ChevronRight size={14} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- MID-PAGE DARK BANNER ("Make Your Cloud Work Harder.") --- */}
      <section className="relative overflow-hidden bg-[#0A101D] text-white py-16 sm:py-20">
        {/* Background Image of Datacenter Server Racks */}
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/cloud/server-rack.png"
            alt="Server Room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A101D] via-[#0A101D]/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold tracking-wider uppercase text-sky-400 bg-sky-950/70 border border-sky-400/30 px-3.5 py-1 rounded-full">
                  READY TO MODERNIZE YOUR IT INFRASTRUCTURE?
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                Make Your Cloud Work Harder.
              </h2>

              {/* Subtitle */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Get expert guidance on the right cloud strategy, platform and solution for
                your business.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0">
              <button
                onClick={openConsultationModal}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-primary font-semibold px-6 py-3 rounded-full text-sm shadow-md transition-all group"
              >
                Request a Free Consultation
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>

           
            </div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES WE SUPPORT ("Built for Every Industry") --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-3">
            <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
              INDUSTRIES WE SUPPORT
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Built for Every Industry
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-14">
            Our cloud solutions are designed for a wide range of industries and business
            sizes.
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

      {/* --- FREQUENTLY ASKED QUESTIONS ("Common Questions") --- */}
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
                Common Questions
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Quick answers to help you understand our cloud services.
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

      {/* --- BOTTOM MINI CTA CARD --- */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Headphones size={22} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Need help planning your cloud environment?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                  Our experts can assess your infrastructure, applications, security
                  requirements and budget, then recommend the right cloud solution.
                </p>
              </div>
            </div>

            <button
              onClick={openConsultationModal}
              className="inline-flex items-center justify-center gap-2 bg-[#0A101D] hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-full shrink-0 shadow-sm transition-all group"
            >
              Request a Free Cloud Assessment
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
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
