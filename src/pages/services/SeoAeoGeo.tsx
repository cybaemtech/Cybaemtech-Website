import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Check,
  Search,
  Cpu,
  MapPin,
  TrendingUp,
  Settings,
  Sparkles,
  FileText,
  BarChart3,
  CheckCircle2,
  Share2,
} from "lucide-react";

// Assets for SEO, AEO & GEO page
import headerImg from "@/assets/SEO AEO GEO Page Design/header img.png";
import whatWeDoHeaderImgRight from "@/assets/SEO AEO GEO Page Design/what we do header img right side.png";
import whatWeDoCenterImg from "@/assets/SEO AEO GEO Page Design/what we do center img.png";
import card1Img from "@/assets/SEO AEO GEO Page Design/1.png";
import card2Img from "@/assets/SEO AEO GEO Page Design/2.png";
import card3Img from "@/assets/SEO AEO GEO Page Design/3.png";
import card4Img from "@/assets/SEO AEO GEO Page Design/4.png";
import card5Img from "@/assets/SEO AEO GEO Page Design/5.png";
import faqSearch3d from "@/assets/seo-aeo-geo/faq-search-3d.png";
import relatedAdsLaptop from "@/assets/performance marketing/digital-marketing-hero.png";
import relatedSocialLaptop from "@/assets/social media management header img/header section right side.png";

export default function SeoAeoGeo() {
  const { openConsultationModal } = useConsultationModal();

  // FAQ Accordion State (first item open by default as shown in image)
  const [openFaq, setOpenFaq] = useState<string>("faq-0");

  const faqs = [
    {
      q: "How long does SEO take to show results?",
      a: "Early gains may appear in two to three months; stronger results often build over six to twelve months, depending on competition and the site's current state.",
    },
    {
      q: "What is the difference between SEO, AEO, and GEO?",
      a: "SEO (Search Engine Optimization) focuses on organic rankings on traditional search engines like Google. AEO (Answer Engine Optimization) structures content to be cited and recommended directly inside AI responses from ChatGPT, Perplexity, and Google AI Overviews. GEO (Generative Engine & Geolocation Optimization) ensures your business dominates local search results, Google Maps, and AI-powered geographic discovery.",
    },
    {
      q: "Can you fix a Google penalty or traffic drop?",
      a: "Yes. We perform a comprehensive forensic diagnostic audit to identify algorithmic penalties, manual actions, crawl errors, broken redirects, lost backlinks, or duplicate content issues, and execute a structured recovery plan to regain your organic authority.",
    },
    {
      q: "Do you work with businesses that have many locations?",
      a: "Yes. We specialize in multi-location enterprise SEO, building localized landing pages, managing and optimizing multi-branch Google Business Profiles, establishing regional citations, and ensuring location accuracy across maps and search directories.",
    },
    {
      q: "Will you work with our existing website?",
      a: "Yes. We work seamlessly with any existing tech stack or CMS—including WordPress, Shopify, Webflow, React, Next.js, Angular, PHP, or custom enterprise platforms—and can coordinate directly with your internal development team or handle implementation end-to-end.",
    },
    {
      q: "How do I know the work is paying off?",
      a: "We provide transparent, monthly reports tracking core business metrics: keyword position shifts, organic search impressions, website clicks, AI answer citation appearances, and qualified leads/conversions so you see the direct return on investment.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      <SEOHead
        title="SEO, AEO & GEO Services | CybaemTech"
        description="We build SEO that keeps rankings and turns visitors into customers. Get found on search engines, in AI overviews, and in local search."
        canonical="https://www.cybaemtech.com/digital-growth/seo-aeo-geo"
      />

      <Navbar />

      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/70 to-white overflow-hidden">
        {/* Soft ambient lighting */}
        <div className="absolute top-12 right-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Heading + Pitch + CTAs */}
            <div className="lg:col-span-6 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-0.5 bg-blue-600 inline-block" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-primary">
                  SEO • AEO • GEO
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6">
                Rank Higher. <br />
                Get Cited. <br />
                <span className="text-primary">Get Found Locally.</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                Search has changed. People now find businesses through Google, AI answers,
                and maps. We help you show up in all three, and stay there.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
                <button
                  onClick={openConsultationModal}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#0A101D] hover:bg-slate-800 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all group cursor-pointer"
                >
                  <span>Get a Free SEO Audit</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button
                  onClick={openConsultationModal}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 font-semibold text-sm px-7 py-3.5 rounded-full transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                >
                  Talk to Our Team
                </button>
              </div>
            </div>

            {/* Right Column: Hero Laptop Mockup */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[620px] group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-sky-400/15 to-transparent rounded-3xl blur-2xl transform scale-95 -z-10" />
                <img
                  src={headerImg}
                  alt="SEO, AEO, and GEO Performance Dashboard"
                  className="w-full h-auto object-contain drop-shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* 4 Feature Pillars Strip */}
          <div className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                <TrendingUp size={20} strokeWidth={2.2} />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">
                  SEO Strategy
                </span>
                <span className="text-[11px] text-slate-500">Higher Rankings</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                <Sparkles size={20} strokeWidth={2.2} />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">
                  AI Search Visibility
                </span>
                <span className="text-[11px] text-slate-500">Be Cited in AI Answers</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                <Settings size={20} strokeWidth={2.2} />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">
                  Technical SEO
                </span>
                <span className="text-[11px] text-slate-500">Better Performance</span>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                <MapPin size={20} strokeWidth={2.2} />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">
                  Local SEO
                </span>
                <span className="text-[11px] text-slate-500">Get Found Nearby</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. WHY SEO, AEO & GEO MATTER?                             */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Headline & Intro */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-0.5 bg-blue-600 inline-block" />
                <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary">
                  WHY SEO, AEO & GEO MATTER?
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Be Visible Everywhere <br />
                People Search
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                People no longer rely only on traditional search results. They also get answers from AI tools
                and search for businesses nearby. A strong SEO, AEO and GEO strategy helps you attract the
                right audience, build trust, and generate consistent, long-term growth.
              </p>
            </div>

            {/* Right 3 Pillars: SEO, AEO, GEO */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
              {/* Pillar 1: SEO */}
              <div className="flex flex-col text-center items-center sm:px-4 pt-6 sm:pt-0">
                <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 text-primary flex items-center justify-center mb-4 shrink-0 shadow-2xs">
                  <Search size={24} strokeWidth={2.2} />
                </div>
                <span className="text-xs font-extrabold tracking-widest uppercase text-slate-900 mb-1">
                  SEO
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                  Rank on Search Engines
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Get higher rankings on Google and attract high-intent traffic that converts.
                </p>
              </div>

              {/* Pillar 2: AEO */}
              <div className="flex flex-col text-center items-center sm:px-4 pt-6 sm:pt-0">
                <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 text-primary flex items-center justify-center mb-4 shrink-0 shadow-2xs">
                  <Cpu size={24} strokeWidth={2.2} />
                </div>
                <span className="text-xs font-extrabold tracking-widest uppercase text-slate-900 mb-1">
                  AEO
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                  Get Cited in AI Answers
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Show up in AI-powered answers from tools like ChatGPT, Google AI Overview and more.
                </p>
              </div>

              {/* Pillar 3: GEO */}
              <div className="flex flex-col text-center items-center sm:px-4 pt-6 sm:pt-0">
                <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 text-primary flex items-center justify-center mb-4 shrink-0 shadow-2xs">
                  <MapPin size={24} strokeWidth={2.2} />
                </div>
                <span className="text-xs font-extrabold tracking-widest uppercase text-slate-900 mb-1">
                  GEO
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                  Be Found Locally
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Appear in local search and map results to attract nearby customers and drive footfall to your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. WHAT WE DO: END-TO-END SEO, AEO & GEO SERVICES         */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 lg:py-36 bg-gradient-to-b from-[#FAFDFE] via-white to-[#F8FAFC] relative overflow-hidden">
        {/* Soft atmospheric ambient glow patches */}
        <div className="absolute top-10 right-1/4 w-[750px] h-[650px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-[550px] h-[550px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          {/* Section Header: Title & Description (Left) | Laptop Visual (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center mb-24 sm:mb-32 lg:mb-36">
            {/* Left Column: Title & Description */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="w-8 h-[2.5px] bg-[#1463F3] inline-block rounded-full" />
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase text-[#1463F3]">
                  WHAT WE DO
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] font-extrabold text-[#0B132B] tracking-tight leading-[1.04] mb-6">
                End-to-End
                <span className="text-[#1463F3] block mt-3">SEO, AEO & GEO Services</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg lg:text-[19px] xl:text-[20px] leading-relaxed max-w-2xl font-normal">
                We combine strategy, technical expertise and content to help you rank, get cited and get found across all major platforms.
              </p>
            </div>

            {/* Right Column: High-Res Header Laptop Graphic (occupies ~45-50% area) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[720px] lg:max-w-[800px] xl:max-w-[860px] group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-sky-100/30 to-transparent rounded-3xl blur-3xl transform scale-95 pointer-events-none" />
                <img
                  src={whatWeDoHeaderImgRight}
                  alt="End-to-End SEO, AEO & GEO Performance Platform"
                  className="w-full h-auto object-contain drop-shadow-[0_24px_60px_rgba(20,99,243,0.14)] transform group-hover:scale-[1.015] transition-transform duration-700 ease-out relative z-10"
                />
              </div>
            </div>
          </div>

          {/* ======================================================= */}
          {/* ======================================================= */}
          {/* Top Row: Card 01 (Left) | Center Hub (Middle) | Card 02 (Right) */}
          {/* ======================================================= */}
          <div className="relative mb-20 sm:mb-28 lg:mb-36 xl:mb-40">
            {/* Background SVG Orbital Connector Lines (Desktop) */}
            <svg
              className="hidden xl:block absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1560 560"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Curve from Card 01 graphic to Center Hub orbit */}
              <path
                d="M 460 210 C 520 160, 580 170, 655 210"
                stroke="#60A5FA"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                strokeOpacity="0.75"
              />
              <circle cx="460" cy="210" r="3.5" fill="#1463F3" />
              <circle cx="655" cy="210" r="3.5" fill="#1463F3" />

              {/* Orbital ring around Center Hub (lower and larger) */}
              <circle
                cx="780"
                cy="320"
                r="170"
                stroke="#93C5FD"
                strokeWidth="1.3"
                strokeDasharray="4 6"
                strokeOpacity="0.6"
              />
              <circle cx="780" cy="150" r="3.5" fill="#1463F3" />
              <circle cx="950" cy="320" r="3.5" fill="#1463F3" />
              <circle cx="780" cy="490" r="3.5" fill="#1463F3" />
              <circle cx="610" cy="320" r="3.5" fill="#1463F3" />

              {/* Curve from Center Hub orbit to near Card 02 number */}
              <path
                d="M 905 210 C 950 150, 1000 120, 1060 90"
                stroke="#60A5FA"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                strokeOpacity="0.75"
              />
              <circle cx="905" cy="210" r="3.5" fill="#1463F3" />
              <circle cx="1060" cy="90" r="3.5" fill="#1463F3" />

              {/* Graceful curve swooping down from Center Hub toward Row 2 */}
              <path
                d="M 780 490 C 780 525, 710 540, 600 520"
                stroke="#93C5FD"
                strokeWidth="1.3"
                strokeDasharray="5 5"
                strokeOpacity="0.45"
              />
            </svg>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-center relative z-10">
              {/* Card 01: Full-stack SEO Strategy */}
              <div className="lg:col-span-12 xl:col-span-4 group">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center">
                  {/* Left Content */}
                  <div className="sm:col-span-6 flex flex-col justify-between">
                    <div>
                      {/* Number badge */}
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <span className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#38BDF8] tracking-tight leading-none">
                          01
                        </span>
                        <span className="w-7 sm:w-8 h-[2px] bg-[#38BDF8] inline-block rounded-full" />
                      </div>

                      <h3 className="text-base font-bold text-[#0B132B] tracking-tight leading-snug mb-2">
                        Full-stack SEO Strategy
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        A data-driven strategy tailored to your business goals.
                      </p>

                      <div className="space-y-2 mb-6">
                        {[
                          "Keyword & Competitor Research",
                          "Content Strategy & Topic Clusters",
                          "On-page & Off-page Optimization",
                          "Measurable Traffic & Lead Growth",
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <div className="w-4 h-4 rounded-full bg-[#1463F3] text-white flex items-center justify-center shrink-0 shadow-xs">
                              <Check size={9.5} strokeWidth={3} />
                            </div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={openConsultationModal}
                        aria-label="Learn more about Full-stack SEO Strategy"
                        className="w-10 h-10 rounded-full border border-slate-300/80 bg-white text-[#1463F3] hover:text-white hover:bg-[#1463F3] hover:border-[#1463F3] transition-all duration-300 flex items-center justify-center shadow-xs group-hover:border-[#1463F3] group-hover:bg-blue-50/60 cursor-pointer"
                      >
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Right 3D Visual - moved towards left side & increased size */}
                  <div className="sm:col-span-6 flex items-center justify-start xl:-ml-2">
                    <div className="w-full max-w-[280px] sm:max-w-none flex items-center justify-start relative">
                      <div className="absolute inset-0 bg-blue-100/40 rounded-full blur-2xl pointer-events-none scale-90" />
                      <img
                        src={card1Img}
                        alt="Full-stack SEO Strategy visual"
                        className="w-full h-auto max-h-[300px] xl:max-h-[340px] 2xl:max-h-[370px] object-contain drop-shadow-md transform group-hover:scale-105 transition-transform duration-500 ease-out relative z-10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Hub Graphic (Desktop) - Increased size and moved further down */}
              <div className="hidden xl:flex xl:col-span-4 items-center justify-center relative py-2 translate-y-16 xl:translate-y-24 2xl:translate-y-28 z-20">
                <div className="relative w-full max-w-[380px] xl:max-w-[420px] 2xl:max-w-[460px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-blue-400/25 rounded-full blur-3xl pointer-events-none scale-110" />
                  <img
                    src={whatWeDoCenterImg}
                    alt="Central SEO, AEO & GEO Discovery Hub"
                    className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(20,99,243,0.22)] hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>

              {/* Card 02: Crawl, Render & Index Diagnostics - Content shifted towards right side & increased visual size */}
              <div className="lg:col-span-12 xl:col-span-4 group xl:translate-x-6 2xl:translate-x-10">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center">
                  {/* Left Content - pushed rightwards */}
                  <div className="sm:col-span-6 flex flex-col justify-between xl:pl-4 2xl:pl-6">
                    <div>
                      {/* Number badge */}
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <span className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#38BDF8] tracking-tight leading-none">
                          02
                        </span>
                        <span className="w-7 sm:w-8 h-[2px] bg-[#38BDF8] inline-block rounded-full" />
                      </div>

                      <h3 className="text-base font-bold text-[#0B132B] tracking-tight leading-snug mb-2">
                        Crawl, Render & Index Diagnostics
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        Find and fix what's holding your site back.
                      </p>

                      <div className="space-y-2 mb-6">
                        {[
                          "Technical SEO Audit",
                          "Fix Crawl & Indexing Issues",
                          "Structured Data (Schema)",
                          "Clean, Search-friendly Architecture",
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <div className="w-4 h-4 rounded-full bg-[#1463F3] text-white flex items-center justify-center shrink-0 shadow-xs">
                              <Check size={9.5} strokeWidth={3} />
                            </div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={openConsultationModal}
                        aria-label="Learn more about Crawl, Render & Index Diagnostics"
                        className="w-10 h-10 rounded-full border border-slate-300/80 bg-white text-[#1463F3] hover:text-white hover:bg-[#1463F3] hover:border-[#1463F3] transition-all duration-300 flex items-center justify-center shadow-xs group-hover:border-[#1463F3] group-hover:bg-blue-50/60 cursor-pointer"
                      >
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Right 3D Visual - increased size */}
                  <div className="sm:col-span-6 flex items-center justify-end xl:translate-x-3">
                    <div className="w-full max-w-[280px] sm:max-w-none flex items-center justify-end relative">
                      <div className="absolute inset-0 bg-blue-100/40 rounded-full blur-2xl pointer-events-none scale-90" />
                      <img
                        src={card2Img}
                        alt="Crawl, Render & Index Diagnostics visual"
                        className="w-full h-auto max-h-[300px] xl:max-h-[340px] 2xl:max-h-[370px] object-contain drop-shadow-md transform group-hover:scale-105 transition-transform duration-500 ease-out relative z-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Hub Graphic (Mobile & Tablet) */}
            <div className="flex xl:hidden justify-center items-center my-10">
              <div className="relative w-full max-w-[340px]">
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />
                <img
                  src={whatWeDoCenterImg}
                  alt="Central SEO, AEO & GEO Discovery Hub"
                  className="w-full h-auto object-contain relative z-10 drop-shadow-md"
                />
              </div>
            </div>
          </div>

          {/* ======================================================= */}
          {/* Bottom Row: Card 03 (Left) | Card 04 (Center) | Card 05 (Right) */}
          {/* ======================================================= */}
          <div className="relative">
            {/* Background SVG Flow Lines between Bottom Cards (Desktop) */}
            <svg
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1560 380"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Path connecting Card 03 to Card 04 */}
              <path
                d="M 460 185 Q 500 155 540 185"
                stroke="#93C5FD"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                strokeOpacity="0.5"
              />

              {/* Path connecting Card 04 to Card 05 */}
              <path
                d="M 980 185 Q 1020 155 1060 185"
                stroke="#93C5FD"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                strokeOpacity="0.5"
              />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 items-start relative z-10">
              {/* Card 03: Core Web Vitals & Technical Performance */}
              <div className="group relative -mt-14 lg:-mt-20 xl:-mt-28">
                {/* Soft ambient mist behind Card 03 matching Image 2 */}
                <div className="absolute -inset-6 bg-gradient-to-tr from-sky-100/60 via-blue-50/40 to-transparent rounded-3xl blur-2xl pointer-events-none -z-10" />

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center">
                  {/* Left Content */}
                  <div className="sm:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Number badge */}
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <span className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#38BDF8] tracking-tight leading-none">
                          03
                        </span>
                        <span className="w-7 sm:w-8 h-[2px] bg-[#38BDF8] inline-block rounded-full" />
                      </div>

                      <h3 className="text-base font-bold text-[#0B132B] tracking-tight leading-snug mb-2">
                        Core Web Vitals & Technical Performance
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        A faster, smoother website for better rankings and user experience.
                      </p>

                      <div className="space-y-2 mb-6">
                        {[
                          "Core Web Vitals Optimization",
                          "Image & Code Optimization",
                          "Mobile Performance Improvements",
                          "Better UX for Higher Conversions",
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <div className="w-4 h-4 rounded-full bg-[#1463F3] text-white flex items-center justify-center shrink-0 shadow-xs">
                              <Check size={9.5} strokeWidth={3} />
                            </div>
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={openConsultationModal}
                        aria-label="Learn more about Core Web Vitals & Technical Performance"
                        className="w-10 h-10 rounded-full border border-slate-300/80 bg-white text-[#1463F3] hover:text-white hover:bg-[#1463F3] hover:border-[#1463F3] transition-all duration-300 flex items-center justify-center shadow-xs group-hover:border-[#1463F3] group-hover:bg-blue-50/60 cursor-pointer"
                      >
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Right 3D Visual - increased size */}
                  <div className="sm:col-span-5 flex items-center justify-center">
                    <div className="w-full max-w-[260px] sm:max-w-none flex items-center justify-center relative">
                      <img
                        src={card3Img}
                        alt="Core Web Vitals & Technical Performance visual"
                        className="w-full h-auto max-h-[280px] xl:max-h-[320px] 2xl:max-h-[350px] object-contain drop-shadow-md transform group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 04: Local & Multi-location Visibility */}
              <div className="group relative">
                {/* Soft ambient glow behind Card 04 */}
                <div className="absolute -inset-6 bg-gradient-to-b from-blue-50/40 via-sky-50/30 to-transparent rounded-3xl blur-2xl pointer-events-none -z-10" />

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center">
                  {/* Left Content - allocated 8 cols for generous single-line readability */}
                  <div className="sm:col-span-8 flex flex-col justify-between">
                    <div>
                      {/* Number badge */}
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <span className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#38BDF8] tracking-tight leading-none">
                          04
                        </span>
                        <span className="w-7 sm:w-8 h-[2px] bg-[#38BDF8] inline-block rounded-full" />
                      </div>

                      <h3 className="text-base font-bold text-[#0B132B] tracking-tight leading-snug mb-2">
                        Local & Multi-location Visibility
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        Get found by customers in your area.
                      </p>

                      <div className="space-y-2 mb-6">
                        {[
                          "Google Business Profile Optimization",
                          "Local Citations & Listings",
                          "Reviews & Reputation Support",
                          "Multi-location SEO for Growing Businesses",
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <div className="w-4 h-4 rounded-full bg-[#1463F3] text-white flex items-center justify-center shrink-0 shadow-xs">
                              <Check size={9.5} strokeWidth={3} />
                            </div>
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={openConsultationModal}
                        aria-label="Learn more about Local & Multi-location Visibility"
                        className="w-10 h-10 rounded-full border border-slate-300/80 bg-white text-[#1463F3] hover:text-white hover:bg-[#1463F3] hover:border-[#1463F3] transition-all duration-300 flex items-center justify-center shadow-xs group-hover:border-[#1463F3] group-hover:bg-blue-50/60 cursor-pointer"
                      >
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Right 3D Visual - phone allocated 4 cols */}
                  <div className="sm:col-span-4 flex items-center justify-center">
                    <div className="w-full max-w-[260px] sm:max-w-none flex items-center justify-center relative">
                      <img
                        src={card4Img}
                        alt="Local & Multi-location Visibility visual"
                        className="w-full h-auto max-h-[320px] xl:max-h-[360px] 2xl:max-h-[400px] object-contain drop-shadow-md transform group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 05: Ecommerce SEO */}
              <div className="group relative md:col-span-2 lg:col-span-1 -mt-14 lg:-mt-20 xl:-mt-28">
                {/* Soft ambient glow behind Card 05 */}
                <div className="absolute -inset-6 bg-gradient-to-tl from-sky-100/50 via-blue-50/30 to-transparent rounded-3xl blur-2xl pointer-events-none -z-10" />

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center">
                  {/* Left Content */}
                  <div className="sm:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Number badge */}
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <span className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#38BDF8] tracking-tight leading-none">
                          05
                        </span>
                        <span className="w-7 sm:w-8 h-[2px] bg-[#38BDF8] inline-block rounded-full" />
                      </div>

                      <h3 className="text-base font-bold text-[#0B132B] tracking-tight leading-snug mb-2">
                        Ecommerce SEO
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        Drive more product visibility and sales.
                      </p>

                      <div className="space-y-2 mb-6">
                        {[
                          "Product & Category Optimization",
                          "Structured Data for Products",
                          "Optimized Site Architecture",
                          "Higher Rankings and More Sales",
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <div className="w-4 h-4 rounded-full bg-[#1463F3] text-white flex items-center justify-center shrink-0 shadow-xs">
                              <Check size={9.5} strokeWidth={3} />
                            </div>
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={openConsultationModal}
                        aria-label="Learn more about Ecommerce SEO"
                        className="w-10 h-10 rounded-full border border-slate-300/80 bg-white text-[#1463F3] hover:text-white hover:bg-[#1463F3] hover:border-[#1463F3] transition-all duration-300 flex items-center justify-center shadow-xs group-hover:border-[#1463F3] group-hover:bg-blue-50/60 cursor-pointer"
                      >
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Right 3D Visual - increased size */}
                  <div className="sm:col-span-5 flex items-center justify-center">
                    <div className="w-full max-w-[260px] sm:max-w-none flex items-center justify-center relative">
                      <img
                        src={card5Img}
                        alt="Ecommerce SEO visual"
                        className="w-full h-auto max-h-[280px] xl:max-h-[320px] 2xl:max-h-[350px] object-contain drop-shadow-md transform group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. HOW WE WORK: SIMPLE PROCESS FOR LONG-TERM GROWTH        */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-0.5 bg-blue-600 inline-block" />
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary">
              HOW WE WORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            A Simple Process for Long-Term Growth
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-16">
            We follow a clear and proven process to improve your visibility and deliver measurable results.
          </p>

          {/* 4 Connected Process Nodes */}
          <div className="relative">
            {/* Connecting Horizontal Line (desktop) */}
            <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-blue-600/60 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
              {[
                {
                  step: 1,
                  title: "Audit",
                  desc: "We analyze your website, current rankings, technical health and competition.",
                  icon: Search,
                },
                {
                  step: 2,
                  title: "Plan",
                  desc: "We create a tailored strategy with clear goals, keywords and action plan.",
                  icon: FileText,
                },
                {
                  step: 3,
                  title: "Fix & Build",
                  desc: "We implement technical fixes, optimize content and build authority.",
                  icon: Settings,
                },
                {
                  step: 4,
                  title: "Report",
                  desc: "You get regular reports with clear insights on rankings, traffic and leads.",
                  icon: BarChart3,
                },
              ].map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.step} className="flex flex-col items-center text-center group">
                    {/* Circle Node with Number */}
                    <div className="w-14 h-14 rounded-full bg-blue-600 text-white font-extrabold text-base flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 mb-4 cursor-pointer ring-4 ring-white">
                      {item.step}
                    </div>

                    {/* Step Icon */}
                    <div className="w-8 h-8 flex items-center justify-center text-primary mb-2">
                      <IconComp size={22} strokeWidth={2.2} />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                      {item.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-slate-600 leading-relaxed max-w-[210px]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. FREQUENTLY ASKED QUESTIONS                             */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]/80 relative overflow-hidden">
        <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading + 3D Magnifying Glass Graphic */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-0.5 bg-blue-600 inline-block" />
                <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary">
                  FREQUENTLY ASKED QUESTIONS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Clear Answers. <br />
                Better Search Results.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Have questions about our SEO, AEO & GEO services? <br />
                Here are the most common ones.
              </p>

              {/* 3D Magnifying Glass Graphic floating with ambient shadow */}
              <div className="relative max-w-sm mx-auto lg:mx-0 flex items-center justify-center group">
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl transform scale-90 pointer-events-none" />
                <img
                  src={faqSearch3d}
                  alt="Frequently Asked Questions Search Illustration"
                  className="w-full h-auto object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500 ease-out relative z-10"
                />
              </div>
            </div>

            {/* Right Column: Accordion */}
            <div className="lg:col-span-7">
              <Accordion
                type="single"
                collapsible
                defaultValue="faq-0"
                value={openFaq}
                onValueChange={setOpenFaq}
                className="space-y-3"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-white border border-slate-200/90 rounded-2xl px-5 sm:px-6 py-1 shadow-2xs hover:border-blue-300 transition-colors overflow-hidden"
                  >
                    <AccordionTrigger className="text-left text-sm sm:text-[15px] font-bold text-slate-900 py-4 hover:no-underline hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pb-4 pt-1">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. EXPLORE RELATED SERVICES                               */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-left mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-0.5 bg-blue-600 inline-block" />
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary">
                EXPLORE RELATED SERVICES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Complementary Services for Greater Growth
            </h2>
          </div>

          {/* 2 Side-by-Side Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Related Card 1: Performance Marketing */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                    Performance Marketing
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                    Running ads while SEO builds?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    Our performance marketing service helps you get instant visibility and high-quality leads through Google and Meta Ads.
                  </p>

                  <Link
                    to="/digital-growth/performance-marketing"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-blue-800 transition-colors group/link"
                  >
                    <span>Explore Performance Marketing</span>
                    <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="sm:col-span-5">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[4/3] w-full bg-slate-100">
                    <img
                      src={relatedAdsLaptop}
                      alt="Performance Marketing Preview"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Related Card 2: Social Media Management */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                    Social Media Management
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                    Want your content shared widely?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    We create and manage content that builds your brand, engages your audience and drives more traffic to your website.
                  </p>

                  <Link
                    to="/digital-growth/social-media-management"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-blue-800 transition-colors group/link"
                  >
                    <span>Explore Social Media Management</span>
                    <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="sm:col-span-5">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[4/3] w-full bg-slate-100">
                    <img
                      src={relatedSocialLaptop}
                      alt="Social Media Management Preview"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. DARK FOOTER                                            */}
      {/* ========================================================= */}
      <Footer variant="dark" />
    </div>
  );
}
