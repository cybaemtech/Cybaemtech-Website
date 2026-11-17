import enterpriseHero1 from "@/assets/CT images/Product-Enterprise software/enterprise-hero-1.webp";
import enterpriseHero2 from "@/assets/CT images/Product-Enterprise software/enterprise-hero-2.webp";

export interface Guarantee {
  stat: string;
  label: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface SolutionVertical {
  slug: string;
  title: string;
  accentWord: string;
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroKeywords: string[];
  heroImage: string;
  testimonial: Testimonial;
  trustImages: [string, string];
  guarantees: Guarantee[];
  faqs: { question: string; answer: string }[];
  ctaHeadline: string;
  relatedSlugs: string[];
}

export const solutionsData: Record<string, SolutionVertical> = {
  "enterprise-software": {
    slug: "enterprise-software",
    title: "Enterprise Software",
    accentWord: "Software",
    metaTitle: "Enterprise Custom Software Development | Cybaem Tech",
    metaDescription: "AI-powered enterprise software - CRM Ace | Pro, Project Management, DMS, ITSM, Site Engineer Ecosystem & HR Management. ISO-certified delivery.",
    ogImage: "https://cybaemtech.com/images/og-enterprise-software.jpg",
    heroHeadline: "Enterprise Software Development Solutions",
    heroSubheadline: "We provide custom enterprise software development solutions, ERP/CRM engineering, and legacy system modernization backed by 14+ years of QA automation and dual ISO certifications.",
    heroKeywords: ["AI-POWERED", "CUSTOM-BUILT", "ISO-CERTIFIED"],
    heroImage: enterpriseHero1,
    testimonial: {
      quote: "Cybaem Tech's CRM Ace Pro transformed our entire sales pipeline - deployment was flawless, secure, and fully aligned with our enterprise standards.",
      author: "Jordan Ellis",
      role: "Chief Operations Officer",
      company: "Apex Solutions",
    },
    trustImages: [enterpriseHero1, enterpriseHero2],
    guarantees: [
      { stat: "99.9%", label: "Uptime SLA", description: "Always-on, enterprise-grade reliability for all our platforms" },
      { stat: "48-hour", label: "Deployment", description: "Rapid onboarding and zero bottlenecks on every project" },
      { stat: "100%", label: "Certified Talent", description: "Fully accredited engineering teams across all verticals" },
      { stat: "ISO 27001", label: "& 27017", description: "Dual ISO-certified data security and cloud compliance" },
      { stat: "Zero", label: "Scope-Creep", description: "Requirement freeze protocol - no overruns, guaranteed" },
      { stat: "24/7", label: "Global Support", description: "Continuous incident response and proactive monitoring" },
    ],
    faqs: [
      {
        question: "What AI-powered products has Cybaem built?",
        answer: "We've developed a suite of enterprise AI platforms: Cybaem CRM Ace | Pro (AI-driven sales and customer management), a Project Management Tool with intelligent task automation, Document Management System (DMS) with AI-powered search and classification, ITSM Tool for IT service management, Site Engineer Ecosystem for field operations, and a comprehensive HR Management System.",
      },
      {
        question: "How does Cybaem CRM Ace | Pro differ from off-the-shelf CRMs?",
        answer: "CRM Ace | Pro is built with AI at its core - predictive lead scoring, automated pipeline management, intelligent customer insights, and seamless integration with your existing enterprise stack. Unlike generic CRMs, it's architected around your specific workflows and data models.",
      },
      {
        question: "How long does a typical enterprise software project take?",
        answer: "Most projects follow a 12-16 week delivery cycle, with functional prototypes available within the first 4 weeks. We use agile sprints with weekly demos so you see progress continuously.",
      },
      {
        question: "Can you integrate with our existing legacy systems?",
        answer: "Absolutely. We specialize in bridging legacy infrastructure with modern architectures through custom API layers, middleware, and data migration pipelines - without disrupting your current operations.",
      },
      {
        question: "How do you ensure data security and compliance?",
        answer: "Every system is built with ISO 27001 security controls, encrypted data at rest and in transit, role-based access, and comprehensive audit logging. We also support GDPR, HIPAA, and SOC 2 compliance requirements.",
      },
    ],
    ctaHeadline: "Ready to Replace Workarounds with Real Systems?",
    relatedSlugs: ["web-systems", "enterprise-software"],
  },

  "web-systems": {
    slug: "web-systems",
    title: "Web Systems",
    accentWord: "Web",
    metaTitle: "Custom Web Applications & System Development | Cybaem Tech",
    metaDescription: "Enterprise corporate websites, e-commerce platforms, SPA/PWA development, and UI/UX design that converts. Secure, fast, and delivered on deadline.",
    ogImage: "https://cybaemtech.com/images/og-web-systems.jpg",
    heroHeadline: "Custom Web Systems & Application Development",
    heroSubheadline: "We design, develop, and deliver secure, scalable, high-performance web applications & systems that drive digital transformation and measurable results.",
    heroKeywords: ["PERFORMANCE", "CONVERSION", "SECURITY"],
    heroImage: enterpriseHero2,
    testimonial: {
      quote: "Our new platform loads 3x faster and conversions jumped 40% in the first month. Cybaem delivered exactly what they promised.",
      author: "Sarah Mitchell",
      role: "VP of Digital",
      company: "Horizon Group",
    },
    trustImages: [enterpriseHero2, enterpriseHero1],
    guarantees: [
      { stat: "200+", label: "Platforms Launched", description: "Enterprise web systems deployed globally" },
      { stat: "3x", label: "Conversion Lift", description: "Average improvement in conversion rates" },
      { stat: "0.8s", label: "Load Time", description: "Target page load across all devices" },
      { stat: "98%", label: "Client Retention", description: "Long-term partnership success rate" },
      { stat: "Zero", label: "Downtime Migration", description: "Seamless platform transitions" },
      { stat: "24/7", label: "Monitoring", description: "Continuous performance optimization" },
    ],
    faqs: [
      { question: "How do you ensure websites load fast globally?", answer: "We use CDN distribution, edge caching, optimized asset delivery, lazy loading, and server-side rendering. Every site is benchmarked against Core Web Vitals targets before launch." },
      { question: "Can you rebuild our existing website without downtime?", answer: "Yes. We run parallel development environments and use staged migration strategies. Your current site stays live until the new platform is fully tested and ready for cutover." },
      { question: "Do you handle ongoing maintenance and updates?", answer: "We offer managed maintenance plans including security patching, performance monitoring, content updates, and quarterly UX audits to keep your platform performing optimally." },
      { question: "How do you approach mobile responsiveness?", answer: "We design mobile-first, testing across 20+ device configurations. Every interface is built with responsive breakpoints, touch-optimized interactions, and adaptive content strategies." },
    ],
    ctaHeadline: "Ready to Build a Website That Actually Converts?",
    relatedSlugs: ["enterprise-software", "digital-revenue-growth"],
  },

  "it-staff-augmentation": {
    slug: "it-staff-augmentation",
    title: "IT Staff Augmentation",
    accentWord: "Augmentation",
    metaTitle: "Offshore IT Staff Augmentation Services | Cybaem Tech",
    metaDescription: "Scale your tech team in 48 hours with our IT staff augmentation services. Access pre-vetted senior software engineers, QA leads, and cloud architects.",
    ogImage: "https://cybaemtech.com/images/og-it-staff-augmentation.jpg",
    heroHeadline: "IT Staff Augmentation,\nElite Engineers Embedded Instantly.",
    heroSubheadline: "Scale your engineering capabilities with pre-vetted senior software developers, DevOps engineers, and QA specialists through our IT staff augmentation services.",
    heroKeywords: ["PRE-VETTED", "48-HOUR DEPLOY", "SCALABLE"],
    heroImage: enterpriseHero1,
    testimonial: {
      quote: "We scaled from 5 to 25 engineers in under a month. The quality and cultural fit exceeded every expectation.",
      author: "Michael Torres",
      role: "CTO",
      company: "NovaTech Systems",
    },
    trustImages: [enterpriseHero1, enterpriseHero2],
    guarantees: [
      { stat: "500+", label: "Engineers Deployed", description: "Pre-vetted talent placed globally" },
      { stat: "48hr", label: "Placement Time", description: "Average time to embed an engineer" },
      { stat: "60%", label: "Cost Savings", description: "Compared to local hiring costs" },
      { stat: "95%", label: "Satisfaction", description: "Client satisfaction score" },
      { stat: "Zero", label: "HR Overhead", description: "We handle contracts and payroll" },
      { stat: "24/7", label: "Support", description: "Continuous team management" },
    ],
    faqs: [
      { question: "How quickly can you place an engineer on our project?", answer: "We maintain a pre-vetted talent pool. Most placements happen within 48 hours. For highly specialized roles, we can deliver candidates within 5 business days." },
      { question: "How do you ensure quality and cultural fit?", answer: "Every engineer undergoes technical assessments, soft-skill evaluations, and trial periods. We match not just skills but communication style, timezone alignment, and team dynamics." },
      { question: "What if an engineer isn't the right fit?", answer: "We offer a replacement guarantee. If an engineer doesn't meet your expectations within the first two weeks, we provide a replacement at no additional cost." },
      { question: "Can we convert augmented staff to full-time hires?", answer: "Yes. We offer a hire-to-convert model with transparent buyout terms. Many of our clients transition augmented engineers into permanent team members." },
    ],
    ctaHeadline: "Ready to Scale Your Engineering Team in 48 Hours?",
    relatedSlugs: ["enterprise-software", "cloud-security"],
  },


  "digital-revenue-growth": {
    slug: "digital-revenue-growth",
    title: "Performance Marketing",
    accentWord: "Marketing",
    metaTitle: "Google Ads & Meta Ads Management | CybaemTech",
    metaDescription: "We manage Google Ads and Meta Ads built for quality leads, not empty clicks. Get more leads and sales from every rupee you spend.",
    ogImage: "https://cybaemtech.com/images/og-digital-revenue-growth.jpg",
    heroHeadline: "Revenue growth, engineered - not guessed",
    heroSubheadline: "Transform your digital presence into a predictable B2B lead engine with data-driven SEO, conversion optimization, and executive thought leadership.",
    heroKeywords: ["DATA-DRIVEN", "ROI-FOCUSED", "AI-OPTIMIZED"],
    heroImage: enterpriseHero1,
    testimonial: {
      quote: "Organic leads increased 300% in 6 months. Cybaem doesn't do marketing - they build revenue machines.",
      author: "David Park",
      role: "CMO",
      company: "Elevate Dynamics",
    },
    trustImages: [enterpriseHero1, enterpriseHero2],
    guarantees: [
      { stat: "300%", label: "Traffic Lift", description: "Average organic traffic improvement" },
      { stat: "5x", label: "Lead Quality", description: "Qualified lead improvement" },
      { stat: "45%", label: "CRO Lift", description: "Average revenue per visitor increase" },
      { stat: "80+", label: "Executive Brands", description: "LinkedIn thought leaders built" },
      { stat: "Zero", label: "Vanity Metrics", description: "Everything tied to revenue" },
      { stat: "24/7", label: "Analytics", description: "Real-time performance dashboards" },
    ],
    faqs: [
      { question: "How long before we see results from SEO?", answer: "Typically 3-6 months for significant organic traffic improvements. However, we implement quick-win technical optimizations and content strategies that can show measurable improvements within the first 30 days." },
      { question: "What makes your SEO approach different from other agencies?", answer: "We go beyond traditional SEO with AEO (optimizing for AI answer engines), GEO (generative engine optimization), and SXO (search experience optimization). This future-proofs your visibility as search evolves." },
      { question: "How do you measure ROI on digital marketing?", answer: "Every campaign is tied to revenue attribution models. We track cost per qualified lead, pipeline contribution, customer acquisition cost, and lifetime value - not just clicks and impressions." },
      { question: "What's included in the Executive LinkedIn Growth Plan?", answer: "Content strategy development, ghostwritten thought leadership posts, engagement optimization, network expansion tactics, and monthly analytics reporting. We turn your executives into magnets for inbound opportunities." },
    ],
    ctaHeadline: "Ready to Turn Traffic Into Revenue?",
    relatedSlugs: ["web-systems", "enterprise-software", "it-infrastructure-services"],
  },

  "it-infrastructure-services": {
    slug: "it-infrastructure-services",
    title: "IT Infrastructure Services",
    accentWord: "Infrastructure",
    metaTitle: "Enterprise IT Infrastructure Services & Solutions | Cybaem Tech",
    metaDescription: "Scale your business with enterprise IT infrastructure services, expert cloud management, cybersecurity, 24/7 monitoring, and business continuity solutions.",
    ogImage: "https://www.cybaemtech.com/images/og-it-infrastructure-services.jpg",
    heroHeadline: "Enterprise IT Infrastructure Built for Resilience & Scale",
    heroSubheadline: "End-to-end IT infrastructure management, cloud computing, hyperconverged architecture, network optimization, and 24/7 uptime monitoring tailored for global enterprises.",
    heroKeywords: ["24/7 UPTIME", "HYPERCONVERGED", "CLOUD-OPTIMIZED"],
    heroImage: enterpriseHero1,
    testimonial: {
      quote: "Cybaem Tech revamped our entire server infrastructure and hybrid cloud ecosystem with zero disruption to daily trading operations.",
      author: "Siddharth Mehta",
      role: "VP Technology",
      company: "Apex Infotech",
    },
    trustImages: [enterpriseHero1, enterpriseHero2],
    guarantees: [
      { stat: "99.99%", label: "Uptime SLA", description: "Guaranteed high availability infrastructure" },
      { stat: "24/7", label: "Monitoring", description: "Continuous NOC & SOC surveillance" },
      { stat: "500+", label: "Servers Managed", description: "Across global data centers & clouds" },
      { stat: "<15min", label: "MTTR", description: "Rapid incident resolution speed" },
      { stat: "Zero", label: "Data Loss", description: "Automated snapshot & DR replication" },
      { stat: "Dual", label: "ISO Certified", description: "ISO 27001 and ISO 9001 certified" },
    ],
    faqs: [
      { question: "What services are included under IT Infrastructure Management?", answer: "We provide comprehensive server administration, network engineering, automated disaster recovery, storage management, hardware lifecycle services, and proactive health monitoring." },
      { question: "Can you assist with hybrid cloud infrastructure migration?", answer: "Yes, we architect and execute seamless migrations between on-premises data centers, AWS, Azure, and Google Cloud with verified zero data loss." },
      { question: "Do you offer Annual Maintenance Contracts (AMC) for IT infrastructure?", answer: "Yes, we provide structured AMC SLAs covering on-site and remote infrastructure support, periodic audits, hardware maintenance, and security patch management." },
      { question: "How do you protect IT infrastructure from cyber threats?", answer: "We integrate enterprise firewalls, Zero-Trust endpoint protection, vulnerability management, and 24/7 SIEM/SOC log monitoring into your infrastructure baseline." },
    ],
    ctaHeadline: "Ready to Upgrade Your Enterprise Infrastructure?",
    relatedSlugs: ["it-infrastructure-services", "enterprise-software"],
  },
};

export const allSolutions = Object.values(solutionsData).filter(
  (s) => s.slug !== "it-staff-augmentation" 
);
export const getSolution = (slug: string) => solutionsData[slug];
