import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { managedITContinuitySeoData } from "@/data/seo/managedITContinuitySeo";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import StrategySessionForm from "@/components/StrategySessionForm";
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
  Layers,
  Compass,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Check,
  Activity,
  ChevronDown,
  Shield,
  Radio,
  TrendingUp,
  DollarSign,
  FileCheck2,
  Mail,
  PhoneCall,
  Sparkles,
} from "lucide-react";

// 8 Core Managed IT Infrastructure Services
const managedServices = [
  {
    id: "network",
    title: "Network and connectivity",
    icon: Network,
    desc: "Complete LAN/WAN design, enterprise firewalls, SD-WAN implementation, business Wi-Fi optimization, and active bandwidth monitoring.",
  },
  {
    id: "server-endpoint",
    title: "Server and endpoint management",
    icon: Server,
    desc: "Automated system patching, regular backups, server virtualization, hardware health tracking, and endpoint hardening.",
  },
  {
    id: "cloud-infra",
    title: "Cloud infrastructure management",
    icon: Cloud,
    desc: "AWS and Azure provisioning, cloud cost governance, cloud security posture management, and seamless cloud migration workflows.",
  },
  {
    id: "cybersecurity-ops",
    title: "Cybersecurity operations",
    icon: ShieldCheck,
    desc: "Vulnerability Assessment and Penetration Testing (VAPT), 24/7 SOC monitoring, threat mitigation, and incident response management.",
  },
  {
    id: "microsoft-365",
    title: "Microsoft 365 administration",
    icon: Laptop,
    desc: "Identity access management, email routing configurations, security compliance, and license optimization policies.",
  },
  {
    id: "amc-contracts",
    title: "AMC (Annual Maintenance Contracts)",
    icon: Wrench,
    desc: "SLA-backed hardware and software upkeep to ensure hardware stability and minimize unmanaged break-fix events.",
  },
  {
    id: "it-asset-procurement",
    title: "IT asset and procurement management",
    icon: Layers,
    desc: "Full lifecycle asset tracking, hardware fleet sourcing, warranty management, and deployment logistics.",
  },
  {
    id: "it-consulting",
    title: "IT consulting and roadmap strategy",
    icon: Compass,
    desc: "Senior advisory services for IT modernization, infrastructure scalability, and technology budget planning.",
  },
];

// 3-Stage Methodology
const stages = [
  {
    stage: "Secure",
    num: "01",
    desc: (
      <>
        Every engagement starts with a baseline security and infrastructure audit. We map your current architecture directly against{" "}
        <a
          href="https://www.wikidata.org/wiki/Q852641"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
        >
          ISO 27001
          <ExternalLink size={12} />
        </a>{" "}
        security controls, discover hidden single points of failure, and quantify your downtime risk in exact Recovery Time Objective (RTO) and Recovery Point Objective (RPO) metrics before proposing any technical changes.
      </>
    ),
  },
  {
    stage: "Scale",
    num: "02",
    desc: "Modern IT infrastructure must expand alongside business growth. We implement cloud-first designs, modular network architectures, and capacity planning models tied directly to your business revenue forecasts rather than fixed, expensive hardware refresh cycles.",
  },
  {
    stage: "Support",
    num: "03",
    desc: "You receive direct access to a dedicated service desk, structured SLA tiers, and continuous coverage through a 24/7 Network Operations Center (NOC) and Security Operations Center (SOC). We deliver monthly reports against agreed Key Performance Indicators (KPIs) to ensure full operational accountability.",
  },
];

// 3 Pillars for Why Enterprises Outsource
const outsourcePillars = [
  {
    title: "Lower Operational Risk:",
    desc: "Redundant monitoring teams resolve system issues before they impact business users.",
    icon: ShieldCheck,
  },
  {
    title: "Controlled Expenditures:",
    desc: "Predictable monthly retainers simplify financial forecasting and eliminate emergency repair bills.",
    icon: DollarSign,
  },
  {
    title: "Enterprise Compliance:",
    desc: (
      <>
        Dedicated security teams help maintain compliance with evolving regulations like India's{" "}
        <a
          href="https://www.wikidata.org/wiki/Q121754994"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
        >
          DPDP Act
          <ExternalLink size={12} />
        </a>
        .
      </>
    ),
    icon: FileCheck2,
  },
];

// 4 Pricing Models
const pricingModels = [
  {
    title: "Per-Device Pricing:",
    desc: "A fixed fee per monitored or managed device, such as servers, firewalls, and switches.",
  },
  {
    title: "Per-User Pricing:",
    desc: "A flat monthly fee per employee that covers all endpoints, accounts, and helpdesk support used by that individual.",
  },
  {
    title: "Tiered-SLA Pricing:",
    desc: "Service packages structured around guaranteed response times, resolution times, and support hours, such as 8x5 versus 24/7 support.",
  },
  {
    title: "Fully Managed Retainer:",
    desc: "A comprehensive monthly contract covering your total IT ecosystem, including cloud administration, security management, and strategic IT oversight.",
  },
];

// 5 Partner Selection Criteria
const partnerCriteria = [
  "Confirm active certifications such as ISO 9001 for quality control and ISO 27001 for information security.",
  "Review response time guarantees, resolution protocols, and financial credit clauses for uptime breaches.",
  "Ensure the provider manages network engineering, system security, and cloud infrastructure, rather than basic helpdesk ticket routing alone.",
  "Verify data residency controls and strict adherence to local laws, such as India's DPDP Act.",
  "Confirm the presence of an active 24/7/365 NOC and SOC capability with proactive incident detection.",
];

export default function ManagedITContinuity() {
  const { openConsultationModal } = useConsultationModal();

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-primary selection:text-white font-sans">
      <SEOHead {...managedITContinuitySeoData} />
      <Navbar />

      {/* ── ARTICLE CONTAINER ── */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 lg:pb-16">
        {/* Header / Intro */}
        <header className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 border border-blue-200/80 mb-4">
            Business Continuity Framework
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-6 font-display">
            Managed IT Infrastructure Engineered for Business Continuity
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed border-l-4 border-primary pl-5 sm:pl-6 bg-slate-50/60 py-4 rounded-r-xl">
            <p>
              Downtime is no longer a technical inconvenience. It is a direct revenue event.
              Therefore, we design, manage, and monitor{" "}
              <Link
                to="/cloud-security/it-infrastructure-services"
                className="text-primary font-semibold hover:underline"
              >
                managed IT infrastructure services
              </Link>{" "}
              for growing enterprises across India. We combine network engineering, cloud
              architecture, cybersecurity, and 24/7 support under one dual ISO-certified (ISO 9001
              and ISO 27001) delivery framework.
            </p>
            <p>
              Modern business relies on constant uptime, low latency, and secure data pipelines.
              Whether you need to modernize a single overworked server room or run a multi-location
              hybrid cloud footprint, this guide explains what is included, how services are priced,
              and how to evaluate whether outsourcing is the right strategic move for your
              business.
            </p>
          </div>
        </header>

        {/* ── SECTION 1: WHAT IS MANAGED IT INFRASTRUCTURE, AND WHAT'S INCLUDED ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            What Is Managed IT Infrastructure, and What's Included
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            Managed IT infrastructure services cover the complete technology stack required to keep
            enterprise operations running every single day. Instead of managing multiple vendors for
            hardware, software, security, and cloud hosting, you consolidate management under a
            single Service Level Agreement (SLA).
          </p>

          <p className="text-base sm:text-lg text-slate-900 font-bold mb-4">
            Our managed IT infrastructure services cover:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {managedServices.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary/60 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                      <ServiceIcon size={20} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                      {service.title}:
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="p-5 sm:p-6 bg-blue-50/70 rounded-2xl border border-blue-200/80">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              For the full service-by-service breakdown with SLA benchmarks, see{" "}
              <Link
                to="/managed-it/what-is-included-in-managed-it-infrastructure-package"
                className="text-primary font-bold hover:underline inline-flex items-center gap-1"
              >
                What's included in a managed IT infrastructure package
                <ArrowRight size={14} />
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── SECTION 2: ARE YOU PREPARED TO MODERNIZE ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            Are you Prepared to Modernize Your IT Infrastructure?
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            Upgrading your IT stack requires a systematic process that reduces operational risk
            during transitions. At{" "}
            <Link to="/" className="text-primary font-semibold hover:underline">
              Cybaem Tech
            </Link>
            , we use a three-stage methodology to ensure your technical foundation is secure,
            scalable, and resilient.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stages.map((stg) => (
              <div
                key={stg.num}
                className="bg-slate-50/80 rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-black text-slate-300 font-display mb-2">
                    {stg.num}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
                    {stg.stage}
                  </h3>
                  <div className="text-sm text-slate-600 leading-relaxed">{stg.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: WHY ENTERPRISES OUTSOURCE ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            Why Enterprises Outsource Their IT Infrastructure
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
            Internal IT departments often spend most of their time dealing with routine support
            tickets, operating system updates, and urgent troubleshooting. This leaves little time
            for strategic tech initiatives that drive enterprise growth.
          </p>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            Outsourcing converts unpredictable capital expenditures (CapEx) and difficult internal
            hiring cycles into predictable operational expenditures (OpEx). It provides immediate
            access to specialized engineers with certifications across ISO standards, Microsoft
            technologies, AWS architectures, and CompTIA frameworks. Most mid-sized organizations
            cannot afford to maintain this level of specialized, multidisciplinary expertise
            in-house full-time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {outsourcePillars.map((item, idx) => {
              const PillarIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-3">
                    <PillarIcon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
                    {item.title}
                  </h3>
                  <div className="text-sm text-slate-600 leading-relaxed">{item.desc}</div>
                </div>
              );
            })}
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Here is a full breakdown with numbers on the{" "}
            <Link
              to="/managed-it/benefits-outsourcing-managed-it-infrastructure-services"
              className="text-primary font-bold hover:underline inline-flex items-center gap-1"
            >
              benefits of outsourcing managed IT infrastructure services
              <ArrowRight size={13} />
            </Link>
            .
          </p>
        </section>

        {/* ── SECTION 4: HOW IS MANAGED IT INFRASTRUCTURE PRICED? ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            How Is Managed IT Infrastructure Priced?
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
            Selecting the right pricing framework depends on your total staff size, overall
            structural complexity, regulatory needs, and the specific technology stack components
            you wish to manage.
          </p>

          <p className="text-base sm:text-lg text-slate-900 font-semibold mb-4">
            Providers typically structure pricing around four core operational models:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {pricingModels.map((pModel, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
              >
                <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
                  {pModel.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pModel.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Compare all four models side by side here -{" "}
            <Link
              to="/managed-it/support-pricing-models-compared"
              className="text-primary font-bold hover:underline inline-flex items-center gap-1"
            >
              IT infrastructure support pricing models compared
              <ArrowRight size={13} />
            </Link>
            .
          </p>
        </section>

        {/* ── SECTION 5: HOW DO YOU SELECT THE MANAGED IT PARTNER IN INDIA? ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4 pb-3 border-b border-slate-100">
            How do you select the Managed IT Infrastructure Partner in India?
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            Selecting an IT partner requires careful evaluation beyond comparing initial service
            quotes. To ensure long-term stability and security, assess potential providers across
            these key technical criteria:
          </p>

          <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-3.5 mb-6">
            {partnerCriteria.map((crit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">{crit}</p>
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Your IT stack requires a systematic process that reduces operational risk during
            transitions. For a complete step-by-step framework on evaluating your existing setup and
            executing a seamless migration, read{" "}
            <Link
              to="/case-study/eliminating-downtime-risk-and-scaling-hybrid-cloud"
              className="text-primary font-bold hover:underline inline-flex items-center gap-1"
            >
              The Complete Guide to Managed IT Infrastructure Modernization
              <ArrowRight size={13} />
            </Link>
            .
          </p>
        </section>

        {/* ── SECTION 6: FREQUENTLY ASKED QUESTIONS ── */}
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
                What is included in Managed IT Infrastructure services?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 pb-4 border-t border-slate-200/60">
                Managed IT Infrastructure services include complete network management, server and
                cloud administration, cybersecurity monitoring, Microsoft 365 administration,
                computer AMC support, and ongoing strategic IT consulting. These components are
                typically delivered under a unified SLA.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-2"
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl px-6 py-2 overflow-hidden shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-base sm:text-lg text-slate-900 hover:text-primary py-4 hover:no-underline">
                How much do managed IT infrastructure services cost in India?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 pb-4 border-t border-slate-200/60">
                Costs vary based on overall user count, device count, and operational scope. Pricing
                ranges from simple fixed per-endpoint AMC models to fully managed retainers. Read
                our{" "}
                <Link
                  to="/managed-it/support-pricing-models-compared"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                >
                  pricing model comparison guide
                  <ArrowRight size={13} />
                </Link>{" "}
                for detailed price ranges.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-3"
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl px-6 py-2 overflow-hidden shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-base sm:text-lg text-slate-900 hover:text-primary py-4 hover:no-underline">
                Is managed IT infrastructure suitable for small and mid-size businesses, or only large enterprises?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 pb-4 border-t border-slate-200/60">
                Managed IT infrastructure is suitable for businesses of all sizes. SLA tiers, service
                scopes, and pricing structures scale easily to match specific business sizes,
                operational goals, and risk limits.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* ── SECTION 7: TAKE THE NEXT STEP ── */}
        <section className="bg-gradient-to-br from-slate-900 via-primary to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display mb-4">
              Take the Next Step Toward Enterprise Infrastructure Reliability
            </h2>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-4">
              Modernizing your IT stack requires clear technical planning, strong cybersecurity
              frameworks, and reliable execution. Partnering with{" "}
              <a
                href="https://www.cybaemtech.com/"
                className="text-cyan-300 font-bold underline hover:text-white transition-colors"
              >
                Cybaem Tech
              </a>{" "}
              gives you direct access to certified system engineers, 24/7 security monitoring, and
              scalable infrastructure solutions designed to keep your business running smoothly.
            </p>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-8">
              Let’s schedule an infrastructure audit today to identify your business performance
              bottlenecks and build a resilient technology ecosystem.
            </p>

            <div>
              <button
                onClick={() => openConsultationModal()}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-blue-50 font-bold text-sm sm:text-base transition-all shadow-md active:scale-[0.99]"
              >
                Schedule Infrastructure Audit Today
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
