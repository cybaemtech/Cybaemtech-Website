import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  X,
  ShieldCheck,
  Layers,
  Briefcase,
  Handshake,
  Users,
  CheckCircle2,
  Code2,
  Headphones,
  TrendingUp,
  Compass,
  FileText,
  Terminal,
  Rocket,
  RefreshCw,
  Star,
  Plus,
  Minus,
  Sparkles,
  Activity,
  Monitor,
  Volume2,
  Lightbulb
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { enterpriseSoftwareSeoData } from "@/data/seo/enterpriseSoftwareSeo";
import { useConsultationModal } from "@/context/ConsultationModalContext";

// Product demo media & assets
import crmAceDemo from "@/assets/crm-ace-demo.mp4";
import projectManagementDemo from "@/assets/project-management-demo.mp4";

import productCard1 from "@/assets/CT images/Product-Enterprise software/product-card-1.webp";
import productCard2 from "@/assets/CT images/Product-Enterprise software/product-card-2.webp";
import productCard3 from "@/assets/CT images/Product-Enterprise software/product-card-3.webp";
import productCard4 from "@/assets/CT images/Product-Enterprise software/product-card-4.webp";
import productCard5 from "@/assets/CT images/Product-Enterprise software/product-card-5.webp";
import productCard6 from "@/assets/CT images/Product-Enterprise software/product-card-6.webp";

import enterpriseHeroPerson from "@/assets/Cybaem nova.png";
import enterpriseCtaBg from "@/assets/CT images/Product-Enterprise software/enterprise-cta-silhouette.jpg";
import developmentProcessImg from "@/assets/Development_Process.png";
import TechnologyStackSection from "@/components/TechnologyStackSection";

/* ────────────────────────────────────────────────────────────
   1. CLIENT LOGOS (Vector SVG Data)
   ──────────────────────────────────────────────────────────── */
const clientLogos = [
  {
    name: "TATA",
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 120 40">
        <path d="M18 10h12v4h-4v16h-4V14h-4v-4zm18 0h4l7 20h-4.5l-1.8-5.5h-8.4L26.5 30H22l14-20zm.5 5.5l-3.2 9.5h6.4l-3.2-9.5zm19.5-5.5h12v4h-4v16h-4V14h-4v-4zm18 0h4l7 20h-4.5l-1.8-5.5h-8.4L62.5 30H58l14-20zm.5 5.5l-3.2 9.5h6.4l-3.2-9.5z" />
        <circle cx="102" cy="20" r="13" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M96 16c2 4 6 8 12 8M96 24c2-4 6-8 12-8" fill="none" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    name: "Mahindra",
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 140 40">
        <path d="M12 28V12h4.5l4 9 4-9H29v16h-3.8V17.5l-3.8 8.5h-2.8l-3.8-8.5V28H12zm23.5 0h-3.5v-11h3.5v1.8c1-1.4 2.8-2.1 4.5-2.1 3.2 0 5 2.2 5 5.5V28h-3.5v-5.4c0-2-.8-3.1-2.5-3.1-1.7 0-3.5 1.1-3.5 3.3V28zm14 0h-3.5V8.5h3.5V18c1-1.3 2.7-2 4.3-2 3.2 0 5 2.2 5 5.5V28h-3.5v-5.4c0-2-.8-3.1-2.5-3.1-1.7 0-3.3 1.1-3.3 3.3V28zm14.5 0h-3.5v-11h3.5V28zm-1.8-13.5c-1.2 0-2.2-.9-2.2-2.1 0-1.1 1-2.1 2.2-2.1 1.2 0 2.2 1 2.2 2.1 0 1.2-1 2.1-2.2 2.1zm8 13.5h-3.5v-11h3.5v1.8c1-1.4 2.8-2.1 4.5-2.1 3.2 0 5 2.2 5 5.5V28h-3.5v-5.4c0-2-.8-3.1-2.5-3.1-1.7 0-3.5 1.1-3.5 3.3V28zm14 0h-3.5V8.5h3.5v7.2c1.2-1.3 2.8-2 4.5-2 3.8 0 6.5 3 6.5 7.2 0 4.1-2.7 7.1-6.5 7.1-1.7 0-3.3-.7-4.5-2V28zm3.8-3.2c2.2 0 3.8-1.7 3.8-4 0-2.3-1.6-4-3.8-4-2.2 0-3.8 1.7-3.8 4 0 2.3 1.6 4 3.8 4z" />
      </svg>
    ),
  },
  {
    name: "BOSCH",
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 130 40">
        <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <rect x="14" y="14" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M42 12h8.5c3.5 0 6 1.8 6 4.5 0 1.8-1 3.2-2.5 3.8 2.2.6 3.5 2.2 3.5 4.4 0 3.2-2.8 5.3-6.5 5.3H42V12zm4.5 6.5h3.8c1.5 0 2.5-.8 2.5-2s-1-2-2.5-2H46.5v4zm0 8h4.2c1.8 0 2.8-.9 2.8-2.2s-1-2.2-2.8-2.2H46.5v4.4zm16.5-6.5c0-4.8 3.5-8.3 8.5-8.3s8.5 3.5 8.5 8.3-3.5 8.3-8.5 8.3-8.5-3.5-8.5-8.3zm12.5 0c0-2.8-1.8-4.8-4-4.8s-4 2-4 4.8 1.8 4.8 4 4.8 4-2 4-4.8zm11 5.5l3.2-2.5c1.5 1.5 3.5 2.3 5.5 2.3 2 0 3.2-.8 3.2-2 0-3-11-1.5-11-8.2 0-3.2 2.8-5.4 6.8-5.4 2.8 0 5.4 1 7.2 2.8l-3 2.5c-1.2-1.2-2.8-1.8-4.2-1.8-1.8 0-2.8.8-2.8 1.8 0 2.8 11 1.4 11 8.2 0 3.5-2.8 5.5-7.2 5.5-3.5 0-6.5-1.2-8.7-3.2zm23-5.5c0-4.8 3.5-8.3 8.5-8.3s8.5 3.5 8.5 8.3-3.5 8.3-8.5 8.3-8.5-3.5-8.5-8.3zm12.5 0c0-2.8-1.8-4.8-4-4.8s-4 2-4 4.8 1.8 4.8 4 4.8 4-2 4-4.8zm20.5 8V12h4.5v6.5h7V12h4.5v18h-4.5v-7.5h-7V30h-4.5z" />
      </svg>
    ),
  },
  {
    name: "SIEMENS",
    svg: (
      <svg className="h-5 w-auto fill-current" viewBox="0 0 130 35">
        <path d="M12 23.5l2.8-2.2c1.4 1.5 3.2 2.4 5.2 2.4 1.8 0 2.8-.7 2.8-1.8 0-2.8-9.8-1.5-9.8-7.5 0-3 2.5-5 6.2-5 2.5 0 4.8.9 6.5 2.5L23 14c-1.2-1.2-2.5-1.8-3.8-1.8-1.5 0-2.4.7-2.4 1.6 0 2.6 9.8 1.4 9.8 7.5 0 3.2-2.6 5.2-6.6 5.2-3.2 0-5.8-1.2-7.8-3zm18.5 4V9.8h4.2v17.7h-4.2zm9.5 0V9.8h12.5v3.4H44.2v3.7h8.8v3.4h-8.8v3.8h10.5v3.4H40zm17.5 0V9.8h5l4.8 10.2 4.8-10.2h5v17.7h-4.2v-11l-4.5 9.2h-2.2l-4.5-9.2v11h-4.2zm23 0V9.8h12.5v3.4h-8.3v3.7h8.8v3.4h-8.8v3.8h10.5v3.4H80.5zm17.5 0V9.8h4.2l9 11.2V9.8h4.2v17.7h-4.2l-9-11.2v11.2H98zm21.5-4l2.8-2.2c1.4 1.5 3.2 2.4 5.2 2.4 1.8 0 2.8-.7 2.8-1.8 0-2.8-9.8-1.5-9.8-7.5 0-3 2.5-5 6.2-5 2.5 0 4.8.9 6.5 2.5l-2.7 2.2c-1.2-1.2-2.5-1.8-3.8-1.8-1.5 0-2.4.7-2.4 1.6 0 2.6 9.8 1.4 9.8 7.5 0 3.2-2.6 5.2-6.6 5.2-3.2 0-5.8-1.2-7.8-3z" />
      </svg>
    ),
  },
  {
    name: "Godrej",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 110 40">
        <text x="5" y="27" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="bold" fontSize="26">
          Godrej
        </text>
      </svg>
    ),
  },
  {
    name: "Mercedes-Benz",
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 150 40">
        <circle cx="18" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M18 20L18 7M18 20L7 27M18 20L29 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <text x="38" y="24" fontFamily="serif" fontSize="13" letterSpacing="0.05em">
          Mercedes-Benz
        </text>
      </svg>
    ),
  },
  {
    name: "Volkswagen",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 50 40">
        <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M13 14l3.5 12h1.5l3-8 3 8h1.5l3.5-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "JSW",
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 90 35">
        <text x="5" y="26" fontFamily="Arial, sans-serif" fontWeight="900" fontStyle="italic" fontSize="26" letterSpacing="-0.03em">
          JSW
        </text>
      </svg>
    ),
  },
  {
    name: "Schneider Electric",
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 160 38">
        <path d="M8 8h14v22H8z" fill="#009530" rx="3" />
        <path d="M12 23l3-10 3 10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
        <text x="28" y="19" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="11" letterSpacing="-0.02em">
          Schneider
        </text>
        <text x="28" y="29" fontFamily="Arial, sans-serif" fontSize="8" letterSpacing="0.08em">
          Electric
        </text>
      </svg>
    ),
  },
];

/* ────────────────────────────────────────────────────────────
   2. PRODUCTS SHOWCASE DATA
   ──────────────────────────────────────────────────────────── */
const enterpriseProducts = [
  {
    id: "01",
    title: "Cybaem Nova",
    shortName: "Cybaem Nova CRM Platform",
    category: "SALES & CRM",
    badge: "AI-POWERED BUSINESS OPERATING SYSTEM",
    description:
      "Intelligent CRM with predictive lead scoring, automated pipeline management, and AI-driven customer insights.",
    image: productCard1,
    video: crmAceDemo,
    deliveryFocus: "Configured for enterprise rollout, secure adoption, and workflow alignment.",
    demoArea: "Interactive sandboxes available across all enterprise products.",
    link: "/product/crm",
  },
  {
    id: "02",
    title: "Project Management Tool",
    shortName: "Project Management Tool",
    category: "OPERATIONS",
    badge: "ENTERPRISE COLLABORATION SUITE",
    description:
      "Smart task automation, resource allocation, and milestone tracking with real-time collaboration for distributed teams.",
    image: productCard2,
    video: projectManagementDemo,
    deliveryFocus: "Multi-tier project roadmaps with automated sprint velocity tracking.",
    demoArea: "Live gantt schedules and team capacity optimization sandboxes.",
    link: "/portfolio",
  },
  {
    id: "03",
    title: "Document Management System",
    shortName: "Document Management System",
    category: "DMS & COMPLIANCE",
    badge: "AI-DRIVEN SECURE ARCHIVE",
    description:
      "AI-powered document search, classification, version control, and compliance-ready audit trails for enterprise content.",
    image: productCard3,
    video: crmAceDemo,
    deliveryFocus: "OCR-assisted batch ingestion and automated regulatory compliance indexing.",
    demoArea: "Full-text semantic document search and audit trail sandboxes.",
    link: "/portfolio",
  },
  {
    id: "04",
    title: "ITSM Tool",
    shortName: "ITSM Tool",
    category: "IT SERVICE DESK",
    badge: "ITIL WORKFLOW AUTOMATION",
    description:
      "Complete IT service management with automated ticketing, SLA tracking, change management, and self-service portal.",
    image: productCard4,
    video: projectManagementDemo,
    deliveryFocus: "Automated incident triaging, dynamic escalation matrices, and SLA monitors.",
    demoArea: "Multi-channel ticket resolution and IT asset mapping sandbox.",
    link: "/cloud-security/it-infrastructure-services",
  },
  {
    id: "05",
    title: "Site Engineer Ecosystem",
    shortName: "Site Engineer Ecosystem",
    category: "FIELD OPERATIONS",
    badge: "MOBILE-FIRST TELEMETRY",
    description:
      "Field operations platform for site engineers with real-time reporting, asset tracking, and offline-capable mobile access.",
    image: productCard5,
    video: crmAceDemo,
    deliveryFocus: "Geo-fenced task check-ins, telemetry logging, and offline synchronization.",
    demoArea: "Mobile and tablet field engineer emulator sandboxes.",
    link: "/portfolio",
  },
  {
    id: "06",
    title: "HR Management System",
    shortName: "HR Management System",
    category: "PEOPLE & TALENT",
    badge: "COMPREHENSIVE HCM & PAYROLL",
    description:
      "End-to-end HR platform covering recruitment, onboarding, payroll, performance reviews, and compliance management.",
    image: productCard6,
    video: projectManagementDemo,
    deliveryFocus: "Automated payroll calculation, biometric integration, and tax compliance.",
    demoArea: "Employee self-service dashboard and review workflow sandboxes.",
    link: "/portfolio",
  },
];

/* ────────────────────────────────────────────────────────────
   3. WHY CHOOSE OUR ENTERPRISE SOFTWARE
   ──────────────────────────────────────────────────────────── */
const whyChooseFeatures = [
  {
    icon: Code2,
    title: "End-to-end Development",
    desc: "From architecture blueprinting and UI/UX design to robust cloud deployment and QA automation.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade Security",
    desc: "Dual ISO certifications (ISO 27001 & 27017) with DevSecOps practices and end-to-end encryption.",
  },
  {
    icon: Layers,
    title: "Scalable & Flexible Architecture",
    desc: "Modular microservices and cloud-native topologies designed to effortlessly handle massive enterprise scale.",
  },
  {
    icon: Users,
    title: "Industry-specific Expertise",
    desc: "Deep domain experience across manufacturing, healthcare, logistics, financial services, and retail.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support & Maintenance",
    desc: "24/7 proactive monitoring, rapid P1 incident resolution, and continuous feature evolution.",
  },
  {
    icon: TrendingUp,
    title: "Focus on ROI & Business Impact",
    desc: "Engineered to deliver tangible ROI: accelerated workflows, minimized error rates, and lower TCO.",
  },
];

/* ────────────────────────────────────────────────────────────
   4. OUR PROVEN DEVELOPMENT PROCESS (5 Steps)
   ──────────────────────────────────────────────────────────── */
const developmentProcess = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understand business goals, challenges and requirements.",
    icon: Lightbulb,
    numberColor: "text-[#2563EB]",
    numberBg: "bg-[#EFF6FF]",
    iconColor: "text-[#2563EB]",
    iconBg: "bg-[#DBEAFE]/80",
  },
  {
    step: "02",
    title: "Plan",
    subtitle: "Define strategy, architecture and project roadmap.",
    icon: FileText,
    numberColor: "text-[#7C3AED]",
    numberBg: "bg-[#FAF5FF]",
    iconColor: "text-[#7C3AED]",
    iconBg: "bg-[#F3E8FF]/80",
  },
  {
    step: "03",
    title: "Develop",
    subtitle: "Build with best practices, clean code and agile sprints.",
    icon: Code2,
    numberColor: "text-[#059669]",
    numberBg: "bg-[#ECFDF5]",
    iconColor: "text-[#059669]",
    iconBg: "bg-[#D1FAE5]/80",
  },
  {
    step: "04",
    title: "Test",
    subtitle: "Ensure quality, security and performance.",
    icon: ShieldCheck,
    numberColor: "text-[#D97706]",
    numberBg: "bg-[#FFFBEB]",
    iconColor: "text-[#D97706]",
    iconBg: "bg-[#FEF3C7]/80",
  },
  {
    step: "05",
    title: "Deploy & Evolve",
    subtitle: "Launch seamlessly and continuously improve.",
    icon: Rocket,
    numberColor: "text-[#E11D48]",
    numberBg: "bg-[#FFF1F2]",
    iconColor: "text-[#E11D48]",
    iconBg: "bg-[#FFE4E6]/80",
  },
];





/* ────────────────────────────────────────────────────────────
   6. CASE STUDIES
   ──────────────────────────────────────────────────────────── */
const caseStudies = [
  {
    title: "Transformed CRM operations for a leading manufacturer",
    tags: ["CRM", "Automation", "Analytics"],
    image: "/case-studies/img_industrial.png",
    link: "/portfolio",
  },
  {
    title: "Digitized project tracking for a global engineering firm",
    tags: ["Project Management", "Collaboration"],
    image: "/case-studies/img_engineering.png",
    link: "/portfolio",
  },
  {
    title: "Streamlined IT support for an enterprise client",
    tags: ["ITSM", "Workflow Automation"],
    image: "/case-studies/ent_itsm_dashboard.png",
    link: "/portfolio",
  },
];

/* ────────────────────────────────────────────────────────────
   7. TESTIMONIALS
   ──────────────────────────────────────────────────────────── */
const testimonialsList = [
  {
    quote:
      "Cybaem Tech's team transformed our entire sales pipeline with their custom software solution. They understood our business, delivered on time, and the results have been outstanding.",
    name: "Amit Sharma",
    role: "Director, Manufacturing Industry",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "The engineering rigor and dual ISO security governance gave our leadership complete peace of mind. Cybaem's software modernized our field engineering operations seamlessly.",
    name: "Vikram Malhotra",
    role: "Chief Technology Officer, InfraTech Global",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Unlike off-the-shelf software vendors, Cybaem Tech tailored the ERP workflows precisely to our supply chain realities. Our throughput increased by 42% in the first quarter.",
    name: "Pooja Hegde",
    role: "Head of Operations, NexGen Logistics",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
  },
];

/* ────────────────────────────────────────────────────────────
   8. FREQUENTLY ASKED QUESTIONS
   ──────────────────────────────────────────────────────────── */
const faqData = [
  {
    q: "How long does it take to develop a custom software solution?",
    a: "Project timelines typically range from 8 to 16 weeks depending on product scope, complexity, and custom integration requirements. We provide an initial functional prototype within 3 to 4 weeks using agile two-week sprint cycles.",
  },
  {
    q: "Can you integrate with our existing systems?",
    a: "Yes. We engineer enterprise-grade API gateways, secure webhooks, and middleware to interface smoothly with existing ERPs (SAP, Oracle), CRM databases (Salesforce), legacy mainframe systems, and third-party SaaS stacks without data disruption.",
  },
  {
    q: "What industries do you work with?",
    a: "We design tailored enterprise platforms for manufacturing, logistics, healthcare, financial services, engineering & construction, retail, and government/e-governance sectors.",
  },
  {
    q: "How do you ensure data security?",
    a: "Security is embedded into every development phase. We enforce dual ISO-certified controls (ISO 27001 & ISO 27017), AES-256 data encryption at rest and in transit, zero-trust role-based access control (RBAC), and automated vulnerability testing.",
  },
  {
    q: "Will we get ongoing support after launch?",
    a: "Yes. Every enterprise deployment includes dedicated post-launch support, 24/7 SLA-backed monitoring, scheduled security patching, infrastructure scaling, and regular feature updates.",
  },
  {
    q: "Can the solution be scaled as our business grows?",
    a: "Absolutely. We build all solutions using cloud-native, containerized architectures (Docker & Kubernetes) with horizontal auto-scaling, ensuring flawless performance as user volumes and data scale 100x.",
  },
];

/* ────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ──────────────────────────────────────────────────────────── */
const EnterpriseSoftware = () => {
  const { openConsultationModal } = useConsultationModal();

  // Active product showcase state
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(18);
  const [isPaused, setIsPaused] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Testimonials state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // FAQ state
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0]);

  const currentProduct = enterpriseProducts[activeProductIndex];

  const handlePrevProduct = () => {
    setActiveProductIndex((prev) => (prev - 1 + enterpriseProducts.length) % enterpriseProducts.length);
    setSecondsRemaining(18);
  };

  const handleNextProduct = () => {
    setActiveProductIndex((prev) => (prev + 1) % enterpriseProducts.length);
    setSecondsRemaining(18);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      handleNextProduct();
    } else if (diff < -50) {
      handlePrevProduct();
    }
    setTouchStartX(null);
  };

  const handleProductSelect = (index: number) => {
    setActiveProductIndex(index);
    setSecondsRemaining(18);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          setActiveProductIndex((curr) => (curr + 1) % enterpriseProducts.length);
          return 18;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* SEO metadata */}
      <SEOHead
        title={enterpriseSoftwareSeoData.title}
        description={enterpriseSoftwareSeoData.description}
        canonical={enterpriseSoftwareSeoData.canonical}
        keywords={enterpriseSoftwareSeoData.keywords}
        ogTitle={enterpriseSoftwareSeoData.ogTitle}
        ogDescription={enterpriseSoftwareSeoData.ogDescription}
        twitterTitle={enterpriseSoftwareSeoData.twitterTitle}
        twitterDescription={enterpriseSoftwareSeoData.twitterDescription}
        jsonLd={enterpriseSoftwareSeoData.jsonLd}
      />

      {/* Global Navigation */}
      <Navbar />

      {/* ────────────────────────────────────────────────────────────
          SECTION 1: HERO
          ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-8 lg:pt-24 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#EEF4FF] via-[#F7FAFE] to-white">
        {/* Soft atmospheric gradient glow backgrounds */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/3" />
        <div className="absolute top-24 right-0 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-5 flex flex-col items-start order-2 lg:order-1">
              {/* Eyebrow Pill */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mb-4"
              >
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider text-primary bg-blue-50/90 border border-blue-200/80 shadow-xs uppercase">
                  <span>ENTERPRISE SOFTWARE DEVELOPMENT</span>
                  <ArrowRight size={13} className="text-blue-500" />
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[46px] xl:text-[52px] text-[#0A1435] leading-[1.12] tracking-tight mb-4"
              >
                Enterprise Software <br /> <span className="text-primary">
                  Development Solutions
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="text-slate-600 text-base sm:text-[16.5px] leading-relaxed max-w-lg mb-6"
              >
                We design, build, and modernize enterprise software that helps you work smarter, scale faster, and stay ahead in a digital-first world.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16 }}
                className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto"
              >
                <button
                  onClick={openConsultationModal}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-primary hover:bg-primary/90 text-white text-[14px] font-semibold transition-all shadow-md shadow-blue-950/20 hover:shadow-lg hover:-translate-y-0.5 group w-full sm:w-auto"
                >
                  Discuss Your Project
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <a
                  href="#our-solutions"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-[14px] font-semibold transition-all border border-primary shadow-xs hover:border-primary w-full sm:w-auto"
                >
                  Explore Solutions
                </a>
              </motion.div>

              {/* 4 Value Badges */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200/60 w-full"
              >
                {[
                  { icon: Layers, label: "Scalable Architecture" },
                  { icon: ShieldCheck, label: "Secure by Design" },
                  { icon: Briefcase, label: "Industry Expertise" },
                  { icon: Handshake, label: "Long-term Partnership" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0">
                      <item.icon size={14} strokeWidth={2.2} />
                    </div>
                    <span className="text-[11.5px] font-semibold text-slate-800 leading-tight">
                      {item.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Graphic Column: Increased width for full high-resolution dashboard view */}
            <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-[760px] xl:max-w-[840px] 2xl:max-w-[900px]">

                {/* Main Visual Display Frame: Uncropped, native aspect ratio, full resolution */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="relative group"
                >
                  <img
                    src={enterpriseHeroPerson}
                    alt="Cybaem Nova Enterprise CRM & Business OS Dashboard"
                    className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl"
                  />
                </motion.div>

                {/* Floating Metric 1 (Top Left): Total Users 15K +62% - Outside screen area */}


                {/* Floating Metric 2 (Bottom Left): Active Projects 24 On Track - Outside dashboard charts */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.35 }}
                  className="absolute -bottom-5 sm:-bottom-7 -left-2 sm:-left-5 lg:-left-6 bg-white/95 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-slate-100 px-3.5 py-2.5 z-20 flex items-center gap-2.5 animate-[float_5.5s_ease-in-out_infinite_reverse]"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0">
                    <Activity size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 font-medium uppercase tracking-wider">Active Projects</div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-base font-bold text-[#0A1435]">24</span>
                      <span className="text-[10px] text-primary font-semibold">On Track</span>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Metric 3 (Bottom Right): 99.8% SLA Health - Outside dashboard charts */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.4 }}
                  className="absolute -bottom-5 sm:-bottom-7 -right-2 sm:-right-4 lg:-right-6 bg-white/95 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-slate-100 px-3.5 py-2.5 z-20 flex items-center gap-2.5 animate-[float_5s_ease-in-out_infinite]"
                >
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 font-medium uppercase tracking-wider">System Health</div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-slate-900">99.8%</span>
                      <span className="text-[10px] text-emerald-600 font-semibold">SLA Uptime</span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 2: TRUSTED BY FORWARD-THINKING BUSINESSES (Client Logos)
          ──────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 border-y border-slate-100 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-center text-[10px] font-bold tracking-[0.22em] text-slate-400 uppercase mb-6">
            TRUSTED BY FORWARD-THINKING BUSINESSES
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-6 sm:gap-8 items-center justify-items-center">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="text-slate-400 hover:text-slate-800 transition-colors duration-300 flex items-center justify-center"
                title={client.name}
              >
                {client.svg}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 3: OUR SOLUTIONS (Interactive Product Showcase)
          ──────────────────────────────────────────────────────────── */}
      <section id="our-solutions" className="py-14 lg:py-20 bg-[#F8FAFC] relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">

          {/* Section Header with Navigation Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 mb-2">
                <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                  OUR SOLUTIONS
                </span>
                <ArrowRight size={13} className="text-blue-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#0A1435] tracking-tight leading-tight mb-2">
                Powerful solutions for every business need.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                From customer experience to internal operations, explore our enterprise software solutions built to solve real business challenges and drive measurable results.
              </p>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handlePrevProduct}
                aria-label="Previous solution"
                className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-all shadow-xs hover:border-slate-300"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNextProduct}
                aria-label="Next solution"
                className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-all shadow-md shadow-blue-500/25"
              >
                <ChevronRight size={16} />
              </button>

              {/* Counter & Indicator Bar */}
              <div className="flex items-center gap-2.5 pl-1">
                <span className="text-xs font-bold text-slate-700">
                  {currentProduct.id} <span className="text-slate-400 font-normal">/ 06</span>
                </span>
                <div className="w-14 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-600 rounded-full"
                    animate={{ width: `${((activeProductIndex + 1) / enterpriseProducts.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Featured Showcase Card */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden mb-6"
          >
            {/* Mobile Header (Pills, ID, Title, Description) - Shows First on Mobile */}
            <div className="block lg:hidden px-5 pt-6 pb-2 sm:px-8 sm:pt-8">
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary bg-blue-50 border border-blue-200">
                    {currentProduct.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100">
                    {currentProduct.badge}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-400">
                  {currentProduct.id}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#0A1435] mb-2.5">
                {currentProduct.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                {currentProduct.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-12 items-stretch">

              {/* Media Preview (Left Column on Desktop, Middle on Mobile) */}
              <div className="lg:col-span-6 px-4 sm:px-6 lg:px-0 py-2 lg:py-0">
                <div className="relative bg-slate-900 rounded-2xl lg:rounded-none min-h-[250px] sm:min-h-[300px] lg:min-h-[420px] h-full flex items-center justify-center overflow-hidden group">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentProduct.id}
                      src={currentProduct.image}
                      alt={currentProduct.title}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Media Bar Overlay */}
                  <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 flex flex-wrap items-center justify-between gap-2 sm:gap-3 bg-slate-900/80 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10 text-white">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 shrink-0">
                        <Volume2 size={13} className="animate-pulse" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-white leading-tight">Auto play preview</p>
                        <p className="text-[10px] text-slate-300">
                          Next slide preview in {secondsRemaining} seconds
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveVideoModal(currentProduct.video)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-slate-900 hover:bg-slate-100 text-[11px] font-bold transition-all shadow-sm"
                    >
                      <Play size={11} fill="currentColor" />
                      WATCH DEMO
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Narrative & Features (Right Column on Desktop, Bottom on Mobile) */}
              <div className="lg:col-span-6 p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  {/* Desktop-only Header (Hidden on Mobile) */}
                  <div className="hidden lg:block">
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary bg-blue-50 border border-blue-200">
                          {currentProduct.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100">
                          {currentProduct.badge}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {currentProduct.id}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1435] mb-3">
                      {currentProduct.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {currentProduct.description}
                    </p>
                  </div>

                  {/* 2 Feature Boxes (Delivery Focus & Demo Area) */}
                  <div className="grid sm:grid-cols-2 gap-3.5 mb-6 pt-2 lg:pt-0">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100/80">
                      <div className="w-7 h-7 rounded-lg bg-blue-100/70 text-primary flex items-center justify-center mb-2">
                        <Layers size={15} />
                      </div>
                      <h4 className="text-[11px] font-bold tracking-wider text-slate-800 uppercase mb-1">
                        DELIVERY FOCUS
                      </h4>
                      <p className="text-[12px] text-slate-600 leading-relaxed">
                        {currentProduct.deliveryFocus}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100/80">
                      <div className="w-7 h-7 rounded-lg bg-indigo-100/70 text-indigo-600 flex items-center justify-center mb-2">
                        <Monitor size={15} />
                      </div>
                      <h4 className="text-[11px] font-bold tracking-wider text-slate-800 uppercase mb-1">
                        DEMO AREA
                      </h4>
                      <p className="text-[12px] text-slate-600 leading-relaxed">
                        {currentProduct.demoArea}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Link Action */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={currentProduct.link}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-blue-700 group"
                  >
                    Product details
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </Link>

                  <button
                    onClick={openConsultationModal}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    Request Custom Architecture
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Mobile Navigation Dots & Arrows (visible only on mobile) */}
          <div className="flex lg:hidden items-center justify-between gap-3 mb-6 px-1">
            <button
              onClick={handlePrevProduct}
              aria-label="Previous solution"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 shadow-sm active:scale-95 transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            {/* 6 Dots Indicator */}
            <div className="flex items-center gap-2">
              {enterpriseProducts.map((p, idx) => {
                const isActive = idx === activeProductIndex;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleProductSelect(idx)}
                    aria-label={`Go to ${p.title}`}
                    className={`h-2 rounded-full transition-all duration-300 ${isActive ? "w-7 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                  />
                );
              })}
            </div>

            <button
              onClick={handleNextProduct}
              aria-label="Next solution"
              className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-md shadow-blue-500/25 active:scale-95 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Bottom Thumbnails Strip (6 items) - Hidden on Mobile */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-2.5 sm:gap-3">
            {enterpriseProducts.map((p, idx) => {
              const isActive = idx === activeProductIndex;
              return (
                <button
                  key={p.id}
                  onClick={() => handleProductSelect(idx)}
                  className={`text-left p-2 rounded-2xl transition-all duration-300 relative group overflow-hidden ${isActive
                    ? "bg-white shadow-md border-2 border-blue-600"
                    : "bg-white/80 hover:bg-white border border-slate-200/80 hover:border-slate-300"
                    }`}
                >
                  {/* Active Top Line Accent */}
                  {isActive && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-blue-600" />
                  )}

                  <div className="w-full h-14 rounded-xl overflow-hidden mb-1.5 bg-slate-100">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className={`text-[11px] font-bold leading-snug line-clamp-2 ${isActive ? "text-primary" : "text-slate-800"}`}>
                    {p.shortName}
                  </p>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 4: WHY CHOOSE OUR ENTERPRISE SOFTWARE
          ──────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Left Column (Sticky Title & CTA) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#0A1435] tracking-tight leading-[1.15] mb-4">
                Why Choose Our <br /><span className="text-primary">Enterprise Software?</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
                We combine deep technical expertise with business understanding to deliver solutions that are secure, scalable and built for impact.
              </p>
              <button
                onClick={openConsultationModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white text-[13px] font-semibold transition-all shadow-md shadow-blue-950/20 group"
              >
                Learn More
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right Column (2x3 Grid of Feature Cards) */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {whyChooseFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <feat.icon size={19} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-[15px] font-bold text-[#0A1435] mb-1.5 leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 5: OUR DEVELOPMENT PROCESS (TURNING IDEAS INTO ENTERPRISE SOLUTIONS)
          ──────────────────────────────────────────────────────────── */}
      <section id="development-process" className="relative py-16 lg:py-24 overflow-hidden bg-white border-y border-slate-100">
        {/* Soft atmospheric gradient glow behind right image */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[550px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-8 items-center">

            {/* ── LEFT COLUMN: Text Narrative & CTA ── */}
            <div className="lg:col-span-12 xl:col-span-4 2xl:col-span-3.5 flex flex-col items-start">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-3.5 sm:mb-4">
                <span className="w-5 sm:w-6 h-[2px] bg-primary rounded-full inline-block" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-slate-500">
                  OUR DEVELOPMENT PROCESS
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl xl:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.14] mb-4">
                Turning Ideas into <br />
                <span className="text-primary">Enterprise Solutions</span>
              </h2>

              {/* Description */}
              <p className="text-slate-500 text-sm sm:text-[14.5px] leading-relaxed max-w-sm mb-7">
                A structured, agile and transparent development process to deliver secure, scalable and business-ready software solutions.
              </p>

              {/* Action Button */}
              <button
                onClick={openConsultationModal}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-primary hover:bg-primary/90 text-white text-[13px] font-semibold transition-all shadow-md shadow-blue-950/20 hover:shadow-xl hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Our Development Approach</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* ── CENTER COLUMN: 5 Timeline Cards with Bracket Track ── */}
            <div className="lg:col-span-6 xl:col-span-4 2xl:col-span-4.5 w-full max-w-[480px] mx-auto lg:mx-0">
              <div className="relative">
                {/* Bracket Timeline Vertical SVG Track */}
                <svg
                  className="absolute left-0 top-3 bottom-3 w-6 h-[calc(100%-24px)] pointer-events-none hidden sm:block overflow-visible"
                  viewBox="0 0 24 500"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M 2 8 C 14 8, 14 24, 14 44 L 14 456 C 14 476, 14 492, 2 492"
                    stroke="#38BDF8"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="space-y-3 sm:space-y-3.5">
                  {developmentProcess.map((step, idx) => {
                    const IconComp = step.icon;
                    return (
                      <div key={idx} className="relative flex items-center sm:pl-8 group">
                        {/* Ring Node on the vertical line (desktop/tablet) */}
                        <div className="hidden sm:block absolute left-[14px] -translate-x-1/2 w-3.5 h-3.5 rounded-full border-[2.4px] border-[#38BDF8] bg-white ring-4 ring-white z-10 transition-transform duration-300 group-hover:scale-125" />

                        {/* Card Body */}
                        <div className="w-full bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-md hover:border-slate-200 transition-all duration-300 p-3 sm:p-3.5 flex items-center gap-3 sm:gap-3.5">
                          {/* Number Badge */}
                          <div
                            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-base sm:text-[17px] shrink-0 ${step.numberBg} ${step.numberColor}`}
                          >
                            {step.step}
                          </div>

                          {/* Icon Box */}
                          <div
                            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${step.iconBg} ${step.iconColor}`}
                          >
                            <IconComp size={22} strokeWidth={2.2} />
                          </div>

                          {/* Content */}
                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 leading-tight">
                              {step.title}
                            </h4>
                            <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                              {step.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Team Image (Hidden on Mobile) ── */}
            <div className="hidden lg:flex lg:col-span-6 xl:col-span-4 2xl:col-span-4 relative items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[540px] xl:max-w-[640px] 2xl:max-w-[720px] lg:-mr-4 xl:-mr-8">
                <img
                  src={developmentProcessImg}
                  alt="Turning Ideas into Enterprise Solutions - Cybaem Tech"
                  className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 6: TECHNOLOGY STACK (COMPACT, ICONS / FAVICONS)
          ──────────────────────────────────────────────────────────── */}
      <TechnologyStackSection
        badgeText="TECHNOLOGY STACK"
        title="Technology Stack"
        subtitle="Modern technologies for modern business challenges."
      />

      {/* ────────────────────────────────────────────────────────────
          SECTION 7: CASE STUDIES
          ──────────────────────────────────────────────────────────── */}
      {/* <section className="py-14 lg:py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8">

            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-1.5 mb-2">
                <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                  CASE STUDIES
                </span>
                <ArrowRight size={13} className="text-blue-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1435] tracking-tight leading-tight mb-4">
                Real businesses. Real results.
              </h2>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A1A3F] hover:bg-[#071330] text-white text-[12px] font-semibold transition-all shadow-md group"
              >
                View All Case Studies
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-5">
              {caseStudies.map((cs, idx) => (
                <Link
                  key={idx}
                  to={cs.link}
                  className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all hover:-translate-y-1.5 overflow-hidden flex flex-col group"
                >
                  <div className="w-full h-40 overflow-hidden bg-slate-100 relative">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-[13px] font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors">
                      {cs.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 pt-2.5 border-t border-slate-100">
                      {cs.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[9px] font-semibold text-slate-500 bg-slate-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>

        </div>
      </section> */}

      {/* ────────────────────────────────────────────────────────────
          SECTION 8: WHAT OUR CLIENTS SAY (Testimonials)
          ──────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Header & Nav */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 mb-2">
                <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                  WHAT OUR CLIENTS SAY
                </span>
                <ArrowRight size={13} className="text-blue-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#0A1435] tracking-tight leading-tight mb-6">
                Trusted by industry leaders worldwide.
              </h2>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length)
                  }
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full border border-slate-200 hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev + 1) % testimonialsList.length)
                  }
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full border border-slate-200 hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Testimonial Card */}
            <div className="lg:col-span-7">
              <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-100 relative">
                {/* Large quote icon */}
                <div className="text-blue-500/20 text-6xl font-serif font-black absolute top-4 left-6 select-none">
                  “
                </div>

                <div className="relative z-10 pt-3">
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                    "{testimonialsList[activeTestimonial].quote}"
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-3 pt-5 border-t border-slate-200/80">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonialsList[activeTestimonial].avatar}
                        alt={testimonialsList[activeTestimonial].name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <div>
                        <h4 className="text-[13px] font-bold text-slate-900 leading-tight">
                          {testimonialsList[activeTestimonial].name}
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-tight">
                          {testimonialsList[activeTestimonial].role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(testimonialsList[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 9: FREQUENTLY ASKED QUESTIONS
          ──────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 mb-2">
              <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <ArrowRight size={13} className="text-blue-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1435] tracking-tight">
              Got questions? We've got answers.
            </h2>
          </div>

          {/* 2-Column FAQ Accordion Grid */}
          <div className="grid md:grid-cols-2 gap-4 items-start">
            {faqData.map((faq, idx) => {
              const isOpen = openFaqIndices.includes(idx);
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-[13px] sm:text-[14px] text-slate-900 hover:text-primary transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className="w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-slate-500">
                      {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-4 text-[12px] text-slate-600 leading-relaxed border-t border-slate-50 pt-2.5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 10: READY TO REPLACE WORKAROUNDS WITH REAL SYSTEMS? (Final CTA)
          ──────────────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">

          <div className="relative rounded-[2.5rem] bg-[#020B24] overflow-hidden p-8 sm:p-10 lg:p-14 text-white shadow-2xl border border-slate-800">

            {/* Background Digital Horizon Image with Ambient Glow */}
            <div className="absolute inset-0 z-0">
              <img
                src={enterpriseCtaBg}
                alt="Enterprise Future"
                className="w-full h-full object-cover object-center opacity-35 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020B24] via-[#020B24]/90 to-transparent" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left CTA Narrative */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-1.5 mb-3">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-blue-400 uppercase">
                    LET'S BUILD TOGETHER
                  </span>
                  <ArrowRight size={13} className="text-blue-400" />
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold leading-[1.15] tracking-tight mb-3 text-white">
                  Ready to replace workarounds with real systems?
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                  Speak with our experts and explore how we can build the right software solution for your business.
                </p>

                <div className="flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={openConsultationModal}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-bold transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:-translate-y-0.5 group"
                  >
                    Book a Consultation
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </button>

                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white text-[13px] font-semibold transition-all border border-slate-700/80"
                  >
                    View Our Portfolio
                  </Link>
                </div>
              </div>

              {/* Right Perks Glass Card (Hidden on Mobile) */}
              <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end">
                <div className="w-full max-w-sm rounded-3xl bg-slate-900/80 backdrop-blur-md p-5 border border-slate-800 shadow-2xl space-y-3">

                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Headphones size={18} />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-white leading-tight">
                        Free Consultation
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Direct with our Solution Architects
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={openConsultationModal}
                    className="w-full flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                        <Sparkles size={18} />
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-white leading-tight">
                          Tailored Recommendations
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Custom to your exact tech stack
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={15} className="text-slate-400 group-hover:text-white transition-colors" />
                  </button>

                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-white leading-tight">
                        Clear Roadmap & Next Steps
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Fixed milestones and SLA guarantees
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          VIDEO DEMO MODAL
          ──────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveVideoModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            >
              <div className="flex items-center justify-between p-3.5 px-5 border-b border-slate-800 bg-slate-950/60">
                <div className="flex items-center gap-2">
                  <Play size={14} className="text-blue-500" fill="currentColor" />
                  <span className="text-sm font-bold text-white">Live Platform Demo</span>
                </div>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <X size={15} />
                </button>
              </div>

              <div className="relative aspect-video bg-black">
                <video
                  src={activeVideoModal}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default EnterpriseSoftware;
