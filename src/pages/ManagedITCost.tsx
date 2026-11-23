import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { managedITCostSeoData } from "@/data/seo/managedITCostSeo";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  Radio,
  Server,
  Cloud,
  ShieldCheck,
  Globe2,
  FileCheck2,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Check,
  AlertCircle,
  Layers,
  Sparkles,
} from "lucide-react";

// Service Tiers
const serviceTiers = [
  {
    title: "Standard Coverage",
    badge: "Business Hours",
    icon: Clock,
    description:
      "Focuses on core infrastructure upkeep during standard business hours, including basic server/endpoint patch management, helpdesk support, and fundamental network monitoring.",
  },
  {
    title: "Comprehensive Coverage (24/7 NOC/SOC)",
    badge: "Continuous Operations",
    icon: Radio,
    description:
      "Adds continuous, round-the-clock Network Operations Center (NOC) and Security Operations Center (SOC) monitoring, active cybersecurity defense, VAPT execution, and ongoing IT consulting and technology roadmap advisory.",
  },
];

// Primary Technical Drivers
const technicalDrivers = [
  {
    title: "Endpoint, Server, and User Volume:",
    desc: "The primary pricing driver. Total monthly fees scale directly with total device and user counts within any selected tier.",
    icon: Server,
  },
  {
    title: "Cloud Infrastructure Scope:",
    desc: "Managing AWS or Azure footprints, including cloud resource provisioning, cost governance, and active performance monitoring, adds cost proportional to total cloud workload size.",
    icon: Cloud,
  },
  {
    title: "24/7 vs. Business-Hours Coverage:",
    desc: "Transitioning from standard business-hour support to continuous, 24/7/365 NOC/SOC coverage represents the single highest cost step-up between tiers.",
    icon: Clock,
  },
  {
    title: "Bundled Cybersecurity Depth:",
    desc: (
      <>
        Whether Vulnerability Assessment and Penetration Testing (
        <a
          href="https://www.wikidata.org/wiki/Q1400839"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
        >
          VAPT
          <ExternalLink size={12} />
        </a>
        ) and 24/7 threat monitoring are bundled into the primary agreement or billed separately affects initial baseline quotes.
      </>
    ),
    icon: ShieldCheck,
  },
  {
    title: "Geographic Spread and Physical Sites:",
    desc: "Multi-location enterprises introduce network routing complexity, SD-WAN requirements, and potential on-site engineering support needs.",
    icon: Globe2,
  },
  {
    title: "Regulatory and Compliance Scope:",
    desc: "Industry-specific data handling obligations and regulatory frameworks, such as India's DPDP Act, 2023, require dedicated audit logging, reporting, and compliance support.",
    icon: FileCheck2,
  },
];

// 4 Steps to Accurate Quote
const procurementSteps = [
  "Document exact workstation, server, user, and cloud workload counts across all business locations.",
  "Determine which legal, sectoral, or data privacy compliance rules apply to your organization.",
  "Ask for an initial infrastructure audit rather than relying on unverified per-device averages, which often understate costs for multi-site or hybrid cloud environments.",
  "Compare vendor quotes against a formal vendor-evaluation checklist to ensure lower initial prices do not obscure a narrower operational scope or weaker SLA terms.",
];

export default function ManagedITCost() {
  const { openConsultationModal } = useConsultationModal();

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-primary selection:text-white font-sans">
      {/* SEO Head with Schema Markup */}
      <SEOHead {...managedITCostSeoData} />

      <Navbar />

      {/* ── ARTICLE CONTAINER ── */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 lg:pb-16">
        {/* Header / Intro */}
        <header className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 border border-blue-200/80 mb-4">
            Financial &amp; Procurement Analysis
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-6 font-display">
            Managed IT Infrastructure Cost for a mid-sized company
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed border-l-4 border-primary pl-5 sm:pl-6 bg-slate-50/60 py-4 rounded-r-xl">
            <p>
              Managed IT infrastructure pricing varies based on system scale, service scope, and
              continuous monitoring requirements. Understanding how service tiers are structured
              and the operational drivers that shift monthly costs helps you evaluate quotes
              accurately and align your technology spend with enterprise risk tolerance.
            </p>
            <p>
              Below is an overview of cost tiers, operational variables, and procurement best
              practices, drawn from how service agreements are structured under Cybaem Tech's{" "}
              <Link
                to="/cloud-security/it-infrastructure-services"
                className="text-primary font-semibold hover:underline"
              >
                managed IT infrastructure services
              </Link>
              .
            </p>
          </div>
        </header>

        {/* ── SECTION: UNDERSTANDING SERVICE TIERS AND COVERAGE SCOPE ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            Understanding Service Tiers and Coverage Scope
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            Service plans generally scale across distinct coverage levels depending on system
            complexity and business criticality:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {serviceTiers.map((tier, idx) => {
              const TierIcon = tier.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-primary/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                        <TierIcon size={22} />
                      </div>
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        {tier.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                      {tier.title}:
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-5 sm:p-6 bg-blue-50/70 rounded-2xl border border-blue-200/80 mb-6">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-0">
              Transitioning from standard coverage to a high-availability hybrid environment requires
              matching your technical requirements with an agile operational strategy. Learn how to map
              your technical roadmap step-by-step in{" "}
              <Link
                to="/case-study/eliminating-downtime-risk-and-scaling-hybrid-cloud"
                className="text-primary font-bold hover:underline inline-flex items-center gap-1"
              >
                The Complete Guide to Managed IT Infrastructure Modernization
                <ArrowRight size={14} />
              </Link>
              .
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-900">Note:</strong> Actual figures vary substantially by
            user count, cloud footprint, and industry. Treat these tiers as a framework to understand
            relative scaling between coverage levels rather than a direct commercial quote. A scoped
            technical assessment is the only reliable way to get an accurate number for your
            environment.
          </div>
        </section>

        {/* ── SECTION: PRIMARY TECHNICAL DRIVERS THAT IMPACT FINAL COST ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            Primary Technical Drivers That Impact Final Cost
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            Commercial quotes move up or down based on specific operational parameters within your
            organization:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {technicalDrivers.map((driver, idx) => {
              const DriverIcon = driver.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-primary/60 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                      <DriverIcon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-display">
                      {driver.title}
                    </h3>
                  </div>
                  <div className="text-sm text-slate-600 leading-relaxed">{driver.desc}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── SECTION: WHY A BUNDLED RETAINER DELIVERS GREATER COST EFFICIENCY ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            Why a Bundled Retainer Delivers Greater Cost Efficiency
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
            Procuring network management, cloud administration, and cybersecurity independently from
            separate specialized vendors creates operational silos and inflates total expenditure.
            Individual vendors duplicate efforts across monitoring tools, system patching, and
            incident response workflows.
          </p>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            Consolidating these functions under a single managed IT infrastructure retainer eliminates
            redundant administrative costs while establishing a single point of operational
            accountability. Review our breakdown on{" "}
            <Link
              to="/managed-it/what-is-included-in-managed-it-infrastructure-package"
              className="text-primary font-bold hover:underline inline-flex items-center gap-1"
            >
              What's Included in a Typical Managed IT Infrastructure Package
              <ArrowRight size={14} />
            </Link>{" "}
            to see how these core pillars integrate into a single framework.
          </p>
        </section>

        {/* ── SECTION: FOUR STEPS TO GET AN ACCURATE INFRASTRUCTURE QUOTE ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            Four Steps to Get an Accurate Infrastructure Quote
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            To receive an accurate, fully scoped proposal for your organization, follow this
            procurement process:
          </p>

          <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
            {procurementSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION: FREQUENTLY ASKED QUESTIONS ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-6 pb-3 border-b border-slate-100">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible defaultValue="faq-1" className="space-y-4">
            <AccordionItem
              value="faq-1"
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl px-6 py-2 overflow-hidden shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-base sm:text-lg text-slate-900 hover:text-primary py-4 hover:no-underline">
                Is managed IT infrastructure more expensive than hiring an in-house IT team?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 pb-4 border-t border-slate-200/60 space-y-2">
                <p>
                  No. Managed services are generally significantly more cost-effective than replicating
                  equivalent multi-disciplinary expertise across network engineering, cloud
                  architecture, cybersecurity, and Microsoft 365 administration with internal full-time
                  hires.
                </p>
                <p>
                  Managed providers spread the cost of high-level specialists across multiple clients.
                  Read our guide on the{" "}
                  <Link
                    to="/managed-it/benefits-outsourcing-managed-it-infrastructure-services"
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    benefits of outsourcing managed IT infrastructure services
                    <ArrowRight size={13} />
                  </Link>{" "}
                  for a detailed comparison.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-2"
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl px-6 py-2 overflow-hidden shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-base sm:text-lg text-slate-900 hover:text-primary py-4 hover:no-underline">
                Does the average cost differ much by industry?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 pb-4 border-t border-slate-200/60">
                Yes. Organizations in heavily regulated sectors (such as financial services, healthcare
                platforms, and SaaS companies managing customer data) typically incur higher costs than
                lower-risk industries at the same headcount, primarily due to advanced cybersecurity
                monitoring and compliance auditing requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-3"
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl px-6 py-2 overflow-hidden shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-base sm:text-lg text-slate-900 hover:text-primary py-4 hover:no-underline">
                Should a mid-sized company always choose the comprehensive 24/7 tier?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 pb-4 border-t border-slate-200/60">
                Not necessarily. Selecting the right coverage level depends on your cloud footprint,
                regulatory exposure, and operational downtime tolerance. A scoped technical audit
                should dictate your coverage requirements rather than company size alone.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* ── SECTION: OPTIMIZE YOUR INFRASTRUCTURE INVESTMENT ── */}
        <section className="bg-gradient-to-br from-slate-900 via-primary to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display mb-4">
              Optimize Your Infrastructure Investment
            </h2>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-4">
              Determining the right managed IT coverage model requires matching your technical scope,
              compliance exposure, and risk tolerance with a predictable commercial structure.
            </p>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-8">
              Schedule a consultation call with{" "}
              <a
                href="https://www.cybaemtech.com/"
                className="text-cyan-300 font-bold underline hover:text-white transition-colors"
              >
                Cybaem Tech’s
              </a>{" "}
              engineering team to conduct an initial scoped audit, evaluate your coverage
              requirements, and build a transparent managed IT infrastructure proposal tailored to your
              business goals.
            </p>

            <div>
              <button
                onClick={() => openConsultationModal()}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-blue-50 font-bold text-sm sm:text-base transition-all shadow-md active:scale-[0.99]"
              >
                Schedule Consultation Call
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}
