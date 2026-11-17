import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Check,
  CheckCircle2,
  Star,
  Plus,
  Minus,
  Users,
  ShieldCheck,
  Headphones,
  Building2,
  Layers,
  TrendingUp,
  RefreshCw,
  Cpu,
  Database,
  Smartphone,
  Globe,
  Code2,
  Sliders,
  Clock,
  Target,
  Rocket,
  Search,
  Calendar,
  PenTool,
  LifeBuoy,
  Sparkles,
  Cloud,
  Server,
  Shield,
  Lock,
  Network,
  Activity,
  HardDrive,
  Award,
  Factory,
  Heart,
  GraduationCap,
  ShoppingCart,
  Briefcase,
  ExternalLink,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { cloudSecuritySeoData } from "@/data/seo/cloudSecuritySeo";
import { useConsultationModal } from "@/context/ConsultationModalContext";

// Visual assets from CLOUD & SECURITY
import cloudHeroImg from "@/assets/services/CLOUD & SECURITY/hero-bg.png";
import cloudSub1 from "@/assets/our solutions/Cloud & Security/1.png";
import cloudSub2 from "@/assets/our solutions/Cloud & Security/2.png";
import cloudSub3 from "@/assets/our solutions/Cloud & Security/3.png";
import cloudMigrationImg from "@/assets/services/CLOUD & SECURITY/cloud-migration.png";
import enterpriseSecurityImg from "@/assets/services/CLOUD & SECURITY/enterprises-security.png";
import itInfraSetupImg from "@/assets/services/CLOUD & SECURITY/it-infra-setup.png";
import ctaImg from "@/assets/services/CLOUD & SECURITY/CTA.png";
import partnerAws from "@/assets/partners/aws.svg";
import partnerAzure from "@/assets/partners/azure.svg";
import partnerFortinet from "@/assets/partners/fortinet.svg";

/* ────────────────────────────────────────────────────────────
   TECHNOLOGY STACK DATA (Cloud & Security)
   ──────────────────────────────────────────────────────────── */
interface TechTool {
  name: string;
  category: string;
  logoSvg: React.ReactNode;
}

const techTools: TechTool[] = [
  {
    name: "Amazon Web Services",
    category: "Cloud Platforms",
    logoSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#232F3E" d="M64 8C33.1 8 8 33.1 8 64s25.1 56 56 56 56-25.1 56-56S94.9 8 64 8z" />
        <path fill="#FF9900" d="M35 74c10 7 24 10 37 10 17 0 31-6 40-15 1-1 0-3-1-2-10 7-23 11-39 11-12 0-25-3-35-10-1-1-3 0-2 2v-4z" />
        <path fill="#FF9900" d="M110 68c-1-2-5-2-9-1-3 1-8 4-8 4s1 2 2 3c0 0 4-1 6-2 3-1 6-1 8-2 1-1 2-1 1-2z" />
        <text x="64" y="58" fill="#FFF" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="22" textAnchor="middle">
          aws
        </text>
      </svg>
    ),
  },
  {
    name: "Microsoft Azure",
    category: "Cloud Platforms",
    logoSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#0089D6" d="M22 98l32-68h24L46 98H22z" />
        <path fill="#0072C6" d="M54 30h28l24 68H78L54 30z" />
        <path fill="#1490DF" d="M62 76h44l-8 22H54l8-22z" />
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    category: "Cloud Platforms",
    logoSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#4285F4" d="M84 76H44c-11 0-20-9-20-20s9-20 20-20c2 0 5 0 7 1C55 24 68 16 82 16c21 0 38 17 38 38 0 1 0 2 0 3 5 4 8 11 8 19 0 11-9 20-20 20h-24z" />
        <path fill="#34A853" d="M44 76h40c11 0 20-9 20-20 0-8-5-15-12-18-2-12-12-22-24-22-13 0-24 9-27 22-2-1-4-2-7-2-11 0-20 9-20 20s9 20 20 20z" opacity="0.2" />
        <circle cx="64" cy="56" r="14" fill="#EA4335" />
        <circle cx="84" cy="62" r="12" fill="#FBBC05" />
      </svg>
    ),
  },
  {
    name: "VMware",
    category: "Infrastructure",
    logoSvg: (
      <div className="flex items-center justify-center font-bold text-slate-800 tracking-tighter text-sm font-mono">
        <span className="text-primary text-lg font-black">vm</span>
        <span className="text-slate-700 text-lg">ware</span>
      </div>
    ),
  },
  {
    name: "Docker",
    category: "DevOps & Automation",
    logoSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#2496ED" d="M118 64c-2-1-6-1-8 0-1-3-4-5-8-5-6 0-10 4-12 9-5-3-11-5-18-5H18c-3 0-5 2-5 5v3c0 14 7 27 18 36 10 8 22 13 36 13 38 0 54-25 54-46 6-2 10-6 12-11-2-2-3-3-5-4zM42 46h10v10H42V46zm14 0h10v10H56V46zm14 0h10v10H70V46zm-28 14h10v10H42V60zm14 0h10v10H56V60zm14 0h10v10H70V60zm14 0h10v10H84V60zm-42 14h10v10H42V74zm14 0h10v10H56V74zm14 0h10v10H70V74zm14 0h10v10H84V74z" />
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    category: "DevOps & Automation",
    logoSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#326CE5" d="M64 8l48 28v56l-48 28-48-28V36L64 8z" />
        <circle cx="64" cy="64" r="16" fill="#FFF" />
        <circle cx="64" cy="64" r="10" fill="#326CE5" />
        <rect x="62" y="32" width="4" height="64" fill="#FFF" />
        <rect x="32" y="62" width="64" height="4" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "Terraform",
    category: "DevOps & Automation",
    logoSvg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <polygon fill="#5C4EE5" points="50,14 18,33 18,70 50,51" />
        <polygon fill="#4040B2" points="54,54 54,92 86,73 86,35" />
        <polygon fill="#844FBA" points="90,33 122,14 122,51 90,70" />
        <polygon fill="#5C4EE5" points="54,96 54,114 86,95 86,77" />
      </svg>
    ),
  },
  {
    name: "Fortinet",
    category: "Security Tools",
    logoSvg: (
      <div className="flex items-center justify-center font-bold text-red-600 tracking-wider text-xs">
        <span className="bg-red-600 text-white font-black px-1.5 py-0.5 rounded mr-1">FORTI</span>
        <span className="font-extrabold text-red-600">NET</span>
      </div>
    ),
  },
  {
    name: "Sophos",
    category: "Security Tools",
    logoSvg: (
      <div className="flex items-center justify-center font-bold text-[#0066cc] tracking-widest text-xs font-mono">
        <span className="text-primary text-base font-black">SOPHOS</span>
      </div>
    ),
  },
];

const categoryTabs = [
  "Cloud Platforms",
  "Security Tools",
  "Infrastructure",
  "Monitoring & Management",
  "DevOps & Automation",
];

/* ────────────────────────────────────────────────────────────
   CASE STUDIES DATA
   ──────────────────────────────────────────────────────────── */
const caseStudies = [
  {
    id: 1,
    tag: "Cloud Migration",
    title: "Cloud Migration for a Retail Business",
    desc: "Migrated legacy infrastructure to AWS, achieving 40% cost reduction and 99.9% uptime.",
    image: cloudMigrationImg,
    metrics: [
      { value: "40%", label: "Cost Reduction" },
      { value: "99.9%", label: "Uptime Achieved" },
    ],
  },
  {
    id: 2,
    tag: "Security Modernization",
    title: "Enterprise Security Modernization",
    desc: "Implemented a comprehensive security framework with 24/7 monitoring.",
    image: enterpriseSecurityImg,
    metrics: [
      { value: "60%", label: "Faster Incident Response" },
      { value: "100%", label: "Compliance Achieved" },
    ],
  },
  {
    id: 3,
    tag: "Infrastructure Setup",
    title: "IT Infrastructure Setup for a Growing Enterprise",
    desc: "Designed and deployed a scalable infrastructure for 500+ employees.",
    image: itInfraSetupImg,
    metrics: [
      { value: "3x", label: "Better Performance" },
      { value: "50%", label: "Lesser Downtime" },
    ],
  },
];

/* ────────────────────────────────────────────────────────────
   INDUSTRIES DATA
   ──────────────────────────────────────────────────────────── */
const industries = [
  { name: "IT & Software", icon: LaptopIcon },
  { name: "Manufacturing", icon: Factory },
  { name: "Healthcare", icon: Heart },
  { name: "Retail & E-commerce", icon: ShoppingCart },
  { name: "Education", icon: GraduationCap },
  { name: "Finance", icon: Building2 },
];

function LaptopIcon(props: any) {
  return <Cpu {...props} />;
}

/* ────────────────────────────────────────────────────────────
   MAIN PAGE COMPONENT
   ──────────────────────────────────────────────────────────── */
const CloudSecurity = () => {
  const { openConsultationModal } = useConsultationModal();

  // Tech stack filter state
  const [activeTab, setActiveTab] = useState("Cloud Platforms");

  // FAQ Accordion state
  const [openFaqs, setOpenFaqs] = useState<{ [key: string]: boolean }>({
    "left-0": true,
  });

  const toggleFaq = (key: string) => {
    setOpenFaqs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const faqsLeft = [
    {
      q: "What cloud platforms do you work with?",
      a: "We work with Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), as well as hybrid environments and on-premises virtualization. Our certified team designs multi-cloud strategies based on your cost, performance, and compliance requirements.",
    },
    {
      q: "Can you help migrate our existing infrastructure to the cloud?",
      a: "Yes. We engineer end-to-end cloud migrations using proven lift-and-shift, re-platforming, and containerization frameworks. We ensure zero data loss, minimal downtime, and rapid cutover with verified backup rollbacks.",
    },
    {
      q: "How do you ensure data security in the cloud?",
      a: "We implement defense-in-depth security architectures aligned with ISO 27001, SOC 2, and NIST. This includes zero-trust networking, granular IAM roles, AES-256 data encryption at rest and in transit, and continuous automated vulnerability scanning.",
    },
  ];

  const faqsRight = [
    {
      q: "Do you provide ongoing managed services?",
      a: "Yes. We provide 24/7 proactive NOC & SOC monitoring, server patching, automated backups, SLA-backed incident response, capacity planning, and continuous FinOps cloud cost optimization.",
    },
    {
      q: "Can you support hybrid and multi-cloud environments?",
      a: "Absolutely. We build unified hybrid connectivity connecting on-premises servers, data centers, and multiple public clouds with automated failover and secure SD-WAN/VPN tunnels.",
    },
    {
      q: "What industries do you serve?",
      a: "We partner with enterprises and mid-market organizations across IT & Software, Manufacturing, Healthcare, Retail & E-commerce, Financial Services, Education, and Logistics.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0A1435] selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      {/* SEO Metadata */}
      <SEOHead
        title={cloudSecuritySeoData.title}
        description={cloudSecuritySeoData.description}
        canonical={cloudSecuritySeoData.canonical}
        keywords={cloudSecuritySeoData.keywords}
        ogTitle={cloudSecuritySeoData.ogTitle}
        ogDescription={cloudSecuritySeoData.ogDescription}
        twitterTitle={cloudSecuritySeoData.twitterTitle}
        twitterDescription={cloudSecuritySeoData.twitterDescription}
        jsonLd={cloudSecuritySeoData.jsonLd}
      />

      {/* Global Navbar */}
      <Navbar />

      {/* ────────────────────────────────────────────────────────────
          BREADCRUMBS
          ──────────────────────────────────────────────────────────── */}
      <div className="bg-[#F8FAFD] border-b border-slate-100/80">
        <div className="container mx-auto px-6 lg:px-12 py-3">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight size={13} className="text-slate-400" />
            <Link to="/cloud-security" className="hover:text-primary transition-colors">
              Our Solutions
            </Link>
            <ChevronRight size={13} className="text-slate-400" />
            <span className="text-primary font-semibold">Cloud & Security</span>
          </nav>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────
          SECTION 1: HERO
          ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-8 pb-14 lg:pt-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#F4F8FD] via-[#F8FAFD] to-white">
        {/* Soft atmospheric gradient glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/3" />
        <div className="absolute top-20 right-0 w-[420px] h-[420px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* Eyebrow Pill */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mb-4"
              >
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider text-primary bg-blue-50/90 border border-blue-200/80 shadow-xs uppercase">
                  <span>CLOUD & SECURITY SOLUTIONS</span>
                  <ChevronRight size={13} className="text-primary" />
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[50px] xl:text-[54px] text-[#0A1435] leading-[1.12] tracking-tight mb-4"
              >
                Build a Secure, Scalable <br />
                and Future-Ready <br />
                <span className="text-primary">IT Infrastructure</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="text-slate-600 text-base sm:text-[17px] leading-relaxed max-w-xl mb-7"
              >
                We help businesses migrate, modernize, and secure their infrastructure with cloud
                technologies and industry-leading security practices — so you can focus on growth.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16 }}
                className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto"
              >
                <button
                  onClick={openConsultationModal}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0A1B39] hover:bg-primary text-white text-[14px] font-semibold transition-all shadow-md shadow-blue-950/20 hover:shadow-lg hover:-translate-y-0.5 group w-full sm:w-auto cursor-pointer"
                >
                  Talk to Our Experts
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-[14px] font-semibold transition-all border border-slate-200/90 hover:border-slate-300 shadow-xs w-full sm:w-auto cursor-pointer"
                >
                  Explore Services
                </a>
              </motion.div>

              {/* 4 Stats under hero buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/70 w-full"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-[#0A1435] leading-tight">250+</div>
                    <div className="text-[11px] font-medium text-slate-500">Projects Delivered</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-[#0A1435] leading-tight">99.5%</div>
                    <div className="text-[11px] font-medium text-slate-500">Uptime Achieved</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                    <Headphones size={20} />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-[#0A1435] leading-tight">24/7</div>
                    <div className="text-[11px] font-medium text-slate-500">Monitoring & Support</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                    <Award size={20} />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-[#0A1435] leading-tight">ISO 27001</div>
                    <div className="text-[11px] font-medium text-slate-500">Aligned Security</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Hero Visual Column */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="relative max-w-[560px] w-full"
              >
                {/* Main Hero Photo */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
                  <img
                    src={cloudHeroImg}
                    alt="Cybaem Tech Cloud & Security Operations Team"
                    className="w-full h-auto object-cover max-h-[460px] sm:max-h-[520px]"
                  />
                  {/* Subtle inner overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* 4 Floating Badges Stack on Right */}
                <div className="absolute -top-3 -right-2 sm:-right-4 flex flex-col gap-2.5 z-20">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    className="bg-white/95 backdrop-blur-md rounded-xl p-2 px-3 shadow-lg border border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-800"
                  >
                    <div className="w-6 h-6 rounded-md bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <Cloud size={14} />
                    </div>
                    <span>Cloud Migration</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="bg-white/95 backdrop-blur-md rounded-xl p-2 px-3 shadow-lg border border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-800"
                  >
                    <div className="w-6 h-6 rounded-md bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <Server size={14} />
                    </div>
                    <span>Infrastructure Setup</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                    className="bg-white/95 backdrop-blur-md rounded-xl p-2 px-3 shadow-lg border border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-800"
                  >
                    <div className="w-6 h-6 rounded-md bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <ShieldCheck size={14} />
                    </div>
                    <span>Security & Compliance</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="bg-white/95 backdrop-blur-md rounded-xl p-2 px-3 shadow-lg border border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-800"
                  >
                    <div className="w-6 h-6 rounded-md bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <Activity size={14} />
                    </div>
                    <span>24/7 Monitoring</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 2: OUR SERVICES
          ──────────────────────────────────────────────────────────── */}
      <section id="services" className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 mb-2">
                <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                  OUR SERVICES
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0A1435] tracking-tight leading-[1.2]">
                Complete Cloud & Security Solutions <br className="hidden sm:inline" />
                Under <span className="text-primary">One Roof</span>
              </h2>
            </div>
         
          </div>

          {/* 3 Main Services Cards (Styled matching Industries Card Theme) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 mb-8 items-stretch">
            {[
              {
                number: "02",
                icon: Server,
                title: "IT Infrastructure Services",
                desc: "Design, deploy and manage secure and high-performing IT infrastructure.",
                image: cloudSub1,
                link: "/cloud-security/it-infrastructure-services",
                bullets: [
                  "Server & Network Management",
                  "Data Center & Virtualization",
                  "Storage & Backup Solutions",
                  "Infrastructure Monitoring",
                  "Disaster Recovery",
                ],
              },
              {
                number: "01",
                icon: Cloud,
                title: "Cloud Solutions",
                desc: "Migrate, modernize and manage your infrastructure on AWS, Azure and Google Cloud.",
                image: cloudSub2,
                link: "/cloud-security/cloud-solutions",
                bullets: [
                  "Cloud Strategy & Consulting",
                  "Migration & Modernization",
                  "Cloud Infrastructure Setup",
                  "DevOps & Automation",
                  "Cost Optimization",
                ],
              },
              {
                number: "03",
                icon: Shield,
                title: "Cybersecurity",
                desc: "Protect your people, data and business with proactive security solutions.",
                image: cloudSub3,
                link: "/cloud-security/cybersecurity",
                bullets: [
                  "Security Assessment & Risk Analysis",
                  "Threat Detection & Response",
                  "Identity & Access Management",
                  "Compliance (ISO, SOC 2, GDPR)",
                  "24/7 Security Monitoring",
                ],
              },
            ].map((service) => {
              const ServiceIcon = service.icon;
              return (
                <Link
                  key={service.title}
                  to={service.link}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_18px_45px_-5px_rgba(0,82,204,0.14)] hover:border-blue-200/80 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  {/* Card Top: Photo Container with Number Badge and Organic Wave Curve */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Number Badge (e.g. 01, 02, etc.) */}
                    <span className="absolute top-3 left-3 text-[11px] font-extrabold text-slate-700 bg-white/85 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-xs border border-white/70">
                      {service.number}
                    </span>

                    {/* Exact Organic Wavy SVG Curve matching reference */}
                    <svg
                      className="absolute -bottom-[1px] inset-x-0 w-full text-white fill-current pointer-events-none"
                      viewBox="0 0 360 40"
                      preserveAspectRatio="none"
                      height="30"
                    >
                      <path d="M0,18 C90,36 190,4 360,22 L360,40 L0,40 Z" />
                    </svg>
                  </div>

                  {/* Floating Circular Icon Badge positioned on wave dip */}
                  <div className="relative -mt-6 ml-5 z-10 w-11 h-11 rounded-full bg-white shadow-md border border-slate-100/90 flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300">
                    <ServiceIcon size={19} strokeWidth={2.2} />
                  </div>

                  {/* Card Body */}
                  <div className="px-5 pb-5 pt-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-lg sm:text-[19px] font-extrabold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-[12.5px] sm:text-[13px] text-slate-500 mt-2 leading-relaxed">
                        {service.desc}
                      </p>

                      {/* 5 Bullets with checkmarks */}
                      <div className="space-y-2 mt-4">
                        {service.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className="flex items-start gap-2 text-xs sm:text-[12.5px] font-semibold text-slate-800 leading-snug"
                          >
                            <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                              <Check size={10} strokeWidth={3.5} />
                            </div>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action matching screenshot: Explore Solutions with circular Arrow button */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-primary group-hover:text-blue-700 transition-colors">
                        Explore Solutions
                      </span>
                      <div className="w-8 h-8 rounded-full bg-sky-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-xs">
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Horizontal Highlights Strip */}
          <div className="rounded-2xl bg-[#EEF5FF]/80 border border-blue-100/80 p-4 sm:p-5">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 text-center">
              <div className="flex items-center justify-center gap-2 p-2">
                <div className="w-7 h-7 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                  <Layers size={15} />
                </div>
                <span className="text-[12px] font-bold text-slate-800 text-left">
                  End-to-End Solutions
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 p-2">
                <div className="w-7 h-7 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                  <Users size={15} />
                </div>
                <span className="text-[12px] font-bold text-slate-800 text-left">
                  Certified Professionals
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 p-2">
                <div className="w-7 h-7 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                  <Network size={15} />
                </div>
                <span className="text-[12px] font-bold text-slate-800 text-left">
                  Scalable Architecture
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 p-2">
                <div className="w-7 h-7 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                  <ShieldCheck size={15} />
                </div>
                <span className="text-[12px] font-bold text-slate-800 text-left">
                  Compliance-Driven Approach
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 p-2 col-span-2 md:col-span-1">
                <div className="w-7 h-7 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                  <Headphones size={15} />
                </div>
                <span className="text-[12px] font-bold text-slate-800 text-left">
                  Ongoing Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 3: WHY CHOOSE CYBAEM TECH
          ──────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFCFF] border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="inline-flex items-center gap-1.5 mb-2">
                <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                  WHY CHOOSE CYBAEM TECH
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A1435] tracking-tight leading-[1.2] mb-4">
                A Trusted Partner for Cloud & Security Success
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-7 max-w-lg">
                We combine deep technical expertise, proven frameworks and a client-first approach to
                deliver secure, scalable and high-performing cloud environments.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0A1B39] hover:bg-primary text-white text-[14px] font-semibold transition-all shadow-md shadow-blue-950/20 hover:shadow-lg hover:-translate-y-0.5 group cursor-pointer"
              >
                Learn More About Us
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right Value Cards (2 cols x 2 rows = 4 items) */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Value 1 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,82,204,0.06)] hover:border-blue-200 transition-all flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 text-primary flex items-center justify-center shrink-0">
                    <Cloud size={22} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0A1435] mb-1">
                      Proven Expertise
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Certified cloud & security professionals with multi-platform mastery.
                    </p>
                  </div>
                </div>

                {/* Value 2 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,82,204,0.06)] hover:border-blue-200 transition-all flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <Target size={22} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0A1435] mb-1">
                      Business-Focused Approach
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Solutions aligned to your business goals and positive return on investment.
                    </p>
                  </div>
                </div>

                {/* Value 3 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,82,204,0.06)] hover:border-blue-200 transition-all flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0A1435] mb-1">
                      Industry Best Practices
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Follow security frameworks like ISO, SOC 2, and NIST baselines.
                    </p>
                  </div>
                </div>

                {/* Value 4 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,82,204,0.06)] hover:border-blue-200 transition-all flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <RefreshCw size={22} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0A1435] mb-1">
                      Long-Term Partnership
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Ongoing support and continuous architectural optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 4: OUR PROCESS
          ──────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 mb-2">
              <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                OUR PROCESS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A1435] tracking-tight leading-[1.2] mb-3">
              A Simple, Structured Approach
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              From planning to ongoing support, we ensure a smooth and secure cloud journey.
            </p>
          </div>

          {/* 5 Step Horizontal Pipeline */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 relative">
            {/* Step 1: Assess */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:border-blue-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-primary flex items-center justify-center mb-3">
                  <Search size={18} />
                </div>
                <div className="text-xs font-mono font-bold text-primary mb-0.5">01</div>
                <h4 className="text-base font-bold text-[#0A1435] mb-1.5">Assess</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Understand your current infrastructure and business goals.
                </p>
              </div>
            </div>

            {/* Step 2: Plan */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:border-indigo-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-3">
                  <Calendar size={18} />
                </div>
                <div className="text-xs font-mono font-bold text-indigo-600 mb-0.5">02</div>
                <h4 className="text-base font-bold text-[#0A1435] mb-1.5">Plan</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Define cloud strategy, architecture and roadmap.
                </p>
              </div>
            </div>

            {/* Step 3: Implement */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:border-emerald-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                  <Layers size={18} />
                </div>
                <div className="text-xs font-mono font-bold text-emerald-600 mb-0.5">03</div>
                <h4 className="text-base font-bold text-[#0A1435] mb-1.5">Implement</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Migrate, deploy and configure with best practices.
                </p>
              </div>
            </div>

            {/* Step 4: Secure */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:border-amber-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center mb-3">
                  <ShieldCheck size={18} />
                </div>
                <div className="text-xs font-mono font-bold text-amber-600 mb-0.5">04</div>
                <h4 className="text-base font-bold text-[#0A1435] mb-1.5">Secure</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Apply security frameworks, monitoring and compliance.
                </p>
              </div>
            </div>

            {/* Step 5: Optimize */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:border-blue-300 transition-all flex flex-col justify-between group col-span-2 sm:col-span-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-primary flex items-center justify-center mb-3">
                  <TrendingUp size={18} />
                </div>
                <div className="text-xs font-mono font-bold text-primary mb-0.5">05</div>
                <h4 className="text-base font-bold text-[#0A1435] mb-1.5">Optimize</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Continuously improve performance, cost and security posture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 5: TECHNOLOGY STACK
          ──────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFCFF] border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 mb-1.5">
                <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                  TECHNOLOGY STACK
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#0A1435] tracking-tight leading-[1.2]">
                Leading Platforms & Tools
              </h2>
            </div>

            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full border border-blue-500 text-blue-600 hover:bg-blue-50 text-xs font-bold transition-colors w-fit shrink-0"
            >
              View All Technologies
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 mb-8 pb-2 overflow-x-auto no-scrollbar">
            {categoryTabs.map((category) => {
              const isActive = activeTab === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveTab(category)}
                  className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${isActive
                    ? "bg-primary text-white shadow-sm shadow-blue-500/25"
                    : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80"
                    }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Tech Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-4 items-center">
            {techTools.map((tech, idx) => (
              <div
                key={idx}
                className="py-4 px-3 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,82,204,0.06)] hover:border-blue-400 hover:-translate-y-0.5 transition-all flex flex-col items-center justify-center text-center group cursor-pointer min-h-[105px]"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                  {tech.logoSvg}
                </div>
                <h4 className="text-[11px] font-bold text-slate-700 leading-tight">
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 6: FEATURED CASE STUDIES
          ──────────────────────────────────────────────────────────── */}
      <section id="case-studies" className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 mb-1.5">
                <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                  FEATURED CASE STUDIES
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A1435] tracking-tight">
                Real Solutions. <span className="text-primary">Real Results.</span>
              </h2>
            </div>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-blue-700 transition-colors"
            >
              View All Case Studies
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* 3 Case Study Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,82,204,0.08)] hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-6">
                  {/* Tag badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-primary bg-blue-50 border border-blue-100 mb-3.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{study.tag}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0A1435] mb-2 leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-5">
                    {study.desc}
                  </p>

                  {/* Mockup Image */}
                  <div className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50 mb-5 h-44">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-t border-slate-100">
                    {study.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="text-lg font-extrabold text-primary leading-tight">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div className="px-6 pb-6 pt-2">
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-blue-700 transition-colors"
                  >
                    Read Case Study
                    <ArrowRight size={13} />
                  </Link>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 7: INDUSTRIES WE SERVE
          ──────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F4F8FD] border-t border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 mb-2">
              <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                INDUSTRIES WE SERVE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A1435] tracking-tight">
              Secure Solutions for <span className="text-primary">Every Industry</span>
            </h2>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,82,204,0.08)] hover:border-blue-400 hover:-translate-y-0.5 transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xs">
                  <ind.icon size={22} />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                  {ind.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 8: WHAT OUR CLIENTS SAY (TESTIMONIALS)
          ──────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 mb-1.5">
                <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                  WHAT OUR CLIENTS SAY
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A1435] tracking-tight">
                Trusted by Businesses Worldwide
              </h2>
            </div>

            {/* Slider controls */}
            <div className="flex items-center gap-2">
              <button
                className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary shadow-xs transition-colors cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary shadow-xs transition-colors cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Testimonial Feature Card */}
          <div className="rounded-3xl bg-[#FAFCFF] border border-slate-200/80 p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            {/* Quote Mark */}
            <div className="text-blue-500 mb-4 opacity-75">
              <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                <path d="M0 18C0 8.059 7.059 1 17 0v7.059c-5.5 0-9.412 3.912-9.412 9.412H17V30H0V18zm23 0C23 8.059 30.059 1 40 0v7.059c-5.5 0-9.412 3.912-9.412 9.412H40V30H23V18z" />
              </svg>
            </div>

            <p className="text-lg sm:text-2xl font-medium text-slate-800 leading-relaxed italic mb-8 max-w-4xl">
              "Cybaem Tech helped us migrate to the cloud seamlessly and implemented strong security measures. Their team is highly professional and responsive."
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
             
                <div>
                  <div className="text-base font-bold text-[#0A1435]">Rohit Varma</div>
                  <div className="text-xs text-slate-500">CTO, Retail Enterprise</div>
                </div>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 9: FREQUENTLY ASKED QUESTIONS
          ──────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 mb-1.5">
                <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <ChevronRight size={13} className="text-primary" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A1435] tracking-tight">
                Got Questions? We've Got Answers.
              </h2>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 text-slate-700 hover:border-primary hover:text-primary text-xs font-bold transition-colors w-fit"
            >
              View All FAQs
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* 2-Column Accordion */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              {faqsLeft.map((faq, index) => {
                const key = `left-${index}`;
                const isOpen = !!openFaqs[key];
                return (
                  <div
                    key={key}
                    className="rounded-2xl border border-slate-200/90 bg-white p-5 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(key)}
                      className="w-full flex items-center justify-between text-left gap-4 font-bold text-sm sm:text-[15px] text-[#0A1435] cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {faqsRight.map((faq, index) => {
                const key = `right-${index}`;
                const isOpen = !!openFaqs[key];
                return (
                  <div
                    key={key}
                    className="rounded-2xl border border-slate-200/90 bg-white p-5 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(key)}
                      className="w-full flex items-center justify-between text-left gap-4 font-bold text-sm sm:text-[15px] text-[#0A1435] cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 10: BOTTOM CTA BANNER
          ──────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="rounded-3xl bg-[#07132B] text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl border border-slate-800">
            {/* CTA Background Banner */}
            <img
              src={ctaImg}
              alt="CTA Background Pattern"
              className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none opacity-40 lg:opacity-60"
            />
            {/* Glowing gradient background accents */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="text-[11px] font-extrabold tracking-[0.2em] text-blue-400 uppercase mb-2">
                  READY TO STRENGTHEN YOUR IT INFRASTRUCTURE?
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.2] mb-4">
                  Let's Build a Secure & Scalable Future Together.
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                  Get expert guidance on cloud strategy, infrastructure, and security tailored to your business needs.
                </p>

                <div className="flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={openConsultationModal}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0A1B39] hover:bg-blue-50 text-sm font-bold transition-all shadow-md group cursor-pointer"
                  >
                    Book a Free Consultation
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={openConsultationModal}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white text-sm font-semibold transition-all border border-slate-600 cursor-pointer"
                  >
                    Talk to an Expert
                  </button>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default CloudSecurity;
