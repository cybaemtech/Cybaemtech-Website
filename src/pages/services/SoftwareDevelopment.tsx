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
  HeartPulse,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { softwareDevelopmentSeoData } from "@/data/seo/softwareDevelopmentSeo";
import { useConsultationModal } from "@/context/ConsultationModalContext";

// Visual assets from Software & Platforms
import heroImg from "@/assets/services/Software & Platforms/hero-bg.png";
import enterpriseSwImg from "@/assets/services/Software & Platforms/enterprices-sw-development.png";
import mobileAppDevImg from "@/assets/services/Software & Platforms/Mobile-app-dev.png";
import customWebSystemImg from "@/assets/services/Software & Platforms/custom-web-system.png";
import retailMngPlatformImg from "@/assets/services/Software & Platforms/retail-mng-platform.png";
import onDemandServiceAppImg from "@/assets/services/Software & Platforms/on-demand-service-app.png";
import customBusinessPortalImg from "@/assets/services/Software & Platforms/custom-bisiness-portal.png";
import ctaBgImg from "@/assets/services/Software & Platforms/CTA-bg.png";

/* ────────────────────────────────────────────────────────────
   TECHNOLOGY STACK DATA (Authentic SVG Logos)
   ──────────────────────────────────────────────────────────── */
interface TechItem {
  name: string;
  category: string;
  svg: React.ReactNode;
}

const allTechItems: TechItem[] = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    svg: (
      <svg viewBox="0 0 115 100" className="w-9 h-9">
        <ellipse cx="57.5" cy="50" rx="9" ry="9" fill="#00D8FF" />
        <g stroke="#00D8FF" strokeWidth="4.5" fill="none">
          <ellipse cx="57.5" cy="50" rx="52" ry="20" />
          <ellipse cx="57.5" cy="50" rx="52" ry="20" transform="rotate(60 57.5 50)" />
          <ellipse cx="57.5" cy="50" rx="52" ry="20" transform="rotate(120 57.5 50)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Angular",
    category: "Frontend",
    svg: (
      <svg viewBox="0 0 250 250" className="w-9 h-9">
        <polygon fill="#DD0031" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" />
        <polygon fill="#C3002F" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2" />
        <polygon fill="#FFFFFF" points="125,52.1 66,183.8 88.5,183.8 100.8,153.4 149.2,153.4 161.5,183.8 184,183.8" />
        <polygon fill="#DD0031" points="125,94.5 110.4,130.4 139.6,130.4" />
      </svg>
    ),
  },
  {
    name: "Vue.js",
    category: "Frontend",
    svg: (
      <svg viewBox="0 0 261 226" className="w-9 h-9">
        <path fill="#42b883" d="M161 0H214L130.5 144.5L47 0H100L130.5 53z" />
        <path fill="#35495e" d="M100 0H47L130.5 144.5L214 0H161L130.5 53z" />
        <path fill="#42b883" d="M0 0l130.5 226L261 0h-47L130.5 144.5L47 0z" />
        <path fill="#35495e" d="M47 0l83.5 144.5L214 0h-37L130.5 81L84 0z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "Frontend",
    svg: (
      <svg viewBox="0 0 180 180" className="w-9 h-9">
        <circle cx="90" cy="90" r="90" fill="#000" />
        <path fill="#fff" d="M149.5 146.5L72.2 46.5H54.5v87h15V66.2l67.8 87.8c4.2-2.3 8.3-4.8 12.2-7.5z" />
        <rect x="110.5" y="46.5" width="15" height="87" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "HTML",
    category: "Frontend",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <path fill="#E44D26" d="M19 116L9 4h110l-10 112-45 12z" />
        <path fill="#F16529" d="M64 117l36-10 8-94H64z" />
        <path fill="#EBEBEB" d="M64 53H46l-1-15h19V24H30l4 43h30zm0 37l-15-4-1-11H34l2 24 28 8z" />
        <path fill="#FFF" d="M64 53h18l-2 20-16 4v14l28-8 3-45H64zm0-29v14h32l1-14z" />
      </svg>
    ),
  },
  {
    name: "CSS",
    category: "Frontend",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <path fill="#1572B6" d="M19 116L9 4h110l-10 112-45 12z" />
        <path fill="#33A9DC" d="M64 117l36-10 8-94H64z" />
        <path fill="#EBEBEB" d="M64 53H47l-1-14h18V24H31l3 43h30zm0 37l-15-4-1-11H34l2 24 28 8z" />
        <path fill="#FFF" d="M64 53h18l-2 20-16 4v14l28-8 3-45H64zm0-29v14h32l1-14z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    category: "Frontend",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <rect width="128" height="128" rx="16" fill="#F7DF1E" />
        <path fill="#000" d="M34 100c4 3 9 5 15 5 11 0 17-6 17-17V46H52v42c0 5-2 8-7 8-3 0-6-1-8-3l-3 7zm58-1c4 2 8 4 13 4 8 0 12-4 12-9 0-6-4-8-12-12-13-5-19-10-19-20 0-10 8-18 20-18 6 0 11 1 15 4l-4 9c-3-2-7-3-11-3-6 0-9 3-9 7 0 5 4 7 11 10 14 6 20 11 20 21 0 12-9 20-23 20-7 0-13-2-17-4l5-9z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Frontend",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <rect width="128" height="128" rx="16" fill="#3178C6" />
        <path fill="#FFF" d="M60.5 50.2H46.4V98H35.8V50.2H21.7v-9h38.8v9zm19.8 48.6c-7.3 0-13.1-2.2-17.5-6.6-4.3-4.4-6.5-10.4-6.5-17.9v-2.2h10.4v2c0 4.8 1.3 8.6 3.9 11.4 2.6 2.8 6.1 4.2 10.5 4.2 3.8 0 6.9-1.1 9.2-3.2 2.3-2.1 3.5-4.9 3.5-8.3 0-2.8-.9-5.1-2.8-6.9-1.8-1.8-5-3.3-9.5-4.5l-6.1-1.6c-7.1-1.8-12.2-4.4-15.4-7.8-3.1-3.4-4.7-7.9-4.7-13.4 0-6.6 2.2-12 6.6-16.1 4.4-4.2 10.3-6.2 17.6-6.2 7.1 0 12.7 2 16.9 6.1 4.2 4.1 6.3 9.7 6.3 16.8v2.3H87.9v-2.2c0-4.3-1.2-7.7-3.6-10.1-2.4-2.4-5.6-3.6-9.6-3.6-3.5 0-6.4 1-8.5 3-2.1 2-3.2 4.6-3.2 7.9 0 2.5.9 4.6 2.6 6.2 1.7 1.6 4.7 2.9 8.9 4.1l6.1 1.6c7.5 1.9 12.8 4.6 16.1 8.2 3.2 3.6 4.9 8.2 4.9 14 0 6.8-2.2 12.2-6.7 16.4-4.5 4.1-10.4 6.2-17.7 6.2z" />
      </svg>
    ),
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <path fill="#539E43" d="M64 4.5l54.8 31.6v63.3L64 123.5 9.2 99.4V36.1L64 4.5z" />
        <path fill="#FFF" d="M64 36c-13.2 0-21.7 7.5-21.7 19.3 0 12.2 8.7 18.2 20.2 20.3l5.5 1c7.2 1.3 10.8 3.5 10.8 7.5 0 4.5-4 7.6-10.4 7.6-6.8 0-11.4-3.3-12-8.8h-9.2c.7 10.6 8.7 16.8 21.3 16.8 13.5 0 22.3-7.5 22.3-19.1 0-12.7-8.9-18.7-20.7-20.9l-5.4-1c-6.8-1.2-10.2-3.4-10.2-7 0-4.4 3.7-7.4 9.6-7.4 5.9 0 9.8 2.8 10.6 7.5h8.9c-.8-9.4-7.9-15.8-19.6-15.8z" />
      </svg>
    ),
  },
  {
    name: "Python",
    category: "Backend",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <path fill="#3776AB" d="M63.5 8c-26 0-24.3 11.3-24.3 11.3l.1 11.7h24.7v3.5H30.4S15.6 32.8 15.6 59c0 26.2 13 25.4 13 25.4h7.8V72.9s-.4-13.5 13.3-13.5h22.8s12.8.2 12.8-12.6V20.7S87 8 63.5 8zm-13.2 7.3c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z" />
        <path fill="#FFD43B" d="M64.5 120c26 0 24.3-11.3 24.3-11.3l-.1-11.7H64v-3.5h33.6s14.8 1.7 14.8-24.5c0-26.2-13-25.4-13-25.4h-7.8v11.5s.4 13.5-13.3 13.5H55.5s-12.8-.2-12.8 12.6v26.1s-1.8 12.7 21.8 12.7zm13.2-7.3c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z" />
      </svg>
    ),
  },
  {
    name: "Java",
    category: "Backend",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <path fill="#5382A1" d="M46.7 93.8c7.4 1.8 16.4 2.1 23.4.3 0 0-4.2 2.3-11.2 2.7-7 .4-12.2-3-12.2-3zM42.4 83.2c12.2 2.2 28.5 2.5 39.8-.7 0 0-3.3 1.9-8.7 2.5-9.8 1-22.3-.3-31.1-1.8z" />
        <path fill="#E76F00" d="M65.4 46.2c4.7 5.5-1.3 10.9-1.3 10.9s11.8-6.1 6.4-14c-5.5-8-9.6-11.9 13.3-25.1 0 0-27.7 7.5-18.4 28.2zm19.8 28.2c6.1-4.9 3.2-9.6 3.2-9.6s.8 2.2-1.9 4.3c-7.3 5.7-18.2 5.5-25.4 5.3-14.4-.4-22.9-4.2-22.9-4.2s3.6 2.2 12.6 3.8c12.7 2.3 27.6 1.7 34.4-.4z" />
        <path fill="#5382A1" d="M78.6 63.8c12.2-14.2-6.5-20.9-6.5-20.9s4.8 5-2.2 12.5c-8.9 9.5-1.5 14.6 8.7 8.4zM36.1 104.8c15.7 1 32.5.6 47.9-1.7 0 0-3.8 2.2-11.5 2.8-14.2 1.1-28.7.4-36.4-1.1z" />
      </svg>
    ),
  },
  {
    name: ".NET",
    category: "Backend",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <circle cx="64" cy="64" r="58" fill="#512BD4" />
        <circle cx="28" cy="74" r="6" fill="#FFF" />
        <path fill="#FFF" d="M42 44h10.5l14 26.5V44H77v40H66.5L52.5 57.5V84H42V44zm40 0h19.5v8H89v8h11v8H89v8h13.5v8H82V44z" />
      </svg>
    ),
  },
  {
    name: "PHP",
    category: "Backend",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <ellipse cx="64" cy="64" rx="60" ry="38" fill="#777BB4" />
        <ellipse cx="64" cy="64" rx="55" ry="33" fill="#4F5B93" />
        <text x="64" y="74" fill="#FFF" fontFamily="Arial, sans-serif" fontWeight="900" fontStyle="italic" fontSize="32" textAnchor="middle">
          php
        </text>
      </svg>
    ),
  },
  {
    name: "AWS",
    category: "Cloud & DevOps",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
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
    name: "Azure",
    category: "Cloud & DevOps",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <path fill="#0089D6" d="M22 98l32-68h24L46 98H22z" />
        <path fill="#0072C6" d="M54 30h28l24 68H78L54 30z" />
        <path fill="#1490DF" d="M62 76h44l-8 22H54l8-22z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    category: "Cloud & DevOps",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <path fill="#2496ED" d="M118 64c-2-1-6-1-8 0-1-3-4-5-8-5-6 0-10 4-12 9-5-3-11-5-18-5H18c-3 0-5 2-5 5v3c0 14 7 27 18 36 10 8 22 13 36 13 38 0 54-25 54-46 6-2 10-6 12-11-2-2-3-3-5-4zM42 46h10v10H42V46zm14 0h10v10H56V46zm14 0h10v10H70V46zm-28 14h10v10H42V60zm14 0h10v10H56V60zm14 0h10v10H70V60zm14 0h10v10H84V60zm-42 14h10v10H42V74zm14 0h10v10H56V74zm14 0h10v10H70V74zm14 0h10v10H84V74z" />
      </svg>
    ),
  },

  // Mobile
  {
    name: "React Native",
    category: "Mobile",
    svg: (
      <svg viewBox="0 0 115 100" className="w-9 h-9">
        <ellipse cx="57.5" cy="50" rx="9" ry="9" fill="#00D8FF" />
        <g stroke="#00D8FF" strokeWidth="4.5" fill="none">
          <ellipse cx="57.5" cy="50" rx="52" ry="20" />
          <ellipse cx="57.5" cy="50" rx="52" ry="20" transform="rotate(60 57.5 50)" />
          <ellipse cx="57.5" cy="50" rx="52" ry="20" transform="rotate(120 57.5 50)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Flutter",
    category: "Mobile",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <path fill="#42A5F5" d="M74 16L32 58l18 18L92 16H74z" />
        <path fill="#1E88E5" d="M74 84l-18-18 18-18h18L64 76l28 28H74z" />
        <path fill="#0D47A1" d="M56 66l18 18-18 18H38l18-18-18-18h18z" />
      </svg>
    ),
  },
  {
    name: "Swift (iOS)",
    category: "Mobile",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <rect width="128" height="128" rx="28" fill="#F05138" />
        <path fill="#FFF" d="M96 74c-4 5-11 11-19 14-8 4-18 6-27 4-1 0-1-1 0-1 9-5 16-12 18-20 0-1-1-1-1 0-7 6-16 10-25 11-9 1-17-1-24-6-1-1 0-1 1-1 7 2 15 2 22 0 8-2 15-7 20-13 1-1 0-2-1-2-10 4-21 4-31 0-6-2-12-6-16-11-1-1 0-1 1-1 8 4 17 6 26 5 10-1 19-5 27-11 1-1 0-2-1-2-6 2-12 3-18 3-7 0-14-2-20-6-1-1 0-1 1-1 9 2 18 1 27-2 10-4 19-11 25-20 0-1 1-1 1 0 2 11 8 21 16 28 8 7 17 12 28 14 1 0 1 1 0 2-8 3-16 8-22 14-1 1 0 2 1 1z" />
      </svg>
    ),
  },
  {
    name: "Kotlin (Android)",
    category: "Mobile",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <polygon fill="#7F52FF" points="16,16 68,16 16,68" />
        <polygon fill="#C711E1" points="68,16 112,16 64,64" />
        <polygon fill="#E4485D" points="16,68 64,64 16,112" />
        <polygon fill="#F88909" points="64,64 112,16 112,68 64,112" />
      </svg>
    ),
  },

  // Database
  {
    name: "PostgreSQL",
    category: "Database",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <path fill="#336791" d="M64 12c-28.7 0-52 23.3-52 52 0 17.5 8.7 33 22.1 42.4 1.8-5.3 4.2-11.4 6.8-17.2-4.1-3.6-7-8.6-8.2-14.4-1.6-7.8.4-16.1 5.4-22.3 6.8-8.4 17.5-12.8 28.2-11.8 11.2 1 21.2 7.7 26.5 17.5 4.3 8 4.7 17.6 1.1 25.9-2.8 6.5-7.8 11.7-14.1 14.8 2.6 5.8 5 11.9 6.8 17.2 13.4-9.4 22.1-24.9 22.1-42.4 0-28.7-23.3-52-52.7-41.7z" />
        <path fill="#FFF" d="M52 56c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm20 0c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    category: "Database",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <path fill="#47A248" d="M64 8c-3 10-14 26-20 40-7 16-8 34 0 50 6 12 18 20 20 22 2-2 14-10 20-22 8-16 7-34 0-50-6-14-17-30-20-40z" />
        <path fill="#3FA037" d="M64 8v112c2-2 14-10 20-22 8-16 7-34 0-50-6-14-17-30-20-40z" />
        <path fill="#FFF" opacity="0.6" d="M64 24v84c-1 0-8-6-11-14-5-12-4-25 0-37 3-11 9-23 11-33z" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    category: "Database",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <path fill="#00758F" d="M64 16C37.5 16 16 37.5 16 64s21.5 48 48 48 48-21.5 48-48S90.5 16 64 16zm0 18c18 0 32.8 13.5 35.4 31.1-7.8-8-19.1-13.1-31.4-13.1-13.2 0-25.1 5.9-33.1 15C36.8 48.7 49.1 34 64 34z" />
        <path fill="#F29111" d="M82 64c0 9.9-8.1 18-18 18s-18-8.1-18-18 8.1-18 18-18c5 0 9.5 2 12.7 5.3L71 55c-1.8-1.8-4.3-3-7-3-5.5 0-10 4.5-10 10s4.5 10 10 10c4.8 0 8.8-3.4 9.8-8H64v-6h18z" />
      </svg>
    ),
  },
  {
    name: "Redis",
    category: "Database",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <rect width="128" height="128" rx="20" fill="#DC382D" />
        <path fill="#FFF" d="M30 48l34-18 34 18-34 18-34-18zm0 24l34 18v22l-34-18V72zm44 22v-22l24-12v22l-24 12z" />
      </svg>
    ),
  },

  // UI/UX & Design
  {
    name: "Figma",
    category: "UI/UX & Design",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <path fill="#F24E1E" d="M42 20h22v22H42z" />
        <circle cx="75" cy="31" r="11" fill="#FF7262" />
        <path fill="#A259FF" d="M42 42h22v22H42z" />
        <circle cx="75" cy="53" r="11" fill="#1ABCFE" />
        <path fill="#0ACF83" d="M42 64h22v22H42z" />
        <circle cx="53" cy="97" r="11" fill="#0ACF83" />
      </svg>
    ),
  },
  {
    name: "Adobe XD",
    category: "UI/UX & Design",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <rect width="128" height="128" rx="28" fill="#470137" />
        <path fill="#FF61F6" d="M36 42h16c14 0 22 8 22 22s-8 22-22 22H36V42zm14 33h2c7 0 11-4 11-11s-4-11-11-11h-2v22zm34-33h13l11 20 11-20h13l-18 29 19 31H105l-12-22-12 22H68l19-31-17-29z" />
      </svg>
    ),
  },

  // AI & Integration
  {
    name: "OpenAI",
    category: "AI & Integration",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <circle cx="64" cy="64" r="56" fill="#10A37F" />
        <path fill="#FFF" d="M64 32a18 18 0 0 0-16 10l5 3a12 12 0 0 1 11-7c5 0 9 3 11 7l5-3a18 18 0 0 0-16-10zm26 21a18 18 0 0 0-10-15l-3 5a12 12 0 0 1 7 11c0 5-3 9-7 11l3 5a18 18 0 0 0 10-17zm-10 32a18 18 0 0 0 10-16l-5-3a12 12 0 0 1-7 11 12 12 0 0 1-11-7l-3 5a18 18 0 0 0 16 10zm-32 0a18 18 0 0 0 16-10l-3-5a12 12 0 0 1-11 7 12 12 0 0 1-7-11l-5 3a18 18 0 0 0 10 16zm-10-32a18 18 0 0 0 10 16l3-5a12 12 0 0 1-7-11c0-5 3-9 7-11l-3-5a18 18 0 0 0-10 16zm10-16a18 18 0 0 0-10 16l5 3a12 12 0 0 1 7-11 12 12 0 0 1 11 7l3-5a18 18 0 0 0-16-10z" />
      </svg>
    ),
  },
  {
    name: "GraphQL",
    category: "AI & Integration",
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9">
        <polygon fill="#E10098" points="64,14 107,39 107,89 64,114 21,89 21,39" stroke="#E10098" strokeWidth="6" fillOpacity="0.1" />
        <circle cx="64" cy="14" r="10" fill="#E10098" />
        <circle cx="107" cy="39" r="10" fill="#E10098" />
        <circle cx="107" cy="89" r="10" fill="#E10098" />
        <circle cx="64" cy="114" r="10" fill="#E10098" />
        <circle cx="21" cy="89" r="10" fill="#E10098" />
        <circle cx="21" cy="39" r="10" fill="#E10098" />
      </svg>
    ),
  },
];

const techCategories = [
  "Frontend",
  "Backend",
  "Mobile",
  "Cloud & DevOps",
  "Database",
  "UI/UX & Design",
  "AI & Integration",
];

/* ────────────────────────────────────────────────────────────
   CASE STUDIES DATA
   ──────────────────────────────────────────────────────────── */
const caseStudies = [
  {
    id: 1,
    tag: "Enterprise",
    title: "Retail Management Platform",
    desc: "A unified platform to manage inventory, sales and operations across multiple locations.",
    image: retailMngPlatformImg,
    metrics: [
      { value: "840%", label: "Operations Efficiency" },
      { value: "99.9%", label: "System Uptime" },
    ],
  },
  {
    id: 2,
    tag: "Mobile App",
    title: "On-Demand Service App",
    desc: "A cross-platform app connecting customers with service providers in real-time.",
    image: onDemandServiceAppImg,
    metrics: [
      { value: "200K+", label: "App Downloads" },
      { value: "4.8 ★", label: "User Rating" },
    ],
  },
  {
    id: 3,
    tag: "Web Application",
    title: "Custom Business Portal",
    desc: "A secure web portal for client management, reporting and collaboration.",
    image: customBusinessPortalImg,
    metrics: [
      { value: "60%", label: "Faster Reporting" },
      { value: "100%", label: "Client Satisfaction" },
    ],
  },
];

/* ────────────────────────────────────────────────────────────
   TESTIMONIALS DATA
   ──────────────────────────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "Cybaem Tech delivered a robust enterprise solution that streamlined our operations and significantly improved our efficiency. Their team is professional, responsive, and highly skilled.",
    name: "Rohit Sharma",
    role: "CTO, TechNexus Solutions",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "The engineering capability and architecture depth at Cybaem Tech exceeded all our expectations. Our mobile and cloud platforms now scale smoothly with zero downtime.",
    name: "Sneha Patil",
    role: "VP Engineering, CloudScale India",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "From product strategy to release deployment, Cybaem Tech demonstrated unmatched dedication. They solved critical bottlenecks and delivered ahead of schedule.",
    name: "Vikram Malhotra",
    role: "Head of Digital, Omnichannel Retail",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80",
  },
];

/* ────────────────────────────────────────────────────────────
   MAIN PAGE COMPONENT
   ──────────────────────────────────────────────────────────── */
const SoftwareDevelopment = () => {
  const { openConsultationModal } = useConsultationModal();

  // Technology tab state
  const [activeCategory, setActiveCategory] = useState("Frontend");

  // Filter items: show default 16 featured when Frontend is selected, or items of chosen category
  const displayedTech =
    activeCategory === "Frontend"
      ? allTechItems.slice(0, 16)
      : allTechItems.filter((item) => item.category === activeCategory);

  // Testimonials state
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const currentTestimonial = testimonials[activeTestimonialIdx];

  // Case studies state
  const [caseStudyPage, setCaseStudyPage] = useState(0);

  // FAQ Accordion state
  const [openFaqs, setOpenFaqs] = useState<{ [key: string]: boolean }>({
    "left-0": true,
  });

  const toggleFaq = (key: string) => {
    setOpenFaqs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const faqsLeft = [
    {
      q: "How long does it take to develop a custom software solution?",
      a: "Typical development timelines range from 6 to 16 weeks depending on product scope, technical complexity, third-party integrations, and testing specifications. We operate on agile 2-week sprints with working demos delivered continuously.",
    },
    {
      q: "What technologies do you work with?",
      a: "We engineer solutions across frontend (React, Angular, Vue, Next.js), backend (Node.js, Python, Java, .NET, PHP), mobile (React Native, Flutter, Swift, Kotlin), databases (PostgreSQL, MongoDB, MySQL, Redis), and cloud (AWS, Azure, GCP, Docker, Kubernetes).",
    },
    {
      q: "Will I get ongoing support after launch?",
      a: "Yes. Every custom software project includes structured post-launch warranty, dedicated SLAs, proactive server monitoring, routine security patches, and scalable continuous feature enhancements.",
    },
  ];

  const faqsRight = [
    {
      q: "Can you integrate with our existing systems?",
      a: "Absolutely. We engineer enterprise-grade REST and GraphQL APIs, webhooks, and secure middleware connectors to interface seamlessly with your existing ERPs (SAP, Oracle), CRMs, legacy databases, and SaaS tools without operational downtime.",
    },
    {
      q: "How do you ensure data security?",
      a: "Security is engineered into every stage of development. We enforce ISO 27001 & ISO 27017 standards, end-to-end AES-256 encryption at rest and in transit, strict RBAC permissions, and continuous automated vulnerability scanning.",
    },
    {
      q: "Can the solution be scaled as our business grows?",
      a: "Yes. All applications are built with modular, cloud-native microservices or clean modular monolith architectures designed for elastic horizontal auto-scaling, supporting millions of transactions smoothly.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0A1435] selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      {/* SEO Metadata */}
      <SEOHead
        title={softwareDevelopmentSeoData.title}
        description={softwareDevelopmentSeoData.description}
        canonical={softwareDevelopmentSeoData.canonical}
        keywords={softwareDevelopmentSeoData.keywords}
        ogTitle={softwareDevelopmentSeoData.ogTitle}
        ogDescription={softwareDevelopmentSeoData.ogDescription}
        twitterTitle={softwareDevelopmentSeoData.twitterTitle}
        twitterDescription={softwareDevelopmentSeoData.twitterDescription}
        jsonLd={softwareDevelopmentSeoData.jsonLd}
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
            <Link to="/software-platforms" className="hover:text-primary transition-colors">
              Our Solutions
            </Link>
            <ChevronRight size={13} className="text-slate-400" />
            <span className="text-primary font-semibold">Software & Platforms</span>
          </nav>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────
          SECTION 1: HERO
          ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-8 pb-14 lg:pt-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#F4F8FD] via-[#F8FAFD] to-white">
        {/* Soft atmospheric gradient accents */}
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
                  <span>SOFTWARE & PLATFORMS</span>
                  <ChevronRight size={13} className="text-primary" />
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[52px] xl:text-[56px] text-[#0A1435] leading-[1.12] tracking-tight mb-4"
              >
                Build Software <br />
                That Drives Your <br />
                <span className="text-primary">Business Forward</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="text-slate-600 text-base sm:text-[17px] leading-relaxed max-w-xl mb-7"
              >
                We design, develop, and modernize custom software solutions that help you work
                smarter, scale faster, and stay ahead in a digital-first world.
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
                  Discuss Your Project
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <a
                  href="#case-studies"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-[14px] font-semibold transition-all border border-slate-200/90 hover:border-slate-300 shadow-xs w-full sm:w-auto cursor-pointer"
                >
                  View Our Work
                  <ArrowRight size={15} className="text-slate-500" />
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
                    <Users size={20} />
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
                    <div className="text-base sm:text-lg font-extrabold text-[#0A1435] leading-tight">98.9%</div>
                    <div className="text-[11px] font-medium text-slate-500">Client Satisfaction</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                    <Headphones size={20} />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-[#0A1435] leading-tight">24/7</div>
                    <div className="text-[11px] font-medium text-slate-500">Support</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-[#0A1435] leading-tight">14+</div>
                    <div className="text-[11px] font-medium text-slate-500">Years of Expertise</div>
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
                    src={heroImg}
                    alt="Cybaem Tech Software & Platforms Engineering"
                    className="w-full h-auto object-cover max-h-[460px] sm:max-h-[520px]"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 2: OUR SOFTWARE DEVELOPMENT SERVICES
          ──────────────────────────────────────────────────────────── */}
      <section id="services" className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 mb-2">
                <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                  OUR SOFTWARE DEVELOPMENT SERVICES
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0A1435] tracking-tight leading-[1.2]">
                Comprehensive Software Development <br className="hidden sm:inline" />
                Solutions for Every <span className="text-primary">Business Need</span>
              </h2>
            </div>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md">
              From enterprise platforms to mobile apps and modern web systems, we deliver end-to-end
              software development services tailored to your goals.
            </p>
          </div>

          {/* 3 Main Services Cards matching reference design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-8">
            {/* Card 1: Enterprise Software */}
            <div className="relative rounded-3xl bg-white border border-slate-200/80 hover:border-primary/60 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between group min-h-[420px]">
              {/* Left Content Column */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  {/* Top Header: Icon + Category + Title */}
                  <div className="flex items-start gap-3.5 mb-3.5">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#eef5fc] text-primary flex items-center justify-center shrink-0 shadow-xs">
                      <Building2 size={24} />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <Link
                        to="/software-platforms/enterprise-software"
                        className="inline-flex items-center gap-1 text-[11px] font-extrabold tracking-wider text-primary uppercase hover:underline"
                      >
                        <span>ENTERPRISE SOFTWARE</span>
                        <ChevronRight size={12} className="stroke-[2.5]" />
                      </Link>
                      <h3 className="font-display font-extrabold text-[19px] sm:text-[21px] text-[#0A1435] leading-tight mt-0.5">
                        Enterprise Software <br />Development
                      </h3>
                    </div>
                  </div>

                  {/* Subtitle / Paragraph */}
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed max-w-[210px] sm:max-w-[230px] mb-4">
                    Scalable, secure, and high-performance enterprise applications to streamline operations and drive growth.
                  </p>

                  {/* 4 Bullets */}
                  <div className="space-y-2 max-w-[220px] sm:max-w-[240px]">
                    <div className="flex items-start gap-2 text-xs sm:text-[12.5px] font-semibold text-slate-800 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check size={10} strokeWidth={3.5} />
                      </div>
                      <span>Custom Enterprise Applications</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-[12.5px] font-semibold text-slate-800 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check size={10} strokeWidth={3.5} />
                      </div>
                      <span>System Integration & Modernization</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-[12.5px] font-semibold text-slate-800 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check size={10} strokeWidth={3.5} />
                      </div>
                      <span>Cloud-Native Solutions</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-[12.5px] font-semibold text-slate-800 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check size={10} strokeWidth={3.5} />
                      </div>
                      <span>Legacy Software Transformation</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row Action */}
                <div className="flex items-center justify-between max-w-[210px] sm:max-w-[230px] mt-6 pt-2">
                  <Link
                    to="/software-platforms/enterprise-software"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-primary hover:text-blue-800 transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/software-platforms/enterprise-software"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#133e7c] group-hover:bg-primary text-white flex items-center justify-center transition-all shadow-xs shrink-0 group-hover:scale-105"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Mockup Graphic */}
              <div className="absolute -right-8 sm:-right-10 bottom-12 sm:bottom-16 lg:bottom-14 xl:bottom-16 w-[235px] sm:w-[255px] lg:w-[250px] xl:w-[270px] pointer-events-none group-hover:scale-105 transition-transform duration-500 origin-bottom-right z-0">
                <img
                  src={enterpriseSwImg}
                  alt="Enterprise Software Development dashboard preview"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Card 2: Mobile App Development */}
            <div className="relative rounded-3xl bg-white border border-slate-200/80 hover:border-primary/60 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between group min-h-[420px]">
              {/* Left Content Column */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  {/* Top Header: Icon + Category + Title */}
                  <div className="flex items-start gap-3.5 mb-3.5">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#f0f2ff] text-[#4f46e5] flex items-center justify-center shrink-0 shadow-xs">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <rect x="9.5" y="8" width="5" height="8" rx="1" />
                      </svg>
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <Link
                        to="/software-platforms/mobile-app-development"
                        className="inline-flex items-center gap-1 text-[11px] font-extrabold tracking-wider text-primary uppercase hover:underline"
                      >
                        <span>MOBILE SOLUTIONS</span>
                        <ChevronRight size={12} className="stroke-[2.5]" />
                      </Link>
                      <h3 className="font-display font-extrabold text-[19px] sm:text-[21px] text-[#0A1435] leading-tight mt-0.5">
                        Mobile App <br />Development
                      </h3>
                    </div>
                  </div>

                  {/* Subtitle / Paragraph */}
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed max-w-[210px] sm:max-w-[230px] mb-4">
                    High-performance, user-centric mobile applications for iOS, Android and cross-platform.
                  </p>

                  {/* 4 Bullets */}
                  <div className="space-y-2 max-w-[220px] sm:max-w-[240px]">
                    <div className="flex items-start gap-2 text-xs sm:text-[12.5px] font-semibold text-slate-800 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check size={10} strokeWidth={3.5} />
                      </div>
                      <span>Native iOS & Android Development</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-[12.5px] font-semibold text-slate-800 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check size={10} strokeWidth={3.5} />
                      </div>
                      <span>Cross-Platform Apps</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-[12.5px] font-semibold text-slate-800 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check size={10} strokeWidth={3.5} />
                      </div>
                      <span>UI/UX for Mobile</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-[12.5px] font-semibold text-slate-800 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check size={10} strokeWidth={3.5} />
                      </div>
                      <span>App Maintenance & Support</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row Action */}
                <div className="flex items-center justify-between max-w-[210px] sm:max-w-[230px] mt-6 pt-2">
                  <Link
                    to="/software-platforms/mobile-app-development"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-primary hover:text-blue-800 transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/software-platforms/mobile-app-development"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#133e7c] group-hover:bg-primary text-white flex items-center justify-center transition-all shadow-xs shrink-0 group-hover:scale-105"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Mockup Graphic */}
              <div className="absolute -right-4 sm:-right-6 bottom-11 sm:bottom-15 lg:bottom-13 xl:bottom-15 w-[210px] sm:w-[230px] lg:w-[225px] xl:w-[240px] pointer-events-none group-hover:scale-105 transition-transform duration-500 origin-bottom-right z-0">
                <img
                  src={mobileAppDevImg}
                  alt="Mobile App screens preview"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Card 3: Custom Web Systems & Application Development */}
            <div className="relative rounded-3xl bg-white border border-slate-200/80 hover:border-primary/60 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between group min-h-[420px]">
              {/* Left Content Column */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  {/* Top Header: Icon + Category + Title */}
                  <div className="flex items-start gap-3.5 mb-3.5">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#eef5fc] text-primary flex items-center justify-center shrink-0 shadow-xs">
                      <Globe size={24} />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <Link
                        to="/software-platforms/web-systems"
                        className="inline-flex items-center gap-1 text-[11px] font-extrabold tracking-wider text-primary uppercase hover:underline"
                      >
                        <span>WEB SOLUTIONS</span>
                        <ChevronRight size={12} className="stroke-[2.5]" />
                      </Link>
                      <h3 className="font-display font-extrabold text-[18px] sm:text-[19.5px] text-[#0A1435] leading-tight mt-0.5">
                        Custom Web Systems <br />& Application Development
                      </h3>
                    </div>
                  </div>

                  {/* Subtitle / Paragraph */}
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed max-w-[210px] sm:max-w-[230px] mb-4">
                    Modern, scalable and secure web applications tailored to your business requirements.
                  </p>

                  {/* 4 Bullets */}
                  <div className="space-y-2 max-w-[220px] sm:max-w-[240px]">
                    <div className="flex items-start gap-2 text-xs sm:text-[12.5px] font-semibold text-slate-800 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check size={10} strokeWidth={3.5} />
                      </div>
                      <span>Web Application Development</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-[12.5px] font-semibold text-slate-800 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check size={10} strokeWidth={3.5} />
                      </div>
                      <span>E-commerce Platforms</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-[12.5px] font-semibold text-slate-800 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check size={10} strokeWidth={3.5} />
                      </div>
                      <span>Progressive Web Apps (PWA)</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-[12.5px] font-semibold text-slate-800 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check size={10} strokeWidth={3.5} />
                      </div>
                      <span>CMS & Portal Development</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row Action */}
                <div className="flex items-center justify-between max-w-[210px] sm:max-w-[230px] mt-6 pt-2">
                  <Link
                    to="/software-platforms/web-systems"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-primary hover:text-blue-800 transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/software-platforms/web-systems"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#133e7c] group-hover:bg-primary text-white flex items-center justify-center transition-all shadow-xs shrink-0 group-hover:scale-105"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Mockup Graphic */}
              <div className="absolute -right-8 sm:-right-10 bottom-12 sm:bottom-16 lg:bottom-14 xl:bottom-16 w-[235px] sm:w-[255px] lg:w-[250px] xl:w-[270px] pointer-events-none group-hover:scale-105 transition-transform duration-500 origin-bottom-right z-0">
                <img
                  src={customWebSystemImg}
                  alt="Custom Web Systems & Application Development platform preview"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Horizontal Highlights Strip */}
          <div className="rounded-2xl bg-[#EEF5FF]/80 border border-blue-100/80 p-4 sm:p-5">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
              <div className="flex items-center justify-center gap-2 p-2">
                <div className="w-7 h-7 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                  <Code2 size={15} />
                </div>
                <span className="text-[12px] font-bold text-slate-800 text-left">
                  End-to-End Development
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 p-2">
                <div className="w-7 h-7 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                  <RefreshCw size={14} />
                </div>
                <span className="text-[12px] font-bold text-slate-800 text-left">
                  Agile & Transparent Process
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 p-2">
                <div className="w-7 h-7 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                  <Cpu size={15} />
                </div>
                <span className="text-[12px] font-bold text-slate-800 text-left">
                  Modern Technology Stack
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 p-2">
                <div className="w-7 h-7 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                  <ShieldCheck size={15} />
                </div>
                <span className="text-[12px] font-bold text-slate-800 text-left">
                  Security & Compliance
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 p-2">
                <div className="w-7 h-7 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                  <Database size={15} />
                </div>
                <span className="text-[12px] font-bold text-slate-800 text-left">
                  Scalable Architecture
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 p-2">
                <div className="w-7 h-7 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                  <Headphones size={15} />
                </div>
                <span className="text-[12px] font-bold text-slate-800 text-left">
                  Ongoing Support & Maintenance
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
                <ChevronRight size={13} className="text-primary" />
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A1435] tracking-tight leading-[1.2] mb-4">
                More Than a Development Partner — We're Your{" "}
                <span className="text-primary">Technology Growth Enabler</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-7 max-w-lg">
                We combine deep technical expertise, industry experience, and a client-first approach
                to build software solutions that create measurable business impact.
              </p>

              <button
                onClick={openConsultationModal}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0A1B39] hover:bg-primary text-white text-[14px] font-semibold transition-all shadow-md shadow-blue-950/20 hover:shadow-lg hover:-translate-y-0.5 group cursor-pointer"
              >
                Talk to Our Experts
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right Benefits Grid (2 cols x 3 rows = 6 items) */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Benefit 1 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,82,204,0.06)] hover:border-blue-200 transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-primary flex items-center justify-center shrink-0">
                    <Target size={20} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0A1435] mb-1">
                      Business-Focused Solutions
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Aligned with your strategic and commercial goals.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,82,204,0.06)] hover:border-blue-200 transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0A1435] mb-1">
                      Experienced Development Team
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      14+ years of hands-on industry expertise across domains.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,82,204,0.06)] hover:border-blue-200 transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0A1435] mb-1">
                      Security & Compliance
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Adhere to global standards like ISO, SOC 2 and GDPR.
                    </p>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,82,204,0.06)] hover:border-blue-200 transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <Sliders size={20} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0A1435] mb-1">
                      Flexible Engagement Models
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Dedicated team, project-based, or fully managed services.
                    </p>
                  </div>
                </div>

                {/* Benefit 5 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,82,204,0.06)] hover:border-blue-200 transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-primary flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0A1435] mb-1">
                      On-Time Delivery
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      With a transparent process and bi-weekly milestone demos.
                    </p>
                  </div>
                </div>

                {/* Benefit 6 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,82,204,0.06)] hover:border-blue-200 transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                    <LifeBuoy size={20} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0A1435] mb-1">
                      Ongoing Support
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Post-launch maintenance and continuous feature enhancements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 4: OUR DEVELOPMENT PROCESS
          ──────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 mb-2">
              <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                OUR DEVELOPMENT PROCESS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A1435] tracking-tight leading-[1.2] mb-3">
              From Idea <span className="text-primary">to Impact</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              A structured and collaborative process to deliver high-quality, scalable and
              future-ready software solutions.
            </p>
          </div>

          {/* 6 Step Horizontal Pipeline */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 relative">
            {/* Step 1: Discover */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:border-cyan-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-600 flex items-center justify-center mb-3">
                  <Search size={18} />
                </div>
                <div className="text-xs font-mono font-bold text-cyan-600 mb-0.5">01</div>
                <h4 className="text-base font-bold text-[#0A1435] mb-1.5">Discover</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Understand goals, requirements and challenges.
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
                  Define strategy, architecture and roadmap.
                </p>
              </div>
            </div>

            {/* Step 3: Design */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:border-emerald-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                  <PenTool size={18} />
                </div>
                <div className="text-xs font-mono font-bold text-emerald-600 mb-0.5">03</div>
                <h4 className="text-base font-bold text-[#0A1435] mb-1.5">Design</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Create intuitive and modern user experiences.
                </p>
              </div>
            </div>

            {/* Step 4: Develop */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:border-amber-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center mb-3">
                  <Code2 size={18} />
                </div>
                <div className="text-xs font-mono font-bold text-amber-600 mb-0.5">04</div>
                <h4 className="text-base font-bold text-[#0A1435] mb-1.5">Develop</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Build, test and iterate with best practices.
                </p>
              </div>
            </div>

            {/* Step 5: Deploy */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:border-rose-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center mb-3">
                  <Rocket size={18} />
                </div>
                <div className="text-xs font-mono font-bold text-rose-600 mb-0.5">05</div>
                <h4 className="text-base font-bold text-[#0A1435] mb-1.5">Deploy</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Launch seamlessly with minimal disruption.
                </p>
              </div>
            </div>

            {/* Step 6: Support */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:border-purple-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center mb-3">
                  <HeartPulse size={18} />
                </div>
                <div className="text-xs font-mono font-bold text-purple-600 mb-0.5">06</div>
                <h4 className="text-base font-bold text-[#0A1435] mb-1.5">Support</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Continuous monitoring and improvement.
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
                Modern Technologies for Modern{" "}
                <span className="text-primary">Business Solutions</span>
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
            {techCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
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
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4"
          >
            {displayedTech.map((tech, idx) => (
              <div
                key={idx}
                className="py-4 px-3 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,82,204,0.06)] hover:border-blue-400 hover:-translate-y-0.5 transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50/80 border border-slate-100 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                  {tech.svg}
                </div>
                <h4 className="text-[12px] font-bold text-slate-800 leading-tight">
                  {tech.name}
                </h4>
              </div>
            ))}
          </motion.div>
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

            <div className="flex items-center gap-3">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-blue-700 transition-colors mr-2"
              >
                View All Case Studies
                <ArrowRight size={13} />
              </Link>
              <button
                onClick={() => setCaseStudyPage((p) => (p === 0 ? 1 : 0))}
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary transition-colors cursor-pointer"
                aria-label="Previous Case Study"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setCaseStudyPage((p) => (p === 0 ? 1 : 0))}
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary transition-colors cursor-pointer"
                aria-label="Next Case Study"
              >
                <ChevronRight size={16} />
              </button>
            </div>
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
          SECTION 7: WHAT OUR CLIENTS SAY (TESTIMONIALS)
          ──────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#F8FAFD] border-t border-slate-100">
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

            {/* Slider buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setActiveTestimonialIdx(
                    (prev) => (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary shadow-xs transition-colors cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() =>
                  setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length)
                }
                className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary shadow-xs transition-colors cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Testimonial Feature Card */}
          <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Quote details */}
              <div className="lg:col-span-9">
                {/* Large double quote mark */}
                <div className="text-blue-500 mb-4 opacity-75">
                  <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                    <path d="M0 18C0 8.059 7.059 1 17 0v7.059c-5.5 0-9.412 3.912-9.412 9.412H17V30H0V18zm23 0C23 8.059 30.059 1 40 0v7.059c-5.5 0-9.412 3.912-9.412 9.412H40V30H23V18z" />
                  </svg>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonialIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-lg sm:text-2xl font-medium text-slate-800 leading-relaxed italic mb-8 max-w-3xl">
                      "{currentTestimonial.quote}"
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <img
                          src={currentTestimonial.avatar}
                          alt={currentTestimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 shadow-xs"
                        />
                        <div>
                          <div className="text-base font-bold text-[#0A1435]">
                            {currentTestimonial.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {currentTestimonial.role}
                          </div>
                        </div>
                      </div>

                      {/* 5 Stars */}
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Avatar Stack switcher */}
              <div className="lg:col-span-3 flex lg:flex-col items-center justify-center gap-3 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-100">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 hidden lg:block">
                  Verified Clients
                </div>
                {testimonials.map((t, idx) => {
                  const isActive = idx === activeTestimonialIdx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonialIdx(idx)}
                      className={`relative rounded-full transition-all cursor-pointer p-0.5 ${isActive
                          ? "ring-2 ring-primary ring-offset-2 scale-110"
                          : "opacity-60 hover:opacity-100"
                        }`}
                      title={t.name}
                    >
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-11 h-11 rounded-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 8: FREQUENTLY ASKED QUESTIONS
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
          SECTION 9: BOTTOM CTA BANNER
          ──────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="rounded-3xl bg-[#07132B] text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl border border-slate-800">
            {/* CTA Background Banner */}
            <img
              src={ctaBgImg}
              alt="CTA Background Pattern"
              className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none opacity-30 lg:opacity-45"
            />
            {/* Glowing gradient background accents */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: Heading & CTAs */}
              <div className="lg:col-span-7">
                <div className="text-[11px] font-extrabold tracking-[0.2em] text-blue-400 uppercase mb-2">
                  READY TO BUILD YOUR SOFTWARE?
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.2] mb-4">
                  Let's Turn Your Ideas into Powerful Solutions.
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                  Partner with Cybaem Tech for innovative, secure and future-ready software
                  development tailored to your exact business objectives.
                </p>

                <div className="flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={openConsultationModal}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0A1B39] hover:bg-blue-50 text-sm font-bold transition-all shadow-md group cursor-pointer"
                  >
                    Book A Free Consultation
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={openConsultationModal}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white text-sm font-semibold transition-all border border-slate-600 cursor-pointer"
                  >
                    Discuss Your Requirements
                  </button>
                </div>
              </div>

              {/* Right Column: 3 Key Pillars */}
              <div className="lg:col-span-5 flex flex-col gap-5 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-800/80 lg:pl-10">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-400 flex items-center justify-center shrink-0">
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">Free Consultation</h4>
                    <p className="text-xs text-slate-400">
                      Discuss your vision with our senior software architects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-400 flex items-center justify-center shrink-0">
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">Tailored Solutions</h4>
                    <p className="text-xs text-slate-400">
                      Built specifically for your unique industry and business workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-400 flex items-center justify-center shrink-0">
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">Transparent Process</h4>
                    <p className="text-xs text-slate-400">
                      Clear communication, regular sprint demos, and milestone deliverables.
                    </p>
                  </div>
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

export default SoftwareDevelopment;
