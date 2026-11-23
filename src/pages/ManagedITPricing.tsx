import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { managedITPricingSeoData } from "@/data/seo/managedITPricingSeo";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Server,
  Users,
  ShieldAlert,
  Layers,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  FileText,
  DollarSign,
  HelpCircle,
  Check,
} from "lucide-react";

// Four Primary Pricing Models
const pricingModels = [
  {
    num: "1",
    title: "Per-Device Pricing",
    icon: Server,
    description:
      "A fixed monthly rate applied to each individual server, workstation, or network device managed by the provider.",
    bestSuited:
      "Best suited for organizations with stable headcount and predictable hardware inventories.",
    clarification:
      "Clarify how network hardware is defined. Some vendors bill network assets like routers, switches, and enterprise firewalls under separate, higher rate tiers.",
  },
  {
    num: "2",
    title: "Per-User Pricing",
    icon: Users,
    description:
      "A fixed monthly fee calculated per employee, covering all endpoints, software accounts, and support tickets tied to that individual.",
    bestSuited:
      "Suitable for companies with variable device-to-employee ratios, such as remote teams or Bring Your Own Device (BYOD) environments.",
    clarification:
      "Verify whether core shared infrastructure, such as centralized servers and primary network hardware, is bundled into the user fee or billed as an additional base charge.",
  },
  {
    num: "3",
    title: "Tiered SLA Pricing",
    icon: ShieldAlert,
    description:
      "A structured rate model where total cost scales directly with guaranteed response times, resolution commitments, and operational coverage hours (e.g., standard business hours versus 24/7/365 coverage).",
    bestSuited:
      "Suitable for enterprises seeking to align IT spend directly with system criticality and risk tolerance.",
    clarification:
      "Ensure severity classifications (such as what constitutes a \"Critical\" outage) are explicitly detailed in the contract rather than left to verbal interpretation during an active incident.",
  },
  {
    num: "4",
    title: "Fully Managed Retainer",
    icon: Layers,
    description:
      "A predictable, flat monthly fee covering the entire technology stack, including network operations, cloud administration, cybersecurity, Microsoft 365 governance, computer AMC support, and strategic advisory, regardless of helpdesk ticket volume.",
    bestSuited:
      "Suitable for mid-sized to large enterprises requiring total budget predictability and a single point of operational accountability.",
    clarification:
      "Review the scope table carefully to confirm which project types (such as major cloud migrations or new branch office rollouts) fall within the retainer versus what triggers out-of-scope billing.",
  },
];

// Technical Factors Driving Final Costs
const costDrivers = [
  "The total number of users and physical locations requiring support.",
  "Whether dedicated 24/7/365 NOC and SOC monitoring is required.",
  "Total data storage, server instance count, and workload volume managed under active cloud governance.",
  (
    <>
      Data protection auditing, logging obligations, and compliance reporting under standards like India's{" "}
      <a
        href="https://www.wikidata.org/wiki/Q121754994"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
      >
        DPDP Act, 2023
        <ExternalLink size={12} />
      </a>
      .
    </>
  ),
  "The strictness of contractual response and resolution time commitments.",
];

// Comparison Checklist
const comparisonChecklist = [
  "Calculate spend on a per-user or per-device basis rather than comparing total monthly contract figures directly.",
  "Cross-reference each quote against the core pillars of IT infrastructure to determine which services are bundled and which are billed as add-ons.",
  "Review the explicit response and resolution time tables attached to each quote. Lower-cost proposals often come with relaxed SLAs that increase downtime risk.",
  "Request explicit written terms detailing how out-of-scope requests, emergency on-site visits, and excess usage are billed.",
];

export default function ManagedITPricing() {
  const { openConsultationModal } = useConsultationModal();

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-primary selection:text-white font-sans">
      {/* SEO Head with Schema Markup */}
      <SEOHead {...managedITPricingSeoData} />

      <Navbar />

      {/* ── ARTICLE CONTAINER ── */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 lg:pb-16">
        {/* Header / Intro */}
        <header className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 border border-blue-200/80 mb-4">
            Commercial Pricing &amp; Evaluation
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-6 font-display">
            IT Infrastructure Support Pricing Models Compared
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed border-l-4 border-primary pl-5 sm:pl-6 bg-slate-50/60 py-4 rounded-r-xl">
            <p>
              Managed IT infrastructure service providers determine contract pricing using four
              primary business models. Rather than evaluating based solely on surface-level costs,
              the most effective way to compare vendor proposals on an equal footing is to
              understand the mechanics of each model and the specific cost components underlying
              them.
            </p>
            <p>
              The following is a comparison of the mechanics of the four key pricing models used to
              structure service agreements for Cybaem Tech’s{" "}
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

        {/* ── SECTION: THE FOUR PRIMARY PRICING MODELS ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-8 pb-3 border-b border-slate-100">
            The Four Primary Pricing Models
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingModels.map((model) => {
              const ModelIcon = model.icon;
              return (
                <div
                  key={model.num}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-primary/60 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                        <ModelIcon size={22} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        Model {model.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                      {model.num}. {model.title}
                    </h3>

                    <p className="text-sm text-slate-700 leading-relaxed mb-4">
                      {model.description}
                    </p>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 mb-3 text-xs text-slate-600">
                      <strong className="text-slate-900 font-semibold">Best suited for:</strong>{" "}
                      {model.bestSuited}
                    </div>

                    <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-700">
                      <strong className="text-primary font-semibold">Important check:</strong>{" "}
                      {model.clarification}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── SECTION: TECHNICAL FACTORS THAT DRIVE FINAL CONTRACT COSTS ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            Technical Factors That Drive Final Contract Costs
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            Because enterprise requirements vary significantly, published market averages rarely
            reflect actual project costs. Primary cost drivers include:
          </p>

          <div className="bg-slate-50/90 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-3.5 mb-6">
            {costDrivers.map((driver, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                  {driver}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 sm:p-6 bg-blue-50/70 rounded-2xl border border-blue-200/80 mb-6">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              For a detailed analysis of indicative ranges and organizational financial benchmarks,
              review our companion guide on{" "}
              <Link
                to="/managed-it/cost-mid-sized-company"
                className="text-primary font-bold hover:underline inline-flex items-center gap-1"
              >
                Managed IT Infrastructure Cost for a mid-sized company
                <ArrowRight size={14} />
              </Link>
              .
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            A detailed technical audit remains the only reliable method to determine an accurate,
            fixed quote. Cybaem Tech conducts an initial baseline audit before finalizing commercial
            agreements.
          </p>
        </section>

        {/* ── SECTION: FRAMEWORK FOR COMPARING PROVIDER PROPOSALS ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            Framework for Comparing Provider Proposals
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            To evaluate competing IT infrastructure quotes accurately, use the following comparison
            checklist:
          </p>

          <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4 mb-6">
            {comparisonChecklist.map((checkItem, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check size={18} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                  {checkItem}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
            To understand how operational control and cost shifts benefit your business, read about the{" "}
            <Link
              to="/managed-it/benefits-outsourcing-managed-it-infrastructure-services"
              className="text-primary font-bold hover:underline inline-flex items-center gap-1"
            >
              Benefits of Outsourcing Managed IT Infrastructure Services
              <ArrowRight size={13} />
            </Link>
            .
          </p>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            While selecting the right pricing model provides budget predictability, structuring the
            actual operational transition requires clear technical governance. Read{" "}
            <Link
              to="/case-study/eliminating-downtime-risk-and-scaling-hybrid-cloud"
              className="text-primary font-bold hover:underline inline-flex items-center gap-1"
            >
              The Complete Guide to Managed IT Infrastructure Modernization
              <ArrowRight size={13} />
            </Link>{" "}
            to learn how to evaluate scopes and modernize your infrastructure efficiently.
          </p>
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
                Which pricing model is most common in India for mid-size businesses?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 pb-4 border-t border-slate-200/60">
                Per-device and tiered-SLA pricing structures are most common for organizations
                operating between 20 and 200 endpoints. Fully managed retainers become the standard
                choice for organizations above that size or operating in regulated sectors.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-2"
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl px-6 py-2 overflow-hidden shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-base sm:text-lg text-slate-900 hover:text-primary py-4 hover:no-underline">
                Can pricing models be combined in a single contract?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 pb-4 border-t border-slate-200/60">
                Yes. Providers frequently combine a baseline per-device rate with a tiered SLA
                structure. This allows companies to apply high-tier, 24/7 coverage to critical core
                servers while maintaining standard business-hour support for regular office
                endpoints.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-3"
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl px-6 py-2 overflow-hidden shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-base sm:text-lg text-slate-900 hover:text-primary py-4 hover:no-underline">
                Is the cheapest managed IT quote the right choice?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 pb-4 border-t border-slate-200/60">
                Rarely. Quotes with significantly lower prices usually compromise on SLA response
                times, lack 24/7 SOC monitoring, or exclude key operational scope. Evaluating total
                service coverage against business downtime costs ensures a more reliable long-term
                decision.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* ── SECTION: OPTIMIZE YOUR IT INFRASTRUCTURE SPEND ── */}
        <section className="bg-gradient-to-br from-slate-900 via-primary to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display mb-4">
              Optimize Your IT Infrastructure Spend
            </h2>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-4">
              Choosing the right managed IT pricing structure requires aligning your technical
              footprint with operational risk and financial goals.
            </p>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-8">
              Let’s schedule a technical consultation with{" "}
              <a
                href="https://www.cybaemtech.com/"
                className="text-cyan-300 font-bold underline hover:text-white transition-colors"
              >
                Cybaem Tech
              </a>
              ’s engineering team to review your current infrastructure setup, evaluate pricing
              model suitability, and receive a tailored scope proposal for your organization.
            </p>

            <div>
              <button
                onClick={() => openConsultationModal()}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-blue-50 font-bold text-sm sm:text-base transition-all shadow-md active:scale-[0.99]"
              >
                Schedule Technical Consultation
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
