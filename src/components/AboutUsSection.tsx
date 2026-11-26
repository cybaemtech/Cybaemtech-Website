import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Laptop,
} from "lucide-react";
import aboutUsTeamImg from "@/assets/about-us-team.jpg";

export default function AboutUsSection() {
  return (
    <section id="about-us" className="relative pt-12 pb-10 sm:py-20 lg:py-24 bg-white overflow-hidden border-b border-slate-100">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ── LEFT COLUMN: Professional Software & Collaboration Image ── */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[540px] lg:max-w-none">
              {/* Main Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200/80 aspect-[4/3.2] sm:aspect-[4/4] lg:aspect-[4/4.85] bg-slate-100 group">
                <img
                  src={aboutUsTeamImg}
                  alt="Cybaem Tech Custom Software Development and Engineering Team in Pune"
                  className="w-full h-full object-cover object-[center_22%] group-hover:scale-104 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent pointer-events-none" />
              </div>

       

         
            </div>
          </div>

          {/* ── RIGHT COLUMN: Section Title & Software-Focused Content ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker / Subtitle */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[2.5px] bg-primary rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-primary">
                ABOUT CYBAEM TECH
              </span>
            </div>

            {/* Main Title highlighting Software Development */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[38px] xl:text-[40px] font-bold text-[#0a1435] tracking-tight leading-[1.2] mb-5">
              Custom <span className="text-primary">Software Development</span> &amp; Digital Transformation Partner
            </h2>

            {/* Content Paragraphs with Software Development Focus */}
            <div className="space-y-3.5 text-slate-600 text-sm sm:text-[15px] lg:text-[15.5px] leading-relaxed">
              <p className="font-semibold text-slate-900 text-[15px] sm:text-[16px] leading-snug">
                We are a leading custom software development and digital transformation company delivering secure, scalable, and future-ready technology solutions to businesses worldwide.
              </p>
              <p>
                Headquartered in Hinjewadi, Pune and serving globally, we partner with startups, growing enterprises, and established organizations to engineer high-performance software systems, modernize IT infrastructure, strengthen cybersecurity, and accelerate digital growth through strategic technology implementation.
              </p>
              <p>
                Our primary expertise spans <strong className="text-slate-800 font-semibold">custom software development, enterprise web &amp; mobile platforms</strong>, cloud architecture, managed IT services, and digital transformation — ensuring businesses operate efficiently, securely, and competitively in an evolving digital landscape.
              </p>
            </div>

            {/* 3 Core Service Pillars: Just Icon & Small Title, No Description */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 pb-1 border-t border-slate-100 mt-5">
              <Link
                to="/software-platforms"
                className="flex items-center gap-3 p-3 sm:py-3 sm:px-3.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-200 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Code2 size={16} />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-primary transition-colors">
                  Software &amp; Platforms
                </span>
              </Link>

              <Link
                to="/cloud-security"
                className="flex items-center gap-3 p-3 sm:py-3 sm:px-3.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-200 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={16} />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-primary transition-colors">
                  Cloud &amp; Security
                </span>
              </Link>

              <Link
                to="/digital-growth"
                className="flex items-center gap-3 p-3 sm:py-3 sm:px-3.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-200 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <TrendingUp size={16} />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-primary transition-colors">
                  Growth &amp; Revenue
                </span>
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-5">
              <Link
                to="/software-platforms/enterprise-software"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold shadow-md shadow-primary/20 hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>Explore Software Solutions</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-slate-700 hover:text-primary hover:border-primary/40 bg-white hover:bg-slate-50 text-sm font-semibold transition-all active:scale-95 cursor-pointer"
              >
                <span>Partner With Us</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
