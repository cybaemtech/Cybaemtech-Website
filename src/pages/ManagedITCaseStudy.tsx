import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { managedITCaseStudySeoData } from "@/data/seo/managedITCaseStudySeo";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import {
  ShieldAlert,
  Server,
  Cloud,
  Network,
  Radio,
  FileCheck2,
  TrendingDown,
  Clock,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Check,
  Building2,
  Lock,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";

// Pre-transition Challenges
const challenges = [
  {
    title: "Frequent Unplanned Downtime:",
    desc: "Unmonitored server loads caused database crashes during peak factory shifts, directly impacting production revenue.",
    icon: ShieldAlert,
    badge: "Production Loss",
  },
  {
    title: "Inconsistent Scope & Vendors:",
    desc: "Hardware maintenance, firewall licensing, and cloud hosting were handled by fragmented vendors, leading to delays when issues occurred.",
    icon: Layers,
    badge: "Vendor Sprawl",
  },
  {
    title: "Unpredictable IT Costs:",
    desc: "Emergency break-fix bills and hardware refresh cycles made budgeting difficult.",
    icon: TrendingDown,
    badge: "Budget Volatility",
  },
];

// Implementation Roadmap steps
const implementationSteps = [
  {
    phase: "1. SECURE",
    color: "from-blue-600 to-blue-700",
    bgBadge: "bg-blue-50 text-blue-700 border-blue-200",
    summary:
      "We evaluated single points of failure, calculated exact Recovery Time Objective (RTO) and Recovery Point Objective (RPO) baselines, and applied endpoint protection.",
    items: ["Baseline Audit", "VAPT Testing", "RTO/RPO Set"],
  },
  {
    phase: "2. SCALE",
    color: "from-teal-600 to-cyan-700",
    bgBadge: "bg-teal-50 text-teal-700 border-teal-200",
    summary:
      "Also restructured network connectivity using SD-WAN across all three locations and migrated core workloads to AWS and Microsoft Azure.",
    items: ["Hybrid Azure Migration", "SD-WAN Setup", "Workload Optimization"],
  },
  {
    phase: "3. SUPPORT",
    color: "from-emerald-600 to-green-700",
    bgBadge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    summary:
      "And integrated all endpoints into Cybaem Tech's Network Operations Center (NOC) and Security Operations Center (SOC) for proactive threat detection.",
    items: ["24/7 NOC/SOC", "SLA Commitments", "Monthly KPIs"],
  },
];

// Measurable Business Outcomes
// const businessOutcomes = [
//   {
//     metric: "99.9%",
//     title: "Zero Unplanned Downtime",
//     description:
//       "Achieved 99.9% uptime across all production facilities within the first 90 days.",
//     icon: Zap,
//     color: "text-blue-600",
//     bgColor: "bg-blue-50 border-blue-200/80",
//   },
//   {
//     metric: "30%",
//     title: "Operational Savings",
//     description:
//       "Replaced variable capital expenditures with a predictable retainer model.",
//     icon: TrendingDown,
//     color: "text-emerald-600",
//     bgColor: "bg-emerald-50 border-emerald-200/80",
//   },
//   {
//     metric: "100%",
//     title: "Full Regulatory Readiness",
//     description:
//       "Established auditable security controls aligning with India's DPDP Act and ISO 27001 standards.",
//     icon: FileCheck2,
//     color: "text-purple-600",
//     bgColor: "bg-purple-50 border-purple-200/80",
//   },
// ];

export default function ManagedITCaseStudy() {
  const { openConsultationModal } = useConsultationModal();

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-primary selection:text-white font-sans">
      {/* SEO Head with Schema Markup */}
      <SEOHead {...managedITCaseStudySeoData} />

      <Navbar />

      {/* ── ARTICLE CONTAINER ── */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 lg:pb-16">
        {/* Header / Intro */}
        <header className="mb-14">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 border border-blue-200/80">
              <Building2 size={13} />
              Enterprise Case Study
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200">
              Chakan MIDC, Pune
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200">
              Heavy Manufacturing
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-6 font-display">
            Eliminating Downtime Risk &amp; Scaling Hybrid Cloud for a Mid-Sized Enterprise
          </h1>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                Client Scale
              </span>
              <span className="text-base sm:text-lg font-bold text-slate-900">
                3 Production Plants • 120 Endpoints
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                SLA Performance
              </span>
              <span className="text-base sm:text-lg font-bold text-blue-700">
                99.9% Production Uptime
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                Cost Impact
              </span>
              <span className="text-base sm:text-lg font-bold text-emerald-700">
                30% Annual Overhead Reduction
              </span>
            </div>
          </div>
        </header>

        {/* ── SECTION: EXECUTIVE SUMMARY ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            Executive Summary
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed border-l-4 border-primary pl-5 sm:pl-6 bg-slate-50/70 py-4 rounded-r-xl mb-6">
            <p>
              A leading regional manufacturing company operating three production plants in Chakan
              MIDC. It was grappling with increasing server downtime, latency issues in its local
              enterprise database, and the risks associated with unmanaged hardware maintenance. So, by
              turning to Cybaem Tech’s{" "}
              <Link
                to="/solutions/it-infrastructure-services"
                className="text-primary font-semibold hover:underline"
              >
                managed IT infrastructure services
              </Link>
              , the client transformed unpredictable capital expenditure into a streamlined
              operational model.
            </p>
            <p>
              This project eliminated single points of failure across their network, implemented 24/7
              Security Operations Center (SOC) monitoring, and reduced annual infrastructure overhead
              by 30%.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-blue-50/70 rounded-2xl border border-blue-200/80">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-0">
              To understand how this engagement fits into a broader operational strategy, explore our{" "}
              <Link
                to="/managed-it/managed-it-infrastructure-engineered-for-business-continuity"
                className="text-primary font-bold hover:underline inline-flex items-center gap-1"
              >
                Managed IT Infrastructure Engineered for Business Continuity
                <ArrowRight size={14} />
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── SECTION: CLIENT PROFILE & PRE-TRANSITION CHALLENGES ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            Client Profile &amp; Pre-Transition Challenges
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            The client operated a hybrid environment with 120 endpoints, on-premises ERP servers, and
            an expanding cloud presence. Their in-house team was overwhelmed by routine troubleshooting,
            leaving critical gaps in security patch discipline and compliance readiness under India’s{" "}
            <a
              href="https://www.wikidata.org/wiki/Q121754994"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
            >
              DPDP Act, 2023
              <ExternalLink size={12} />
            </a>
            . The primary challenges were:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {challenges.map((challenge, idx) => {
              const ChallengeIcon = challenge.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-primary/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                        <ChallengeIcon size={20} />
                      </div>
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {challenge.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
                      {challenge.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">{challenge.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-0">
              For a detailed look at what should be included in a single managed contract, see{" "}
              <Link
                to="/managed-it/what-is-included-in-managed-it-infrastructure-package"
                className="text-primary font-bold hover:underline inline-flex items-center gap-1"
              >
                What's Included in a Typical Managed IT Infrastructure Package
                <ArrowRight size={14} />
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── SECTION: SOLUTION ARCHITECTURE & IMPLEMENTATION ROADMAP ── */}
        <section className="mb-16">
          {/* <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            Solution Architecture &amp; Implementation Roadmap
          </h2> */}

          <div className="mb-8">
            <img
              src="/images/case-study/solution-architecture-implementation-roadmap.jpg"
              alt="Solution Architecture and Implementation Roadmap - Transition Methodology: 1. Secure, 2. Scale, 3. Support under Dual ISO Certification"
              className="w-full rounded-2xl border border-slate-200 shadow-md"
              loading="lazy"
            />
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 font-display">
            Key Implementation Steps:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {implementationSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-primary/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${step.bgBadge}`}
                    >
                      {step.phase}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">Step 0{idx + 1}</span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed mb-4">{step.summary}</p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-slate-100">
                  {step.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-center gap-2 text-xs font-medium text-slate-600"
                    >
                      <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION: MEASURABLE RESULTS & BUSINESS OUTCOMES ── */}
        <section className="mb-16">
          {/* <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            Measurable Results &amp; Business Outcomes
          </h2> */}

          <div className="mb-8">
            <img
              src="/images/case-study/measurable-results-business-outcomes.jpg"
              alt="Measurable Results and Business Outcomes: 99.9% Zero Unplanned Downtime, 30% Operational Savings, Full Regulatory Readiness"
              className="w-full rounded-2xl border border-slate-200 shadow-md"
              loading="lazy"
            />
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {businessOutcomes.map((outcome, idx) => {
              const OutcomeIcon = outcome.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl p-6 sm:p-7 border ${outcome.bgColor} shadow-sm flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-white text-primary flex items-center justify-center shadow-sm`}
                      >
                        <OutcomeIcon size={24} className={outcome.color} />
                      </div>
                      <span className={`text-2xl sm:text-3xl font-black font-display ${outcome.color}`}>
                        {outcome.metric}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                      {outcome.title}
                    </h3>

                    <p className="text-sm text-slate-700 leading-relaxed">{outcome.description}</p>
                  </div>
                </div>
              );
            })}
          </div> */}

          <div className="p-5 sm:p-6 bg-blue-50/70 rounded-2xl border border-blue-200/80">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-0">
              To compare how outsourcing can reduce internal hiring risks and control expenses, read
              about the{" "}
              <Link
                to="/managed-it/benefits-outsourcing-managed-it-infrastructure-services"
                className="text-primary font-bold hover:underline inline-flex items-center gap-1"
              >
                Benefits of Outsourcing Managed IT Infrastructure Services
                <ArrowRight size={14} />
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── SECTION: COMMERCIAL MODEL & PRICING STRATEGY ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            Commercial Model &amp; Pricing Strategy
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            <p>
              The client selected a Fully Managed Retainer tier, consolidating network management, cloud
              administration, 24/7 SOC monitoring, and Annual Maintenance Contracts (AMC) under one
              transparent Service Level Agreement (SLA).
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-0">
              To evaluate different commercial structures for your organization, check out{" "}
              <Link
                to="/managed-it/support-pricing-models-compared"
                className="text-primary font-bold hover:underline inline-flex items-center gap-1"
              >
                IT Infrastructure Support Pricing Models Compared
                <ArrowRight size={14} />
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── SECTION: CONCLUSION & NEXT STEPS ── */}
        <section className="bg-gradient-to-br from-slate-900 via-primary to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-300 bg-white/10 border border-white/20 mb-4">
              <Sparkles size={13} />
              Operational Transformation
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display mb-4">
              Conclusion &amp; Next Steps
            </h2>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-4">
              Modernizing IT infrastructure transforms unpredictable operational costs into a stable
              foundation for business growth. Implementing 24/7 SOC monitoring, SD-WAN connectivity,
              and managed hybrid cloud eliminates the risk of downtime, enabling internal teams to
              focus on strategic objectives while maintaining compliance and operational efficiency.
            </p>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-8">
              Organizations can access these services through integrated options, such as a full-stack
              retainer tier under a single Service Level Agreement.
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
