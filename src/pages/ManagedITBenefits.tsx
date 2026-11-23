import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { managedITBenefitsSeoData } from "@/data/seo/managedITBenefitsSeo";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DollarSign,
  Layers,
  Clock,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  AlertTriangle,
  Building2,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

// The 6 Improvements
const improvements = [
  {
    num: "01",
    title: "Predictable Cost Structure",
    icon: DollarSign,
    description:
      "Managing internal infrastructure entails irregular and unexpected expenses, such as unforeseen hardware upgrade cycles, emergency hiring costs, and overtime pay during major technical failures. A managed contract converts these fluctuating costs into a fixed or tiered monthly operating expense, thereby simplifying annual budgeting and financial forecasting.",
  },
  {
    num: "02",
    title: "Access to Specialized Depth Across the Tech Stack",
    icon: Layers,
    description: (
      <>
        It is unrealistic to expect a single in-house IT employee to possess expert-level proficiency
        across domains such as network engineering, enterprise cloud architecture (AWS and Azure),
        cybersecurity, VAPT implementation, and Microsoft 365 administration. A Managed Service
        Provider offers a full team of certified experts, bringing with them{" "}
        <a
          href="https://www.wikidata.org/wiki/Q852641"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
        >
          ISO 27001
          <ExternalLink size={12} />
        </a>{" "}
        credentials and cloud vendor partner status, capabilities that would otherwise require
        hiring multiple expensive, full-time senior engineers.
      </>
    ),
  },
  {
    num: "03",
    title: "24/7 Monitoring Without Night Shift Payroll Costs",
    icon: Clock,
    description:
      "A dedicated Network Operations Center (NOC) and Security Operations Center (SOC) monitor your systems continuously outside standard business hours. Replicating this 24/7/365 coverage in-house requires multiple shift rotations and heavy overtime pay. Continuous third-party monitoring drastically reduces the Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR) for system outages and cyber threats.",
  },
  {
    num: "04",
    title: "Stronger, Auditable Security and Regulatory Compliance",
    icon: ShieldCheck,
    description:
      "Regular Vulnerability Assessment and Penetration Testing (VAPT) cycles, disciplined patch management workflows, and documented incident response procedures significantly reduce breach risks. These operational standards generate the clear audit trails required by regulators and enterprise clients, particularly under data protection frameworks like India's DPDP Act, 2023.",
  },
  {
    num: "05",
    title: "Faster Infrastructure Scaling and Resource Capacity",
    icon: TrendingUp,
    description:
      "Proactive capacity planning and cloud cost governance ensure your underlying tech stack expands instantly alongside business growth. Opening new branch offices, onboarding employees, or handling seasonal traffic spikes happens seamlessly without waiting on long internal hardware procurement cycles.",
  },
  {
    num: "06",
    title: "Contractual SLA Accountability Replaces Best Effort Support",
    icon: FileCheck2,
    description:
      "Internal IT response times are often informal and subject to competing internal priorities. A managed IT infrastructure agreement establishes binding targets for response and resolution times, categorized by incident severity. Regular performance reporting ensures structural accountability across your entire technical organization.",
  },
];

// Key Operational Trade-Offs
const tradeOffs = [
  "Third-party management can reduce daily visibility unless a formal reporting cadence is written into the contract. Require monthly SLA reviews and quarterly executive reporting.",
  "Avoid operational lock-in by selecting an IT partner that offers clear data portability policies and defined transition terms for contract exit.",
  "Prevent unexpected billing disputes by insisting on a comprehensive, detailed service matrix in writing before finalizing the contract.",
];

export default function ManagedITBenefits() {
  const { openConsultationModal } = useConsultationModal();

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-primary selection:text-white font-sans">
      {/* SEO Head with Schema Markup */}
      <SEOHead {...managedITBenefitsSeoData} />

      <Navbar />

      {/* ── ARTICLE CONTAINER ── */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 lg:pb-16">
        {/* Header / Intro */}
        <header className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 border border-blue-200/80 mb-4">
            Strategic IT Operations
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-6 font-display">
            Benefits of Outsourcing Managed IT Infrastructure Services
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed border-l-4 border-primary pl-5 sm:pl-6 bg-slate-50/60 py-4 rounded-r-xl">
            <p>
              Outsourcing IT infrastructure is often presented merely as a cost-saving measure.
              However, it should more accurately be described as a strategic operational decision. It
              allows you to convert unpredictable capital expenditure (CapEx) and the high risks
              associated with hiring into a fixed operating expense, while simultaneously gaining
              access to a team of dedicated experts operating under a contractual Service Level
              Agreement (SLA).
            </p>
            <p>
              Below is an overview of how outsourcing managed IT infrastructure transforms enterprise
              operations, drawn from real-world execution under Cybaem Tech's{" "}
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

        {/* ── SECTION: WHAT GENUINELY IMPROVES WHEN YOU OUTSOURCE ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-8 pb-3 border-b border-slate-100">
            What Genuinely Improves When You Outsource
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {improvements.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.num}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-primary/60 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                        <ItemIcon size={22} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">
                      {item.title}
                    </h3>

                    <div className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── SECTION: KEY OPERATIONAL TRADE-OFFS TO MANAGE ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            Key Operational Trade-Offs to Manage
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            While outsourcing provides massive structural advantages, enterprise leaders must
            actively manage three key operational trade-offs:
          </p>

          <div className="bg-amber-50/50 rounded-2xl p-6 sm:p-8 border border-amber-200/80 space-y-4">
            {tradeOffs.map((tradeOff, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <AlertTriangle
                  size={18}
                  className="text-amber-600 mt-1 flex-shrink-0"
                />
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                  {tradeOff}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION: IS OUTSOURCING RIGHT FOR YOUR BUSINESS SCALE? ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            Is Outsourcing Right for Your Business Scale?
          </h2>

          <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Organizations with fewer than 15 to 20 endpoints and minimal compliance requirements
              often find sufficient coverage using a basic Annual Maintenance Contract (AMC).
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              However, once an enterprise grows beyond that threshold or operates in regulated
              sectors, such as financial services, healthcare, or SaaS platforms handling client
              data, the risk mitigation, regulatory compliance, and continuous coverage provided by a
              managed provider deliver far greater long-term value than relying on a small in-house
              team.
            </p>
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
                Does outsourcing mean losing control of our IT decisions?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 pb-4 border-t border-slate-200/60">
                No. Strategic governance, budget allocation, and final technical decisions remain
                entirely with your business leadership. The managed service provider acts as an
                execution and advisory engine operating under your agreed roadmaps and SLAs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-2"
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl px-6 py-2 overflow-hidden shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-base sm:text-lg text-slate-900 hover:text-primary py-4 hover:no-underline">
                Is outsourcing cheaper than hiring in-house?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 pb-4 border-t border-slate-200/60 space-y-2">
                <p>
                  Yes, outsourcing is significantly more cost-effective than building an in-house team
                  with equivalent multi-disciplinary expertise. While a small, low-complexity
                  environment might run on a single in-house generalist, enterprise-grade security and
                  uptime require a broader team that is much cheaper to outsource.
                </p>
                <p>
                  Compare your scale against standard{" "}
                  <Link
                    to="/managed-it/support-pricing-models-compared"
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    IT infrastructure support pricing models
                    <ArrowRight size={13} />
                  </Link>{" "}
                  to evaluate the exact numbers.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-3"
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl px-6 py-2 overflow-hidden shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-base sm:text-lg text-slate-900 hover:text-primary py-4 hover:no-underline">
                How long does a transition to a managed provider typically take?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 pb-4 border-t border-slate-200/60">
                Most professional transitions take between two to four weeks. This window allows for
                a comprehensive technical discovery audit, baseline infrastructure documentation,
                and smooth handover protocols without risking service interruptions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* ── SECTION: BUILD A RESILIENT IT INFRASTRUCTURE OPERATIONAL MODEL ── */}
        <section className="bg-gradient-to-br from-slate-900 via-primary to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display mb-4">
              Build a Resilient IT Infrastructure Operational Model
            </h2>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-4">
              Transitioning to a managed IT infrastructure model transforms technical management from
              an unpredictable cost center into a reliable foundation for business growth.
            </p>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-8">
              So, schedule a technical consultation with our engineering team to audit your current
              infrastructure, evaluate operational bottlenecks, and design a scalable managed
              service agreement built for long-term reliability.
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
