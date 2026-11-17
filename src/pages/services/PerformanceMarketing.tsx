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
  Search,
  Target,
  BarChart3,
  TrendingUp,
  FileText,
  FileSpreadsheet,
  Rocket,
} from "lucide-react";

// Performance Marketing Assets
import heroMarketingImg from "@/assets/performance marketing/digital-marketing-hero.png";
import googleAdsImg from "@/assets/performance marketing/google-ads.png";
import metaAdsImg from "@/assets/performance marketing/facebook-instra.png";
import conversionTrackingImg from "@/assets/performance marketing/conversation-tracking.png";
import landingPageImg from "@/assets/performance marketing/landing-page.png";
import budgetControlImg from "@/assets/performance marketing/buget control and optimization.png";
import faqBubblesImg from "@/assets/performance marketing/FAQ.png";
import seoPreviewImg from "@/assets/performance marketing/SEO_AGO.png";
import socialPreviewImg from "@/assets/performance marketing/Social-media-mng.png";

export default function PerformanceMarketing() {
  const { openConsultationModal } = useConsultationModal();

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<string>("faq-0");

  const faqs = [
    {
      q: "How soon will I see results from paid ads?",
      a: "In most cases, you can start seeing initial results like website traffic and leads within 1-2 weeks. However, consistent and optimized performance usually takes 4-8 weeks, depending on your industry, budget and campaign goals.",
    },
    {
      q: "How much should I spend on ads?",
      a: "Your budget depends on your industry, target geography, and business goals. We typically recommend starting with a monthly ad spend that provides enough statistical data (typically ₹30,000 to ₹1,00,000+) to test keywords, ad creatives, and audiences before aggressively scaling.",
    },
    {
      q: "Do you charge a percentage of ad spend?",
      a: "We believe in transparent pricing. Depending on your business stage, we offer fixed monthly retainers or structured tier-based fees based on spend. We never take hidden markups or obscure your ad spend.",
    },
    {
      q: "Why do my ads get clicks but no leads?",
      a: "High clicks without conversions usually point to mismatched keyword intent, poor landing page speed, weak value proposition, or complicated forms. We optimize the entire end-to-end journey from ad creative to landing page form completion.",
    },
    {
      q: "Which is better for my business, Google Ads or Meta Ads?",
      a: "Google Ads captures high intent when users are actively searching for your solutions. Meta Ads (Facebook & Instagram) builds brand awareness, visual desire, and powerful retargeting. Most scaling businesses achieve peak ROI by combining both.",
    },
    {
      q: "Can you take over an account that is already running?",
      a: "Yes. We conduct an in-depth audit of your existing accounts to uncover wasted spend, negative keyword opportunities, and conversion tracking leaks, and then restructure your campaigns for immediate performance improvements.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      <SEOHead
        title="Google Ads & Meta Ads Management | CybaemTech"
        description="We manage Google Ads and Meta Ads built for quality leads, not empty clicks. Get more leads and sales from every rupee you spend."
        canonical="https://www.cybaemtech.com/digital-growth/performance-marketing"
      />

      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/70 to-white overflow-hidden">
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
                  PERFORMANCE MARKETING
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6">
                Pay for Customers, <br />
                <span className="text-primary">Not Clicks.</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                Ad spend should lead to enquiries and sales. We run Google and Meta campaigns
                that focus on lead quality and profitable growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                <button
                  onClick={openConsultationModal}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#0A101D] hover:bg-slate-800 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all group cursor-pointer"
                >
                  <span>Get a Free Ad Account Audit</span>
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

            {/* Right Hero Visual */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[600px] group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-sky-400/15 to-transparent rounded-3xl blur-2xl transform scale-95 -z-10" />
                <img
                  src={heroMarketingImg}
                  alt="Campaign Performance Dashboard, Google Ads and Meta Ads Management"
                  className="w-full h-auto object-contain drop-shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Trust Capabilities Strip */}
          <div className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Item 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 192 192" className="w-5 h-5">
                  <path
                    fill="#FBBC04"
                    d="M47.7 20.3c-14.7 8.5-19.7 27.3-11.2 42l48.2 83.5c8.5 14.7 27.3 19.7 42 11.2 14.7-8.5 19.7-27.3 11.2-42L89.7 31.5c-8.5-14.7-27.3-19.7-42-11.2z"
                  />
                  <path
                    fill="#4285F4"
                    d="M149.7 101.5l-48.2-83.5c-8.5-14.7-27.3-19.7-42-11.2-14.7 8.5-19.7 27.3-11.2 42l48.2 83.5c8.5 14.7 27.3 19.7 42 11.2 14.7-8.5 19.7-27.3 11.2-42z"
                  />
                  <circle fill="#34A853" cx="54.2" cy="144.5" r="26.5" />
                </svg>
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">
                  Google Ads
                </span>
                <span className="text-[11px] text-slate-500">Certified & Experienced</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 16.5c-1.8 0-3.3-1.1-4.2-2.7C6.6 11.7 5.2 10 3.7 10 2.5 10 1.5 11 1.5 12.2c0 2.7 2.1 5.3 4.9 5.3 2 0 3.6-1.1 4.7-2.6 1.1 1.5 2.7 2.6 4.7 2.6 2.8 0 4.9-2.6 4.9-5.3 0-1.2-1-2.2-2.2-2.2-1.5 0-2.9 1.7-4.1 3.8-.9 1.6-2.4 2.7-4.4 2.7zm0-9c-1.8 0-3.3 1.1-4.2 2.7C6.6 12.3 5.2 14 3.7 14 2.5 14 1.5 13 1.5 11.8c0-2.7 2.1-5.3 4.9-5.3 2 0 3.6 1.1 4.7 2.6 1.1-1.5 2.7-2.6 4.7-2.6 2.8 0 4.9 2.6 4.9 5.3 0 1.2-1 2.2-2.2 2.2-1.5 0-2.9-1.7-4.1-3.8-.9-1.6-2.4-2.7-4.4-2.7z" />
                </svg>
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">
                  Meta Ads
                </span>
                <span className="text-[11px] text-slate-500">High Performing Campaigns</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <BarChart3 size={18} strokeWidth={2.2} />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">
                  Conversion Tracking
                </span>
                <span className="text-[11px] text-slate-500">End-to-end Measurement</span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Target size={18} strokeWidth={2.2} />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">
                  ROI-focused Optimization
                </span>
                <span className="text-[11px] text-slate-500">More Leads, Lower Costs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY DOES PERFORMANCE MARKETING MATTER? --- */}
      <section className="py-20 sm:py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-0.5 bg-blue-600 inline-block" />
                <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary">
                  WHY DOES PERFORMANCE MARKETING MATTER?
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Turn Ad Spend into <br />
                Real Business Growth
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Performance marketing helps you reach the right audience, generate high-quality
                leads and drive measurable revenue growth with complete transparency.
              </p>
            </div>

            {/* Right 3 Value Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="flex flex-col text-left">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-4 shrink-0">
                  <BarChart3 size={20} strokeWidth={2.2} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                  Track what matters
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Focus on leads, sales and ROI instead of vanity metrics.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col text-left">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-4 shrink-0">
                  <Target size={20} strokeWidth={2.2} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                  Spend where it pays
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Reach the right audience with smarter targeting and data.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col text-left">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-4 shrink-0">
                  <FileText size={20} strokeWidth={2.2} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                  Report in plain language
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Get clear insights and actionable recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT WE DO: END-TO-END PERFORMANCE MARKETING SERVICES --- */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-left mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-0.5 bg-blue-600 inline-block" />
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary">
                WHAT WE DO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              End-to-End Performance Marketing Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              From strategy to execution, we manage everything you need to generate leads and grow your business.
            </p>
          </div>

          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4.5 mb-4 sm:mb-4.5">
            {/* Card 01: Google Ads */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 pt-3 sm:pt-3.5 px-4 sm:px-5 pb-4 sm:pb-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group">
              {/* Visual Header */}
              <div className="w-full flex items-center justify-center mb-1.5 aspect-[16/10] overflow-hidden">
                <img
                  src={googleAdsImg}
                  alt="Google Ads Search & Display Campaigns"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Number Badge & Title */}
              <div className="flex items-start gap-2 mb-1 sm:min-h-[3rem]">
                <span className="w-6 h-6 rounded-full bg-blue-50 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  01
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                  Google Ads
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2.5 sm:min-h-[2.5rem]">
                High-intent search and display campaigns to capture customers actively looking for your products or services.
              </p>

              {/* Checklist */}
              <div className="space-y-2 pt-2.5 border-t border-slate-100">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Search & Display Campaigns</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Keyword & Competitor Research</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Lead Focused Ad Copy & Creatives</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Ad Extensions & Copy Testing</span>
                </div>
              </div>
            </div>

            {/* Card 02: Meta Ads (Facebook & Instagram) */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 pt-3 sm:pt-3.5 px-4 sm:px-5 pb-4 sm:pb-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group">
              {/* Visual Header */}
              <div className="w-full flex items-center justify-center mb-1.5 aspect-[16/10] overflow-hidden">
                <img
                  src={metaAdsImg}
                  alt="Meta Ads Facebook & Instagram Lead Generation"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Number Badge & Title */}
              <div className="flex items-start gap-2 mb-1 sm:min-h-[3rem]">
                <span className="w-6 h-6 rounded-full bg-blue-50 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  02
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                  Meta Ads (Facebook & Instagram)
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2.5 sm:min-h-[2.5rem]">
                Reach and engage the right audience with highly targeted Facebook and Instagram campaigns.
              </p>

              {/* Checklist */}
              <div className="space-y-2 pt-2.5 border-t border-slate-100">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Audience Targeting & Retargeting</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Engaging Ad Creatives (Images & Videos)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Lead Generation Campaigns</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Meta Pixel & CAPI Event Setup</span>
                </div>
              </div>
            </div>

            {/* Card 03: Conversion Tracking & Measurement */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 pt-3 sm:pt-3.5 px-4 sm:px-5 pb-4 sm:pb-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group">
              {/* Visual Header */}
              <div className="w-full flex items-center justify-center mb-1.5 aspect-[16/10] overflow-hidden">
                <img
                  src={conversionTrackingImg}
                  alt="Conversion Tracking and Measurement Analytics"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Number Badge & Title */}
              <div className="flex items-start gap-2 mb-1 sm:min-h-[3rem]">
                <span className="w-6 h-6 rounded-full bg-blue-50 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  03
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                  Conversion Tracking & Measurement
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2.5 sm:min-h-[2.5rem]">
                Accurate tracking so you know what's working and can make data-driven decisions.
              </p>

              {/* Checklist */}
              <div className="space-y-2 pt-2.5 border-t border-slate-100">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Google Tag Manager Setup</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Conversion Tracking (GA4)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Call & Form Tracking</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Custom Event Tracking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 2 Wider Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4.5">
            {/* Card 04: Landing Page & Offer Guidance */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 pt-3 sm:pt-3.5 px-4 sm:px-5 pb-4 sm:pb-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group">
              {/* Visual Header */}
              <div className="w-full flex items-center justify-center mb-1.5 aspect-[2.2/1] overflow-hidden">
                <img
                  src={landingPageImg}
                  alt="Conversion-Focused Landing Pages and Offer Design"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Number Badge & Title */}
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-blue-50 text-primary font-bold text-xs flex items-center justify-center shrink-0">
                  04
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                  Landing Page & Offer Guidance
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2.5">
                Get higher conversions with well-designed landing pages and clear offers tailored to your audience.
              </p>

              {/* Checklist */}
              <div className="space-y-2 pt-2.5 border-t border-slate-100">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Conversion-Focused Landing Pages</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Compelling Offer & Messaging</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>A/B Testing for Better Results</span>
                </div>
              </div>
            </div>

            {/* Card 05: Budget Control & Optimization */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 pt-3 sm:pt-3.5 px-4 sm:px-5 pb-4 sm:pb-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group">
              {/* Visual Header */}
              <div className="w-full flex items-center justify-center mb-1.5 aspect-[2.2/1] overflow-hidden">
                <img
                  src={budgetControlImg}
                  alt="Budget Control and Cost Per Lead Optimization"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Number Badge & Title */}
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-blue-50 text-primary font-bold text-xs flex items-center justify-center shrink-0">
                  05
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                  Budget Control & Optimization
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2.5">
                Continuous optimization to improve performance and get more leads within your budget.
              </p>

              {/* Checklist */}
              <div className="space-y-2 pt-2.5 border-t border-slate-100">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Regular Performance Analysis</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>Audience & Bidding Optimization</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span>ROAS and Cost per Lead Improvement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW WE WORK: A SIMPLE PROCESS FOR MEASURABLE RESULTS --- */}
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
            A Simple Process for Measurable Results
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-16">
            We follow a proven, transparent process to ensure your ad spend delivers real business outcomes.
          </p>

          {/* 5-Step Connected Timeline */}
          <div className="relative">
            {/* Horizontal Line across timeline */}
            <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-0.5 bg-blue-200 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {[
                {
                  step: 1,
                  title: "Audit",
                  desc: "We analyze your business, current ad account and competition.",
                  icon: Search,
                },
                {
                  step: 2,
                  title: "Plan",
                  desc: "We create a tailored strategy with clear goals and targeting plan.",
                  icon: FileSpreadsheet,
                },
                {
                  step: 3,
                  title: "Launch & test",
                  desc: "We set up campaigns, creatives and tracking, then test different audiences and offers.",
                  icon: Rocket,
                },
                {
                  step: 4,
                  title: "Optimize & scale",
                  desc: "We continuously optimize based on data to lower costs and increase leads.",
                  icon: TrendingUp,
                },
                {
                  step: 5,
                  title: "Report",
                  desc: "You get regular, easy-to-understand reports with clear insights and next steps.",
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

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
                Got Questions?<br />We've Got Answers.
              </h2>

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
              Explore Related Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              Combine performance marketing with other digital services to achieve better and more sustainable results.
            </p>
          </div>

          {/* 2 Side-by-Side Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Related Card 1: SEO, ASO & GEO */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                  SEO, ASO & GEO
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  Want lower ad costs over time?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Improve your organic visibility and reduce dependence on paid ads with our SEO services.
                </p>

                <Link
                  to="/digital-growth/seo-aeo-geo"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-blue-800 transition-colors mb-6 group/link"
                >
                  <span>Explore SEO Services</span>
                  <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* SEO Image Preview */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/9] w-full bg-slate-100">
                <img
                  src={seoPreviewImg}
                  alt="SEO Services Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Related Card 2: Social Media Management */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                  Social Media Management
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  Need content for your ads and brand?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Get consistent, high-quality content to support your paid campaigns and build your brand.
                </p>

                <Link
                  to="/digital-growth/social-media-management"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-blue-800 transition-colors mb-6 group/link"
                >
                  <span>Explore Social Media Management</span>
                  <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Social Media Image Preview */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/9] w-full bg-slate-100">
                <img
                  src={socialPreviewImg}
                  alt="Social Media Management Preview"
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
