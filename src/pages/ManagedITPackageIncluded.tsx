import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { managedITPackageIncludedSeoData } from "@/data/seo/managedITPackageIncludedSeo";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Laptop,
  Wrench,
  Compass,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

// AI Image for Core Components
import aiInfraImage from "@/assets/IT Infra/sections/1.png";

// The Seven Core Components
const coreComponents = [
  {
    num: "01",
    title: "Network and connectivity management",
    icon: Network,
    description:
      "LAN/WAN design and monitoring, firewall administration, SD-WAN optimization, business Wi-Fi performance, and bandwidth utilization reporting.",
  },
  {
    num: "02",
    title: "Server and endpoint management",
    icon: Server,
    description:
      "Operating system patching, server virtualization, backup scheduling, endpoint security hardening, and real-time asset inventory tracking.",
  },
  {
    num: "03",
    title: "Cloud infrastructure management",
    icon: Cloud,
    description:
      "Provisioning and governance across AWS/Azure, cloud cost optimization, migration planning, and ongoing cloud computing service management, including uptime monitoring, resource scaling, and access controls.",
  },
  {
    num: "04",
    title: "Cybersecurity operations",
    icon: ShieldCheck,
    description:
      "Vulnerability Assessment and Penetration Testing (VAPT), 24/7 Security Operations Center (SOC) monitoring, incident response, patch management, and active threat management.",
  },
  {
    num: "05",
    title: "Microsoft 365 and collaboration administration",
    icon: Laptop,
    description:
      "Identity and access management, mail flow security, compliance settings, and retention policy configuration.",
  },
  {
    num: "06",
    title: "AMC (Annual Maintenance Contract) support",
    icon: Wrench,
    description:
      "SLA-backed hardware and software upkeep, scheduled preventive maintenance, and spare parts management.",
  },
  {
    num: "07",
    title: "IT consulting and technology roadmap",
    icon: Compass,
    description:
      "Senior advisory input on modernization sequencing, technology budget planning, and vendor rationalization.",
  },
];

// What Should Be in the SLA
const slaRequirements = [
  "Clear operational classifications (Critical, High, Medium, Low) paired with specific response and resolution time targets for each level.",
  "Guaranteed monthly or quarterly performance reports covering system uptime, open ticket volume, and patch compliance metrics.",
  "A named escalation hierarchy with direct contact details for after-hours operational emergencies.",
  "Contractual Recovery Time Objective (RTO) and Recovery Point Objective (RPO) commitments for backup systems and disaster recovery operations.",
  "Clear data-handling and compliance language strictly aligned with India's DPDP Act, 2023, wherever personal data processing is involved.",
];

// Common Add-Ons
const addOnServices = [
  "Full disaster recovery site replication beyond routine backups.",
  "On-premises hardware procurement, vendor financing, and fleet sourcing.",
  "Application-layer software development or custom software code maintenance.",
  "Formal compliance certification support, such as preparing your business for an ISO or SOC 2 audit.",
];

export default function ManagedITPackageIncluded() {
  const { openConsultationModal } = useConsultationModal();

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-primary selection:text-white font-sans">
      {/* SEO Head with JSON-LD Schemas */}
      <SEOHead {...managedITPackageIncludedSeoData} />

      <Navbar />

      {/* ── ARTICLE CONTAINER ── */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 lg:pb-16">
        {/* Header / Intro */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 border border-blue-200/80 mb-4">
            Technical Scope &amp; Architecture Breakdown
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2] mb-6 font-display">
            What's Included in a Typical Managed IT Infrastructure Package
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed border-l-4 border-primary pl-5 sm:pl-6 bg-slate-50/50 py-3 rounded-r-xl">
            <p>
              The term managed IT infrastructure is used loosely across the market. Some vendors
              mean basic help desk tickets, while others mean full ownership of network, cloud, and
              security.
            </p>
            <p>
              This article dives deep into what a genuine, full-scope package covers, drawn from how
              engagements are structured under Cybaem Tech's{" "}
              <Link
                to="/cloud-security/it-infrastructure-services"
                className="text-primary font-semibold hover:underline"
              >
                managed IT infrastructure services
              </Link>
              . You may use this breakdown to evaluate provider scopes and compare vendor quotes on
              equal terms.
            </p>
          </div>
        </header>

        {/* ── SECTION: THE SEVEN CORE COMPONENTS ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-6 pb-3 border-b border-slate-100">
            The Seven Core Components
          </h2>

          {/* AI Image */}
          <div className="mb-8 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 group">
            <img
              src={aiInfraImage}
              alt="What's Included in a Typical Managed IT Infrastructure Package - The Seven Core Components"
              className="w-full h-64 sm:h-80 md:h-96 object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
              loading="lazy"
            />
            <div className="px-4 py-2.5 bg-slate-900/90 text-slate-300 text-xs flex items-center justify-between">
              <span>Managed IT Infrastructure Architecture</span>
              <span className="text-slate-400 font-mono text-[11px]">(Img src: AI Image)</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-medium">
            A comprehensive managed IT infrastructure package consolidates technical management
            across seven distinct operational pillars:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {coreComponents.map((comp) => {
              const CompIcon = comp.icon;
              return (
                <div
                  key={comp.num}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-primary/60 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                        <CompIcon size={22} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {comp.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                      {comp.title}:
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {comp.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── SECTION: WHAT SHOULD BE IN THE SLA ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            What Should Be in the SLA, Not Just the Sales Deck
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            Sales presentations often promise comprehensive support, but operational protection
            depends on contract language. A robust{" "}
            <a
              href="https://www.wikidata.org/wiki/Q869830"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
            >
              Service Level Agreement
              <ExternalLink size={14} />
            </a>{" "}
            must explicitly define:
          </p>

          <div className="bg-slate-50/90 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
            {slaRequirements.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="text-primary mt-1 flex-shrink-0"
                />
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION: WHAT IS USUALLY SCOPED AS AN ADD-ON ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            What Is Usually Scoped as an Add-On, Not Included by Default:
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            To prevent unexpected billing gaps, recognize that certain advanced services fall
            outside standard managed IT packages. Common add-ons include:
          </p>

          <div className="bg-amber-50/50 rounded-2xl p-6 sm:p-8 border border-amber-200/80 mb-6 space-y-3">
            {addOnServices.map((addOn, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <AlertCircle
                  size={18}
                  className="text-amber-600 mt-1 flex-shrink-0"
                />
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  {addOn}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
            So, always ask a provider to mark these items explicitly in a formal scope matrix before
            signing. Scope ambiguity regarding these four areas is the single most common source of
            disputes in managed IT contracts.
          </p>

          <div className="p-5 sm:p-6 bg-blue-50/60 rounded-2xl border border-blue-200/70">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-0">
              As your organization grows, shifting from basic endpoint support to a full-scope
              architecture requires strategic sequencing. Learn how to align these components with
              long-term business goals in{" "}
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
        </section>

        {/* ── SECTION: HOW SCOPE DIRECTLY MAPS TO PRICING ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            How Scope Directly Maps to Pricing
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
            Service scope directly drives contract costs. A broader scope that includes all seven
            core components, 24/7 operational coverage, and strict SLA resolution times carries a
            higher cost per device or user than a basic help-desk contract.
          </p>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            So, understanding how scope impacts your balance sheet helps you select the right
            operational model. Review our detailed guide on{" "}
            <Link
              to="/managed-it/support-pricing-models-compared"
              className="text-primary font-bold hover:underline inline-flex items-center gap-1"
            >
              IT infrastructure support pricing models compared
              <ArrowRight size={14} />
            </Link>{" "}
            to see how providers structure these costs.
          </p>
        </section>

        {/* ── SECTION: FREQUENTLY ASKED QUESTIONS ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-6 pb-3 border-b border-slate-100">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl px-6 py-2 overflow-hidden shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-base sm:text-lg text-slate-900 hover:text-primary py-4 hover:no-underline">
                Is cybersecurity always included in managed IT infrastructure services?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 pb-4 border-t border-slate-200/60">
                Not always. Some providers treat VAPT and 24/7 SOC monitoring as separate line
                items. Always confirm whether security operations are fully bundled or billed as an
                add-on before comparing pricing proposals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl px-6 py-2 overflow-hidden shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-base sm:text-lg text-slate-900 hover:text-primary py-4 hover:no-underline">
                What is the difference between AMC and full managed IT infrastructure?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 pb-4 border-t border-slate-200/60">
                An Annual Maintenance Contract (AMC) typically covers hardware and basic software
                break-fix maintenance only. Managed IT infrastructure is a broader service that
                includes network engineering, cloud administration, cybersecurity, and strategic
                advisory alongside baseline hardware maintenance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl px-6 py-2 overflow-hidden shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-base sm:text-lg text-slate-900 hover:text-primary py-4 hover:no-underline">
                Do I need cloud infrastructure management if I am not fully on the cloud yet?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 pb-4 border-t border-slate-200/60">
                Yes. Most modern organizations operate hybrid environments. Cloud infrastructure
                management applies to whatever portion of your business runs off-premise, including
                SaaS platforms, hosted databases, and Microsoft 365 environments.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* ── SECTION: EVALUATE YOUR INFRASTRUCTURE SCOPE ── */}
        <section className="bg-gradient-to-br from-slate-900 via-primary to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display mb-4">
              Evaluate Your Infrastructure Scope
            </h2>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-6">
              Selecting the right managed IT infrastructure partner requires clear scope alignment,
              transparent SLAs, and measurable security protections.
            </p>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-8">
              <a
                href="https://www.cybaemtech.com/"
                className="text-cyan-300 font-bold underline hover:text-white transition-colors"
              >
                Consultation with our expert IT infra team
              </a>{" "}
              to evaluate your current IT footprint, review your SLA requirements, and build a
              managed service package tailored to your operational goals.
            </p>

            <div>
              <button
                onClick={() => openConsultationModal()}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-blue-50 font-bold text-sm sm:text-base transition-all shadow-md active:scale-[0.99]"
              >
                Schedule Expert IT Infra Consultation
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
