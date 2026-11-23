import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowDown,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Star,
  Plus,
  Minus,
  Users,
  Headphones,
  Building2,
  TrendingUp,
  BarChart3,
  Target,
  Search,
  Share2,
  Megaphone,
  Sparkles,
  ShoppingCart,
  GraduationCap,
  Factory,
  Heart,
  Briefcase,
  Laptop,
  Globe,
  Award,
  Zap,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { growthRevenueSeoData } from "@/data/seo/growthRevenueSeo";
import { useConsultationModal } from "@/context/ConsultationModalContext";

// Visual assets
import heroGrowthBg from "@/assets/digital-growth-hero-bg.png";
import digitalGrowthHeroImg from "@/assets/digital-growth-hero.png";
import googleAdsImg from "@/assets/performance marketing/google-ads.png";
import seoImg from "@/assets/performance marketing/SEO_AGO.png";
import socialImg from "@/assets/performance marketing/Social-media-mng.png";

/* ────────────────────────────────────────────────────────────
   HERO ANIMATION VARIANTS (Matching CloudSecurity & HeroSection)
   ──────────────────────────────────────────────────────────── */
const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ────────────────────────────────────────────────────────────
   HERO SERVICES STRIP DATA (Growth & Revenue)
   ──────────────────────────────────────────────────────────── */
const heroSlides = [
  {
    id: "performance-marketing",
    label: "Performance Marketing",
    href: "/digital-growth/performance-marketing",
    isInternal: true,
    icon: BarChart3,
  },
  {
    id: "seo-aeo-geo",
    label: "SEO, AEO & GEO",
    href: "/digital-growth/seo-aeo-geo",
    isInternal: true,
    icon: Search,
  },
  {
    id: "social-media-management",
    label: "Social Media Management",
    href: "/digital-growth/social-media-management",
    isInternal: true,
    icon: Share2,
  },
  {
    id: "lead-generation",
    label: "Lead Generation",
    href: "#services",
    isInternal: false,
    icon: Target,
  },
  {
    id: "conversion-optimization",
    label: "Conversion Optimization",
    href: "#services",
    isInternal: false,
    icon: TrendingUp,
  },
  {
    id: "brand-content-strategy",
    label: "Brand & Content Strategy",
    href: "#services",
    isInternal: false,
    icon: Megaphone,
  },
  {
    id: "analytics-insights",
    label: "Analytics & ROI Tracking",
    href: "#services",
    isInternal: false,
    icon: Zap,
  },
];

/* ────────────────────────────────────────────────────────────
   PLATFORMS & TOOLS DATA
   ──────────────────────────────────────────────────────────── */
interface ToolItem {
  name: string;
  category: "Advertising" | "SEO & Search" | "Analytics & Data" | "Content & Social";
  desc: string;
  badge: string;
  logoSvg: React.ReactNode;
}

const marketingTools: ToolItem[] = [
  {
    name: "Google Ads",
    category: "Advertising",
    desc: "Search, Display, Performance Max, and Shopping campaigns for high-intent lead capture.",
    badge: "Official Partner",
    logoSvg: (
      <svg viewBox="0 0 48 48" className="w-9 h-9">
        <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.55 10.78l7.98-6.19z" />
        <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
      </svg>
    ),
  },
  {
    name: "Meta Ads",
    category: "Advertising",
    desc: "Targeted Facebook & Instagram feed, reel, and story ads designed for demand generation.",
    badge: "Certified Experts",
    logoSvg: (
      <svg viewBox="0 0 48 48" className="w-9 h-9">
        <path fill="#0081FB" d="M24 4C13 4 4 13 4 24c0 9.8 7.2 18 16.6 19.7v-14H15.4v-5.7H20.6v-4.3c0-5.1 3-7.9 7.7-7.9 2.2 0 4.6.4 4.6.4v5.1h-2.6c-2.5 0-3.3 1.6-3.3 3.2v3.5h5.8l-.9 5.7h-4.9v14C36.8 42 44 33.8 44 24c0-11-9-20-20-20z" />
      </svg>
    ),
  },
  {
    name: "Google Analytics 4",
    category: "Analytics & Data",
    desc: "Complete event-based user tracking, cross-channel attribution, and funnel conversion analysis.",
    badge: "GA4 Certified",
    logoSvg: (
      <svg viewBox="0 0 48 48" className="w-9 h-9">
        <rect x="8" y="24" width="8" height="16" rx="2" fill="#E37400" />
        <rect x="20" y="14" width="8" height="26" rx="2" fill="#F4B400" />
        <rect x="32" y="8" width="8" height="32" rx="2" fill="#F9AB00" />
      </svg>
    ),
  },
  {
    name: "Google Search Console",
    category: "SEO & Search",
    desc: "Organic indexation health, search queries, click-through rates, and crawl error resolution.",
    badge: "Search Tools",
    logoSvg: (
      <svg viewBox="0 0 48 48" className="w-9 h-9">
        <path fill="#4285F4" d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4z" opacity="0.15" />
        <path fill="#0F9D58" d="M30 18h-12c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z" />
        <path fill="#4285F4" d="M20 28l-4-4 1.4-1.4L20 25.2l6.6-6.6L28 20l-8 8z" />
      </svg>
    ),
  },
  {
    name: "Semrush",
    category: "SEO & Search",
    desc: "Competitor intelligence, backlink audits, keyword gap analysis, and SERP position monitoring.",
    badge: "SEO Suite",
    logoSvg: (
      <svg viewBox="0 0 48 48" className="w-9 h-9">
        <path fill="#FF642D" d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4z" />
        <path fill="#FFF" d="M16 28c0-4.4 3.6-8 8-8s8 3.6 8 8h-4c0-2.2-1.8-4-4-4s-4 1.8-4 4h-4z" />
        <circle cx="24" cy="14" r="3" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "Klaviyo",
    category: "Analytics & Data",
    desc: "Automated e-commerce email sequences, SMS remarketing, and customer lifetime value optimization.",
    badge: "Retention",
    logoSvg: (
      <svg viewBox="0 0 48 48" className="w-9 h-9">
        <rect width="48" height="48" rx="8" fill="#1A1A1A" />
        <path d="M14 14l10 10-10 10V14zm20 0v20L24 24l10-10z" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "Canva Pro",
    category: "Content & Social",
    desc: "Rapid social media asset design, brand style consistency, and high-impact visual banners.",
    badge: "Creative Studio",
    logoSvg: (
      <svg viewBox="0 0 48 48" className="w-9 h-9">
        <circle cx="24" cy="24" r="20" fill="#00C4CC" />
        <text x="24" y="30" fill="#FFF" fontFamily="sans-serif" fontWeight="900" fontSize="18" textAnchor="middle">
          C
        </text>
      </svg>
    ),
  },
  {
    name: "HubSpot",
    category: "Analytics & Data",
    desc: "Inbound lead tracking, pipeline automation, and multi-touch revenue attribution.",
    badge: "CRM Platform",
    logoSvg: (
      <svg viewBox="0 0 48 48" className="w-9 h-9">
        <path fill="#FF7A59" d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4z" />
        <circle cx="24" cy="24" r="6" fill="#FFF" />
        <path stroke="#FFF" strokeWidth="3" d="M24 14v4m10 6h-4m-12 0h-4m10 10v-4" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* ────────────────────────────────────────────────────────────
   MAIN PAGE COMPONENT
   ──────────────────────────────────────────────────────────── */
const GrowthRevenue = () => {
  const { openConsultationModal } = useConsultationModal();
  const [isHeadingHovered, setIsHeadingHovered] = useState(false);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  // Tool category filter state
  const [activeToolCategory, setActiveToolCategory] = useState<string>("All");

  // Case study slider state
  const [caseStudyIndex, setCaseStudyIndex] = useState(0);

  // Testimonial slider state
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // FAQ Accordion state
  const [openFaqs, setOpenFaqs] = useState<{ [key: string]: boolean }>({
    "left-0": true,
  });

  const toggleFaq = (key: string) => {
    setOpenFaqs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const caseStudies = [
    {
      category: "PERFORMANCE MARKETING",
      title: "Scaled Online Store Revenue by 320% in 6 Months",
      description:
        "Overhauled Google Ads Performance Max and Instagram catalogue campaigns for a multi-category lifestyle brand, lowering customer acquisition cost while tripling monthly order volume.",
      metrics: [
        { label: "Revenue Growth", value: "320%" },
        { label: "ROAS (Return on Ad Spend)", value: "2.8x" },
        { label: "Lower CAC", value: "45%" },
      ],
      link: "/digital-growth/performance-marketing",
    },
    {
      category: "SEO, AEO & GEO",
      title: "Increased Organic Traffic by 5x with SEO & Local SEO",
      description:
        "Executed high-intent commercial keyword optimization, local Google Business Profile dominance, and structured data for AI overview citations for a premier healthcare clinic network.",
      metrics: [
        { label: "Organic Traffic", value: "5x" },
        { label: "Qualified Leads", value: "60%" },
        { label: "Local Visibility", value: "3x" },
      ],
      link: "/digital-growth/seo-aeo-geo",
    },
    {
      category: "SOCIAL MEDIA MANAGEMENT",
      title: "Built a 100K+ Engaged Community in 8 Months",
      description:
        "Engineered a viral short-form video and educational carousel series across Instagram and LinkedIn for an emerging SaaS brand, creating a loyal pipeline of inbound product demos.",
      metrics: [
        { label: "Followers Gained", value: "100K+" },
        { label: "Avg. Engagement", value: "4.8%" },
        { label: "Brand Inquiries", value: "3x" },
      ],
      link: "/digital-growth/social-media-management",
    },
  ];

  const testimonials = [
    {
      quote:
        "Cybaem Tech helped us scale our online sales with a well-planned Google Ads and social media strategy. Our revenue grew 3x within 6 months. Highly recommended!",
      name: "Priya Deshmukh",
      role: "Founder, Lifestyle Brand",
      rating: 5,
    },
    {
      quote:
        "Their SEO and local search strategies positioned our clinic right at the top for high-intent patient queries in Pune. Consultations grew by over 140% in just four months.",
      name: "Dr. Rajesh Mehta",
      role: "Director, Apex Healthcare",
      rating: 5,
    },
    {
      quote:
        "From paid performance campaigns to daily community engagement, the Cybaem Tech team operates like an elite in-house growth squad. Outstanding return on investment.",
      name: "Vikram Joshi",
      role: "VP of Growth, SaaS Enterprise",
      rating: 5,
    },
  ];

  const faqsLeft = [
    {
      q: "Which platform is right for my business (Google Ads, Meta Ads, SEO)?",
      a: "It depends on your target audience and purchase intent. Google Ads captures high-intent prospects actively searching for your service right now, Meta Ads creates demand and builds brand affinity through visual targeting, and SEO provides sustainable organic visibility over time. We typically recommend an integrated mix tailored to your budget and sales cycle.",
    },
    {
      q: "How long does it take to see results?",
      a: "Paid advertising (Google & Meta Ads) can start generating qualified leads and traffic within 48 to 72 hours of campaign launch. SEO and organic growth generally require 3 to 6 months to achieve compounding rankings, while social media consistency yields measurable brand traction in 60 to 90 days.",
    },
    {
      q: "Can you manage our existing ad accounts?",
      a: "Yes. We can conduct a thorough audit of your existing Google Ads and Meta Ads accounts, identify wasted ad spend, refine conversion tracking, and restructure your campaigns without losing historical conversion data.",
    },
  ];

  const faqsRight = [
    {
      q: "What budget do I need to start?",
      a: "We customize campaign recommendations to your scale and market. For performance marketing, we recommend a minimum ad spend of ₹25,000 to ₹50,000/month (or equivalent) to collect sufficient statistical data for conversion optimization, alongside our management fee.",
    },
    {
      q: "Do you provide content creation also?",
      a: "Yes! Our team includes professional copywriters, graphic designers, and video editors who create high-converting ad creatives, SEO-optimized articles, and engaging social media carousels and reels.",
    },
    {
      q: "How do you measure campaign success?",
      a: "We focus on revenue and return on investment (ROAS / ROI), not just vanity clicks. We configure end-to-end analytics with GA4, UTM tags, and server-side pixel tracking, delivering transparent weekly dashboards and monthly strategy reviews.",
    },
  ];

  const filteredTools =
    activeToolCategory === "All"
      ? marketingTools
      : marketingTools.filter((t) => t.category === activeToolCategory);

  const prevCaseStudy = () => {
    setCaseStudyIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const nextCaseStudy = () => {
    setCaseStudyIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white text-[#0A1435] selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      {/* SEO Metadata */}
      <SEOHead
        title={growthRevenueSeoData.title}
        description={growthRevenueSeoData.description}
        canonical={growthRevenueSeoData.canonical}
        keywords={growthRevenueSeoData.keywords}
        ogTitle={growthRevenueSeoData.ogTitle}
        ogDescription={growthRevenueSeoData.ogDescription}
        twitterTitle={growthRevenueSeoData.twitterTitle}
        twitterDescription={growthRevenueSeoData.twitterDescription}
        jsonLd={growthRevenueSeoData.jsonLd}
      />

      {/* Global Navbar */}
      <Navbar />

      {/* ────────────────────────────────────────────────────────────
          SECTION 1: HERO (Matching CloudSecurity Layout & Spacing)
          ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col justify-between items-center bg-slate-950 pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12">
        {/* Background Image / Ambient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src={heroGrowthBg}
            alt="Digital Growth & Performance Marketing"
            className="w-full h-full object-cover object-center relative z-0"
            loading="eager"
          />

          {/* Balanced overlay matching cloud-security that keeps the background clearly visible while ensuring text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-slate-950/85 pointer-events-none" />

          {/* Decorative corner grid accents matching reference mockup */}
          <div className="absolute top-0 left-0 w-36 sm:w-56 h-36 sm:h-56 bg-[radial-gradient(#475569_1.2px,transparent_1.2px)] [background-size:18px_18px] opacity-35 pointer-events-none" />
          <div className="absolute top-0 right-0 w-36 sm:w-56 h-36 sm:h-56 bg-[radial-gradient(#475569_1.2px,transparent_1.2px)] [background-size:18px_18px] opacity-35 pointer-events-none" />
        </div>

        {/* ── TOP/CENTER HERO CONTENT ── */}
        <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10 w-full my-auto -translate-y-5 sm:-translate-y-8 lg:-translate-y-10">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="w-full max-w-5xl lg:max-w-6xl mx-auto flex flex-col items-center justify-center text-center"
          >
            {/* Heading & Subheading (Always Visible Without Hover) */}
            <div className="relative flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto">
              {/* Main Heading */}
              <motion.h1
                variants={fadeUp}
                className="font-extrabold text-white text-center drop-shadow-2xl tracking-[-0.03em] max-w-5xl mx-auto select-none"
                style={{
                  fontFamily:
                    "'Plus Jakarta Sans', 'Space Grotesk', -apple-system, sans-serif",
                  lineHeight: 1.16,
                  fontSize: "clamp(28px, 4.3vw, 52px)",
                }}
              >
                <span className="block">Turn Digital Presence into </span>
                <span className="block">Predictable Business Growth</span>
              </motion.h1>

              {/* Subheading - visible by default without hover */}
              <motion.p
                variants={fadeUp}
                className="text-sm sm:text-base md:text-lg text-slate-100 max-w-4xl mx-auto text-center font-normal leading-relaxed drop-shadow mt-4 sm:mt-5 px-2"
              >
                <span className="block">
                  We help businesses attract, engage, and convert the right audience through performance
                </span>
                <span className="block">
                  marketing, SEO, and social media strategies that deliver measurable results.
                </span>
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM SERVICES MARQUEE FEATURE STRIP ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full max-w-6xl mx-auto px-4 relative z-10 mt-auto pt-6"
        >
         

          <div className="relative overflow-hidden w-full py-3.5 group">
            {/* Subtle edge fades matching cloud-security for smooth marquee entry and exit */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-slate-950 via-slate-950/60 to-transparent z-10 pointer-events-none" />

            <div
              className="flex w-max animate-marquee group-hover:[animation-play-state:paused] items-center"
              style={{ animationDuration: "35s" }}
            >
              {[...heroSlides, ...heroSlides, ...heroSlides, ...heroSlides].map(
                (item, idx) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <Icon
                        size={20}
                        className="text-white group-hover/item:text-sky-300 shrink-0 stroke-[2] transition-colors"
                      />
                      <span className="whitespace-nowrap">{item.label}</span>
                    </>
                  );

                  return item.isInternal ? (
                    <Link
                      key={`${item.id}-${idx}`}
                      to={item.href}
                      className="flex items-center gap-2.5 px-5 sm:px-7 lg:px-8 py-1.5 shrink-0 text-white hover:text-sky-300 transition-colors duration-200 text-sm sm:text-base font-semibold group/item cursor-pointer"
                    >
                      {content}
                    </Link>
                  ) : (
                    <a
                      key={`${item.id}-${idx}`}
                      href={item.href}
                      className="flex items-center gap-2.5 px-5 sm:px-7 lg:px-8 py-1.5 shrink-0 text-white hover:text-sky-300 transition-colors duration-200 text-sm sm:text-base font-semibold group/item cursor-pointer"
                    >
                      {content}
                    </a>
                  );
                }
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 2: TRUSTED BY INNOVATIVE BUSINESSES
          ──────────────────────────────────────────────────────────── */}
      <section className="py-10 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-center text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-8">
            TRUSTED BY INNOVATIVE BUSINESSES & POWERED BY LEADING PLATFORMS
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 hover:opacity-100 transition-opacity">
            {/* Google */}
            <div className="flex items-center gap-2 font-display font-semibold text-slate-700 text-lg sm:text-xl">
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.93 0 12c0 2.07.45 3.84 1.25 5.42l4.03-3.15z" />
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
              </svg>
              <span>Google</span>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-2 font-display font-semibold text-slate-700 text-lg sm:text-xl">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0081FB] fill-current">
                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
              </svg>
              <span>Meta</span>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-2 font-display font-semibold text-slate-700 text-lg sm:text-xl">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0A66C2] fill-current">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </div>

            {/* HubSpot */}
            <div className="flex items-center gap-2 font-display font-semibold text-slate-700 text-lg sm:text-xl">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#FF7A59] fill-current">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
              </svg>
              <span>HubSpot</span>
            </div>

            {/* Semrush */}
            <div className="flex items-center gap-2 font-display font-semibold text-slate-700 text-lg sm:text-xl">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#FF642D] fill-current">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-4h2v4zm0-6h-2V8h2v2z" />
              </svg>
              <span>Semrush</span>
            </div>

            {/* Shopify */}
            <div className="flex items-center gap-2 font-display font-semibold text-slate-700 text-lg sm:text-xl">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#96BF48] fill-current">
                <path d="M19.7 7.2l-2.4-1.3c-.2-.1-.5 0-.7.2l-4.6 6.3-2.6-2.1c-.2-.2-.5-.1-.7.1L7.5 12l-1.8-.7c-.3-.1-.6.1-.7.4L3 21h18l-1.3-13.8z" />
              </svg>
              <span>Shopify</span>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 3: OUR SERVICES
          ──────────────────────────────────────────────────────────── */}
      <section id="services" className="py-20 bg-[#F9FBFE]">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-primary bg-blue-50 border border-blue-200 uppercase mb-3">
                OUR SERVICES
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A1435] tracking-tight">
                End-to-End <span className="text-primary">Growth & Revenue</span> Solutions
              </h2>
            </div>
            <div className="md:max-w-md flex flex-col items-start md:items-end">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed md:text-right mb-3">
                From strategy to execution, we deliver integrated digital growth solutions tailored to your business goals.
              </p>
              <Link
                to="/digital-growth/performance-marketing"
                className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline group"
              >
                View All Services
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* 3 Detailed Service Cards */}
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
            {/* Card 1: Performance Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl border border-slate-200/90 hover:border-primary p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-3.5 group-hover:bg-primary group-hover:text-white group-hover:shadow-md transition-all duration-300">
                  <Megaphone size={24} />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-[21px] text-[#0A1435] mb-2 leading-snug">
                  Performance Marketing
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3.5">
                  Google Ads & Meta Ads management built for qualified leads and real ROI.
                </p>

                {/* Bullets */}
                <div className="space-y-2 mb-3.5 pt-3 border-t border-slate-100">
                  <div className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>Google Ads Management</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>Meta Ads (Facebook & Instagram)</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>Campaign Strategy & Optimization</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>Conversion Tracking & Reporting</span>
                  </div>
                </div>

                {/* Preview Image */}
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50 mb-4 h-52 sm:h-60 lg:h-56 xl:h-64 flex items-center justify-center p-2">
                  <img
                    src={googleAdsImg}
                    alt="Google Ads & Performance Marketing Dashboard"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              <Link
                to="/digital-growth/performance-marketing"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 rounded-xl bg-blue-50 text-primary font-semibold text-xs sm:text-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-md transition-all duration-300"
              >
                Explore Performance Marketing
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Card 2: SEO, AEO & GEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-3xl border border-slate-200/90 hover:border-primary p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-3.5 group-hover:bg-primary group-hover:text-white group-hover:shadow-md transition-all duration-300">
                  <Search size={24} />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-[21px] text-[#0A1435] mb-2 leading-snug">
                  SEO, AEO & GEO
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3.5">
                  Rank on Google, get cited in AI answers, and get found locally.
                </p>

                {/* Bullets */}
                <div className="space-y-2 mb-3.5 pt-3 border-t border-slate-100">
                  <div className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>Technical SEO & Core Web Vitals</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>On-Page & Off-Page Authority SEO</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>AI Search Optimization (AEO)</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>Local SEO & Google Maps (GEO)</span>
                  </div>
                </div>

                {/* Preview Image */}
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50 mb-4 h-52 sm:h-60 lg:h-56 xl:h-64 flex items-center justify-center">
                  <img
                    src={seoImg}
                    alt="SEO, AEO & GEO Search Visibility"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              <Link
                to="/digital-growth/seo-aeo-geo"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 rounded-xl bg-blue-50 text-primary font-semibold text-xs sm:text-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-md transition-all duration-300"
              >
                Explore SEO Services
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Card 3: Social Media Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-3xl border border-slate-200/90 hover:border-primary p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-3.5 group-hover:bg-primary group-hover:text-white group-hover:shadow-md transition-all duration-300">
                  <Share2 size={24} />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-[21px] text-[#0A1435] mb-2 leading-snug">
                  Social Media Management
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3.5">
                  Build active presence, consistent branding, and engaging multi-platform content.
                </p>

                {/* Bullets */}
                <div className="space-y-2 mb-3.5 pt-3 border-t border-slate-100">
                  <div className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>Content Strategy & Planning</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>Content Creation & Visual Design</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>Community Management & Engagement</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>Performance Analysis & Growth Audits</span>
                  </div>
                </div>

                {/* Preview Image */}
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50 mb-4 h-52 sm:h-60 lg:h-56 xl:h-64 flex items-center justify-center">
                  <img
                    src={socialImg}
                    alt="Social Media Content & Community Management"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              <Link
                to="/digital-growth/social-media-management"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 rounded-xl bg-blue-50 text-primary font-semibold text-xs sm:text-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-md transition-all duration-300"
              >
                Explore Social Media
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 4: WHY CHOOSE CYBAEM TECH
          ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-primary bg-blue-50 border border-blue-200 uppercase mb-4">
                WHY CHOOSE CYBAEM TECH
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A1435] leading-tight tracking-tight mb-5">
                A Growth Partner for Your Business{" "}
                <span className="text-primary">Success</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                We combine data-driven strategies, creative expertise, and performance-focused execution to help you attract more customers and achieve measurable growth.
              </p>

              <button
                onClick={openConsultationModal}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0A1B39] hover:bg-primary text-white text-[14px] font-semibold transition-all shadow-md shadow-blue-950/20 hover:shadow-lg hover:-translate-y-0.5 group cursor-pointer"
              >
                Talk to Our Experts
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right 2x2 Value Cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="p-7 rounded-3xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-blue-100/60 text-primary flex items-center justify-center mb-5">
                  <Award size={24} />
                </div>
                <h3 className="font-display font-bold text-lg text-[#0A1435] mb-2">Proven Expertise</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  250+ successful projects across industries delivering high-return campaigns.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-7 rounded-3xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100/60 text-emerald-600 flex items-center justify-center mb-5">
                  <BarChart3 size={24} />
                </div>
                <h3 className="font-display font-bold text-lg text-[#0A1435] mb-2">Data-Driven Approach</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Decisions backed by real data, search volume metrics, and conversion analytics.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-7 rounded-3xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100/60 text-indigo-600 flex items-center justify-center mb-5">
                  <Target size={24} />
                </div>
                <h3 className="font-display font-bold text-lg text-[#0A1435] mb-2">ROI-Focused Strategies</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Maximum results with optimized ad spend, low cost-per-lead, and higher lifetime value.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-7 rounded-3xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-sky-100/60 text-sky-600 flex items-center justify-center mb-5">
                  <Headphones size={24} />
                </div>
                <h3 className="font-display font-bold text-lg text-[#0A1435] mb-2">End-to-End Support</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  From initial audit to ongoing creative iteration, optimization, and monthly reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 5: OUR PROCESS
          ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A1B39] text-white relative overflow-hidden">
        {/* Background decorative glows */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800 uppercase mb-3">
                OUR PROCESS
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                A Simple, Proven Process for Measurable Results
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base max-w-md md:text-right leading-relaxed">
              A structured approach to ensure every campaign drives real business impact.
            </p>
          </div>

          {/* 5 Steps Progression Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Step 1 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm relative group hover:bg-white/10 transition-colors">
              <span className="text-3xl font-extrabold text-sky-400 font-display block mb-4">01</span>
              <h3 className="text-lg font-bold text-white mb-2">Discover</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Understand your business goals, target audience, competitors, and growth opportunities.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm relative group hover:bg-white/10 transition-colors">
              <span className="text-3xl font-extrabold text-sky-400 font-display block mb-4">02</span>
              <h3 className="text-lg font-bold text-white mb-2">Strategy</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Create a tailored digital growth plan with keyword maps, channel mix, and ad funnels.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm relative group hover:bg-white/10 transition-colors">
              <span className="text-3xl font-extrabold text-sky-400 font-display block mb-4">03</span>
              <h3 className="text-lg font-bold text-white mb-2">Execute</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Launch and manage campaigns with best practices, tracking tags, and high-impact creatives.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm relative group hover:bg-white/10 transition-colors">
              <span className="text-3xl font-extrabold text-sky-400 font-display block mb-4">04</span>
              <h3 className="text-lg font-bold text-white mb-2">Optimize</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Continuously analyze and improve performance, test audiences, and eliminate wasted ad spend.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm relative group hover:bg-white/10 transition-colors">
              <span className="text-3xl font-extrabold text-sky-400 font-display block mb-4">05</span>
              <h3 className="text-lg font-bold text-white mb-2">Scale</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Expand successful strategies, scale budgets profitably, and capture compound long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 6: FEATURED CASE STUDIES
          ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F8FAFD]">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header with Navigation Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-primary bg-blue-50 border border-blue-200 uppercase mb-3">
                FEATURED CASE STUDIES
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A1435] tracking-tight">
                Real Strategies. <span className="text-primary">Real Growth.</span>
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/portfolio"
                className="text-primary text-sm font-semibold hover:underline flex items-center gap-1"
              >
                View All Case Studies
                <ArrowRight size={14} />
              </Link>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevCaseStudy}
                  aria-label="Previous case study"
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-colors shadow-xs"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextCaseStudy}
                  aria-label="Next case study"
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-colors shadow-xs"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Case Studies Display (Desktop 3 Columns, Mobile Active Card) */}
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`bg-white rounded-3xl border ${caseStudyIndex === idx ? "border-primary ring-2 ring-blue-100" : "border-slate-200/90"
                  } p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300`}
              >
                <div>
                  <span className="inline-block text-[11px] font-bold tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full uppercase mb-4">
                    {cs.category}
                  </span>
                  <h3 className="font-display font-bold text-xl text-[#0A1435] mb-3 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {cs.description}
                  </p>

                  {/* Metrics Box */}
                  <div className="grid grid-cols-3 gap-2 py-4 px-3 rounded-2xl bg-[#F8FAFD] border border-slate-100 mb-6 text-center">
                    {cs.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="font-display font-extrabold text-base sm:text-lg text-primary">
                          {metric.value}
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <Link
                  to={cs.link}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-blue-800 transition-colors group"
                >
                  Read Case Study
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 7: PLATFORMS & TOOLS WE WORK WITH
          ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-primary bg-blue-50 border border-blue-200 uppercase mb-3">
              PLATFORMS & TOOLS WE WORK WITH
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A1435] tracking-tight mb-4">
              Industry-Leading Platforms for Maximum Impact
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We leverage the most powerful marketing, analytics, and advertising stacks to maximize your returns.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {["All", "Advertising", "SEO & Search", "Analytics & Data", "Content & Social"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveToolCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeToolCategory === cat
                    ? "bg-[#0A1B39] text-white shadow-sm"
                    : "bg-[#F8FAFD] text-slate-600 hover:bg-slate-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tool Cards Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredTools.map((tool) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={tool.name}
                  className="p-6 rounded-3xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-100 flex items-center justify-center">
                        {tool.logoSvg}
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200/80">
                        {tool.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base text-[#0A1435] mb-1.5">{tool.name}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">{tool.desc}</p>
                  </div>

                  <span className="text-[11px] font-semibold text-primary flex items-center gap-1">
                    <Zap size={12} />
                    {tool.category}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 8: INDUSTRIES WE HELP GROW
          ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F9FBFE]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-primary bg-blue-50 border border-blue-200 uppercase mb-3">
              INDUSTRIES WE HELP GROW
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A1435] tracking-tight mb-4">
              Growth Solutions for Every Industry
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Tailored digital growth and lead generation strategies built for your industry dynamics.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {/* 1 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-primary hover:shadow-lg transition-all text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-3">
                <ShoppingCart size={22} />
              </div>
              <h3 className="font-display font-bold text-sm sm:text-base text-[#0A1435]">Retail & E-commerce</h3>
            </div>

            {/* 2 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-primary hover:shadow-lg transition-all text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
                <Heart size={22} />
              </div>
              <h3 className="font-display font-bold text-sm sm:text-base text-[#0A1435]">Healthcare</h3>
            </div>

            {/* 3 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-primary hover:shadow-lg transition-all text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                <GraduationCap size={22} />
              </div>
              <h3 className="font-display font-bold text-sm sm:text-base text-[#0A1435]">Education</h3>
            </div>

            {/* 4 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-primary hover:shadow-lg transition-all text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <Building2 size={22} />
              </div>
              <h3 className="font-display font-bold text-sm sm:text-base text-[#0A1435]">Real Estate</h3>
            </div>

            {/* 5 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-primary hover:shadow-lg transition-all text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                <Laptop size={22} />
              </div>
              <h3 className="font-display font-bold text-sm sm:text-base text-[#0A1435]">IT & SaaS</h3>
            </div>

            {/* 6 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-primary hover:shadow-lg transition-all text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                <Factory size={22} />
              </div>
              <h3 className="font-display font-bold text-sm sm:text-base text-[#0A1435]">Manufacturing</h3>
            </div>

            {/* 7 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-primary hover:shadow-lg transition-all text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                <Briefcase size={22} />
              </div>
              <h3 className="font-display font-bold text-sm sm:text-base text-[#0A1435]">Finance & Banking</h3>
            </div>

            {/* 8 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-primary hover:shadow-lg transition-all text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
                <Users size={22} />
              </div>
              <h3 className="font-display font-bold text-sm sm:text-base text-[#0A1435]">Professional Services</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 9: WHAT OUR CLIENTS SAY
          ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-primary bg-blue-50 border border-blue-200 uppercase mb-3">
                WHAT OUR CLIENTS SAY
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A1435] tracking-tight">
                Trusted by Growing Businesses
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-colors shadow-xs"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-colors shadow-xs"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Testimonial Active Showcase Card */}
          <motion.div
            key={testimonialIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#F8FAFD] to-white border border-slate-200/90 shadow-sm relative overflow-hidden"
          >
            {/* Big quote mark backdrop */}
            <div className="absolute top-4 right-8 text-slate-200 font-serif font-black text-8xl pointer-events-none select-none opacity-40">
              “
            </div>

            <div className="flex items-center gap-1 text-amber-400 mb-6">
              {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
              ))}
            </div>

            <blockquote className="font-display text-xl sm:text-2xl text-[#0A1435] font-semibold leading-relaxed mb-8 max-w-4xl">
              "{testimonials[testimonialIndex].quote}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                {testimonials[testimonialIndex].name[0]}
              </div>
              <div>
                <p className="font-display font-bold text-base text-[#0A1435]">
                  {testimonials[testimonialIndex].name}
                </p>
                <p className="text-xs sm:text-sm text-slate-500">
                  {testimonials[testimonialIndex].role}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 10: FREQUENTLY ASKED QUESTIONS
          ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F8FAFD]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-primary bg-blue-50 border border-blue-200 uppercase mb-3">
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A1435] tracking-tight">
                Got Questions? We've Got Answers.
              </h2>
            </div>
            <button
              onClick={openConsultationModal}
              className="text-primary text-sm font-semibold hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              Ask an Expert Directly
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {/* Left Column */}
            <div className="space-y-4">
              {faqsLeft.map((faq, idx) => {
                const key = `left-${idx}`;
                const isOpen = !!openFaqs[key];
                return (
                  <div
                    key={faq.q}
                    className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(key)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-base text-[#0A1435] hover:text-primary transition-colors"
                    >
                      <span>{faq.q}</span>
                      <span className="shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-5 sm:px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {faqsRight.map((faq, idx) => {
                const key = `right-${idx}`;
                const isOpen = !!openFaqs[key];
                return (
                  <div
                    key={faq.q}
                    className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(key)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-base text-[#0A1435] hover:text-primary transition-colors"
                    >
                      <span>{faq.q}</span>
                      <span className="shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-5 sm:px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          SECTION 11: BOTTOM CTA BANNER
          ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#0A1B39] via-[#0E254E] to-[#0A1B39] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider text-sky-400 bg-sky-950/70 border border-sky-800 uppercase mb-4">
              READY TO GROW?
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-5 leading-tight">
              Let's Turn Your Business Goals into Real Revenue.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Get a free growth audit and discover how we can help you attract more customers, increase conversions, and scale your business.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={openConsultationModal}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 cursor-pointer"
              >
                Get a Free Growth Audit
                <ArrowRight size={16} />
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 transition-all"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default GrowthRevenue;
