import { useParams, Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  HeartPulse,
  Factory,
  Truck,
  Landmark,
  ShoppingBag,
  GraduationCap,
  Hotel,
  Shield,
  Layers,
  Sparkles,
  PhoneCall
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import StrategySessionForm from "@/components/StrategySessionForm";

const industryDetails: Record<
  string,
  {
    title: string;
    subtitle: string;
    desc: string;
    icon: typeof Building2;
    capabilities: string[];
    stats: { num: string; label: string }[];
  }
> = {
  "healthcare-technology-solutions": {
    title: "Healthcare Technology Solutions",
    subtitle: "Digital Health, Hospital IT & EHR Management",
    desc: "Empower patient care, HIPAA-compliant telehealth, and streamlined clinical workflows with enterprise healthtech software.",
    icon: HeartPulse,
    capabilities: [
      "Custom EHR / EMR Integration & Interoperability",
      "Telemedicine & Remote Patient Monitoring Platforms",
      "Hospital Management Information Systems (HMIS)",
      "HIPAA-Compliant Cloud Infrastructure & Data Security",
      "Patient Portals & Appointment Booking Automation",
    ],
    stats: [
      { num: "99.9%", label: "Uptime For Critical Health Systems" },
      { num: "50+", label: "Healthcare Deployments" },
      { num: "100%", label: "HIPAA & Regulatory Compliant" },
    ],
  },
  "manufacturing-technology-solutions": {
    title: "Manufacturing Technology Solutions",
    subtitle: "Industry 4.0, Smart Factory & IoT Automation",
    desc: "Connect factory floors, optimize supply planning, and leverage IoT telemetry for real-time manufacturing intelligence.",
    icon: Factory,
    capabilities: [
      "Smart Factory & IIoT Sensor Integration",
      "Manufacturing Execution Systems (MES)",
      "Predictive Maintenance & Machine Telemetry",
      "Supply Chain & Inventory Management ERP",
      "Quality Assurance & Production Analytics Dashboards",
    ],
    stats: [
      { num: "35%", label: "Downtime Reduction Achieved" },
      { num: "40+", label: "Industrial Plants Automated" },
      { num: "2.5x", label: "Operational Speed Increase" },
    ],
  },
  "logistics-supply-chain-technology-solutions": {
    title: "Logistics & Supply Chain Technology Solutions",
    subtitle: "Fleet Telematics, Warehouse Management & Freight Systems",
    desc: "Real-time visibility, automated dispatch, and resilient warehouse management systems for logistics providers.",
    icon: Truck,
    capabilities: [
      "Real-Time GPS Fleet Tracking & Dispatch Systems",
      "Warehouse Management Systems (WMS)",
      "Route Optimization & Fuel Efficiency Algorithms",
      "Multi-Carrier Freight Booking & Tracking APIs",
      "Automated Proof-of-Delivery (PoD) Mobile Apps",
    ],
    stats: [
      { num: "28%", label: "Lower Fuel & Route Costs" },
      { num: "1M+", label: "Shipments Tracked Daily" },
      { num: "99.4%", label: "On-Time Dispatch Accuracy" },
    ],
  },
  "financial-services-technology-solutions": {
    title: "Financial Services Technology Solutions",
    subtitle: "Fintech, Wealth Tech & Secure Banking Architecture",
    desc: "High-security banking portals, algorithmic wealth management, and payment integrations built with bank-grade encryption.",
    icon: Landmark,
    capabilities: [
      "Core Banking & Payment Gateway Integrations",
      "Fintech SaaS & Wealth Management Dashboards",
      "Automated KYC, AML & Fraud Detection Workflows",
      "SOC 2 & PCI-DSS Compliant Cloud Hosting",
      "Mobile Banking & Investment Applications",
    ],
    stats: [
      { num: "Bank-Grade", label: "256-Bit SSL & Encryption" },
      { num: "99.99%", label: "Transaction Reliability" },
      { num: "50M+", label: "Processed Transactions" },
    ],
  },
  "retail-ecommerce-technology-solutions": {
    title: "Retail & eCommerce Technology Solutions",
    subtitle: "Omnichannel Commerce, Point-of-Sale & Conversion Systems",
    desc: "Scale multi-channel commerce with ultra-fast web stores, automated inventory syncing, and customer retention tools.",
    icon: ShoppingBag,
    capabilities: [
      "High-Conversion Headless eCommerce Platforms",
      "Multi-Location POS & Omnichannel Inventory Sync",
      "AI-Powered Product Recommendations & Search",
      "Customer Loyalty, Rewards & Retention Workflows",
      "Automated Order Fulfillment & Courier Integrations",
    ],
    stats: [
      { num: "4.2x", label: "Higher Conversion Rates" },
      { num: "120+", label: "Stores & Retail Portals" },
      { num: "<1.2s", label: "Average Page Load Speed" },
    ],
  },
  "education-technology-solutions": {
    title: "Education Technology Solutions",
    subtitle: "EdTech, Learning Management & Interactive Classroom Platforms",
    desc: "Empower schools, universities, and coaching institutes with modern LMS, live interactive classrooms, and exam portals.",
    icon: GraduationCap,
    capabilities: [
      "Custom Learning Management Systems (LMS)",
      "Live Virtual Classroom & Video Streaming Integration",
      "Online Examination, Quiz & Grading Portals",
      "Student Information & Fee Collection Systems (SIS)",
      "Interactive Mobile Apps for Students & Parents",
    ],
    stats: [
      { num: "250K+", label: "Active Learners Supported" },
      { num: "99.8%", label: "Live Exam Session Stability" },
      { num: "65+", label: "Educational Institutions" },
    ],
  },
  "hospitality-technology-solutions": {
    title: "Hospitality Technology Solutions",
    subtitle: "Hotel Booking Engines, Guest Experience & Property Ops",
    desc: "Elevate guest satisfaction, drive direct commission-free bookings, and streamline front-desk operations for hotels and resorts.",
    icon: Hotel,
    capabilities: [
      "Commission-Free Direct Booking Engines & Websites",
      "Contactless Mobile Check-In & Digital Room Keys",
      "Property Management System (PMS) Integrations",
      "Restaurant POS, Table Reservation & QR Menus",
      "Guest CRM, Feedback Automation & Review Management",
    ],
    stats: [
      { num: "45%", label: "Direct Booking Growth" },
      { num: "90+", label: "Hotels & Resorts Powered" },
      { num: "4.8/5", label: "Guest Experience Rating" },
    ],
  },
};

export default function IndustryTechnologySolutions() {
  const { slug } = useParams<{ slug: string }>();
  const { openConsultationModal } = useConsultationModal();

  const currentSlug = slug || "technology-solutions";
  const data = industryDetails[currentSlug] || {
    title: "Specialized Industry Technology Solutions",
    subtitle: "Domain-Specific Digital Engineering & Growth",
    desc: "We build custom software, cloud systems, and high-performance digital platforms tailored to your industry's specific workflows and compliance demands.",
    icon: Building2,
    capabilities: [
      "Enterprise Workflow & Architecture Modernization",
      "Custom Domain CRM & Automation",
      "Cloud Infrastructure & Regulatory Security",
      "High-Conversion Web & Mobile Applications",
      "Dedicated Technology Support & Managed Services",
    ],
    stats: [
      { num: "100+", label: "Enterprises Powered" },
      { num: "99.9%", label: "System Availability" },
      { num: "24/7", label: "Proactive IT Support" },
    ],
  };

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <SEOHead
        title={`${data.title} | Cybaem Tech`}
        description={data.desc}
        canonical={`https://www.cybaemtech.com/industries/${currentSlug}`}
      />

      <Navbar />

      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-sky-50/70 via-white to-slate-50 py-16 border-b border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                  <Icon size={14} />
                  <span>Industry Technology Solutions</span>
                </div>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
                  {data.title}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                  {data.desc}
                </p>

                {/* Key capabilities list */}
                <div className="space-y-3 mb-8">
                  {data.capabilities.slice(0, 4).map((cap) => (
                    <div key={cap} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-xs">
                        <CheckCircle2 size={13} strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#strategy-form"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0a2540] hover:bg-primary text-white font-bold text-sm transition-all shadow-md cursor-pointer"
                  >
                    <span>Book Strategy Session</span>
                    <ArrowRight size={16} />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-200 transition-all shadow-xs"
                  >
                    <PhoneCall size={16} className="text-primary" />
                    <span>Talk to Domain Architect</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Unified Strategy Session Form */}
              <div className="lg:col-span-5">
                <StrategySessionForm
                  accentColor="primary"
                  tagText="GET STARTED"
                  title="Book a Free Strategy Session"
                  subtitle={`Share your details and our industry architects will get in touch with a tailored plan for your business.`}
                  buttonText="Book My Strategy Session"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="bg-[#0a2540] py-10 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              {data.stats.map((st) => (
                <div key={st.label} className="pt-4 md:pt-0">
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#38bdf8] block mb-1">
                    {st.num}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block mb-2">
                CORE CAPABILITIES
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Tailored Systems Built for {data.title.replace("Technology Solutions", "")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.capabilities.map((cap, i) => (
                <div
                  key={cap}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-primary flex items-center justify-center font-bold text-sm mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {cap}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Custom built and calibrated according to industry benchmarks, security protocols, and operational workflows.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-slate-900 text-white text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold mb-4">
              Ready to Accelerate Your Industry Transformation?
            </h2>
            <p className="text-sm text-slate-300 mb-8">
              Consult with Cybaem Tech experts to architect scalable software, streamline operations, and drive measurable ROI.
            </p>
            <a
              href="#strategy-form"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-[#003d99] text-white font-bold text-sm transition-all shadow-lg cursor-pointer"
            >
              <span>Book a Free Strategy Session</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <Footer variant="dark" />
    </div>
  );
}
