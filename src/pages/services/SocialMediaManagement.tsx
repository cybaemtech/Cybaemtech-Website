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
  CheckCircle2,
  TrendingUp,
  FileText,
  Share2,
  Calendar,
  CalendarDays,
  Target,
  ShieldCheck,
  Lightbulb,
  MessageSquare,
  BarChart3,
  Settings,
  PenTool,
  UserCheck,
  Users,
  PlaySquare,
  MessageSquareQuote,
  Zap,
  Check,
  FileEdit,
  CalendarCheck,
  Palette,
  Heart,
  Star,
  Send,
  MessageCircle,
  Bookmark,
  Search,
  PlusSquare,
  Film,
  User,
  Home,
  MoreHorizontal,
  Wifi,
} from "lucide-react";

// Social Media Management Images
import heroSocialPhoneImg from "@/assets/social-media-management/header-section-right-side.png";
import centerShowcaseImg from "@/assets/social-media-management/what-we-do-center.png";
import whatWeDoCenterImg from "@/assets/social media management header img/what we do img.png";
import socialPostMeetingImg from "@/assets/social-media-management/social_post_meeting.jpg";
import relatedPerfMarketingImg from "@/assets/social-media-management/related-perf-marketing.jpg";
import relatedSeoSearchImg from "@/assets/social-media-management/related-seo-search.jpg";
import faqBubblesImg from "@/assets/social-media-management/faq-bubbles.png";

export default function SocialMediaManagement() {
  const { openConsultationModal } = useConsultationModal();

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<string>("faq-0");

  const faqs = [
    {
      q: "Which platforms should my business be on?",
      a: "It depends on who your customers are. For example, B2B companies often do well on LinkedIn, while retail and service brands usually see more response on Instagram and Facebook. We recommend platforms after reviewing your audience.",
    },
    {
      q: "How often will you post?",
      a: "We typically post 3 to 5 times per week depending on the platform and package selected. Quality and relevance always come before quantity, so we ensure every post serves a strategic purpose.",
    },
    {
      q: "Will I get to approve content before it goes live?",
      a: "Yes, absolutely. We prepare a monthly content calendar in advance with all copy, designs, and reels for your review and approval before anything gets scheduled or published.",
    },
    {
      q: "Can you match our existing brand style?",
      a: "Yes. During onboarding, we study your brand guidelines, typography, color palettes, tone of voice, and previous creative assets so that every new post aligns seamlessly with your identity.",
    },
    {
      q: "Do you handle comments and messages too?",
      a: "Yes, we provide active community management. We monitor comments and direct messages daily, respond with approved brand guidelines, and promptly route genuine enquiries to your team.",
    },
    {
      q: "How long before social media shows results?",
      a: "Consistent engagement, brand affinity, and profile growth typically start showing within the first 30 to 60 days. Inbound inquiries and qualified leads build steadily as your audience trusts your active presence.",
    },
    {
      q: "Can social media work together with paid ads?",
      a: "Definitely. In fact, combining organic social media management with paid performance ads produces the best ROI. Organic content provides social proof when ad clicks visit your profile, and top-performing organic posts can be boosted as paid ads.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      <SEOHead
        title="Social Media Management Services | CybaemTech"
        description="Stay active, consistent, and on-brand on the platforms your customers use. We plan, create, and manage your social media so it supports real business goals."
        canonical="https://www.cybaemtech.com/digital-growth/social-media-management"
      />

      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/70 to-white overflow-hidden">
        {/* Soft background ambient gradient lighting */}
        <div className="absolute top-12 right-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-0.5 bg-blue-600 inline-block" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-primary">
                  SOCIAL MEDIA MANAGEMENT
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6">
                Show Up Where <br />
                Your Customers <br />
                <span className="text-primary">Scroll.</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                A busy feed does not build a brand. A consistent, clear one does. We manage your
                social media so your business looks professional and stays active on the platforms
                that matter.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                <button
                  onClick={openConsultationModal}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#0A101D] hover:bg-slate-800 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all group cursor-pointer"
                >
                  <span>Get a Free Social Media Review</span>
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

            {/* Right Hero Visual with Floating 3D Showcase */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[560px] flex items-center justify-center group">
                {/* Soft ambient gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/15 via-sky-400/20 to-purple-500/15 rounded-full blur-3xl transform scale-95 -z-10" />

                {/* 3D Phone with Floating Social Badges & Metrics */}
                <img
                  src={heroSocialPhoneImg}
                  alt="Cybaem Tech Social Media Management Showcase"
                  className="w-full h-auto object-contain drop-shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Trust Capabilities Strip */}
          <div className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Item 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                <Target size={18} strokeWidth={2.2} />
              </div>
              <div className="text-left">
                <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">
                  Strategic Planning
                </span>
                <span className="text-[11px] text-slate-500">Right Platforms</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <PlaySquare size={18} strokeWidth={2.2} />
              </div>
              <div className="text-left">
                <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">
                  Engaging Content
                </span>
                <span className="text-[11px] text-slate-500">Posts, Reels & Stories</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <MessageSquareQuote size={18} strokeWidth={2.2} />
              </div>
              <div className="text-left">
                <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">
                  Community Management
                </span>
                <span className="text-[11px] text-slate-500">Respond & Engage</span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <TrendingUp size={18} strokeWidth={2.2} />
              </div>
              <div className="text-left">
                <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">
                  Real Results
                </span>
                <span className="text-[11px] text-slate-500">More Reach, Enquiries & Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY THIS SERVICE MATTERS --- */}
      <section className="py-20 sm:py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-0.5 bg-blue-600 inline-block" />
                <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary">
                  WHY THIS SERVICE MATTERS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Turn Followers <br />
                into Opportunities
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Your social media profiles are often the first place customers look before they call,
                visit or buy. An inactive or inconsistent presence can make them doubt your business.
                We help you stay active on the right platforms with a clear strategy, valuable content
                and consistent branding.
              </p>
            </div>

            {/* Right 3 Value Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="flex flex-col text-left">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-4 shrink-0">
                  <ShieldCheck size={22} strokeWidth={2.2} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                  Be Consistent
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Regular posting builds trust and recognition.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col text-left">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-4 shrink-0">
                  <Target size={22} strokeWidth={2.2} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                  Be On-Brand
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every post should look and sound like your business.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col text-left">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-4 shrink-0">
                  <Lightbulb size={22} strokeWidth={2.2} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                  Be Useful
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Content should help, inform or answer a question, not only promote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT WE DO: COMPLETE SOCIAL MEDIA MANAGEMENT --- */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-[#F8FAFC] via-[#F8F9FE] to-[#F1F5F9]/60 relative overflow-hidden">
        {/* Soft background ambient gradient lighting */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-md shadow-indigo-500/25 mb-4">
              <Zap size={14} className="text-yellow-300 fill-yellow-300" />
              <span>WHAT WE DO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
              Complete{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Social Media Management
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              From strategy to content to results, we handle everything you need to build a strong and active presence on social media.
            </p>
          </div>

          {/* 3-Column Layout: Left Cards (01, 03, 05), Center Phone Mockup, Right Cards (02, 04, 06) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] xl:grid-cols-[1fr_1.3fr_1fr] gap-6 xl:gap-8 items-center">
            {/* Left 3 Cards (01, 03, 05) */}
            <div className="space-y-4 order-2 lg:order-1">
              {/* Card 01: Platform & Audience Strategy */}
              <div className="bg-white rounded-2xl border border-slate-200/70 p-4 sm:p-5 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left relative group">
                <div className="mb-2">
                  <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-primary">01</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0 shadow-xs">
                    <Target size={20} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-snug">Platform & Audience Strategy</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">We choose the right platforms and build a strategy around your goals.</p>
                  </div>
                </div>
                <div className="h-px bg-slate-100 my-3" />
                <div className="space-y-1.5">
                  {["Audience research", "Competitor review", "Platform selection", "Clear goals (inquiries, awareness, sales)"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0"><Check size={10} strokeWidth={3.5} /></span>
                      <span className="text-xs text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 03: Content Planning & Calendar */}
              <div className="bg-white rounded-2xl border border-slate-200/70 p-4 sm:p-5 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left relative group">
                <div className="mb-2">
                  <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600">03</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                    <CalendarCheck size={20} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-snug">Content Planning & Calendar</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">A monthly content calendar tailored to your business.</p>
                  </div>
                </div>
                <div className="h-px bg-slate-100 my-3" />
                <div className="space-y-1.5">
                  {["Content themes", "Mix of posts, carousels, reels & stories", "Key dates and offers", "Approval before publishing"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0"><Check size={10} strokeWidth={3.5} /></span>
                      <span className="text-xs text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 05: Content Creation */}
              <div className="bg-white rounded-2xl border border-slate-200/70 p-4 sm:p-5 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left relative group">
                <div className="mb-2">
                  <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-600">05</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 shadow-xs">
                    <Palette size={20} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-snug">Content Creation</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">High-quality, on-brand content that looks professional.</p>
                  </div>
                </div>
                <div className="h-px bg-slate-100 my-3" />
                <div className="space-y-1.5">
                  {["Graphics design", "Captions in your brand voice", "Reels and video editing", "Hashtag and keyword selection"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-purple-500 text-white flex items-center justify-center shrink-0"><Check size={10} strokeWidth={3.5} /></span>
                      <span className="text-xs text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Phone Showcase & Floating Elements */}
            <div className="flex flex-col items-center justify-center relative py-0 order-1 lg:order-2">
              <div className="relative w-full max-w-[400px] sm:max-w-[470px] md:max-w-[510px] lg:max-w-[550px] xl:max-w-[580px] flex flex-col items-center">
                {/* Ambient glow behind phone */}
                <div className="absolute inset-0 max-w-[440px] mx-auto h-[740px] bg-gradient-to-tr from-blue-400/25 via-sky-300/20 to-purple-400/25 rounded-full blur-3xl -z-10" />

                {/* --- 6 Floating 3D/Glossy Social & Analytics Badges --- */}
                {/* 1. Instagram (Top Left) */}
                <div
                  className="absolute top-3 left-1 sm:left-0 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-2.5 sm:p-3 flex items-center justify-center text-white shadow-xl shadow-pink-500/25 -rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer"
                  title="Instagram"
                >
                  <svg className="w-full h-full fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>

                {/* 2. Facebook (Mid Left) */}
                <div
                  className="absolute top-[32%] left-0 sm:-left-2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#1877F2] p-2.5 sm:p-3 flex items-center justify-center text-white shadow-xl shadow-blue-500/25 -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer"
                  title="Facebook"
                >
                  <svg className="w-full h-full fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>

                {/* 3. YouTube (Bottom Left) */}
                <div
                  className="absolute top-[60%] left-1 sm:left-0 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FF0000] p-2.5 sm:p-3 flex items-center justify-center text-white shadow-xl shadow-red-500/25 rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer"
                  title="YouTube"
                >
                  <svg className="w-full h-full fill-white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>

                {/* 4. Analytics Chart Widget (Top Right) */}
                <div
                  className="absolute top-3 right-1 sm:right-0 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white p-2.5 sm:p-3 flex items-center justify-center shadow-xl shadow-indigo-500/15 border border-indigo-100 rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer"
                  title="Performance Analytics"
                >
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                    <path d="M3 3v18h18" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="7" y="11" width="3" height="7" rx="1.5" fill="#818CF8" />
                    <rect x="12" y="7" width="3" height="11" rx="1.5" fill="#6366F1" />
                    <rect x="17" y="4" width="3" height="14" rx="1.5" fill="#4F46E5" />
                  </svg>
                </div>

                {/* 5. LinkedIn (Mid Right) */}
                <div
                  className="absolute top-[32%] right-0 sm:-right-2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0A66C2] p-2.5 sm:p-3 flex items-center justify-center text-white shadow-xl shadow-blue-600/25 rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer"
                  title="LinkedIn"
                >
                  <svg className="w-full h-full fill-white" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>

                {/* 6. TikTok (Bottom Right) */}
                <div
                  className="absolute top-[60%] right-1 sm:right-0 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black p-2.5 sm:p-3 flex items-center justify-center shadow-xl shadow-slate-900/30 -rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer"
                  title="TikTok"
                >
                  <svg className="w-full h-full fill-white" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43 5.92 5.92 0 0 0 1.91-4.41V8.65a8.21 8.21 0 0 0 4.82 1.55V6.69z" />
                  </svg>
                </div>

                {/* Decorative Sparkles & Bursts */}
                <div className="absolute top-20 -left-10 text-blue-500 font-bold select-none pointer-events-none text-xs">
                  \ | /
                </div>
                <div className="absolute top-24 -right-10 text-indigo-400 font-bold select-none pointer-events-none text-xs">
                  / | \
                </div>
                <div className="absolute top-[74%] -left-9 text-pink-400 select-none pointer-events-none text-sm">
                  ✧
                </div>
                <div className="absolute top-[72%] -right-9 text-purple-500 select-none pointer-events-none text-sm">
                  ✦
                </div>

                {/* --- SMARTPHONE MOCKUP IMAGE --- */}
                <div className="relative w-full flex items-center justify-center">
                  <img
                    src={whatWeDoCenterImg}
                    alt="Cybaem Tech Social Media Management Showcase"
                    className="w-full max-w-[380px] sm:max-w-[450px] md:max-w-[490px] lg:max-w-[530px] xl:max-w-[560px] h-auto object-contain drop-shadow-[0_25px_50px_rgba(15,23,42,0.3)] relative z-10 select-none transform hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                </div>

                {/* --- FLOATING METRIC CARDS --- */}
                {/* 1. Total Reach (Overlapping Left) */}
                <div className="absolute bottom-14 -left-4 sm:-left-8 lg:-left-11 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.16)] border border-slate-100 flex items-center gap-3.5 text-left animate-in fade-in duration-500">
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Total Reach
                    </div>
                    <div className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                      125K
                    </div>
                    <div className="text-xs font-bold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                      <TrendingUp size={13} strokeWidth={2.5} />
                      <span>65%</span>
                    </div>
                  </div>
                  {/* Mini green bars */}
                  <div className="flex items-end gap-1.5 h-9 pl-1">
                    <span className="w-1.5 sm:w-2 h-3 bg-emerald-400 rounded-full" />
                    <span className="w-1.5 sm:w-2 h-5 bg-emerald-400 rounded-full" />
                    <span className="w-1.5 sm:w-2 h-7 bg-emerald-500 rounded-full" />
                    <span className="w-1.5 sm:w-2 h-8 bg-emerald-500 rounded-full" />
                    <span className="w-1.5 sm:w-2 h-9 bg-emerald-600 rounded-full" />
                  </div>
                </div>

                {/* 2. Engagement (Overlapping Right) */}
                <div className="absolute bottom-7 -right-4 sm:-right-8 lg:-right-11 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.16)] border border-slate-100 flex items-center gap-3.5 text-left animate-in fade-in duration-500">
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Engagement
                    </div>
                    <div className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                      4.8K
                    </div>
                    <div className="text-xs font-bold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                      <TrendingUp size={13} strokeWidth={2.5} />
                      <span>48%</span>
                    </div>
                  </div>
                  {/* Purple wave chart */}
                  <div className="w-16 h-9 flex items-center">
                    <svg viewBox="0 0 60 30" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="purpleWave" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0,22 Q 15,4 30,16 T 60,8 L 60,30 L 0,30 Z"
                        fill="url(#purpleWave)"
                      />
                      <path
                        d="M 0,22 Q 15,4 30,16 T 60,8"
                        fill="none"
                        stroke="#8B5CF6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 3 Cards (02, 04, 06) */}
            <div className="space-y-4 order-3">
              {/* Card 02: Publishing & Page Management */}
              <div className="bg-white rounded-2xl border border-slate-200/70 p-4 sm:p-5 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left relative group">
                <div className="mb-2">
                  <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-500">02</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 shadow-xs">
                    <FileEdit size={20} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-snug">Publishing & Page Management</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">We handle the daily work so your pages never go quiet.</p>
                  </div>
                </div>
                <div className="h-px bg-slate-100 my-3" />
                <div className="space-y-1.5">
                  {["Scheduled posting", "Profile setup and optimisation", "Cross-platform posting", "Real-time trend monitoring"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0"><Check size={10} strokeWidth={3.5} /></span>
                      <span className="text-xs text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 04: Community Management */}
              <div className="bg-white rounded-2xl border border-slate-200/70 p-4 sm:p-5 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left relative group">
                <div className="mb-2">
                  <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-500">04</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 shadow-xs">
                    <Users size={20} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-snug">Community Management</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">We monitor comments and messages and respond in your brand voice.</p>
                  </div>
                </div>
                <div className="h-px bg-slate-100 my-3" />
                <div className="space-y-1.5">
                  {["Reply to comments and DMs", "Personalized responses", "Keep genuine engagement alive", "Maintain a positive brand image"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0"><Check size={10} strokeWidth={3.5} /></span>
                      <span className="text-xs text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 06: Reporting & Improvement */}
              <div className="bg-white rounded-2xl border border-slate-200/70 p-4 sm:p-5 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left relative group">
                <div className="mb-2">
                  <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-600">06</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 shadow-xs">
                    <BarChart3 size={20} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-snug">Reporting & Improvement</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">Clear reports so you always know what's working.</p>
                  </div>
                </div>
                <div className="h-px bg-slate-100 my-3" />
                <div className="space-y-1.5">
                  {["Post performance", "Profile and audience growth", "Insights and recommendations", "Monthly review and next steps"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0"><Check size={10} strokeWidth={3.5} /></span>
                      <span className="text-xs text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Capabilities / Stats Strip */}
          <div className="mt-8 sm:mt-10 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-xs">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {/* Stat 1: Brands Managed */}
              <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <Users size={22} strokeWidth={2.2} />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
                    5K+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    Brands Managed
                  </div>
                </div>
              </div>

              {/* Stat 2: Average Growth */}
              <div className="flex items-center gap-3.5 pt-4 md:pt-0 sm:px-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <TrendingUp size={22} strokeWidth={2.2} />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
                    300%
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    Average Growth
                  </div>
                </div>
              </div>

              {/* Stat 3: Engagement Generated */}
              <div className="flex items-center gap-3.5 pt-4 md:pt-0 sm:px-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 shadow-2xs">
                  <Heart size={22} strokeWidth={2.2} className="fill-rose-500 text-rose-500" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
                    1M+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    Engagement Generated
                  </div>
                </div>
              </div>

              {/* Stat 4: Client Satisfaction */}
              <div className="flex items-center gap-3.5 pt-4 md:pt-0 sm:px-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center shrink-0 shadow-2xs">
                  <Star size={22} strokeWidth={2.2} className="fill-blue-600 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
                    98%
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW WE WORK: A SIMPLE PROCESS FOR STEADY GROWTH --- */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Header */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-0.5 bg-blue-600 inline-block" />
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary">
              HOW WE WORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            A Simple Process for Steady Growth
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-16">
            We follow a clear and proven process to ensure your social media looks great and delivers real results.
          </p>

          {/* 5-Step Connected Timeline */}
          <div className="relative">
            {/* Horizontal Line across timeline */}
            <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-0.5 bg-blue-200 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {[
                {
                  step: 1,
                  title: "Review",
                  desc: "We look at your current pages, brand and competitors.",
                  icon: UserCheck,
                },
                {
                  step: 2,
                  title: "Plan",
                  desc: "We choose platforms, themes and a posting schedule.",
                  icon: CalendarDays,
                },
                {
                  step: 3,
                  title: "Create",
                  desc: "We design and write the content for your approval.",
                  icon: PenTool,
                },
                {
                  step: 4,
                  title: "Publish & engage",
                  desc: "We post on schedule and manage responses.",
                  icon: Share2,
                },
                {
                  step: 5,
                  title: "Report",
                  desc: "You see results and next steps every month.",
                  icon: FileText,
                },
              ].map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.step} className="flex flex-col items-center text-center group">
                    {/* Circle Node with Number */}
                    <div className="w-14 h-14 rounded-full bg-primary text-white font-bold text-base flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 mb-4 cursor-pointer">
                      {item.step}
                    </div>

                    {/* Step Icon */}
                    <div className="w-8 h-8 flex items-center justify-center text-primary mb-2">
                      <IconComp size={22} />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                      {item.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-slate-600 leading-relaxed max-w-[200px]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- FREQUENTLY ASKED QUESTIONS --- */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading + 3D Speech Bubble Image */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-0.5 bg-blue-600 inline-block" />
                <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary">
                  FREQUENTLY ASKED QUESTIONS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Got Questions?<br />We've Got Answers.
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8">
                Here are some of the most common questions about our social media management service.
              </p>

              {/* 3D FAQ Bubbles Graphic */}
              <div className="relative max-w-sm mx-auto lg:mx-0 group">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-2xl transform scale-90 -z-10" />
                <img
                  src={faqBubblesImg}
                  alt="Frequently Asked Questions Illustration"
                  className="w-full h-auto object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500 ease-out"
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

      {/* --- EXPLORE RELATED SERVICES --- */}
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
              Complementary Services for Better Results
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              Combine your social media strategy with performance ads and search visibility to scale faster.
            </p>
          </div>

          {/* 2 Side-by-Side Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Related Card 1: Performance Marketing */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                  Performance Marketing
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  Want your posts to reach more of the right people?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Our Performance Marketing service runs Meta and Google campaigns built for quality leads.
                </p>

                <Link
                  to="/digital-growth/performance-marketing"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-blue-800 transition-colors mb-6 group/link"
                >
                  <span>Explore Performance Marketing</span>
                  <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Performance Marketing Image Preview */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/9] w-full bg-slate-100">
                <img
                  src={relatedPerfMarketingImg}
                  alt="Performance Marketing Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Related Card 2: SEO, ASO & GEO */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                  SEO, ASO & GEO
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  Want your content to bring in search traffic too?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Our SEO, AEO & GEO service helps your website rank, so your brand is found beyond social media.
                </p>

                <Link
                  to="/digital-growth/seo-aeo-geo"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-blue-800 transition-colors mb-6 group/link"
                >
                  <span>Explore SEO, ASO & GEO</span>
                  <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* SEO Image Preview */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/9] w-full bg-slate-100">
                <img
                  src={relatedSeoSearchImg}
                  alt="SEO, AEO & GEO Services Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SITE FOOTER --- */}
      <Footer />
    </div>
  );
}
