import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  X,
  Smartphone,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Search,
  PenTool,
  Terminal,
  Rocket,
  Download,
  Users,
  Wifi,
  Cloud,
  CheckCircle2,
  Headphones,
  Star,
  Plus,
  Minus,
  Activity,
  Zap,
  Layers,
  Wrench,
  Clock,
  Compass,
  FileText,
  Workflow,
  Check
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { mobileAppSeoData } from "@/data/seo/mobileAppSeo";
import { useConsultationModal } from "@/context/ConsultationModalContext";

// Media & assets
import crmAceDemo from "@/assets/crm-ace-demo.mp4";
import projectManagementDemo from "@/assets/project-management-demo.mp4";

import mobileHeaderImg from "@/assets/mobile-header.png";
import TechnologyStackSection from "@/components/TechnologyStackSection";
import cybaemOnePreview from "@/assets/CT images/Product-Mobile/cybaem-one-preview.jpg";
import enterpriseCtaBg from "@/assets/CT images/Product-Enterprise software/enterprise-cta-silhouette.jpg";

import productCard1 from "@/assets/CT images/Product-Enterprise software/product-card-1.webp";
import productCard2 from "@/assets/CT images/Product-Enterprise software/product-card-2.webp";
import productCard3 from "@/assets/CT images/Product-Enterprise software/product-card-3.webp";
import productCard4 from "@/assets/CT images/Product-Enterprise software/product-card-4.webp";
import productCard5 from "@/assets/CT images/Product-Enterprise software/product-card-5.webp";
import productCard6 from "@/assets/CT images/Product-Enterprise software/product-card-6.webp";

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
   2. MOBILE SOLUTIONS DATA
   ──────────────────────────────────────────────────────────── */
const mobileSolutions = [
  {
    id: "01",
    title: "Cybaem One",
    shortName: "Enterprise Mobility Platform",
    category: "ENTERPRISE MOBILITY",
    badge: "UNIFIED OPERATIONS SUITE",
    description:
      "A unified mobile platform to manage your business operations, workforce, approvals and real-time insights — all in one place.",
    image: cybaemOnePreview,
    video: crmAceDemo,
    feature1: {
      title: "Real-time Insights",
      desc: "Get live data and actionable insights on the go.",
      icon: Activity,
    },
    feature2: {
      title: "Workflow Automation",
      desc: "Streamline approvals and field operations.",
      icon: Workflow,
    },
    feature3: {
      title: "Secure Access",
      desc: "Role-based access with enterprise-grade security.",
      icon: ShieldCheck,
    },
  },
  {
    id: "02",
    title: "Cybaem Commerce",
    shortName: "E-commerce Apps",
    category: "RETAIL & COMMERCE",
    badge: "HIGH-CONVERTING SHOPPING",
    description:
      "Delight shoppers with lightning-fast catalogs, one-tap mobile checkout, personalized product recommendations, and instant payment gateways.",
    image: productCard1,
    video: projectManagementDemo,
    feature1: {
      title: "One-Tap Checkout",
      desc: "Integrated Apple Pay, Google Pay, UPI and card vaults.",
      icon: Zap,
    },
    feature2: {
      title: "AI Personalization",
      desc: "Smart product recommendations based on user behavior.",
      icon: Sparkles,
    },
    feature3: {
      title: "Instant Push Alerts",
      desc: "Automated cart recovery and promotional campaigns.",
      icon: Smartphone,
    },
  },
  {
    id: "03",
    title: "Cybaem Dispatch",
    shortName: "On-Demand Delivery",
    category: "LOGISTICS & ON-DEMAND",
    badge: "FLEET & RIDER DISPATCH",
    description:
      "Connect users, drivers, and dispatch hubs with geo-fenced live GPS tracking, dynamic route optimization, and instant proof of delivery.",
    image: productCard2,
    video: crmAceDemo,
    feature1: {
      title: "Live GPS Tracking",
      desc: "Real-time turn-by-turn navigation and customer ETA tracking.",
      icon: Compass,
    },
    feature2: {
      title: "Smart Order Dispatch",
      desc: "Automated rider allocation based on proximity and traffic.",
      icon: Workflow,
    },
    feature3: {
      title: "Digital Proof of Delivery",
      desc: "In-app e-signatures, photo uploads, and OTP confirmations.",
      icon: CheckCircle2,
    },
  },
  {
    id: "04",
    title: "Cybaem Care",
    shortName: "Healthcare Apps",
    category: "HEALTHCARE & TELEMEDICINE",
    badge: "HIPAA-COMPLIANT PATIENT PORTAL",
    description:
      "Empower patients and healthcare providers with secure video consultations, digital prescriptions, lab booking, and health record storage.",
    image: productCard3,
    video: projectManagementDemo,
    feature1: {
      title: "HD Tele-Consultations",
      desc: "Encrypted peer-to-peer video calls with medical specialists.",
      icon: Activity,
    },
    feature2: {
      title: "Digital Health Records",
      desc: "Secure EMR access, prescription history, and lab reports.",
      icon: FileText,
    },
    feature3: {
      title: "Doctor Appointment Booking",
      desc: "Real-time slot availability, instant booking, and reminders.",
      icon: Clock,
    },
  },
  {
    id: "05",
    title: "Cybaem Pay",
    shortName: "Fintech Apps",
    category: "FINANCE & WEALTH",
    badge: "SECURE BANKING & CRYPTO",
    description:
      "Next-gen financial applications featuring biometric security, micro-investments, budgeting analytics, and cross-border digital transactions.",
    image: productCard4,
    video: crmAceDemo,
    feature1: {
      title: "Biometric Protection",
      desc: "FaceID & fingerprint validation with device binding.",
      icon: ShieldCheck,
    },
    feature2: {
      title: "Instant Money Transfers",
      desc: "Zero-latency peer-to-peer and merchant settlement rails.",
      icon: Zap,
    },
    feature3: {
      title: "Expense Analytics",
      desc: "Automated spending categorization and budget alerts.",
      icon: TrendingUp,
    },
  },
  {
    id: "06",
    title: "Cybaem Connect",
    shortName: "IoT & Connected Apps",
    category: "IOT & SMART HARDWARE",
    badge: "BLE & CLOUD TELEMETRY",
    description:
      "Bridge hardware devices and smart sensors with low-latency Bluetooth Low Energy (BLE) protocols and real-time remote telemetry.",
    image: productCard5,
    video: projectManagementDemo,
    feature1: {
      title: "BLE Instant Pairing",
      desc: "Frictionless device discovery and pairing over Bluetooth.",
      icon: Wifi,
    },
    feature2: {
      title: "Device Telemetry",
      desc: "Real-time sensor monitoring, alerts, and remote triggers.",
      icon: Activity,
    },
    feature3: {
      title: "Firmware OTA Updates",
      desc: "Secure over-the-air firmware upgrades with rollbacks.",
      icon: Cloud,
    },
  },
];

/* ────────────────────────────────────────────────────────────
   3. MOBILE APP SERVICES DATA (5 Services)
   ──────────────────────────────────────────────────────────── */
const mobileServices = [
  {
    title: "Native iOS Development",
    desc: "High-performance, secure and scalable iOS apps engineered for Apple iPhones, iPads, and watchOS devices using Swift.",
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6 fill-current">
        <path d="M88.5 67.8c-.2-15 12.2-22.3 12.7-22.6-7-10.2-17.8-11.6-21.7-11.8-9.2-.9-18.1 5.5-22.7 5.5-4.8 0-12-5.3-19.7-5.2-10.1.2-19.5 5.9-24.7 15-10.6 18.3-2.7 45.4 7.5 60.2 5 7.3 11 15.4 18.9 15.1 7.5-.3 10.4-4.8 19.5-4.8 9 0 11.6 4.8 19.5 4.7 8.1-.1 13.2-7.4 18.2-14.7 5.7-8.4 8.1-16.5 8.2-16.9-.2-.1-15.6-6-15.8-24.5zM77.4 23.9c4.1-5 6.9-12 6.1-18.9-5.9.2-13.1 4-17.4 8.9-3.7 4.3-7 11.4-6.1 18.2 6.6.5 13.3-3.2 17.4-8.2z" />
      </svg>
    ),
    badge: "Swift & SwiftUI",
  },
  {
    title: "Native Android Development",
    desc: "Feature-rich Android apps optimized for a wide range of devices, screen ratios, and Android OS versions using Kotlin.",
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6 fill-current text-emerald-500">
        <path d="M38 52c-4 0-8 3-8 8v36c0 4 4 8 8 8s8-4 8-8V60c0-5-4-8-8-8zm52 0c-4 0-8 3-8 8v36c0 4 4 8 8 8s8-4 8-8V60c0-5-4-8-8-8zm-26-28l6-11c.6-1.2.1-2.6-1-3.2-1.2-.6-2.6-.1-3.2 1l-6.5 12c-5-2-10.4-3.2-16.3-3.2s-11.3 1.2-16.3 3.2L32.2 11c-.6-1.1-2-1.6-3.2-1-1.1.6-1.6 2-1 3.2l6 11C20.6 31.8 12 44.5 12 59h104c0-14.5-8.6-27.2-22-35zM41 42c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm46 0c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
      </svg>
    ),
    badge: "Kotlin & Jetpack",
  },
  {
    title: "Cross-Platform Apps",
    desc: "Build once, run everywhere. Deliver near-native performance on both iOS and Android using React Native and Flutter frameworks.",
    icon: <Layers size={22} className="text-blue-500" />,
    badge: "React Native & Flutter",
  },
  {
    title: "UI/UX & Prototyping",
    desc: "Intuitive, engaging and accessible human-centered interfaces that captivate users and maximize retention from day one.",
    icon: <PenTool size={22} className="text-purple-500" />,
    badge: "Figma & Design Systems",
  },
  {
    title: "App Modernization & Maintenance",
    desc: "Upgrade legacy codebases, patch security vulnerabilities, optimize battery consumption, and ensure continuous OS compatibility.",
    icon: <Wrench size={22} className="text-amber-500" />,
    badge: "24/7 SLA & Upgrades",
  },
];

/* ────────────────────────────────────────────────────────────
   4. OUR PROCESS (5 Steps)
   ──────────────────────────────────────────────────────────── */
const developmentProcess = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understand your goals, users and requirements.",
    icon: Search,
    color: "from-sky-400 to-blue-500",
  },
  {
    step: "02",
    title: "UI/UX Design",
    subtitle: "Create intuitive designs and interactive prototypes.",
    icon: PenTool,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: "03",
    title: "Build",
    subtitle: "Develop with best practices and agile methodology.",
    icon: Terminal,
    color: "from-emerald-400 to-teal-600",
  },
  {
    step: "04",
    title: "Test & Secure",
    subtitle: "Ensure quality, performance and data security.",
    icon: ShieldCheck,
    color: "from-purple-400 to-indigo-600",
  },
  {
    step: "05",
    title: "Launch & Evolve",
    subtitle: "Deploy to app stores and continuously improve.",
    icon: Rocket,
    color: "from-blue-400 to-cyan-600",
  },
];

/* ────────────────────────────────────────────────────────────
   6. CASE STUDIES (Mobile App Focus)
   ──────────────────────────────────────────────────────────── */
const mobileCaseStudies = [
  {
    tag: "E-COMMERCE",
    title: "A Scalable Shopping App for a Growing Retail Brand",
    desc: "Increased mobile sales by 3x with a seamless, personalized, and engaging shopping experience.",
    image: "/case-studies/img_lifestyle.png",
    link: "/portfolio",
  },
  {
    tag: "ENTERPRISE MOBILITY",
    title: "Field Service App for Faster Operations",
    desc: "Streamlined field operations, task telemetry, and improved workforce productivity by 60%.",
    image: "/case-studies/img_industrial.png",
    link: "/portfolio",
  },
  {
    tag: "HEALTHCARE",
    title: "Healthcare Booking App for Better Patient Care",
    desc: "Simplified specialist appointments and improved patient engagement across multiple clinic locations.",
    image: "/case-studies/custom_erp_pharma.png",
    link: "/portfolio",
  },
];

/* ────────────────────────────────────────────────────────────
   7. WHY TEAMS CHOOSE CYBAEM TECH FOR MOBILE APPS
   ──────────────────────────────────────────────────────────── */
const whyChooseMobile = [
  {
    icon: Users,
    title: "User-Centered Experience",
    desc: "Apps designed for real users and real-world scenarios with zero friction.",
  },
  {
    icon: Activity,
    title: "Native Performance",
    desc: "Smooth, fast, and reliable performance across all flagship and budget devices.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Architecture",
    desc: "Enterprise-grade encryption, biometric vaults, and OWASP mobile compliance.",
  },
  {
    icon: Wifi,
    title: "Offline-Ready Workflows",
    desc: "Local data caching and background sync to keep business moving without Internet.",
  },
  {
    icon: Cloud,
    title: "Scalable Backend",
    desc: "Cloud-native microservices built to seamlessly handle your growing user base.",
  },
  {
    icon: TrendingUp,
    title: "Ongoing Optimization",
    desc: "Continuous A/B testing, crash diagnostics, and agile feature rollouts.",
  },
];

/* ────────────────────────────────────────────────────────────
   8. TESTIMONIALS
   ──────────────────────────────────────────────────────────── */
const mobileTestimonials = [
  {
    quote:
      "The new mobile experience simplified our workflows and gave our customers a faster, clearer way to get things done.",
    name: "Digital Transformation Lead",
    role: "Manufacturing & Retail Group",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Cybaem Tech's Flutter team delivered our iOS and Android apps simultaneously on time. User ratings jumped from 3.2 to 4.8 stars in the first 60 days.",
    name: "Head of Product",
    role: "Fintech Innovations",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
  },
];

/* ────────────────────────────────────────────────────────────
   9. FREQUENTLY ASKED QUESTIONS
   ──────────────────────────────────────────────────────────── */
const mobileFaqData = [
  {
    q: "How long does app development take?",
    a: "Typical mobile MVP projects take between 8 to 12 weeks, while feature-rich enterprise mobility platforms range from 12 to 20 weeks with iterative agile two-week sprints.",
  },
  {
    q: "Should we build native or cross-platform?",
    a: "Native (Swift / Kotlin) is ideal for hardware-intensive features, low-level Bluetooth, or specialized iOS/Android UX. Cross-platform (Flutter / React Native) offers faster time-to-market and lower development costs with 90%+ shared code.",
  },
  {
    q: "Can you modernize an existing app?",
    a: "Yes. We refactor legacy codebases, upgrade SDKs, redesign UI/UX according to modern guidelines, and optimize backend APIs for performance and security.",
  },
  {
    q: "How do you secure app data?",
    a: "We enforce biometric authentication (FaceID/Fingerprint), TLS 1.3 data encryption in transit, SQLCipher / Keychain encryption at rest, and ISO 27001-certified development protocols.",
  },
  {
    q: "Do you support publishing to app stores?",
    a: "Yes. Our team handles the end-to-end deployment process on Apple App Store and Google Play Console, ensuring full adherence to review guidelines and zero rejection friction.",
  },
  {
    q: "Can the app integrate with our existing systems?",
    a: "Absolutely. We engineer secure RESTful and GraphQL APIs to seamlessly bridge mobile apps with existing ERPs, CRMs, cloud databases, and third-party SaaS services.",
  },
];

/* ────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ──────────────────────────────────────────────────────────── */
const MobileApp = () => {
  const { openConsultationModal } = useConsultationModal();

    // Testimonials state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Slider state for "Why Teams Choose Cybaem Tech"
  const whySliderRef = useRef<HTMLDivElement>(null);
  const [whyCanScrollLeft, setWhyCanScrollLeft] = useState(false);
  const [whyCanScrollRight, setWhyCanScrollRight] = useState(true);
  const [activeWhyIdx, setActiveWhyIdx] = useState(0);

  const checkWhyScroll = () => {
    if (!whySliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = whySliderRef.current;
    setWhyCanScrollLeft(scrollLeft > 8);
    setWhyCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);

    const firstCard = whySliderRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 290;
    const newIdx = Math.min(
      whyChooseMobile.length - 1,
      Math.max(0, Math.round(scrollLeft / cardWidth))
    );
    setActiveWhyIdx(newIdx);
  };

  const scrollWhy = (direction: "left" | "right") => {
    if (!whySliderRef.current) return;
    const firstCard = whySliderRef.current.firstElementChild as HTMLElement | null;
    const scrollAmount = firstCard ? firstCard.offsetWidth + 16 : 290;
    whySliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = whySliderRef.current;
    if (!slider) return;
    slider.addEventListener("scroll", checkWhyScroll, { passive: true });
    checkWhyScroll();
    return () => slider.removeEventListener("scroll", checkWhyScroll);
  }, []);

  // FAQ state
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0]);

  // Video demo modal state
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* SEO metadata */}
      <SEOHead
        title={mobileAppSeoData.title}
        description={mobileAppSeoData.description}
        canonical={mobileAppSeoData.canonical}
        keywords={mobileAppSeoData.keywords}
        ogTitle={mobileAppSeoData.ogTitle}
        ogDescription={mobileAppSeoData.ogDescription}
        twitterTitle={mobileAppSeoData.twitterTitle}
        twitterDescription={mobileAppSeoData.twitterDescription}
        jsonLd={mobileAppSeoData.jsonLd}
      />

      {/* Global Navigation */}
      <Navbar />

      {/* ────────────────────────────────────────────────────────────
          SECTION 1: HERO
          ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#EEF4FF] via-[#F7FAFE] to-white">
        {/* Soft atmospheric gradient glow backgrounds */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/3" />
        <div className="absolute top-24 right-0 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start order-2 lg:order-1">
              {/* Eyebrow Pill */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mb-4"
              >
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider text-primary bg-blue-50/90 border border-blue-200/80 shadow-xs uppercase">
                  <span>MOBILE APP DEVELOPMENT</span>
                  <ArrowRight size={13} className="text-blue-500" />
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[48px] xl:text-[52px] text-[#0A1435] leading-[1.12] tracking-tight mb-4"
              >
                Mobile Experiences That <span className="text-primary">  Move Business Forward</span>
                
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="text-slate-600 text-base sm:text-[17px] leading-relaxed max-w-xl mb-6"
              >
                We design and develop secure, intuitive and high-performance mobile applications for iOS, Android and cross-platform, helping you engage users, streamline operations and unlock new growth opportunities.
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
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#0A1A3F] hover:bg-[#071330] text-white text-[14px] font-semibold transition-all shadow-md shadow-blue-950/20 hover:shadow-lg hover:-translate-y-0.5 group w-full sm:w-auto"
                >
                  Discuss Your App
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <a
                  href="#mobile-services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-[14px] font-semibold transition-all border border-slate-200/90 shadow-xs hover:border-slate-300 w-full sm:w-auto"
                >
                  Explore Capabilities
                </a>
              </motion.div>

              {/* 4 Value Badges */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-5 pt-4 border-t border-slate-200/60 w-full"
              >
                {[
                  { icon: Smartphone, label: "iOS & Android Apps" },
                  { icon: Sparkles, label: "UX-First Design" },
                  { icon: ShieldCheck, label: "Secure by Design" },
                  { icon: TrendingUp, label: "Built to Scale" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0">
                      <item.icon size={14} strokeWidth={2.2} />
                    </div>
                    <span className="text-[12px] font-semibold text-slate-800 leading-tight">
                      {item.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Graphic: Mobile Header Showcase */}
            <div className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center lg:justify-end order-1 lg:order-2 mb-3 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="relative w-full shrink-0 flex items-center justify-center lg:justify-end"
              >
                <div className="w-full flex items-center justify-center my-2 sm:my-0">
                  <img
                    src={mobileHeaderImg}
                    alt="Mobile App Development - iOS, Android & Cross-Platform Applications"
                    className="w-full h-auto max-h-[480px] sm:max-h-[520px] lg:max-h-[500px] xl:max-h-[540px] object-contain drop-shadow-[0_25px_50px_rgba(37,99,235,0.18)] scale-100 lg:scale-[0.92] xl:scale-[0.96] origin-center lg:origin-right"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* ────────────────────────────────────────────────────────────
          SECTION 4: MOBILE APP DEVELOPMENT SERVICES (5 Cards)
          ──────────────────────────────────────────────────────────── */}
      <section id="mobile-services" className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 mb-2">
                <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                  OUR SERVICES
                </span>
                <ArrowRight size={13} className="text-blue-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#0A1435] tracking-tight leading-tight mb-2">
                Mobile App Development Services
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                End-to-end mobile app development services tailored to your business goals, from strategy and design to development, deployment and maintenance.
              </p>
            </div>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-blue-700"
            >
              View All Services
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* 5 Service Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {mobileServices.map((service, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-slate-800 mb-4 group-hover:scale-105 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-[15px] font-bold text-[#0A1435] leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {service.badge}
                  </span>
                  <button
                    onClick={openConsultationModal}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:text-blue-700"
                  >
                    Learn More
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* ────────────────────────────────────────────────────────────
          SECTION 6: TECHNOLOGY STACK (COMPACT, OFFICIAL FAVICONS)
          ──────────────────────────────────────────────────────────── */}
      <TechnologyStackSection
        badgeText="TECHNOLOGY STACK"
        title="We use modern and reliable technologies to build scalable and high-performing mobile apps."
        subtitle="End-to-end multi-platform development across mobile, web, backend, cloud, and AI."
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
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1435] tracking-tight leading-tight mb-2">
                Designed for Every Screen and Industry
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Real solutions. Real impact. Explore how we help businesses across industries with innovative mobile experiences.
              </p>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A1A3F] hover:bg-[#071330] text-white text-[12px] font-semibold transition-all shadow-md group"
              >
                View All Case Studies
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-5">
              {mobileCaseStudies.map((cs, idx) => (
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
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded text-[9px] font-bold text-primary bg-blue-50 mb-2">
                        {cs.tag}
                      </span>
                      <h3 className="text-[13px] font-bold text-slate-900 leading-snug mb-2 group-hover:text-primary transition-colors">
                        {cs.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                        {cs.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>

        </div>
      </section> */}

      {/* ────────────────────────────────────────────────────────────
          SECTION 8: WHY TEAMS CHOOSE CYBAEM TECH FOR MOBILE APPS
          ──────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Left Column (Sticky Title & CTA) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 min-w-0">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#0A1435] tracking-tight leading-[1.15] mb-4">
                Why Teams Choose Cybaem Tech for Mobile Apps
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
                We combine technical expertise with a deep understanding of business needs to build mobile apps that deliver long-term value.
              </p>

              <div className="flex items-center justify-between sm:justify-start gap-4">
                <button
                  onClick={openConsultationModal}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A1A3F] hover:bg-[#071330] text-white text-[13px] font-semibold transition-all shadow-md shadow-blue-950/20 group"
                >
                  Work With Us
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>

                {/* Mobile Slider Controls */}
                <div className="flex sm:hidden items-center gap-2">
                  <button
                    onClick={() => scrollWhy("left")}
                    disabled={!whyCanScrollLeft}
                    aria-label="Previous card"
                    className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                      whyCanScrollLeft
                        ? "border-slate-300 text-slate-700 hover:bg-slate-100"
                        : "border-slate-200 text-slate-300 cursor-not-allowed opacity-50"
                    }`}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => scrollWhy("right")}
                    disabled={!whyCanScrollRight}
                    aria-label="Next card"
                    className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                      whyCanScrollRight
                        ? "border-slate-300 text-slate-700 hover:bg-slate-100"
                        : "border-slate-200 text-slate-300 cursor-not-allowed opacity-50"
                    }`}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column (Slider on mobile, 2x3 Grid on desktop) */}
            <div className="lg:col-span-7 min-w-0 w-full">
              <div
                ref={whySliderRef}
                className="flex sm:grid sm:grid-cols-2 gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 pt-1 -mx-6 px-6 sm:mx-0 sm:px-0"
              >
                {whyChooseMobile.map((feat, idx) => (
                  <div
                    key={idx}
                    className="shrink-0 w-[275px] xs:w-[300px] sm:w-auto snap-start p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 group flex flex-col"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
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

              {/* Mobile pagination dots */}
              <div className="flex sm:hidden justify-center items-center gap-1.5 mt-3">
                {whyChooseMobile.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => {
                      if (!whySliderRef.current) return;
                      const cards = whySliderRef.current.children;
                      if (cards[dotIdx]) {
                        (cards[dotIdx] as HTMLElement).scrollIntoView({
                          behavior: "smooth",
                          inline: "start",
                          block: "nearest",
                        });
                      }
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeWhyIdx === dotIdx ? "w-6 bg-primary" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 9: WHAT OUR CLIENTS SAY (Testimonials)
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
                A Trusted Partner in Mobile Innovation
              </h2>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev - 1 + mobileTestimonials.length) % mobileTestimonials.length)
                  }
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full border border-slate-200 hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev + 1) % mobileTestimonials.length)
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
                    "{mobileTestimonials[activeTestimonial].quote}"
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-3 pt-5 border-t border-slate-200/80">
                    <div className="flex items-center gap-3">
                      <img
                        src={mobileTestimonials[activeTestimonial].avatar}
                        alt={mobileTestimonials[activeTestimonial].name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <div>
                        <h4 className="text-[13px] font-bold text-slate-900 leading-tight">
                          {mobileTestimonials[activeTestimonial].name}
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-tight">
                          {mobileTestimonials[activeTestimonial].role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(mobileTestimonials[activeTestimonial].rating)].map((_, i) => (
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
          SECTION 10: FREQUENTLY ASKED QUESTIONS
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
              Questions About Mobile App Development?
            </h2>
          </div>

          {/* 2-Column FAQ Accordion Grid */}
          <div className="grid md:grid-cols-2 gap-4 items-start">
            {mobileFaqData.map((faq, idx) => {
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
          SECTION 11: HAVE AN APP IDEA WORTH BUILDING? (Final CTA)
          ──────────────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">

          <div className="relative rounded-[2.5rem] bg-[#020B24] overflow-hidden p-8 sm:p-10 lg:p-14 text-white shadow-2xl border border-slate-800">

            {/* Background Digital Horizon Image with Ambient Glow */}
            <div className="absolute inset-0 z-0">
              <img
                src={enterpriseCtaBg}
                alt="Mobile Future"
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
                  Have an App Idea Worth Building?
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                  Talk with our experts and turn your idea into a powerful mobile experience that drives real business results.
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
                    View Our Work
                  </Link>
                </div>
              </div>

              {/* Right Perks Glass Card */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-sm rounded-3xl bg-slate-900/80 backdrop-blur-md p-5 border border-slate-800 shadow-2xl space-y-3">

                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-white leading-tight">
                        Product Strategy
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Turn ideas into viable products
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={openConsultationModal}
                    className="w-full flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                        <Compass size={18} />
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-white leading-tight">
                          Transparent Roadmap
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Clear timelines and milestones
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={15} className="text-slate-400 group-hover:text-white transition-colors" />
                  </button>

                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Headphones size={18} />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-white leading-tight">
                        Long-term Support
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Ongoing partnership for growth
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
                  <span className="text-sm font-bold text-white">Live Mobile Platform Demo</span>
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

export default MobileApp;
