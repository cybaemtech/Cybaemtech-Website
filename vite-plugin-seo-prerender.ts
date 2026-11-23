import type { Plugin } from "vite";
import fs from "fs";
import path from "path";
import { homeSeoData } from "./src/data/seo/homeSeo";
import { aboutSeoData } from "./src/data/seo/aboutSeo";
import { contactSeoData } from "./src/data/seo/contactSeo";
import { lifeAtCybaemtechSeoData } from "./src/data/seo/lifeAtCybaemtechSeo";
import { blogSeoData } from "./src/data/seo/blogSeo";
import { webSystemsSeoData } from "./src/data/seo/webSystemsSeo";
import { managedITSeoData } from "./src/data/seo/managedITSeo";
import { itAugmentationSeoData } from "./src/data/seo/itAugmentationSeo";
import { digitalMarketingSeoData } from "./src/data/seo/digitalMarketingSeo";
import { enterpriseSoftwareSeoData } from "./src/data/seo/enterpriseSoftwareSeo";
import { itInfrastructureServicesSeoData } from "./src/data/seo/itInfrastructureServicesSeo";
import { leadershipSeoData } from "./src/data/seo/leadershipSeo";
import { managedITContinuitySeoData } from "./src/data/seo/managedITContinuitySeo";

interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImageAlt?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImageAlt?: string;
  jsonLd?: object[];
}

const BASE_URL = "https://www.cybaemtech.com";
const OG_IMAGE = "https://www.cybaemtech.com/images/cybaem-logo.webp";
const AUTHOR = "Cybaem Tech Pvt Ltd";
const THEME_COLOR = "#1f5b8f";
const ROBOTS = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

/* ── Shared JSON-LD building blocks ── */

const org = (desc?: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Cybaem Tech Pvt. Ltd.",
  url: `${BASE_URL}/`,
  logo: OG_IMAGE,
  email: "sales@cybaemtech.com",
  telephone: "+91-9028541383",
  foundingDate: "2020",
  founder: { "@type": "Person", name: "Rohan Bhosale" },
  description: desc || "Cybaem Tech Pvt. Ltd. is a premier global technology solutions company specializing in IT infrastructure management, software development services, cloud computing solutions, managed IT services, cyber security and digital marketing solutions.",
  sameAs: [
    "https://in.linkedin.com/company/cybaemtech",
    "https://x.com/Cybaem_Tech",
    "https://www.facebook.com/cybaemtech/",
    "https://www.instagram.com/cybaemtech/",
    "https://www.youtube.com/@cybaemtech",
  ],
  contactPoint: [
    { "@type": "ContactPoint", contactType: "sales", telephone: "+91-9028541383", email: "sales@cybaemtech.com", areaServed: "IN", availableLanguage: ["en"] },
  ],
});

const profService = (id?: string) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": id || `${BASE_URL}/#localbusiness`,
  name: "Cybaem Tech Pvt. Ltd.",
  image: OG_IMAGE,
  url: `${BASE_URL}/`,
  telephone: "+91-9028541383",
  email: "sales@cybaemtech.com",
  address: { "@type": "PostalAddress", streetAddress: "Suratwala Mark Plazzo, Hinjawadi", addressLocality: "Pune", addressRegion: "Maharashtra", postalCode: "411057", addressCountry: "IN" },
  geo: { "@type": "GeoCoordinates", latitude: 18.5912, longitude: 73.7389 },
  areaServed: [{ "@type": "City", name: "Pune" }, { "@type": "Country", name: "India" }],
});

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: `${BASE_URL}/`,
  name: "Cybaem Tech",
  publisher: { "@id": `${BASE_URL}/#organization` },
};

const breadcrumb2 = (name: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name, item: `${BASE_URL}${url}` },
  ],
});

const breadcrumb3 = (parentName: string, parentUrl: string, name: string, url: string, id?: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  ...(id ? { "@id": id } : {}),
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name: parentName, item: `${BASE_URL}${parentUrl}` },
    { "@type": "ListItem", position: 3, name, item: `${BASE_URL}${url}` },
  ],
});

const faq = (items: { q: string; a: string }[], id?: string) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  ...(id ? { "@id": id } : {}),
  name: "FAQ",
  mainEntity: items.map(({ q, a }, index) => ({
    "@type": "Question",
    ...(id ? { "@id": `${id}/question-${index + 1}` } : {}),
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      ...(id ? { "@id": `${id}/answer-${index + 1}` } : {}),
      text: a,
    },
  })),
});

const webpage = (url: string, name: string, desc: string, id?: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  ...(id ? { "@id": id } : {}),
  url: `${BASE_URL}${url}`,
  name,
  description: desc,
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#organization` },
  primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
});

/* ── Route meta definitions ── */

const routes: Record<string, RouteMeta> = {
  "/": {
    ...homeSeoData,
  },

  "/about": {
    ...aboutSeoData,
  },

  "/approach": {
    title: "Our Approach | Leadership, Partnerships & Technology Excellence",
    description: "Explore Cybaem Tech's approach to leadership, strategic partnerships, innovation, company culture and technology excellence that drives scalable business growth.",
    canonical: "/approach",
    keywords: "Cybaem Tech approach, IT company leadership, technology partnerships, strategic partnerships, IT consulting company Pune, innovation driven technology company, digital marketing leadership, enterprise IT approach, company culture technology, software company values Pune",
    ogDescription: "Discover Cybaem Tech's leadership philosophy, strategic partnerships, innovation culture and business-first technology approach.",
    ogImageAlt: "Cybaem Tech leadership and partnership approach",
    twitterDescription: "See how Cybaem Tech combines leadership, innovation, partnerships and culture to deliver world-class technology solutions.",
    twitterImageAlt: "Cybaem Tech leadership and partnership approach",
    jsonLd: [
      org("Cybaem Tech Pvt. Ltd. is a global technology solutions company specializing in IT infrastructure management, software development, cloud computing, cyber security, managed IT services and digital marketing solutions."),
      
      website,
      webpage("/approach", "Our Approach | Leadership, Partnerships & Technology Excellence", "Explore Cybaem Tech's leadership philosophy, strategic partnerships, innovation mindset, team culture and technology-driven approach to business growth.", `${BASE_URL}/approach#webpage`),
      {
        "@context": "https://schema.org", "@type": "AboutPage", "@id": `${BASE_URL}/approach#aboutpage`,
        url: `${BASE_URL}/approach`,
        name: "Cybaem Tech Approach",
        description: "Cybaem Tech's approach combines visionary leadership, strategic partnerships, innovation, customer-centric execution, team culture and technology excellence.",
        mainEntity: { "@id": `${BASE_URL}/#organization` },
      },
      {
        "@context": "https://schema.org", "@type": "BreadcrumbList", "@id": `${BASE_URL}/approach#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Approach", item: `${BASE_URL}/approach` },
        ],
      },
      {
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Person", "@id": `${BASE_URL}/approach#rohan-bhosale`, name: "Rohan Bhosale", jobTitle: "Founder & CEO", worksFor: { "@id": `${BASE_URL}/#organization` }, description: "Founder and CEO of Cybaem Tech with 18+ years of experience in global IT strategy and digital marketing." },
          { "@type": "Person", "@id": `${BASE_URL}/approach#akshay-navale`, name: "Akshay Navale", jobTitle: "Chief Technology AI Product Officer", worksFor: { "@id": `${BASE_URL}/#organization` }, description: "Chief Technology AI Product Officer at Cybaem Tech with 15+ years of experience in AI strategy, product leadership, cybersecurity and cloud infrastructure." },
          { "@type": "Person", "@id": `${BASE_URL}/approach#yash-bhalekar`, name: "Yash Bhalekar", jobTitle: "Director", worksFor: { "@id": `${BASE_URL}/#organization` }, description: "Director at Cybaem Tech with 12+ years of experience in business development, fintech solutions, investment strategy and risk management." },
        ],
      },
      faq([
        { q: "What is Cybaem Tech's approach to technology solutions?", a: "Cybaem Tech follows a customer-centric, innovation-driven approach built on strong leadership, strategic partnerships, quality execution and scalable technology solutions." },
        { q: "Who leads Cybaem Tech?", a: "Cybaem Tech is led by Rohan Bhosale, Founder and CEO, along with Akshay Navale, Chief Technology AI Product Officer, and Yash Bhalekar, Director." },
        { q: "What values define Cybaem Tech?", a: "Cybaem Tech is guided by innovation, collaboration, continuous learning, diversity and inclusion, excellence, work-life balance and customer-centric execution." },
        { q: "Why are partnerships important to Cybaem Tech?", a: "Strategic partnerships help Cybaem Tech deliver world-class technology solutions, expand capabilities and provide specialized expertise across the technology stack." },
      ], `${BASE_URL}/approach#faq`),
    ],
  },

  "/contact": { ...contactSeoData },
  "/leadership": { ...leadershipSeoData },
  "/life-at-cybaemtech": { ...lifeAtCybaemtechSeoData },
  "/blog": { ...blogSeoData },
  "/software-platforms/web-systems": { ...webSystemsSeoData },

  "/software-platforms/web-systems": {
    title: "Website Development Company in Pune | Web Systems & Platforms",
    description: "Cybaem Tech builds secure, conversion-focused websites, eCommerce stores, landing pages, SaaS platforms and custom web systems for scalable business growth.",
    canonical: "/software-platforms/web-systems",
    keywords: "website development company Pune, web development company Pune, custom website development, ecommerce website development, landing page design company, SaaS development company, web application development, business website development, conversion focused websites, enterprise web systems India",
    ogDescription: "Build high-converting websites, eCommerce stores, landing pages, SaaS platforms and custom web systems with Cybaem Tech.",
    ogImageAlt: "Cybaem Tech web systems and website development solutions",
    twitterDescription: "Secure, fast and conversion-optimized web systems including websites, eCommerce stores, landing pages and SaaS applications.",
    twitterImageAlt: "Cybaem Tech web systems and website development solutions",
    jsonLd: [
      org("Cybaem Tech Pvt. Ltd. is a technology solutions company delivering website development, custom web systems, eCommerce development, SaaS platforms, managed IT services and digital growth solutions."),
      
      website,
      webpage("/software-platforms/web-systems", "Website Development Company in Pune | Web Systems & Platforms", "Cybaem Tech builds secure, high-performance and conversion-optimized websites, eCommerce stores, SaaS applications and custom web systems.", `${BASE_URL}/software-platforms/web-systems#webpage`),
      breadcrumb3("Solutions", "/", "Web Systems", "/software-platforms/web-systems", `${BASE_URL}/software-platforms/web-systems#breadcrumb`),
      {
        "@context": "https://schema.org", "@type": "Service", "@id": `${BASE_URL}/software-platforms/web-systems#service`,
        name: "Web Systems & Website Development", url: `${BASE_URL}/software-platforms/web-systems`,
        serviceType: "Website Development and Web Systems",
        provider: { "@id": `${BASE_URL}/#organization` }, areaServed: "India",
        description: "Custom website development and web platform services including business websites, eCommerce websites, landing pages, blogs, SaaS platforms, web applications and educational portals.",
        hasOfferCatalog: {
          "@type": "OfferCatalog", name: "Web Systems Services",
          itemListElement: ["Business Website Development", "Corporate Website Development", "eCommerce Website Development", "Portfolio Website Development", "Landing Page Design and Development", "Blog Website Development", "SaaS Platform Development", "Web Application Development", "Educational and Information Portal Development"].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
        },
      },
      faq([
        { q: "What types of web systems does Cybaem Tech build?", a: "Cybaem Tech builds business websites, corporate websites, eCommerce stores, portfolio websites, landing pages, blogs, SaaS platforms, web applications and educational portals." },
        { q: "Do you build custom websites for businesses?", a: "Yes, Cybaem Tech develops custom websites tailored to business goals, brand identity, performance needs and conversion requirements." },
        { q: "Can Cybaem Tech develop eCommerce websites?", a: "Yes, Cybaem Tech builds secure eCommerce websites with product catalogs, shopping carts, payment gateway integration and conversion-focused design." },
        { q: "Do you create landing pages for campaigns?", a: "Yes, Cybaem Tech creates high-converting landing pages designed for specific campaigns, lead generation and call-to-action performance." },
        { q: "Do you build SaaS platforms and web applications?", a: "Yes, Cybaem Tech develops SaaS platforms and custom web applications with authentication, dashboards, workflow tools and scalable architecture." },
        { q: "How fast and secure are your web systems?", a: "Cybaem Tech builds web systems with enterprise-grade security, performance-first architecture and optimized load times to support reliability and conversions." },
      ], `${BASE_URL}/software-platforms/web-systems#faq`),
    ],
  },

  "/solutions/it-staff-augmentation": {
    title: "IT Staff Augmentation Company in Pune | Hire IT Engineers Fast",
    description: "Hire pre-vetted IT engineers in 48 hours with Cybaem Tech. IT staff augmentation for developers, DevOps, cybersecurity, QA, support, cloud and infrastructure teams.",
    canonical: "/solutions/it-staff-augmentation",
    keywords: "IT staff augmentation company Pune, staff augmentation services India, hire dedicated developers, remote IT specialists, IT staffing company Pune, DevOps engineers for hire, cybersecurity engineers for hire, QA testing engineers, helpdesk outsourcing, contract IT hiring, offshore IT staffing, dedicated IT team",
    ogDescription: "Scale faster with pre-vetted developers, DevOps, cloud, QA, support and cybersecurity engineers deployed in as little as 48 hours.",
    ogImageAlt: "Cybaem Tech IT staff augmentation services",
    twitterDescription: "Embed elite IT professionals into your team with flexible hiring models, 48-hour deployment and ongoing support from Cybaem Tech.",
    twitterImageAlt: "Cybaem Tech IT staff augmentation services",
    jsonLd: [
      org("Cybaem Tech Pvt. Ltd. provides IT staff augmentation, software development, cloud, cybersecurity, managed IT services and digital growth solutions."),
      
      website,
      webpage("/solutions/it-staff-augmentation", "IT Staff Augmentation Company in Pune | Hire IT Engineers Fast", "Cybaem Tech provides IT staff augmentation services with pre-vetted developers, cloud engineers, QA experts, cybersecurity talent and support professionals.", `${BASE_URL}/solutions/it-staff-augmentation#webpage`),
      breadcrumb3("Solutions", "/", "IT Staff Augmentation", "/solutions/it-staff-augmentation", `${BASE_URL}/solutions/it-staff-augmentation#breadcrumb`),
      {
        "@context": "https://schema.org", "@type": "Service", "@id": `${BASE_URL}/solutions/it-staff-augmentation#service`,
        name: "IT Staff Augmentation", url: `${BASE_URL}/solutions/it-staff-augmentation`,
        serviceType: "IT Staff Augmentation Services",
        provider: { "@id": `${BASE_URL}/#organization` }, areaServed: "India",
        description: "IT staff augmentation services with dedicated onsite engineers, remote IT specialists, project-based staffing, helpdesk outsourcing, system admins and long-term contract hiring.",
        hasOfferCatalog: {
          "@type": "OfferCatalog", name: "IT Staff Augmentation Services",
          itemListElement: ["Dedicated Onsite IT Engineers", "Remote IT Specialists", "Project-Based Staffing", "Helpdesk Outsourcing", "Network and System Administration Staffing", "Contract and Long-Term IT Hiring"].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
        },
      },
      {
        "@context": "https://schema.org", "@type": "ItemList", "@id": `${BASE_URL}/solutions/it-staff-augmentation#talent-categories`,
        name: "IT Talent Categories",
        itemListElement: ["Software and Web Developers", "Cloud and DevOps Engineers", "IT Support and Infrastructure Professionals", "Cybersecurity and Compliance Engineers", "QA and Testing Engineers", "IT Recruiters and Coordinators"].map((n, i) => ({ "@type": "ListItem", position: i + 1, name: n })),
      },
      {
        "@context": "https://schema.org", "@type": "Review", "@id": `${BASE_URL}/solutions/it-staff-augmentation#review-1`,
        itemReviewed: { "@id": `${BASE_URL}/solutions/it-staff-augmentation#service` },
        reviewBody: "Cybaem Tech helped us scale quickly with a dedicated DevOps team. Reliable, fast onboarding, and quality delivery!",
        author: { "@type": "Person", name: "Michael Torres" },
        publisher: { "@id": `${BASE_URL}/#organization` },
      },
      {
        "@context": "https://schema.org", "@type": "Review", "@id": `${BASE_URL}/solutions/it-staff-augmentation#review-2`,
        itemReviewed: { "@id": `${BASE_URL}/solutions/it-staff-augmentation#service` },
        reviewBody: "Their IT support engineers work as an extension of our team. Exceptional response time and professionalism.",
        author: { "@type": "Person", name: "Amanda Chen" },
        publisher: { "@id": `${BASE_URL}/#organization` },
      },
      faq([
        { q: "How quickly can you place an engineer on our project?", a: "Cybaem Tech can typically provide matched and verified candidate profiles within 24 to 48 hours, depending on the role and project requirements." },
        { q: "How do you ensure quality and cultural fit?", a: "Cybaem Tech screens candidates based on technical expertise, project alignment, communication skills and team fit to ensure smooth integration into your workflows." },
        { q: "What if an engineer is not the right fit?", a: "If a resource is not the right fit, Cybaem Tech supports a structured replacement process to minimize disruption and maintain delivery continuity." },
        { q: "Can we convert augmented staff to full-time hires?", a: "Yes, Cybaem Tech supports flexible engagement models, including contract-to-hire and long-term hiring arrangements, based on your needs." },
        { q: "What roles can you provide through IT staff augmentation?", a: "Cybaem Tech provides software developers, web developers, cloud and DevOps engineers, IT support specialists, cybersecurity professionals, QA engineers, recruiters and infrastructure experts." },
        { q: "What hiring models do you support?", a: "Cybaem Tech supports hourly, monthly dedicated, project-based and onsite plus offshore hybrid engagement models." },
      ], `${BASE_URL}/solutions/it-staff-augmentation#faq`),
    ],
  },

  "/solutions/cloud-security": {
    title: "Cloud & Security Solutions in Pune | 24/7 NOC & Zero Trust",
    description: "Secure your infrastructure with Cybaem Tech's managed IT and cloud security services. 24/7 NOC monitoring, Zero Trust security, cloud migration, and enterprise-grade protection.",
    canonical: "/solutions/cloud-security",
    keywords: "managed IT services Pune, cloud security services India, 24/7 NOC monitoring, Zero Trust security solutions, cloud migration services, IT infrastructure management, cybersecurity services Pune, managed cloud services, IT support services, enterprise security solutions",
    ogTitle: "Cloud & Security Solutions | 24/7 NOC & Zero Trust",
    ogDescription: "Enterprise-grade IT infrastructure protection with 24/7 monitoring, cloud security, Zero Trust architecture, and seamless cloud migrations.",
    ogImageAlt: "Managed IT and cloud security services by Cybaem Tech",
    twitterTitle: "Cloud & Security Solutions | 24/7 Monitoring",
    twitterDescription: "Protect your infrastructure with 24/7 NOC monitoring, Zero Trust security, and cloud-native protection solutions.",
    jsonLd: [
      {
        "@context": "https://schema.org", "@type": "Organization", "@id": `${BASE_URL}/#organization`,
        name: "Cybaem Tech Pvt. Ltd.", url: `${BASE_URL}/`, logo: OG_IMAGE,
        email: "sales@cybaemtech.com", telephone: "+91-9028541383",
        description: "Cybaem Tech delivers managed IT services, cloud security, NOC monitoring, Zero Trust architecture and enterprise infrastructure solutions.",
      },
      webpage("/solutions/cloud-security", "Cloud & Security Solutions in Pune", "Enterprise-grade infrastructure protection with 24/7 monitoring, cloud migration, and Zero Trust security.", `${BASE_URL}/solutions/cloud-security#webpage`),
      {
        "@context": "https://schema.org", "@type": "Service", "@id": `${BASE_URL}/solutions/cloud-security#service`,
        name: "Cloud & Security Solutions",
        serviceType: "Managed IT Services and Cloud Security",
        provider: { "@id": `${BASE_URL}/#organization` }, areaServed: "India",
        description: "Managed IT and cloud security services including 24/7 NOC monitoring, cloud migration, Zero Trust architecture, infrastructure protection and cybersecurity management.",
        hasOfferCatalog: {
          "@type": "OfferCatalog", name: "Managed IT Services",
          itemListElement: ["24/7 NOC Monitoring", "Cloud Migration Services", "Zero Trust Security Implementation", "Infrastructure Security Management", "Cloud Security & Compliance"].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
        },
      },
      breadcrumb3("Solutions", "/", "Managed IT & Cloud Security", "/solutions/cloud-security"),
      {
        "@context": "https://schema.org", "@type": "Review",
        reviewBody: "Zero security incidents since Cybaem took over our infrastructure. Their 24/7 NOC gives us peace of mind we never had before.",
        author: { "@type": "Person", name: "Amanda Chen" },
        itemReviewed: { "@id": `${BASE_URL}/solutions/cloud-security#service` },
      },
      faq([
        { q: "What does 24/7 NOC monitoring include?", a: "24/7 NOC monitoring includes continuous infrastructure monitoring, incident detection, performance tracking, and real-time response to ensure uptime and security." },
        { q: "How do you handle cloud migration without downtime?", a: "We use phased migration strategies, redundancy planning, and real-time testing to ensure minimal or zero downtime during cloud transitions." },
        { q: "What is Zero Trust security?", a: "Zero Trust security ensures that no user or system is trusted by default. Every access request is verified, authenticated, and continuously monitored." },
        { q: "Can you manage hybrid cloud environments?", a: "Yes, we manage hybrid cloud environments by integrating on-premise and cloud systems with centralized monitoring, security controls, and performance optimization." },
      ], `${BASE_URL}/solutions/cloud-security#faq`),
    ],
  },

  "/digital-growth": {
    title: "Digital Revenue Growth Services | B2B & D2C Performance Marketing Agency",
    description: "Scale predictable revenue with Cybaem Tech's digital growth engineering. SEO, Google Ads, CRO, LinkedIn marketing, and automation systems built for B2B & D2C brands.",
    canonical: "/digital-growth",
    keywords: "digital marketing agency Pune, performance marketing agency India, B2B lead generation services, SEO services India, Google Ads agency, conversion rate optimization services, LinkedIn marketing B2B, marketing automation services, revenue growth strategy, growth marketing agency",
    ogTitle: "Digital Revenue Growth Services | Performance Marketing Experts",
    ogDescription: "We don't just run ads - we build revenue systems. SEO, paid ads, CRO, and automation to generate predictable growth for B2B & D2C brands.",
    ogImageAlt: "Digital revenue growth services by Cybaem Tech",
    twitterTitle: "Digital Revenue Growth Engineering | Cybaem Tech",
    twitterDescription: "SEO, Ads, CRO & automation systems designed for predictable revenue growth.",
    jsonLd: [
      {
        "@context": "https://schema.org", "@type": "Organization", "@id": `${BASE_URL}/#organization`,
        name: "Cybaem Tech Pvt. Ltd.", url: `${BASE_URL}/`, logo: OG_IMAGE,
        email: "sales@cybaemtech.com", telephone: "+91-9028541383",
        description: "Cybaem Tech is a performance-driven digital growth partner offering SEO, paid ads, CRO, LinkedIn marketing, and marketing automation solutions.",
      },
      webpage("/digital-growth", "Digital Revenue Growth Services", "Performance-driven digital marketing systems including SEO, paid ads, CRO and automation for scalable growth.", `${BASE_URL}/digital-growth#webpage`),
      {
        "@context": "https://schema.org", "@type": "Service", "@id": `${BASE_URL}/digital-growth#service`,
        name: "Digital Revenue Growth Services",
        serviceType: "Performance Marketing & Growth Engineering",
        provider: { "@id": `${BASE_URL}/#organization` }, areaServed: "India",
        description: "End-to-end digital growth services including SEO, paid ads, conversion optimization, LinkedIn marketing, and marketing automation to drive predictable revenue.",
        hasOfferCatalog: {
          "@type": "OfferCatalog", name: "Growth Services",
          itemListElement: ["SEO Services (AEO, GEO, SXO)", "Google Ads & Performance Marketing", "Conversion Rate Optimization (CRO)", "LinkedIn Marketing for B2B", "Marketing Automation & CRM Integration"].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
        },
      },
      breadcrumb3("Solutions", "/", "Digital Revenue Growth", "/digital-growth"),
      faq([
        { q: "What makes Cybaem Tech different from other digital marketing agencies?", a: "Cybaem Tech focuses on building complete revenue systems instead of isolated campaigns. We combine SEO, paid ads, CRO, and automation to create predictable and scalable growth." },
        { q: "Do you provide B2B lead generation services?", a: "Yes, we specialize in B2B lead generation using SEO, LinkedIn marketing, Google Ads, and funnel optimization strategies." },
        { q: "How do you reduce cost per lead (CPL)?", a: "We improve targeting, optimize landing pages, implement CRO strategies, and refine campaign structures to reduce cost per lead while increasing quality." },
        { q: "Do you offer performance marketing for D2C brands?", a: "Yes, we provide full-funnel performance marketing for D2C brands including product visibility, paid ads, retention marketing, and conversion optimization." },
        { q: "Do you provide marketing automation services?", a: "Yes, we implement marketing automation systems including CRM integration, email workflows, lead scoring, and nurturing funnels." },
      ], `${BASE_URL}/digital-growth#faq`),
    ],
  },

  "/blog": {
    title: "Blog | Cybaem Tech - IT Services & Technology Insights",
    description: "Read the latest insights on IT services, software development, cloud computing, cyber security and digital marketing from Cybaem Tech.",
    canonical: "/blog",
    ogImageAlt: "Cybaem Tech blog",
    twitterDescription: "Technology insights and updates from Cybaem Tech.",
  },

  "/privacy-policy": {
    title: "Privacy Policy | Cybaem Tech Pvt Ltd",
    description: "Read the privacy policy of Cybaem Tech Pvt Ltd covering data collection, usage, and protection practices.",
    canonical: "/privacy-policy",
  },

  "/terms-of-service": {
    title: "Terms of Service | Cybaem Tech Pvt Ltd",
    description: "Read the terms of service for Cybaem Tech Pvt Ltd's IT services, software development and digital marketing solutions.",
    canonical: "/terms-of-service",
  },

  "/cookie-policy": {
    title: "Cookie Policy | Cybaem Tech Pvt Ltd",
    description: "Learn about how Cybaem Tech Pvt Ltd uses cookies and similar technologies on our website.",
    canonical: "/cookie-policy",
  },

  "/refund-cancellation-policy": {
    title: "Refund & Cancellation Policy | Cybaem Tech Pvt Ltd",
    description: "Read the refund and cancellation policy for Cybaem Tech Pvt Ltd services.",
    canonical: "/refund-cancellation-policy",
  },
};

/* ── HTML generation helpers ── */

function buildMetaTags(meta: RouteMeta): string {
  let fullCanonical = meta.canonical.startsWith("http") ? meta.canonical : `${BASE_URL}${meta.canonical}`;
  fullCanonical = fullCanonical.replace(/^https?:\/\/(?:www\.)?cybaemtech\.com/i, BASE_URL);
  const lines: string[] = [];

  lines.push(`    <title>${meta.title}</title>`);
  lines.push(`    <meta name="description" content="${escHtml(meta.description)}">`);
  lines.push(`    <meta name="author" content="${AUTHOR}">`);
  lines.push(`    <meta name="robots" content="${ROBOTS}">
    <meta name="googlebot" content="${ROBOTS}">
    <meta name="bingbot" content="${ROBOTS}">`);
  if (meta.keywords) lines.push(`    <meta name="keywords" content="${escHtml(meta.keywords)}">`);
  lines.push(`    <meta name="theme-color" content="${THEME_COLOR}">`);
  lines.push(`    <meta name="geo.region" content="IN-MH">`);
  lines.push(`    <meta name="geo.placename" content="Pune">`);
  lines.push(`    <meta name="geo.position" content="18.5912;73.7389">`);
  lines.push(`    <meta name="ICBM" content="18.5912,73.7389">`);
  lines.push(`    <link rel="canonical" href="${fullCanonical}">`);
  lines.push(``);
  lines.push(`    <meta property="og:type" content="website">`);
  lines.push(`    <meta property="og:site_name" content="Cybaem Tech">`);
  lines.push(`    <meta property="og:title" content="${escHtml(meta.ogTitle || meta.title)}">`);
  lines.push(`    <meta property="og:description" content="${escHtml(meta.ogDescription || meta.description)}">`);
  lines.push(`    <meta property="og:url" content="${fullCanonical}">`);
  lines.push(`    <meta property="og:image" content="${OG_IMAGE}">`);
  if (meta.ogImageAlt) lines.push(`    <meta property="og:image:alt" content="${escHtml(meta.ogImageAlt)}">`);
  lines.push(``);
  lines.push(`    <meta name="twitter:card" content="summary_large_image">`);
  lines.push(`    <meta name="twitter:site" content="@CybaemTech">`);
  lines.push(`    <meta name="twitter:title" content="${escHtml(meta.twitterTitle || meta.ogTitle || meta.title)}">`);
  lines.push(`    <meta name="twitter:description" content="${escHtml(meta.twitterDescription || meta.ogDescription || meta.description)}">`);
  lines.push(`    <meta name="twitter:image" content="${OG_IMAGE}">`);
  if (meta.twitterImageAlt || meta.ogImageAlt) lines.push(`    <meta name="twitter:image:alt" content="${escHtml(meta.twitterImageAlt || meta.ogImageAlt || "")}">`);

  if (meta.jsonLd && meta.jsonLd.length > 0) {
    for (const schema of meta.jsonLd) {
      lines.push(`    <script type="application/ld+json">${JSON.stringify(schema)}</script>`);
    }
  }

  return lines.join("\n");
}

function escHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function replaceMetaInHtml(html: string, meta: RouteMeta): string {
  let result = html;

  // Remove existing title
  result = result.replace(/<title>[\s\S]*?<\/title>/, "");

  // Remove meta tags we'll replace
  const metaPatterns = [
    /\s*<meta\s+name="description"[^>]*>/gi,
    /\s*<meta\s+name="author"[^>]*>/gi,
    /\s*<meta\s+name="keywords"[^>]*>/gi,
    /\s*<meta\s+name="robots"[^>]*>/gi,
    /\s*<meta\s+name="theme-color"[^>]*>/gi,
    /\s*<meta\s+name="geo\.[^"]*"[^>]*>/gi,
    /\s*<meta\s+name="ICBM"[^>]*>/gi,
    /\s*<meta\s+property="og:[^"]*"[^>]*>/gi,
    /\s*<meta\s+name="twitter:[^"]*"[^>]*>/gi,
    /\s*<link\s+rel="canonical"[^>]*>/gi,
    /\s*<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi,
  ];

  for (const pattern of metaPatterns) {
    result = result.replace(pattern, "");
  }

  // Insert new meta tags after <meta name="viewport"...>
  const viewportMatch = result.match(/<meta\s+name="viewport"[^>]*>/);
  if (viewportMatch) {
    const insertPos = result.indexOf(viewportMatch[0]) + viewportMatch[0].length;
    const newMeta = "\n" + buildMetaTags(meta);
    result = result.slice(0, insertPos) + newMeta + result.slice(insertPos);
  }

  return result;
}

/* ── Plugin ── */

export function seoPrerender(): Plugin {
  return {
    name: "seo-prerender",
    apply: "build",
    closeBundle() {
      const distDir = path.resolve("dist");
      const indexPath = path.join(distDir, "index.html");

      if (!fs.existsSync(indexPath)) {
        console.warn("[seo-prerender] dist/index.html not found, skipping.");
        return;
      }

      const baseHtml = fs.readFileSync(indexPath, "utf-8");
      let generated = 0;

      for (const [route, meta] of Object.entries(routes)) {
        const html = replaceMetaInHtml(baseHtml, meta);

        if (route === "/") {
          fs.writeFileSync(indexPath, html, "utf-8");
        } else {
          const routeDir = path.join(distDir, route.slice(1));
          fs.mkdirSync(routeDir, { recursive: true });
          fs.writeFileSync(path.join(routeDir, "index.html"), html, "utf-8");
        }
        generated++;
      }

      console.log(`[seo-prerender] Generated ${generated} pre-rendered HTML files.`);
    },
  };
}
