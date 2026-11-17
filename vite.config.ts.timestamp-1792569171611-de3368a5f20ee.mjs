// vite.config.ts
import { defineConfig } from "file:///C:/Cybaemtech/Cybaemtech/Cybaemtech/IN%20HOUSE/Cybaemtech%2023sep/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Cybaemtech/Cybaemtech/Cybaemtech/IN%20HOUSE/Cybaemtech%2023sep/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import fs from "fs";

// src/data/seo/resourceSeo.ts
var resourceSeoData = {
  title: "Resources & Blog | IT, Cloud & Cybersecurity Insights | Cybaem Tech",
  description: "Explore Cybaem Tech resources - blogs, guides and insights on IT infrastructure, cloud, cybersecurity, digital marketing, AMC, managed services and IT strategy for businesses.",
  canonical: "https://www.cybaemtech.com/blog",
  keywords: "IT blog, technology resources, IT infrastructure articles, cloud computing blog, cybersecurity insights, digital transformation resources, managed IT services blog, IT AMC tips, Microsoft 365 guides, network and security best practices, Cybaem Tech blog, IT knowledge center",
  ogTitle: "Resources & Blog | IT, Cloud & Cybersecurity Insights",
  ogDescription: "Read blogs and resources from Cybaem Tech on IT infrastructure, cloud, cybersecurity, digital marketing and managed services.",
  twitterTitle: "Resources & Blog | Cybaem Tech",
  twitterDescription: "Blogs, guides and insights on IT, cloud, cybersecurity, digital marketing and managed services from Cybaem Tech.",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "logo": "https://www.cybaemtech.com/images/cybaem-logo.webp",
      "sameAs": [
        "https://www.linkedin.com/company/cybaemtech",
        "https://x.com/Cybaem_Tech",
        "https://www.facebook.com/cybaemtech",
        "https://www.instagram.com/cybaemtech",
        "https://www.youtube.com/@cybaemtech"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9028541383",
          "contactType": "customer support",
          "areaServed": "IN",
          "availableLanguage": "English"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.cybaemtech.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Cybaem Tech Resources & Blog",
      "url": "https://www.cybaemtech.com/resources",
      "description": "Blogs, guides, articles and updates from Cybaem Tech on IT, cloud, cybersecurity, digital marketing and managed services."
    },
    {
      "@context": "https://schema.org",
      "@type": "ITService",
      "name": "Cybaem Tech",
      "image": "https://www.cybaemtech.com/images/cybaem-logo.webp",
      "url": "https://www.cybaemtech.com/",
      "telephone": "+91-9028541383",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "304, Suratwala Mark Plazzo, Hinjewadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5900",
        "longitude": "73.7360"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cybaemtech.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Resources",
          "item": "https://www.cybaemtech.com/resources"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What type of content is available in Cybaem Tech\u2019s resources section?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The resources section of Cybaem Tech includes blogs, guides, checklists and insights on IT infrastructure, cloud computing, cybersecurity, digital marketing, IT AMC, managed services and IT strategy for modern businesses."
          }
        },
        {
          "@type": "Question",
          "name": "Who should read Cybaem Tech\u2019s blog and resources?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Business owners, IT managers, CTOs, startup founders and operations leaders who want to improve their IT infrastructure, security, cloud adoption and digital presence can benefit from Cybaem Tech\u2019s resources."
          }
        },
        {
          "@type": "Question",
          "name": "How often are new articles published?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "New content is published periodically based on key topics in IT, cloud, cybersecurity and digital transformation to keep readers updated with practical insights and best practices."
          }
        },
        {
          "@type": "Question",
          "name": "Can I request a topic for a future article?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can suggest topics or questions related to IT, cloud, cybersecurity or digital marketing through the contact form, and the Cybaem Tech team may cover them in future blog posts."
          }
        },
        {
          "@type": "Question",
          "name": "How can I stay updated with new resources from Cybaem Tech?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can revisit the resources page regularly and follow Cybaem Tech on LinkedIn, X, Facebook, Instagram and YouTube to get notified when new articles or updates are published."
          }
        }
      ]
    }
  ]
};

// seo-config.ts
var homeSeoData = {
  title: "IT Services & Software Development Company | Cybaem Tech",
  description: "We deliver enterprise software, managed IT, cloud security, web development, IT staffing, and digital growth solutions for businesses.",
  canonical: "https://www.cybaemtech.com/",
  keywords: "Cybaem Tech, IT company Pune, cybersecurity company Pune, managed IT services Pune, cloud consulting Pune, Microsoft 365 services, Azure migration, digital marketing agency Pune, SEO services Pune, VAPT services Pune, SOC services India, computer AMC Pune, network security services, firewall management, IT infrastructure management, software development company Pune, web development Pune, AI automation services, chatbot development, IT outsourcing company, IT consulting services, cloud security services, endpoint security, disaster recovery solutions, backup solutions, IT helpdesk support, NOC monitoring services, IT staffing services, digital transformation company, technology solutions provider India",
  ogTitle: "Cybaem Tech | IT Services, Cybersecurity & Cloud Solutions",
  ogDescription: "Trusted IT partner for cybersecurity, cloud, digital marketing, managed IT services, Microsoft 365, software development and business technology solutions.",
  twitterTitle: "Cybaem Tech | IT Services, Cybersecurity & Cloud Solutions",
  twitterDescription: "Cybersecurity, cloud solutions, managed IT services, Microsoft 365, digital marketing and software development.",
  jsonLd: [
    {
      "@type": "WebSite",
      "@id": "https://www.cybaemtech.com/#website",
      "url": "https://www.cybaemtech.com",
      "name": "Cybaem Tech",
      "description": "Cybaem Tech is an ISO-certified top global technology and IT services company delivering Managed IT Services, IT Infrastructure Services, IT Consulting, Network and Server Management, Cloud Computing Solutions, Microsoft Azure, AWS Cloud, Hybrid Cloud, Cloud Migration, Microsoft 365, DevOps, Cybersecurity Services, VAPT, SOC Monitoring, Endpoint Security, Enterprise Software Development, Custom Software Solutions, ERP Development, Web Application Development, IT Staff Augmentation, IT Support Services, Digital Marketing, SEO, PPC, Automation, and Digital Growth Solutions.",
      "publisher": {
        "@id": "https://www.cybaemtech.com/#organization"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": [
        "Organization",
        "Corporation",
        "ProfessionalService"
      ],
      "@id": "https://www.cybaemtech.com/#organization",
      "name": "Cybaem Tech Pvt. Ltd.",
      "alternateName": "Cybaem Tech",
      "url": "https://www.cybaemtech.com",
      "logo": "https://www.cybaemtech.com/assets/cybaem-logo-DX80ZcrY.png",
      "image": "https://www.cybaemtech.com/assets/cybaem-logo-DX80ZcrY.png",
      "email": "sales@cybaemtech.com",
      "telephone": "+91-9028541383",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office 304, Suratwala Mark Plazzo, Hinjewadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.5904051,
        "longitude": 73.7481881
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9028541383",
          "contactType": "sales",
          "email": "sales@cybaemtech.com",
          "availableLanguage": [
            "English",
            "Hindi",
            "Marathi"
          ]
        }
      ],
      "founder": {
        "@type": "Person",
        "@id": "https://www.cybaemtech.com/leadership/rohan-bhosale#person",
        "name": "Rohan Bhosale",
        "jobTitle": "Founder & Chief Executive Officer",
        "url": "https://www.cybaemtech.com/leadership/rohan-bhosale",
        "sameAs": [
          "https://www.linkedin.com/in/rohanbhosale15/"
        ]
      },
      "sameAs": [
        "https://www.linkedin.com/company/cybaemtech",
        "https://maps.apple/p/X.gL3qQPr~70zi",
        "https://www.instagram.com/cybaemtech",
        "https://www.youtube.com/@cybaemtech",
        "https://www.facebook.com/cybaemtech",
        "https://x.com/cybaemtech",
        "https://www.tumblr.com/blog/cybaemtech",
        "https://in.pinterest.com/cybaemtech/",
        "https://dribbble.com/cybaem-tech",
        "https://myspace.com/cybaem_tech",
        "https://www.behance.net/cybaemtech",
        "https://www.reddit.com/user/Civil_Bridge_9195/",
        "https://www.quora.com/profile/Cybaem-Tech-2",
        "https://www.threads.com/@cybaemtech",
        "https://www.ambitionbox.com/reviews/cybaem-tech-reviews/",
        "https://about.me/cybaem",
        "https://share.google/w888Lp6GYHzORyKD9",
        "https://tracxn.com/d/legal-entities/india/cybaem-tech-private-limited/__l6E6RhOGl1H7cgXE5tY1009sTmX8u-zJN-s-KN4rrgU",
        "https://www.indiamart.com/cybaem-tech/profile.html",
        "https://www.thecompanycheck.com/org/cybaem-tech/c59cad6623",
        "https://theorg.com/org/cybaem-tech",
        "https://www.openpr.com/news/4286374/top-10-digital-marketing-agencies-in-pune-cybaem-tech",
        "https://www.neusourcestartup.com/companies/cybaem-tech-private-limited",
        "https://www.krowdbase.com/service/cybaem-tech",
        "https://www.falconebiz.com/company/CYBAEM-TECH-PRIVATE-LIMITED-U62099PN2025PTC237404",
        "https://www.zoominfo.com/c/cybaem-tech/561012249",
        "https://www.zaubacorp.com/CYBAEM-TECH-PRIVATE-LIMITED-U62099PN2025PTC237404",
        "https://www.bing.com/maps/search?FORM=HDRSC6&q=cybaem+tech&cp=18.590389%7E73.748199&lvl=16&style=r",
        "https://gravatar.com/cybaemtech"
      ],
      "knowsAbout": [
        "Managed IT Services",
        "IT Infrastructure Management",
        "Enterprise Software Development",
        "IT Staff Augmentation",
        "Web Systems & Custom Web Development",
        "Digital Revenue Growth & Performance Marketing",
        "Cybersecurity & VAPT",
        "Cloud Computing Solutions (AWS & Azure)"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT, Software & Digital Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IT Infrastructure Services",
              "url": "https://www.cybaemtech.com/solutions/it-infrastructure-services",
              "description": "Enterprise-grade IT infrastructure management, server administration, network engineering, and cloud environment optimization designed to maximize uptime, enhance system efficiency, and build secure technical foundations."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Managed IT and Security",
              "url": "https://www.cybaemtech.com/solutions/managed-it-cloud-security",
              "description": "Proactive 24/7 Managed IT support, continuous network monitoring, endpoint security, VAPT, and threat mitigation services engineered to eliminate downtime and safeguard enterprise data."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IT Staff Augmentation",
              "url": "https://www.cybaemtech.com/solutions/it-staff-augmentation",
              "description": "Flexible IT staff augmentation and developer staffing solutions enabling businesses to quickly scale technical teams with vetted software engineers, Cloud specialists, and IT experts."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enterprise Software Solutions",
              "url": "https://www.cybaemtech.com/solutions/enterprise-software",
              "description": "Custom enterprise software development, bespoke ERP systems, and cloud-native application solutions built to automate workflows, integrate legacy systems, and accelerate enterprise digital transformation."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Systems Development",
              "url": "https://www.cybaemtech.com/solutions/web-systems",
              "description": "High-performance, secure, and SEO-optimized web systems and custom web application development designed for cross-platform responsiveness, rapid page load speed, and high lead conversion rates."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Revenue Growth",
              "url": "https://www.cybaemtech.com/solutions/digital-revenue-growth",
              "description": "Data-driven digital marketing, advanced SEO, performance PPC campaigns, B2B lead generation, and conversion rate optimization (CRO) structured to scale digital visibility and sales revenue."
            }
          }
        ]
      }
    }
  ]
};
var aboutSeoData = {
  title: "About Cybaem Tech | Global IT Solutions Company",
  description: "We are an ISO-certified IT company delivering enterprise software, cloud security, managed IT, and digital growth solutions.",
  canonical: "https://www.cybaemtech.com/about",
  keywords: "About Cybaem Tech, Cybaem Tech company profile, IT company Pune, technology solutions company, managed IT services company, cybersecurity company Pune, cloud consulting company, Microsoft 365 partner, Azure cloud experts, digital transformation company, IT infrastructure company, software development company, web development company, AI automation company, digital marketing agency Pune, IT consulting company, network security provider, cloud migration experts, IT support company, business technology partner, enterprise IT solutions, IT outsourcing services, cybersecurity consultants, technology consulting company, IT innovation company India",
  ogTitle: "About Cybaem Tech | IT, Cybersecurity & Cloud Solutions Experts",
  ogDescription: "Discover Cybaem Tech",
  twitterTitle: "About Cybaem Tech | Technology, Cybersecurity & Cloud Experts",
  twitterDescription: "Learn about Cybaem Tech, a trusted technology partner delivering cybersecurity, cloud, managed IT services and digital transformation solutions.",
  jsonLd: [
    {
      "@type": "AboutPage",
      "@id": "https://www.cybaemtech.com/about#webpage",
      "url": "https://www.cybaemtech.com/about",
      "name": "About Us | Cybaem Tech",
      "description": "Cybaem Tech is a leading enterprise IT transformation partner and top-tier technology consulting firm dedicated to delivering best-in-class software engineering, cloud architecture, and digital infrastructure solutions.",
      "mainEntity": {
        "@id": "https://www.cybaemtech.com/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cybaemtech.com/about#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cybaemtech.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us"
        }
      ]
    },
    {
      "@type": [
        "Organization",
        "Corporation",
        "ProfessionalService"
      ],
      "@id": "https://www.cybaemtech.com/#organization",
      "name": "Cybaem Tech Pvt. Ltd.",
      "alternateName": "Cybaem Tech",
      "url": "https://www.cybaemtech.com",
      "logo": "https://www.cybaemtech.com/assets/cybaem-logo-DX80ZcrY.png",
      "image": "https://www.cybaemtech.com/assets/cybaem-logo-DX80ZcrY.png",
      "email": "sales@cybaemtech.com",
      "telephone": "+91-9028541383",
      "slogan": "Premium IT Service, zero compromise",
      "description": "Cybaem Tech is a leading enterprise IT transformation partner and top-tier technology consulting firm dedicated to delivering best-in-class software engineering, cloud architecture, and digital infrastructure solutions. Founded on a commitment to technical excellence and continuous innovation, we bring together expert software engineers, IT strategists, and cybersecurity professionals to help modern organizations optimize operations, scale securely, and accelerate growth. Our mission is to engineer agile, high-performance IT ecosystems tailored to complex business demands, while our vision focuses on driving sustainable digital progress through cutting-edge technology integration. Guided by core values of integrity, technological mastery, client-centric collaboration, and reliability, Cybaem Tech has hit major company milestones, expanding from a dedicated engineering consultancy into an industry-leading provider of end-to-end IT services.",
      "knowsAbout": [
        "Enterprise IT Transformation",
        "Software Engineering",
        "Cloud Architecture & Migration",
        "DevOps Implementation",
        "Cybersecurity Services & VAPT",
        "Data Analytics",
        "Artificial Intelligence Solutions",
        "Managed IT Services",
        "Digital Infrastructure Solutions",
        "ISO Standard Compliance"
      ],
      "publishingPrinciples": [
        {
          "@type": "DigitalDocument",
          "name": "Mission",
          "text": "We deliver project-focused IT solutions that drive real result - ptimized systems, stronger security, and seamless digital experiences that help you achieve business growth."
        },
        {
          "@type": "DigitalDocument",
          "name": "Core Values",
          "text": "We operate with strict ISO standards, zero compromise on data security, and a culture of ethics and cutting edge technology that makes us a trusted partner for long-term success."
        },
        {
          "@type": "DigitalDocument",
          "name": "Our Approach",
          "text": "A disciplined work process, total project visibility, and continuous improvement ensure we deliver with precisio - rom strategy to successful deployment."
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/cybaemtech",
        "https://maps.apple/p/X.gL3qQPr~70zi",
        "https://www.instagram.com/cybaemtech",
        "https://www.youtube.com/@cybaemtech",
        "https://www.facebook.com/cybaemtech",
        "https://x.com/cybaemtech",
        "https://www.tumblr.com/blog/cybaemtech",
        "https://in.pinterest.com/cybaemtech/",
        "https://dribbble.com/cybaem-tech",
        "https://myspace.com/cybaem_tech",
        "https://www.behance.net/cybaemtech",
        "https://www.reddit.com/user/Civil_Bridge_9195/",
        "https://www.quora.com/profile/Cybaem-Tech-2",
        "https://www.threads.com/@cybaemtech",
        "https://www.ambitionbox.com/reviews/cybaem-tech-reviews/",
        "https://about.me/cybaem",
        "https://share.google/w888Lp6GYHzORyKD9",
        "https://tracxn.com/d/legal-entities/india/cybaem-tech-private-limited/__l6E6RhOGl1H7cgXE5tY1009sTmX8u-zJN-s-KN4rrgU",
        "https://www.indiamart.com/cybaem-tech/profile.html",
        "https://www.thecompanycheck.com/org/cybaem-tech/c59cad6623",
        "https://theorg.com/org/cybaem-tech",
        "https://www.openpr.com/news/4286374/top-10-digital-marketing-agencies-in-pune-cybaem-tech",
        "https://www.neusourcestartup.com/companies/cybaem-tech-private-limited",
        "https://www.krowdbase.com/service/cybaem-tech",
        "https://www.falconebiz.com/company/CYBAEM-TECH-PRIVATE-LIMITED-U62099PN2025PTC237404",
        "https://www.zoominfo.com/c/cybaem-tech/561012249",
        "https://www.zaubacorp.com/CYBAEM-TECH-PRIVATE-LIMITED-U62099PN2025PTC237404",
        "https://www.bing.com/maps/search?FORM=HDRSC6&q=cybaem+tech&cp=18.590389%7E73.748199&lvl=16&style=r",
        "https://gravatar.com/cybaemtech"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "ratingCount": "50"
      }
    }
  ]
};
var contactSeoData = {
  title: "Contact Cybaem Tech | Discuss Your IT Requirements",
  description: "Let",
  canonical: "https://www.cybaemtech.com/contact",
  keywords: "Contact Cybaem Tech, IT support Pune, cybersecurity consultation Pune, managed IT services enquiry, cloud solutions consultation, Microsoft 365 support, IT AMC services Pune, software development enquiry, digital marketing consultation Pune, IT company contact Pune, remote IT support, cloud migration support, IT helpdesk services, IT infrastructure support, technology consulting company",
  ogTitle: "Contact Cybaem Tech | Talk to IT Experts Today",
  ogDescription: "Get in touch with Cybaem Tech for cybersecurity, cloud solutions, IT infrastructure, managed IT services, software development and digital marketing.",
  twitterTitle: "Contact Cybaem Tech | IT Services & Technology Experts",
  twitterDescription: "Reach Cybaem Tech for cybersecurity, cloud, managed IT services, software development and digital transformation consulting.",
  jsonLd: [
    {
      "@type": "AboutPage",
      "@id": "https://www.cybaemtech.com/life-at-cybaemtech#webpage",
      "url": "https://www.cybaemtech.com/life-at-cybaemtech",
      "name": "Life at Cybaem Tech | Work Culture, Team & Innovation",
      "description": "Discover life at Cybaem Tech. Learn about our workplace culture, core values, leadership team, celebrations, and team outings.",
      "mainEntity": {
        "@id": "https://www.cybaemtech.com/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cybaemtech.com/life-at-cybaemtech#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cybaemtech.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Life At CybaemTech"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.cybaemtech.com/#organization",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com",
      "logo": "https://www.cybaemtech.com/assets/cybaem-logo-DX80ZcrY.png",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 200
      },
      "employee": [
        {
          "@id": "https://www.cybaemtech.com/people/rohan-bhosale#person"
        },
        {
          "@id": "https://www.cybaemtech.com/people/yash-bhalekar#person"
        },
        {
          "@id": "https://www.cybaemtech.com/people/akshay-navle#person"
        },
        {
          "@id": "https://www.cybaemtech.com/people/dilip-dsouza#person"
        },
        {
          "@id": "https://www.cybaemtech.com/people/sanjay-bobde#person"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.cybaemtech.com/people/rohan-bhosale#person",
      "name": "Rohan Bhosale",
      "jobTitle": "Founder & Chief Executive Officer",
      "image": "https://www.cybaemtech.com/people/rohan.png",
      "sameAs": [
        "https://www.linkedin.com/in/rohanbhosale15/"
      ],
      "description": "Rohan Bhosale founded Cybaem Tech with a vision of creating a technology company that delivers practical, scalable, and business-focused IT solutions. He leads the company's overall strategy, business growth, global partnerships, and innovation initiatives.",
      "worksFor": {
        "@id": "https://www.cybaemtech.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.cybaemtech.com/people/yash-bhalekar#person",
      "name": "Yash Bhalekar",
      "jobTitle": "Operations & Business Strategy Director",
      "image": "https://www.cybaemtech.com/people/yash.png",
      "sameAs": [
        "https://www.linkedin.com/in/yash-bhalekar-imoexo/"
      ],
      "description": "Yash Bhalekar plays a pivotal role in driving operational excellence and strategic business initiatives across Cybaem Tech, optimizing business processes, strengthening internal operations, and supporting global expansion.",
      "worksFor": {
        "@id": "https://www.cybaemtech.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.cybaemtech.com/people/akshay-navle#person",
      "name": "Akshay Navle",
      "jobTitle": "Chief Technology & Product Officer",
      "image": "https://www.cybaemtech.com/people/akshay.png",
      "sameAs": [
        "https://www.linkedin.com/in/akshay-navle-2929a245/"
      ],
      "description": "Akshay Navle is a technology and product executive with 15 years of experience leading enterprise technology, AI-driven product innovation, enterprise architecture, and large-scale digital transformation initiatives.",
      "worksFor": {
        "@id": "https://www.cybaemtech.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.cybaemtech.com/people/dilip-dsouza#person",
      "name": "Dilip D'Souza",
      "jobTitle": "Director - Global Business Relations",
      "image": "https://www.cybaemtech.com/people/Dilip%20D'Souza.png",
      "description": "Dilip D'Souza leads Cybaem Tech's global business development and strategic partnership initiatives, focusing on expanding the company's international presence and building lasting market relationships.",
      "worksFor": {
        "@id": "https://www.cybaemtech.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.cybaemtech.com/people/sanjay-bobde#person",
      "name": "Sanjay Mahadeo Bobde",
      "jobTitle": "Strategic Advisor - Enterprise Transformation, Digital Government & Public Sector Innovation",
      "image": "https://www.cybaemtech.com/people/Sanjay%20Mahadeo%20Bobade.png",
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "IIT Bombay"
        },
        {
          "@type": "EducationalOrganization",
          "name": "IIM Ahmedabad"
        }
      ],
      "description": "Sanjay Bobde is a distinguished business transformation executive with over three decades of experience leading enterprise modernization, digital Government, and public sector innovation.",
      "worksFor": {
        "@id": "https://www.cybaemtech.com/#organization"
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://www.cybaemtech.com/life-at-cybaemtech#video",
      "name": "Life at Cybaem Tech",
      "description": "An inside look at the workplace culture, team environment, and day-to-day life at Cybaem Tech.",
      "thumbnailUrl": [
        "https://www.cybaemtech.com/images/hero-video-thumbnail.jpg"
      ],
      "uploadDate": "2024-01-01T08:00:00+00:00",
      "contentUrl": "https://www.cybaemtech.com/video/video.mp4",
      "embedUrl": "https://www.cybaemtech.com/life-at-cybaemtech"
    },
    {
      "@type": "ImageGallery",
      "@id": "https://www.cybaemtech.com/life-at-cybaemtech#gallery",
      "name": "Life at Cybaem Tech Photo Gallery",
      "description": "Photos showing celebrations, team lunches, foundation days, and outings at Cybaem Tech.",
      "url": "https://www.cybaemtech.com/life-at-cybaemtech",
      "hasPart": [
        {
          "@type": "ImageObject",
          "name": "Team Lunch",
          "contentUrl": "https://www.cybaemtech.com/lifeatcybaemtech/TeamLunch.jpg",
          "caption": "Team Lunch at Cybaem Tech"
        },
        {
          "@type": "ImageObject",
          "name": "Celebration at Point",
          "contentUrl": "https://www.cybaemtech.com/lifeatcybaemtech/celebrationatpoint.jpg",
          "caption": "Celebration at Point"
        },
        {
          "@type": "ImageObject",
          "name": "Foundation Day 2026",
          "contentUrl": "https://www.cybaemtech.com/lifeatcybaemtech/Foundationday2026.jpg",
          "caption": "Foundation Day 2026 Celebration"
        },
        {
          "@type": "ImageObject",
          "name": "Foundation Day",
          "contentUrl": "https://www.cybaemtech.com/lifeatcybaemtech/Foundationday.JPG",
          "caption": "Foundation Day Celebration"
        },
        {
          "@type": "ImageObject",
          "name": "Team Outing",
          "contentUrl": "https://www.cybaemtech.com/lifeatcybaemtech/TeamOuting.jpg",
          "caption": "Cybaem Tech Team Outing"
        }
      ]
    }
  ]
};
var lifeAtCybaemtechSeoData = {
  title: "Life at Cybaem Tech | Culture, Careers & Growth",
  description: "Walk through our collaborative work culture, team celebrations, employee experiences, learning opportunities, and career growth.",
  canonical: "https://www.cybaemtech.com/life-at-cybaemtech",
  keywords: "life at Cybaem Tech, Cybaem Tech culture, IT company work culture Pune, tech careers environment, employee experience Cybaem Tech, work-life balance IT company, learning and development IT, team activities in IT company, tech jobs culture Pune",
  ogTitle: "Life at Cybaem Tech | Culture & Team",
  ogDescription: "Take a look inside Cybaem Tech - our people, culture, collaboration and how we work together on IT, cloud, cybersecurity and digital projects.",
  twitterTitle: "Life at Cybaem Tech | Culture, Growth & Team",
  twitterDescription: "Explore how teams at Cybaem Tech collaborate, learn and grow while delivering IT and digital solutions.",
  jsonLd: [
    {
      "@type": "AboutPage",
      "@id": "https://www.cybaemtech.com/life-at-cybaemtech#webpage",
      "url": "https://www.cybaemtech.com/life-at-cybaemtech",
      "name": "Life at Cybaem Tech | Work Culture, Team & Innovation",
      "description": "Discover life at Cybaem Tech. Learn about our workplace culture, core values, leadership team, celebrations, and team outings.",
      "mainEntity": {
        "@id": "https://www.cybaemtech.com/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cybaemtech.com/life-at-cybaemtech#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cybaemtech.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Life At CybaemTech"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.cybaemtech.com/#organization",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com",
      "logo": "https://www.cybaemtech.com/assets/cybaem-logo-DX80ZcrY.png",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 200
      },
      "employee": [
        {
          "@id": "https://www.cybaemtech.com/people/rohan-bhosale#person"
        },
        {
          "@id": "https://www.cybaemtech.com/people/yash-bhalekar#person"
        },
        {
          "@id": "https://www.cybaemtech.com/people/akshay-navle#person"
        },
        {
          "@id": "https://www.cybaemtech.com/people/dilip-dsouza#person"
        },
        {
          "@id": "https://www.cybaemtech.com/people/sanjay-bobde#person"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.cybaemtech.com/people/rohan-bhosale#person",
      "name": "Rohan Bhosale",
      "jobTitle": "Founder & Chief Executive Officer",
      "image": "https://www.cybaemtech.com/people/rohan.png",
      "sameAs": [
        "https://www.linkedin.com/in/rohanbhosale15/"
      ],
      "description": "Rohan Bhosale founded Cybaem Tech with a vision of creating a technology company that delivers practical, scalable, and business-focused IT solutions. He leads the company's overall strategy, business growth, global partnerships, and innovation initiatives.",
      "worksFor": {
        "@id": "https://www.cybaemtech.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.cybaemtech.com/people/yash-bhalekar#person",
      "name": "Yash Bhalekar",
      "jobTitle": "Operations & Business Strategy Director",
      "image": "https://www.cybaemtech.com/people/yash.png",
      "sameAs": [
        "https://www.linkedin.com/in/yash-bhalekar-imoexo/"
      ],
      "description": "Yash Bhalekar plays a pivotal role in driving operational excellence and strategic business initiatives across Cybaem Tech, optimizing business processes, strengthening internal operations, and supporting global expansion.",
      "worksFor": {
        "@id": "https://www.cybaemtech.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.cybaemtech.com/people/akshay-navle#person",
      "name": "Akshay Navle",
      "jobTitle": "Chief Technology & Product Officer",
      "image": "https://www.cybaemtech.com/people/akshay.png",
      "sameAs": [
        "https://www.linkedin.com/in/akshay-navle-2929a245/"
      ],
      "description": "Akshay Navle is a technology and product executive with 15 years of experience leading enterprise technology, AI-driven product innovation, enterprise architecture, and large-scale digital transformation initiatives.",
      "worksFor": {
        "@id": "https://www.cybaemtech.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.cybaemtech.com/people/dilip-dsouza#person",
      "name": "Dilip D'Souza",
      "jobTitle": "Director - Global Business Relations",
      "image": "https://www.cybaemtech.com/people/Dilip%20D'Souza.png",
      "description": "Dilip D'Souza leads Cybaem Tech's global business development and strategic partnership initiatives, focusing on expanding the company's international presence and building lasting market relationships.",
      "worksFor": {
        "@id": "https://www.cybaemtech.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.cybaemtech.com/people/sanjay-bobde#person",
      "name": "Sanjay Mahadeo Bobde",
      "jobTitle": "Strategic Advisor - Enterprise Transformation, Digital Government & Public Sector Innovation",
      "image": "https://www.cybaemtech.com/people/Sanjay%20Mahadeo%20Bobade.png",
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "IIT Bombay"
        },
        {
          "@type": "EducationalOrganization",
          "name": "IIM Ahmedabad"
        }
      ],
      "description": "Sanjay Bobde is a distinguished business transformation executive with over three decades of experience leading enterprise modernization, digital Government, and public sector innovation.",
      "worksFor": {
        "@id": "https://www.cybaemtech.com/#organization"
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://www.cybaemtech.com/life-at-cybaemtech#video",
      "name": "Life at Cybaem Tech",
      "description": "An inside look at the workplace culture, team environment, and day-to-day life at Cybaem Tech.",
      "thumbnailUrl": [
        "https://www.cybaemtech.com/images/hero-video-thumbnail.jpg"
      ],
      "uploadDate": "2024-01-01T08:00:00+00:00",
      "contentUrl": "https://www.cybaemtech.com/video/video.mp4",
      "embedUrl": "https://www.cybaemtech.com/life-at-cybaemtech"
    },
    {
      "@type": "ImageGallery",
      "@id": "https://www.cybaemtech.com/life-at-cybaemtech#gallery",
      "name": "Life at Cybaem Tech Photo Gallery",
      "description": "Photos showing celebrations, team lunches, foundation days, and outings at Cybaem Tech.",
      "url": "https://www.cybaemtech.com/life-at-cybaemtech",
      "hasPart": [
        {
          "@type": "ImageObject",
          "name": "Team Lunch",
          "contentUrl": "https://www.cybaemtech.com/lifeatcybaemtech/TeamLunch.jpg",
          "caption": "Team Lunch at Cybaem Tech"
        },
        {
          "@type": "ImageObject",
          "name": "Celebration at Point",
          "contentUrl": "https://www.cybaemtech.com/lifeatcybaemtech/celebrationatpoint.jpg",
          "caption": "Celebration at Point"
        },
        {
          "@type": "ImageObject",
          "name": "Foundation Day 2026",
          "contentUrl": "https://www.cybaemtech.com/lifeatcybaemtech/Foundationday2026.jpg",
          "caption": "Foundation Day 2026 Celebration"
        },
        {
          "@type": "ImageObject",
          "name": "Foundation Day",
          "contentUrl": "https://www.cybaemtech.com/lifeatcybaemtech/Foundationday.JPG",
          "caption": "Foundation Day Celebration"
        },
        {
          "@type": "ImageObject",
          "name": "Team Outing",
          "contentUrl": "https://www.cybaemtech.com/lifeatcybaemtech/TeamOuting.jpg",
          "caption": "Cybaem Tech Team Outing"
        }
      ]
    }
  ]
};
var enterpriseSoftwareSeoData = {
  title: "Enterprise Software Development Company | Cybaem Tech",
  description: "Build scalable enterprise software, custom business applications, AI-powered platforms, integrations, and workflow automation with Cybaem Tech.",
  canonical: "https://www.cybaemtech.com/solutions/enterprise-software",
  keywords: "Cybaem CRM Ace Pro, Cybaem Nova CRM, ITSM Tool Pune, enterprise software company Pune, custom enterprise platforms, AI business software, Document Management System, Project Management Tool, Site Engineer Ecosystem, HR Management System, custom CRM development, ISO certified software development, B2B enterprise applications, scalable business software India",
  ogTitle: "AI-Powered Enterprise Software Solutions & Platforms | Cybaem Tech",
  ogDescription: "Eliminate bottlenecks and accelerate growth with Cybaem Tech",
  twitterTitle: "AI-Powered Enterprise Software Solutions & Platforms | Cybaem Tech",
  twitterDescription: "From Cybaem CRM Ace Pro and ITSM to secure DMS and HR management systems. Dual ISO-certified engineering with zero scope creep, guaranteed.",
  jsonLd: [
    {
      "@type": "WebPage",
      "@id": "https://www.cybaemtech.com/solutions/enterprise-software#webpage",
      "url": "https://www.cybaemtech.com/solutions/enterprise-software",
      "name": "Enterprise Software Solutions & ERP Software Development | Cybaem Tech",
      "description": "Cybaem Tech is a leading ERP software development company delivering custom enterprise software solutions, ERP software development services, and AI-powered business software.",
      "mainEntity": {
        "@id": "https://www.cybaemtech.com/solutions/enterprise-software#service"
      },
      "isPartOf": {
        "@id": "https://www.cybaemtech.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.cybaemtech.com/solutions/enterprise-software#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.cybaemtech.com/solutions/enterprise-software#service",
      "name": "Enterprise Software Development & ERP Solutions",
      "serviceType": "Enterprise Software Solutions & ERP Software Development",
      "url": "https://www.cybaemtech.com/solutions/enterprise-software",
      "description": "Cybaem Tech is a premier enterprise software development service and leading ERP software development company recognized among top erp software companies globally. We provide scalable enterprise software solutions and comprehensive erp software development services tailored for mid-market and global enterprises. Whether you are looking for an erp software development company in Pune, Bangalore, Chennai, Noida, Ahmedabad, Lucknow, or Kolkata, or reliable erp software providers in Kerala and Gujarat, Cybaem Tech delivers robust enterprise IT solutions. As a trusted erp software development company, we also specialize in erp software for small companies, offering custom ERP systems, legacy system integration, cloud-native application engineering, and AI-driven platforms like Cybaem CRM Ace.",
      "provider": {
        "@id": "https://www.cybaemtech.com/#organization"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Global"
      },
      "hasOfferCatalog": {
        "@id": "https://www.cybaemtech.com/solutions/enterprise-software#subservices"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.cybaemtech.com/solutions/enterprise-software#subservices",
      "name": "Enterprise Software Capabilities & Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Cybaem CRM Ace | Pro",
            "applicationCategory": "BusinessApplication",
            "description": "AI-powered CRM featuring predictive lead scoring, automated pipeline management, and enterprise system integration."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom ERP Software Development",
            "description": "Tailored ERP software development services for supply chain, financial management, operations, and HR."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "AI Document Management System (DMS)",
            "applicationCategory": "BusinessApplication",
            "description": "Enterprise DMS with intelligent search, OCR data extraction, and document classification."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "ITSM & Task Automation Platform",
            "applicationCategory": "BusinessApplication",
            "description": "Intelligent IT service management and automated workflow engineering."
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.cybaemtech.com/solutions/enterprise-software#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What AI-powered products has Cybaem built?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We have developed a suite of enterprise AI platforms: Cybaem CRM Ace | Pro (AI-driven sales and customer management), a Project Management Tool with intelligent task automation, Document Management System (DMS) with AI-powered search and classification, ITSM Tool for IT service management, Site Engineer Ecosystem for field operations, and a comprehensive HR Management System."
          }
        },
        {
          "@type": "Question",
          "name": "How does Cybaem CRM Ace | Pro differ from off-the-shelf CRMs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CRM Ace | Pro is built with AI at its core - predictive lead scoring, automated pipeline management, intelligent customer insights, and seamless integration with your existing enterprise stack. Unlike generic CRMs, it is architected around your specific workflows and data models."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a typical enterprise software project take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most projects follow a 12-16 week delivery cycle, with functional prototypes available within the first 4 weeks. We use agile sprints with weekly demos so you see progress continuously."
          }
        },
        {
          "@type": "Question",
          "name": "Can you integrate with our existing legacy systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We specialize in bridging legacy infrastructure with modern architectures through custom API layers, middleware, and data migration pipelines - without disrupting your current operations."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure data security and compliance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every system is built with ISO 27001 security controls, encrypted data at rest and in transit, role-based access, and comprehensive audit logging. We also support GDPR, HIPAA, and SOC 2 compliance requirements."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.cybaemtech.com/#organization",
      "name": "Cybaem Tech Pvt. Ltd.",
      "url": "https://www.cybaemtech.com",
      "logo": "https://www.cybaemtech.com/assets/cybaem-logo-DX80ZcrY.png",
      "email": "sales@cybaemtech.com",
      "telephone": "+91-9028541383",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office 304, Suratwala Mark Plazzo, Hinjewadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/cybaemtech",
        "https://www.instagram.com/cybaemtech",
        "https://www.youtube.com/@cybaemtech",
        "https://www.facebook.com/cybaemtech",
        "https://x.com/cybaemtech"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cybaemtech.com/solutions/enterprise-software#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Solutions",
          "item": "https://www.cybaemtech.com/solutions"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Enterprise Software"
        }
      ]
    }
  ]
};
var webSystemsSeoData = {
  title: "Custom Web Applications & System Development | Cybaem Tech",
  description: "Build secure, conversion-focused websites, eCommerce stores, SaaS platforms, landing pages, and custom web systems with Cybaem Tech.",
  canonical: "https://www.cybaemtech.com/solutions/web-systems",
  keywords: "web application development, Web Systems Development, web systems architecture, Cybaem Web Systems, custom web development company, conversion optimized websites, enterprise SaaS platforms, custom e-commerce architecture, corporate website development Pune, high converting landing pages, corporate CMS development, fast loading web systems, scalable web apps",
  ogTitle: "Web Systems Engineered to Convert | Cybaem Tech Research Centre",
  ogDescription: "Over 200 platforms launched with an average 0.8s load time. Discover lightning-fast, secure, and conversion-optimized web platforms built for D2C, B2B, and B2C scale.",
  twitterTitle: "Web Systems Engineered to Convert | Cybaem Tech Research Centre",
  twitterDescription: "Lightning-fast, conversion-optimized web platforms built with enterprise-grade security and strict milestone-driven delivery. Avg load time: 0.8 seconds.",
  jsonLd: [
    {
      "@type": "WebPage",
      "@id": "https://www.cybaemtech.com/solutions/web-systems#webpage",
      "url": "https://www.cybaemtech.com/solutions/web-systems",
      "name": "Web Systems & Website Development Services | Cybaem Tech",
      "description": "Cybaem Tech is a leading web development company delivering custom website development services, high-performance web systems, and scalable Web System Solutions.",
      "mainEntity": {
        "@id": "https://www.cybaemtech.com/solutions/web-systems#service"
      },
      "isPartOf": {
        "@id": "https://www.cybaemtech.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.cybaemtech.com/solutions/web-systems#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.cybaemtech.com/solutions/web-systems#service",
      "name": "Web Systems & Website Development",
      "serviceType": "Website Development Services & Web System Solutions",
      "url": "https://www.cybaemtech.com/solutions/web-systems",
      "description": "Cybaem Tech is an industry-leading web development company specializing in end-to-end website development services and robust Web System Solutions. We engineer custom, responsive, and secure web platforms optimized for fast load speeds, seamless user experience, and high lead conversion. From complex enterprise web applications to modern corporate portals, our web development company builds scalable digital architecture tailored to drive sustainable business growth.",
      "provider": {
        "@id": "https://www.cybaemtech.com/#organization"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Global"
      },
      "hasOfferCatalog": {
        "@id": "https://www.cybaemtech.com/solutions/web-systems#subservices"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.cybaemtech.com/solutions/web-systems#subservices",
      "name": "Web System Solutions & Capabilities",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Application Development",
            "description": "Scalable, high-performance web systems built with modern frameworks and cloud-native architecture."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Portal & CMS Development",
            "description": "Secure content management systems and corporate portals customized for seamless content and data management."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce System Engineering",
            "description": "High-converting online store architectures integrated with secure payment gateways and ERP platforms."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX & Responsive Web Design",
            "description": "User-centric interface design ensuring optimal visual performance and responsiveness across desktop and mobile devices."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.cybaemtech.com/#organization",
      "name": "Cybaem Tech Pvt. Ltd.",
      "url": "https://www.cybaemtech.com",
      "logo": "https://www.cybaemtech.com/assets/cybaem-logo-DX80ZcrY.png",
      "email": "sales@cybaemtech.com",
      "telephone": "+91-9028541383",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office 304, Suratwala Mark Plazzo, Hinjewadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/cybaemtech",
        "https://www.instagram.com/cybaemtech",
        "https://www.youtube.com/@cybaemtech",
        "https://www.facebook.com/cybaemtech",
        "https://x.com/cybaemtech"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cybaemtech.com/solutions/web-systems#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Solutions",
          "item": "https://www.cybaemtech.com/solutions"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Web Systems"
        }
      ]
    }
  ]
};
var itAugmentationSeoData = {
  title: "Offshore IT Staff Augmentation Services | Cybaem Tech",
  description: "Scale your tech team in 48 hours with our IT staff augmentation services. Access pre-vetted senior software engineers, QA leads, and cloud architects.",
  canonical: "https://www.cybaemtech.com/solutions/it-staff-augmentation",
  keywords: "IT Staff Augmentation Services, Staffing Solutions, Hire Dedicated Software Engineers, IT Staff Augmentation Companies, Offshore IT Staff Augmentation Company, IT staff augmentation Pune, IT outsourcing, remote IT specialist, contract IT staffing, dedicated IT resources",
  ogTitle: "Offshore IT Staff Augmentation Services | Cybaem Tech",
  ogDescription: "Scale your tech team in 48 hours with our IT staff augmentation services. Access pre-vetted senior software engineers, QA leads, and cloud architects.",
  twitterTitle: "Offshore IT Staff Augmentation Services | Cybaem Tech",
  twitterDescription: "Scale your tech team in 48 hours with our IT staff augmentation services. Access pre-vetted senior software engineers, QA leads, and cloud architects.",
  jsonLd: [
    {
      "@type": "WebPage",
      "@id": "https://www.cybaemtech.com/solutions/it-staff-augmentation#webpage",
      "url": "https://www.cybaemtech.com/solutions/it-staff-augmentation",
      "name": "Offshore IT Staff Augmentation Services | Cybaem Tech",
      "description": "Scale your tech team in 48 hours with our IT staff augmentation services. Access pre-vetted senior software engineers, QA leads, and cloud architects.",
      "mainEntity": {
        "@id": "https://www.cybaemtech.com/solutions/it-staff-augmentation#service"
      },
      "isPartOf": {
        "@id": "https://www.cybaemtech.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.cybaemtech.com/solutions/it-staff-augmentation#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.cybaemtech.com/solutions/it-staff-augmentation#service",
      "name": "IT Staff Augmentation",
      "serviceType": "IT Staff Augmentation Services & Technical Staffing",
      "url": "https://www.cybaemtech.com/solutions/it-staff-augmentation",
      "description": "Cybaem Tech stands among top-tier IT staff augmentation companies, offering flexible IT staff augmentation and specialized IT team augmentation to scale your software development and engineering capabilities seamlessly. Our IT staff augmentation services provide instant access to pre-vetted software developers, cloud architects, DevOps specialists, and cybersecurity talent. As a trusted partner for enterprise IT staff aug, we enable businesses to quickly plug skill gaps, accelerate delivery timelines, and maintain complete operational control with on-demand talent integrated directly into your existing workflows.",
      "provider": {
        "@id": "https://www.cybaemtech.com/#organization"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Global"
      },
      "hasOfferCatalog": {
        "@id": "https://www.cybaemtech.com/solutions/it-staff-augmentation#subservices"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.cybaemtech.com/solutions/it-staff-augmentation#subservices",
      "name": "IT Staff Augmentation Capabilities",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dedicated Software Developers",
            "description": "Full-stack, frontend, backend, and mobile app developers skilled in modern frameworks and languages."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud & DevOps Engineers",
            "description": "Certified AWS, Azure, CI/CD pipeline, and infrastructure-as-code specialists."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "QA & Test Automation Engineers",
            "description": "Manual and automated QA testing experts ensuring high-quality software releases."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity & Network Specialists",
            "description": "Security analysts, VAPT specialists, and SOC monitoring experts."
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.cybaemtech.com/solutions/it-staff-augmentation#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How quickly can you place an engineer on our project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain a pre-vetted talent pool. Most placements happen within 48 hours. For highly specialized roles, we can deliver candidates within 5 business days."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure quality and cultural fit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every engineer undergoes technical assessments, soft-skill evaluations, and trial periods. We match not just skills but communication style, timezone alignment, and team dynamics."
          }
        },
        {
          "@type": "Question",
          "name": "What if an engineer isn't the right fit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer a replacement guarantee. If an engineer doesn't meet your expectations within the first two weeks, we provide a replacement at no additional cost."
          }
        },
        {
          "@type": "Question",
          "name": "Can we convert augmented staff to full-time hires?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer a hire-to-convert model with transparent buyout terms. Many of our clients transition augmented engineers into permanent team members."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.cybaemtech.com/#organization",
      "name": "Cybaem Tech Pvt. Ltd.",
      "url": "https://www.cybaemtech.com",
      "logo": "https://www.cybaemtech.com/assets/cybaem-logo-DX80ZcrY.png",
      "email": "sales@cybaemtech.com",
      "telephone": "+91-9028541383",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office 304, Suratwala Mark Plazzo, Hinjewadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/cybaemtech",
        "https://www.instagram.com/cybaemtech",
        "https://www.youtube.com/@cybaemtech",
        "https://www.facebook.com/cybaemtech",
        "https://x.com/cybaemtech"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cybaemtech.com/solutions/it-staff-augmentation#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Solutions",
          "item": "https://www.cybaemtech.com/solutions"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "IT Staff Augmentation"
        }
      ]
    }
  ]
};
var managedITSeoData = {
  title: "Enterprise Managed IT Services & Support | Cybaem Tech",
  description: "Reduce technology risks with managed IT services, 24/7 monitoring, IT governance, Microsoft 365 management, and proactive business support.",
  canonical: "https://www.cybaemtech.com/solutions/managed-it-cloud-security",
  keywords: "Cybaem Managed IT, managed IT services Pune, IT risk governance, 24/7 IT support Pune, Microsoft 365 administration, Google Workspace management, enterprise email migration, cloud transition services, IT security oversight Pune, patch management solutions, IT compliance audit readiness, professional MSP India",
  ogTitle: "Structured Managed IT Services & Executive Risk Governance | Cybaem Tech",
  ogDescription: "We don",
  twitterTitle: "Structured Enterprise Managed IT Services & Support | Cybaem Tech",
  twitterDescription: "Turn IT from an operational liability into a competitive strength. 8x5 and 24x7 enterprise monitoring, clear escalation matrices, and total cost predictability.",
  jsonLd: [
    {
      "@type": "WebPage",
      "@id": "https://www.cybaemtech.com/solutions/managed-it-cloud-security#webpage",
      "url": "https://www.cybaemtech.com/solutions/managed-it-cloud-security",
      "name": "Managed IT Services & IT Security Management | Cybaem Tech",
      "description": "Cybaem Tech is a trusted managed IT services provider offering managed IT support services, 24/7 IT security management, cloud managed IT services, and network security governance.",
      "mainEntity": {
        "@id": "https://www.cybaemtech.com/solutions/managed-it-cloud-security#service"
      },
      "isPartOf": {
        "@id": "https://www.cybaemtech.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.cybaemtech.com/solutions/managed-it-cloud-security#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.cybaemtech.com/solutions/managed-it-cloud-security#service",
      "name": "Managed IT & Cloud Security Services",
      "serviceType": "Managed IT Support Services & IT Security Management",
      "url": "https://www.cybaemtech.com/solutions/managed-it-cloud-security",
      "description": "Cybaem Tech is a leading managed IT services provider and dedicated managed service IT provider engineered to protect and optimize enterprise digital ecosystems. Our managed IT support services deliver end-to-end managed IT network services, cloud managed IT services, Microsoft 365 administration, and proactive managed IT service offerings for global enterprises. As a top managed IT security services partner, we implement robust IT security management frameworks, deploying an advanced IT security management system designed for complete IT security and management. Businesses seeking a managed IT services provider near me rely on our integrated IT services managed services model, which combines managed IT services security protocols, SOC monitoring, and zero-trust data protection to deliver reliable, enterprise-grade managed services IT services.",
      "provider": {
        "@id": "https://www.cybaemtech.com/#organization"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Global"
      },
      "hasOfferCatalog": {
        "@id": "https://www.cybaemtech.com/solutions/managed-it-cloud-security#subservices"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.cybaemtech.com/solutions/managed-it-cloud-security#subservices",
      "name": "Managed IT & Security Core Capabilities",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Proactive 24/7 IT Infrastructure Support",
            "description": "Continuous monitoring, automated patching, helpdesk ticket resolution, and device lifecycle management."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Security & SOC Monitoring",
            "description": "Endpoint protection, SOC threat hunting, vulnerability assessments (VAPT), and zero-trust access control."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Managed Services & Migration",
            "description": "AWS, Azure, and Hybrid Cloud infrastructure monitoring, migration execution, and cost optimization."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Microsoft 365 & Email Management",
            "description": "Tenant governance, license optimization, security policy enforcement, and risk-free email migration services."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Managed Network Services",
            "description": "Secure SD-WAN setup, firewall maintenance, VPN access management, and network traffic monitoring."
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.cybaemtech.com/solutions/managed-it-cloud-security#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are Managed IT Services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Managed IT Services provide proactive monitoring, support, security oversight, and infrastructure governance to reduce downtime and cybersecurity risks."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in Microsoft 365 management?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "License optimization, security configuration, monitoring, user lifecycle management, and compliance governance."
          }
        },
        {
          "@type": "Question",
          "name": "How much do Managed IT Services cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing depends on company size, infrastructure complexity, support coverage hours, and security requirements. Cybaem provides customized proposals after assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Why does a company need 24/7 IT support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Businesses that rely on digital infrastructure need continuous monitoring to prevent downtime, security incidents, and operational disruption."
          }
        },
        {
          "@type": "Question",
          "name": "How do Email Migration Services reduce risk?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional migration ensures data integrity, security compliance, minimal downtime, and post-transition stabilization."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.cybaemtech.com/#organization",
      "name": "Cybaem Tech Pvt. Ltd.",
      "url": "https://www.cybaemtech.com",
      "logo": "https://www.cybaemtech.com/assets/cybaem-logo-DX80ZcrY.png",
      "email": "sales@cybaemtech.com",
      "telephone": "+91-9028541383",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office 304, Suratwala Mark Plazzo, Hinjewadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/cybaemtech",
        "https://www.instagram.com/cybaemtech",
        "https://www.youtube.com/@cybaemtech",
        "https://www.facebook.com/cybaemtech",
        "https://x.com/cybaemtech"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cybaemtech.com/solutions/managed-it-cloud-security#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Solutions",
          "item": "https://www.cybaemtech.com/solutions"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Managed IT & Cloud Security"
        }
      ]
    }
  ]
};
var itInfrastructureServicesSeoData = {
  title: "Enterprise IT Infrastructure Services & Solutions | Cybaem Tech",
  description: "Scale your business with enterprise IT infrastructure services, expert cloud management, cybersecurity, 24/7 monitoring, and business continuity solutions.",
  canonical: "https://www.cybaemtech.com/solutions/it-infrastructure-services",
  keywords: "Enterprise IT infrastructure services, managed IT infrastructure, cloud infrastructure management, it infrastructure services Pune, cloud solutions Pune, cloud migration services, cybersecurity services Pune, VAPT Pune, penetration testing Pune, computer AMC services Pune, IT AMC Pune, IT asset management services, hardware procurement India, IT consulting Pune, digital transformation strategy, IT infrastructure audit, enterprise technology roadmap, 24/7 SOC monitoring, managed cloud services, Cybaem Tech solutions",
  ogTitle: "Enterprise IT Infrastructure Services & Solutions | Cybaem Tech",
  ogDescription: "Scale your business with enterprise IT infrastructure services, expert cloud management, cybersecurity, 24/7 monitoring, and business continuity solutions.",
  twitterTitle: "Enterprise IT Infrastructure Services & Solutions | Cybaem Tech",
  twitterDescription: "Scale your business with enterprise IT infrastructure services, expert cloud management, cybersecurity, 24/7 monitoring, and business continuity solutions.",
  jsonLd: [
    {
      "@type": "WebPage",
      "@id": "https://www.cybaemtech.com/solutions/it-infrastructure-services#webpage",
      "url": "https://www.cybaemtech.com/solutions/it-infrastructure-services",
      "name": "Enterprise IT Infrastructure Services & Solutions | Cybaem Tech",
      "description": "Cybaem Tech is a premier IT infrastructure solutions provider offering managed IT infrastructure, hyper-converged IT infrastructure, network management, server support, and enterprise IT infra services.",
      "mainEntity": {
        "@id": "https://www.cybaemtech.com/solutions/it-infrastructure-services#service"
      },
      "isPartOf": {
        "@id": "https://www.cybaemtech.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.cybaemtech.com/solutions/it-infrastructure-services#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.cybaemtech.com/solutions/it-infrastructure-services#service",
      "name": "IT Infrastructure Services",
      "serviceType": "Managed IT Infrastructure & IT Infra Solutions",
      "url": "https://www.cybaemtech.com/solutions/it-infrastructure-services",
      "description": "Cybaem Tech is an industry-leading IT infrastructure solutions provider delivering end-to-end IT infrastructure management services, cloud architecture optimization, network virtualization, and managed IT infrastructure solutions. Our enterprise IT infra services encompass next-generation hyper converged IT infrastructure deployment, server administration, automated data backup, disaster recovery planning, and 24/7 system monitoring. As a trusted partner for solution IT infrastructure, we engineer resilient IT infra management frameworks and robust IT infra services that eliminate system downtime, maximize hardware performance, ensure zero-trust network security, and scale seamlessly to support high-growth business environments.",
      "provider": {
        "@id": "https://www.cybaemtech.com/#organization"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Global"
      },
      "hasOfferCatalog": {
        "@id": "https://www.cybaemtech.com/solutions/it-infrastructure-services#subservices"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.cybaemtech.com/solutions/it-infrastructure-services#subservices",
      "name": "What We Manage - IT Infra Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Managed Network Infrastructure",
            "description": "24/7 active network management, firewall configuration, SD-WAN optimization, and secure routing."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Server Management & Virtualization",
            "description": "Windows & Linux server deployment, VMware/Hyper-V virtualization, and cloud server provisioning."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hyper-Converged IT Infrastructure (HCI)",
            "description": "Unified compute, storage, and networking architecture for high-density virtual environments."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Infrastructure & Migration",
            "description": "AWS, Azure, and Hybrid Cloud provisioning, architecture design, and seamless cloud migration."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Backup & Disaster Recovery (DRaaS)",
            "description": "Automated data replication, disaster recovery planning, and business continuity solutions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Monitoring & IT Operations",
            "description": "Proactive endpoint security, patch management, SOC integration, and IT helpdesk support."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://www.cybaemtech.com/solutions/it-infrastructure-services#howto",
      "name": "A 5-Step Journey to Infrastructure Excellence",
      "description": "Our systematic process for assessing, engineering, deploying, managing, and scaling enterprise IT infrastructure.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Assess",
          "text": "Evaluating your current IT infra services, hardware assets, security posture, and bottlenecks."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Design",
          "text": "Architecting customized hyper-converged IT infrastructure and resilient cloud/on-premise IT infra solutions."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Deploy",
          "text": "Executing seamless hardware, network, and server integration with zero impact on daily operations."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Manage",
          "text": "Delivering continuous 24/7 IT infrastructure management services, proactive patching, and health checks."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Scale",
          "text": "Optimizing systems for future growth, cloud expansion, and evolving enterprise technology requirements."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.cybaemtech.com/solutions/it-infrastructure-services#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are Managed IT Services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Managed IT Services means outsourcing the day-to-day management of your IT infrastructure - monitoring, maintenance, support, and security - to Cybaem Tech for a fixed monthly fee."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in an IT AMC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our AMCs cover preventive maintenance, scheduled health checks, hardware & software maintenance, security updates, performance tuning, and priority support for desktops, laptops, servers, networks, firewalls, and storage."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide both remote and onsite support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Most issues are resolved instantly through secure remote support, and our engineers provide onsite assistance whenever physical intervention is needed."
          }
        },
        {
          "@type": "Question",
          "name": "Can you work alongside our existing IT team?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Our Co-Managed IT model supplements your internal team with 24x7 monitoring, specialist skills, and extra capacity during peak demand."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly do you respond to issues?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Response times are defined in your SLA. Critical incidents receive immediate attention - typical response within 15-30 minutes."
          }
        },
        {
          "@type": "Question",
          "name": "Which locations do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Headquartered in Pune (Hinjawadi), we serve clients across India with remote-first support that extends to international clients."
          }
        },
        {
          "@type": "Question",
          "name": "How much do Managed IT Services cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing depends on users, devices, servers, and service level. We offer per-user and per-device monthly models. Most clients save 30-40% vs. in-house IT."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.cybaemtech.com/#organization",
      "name": "Cybaem Tech Pvt. Ltd.",
      "url": "https://www.cybaemtech.com",
      "logo": "https://www.cybaemtech.com/assets/cybaem-logo-DX80ZcrY.png",
      "email": "sales@cybaemtech.com",
      "telephone": "+91-9028541383",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office 304, Suratwala Mark Plazzo, Hinjewadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/cybaemtech",
        "https://www.instagram.com/cybaemtech",
        "https://www.youtube.com/@cybaemtech",
        "https://www.facebook.com/cybaemtech",
        "https://x.com/cybaemtech"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cybaemtech.com/solutions/it-infrastructure-services#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Solutions",
          "item": "https://www.cybaemtech.com/solutions"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "IT Infrastructure Services"
        }
      ]
    }
  ]
};

// src/data/seo/leadershipSeo.ts
var leadershipSeoData = {
  title: "Leadership Team | Vision & Expertise | Cybaem Tech",
  description: "Meet our leadership team driving business strategy, technology innovation, client success, and sustainable organizational growth.",
  canonical: "https://www.cybaemtech.com/leadership",
  keywords: "Cybaem Tech leadership, executive leadership Pune, business strategy consulting, technology leadership, digital transformation leaders, innovation leadership, CEO Cybaem Tech, executive management, IT company leadership, software company executives, enterprise technology strategy, corporate leadership, business innovation, digital consulting leadership",
  ogTitle: "Leadership Team | Business Strategy & Executive Vision | Cybaem Tech",
  ogDescription: "Meet the executive leadership driving Cybaem Tech",
  twitterTitle: "Leadership Team | Cybaem Tech",
  twitterDescription: "Discover the executive team leading innovation, business strategy, enterprise technology, and digital transformation at Cybaem Tech.",
  jsonLd: [
    {
      "@type": "CollectionPage",
      "@id": "https://www.cybaemtech.com/leadership#webpage",
      "url": "https://www.cybaemtech.com/leadership",
      "name": "Leadership Team | Cybaem Tech",
      "description": "Meet the leadership team driving strategy, technology, operations, and global growth at Cybaem Tech.",
      "isPartOf": {
        "@id": "https://www.cybaemtech.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.cybaemtech.com/leadership#breadcrumb"
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Cybaem Tech Executive Leadership",
        "numberOfItems": 5,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Person",
              "@id": "https://www.cybaemtech.com/leadership/rohan-bhosale#person",
              "name": "Rohan Bhosale",
              "jobTitle": "Founder & Chief Executive Officer",
              "url": "https://www.cybaemtech.com/leadership/rohan-bhosale",
              "image": "https://www.cybaemtech.com/people/rohan.png",
              "sameAs": [
                "https://www.linkedin.com/in/rohanbhosale15/"
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Person",
              "@id": "https://www.cybaemtech.com/leadership/akshay-navle#person",
              "name": "Akshay Navle",
              "jobTitle": "Chief Technology & Product Officer",
              "url": "https://www.cybaemtech.com/leadership/akshay-navle",
              "image": "https://www.cybaemtech.com/people/akshay.png",
              "sameAs": [
                "https://www.linkedin.com/in/akshay-navle-2929a245/"
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Person",
              "@id": "https://www.cybaemtech.com/leadership/yash-bhalekar#person",
              "name": "Yash Bhalekar",
              "jobTitle": "Director - Operations & Business Strategy",
              "url": "https://www.cybaemtech.com/leadership/yash-bhalekar",
              "image": "https://www.cybaemtech.com/people/yash.png",
              "sameAs": [
                "https://www.linkedin.com/in/yash-bhalekar-imoexo/"
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Person",
              "@id": "https://www.cybaemtech.com/leadership/dilip-dsouza#person",
              "name": "Dilip D'Souza",
              "jobTitle": "Director - Global Business Relations",
              "url": "https://www.cybaemtech.com/leadership/dilip-dsouza",
              "image": "https://www.cybaemtech.com/people/Dilip%20D'Souza.png"
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Person",
              "@id": "https://www.cybaemtech.com/leadership/sanjay-mahadeo-bobde#person",
              "name": "Mr. Sanjay Mahadeo Bobde",
              "jobTitle": "Strategic Advisor - Enterprise Transformation, Digital Government / e-Governance & Public Sector Innovation",
              "url": "https://www.cybaemtech.com/leadership/sanjay-mahadeo-bobde",
              "image": "https://www.cybaemtech.com/people/Sanjay%20Mahadeo%20Bobade.png"
            }
          }
        ]
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.cybaemtech.com/#organization",
      "name": "Cybaem Tech Pvt. Ltd.",
      "url": "https://www.cybaemtech.com",
      "logo": "https://www.cybaemtech.com/assets/cybaem-logo-DX80ZcrY.png",
      "email": "sales@cybaemtech.com",
      "telephone": "+91-9028541383",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office 304, Suratwala Mark Plazzo, Hinjewadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/cybaemtech",
        "https://www.instagram.com/cybaemtech",
        "https://www.youtube.com/@cybaemtech",
        "https://www.facebook.com/cybaemtech",
        "https://x.com/cybaemtech"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cybaemtech.com/leadership#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cybaemtech.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Leadership"
        }
      ]
    }
  ]
};

// src/data/seo/mobileAppSeo.ts
var mobileAppSeoData = {
  title: "Mobile App Development Company | iOS & Android Apps | Cybaem Tech",
  description: "Build custom iOS, Android, and cross-platform mobile apps with Cybaem Tech. High-performance, secure, intuitive native and hybrid mobile app solutions.",
  canonical: "https://www.cybaemtech.com/solutions/mobile-app-development",
  keywords: "mobile app development company, iOS app development, Android app development, React Native app development, Flutter app development, mobile app company Pune, enterprise mobility solutions, custom mobile applications India, cross-platform mobile apps",
  ogTitle: "Mobile App Development Services | iOS, Android & Cross-Platform | Cybaem Tech",
  ogDescription: "Design, build and scale intuitive mobile experiences for iOS, Android and cross-platform with dual ISO-certified engineering.",
  twitterTitle: "Mobile App Development Services | Cybaem Tech",
  twitterDescription: "From native iOS & Android to Flutter & React Native. High-performance mobile apps engineered for real business growth.",
  jsonLd: [
    {
      "@type": "WebPage",
      "@id": "https://www.cybaemtech.com/solutions/mobile-app-development#webpage",
      "url": "https://www.cybaemtech.com/solutions/mobile-app-development",
      "name": "Mobile App Development Services | Cybaem Tech",
      "description": "Cybaem Tech provides end-to-end mobile app development services including native iOS, Android, and cross-platform solutions.",
      "mainEntity": {
        "@id": "https://www.cybaemtech.com/solutions/mobile-app-development#service"
      },
      "isPartOf": {
        "@id": "https://www.cybaemtech.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.cybaemtech.com/solutions/mobile-app-development#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.cybaemtech.com/solutions/mobile-app-development#service",
      "name": "Mobile App Development Services",
      "serviceType": "Mobile Application Development",
      "url": "https://www.cybaemtech.com/solutions/mobile-app-development",
      "description": "Custom mobile application development services for iOS, Android, and cross-platform frameworks including Flutter and React Native.",
      "provider": {
        "@id": "https://www.cybaemtech.com/#organization"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Global"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.cybaemtech.com/solutions/mobile-app-development#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does app development take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typical mobile MVP projects take between 8 to 12 weeks, while feature-rich enterprise mobility platforms range from 12 to 20 weeks with iterative agile sprints."
          }
        },
        {
          "@type": "Question",
          "name": "Should we build native or cross-platform?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Native (Swift/Kotlin) is ideal for hardware-intensive features, complex graphics, or platform-specific UX. Cross-platform (Flutter/React Native) offers faster time-to-market and lower development costs with 90%+ shared code."
          }
        },
        {
          "@type": "Question",
          "name": "Can you modernize an existing app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we refactor legacy codebases, upgrade frameworks, redesign UI/UX, and optimize backend APIs for performance and security."
          }
        },
        {
          "@type": "Question",
          "name": "How do you secure app data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We enforce biometric authentication, TLS 1.3 data encryption in transit, SQLCipher / Keychain encryption at rest, and ISO 27001-certified development protocols."
          }
        },
        {
          "@type": "Question",
          "name": "Do you support publishing to app stores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our team handles the end-to-end deployment process on Apple App Store and Google Play Console, ensuring full adherence to review guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "Can the app integrate with our existing systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We engineer secure RESTful and GraphQL APIs to seamlessly bridge mobile apps with existing ERPs, CRMs, cloud databases, and third-party SaaS services."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.cybaemtech.com/#organization",
      "name": "Cybaem Tech Pvt. Ltd.",
      "url": "https://www.cybaemtech.com",
      "logo": "https://www.cybaemtech.com/assets/cybaem-logo-DX80ZcrY.png",
      "email": "sales@cybaemtech.com",
      "telephone": "+91-9028541383"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cybaemtech.com/solutions/mobile-app-development#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Solutions",
          "item": "https://www.cybaemtech.com/solutions"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Mobile App Development"
        }
      ]
    }
  ]
};

// vite.config.ts
var __vite_injected_original_dirname = "C:\\Cybaemtech\\Cybaemtech\\Cybaemtech\\IN HOUSE\\Cybaemtech 23sep";
var BASE_URL = "https://www.cybaemtech.com";
var routeMeta = {
  "/": homeSeoData,
  "/about": aboutSeoData,
  "/contact": contactSeoData,
  "/life-at-cybaemtech": lifeAtCybaemtechSeoData,
  "/blog": resourceSeoData,
  "/solutions/web-systems": webSystemsSeoData,
  "/solutions/managed-it-cloud-security": managedITSeoData,
  "/solutions/it-staff-augmentation": itAugmentationSeoData,
  "/solutions/enterprise-software": enterpriseSoftwareSeoData,
  "/solutions/it-infrastructure-services": itInfrastructureServicesSeoData,
  "/solutions/mobile-app-development": mobileAppSeoData,
  "/leadership": leadershipSeoData,
  "/digital-growth/performance-marketing": {
    title: "Google Ads & Meta Ads Management | CybaemTech",
    description: "We manage Google Ads and Meta Ads built for quality leads, not empty clicks. Get more leads and sales from every rupee you spend.",
    canonical: "/digital-growth/performance-marketing"
  },
  "/digital-growth/social-media-management": {
    title: "Social Media Management Services | CybaemTech",
    description: "Stay active, consistent, and on-brand on the platforms your customers use. We plan, create, and manage your social media so it supports real business goals.",
    canonical: "/digital-growth/social-media-management"
  },
  "/digital-marketing/seo-aeo-geo": {
    title: "SEO, AEO & GEO Services | CybaemTech",
    description: "We build SEO that keeps rankings and turns visitors into customers. Get found on search engines, in AI overviews, and in local search.",
    canonical: "/digital-marketing/seo-aeo-geo"
  }
};
var routeAliases = {
  "/approach": "/life-at-cybaemtech",
  "/resources": "/blog",
  "/solutions/it-augmentation": "/solutions/it-staff-augmentation",
  "/solutions/digital-marketing": "/digital-growth/performance-marketing",
  "/solutions/digital-revenue-growth": "/digital-growth/performance-marketing",
  "/digital-growth": "/digital-growth/performance-marketing",
  "/performance-marketing": "/digital-growth/performance-marketing",
  "/social-media-management": "/digital-growth/social-media-management",
  "/solutions/social-media-management": "/digital-growth/social-media-management",
  "/seo-aeo-geo": "/digital-marketing/seo-aeo-geo",
  "/solutions/seo-aeo-geo": "/digital-marketing/seo-aeo-geo",
  "/digital-growth/seo-aeo-geo": "/digital-marketing/seo-aeo-geo",
  "/digital-marketing/seo": "/digital-marketing/seo-aeo-geo",
  "/solutions/it-infrastructure": "/solutions/it-infrastructure-services",
  "/solutions/managed-it": "/solutions/managed-it-cloud-security",
  "/solutions/enterprise-software-development": "/solutions/enterprise-software",
  "/enterprise-software-development": "/solutions/enterprise-software",
  "/enterprise-software": "/solutions/enterprise-software",
  "/solutions/mobile-app": "/solutions/mobile-app-development",
  "/solutions/mobile-apps": "/solutions/mobile-app-development",
  "/mobile-app-development": "/solutions/mobile-app-development",
  "/mobile-app": "/solutions/mobile-app-development",
  "/mobile-apps": "/solutions/mobile-app-development"
};
var routeToSeoFileName = {
  "/": "Home Page - SEO, AEO & GEO Setup File.html",
  "/about": "About Page - SEO Setup.html",
  "/contact": "Contact Page - SEO Setup.html",
  "/life-at-cybaemtech": "Life at Cybaemtech - SEO Setup.html",
  "/blog": "Resource Page - SEO Setup Code.html",
  "/solutions/web-systems": "web-systems.html",
  "/solutions/it-staff-augmentation": "IT Agumentation - SEO Setup.html",
  "/solutions/digital-revenue-growth": "digital marketing.html",
  "/solutions/managed-it-cloud-security": "managed-it.html",
  "/solutions/it-infrastructure-services": "it-infrastructure-services.html",
  "/solutions/enterprise-software": "enterprise-software.html",
  "/portfolio": "portfolio.html",
  "/leadership": "leadership.html",
  "/leadership/rohan-bhosale": "leadership-rohan-bhosale.html",
  "/leadership/akshay-navle": "leadership-akshay-navle.html",
  "/leadership/yash-bhalekar": "leadership-yash-bhalekar.html",
  "/leadership/dilip-dsouza": "leadership-dilip-dsouza.html",
  "/leadership/sanjay-mahadeo-bobde": "leadership-sanjay-mahadeo-bobde.html"
};
var routesToProcess = Object.keys(routeToSeoFileName);
var targetRouteToSourceLabel = {
  "/": "src/data/seo/homeSeo.ts",
  "/about": "src/data/seo/aboutSeo.ts",
  "/contact": "src/data/seo/contactSeo.ts",
  "/life-at-cybaemtech": "src/data/seo/lifeAtCybaemtechSeo.ts",
  "/blog": "src/data/seo/blogSeo.ts",
  "/solutions/web-systems": "src/data/seo/webSystemsSeo.ts",
  "/solutions/it-staff-augmentation": "src/data/seo/itStaffAugmentationSeo.ts",
  "/solutions/digital-revenue-growth": "src/data/seo/digitalGrowthSeo.ts",
  "/solutions/managed-it-cloud-security": "src/data/seo/managedITSeo.ts",
  "/solutions/it-infrastructure-services": "src/data/seo/itInfrastructureServicesSeo.ts",
  "/solutions/enterprise-software": "src/data/seo/enterpriseSoftwareSeo.ts",
  "/solutions/mobile-app-development": "src/data/seo/mobileAppSeo.ts",
  "/leadership": "src/data/seo/leadershipSeo.ts"
};
function escHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function buildSeoHtml(meta) {
  let canonical = meta.canonical.startsWith("http") ? meta.canonical : `${BASE_URL}${meta.canonical}`;
  canonical = canonical.replace(/^https?:\/\/(?:www\.)?cybaemtech\.com/i, BASE_URL);
  const ogImg = "https://www.cybaemtech.com/images/cybaem-logo.webp";
  const parts = [
    `<title>${escHtml(meta.title)}</title>`,
    `<meta name="description" content="${escHtml(meta.description)}">`,
    `<meta name="keywords" content="${escHtml(meta.keywords || "")}">`,
    `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:title" content="${escHtml(meta.ogTitle || meta.title)}">`,
    `<meta property="og:description" content="${escHtml(meta.ogDescription || meta.description)}">`,
    `<meta property="og:image" content="${ogImg}">`,
    `<meta property="og:site_name" content="Cybaem Tech">`,
    `<meta property="og:locale" content="en_IN">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escHtml(meta.twitterTitle || meta.ogTitle || meta.title)}">`,
    `<meta name="twitter:description" content="${escHtml(meta.twitterDescription || meta.ogDescription || meta.description)}">`,
    `<meta name="twitter:image" content="${ogImg}">`
  ];
  if (meta.jsonLd?.length) {
    for (const schema of meta.jsonLd) {
      parts.push(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`);
    }
  }
  return parts.join("\n");
}
function extractHtmlFromContent(content) {
  const cleaned = content.replace(/```html/gi, "").replace(/```/g, "");
  const firstTagIndex = cleaned.search(/<(?:!--|meta|title|link|script|style)/i);
  if (firstTagIndex !== -1) {
    return cleaned.slice(firstTagIndex).trim();
  }
  return cleaned.trim();
}
function injectSeoIntoHtml(html, seoContent, sourceLabel) {
  const seoBlock = `<!-- SEO_INJECT_START -->
<!-- SEO SOURCE: ${sourceLabel} -->
${seoContent}
<!-- SEO_INJECT_END -->`;
  const cleaned = html.replace(/<!-- SEO_INJECT_START -->[\s\S]*?<!-- SEO_INJECT_END -->\n?/g, "");
  return cleaned.replace("</head>", `${seoBlock}
</head>`);
}
var GOOGLE_SHEETS_API = "https://docs.google.com/spreadsheets/d/1fI_YaQF9y53wjRBKwi_T7SGCTqkz_1gLDvWbA1zp8P4/gviz/tq?tqx=out:json&sheet=Sheet1";
var DECOMMISSIONED_BLOG_SLUGS = /* @__PURE__ */ new Set([
  "how-pune-clinics-doctors-can-get-more-leads-with-digital-marketing",
  "how-saas-startups-in-pune-can-scale-faster-with-seo-google-ads",
  "how-saas-startups-in-pune-can-scale-faster-with-seo-googleads",
  "the-role-of-content-marketing-in-building-a-strong-business-brand-online",
  "the-role-of-content-marketing-in-building-a-strong-business-brandonline",
  "business-technology-trends-in-2026-smarter-digital-solutions-for-growth",
  "business-technology-trends-in-2026-smarter-digital-solutionsfor-growth",
  "from-data-to-delight-how-ai-personalization-shapes-the-modern-customer-journey",
  "real-estate-co-working-lead-generation-with-meta-and-google-ads-digital-marketing-company-in-pune",
  "the-rise-of-ai-driven-personalization-crafting-experiences-that-convert",
  "how-to-build-a-brand-from-the-ground-up-with-digital-marketing",
  "why-authenticity-beats-algorithms-in-modern-marketing",
  "brand-storytelling-that-actually-resonates-in-a-noisy-world"
]);
async function fetchBlogPostsForSeo() {
  try {
    const response = await fetch(GOOGLE_SHEETS_API);
    if (!response.ok) throw new Error("Google Sheets fetch failed");
    const text = await response.text();
    const jsonStr = text.substring(47).slice(0, -2);
    const json = JSON.parse(jsonStr);
    const headers = json.table.cols.map((col) => col.label);
    const data = json.table.rows.map((row) => {
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = row.c?.[index]?.v ?? "";
      });
      return obj;
    });
    return data.filter((row) => {
      const isBlog = String(row["Blog"]).trim().toUpperCase() === "YES";
      const slug = String(row["Slug"] || "").trim();
      return isBlog && !DECOMMISSIONED_BLOG_SLUGS.has(slug);
    }).map((row, index) => {
      const rawContent = row["Content"] || "";
      const cleanContent = rawContent.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
      const excerpt = cleanContent ? cleanContent.substring(0, 180) + "..." : "";
      return {
        slug: row["Slug"] || `wordpress-post-${index}`,
        title: row["Title"] || "Untitled",
        image: row["Image URL"] || null,
        excerpt,
        publishedAt: row["Published Date"] || null
      };
    });
  } catch (error) {
    console.warn("Could not fetch Google Sheets blog data, using fallback slugs:", error);
    return [];
  }
}
var vite_config_default = defineConfig(() => ({
  server: {
    host: "0.0.0.0",
    port: 5e3,
    allowedHosts: true,
    hmr: {
      overlay: false
    },
    proxy: {
      "/contact.php": {
        target: "http://localhost:8000",
        changeOrigin: true
      },
      "/careers.php": {
        target: "http://localhost:8000",
        changeOrigin: true
      },
      "/blog-api.php": {
        target: "http://localhost:8000",
        changeOrigin: true
      },
      "/auth.php": {
        target: "http://localhost:8000",
        changeOrigin: true
      }
    }
  },
  appType: "spa",
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    target: "es2015"
  },
  plugins: [
    react(),
    {
      name: "route-seo-dev-html",
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          try {
            let url = req.url?.split("?")[0] || "/";
            if (url.endsWith("/") && url !== "/") {
              url = url.slice(0, -1);
            }
            if (!routesToProcess.includes(url)) return next();
            const htmlPath = path.resolve(__vite_injected_original_dirname, "index.html");
            if (!fs.existsSync(htmlPath)) return next();
            let html = fs.readFileSync(htmlPath, "utf-8");
            let seoContent = "";
            let sourceLabel = "";
            const fileName = routeToSeoFileName[url];
            if (fileName) {
              const seoFilePath = path.resolve(__vite_injected_original_dirname, "SEO files", fileName);
              if (fs.existsSync(seoFilePath)) {
                const rawContent = fs.readFileSync(seoFilePath, "utf-8");
                seoContent = extractHtmlFromContent(rawContent);
                sourceLabel = `SEO files/${fileName}`;
              }
            }
            if (!seoContent) {
              const targetRoute = routeMeta[url] ? url : routeAliases[url] || null;
              if (targetRoute) {
                const meta = routeMeta[targetRoute];
                seoContent = buildSeoHtml(meta);
                sourceLabel = targetRouteToSourceLabel[targetRoute] || "seo-config.ts";
              }
            }
            if (seoContent) {
              html = injectSeoIntoHtml(html, seoContent, sourceLabel);
            }
            const transformedHtml = await server.transformIndexHtml(req.url || url, html);
            res.setHeader("Content-Type", "text/html");
            res.end(transformedHtml);
          } catch (e) {
            next(e);
          }
        });
      },
      async closeBundle() {
        const distDir = path.resolve(__vite_injected_original_dirname, "dist");
        const baseHtmlPath = path.join(distDir, "index.html");
        if (!fs.existsSync(baseHtmlPath)) {
          console.warn("Could not find dist/index.html for SEO injection.");
          return;
        }
        const baseHtml = fs.readFileSync(baseHtmlPath, "utf-8");
        const generateRouteHtml = (route, seoContent, sourceLabel) => {
          const stripped = baseHtml.replace(/<!-- SEO_INJECT_START -->[\s\S]*?<!-- SEO_INJECT_END -->\n?/g, "");
          const injected = injectSeoIntoHtml(stripped, seoContent, sourceLabel);
          if (route === "/") {
            fs.writeFileSync(baseHtmlPath, injected);
          } else {
            const routeDir = path.join(distDir, route.startsWith("/") ? route.substring(1) : route);
            fs.mkdirSync(routeDir, { recursive: true });
            fs.writeFileSync(path.join(routeDir, "index.html"), injected);
          }
        };
        for (const route of routesToProcess) {
          let seoContent = "";
          let sourceLabel = "";
          const fileName = routeToSeoFileName[route];
          if (fileName) {
            const seoFilePath = path.resolve(__vite_injected_original_dirname, "SEO files", fileName);
            if (fs.existsSync(seoFilePath)) {
              const rawContent = fs.readFileSync(seoFilePath, "utf-8");
              seoContent = extractHtmlFromContent(rawContent);
              sourceLabel = `SEO files/${fileName}`;
            }
          }
          if (!seoContent) {
            const targetRoute = routeMeta[route] ? route : routeAliases[route] || null;
            if (targetRoute) {
              const meta = routeMeta[targetRoute];
              seoContent = buildSeoHtml(meta);
              sourceLabel = targetRouteToSourceLabel[targetRoute] || "seo-config.ts";
            }
          }
          if (seoContent) {
            generateRouteHtml(route, seoContent, sourceLabel);
          }
        }
        const blogs = await fetchBlogPostsForSeo();
        for (const blog of blogs) {
          const canonical = `/blog/${blog.slug}`;
          const fullCanonical = `${BASE_URL}${canonical}`;
          const title = `${blog.title} | Cybaem Tech Blog`;
          const desc = blog.excerpt || `Read ${blog.title} on the Cybaem Tech blog.`;
          const ogImg = blog.image || "https://www.cybaemtech.com/images/cybaem-logo.webp";
          const blogMeta = {
            title,
            description: desc,
            canonical,
            keywords: `${blog.title}, Cybaem Tech blog, IT strategy Pune, digital transformation`,
            ogTitle: title,
            ogDescription: desc,
            twitterTitle: title,
            twitterDescription: desc,
            jsonLd: [
              {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "@id": `${fullCanonical}#article`,
                headline: blog.title,
                description: desc,
                image: ogImg,
                url: fullCanonical,
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": fullCanonical
                },
                publisher: {
                  "@type": "Organization",
                  "@id": `${BASE_URL}/#organization`,
                  name: "Cybaem Tech Pvt. Ltd.",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.cybaemtech.com/images/cybaem-logo.webp"
                  }
                },
                author: {
                  "@type": "Organization",
                  name: "Cybaem Tech Editorial Team",
                  url: BASE_URL
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "@id": `${fullCanonical}#breadcrumb`,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
                  { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
                  { "@type": "ListItem", position: 3, name: blog.title, item: fullCanonical }
                ]
              }
            ]
          };
          const blogSeoContent = buildSeoHtml(blogMeta);
          generateRouteHtml(canonical, blogSeoContent, `Google Sheets: /blog/${blog.slug}`);
          if (blog.slug === "best-digital-marketing-strategy-for-pune-it-saas-companies-cybaem-tech") {
            generateRouteHtml(
              "/blog/best-digital-marketing-strategy-for-pune-it-saas-companiescybaem-tech",
              blogSeoContent,
              "Google Sheets Alias: /blog/best-digital-marketing-strategy-for-pune-it-saas-companiescybaem-tech"
            );
          }
          if (blog.slug === "strengthening-digital-trust-why-cybersecurity-is-every-businesss-priority") {
            generateRouteHtml(
              "/blog/strengthening-digital-trust-why-cybersecurity-is-every-business-priority",
              blogSeoContent,
              "Google Sheets Alias: /blog/strengthening-digital-trust-why-cybersecurity-is-every-business-priority"
            );
          }
        }
      }
    }
  ]
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL2RhdGEvc2VvL3Jlc291cmNlU2VvLnRzIiwgInNlby1jb25maWcudHMiLCAic3JjL2RhdGEvc2VvL2xlYWRlcnNoaXBTZW8udHMiLCAic3JjL2RhdGEvc2VvL21vYmlsZUFwcFNlby50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXEN5YmFlbXRlY2hcXFxcQ3liYWVtdGVjaFxcXFxDeWJhZW10ZWNoXFxcXElOIEhPVVNFXFxcXEN5YmFlbXRlY2ggMjNzZXBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXEN5YmFlbXRlY2hcXFxcQ3liYWVtdGVjaFxcXFxDeWJhZW10ZWNoXFxcXElOIEhPVVNFXFxcXEN5YmFlbXRlY2ggMjNzZXBcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L0N5YmFlbXRlY2gvQ3liYWVtdGVjaC9DeWJhZW10ZWNoL0lOJTIwSE9VU0UvQ3liYWVtdGVjaCUyMDIzc2VwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQge1xyXG4gIGhvbWVTZW9EYXRhLFxyXG4gIGFib3V0U2VvRGF0YSxcclxuICBjb250YWN0U2VvRGF0YSxcclxuICBsaWZlQXRDeWJhZW10ZWNoU2VvRGF0YSxcclxuICBibG9nU2VvRGF0YSxcclxuICB3ZWJTeXN0ZW1zU2VvRGF0YSxcclxuICBtYW5hZ2VkSVRTZW9EYXRhLFxyXG4gIGl0QXVnbWVudGF0aW9uU2VvRGF0YSxcclxuICBkaWdpdGFsTWFya2V0aW5nU2VvRGF0YSxcclxuICBlbnRlcnByaXNlU29mdHdhcmVTZW9EYXRhLFxyXG4gIGl0SW5mcmFzdHJ1Y3R1cmVTZXJ2aWNlc1Nlb0RhdGEsXHJcbn0gZnJvbSBcIi4vc2VvLWNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBsZWFkZXJzaGlwU2VvRGF0YSB9IGZyb20gXCIuL3NyYy9kYXRhL3Nlby9sZWFkZXJzaGlwU2VvXCI7XHJcbmltcG9ydCB7IG1vYmlsZUFwcFNlb0RhdGEgfSBmcm9tIFwiLi9zcmMvZGF0YS9zZW8vbW9iaWxlQXBwU2VvXCI7XHJcbmltcG9ydCB7IHNvZnR3YXJlRGV2ZWxvcG1lbnRTZW9EYXRhIH0gZnJvbSBcIi4vc3JjL2RhdGEvc2VvL3NvZnR3YXJlRGV2ZWxvcG1lbnRTZW9cIjtcclxuXHJcbmNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbVwiO1xyXG5cclxudHlwZSBSb3V0ZU1ldGEgPSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGNhbm9uaWNhbDogc3RyaW5nO1xyXG4gIGtleXdvcmRzPzogc3RyaW5nO1xyXG4gIG9nVGl0bGU/OiBzdHJpbmc7XHJcbiAgb2dEZXNjcmlwdGlvbj86IHN0cmluZztcclxuICB0d2l0dGVyVGl0bGU/OiBzdHJpbmc7XHJcbiAgdHdpdHRlckRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gIGpzb25MZD86IHVua25vd25bXTtcclxufTtcclxuXHJcbmNvbnN0IHJvdXRlTWV0YTogUmVjb3JkPHN0cmluZywgUm91dGVNZXRhPiA9IHtcclxuICBcIi9cIjogaG9tZVNlb0RhdGEsXHJcbiAgXCIvYWJvdXRcIjogYWJvdXRTZW9EYXRhLFxyXG4gIFwiL2NvbnRhY3RcIjogY29udGFjdFNlb0RhdGEsXHJcbiAgXCIvbGlmZS1hdC1jeWJhZW10ZWNoXCI6IGxpZmVBdEN5YmFlbXRlY2hTZW9EYXRhLFxyXG4gIFwiL2Jsb2dcIjogYmxvZ1Nlb0RhdGEsXHJcbiAgXCIvc29sdXRpb25zL3dlYi1zeXN0ZW1zXCI6IHdlYlN5c3RlbXNTZW9EYXRhLFxyXG4gIFwiL3NvbHV0aW9ucy9tYW5hZ2VkLWl0LWNsb3VkLXNlY3VyaXR5XCI6IG1hbmFnZWRJVFNlb0RhdGEsXHJcbiAgXCIvc29sdXRpb25zL2l0LXN0YWZmLWF1Z21lbnRhdGlvblwiOiBpdEF1Z21lbnRhdGlvblNlb0RhdGEsXHJcbiAgXCIvc29sdXRpb25zL2VudGVycHJpc2Utc29mdHdhcmVcIjogZW50ZXJwcmlzZVNvZnR3YXJlU2VvRGF0YSxcclxuICBcIi9zb2x1dGlvbnMvaXQtaW5mcmFzdHJ1Y3R1cmUtc2VydmljZXNcIjogaXRJbmZyYXN0cnVjdHVyZVNlcnZpY2VzU2VvRGF0YSxcclxuICBcIi9zb2x1dGlvbnMvbW9iaWxlLWFwcC1kZXZlbG9wbWVudFwiOiBtb2JpbGVBcHBTZW9EYXRhLFxyXG4gIFwiL2xlYWRlcnNoaXBcIjogbGVhZGVyc2hpcFNlb0RhdGEsXHJcbiAgXCIvZGlnaXRhbC1ncm93dGgvcGVyZm9ybWFuY2UtbWFya2V0aW5nXCI6IHtcclxuICAgIHRpdGxlOiBcIkdvb2dsZSBBZHMgJiBNZXRhIEFkcyBNYW5hZ2VtZW50IHwgQ3liYWVtVGVjaFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiV2UgbWFuYWdlIEdvb2dsZSBBZHMgYW5kIE1ldGEgQWRzIGJ1aWx0IGZvciBxdWFsaXR5IGxlYWRzLCBub3QgZW1wdHkgY2xpY2tzLiBHZXQgbW9yZSBsZWFkcyBhbmQgc2FsZXMgZnJvbSBldmVyeSBydXBlZSB5b3Ugc3BlbmQuXCIsXHJcbiAgICBjYW5vbmljYWw6IFwiL2RpZ2l0YWwtZ3Jvd3RoL3BlcmZvcm1hbmNlLW1hcmtldGluZ1wiLFxyXG4gIH0sXHJcbiAgXCIvZGlnaXRhbC1ncm93dGgvc29jaWFsLW1lZGlhLW1hbmFnZW1lbnRcIjoge1xyXG4gICAgdGl0bGU6IFwiU29jaWFsIE1lZGlhIE1hbmFnZW1lbnQgU2VydmljZXMgfCBDeWJhZW1UZWNoXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTdGF5IGFjdGl2ZSwgY29uc2lzdGVudCwgYW5kIG9uLWJyYW5kIG9uIHRoZSBwbGF0Zm9ybXMgeW91ciBjdXN0b21lcnMgdXNlLiBXZSBwbGFuLCBjcmVhdGUsIGFuZCBtYW5hZ2UgeW91ciBzb2NpYWwgbWVkaWEgc28gaXQgc3VwcG9ydHMgcmVhbCBidXNpbmVzcyBnb2Fscy5cIixcclxuICAgIGNhbm9uaWNhbDogXCIvZGlnaXRhbC1ncm93dGgvc29jaWFsLW1lZGlhLW1hbmFnZW1lbnRcIixcclxuICB9LFxyXG4gIFwiL2RpZ2l0YWwtbWFya2V0aW5nL3Nlby1hZW8tZ2VvXCI6IHtcclxuICAgIHRpdGxlOiBcIlNFTywgQUVPICYgR0VPIFNlcnZpY2VzIHwgQ3liYWVtVGVjaFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiV2UgYnVpbGQgU0VPIHRoYXQga2VlcHMgcmFua2luZ3MgYW5kIHR1cm5zIHZpc2l0b3JzIGludG8gY3VzdG9tZXJzLiBHZXQgZm91bmQgb24gc2VhcmNoIGVuZ2luZXMsIGluIEFJIG92ZXJ2aWV3cywgYW5kIGluIGxvY2FsIHNlYXJjaC5cIixcclxuICAgIGNhbm9uaWNhbDogXCIvZGlnaXRhbC1tYXJrZXRpbmcvc2VvLWFlby1nZW9cIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3Qgcm91dGVBbGlhc2VzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gIFwiL2FwcHJvYWNoXCI6IFwiL2xpZmUtYXQtY3liYWVtdGVjaFwiLFxyXG4gIFwiL3Jlc291cmNlc1wiOiBcIi9ibG9nXCIsXHJcbiAgXCIvc29sdXRpb25zL2l0LWF1Z21lbnRhdGlvblwiOiBcIi9zb2x1dGlvbnMvaXQtc3RhZmYtYXVnbWVudGF0aW9uXCIsXHJcbiAgXCIvc29sdXRpb25zL2RpZ2l0YWwtbWFya2V0aW5nXCI6IFwiL2RpZ2l0YWwtZ3Jvd3RoL3BlcmZvcm1hbmNlLW1hcmtldGluZ1wiLFxyXG4gIFwiL3NvbHV0aW9ucy9kaWdpdGFsLXJldmVudWUtZ3Jvd3RoXCI6IFwiL2RpZ2l0YWwtZ3Jvd3RoL3BlcmZvcm1hbmNlLW1hcmtldGluZ1wiLFxyXG4gIFwiL2RpZ2l0YWwtZ3Jvd3RoXCI6IFwiL2RpZ2l0YWwtZ3Jvd3RoL3BlcmZvcm1hbmNlLW1hcmtldGluZ1wiLFxyXG4gIFwiL3BlcmZvcm1hbmNlLW1hcmtldGluZ1wiOiBcIi9kaWdpdGFsLWdyb3d0aC9wZXJmb3JtYW5jZS1tYXJrZXRpbmdcIixcclxuICBcIi9zb2NpYWwtbWVkaWEtbWFuYWdlbWVudFwiOiBcIi9kaWdpdGFsLWdyb3d0aC9zb2NpYWwtbWVkaWEtbWFuYWdlbWVudFwiLFxyXG4gIFwiL3NvbHV0aW9ucy9zb2NpYWwtbWVkaWEtbWFuYWdlbWVudFwiOiBcIi9kaWdpdGFsLWdyb3d0aC9zb2NpYWwtbWVkaWEtbWFuYWdlbWVudFwiLFxyXG4gIFwiL3Nlby1hZW8tZ2VvXCI6IFwiL2RpZ2l0YWwtbWFya2V0aW5nL3Nlby1hZW8tZ2VvXCIsXHJcbiAgXCIvc29sdXRpb25zL3Nlby1hZW8tZ2VvXCI6IFwiL2RpZ2l0YWwtbWFya2V0aW5nL3Nlby1hZW8tZ2VvXCIsXHJcbiAgXCIvZGlnaXRhbC1ncm93dGgvc2VvLWFlby1nZW9cIjogXCIvZGlnaXRhbC1tYXJrZXRpbmcvc2VvLWFlby1nZW9cIixcclxuICBcIi9kaWdpdGFsLW1hcmtldGluZy9zZW9cIjogXCIvZGlnaXRhbC1tYXJrZXRpbmcvc2VvLWFlby1nZW9cIixcclxuICBcIi9zb2x1dGlvbnMvaXQtaW5mcmFzdHJ1Y3R1cmVcIjogXCIvc29sdXRpb25zL2l0LWluZnJhc3RydWN0dXJlLXNlcnZpY2VzXCIsXHJcbiAgXCIvc29sdXRpb25zL21hbmFnZWQtaXRcIjogXCIvc29sdXRpb25zL21hbmFnZWQtaXQtY2xvdWQtc2VjdXJpdHlcIixcclxuICBcIi9zb2x1dGlvbnMvZW50ZXJwcmlzZS1zb2Z0d2FyZS1kZXZlbG9wbWVudFwiOiBcIi9zb2x1dGlvbnMvZW50ZXJwcmlzZS1zb2Z0d2FyZVwiLFxyXG4gIFwiL2VudGVycHJpc2Utc29mdHdhcmUtZGV2ZWxvcG1lbnRcIjogXCIvc29sdXRpb25zL2VudGVycHJpc2Utc29mdHdhcmVcIixcclxuICBcIi9lbnRlcnByaXNlLXNvZnR3YXJlXCI6IFwiL3NvbHV0aW9ucy9lbnRlcnByaXNlLXNvZnR3YXJlXCIsXHJcbiAgXCIvc29sdXRpb25zL21vYmlsZS1hcHBcIjogXCIvc29sdXRpb25zL21vYmlsZS1hcHAtZGV2ZWxvcG1lbnRcIixcclxuICBcIi9zb2x1dGlvbnMvbW9iaWxlLWFwcHNcIjogXCIvc29sdXRpb25zL21vYmlsZS1hcHAtZGV2ZWxvcG1lbnRcIixcclxuICBcIi9tb2JpbGUtYXBwLWRldmVsb3BtZW50XCI6IFwiL3NvbHV0aW9ucy9tb2JpbGUtYXBwLWRldmVsb3BtZW50XCIsXHJcbiAgXCIvbW9iaWxlLWFwcFwiOiBcIi9zb2x1dGlvbnMvbW9iaWxlLWFwcC1kZXZlbG9wbWVudFwiLFxyXG4gIFwiL21vYmlsZS1hcHBzXCI6IFwiL3NvbHV0aW9ucy9tb2JpbGUtYXBwLWRldmVsb3BtZW50XCIsXHJcbn07XHJcblxyXG5jb25zdCByb3V0ZVRvU2VvRmlsZU5hbWU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgXCIvXCI6IFwiSG9tZSBQYWdlIC0gU0VPLCBBRU8gJiBHRU8gU2V0dXAgRmlsZS5odG1sXCIsXHJcbiAgXCIvYWJvdXRcIjogXCJBYm91dCBQYWdlIC0gU0VPIFNldHVwLmh0bWxcIixcclxuICBcIi9jb250YWN0XCI6IFwiQ29udGFjdCBQYWdlIC0gU0VPIFNldHVwLmh0bWxcIixcclxuICBcIi9saWZlLWF0LWN5YmFlbXRlY2hcIjogXCJMaWZlIGF0IEN5YmFlbXRlY2ggLSBTRU8gU2V0dXAuaHRtbFwiLFxyXG4gIFwiL2Jsb2dcIjogXCJSZXNvdXJjZSBQYWdlIC0gU0VPIFNldHVwIENvZGUuaHRtbFwiLFxyXG4gIFwiL3NvbHV0aW9ucy93ZWItc3lzdGVtc1wiOiBcIndlYi1zeXN0ZW1zLmh0bWxcIixcclxuICBcIi9zb2x1dGlvbnMvaXQtc3RhZmYtYXVnbWVudGF0aW9uXCI6IFwiSVQgQWd1bWVudGF0aW9uIC0gU0VPIFNldHVwLmh0bWxcIixcclxuICBcIi9zb2x1dGlvbnMvZGlnaXRhbC1yZXZlbnVlLWdyb3d0aFwiOiBcImRpZ2l0YWwgbWFya2V0aW5nLmh0bWxcIixcclxuICBcIi9zb2x1dGlvbnMvbWFuYWdlZC1pdC1jbG91ZC1zZWN1cml0eVwiOiBcIm1hbmFnZWQtaXQuaHRtbFwiLFxyXG4gIFwiL3NvbHV0aW9ucy9pdC1pbmZyYXN0cnVjdHVyZS1zZXJ2aWNlc1wiOiBcIml0LWluZnJhc3RydWN0dXJlLXNlcnZpY2VzLmh0bWxcIixcclxuICBcIi9zb2x1dGlvbnMvZW50ZXJwcmlzZS1zb2Z0d2FyZVwiOiBcImVudGVycHJpc2Utc29mdHdhcmUuaHRtbFwiLFxyXG4gIFwiL3BvcnRmb2xpb1wiOiBcInBvcnRmb2xpby5odG1sXCIsXHJcbiAgXCIvbGVhZGVyc2hpcFwiOiBcImxlYWRlcnNoaXAuaHRtbFwiLFxyXG4gIFwiL2xlYWRlcnNoaXAvcm9oYW4tYmhvc2FsZVwiOiBcImxlYWRlcnNoaXAtcm9oYW4tYmhvc2FsZS5odG1sXCIsXHJcbiAgXCIvbGVhZGVyc2hpcC9ha3NoYXktbmF2bGVcIjogXCJsZWFkZXJzaGlwLWFrc2hheS1uYXZsZS5odG1sXCIsXHJcbiAgXCIvbGVhZGVyc2hpcC95YXNoLWJoYWxla2FyXCI6IFwibGVhZGVyc2hpcC15YXNoLWJoYWxla2FyLmh0bWxcIixcclxuICBcIi9sZWFkZXJzaGlwL2RpbGlwLWRzb3V6YVwiOiBcImxlYWRlcnNoaXAtZGlsaXAtZHNvdXphLmh0bWxcIixcclxuICBcIi9sZWFkZXJzaGlwL3NhbmpheS1tYWhhZGVvLWJvYmRlXCI6IFwibGVhZGVyc2hpcC1zYW5qYXktbWFoYWRlby1ib2JkZS5odG1sXCIsXHJcbn07XHJcblxyXG5jb25zdCByb3V0ZXNUb1Byb2Nlc3MgPSBPYmplY3Qua2V5cyhyb3V0ZVRvU2VvRmlsZU5hbWUpO1xyXG5cclxuY29uc3QgdGFyZ2V0Um91dGVUb1NvdXJjZUxhYmVsOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gIFwiL1wiOiBcInNyYy9kYXRhL3Nlby9ob21lU2VvLnRzXCIsXHJcbiAgXCIvYWJvdXRcIjogXCJzcmMvZGF0YS9zZW8vYWJvdXRTZW8udHNcIixcclxuICBcIi9jb250YWN0XCI6IFwic3JjL2RhdGEvc2VvL2NvbnRhY3RTZW8udHNcIixcclxuICBcIi9saWZlLWF0LWN5YmFlbXRlY2hcIjogXCJzcmMvZGF0YS9zZW8vbGlmZUF0Q3liYWVtdGVjaFNlby50c1wiLFxyXG4gIFwiL2Jsb2dcIjogXCJzcmMvZGF0YS9zZW8vYmxvZ1Nlby50c1wiLFxyXG4gIFwiL3NvbHV0aW9ucy93ZWItc3lzdGVtc1wiOiBcInNyYy9kYXRhL3Nlby93ZWJTeXN0ZW1zU2VvLnRzXCIsXHJcbiAgXCIvc29sdXRpb25zL2l0LXN0YWZmLWF1Z21lbnRhdGlvblwiOiBcInNyYy9kYXRhL3Nlby9pdFN0YWZmQXVnbWVudGF0aW9uU2VvLnRzXCIsXHJcbiAgXCIvc29sdXRpb25zL2RpZ2l0YWwtcmV2ZW51ZS1ncm93dGhcIjogXCJzcmMvZGF0YS9zZW8vZGlnaXRhbEdyb3d0aFNlby50c1wiLFxyXG4gIFwiL3NvbHV0aW9ucy9tYW5hZ2VkLWl0LWNsb3VkLXNlY3VyaXR5XCI6IFwic3JjL2RhdGEvc2VvL21hbmFnZWRJVFNlby50c1wiLFxyXG4gIFwiL3NvbHV0aW9ucy9pdC1pbmZyYXN0cnVjdHVyZS1zZXJ2aWNlc1wiOiBcInNyYy9kYXRhL3Nlby9pdEluZnJhc3RydWN0dXJlU2VydmljZXNTZW8udHNcIixcclxuICBcIi9zb2x1dGlvbnMvZW50ZXJwcmlzZS1zb2Z0d2FyZVwiOiBcInNyYy9kYXRhL3Nlby9lbnRlcnByaXNlU29mdHdhcmVTZW8udHNcIixcclxuICBcIi9zb2x1dGlvbnMvbW9iaWxlLWFwcC1kZXZlbG9wbWVudFwiOiBcInNyYy9kYXRhL3Nlby9tb2JpbGVBcHBTZW8udHNcIixcclxuICBcIi9sZWFkZXJzaGlwXCI6IFwic3JjL2RhdGEvc2VvL2xlYWRlcnNoaXBTZW8udHNcIixcclxufTtcclxuXHJcbmZ1bmN0aW9uIGVzY0h0bWwoc3RyOiBzdHJpbmcpIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoLyYvZywgXCImYW1wO1wiKS5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKS5yZXBsYWNlKC88L2csIFwiJmx0O1wiKS5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRTZW9IdG1sKG1ldGE6IFJvdXRlTWV0YSkge1xyXG4gIGxldCBjYW5vbmljYWwgPSBtZXRhLmNhbm9uaWNhbC5zdGFydHNXaXRoKFwiaHR0cFwiKSA/IG1ldGEuY2Fub25pY2FsIDogYCR7QkFTRV9VUkx9JHttZXRhLmNhbm9uaWNhbH1gO1xyXG4gIGNhbm9uaWNhbCA9IGNhbm9uaWNhbC5yZXBsYWNlKC9eaHR0cHM/OlxcL1xcLyg/Ond3d1xcLik/Y3liYWVtdGVjaFxcLmNvbS9pLCBCQVNFX1VSTCk7XHJcbiAgY29uc3Qgb2dJbWcgPSBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2ltYWdlcy9jeWJhZW0tbG9nby53ZWJwXCI7XHJcbiAgY29uc3QgcGFydHMgPSBbXHJcbiAgICBgPHRpdGxlPiR7ZXNjSHRtbChtZXRhLnRpdGxlKX08L3RpdGxlPmAsXHJcbiAgICBgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIiR7ZXNjSHRtbChtZXRhLmRlc2NyaXB0aW9uKX1cIj5gLFxyXG4gICAgYDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCIke2VzY0h0bWwobWV0YS5rZXl3b3JkcyB8fCBcIlwiKX1cIj5gLFxyXG4gICAgYDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCIke2Nhbm9uaWNhbH1cIj5gLFxyXG4gICAgYDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCI+YCxcclxuICAgIGA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCIke2Nhbm9uaWNhbH1cIj5gLFxyXG4gICAgYDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiJHtlc2NIdG1sKG1ldGEub2dUaXRsZSB8fCBtZXRhLnRpdGxlKX1cIj5gLFxyXG4gICAgYDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiJHtlc2NIdG1sKG1ldGEub2dEZXNjcmlwdGlvbiB8fCBtZXRhLmRlc2NyaXB0aW9uKX1cIj5gLFxyXG4gICAgYDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiJHtvZ0ltZ31cIj5gLFxyXG4gICAgYDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIkN5YmFlbSBUZWNoXCI+YCxcclxuICAgIGA8bWV0YSBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIGNvbnRlbnQ9XCJlbl9JTlwiPmAsXHJcbiAgICBgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCI+YCxcclxuICAgIGA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCIke2VzY0h0bWwobWV0YS50d2l0dGVyVGl0bGUgfHwgbWV0YS5vZ1RpdGxlIHx8IG1ldGEudGl0bGUpfVwiPmAsXHJcbiAgICBgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiJHtlc2NIdG1sKG1ldGEudHdpdHRlckRlc2NyaXB0aW9uIHx8IG1ldGEub2dEZXNjcmlwdGlvbiB8fCBtZXRhLmRlc2NyaXB0aW9uKX1cIj5gLFxyXG4gICAgYDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cIiR7b2dJbWd9XCI+YCxcclxuICBdO1xyXG5cclxuICBpZiAobWV0YS5qc29uTGQ/Lmxlbmd0aCkge1xyXG4gICAgZm9yIChjb25zdCBzY2hlbWEgb2YgbWV0YS5qc29uTGQpIHtcclxuICAgICAgcGFydHMucHVzaChgPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiPiR7SlNPTi5zdHJpbmdpZnkoc2NoZW1hKX08L3NjcmlwdD5gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJ0cy5qb2luKFwiXFxuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHRyYWN0SHRtbEZyb21Db250ZW50KGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgY29uc3QgY2xlYW5lZCA9IGNvbnRlbnQucmVwbGFjZSgvYGBgaHRtbC9naSwgXCJcIikucmVwbGFjZSgvYGBgL2csIFwiXCIpO1xyXG4gIGNvbnN0IGZpcnN0VGFnSW5kZXggPSBjbGVhbmVkLnNlYXJjaCgvPCg/OiEtLXxtZXRhfHRpdGxlfGxpbmt8c2NyaXB0fHN0eWxlKS9pKTtcclxuICBpZiAoZmlyc3RUYWdJbmRleCAhPT0gLTEpIHtcclxuICAgIHJldHVybiBjbGVhbmVkLnNsaWNlKGZpcnN0VGFnSW5kZXgpLnRyaW0oKTtcclxuICB9XHJcbiAgcmV0dXJuIGNsZWFuZWQudHJpbSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmplY3RTZW9JbnRvSHRtbChodG1sOiBzdHJpbmcsIHNlb0NvbnRlbnQ6IHN0cmluZywgc291cmNlTGFiZWw6IHN0cmluZykge1xyXG4gIGNvbnN0IHNlb0Jsb2NrID0gYDwhLS0gU0VPX0lOSkVDVF9TVEFSVCAtLT5cXG48IS0tIFNFTyBTT1VSQ0U6ICR7c291cmNlTGFiZWx9IC0tPlxcbiR7c2VvQ29udGVudH1cXG48IS0tIFNFT19JTkpFQ1RfRU5EIC0tPmA7XHJcbiAgY29uc3QgY2xlYW5lZCA9IGh0bWwucmVwbGFjZSgvPCEtLSBTRU9fSU5KRUNUX1NUQVJUIC0tPltcXHNcXFNdKj88IS0tIFNFT19JTkpFQ1RfRU5EIC0tPlxcbj8vZywgXCJcIik7XHJcbiAgcmV0dXJuIGNsZWFuZWQucmVwbGFjZShcIjwvaGVhZD5cIiwgYCR7c2VvQmxvY2t9XFxuPC9oZWFkPmApO1xyXG59XHJcblxyXG5jb25zdCBHT09HTEVfU0hFRVRTX0FQSSA9XHJcbiAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xZklfWWFRRjl5NTN3alJCS3dpX1Q3U0dDVHFrel8xZ0xEdldiQTF6cDhQNC9ndml6L3RxP3RxeD1vdXQ6anNvbiZzaGVldD1TaGVldDFcIjtcclxuXHJcbmNvbnN0IERFQ09NTUlTU0lPTkVEX0JMT0dfU0xVR1MgPSBuZXcgU2V0KFtcclxuICBcImhvdy1wdW5lLWNsaW5pY3MtZG9jdG9ycy1jYW4tZ2V0LW1vcmUtbGVhZHMtd2l0aC1kaWdpdGFsLW1hcmtldGluZ1wiLFxyXG4gIFwiaG93LXNhYXMtc3RhcnR1cHMtaW4tcHVuZS1jYW4tc2NhbGUtZmFzdGVyLXdpdGgtc2VvLWdvb2dsZS1hZHNcIixcclxuICBcImhvdy1zYWFzLXN0YXJ0dXBzLWluLXB1bmUtY2FuLXNjYWxlLWZhc3Rlci13aXRoLXNlby1nb29nbGVhZHNcIixcclxuICBcInRoZS1yb2xlLW9mLWNvbnRlbnQtbWFya2V0aW5nLWluLWJ1aWxkaW5nLWEtc3Ryb25nLWJ1c2luZXNzLWJyYW5kLW9ubGluZVwiLFxyXG4gIFwidGhlLXJvbGUtb2YtY29udGVudC1tYXJrZXRpbmctaW4tYnVpbGRpbmctYS1zdHJvbmctYnVzaW5lc3MtYnJhbmRvbmxpbmVcIixcclxuICBcImJ1c2luZXNzLXRlY2hub2xvZ3ktdHJlbmRzLWluLTIwMjYtc21hcnRlci1kaWdpdGFsLXNvbHV0aW9ucy1mb3ItZ3Jvd3RoXCIsXHJcbiAgXCJidXNpbmVzcy10ZWNobm9sb2d5LXRyZW5kcy1pbi0yMDI2LXNtYXJ0ZXItZGlnaXRhbC1zb2x1dGlvbnNmb3ItZ3Jvd3RoXCIsXHJcbiAgXCJmcm9tLWRhdGEtdG8tZGVsaWdodC1ob3ctYWktcGVyc29uYWxpemF0aW9uLXNoYXBlcy10aGUtbW9kZXJuLWN1c3RvbWVyLWpvdXJuZXlcIixcclxuICBcInJlYWwtZXN0YXRlLWNvLXdvcmtpbmctbGVhZC1nZW5lcmF0aW9uLXdpdGgtbWV0YS1hbmQtZ29vZ2xlLWFkcy1kaWdpdGFsLW1hcmtldGluZy1jb21wYW55LWluLXB1bmVcIixcclxuICBcInRoZS1yaXNlLW9mLWFpLWRyaXZlbi1wZXJzb25hbGl6YXRpb24tY3JhZnRpbmctZXhwZXJpZW5jZXMtdGhhdC1jb252ZXJ0XCIsXHJcbiAgXCJob3ctdG8tYnVpbGQtYS1icmFuZC1mcm9tLXRoZS1ncm91bmQtdXAtd2l0aC1kaWdpdGFsLW1hcmtldGluZ1wiLFxyXG4gIFwid2h5LWF1dGhlbnRpY2l0eS1iZWF0cy1hbGdvcml0aG1zLWluLW1vZGVybi1tYXJrZXRpbmdcIixcclxuICBcImJyYW5kLXN0b3J5dGVsbGluZy10aGF0LWFjdHVhbGx5LXJlc29uYXRlcy1pbi1hLW5vaXN5LXdvcmxkXCIsXHJcbl0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hCbG9nUG9zdHNGb3JTZW8oKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goR09PR0xFX1NIRUVUU19BUEkpO1xyXG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiR29vZ2xlIFNoZWV0cyBmZXRjaCBmYWlsZWRcIik7XHJcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgY29uc3QganNvblN0ciA9IHRleHQuc3Vic3RyaW5nKDQ3KS5zbGljZSgwLCAtMik7XHJcbiAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJzID0ganNvbi50YWJsZS5jb2xzLm1hcCgoY29sOiBhbnkpID0+IGNvbC5sYWJlbCk7XHJcbiAgICBjb25zdCBkYXRhID0ganNvbi50YWJsZS5yb3dzLm1hcCgocm93OiBhbnkpID0+IHtcclxuICAgICAgY29uc3Qgb2JqOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XHJcbiAgICAgIGhlYWRlcnMuZm9yRWFjaCgoaGVhZGVyOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBvYmpbaGVhZGVyXSA9IHJvdy5jPy5baW5kZXhdPy52ID8/IFwiXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gb2JqO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGFcclxuICAgICAgLmZpbHRlcigocm93OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBpc0Jsb2cgPSBTdHJpbmcocm93W1wiQmxvZ1wiXSkudHJpbSgpLnRvVXBwZXJDYXNlKCkgPT09IFwiWUVTXCI7XHJcbiAgICAgICAgY29uc3Qgc2x1ZyA9IFN0cmluZyhyb3dbXCJTbHVnXCJdIHx8IFwiXCIpLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gaXNCbG9nICYmICFERUNPTU1JU1NJT05FRF9CTE9HX1NMVUdTLmhhcyhzbHVnKTtcclxuICAgICAgfSlcclxuICAgICAgLm1hcCgocm93OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBjb25zdCByYXdDb250ZW50ID0gcm93W1wiQ29udGVudFwiXSB8fCBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGNsZWFuQ29udGVudCA9IHJhd0NvbnRlbnQucmVwbGFjZSgvPFtePl0qPi9nLCBcIlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgZXhjZXJwdCA9IGNsZWFuQ29udGVudCA/IGNsZWFuQ29udGVudC5zdWJzdHJpbmcoMCwgMTgwKSArIFwiLi4uXCIgOiBcIlwiO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzbHVnOiByb3dbXCJTbHVnXCJdIHx8IGB3b3JkcHJlc3MtcG9zdC0ke2luZGV4fWAsXHJcbiAgICAgICAgICB0aXRsZTogcm93W1wiVGl0bGVcIl0gfHwgXCJVbnRpdGxlZFwiLFxyXG4gICAgICAgICAgaW1hZ2U6IHJvd1tcIkltYWdlIFVSTFwiXSB8fCBudWxsLFxyXG4gICAgICAgICAgZXhjZXJwdCxcclxuICAgICAgICAgIHB1Ymxpc2hlZEF0OiByb3dbXCJQdWJsaXNoZWQgRGF0ZVwiXSB8fCBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLndhcm4oXCJDb3VsZCBub3QgZmV0Y2ggR29vZ2xlIFNoZWV0cyBibG9nIGRhdGEsIHVzaW5nIGZhbGxiYWNrIHNsdWdzOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKCkgPT4gKHtcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxyXG4gICAgcG9ydDogNTAwMCxcclxuICAgIGFsbG93ZWRIb3N0czogdHJ1ZSxcclxuICAgIGhtcjoge1xyXG4gICAgICBvdmVybGF5OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBwcm94eToge1xyXG4gICAgICBcIi9jb250YWN0LnBocFwiOiB7XHJcbiAgICAgICAgdGFyZ2V0OiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgXCIvY2FyZWVycy5waHBcIjoge1xyXG4gICAgICAgIHRhcmdldDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIixcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiL2Jsb2ctYXBpLnBocFwiOiB7XHJcbiAgICAgICAgdGFyZ2V0OiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgXCIvYXV0aC5waHBcIjoge1xyXG4gICAgICAgIHRhcmdldDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIixcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYXBwVHlwZTogXCJzcGFcIixcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgdGFyZ2V0OiBcImVzMjAxNVwiLFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJyb3V0ZS1zZW8tZGV2LWh0bWxcIixcclxuICAgICAgY29uZmlndXJlU2VydmVyKHNlcnZlcikge1xyXG4gICAgICAgIHNlcnZlci5taWRkbGV3YXJlcy51c2UoYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gcmVxLnVybD8uc3BsaXQoXCI/XCIpWzBdIHx8IFwiL1wiO1xyXG4gICAgICAgICAgICAvLyBOb3JtYWxpemUgdHJhaWxpbmcgc2xhc2ggKGV4Y2VwdCBmb3Igcm9vdCBcIi9cIilcclxuICAgICAgICAgICAgaWYgKHVybC5lbmRzV2l0aChcIi9cIikgJiYgdXJsICE9PSBcIi9cIikge1xyXG4gICAgICAgICAgICAgIHVybCA9IHVybC5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFyb3V0ZXNUb1Byb2Nlc3MuaW5jbHVkZXModXJsKSkgcmV0dXJuIG5leHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWxQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJpbmRleC5odG1sXCIpO1xyXG4gICAgICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoaHRtbFBhdGgpKSByZXR1cm4gbmV4dCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGh0bWwgPSBmcy5yZWFkRmlsZVN5bmMoaHRtbFBhdGgsIFwidXRmLThcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2VvQ29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBzb3VyY2VMYWJlbCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IHJvdXRlVG9TZW9GaWxlTmFtZVt1cmxdO1xyXG4gICAgICAgICAgICBpZiAoZmlsZU5hbWUpIHtcclxuICAgICAgICAgICAgICBjb25zdCBzZW9GaWxlUGF0aCA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiU0VPIGZpbGVzXCIsIGZpbGVOYW1lKTtcclxuICAgICAgICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhzZW9GaWxlUGF0aCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhd0NvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoc2VvRmlsZVBhdGgsIFwidXRmLThcIik7XHJcbiAgICAgICAgICAgICAgICBzZW9Db250ZW50ID0gZXh0cmFjdEh0bWxGcm9tQ29udGVudChyYXdDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIHNvdXJjZUxhYmVsID0gYFNFTyBmaWxlcy8ke2ZpbGVOYW1lfWA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBGYWxsYmFja1xyXG4gICAgICAgICAgICBpZiAoIXNlb0NvbnRlbnQpIHtcclxuICAgICAgICAgICAgICBjb25zdCB0YXJnZXRSb3V0ZSA9IHJvdXRlTWV0YVt1cmxdID8gdXJsIDogcm91dGVBbGlhc2VzW3VybF0gfHwgbnVsbDtcclxuICAgICAgICAgICAgICBpZiAodGFyZ2V0Um91dGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGEgPSByb3V0ZU1ldGFbdGFyZ2V0Um91dGVdO1xyXG4gICAgICAgICAgICAgICAgc2VvQ29udGVudCA9IGJ1aWxkU2VvSHRtbChtZXRhKTtcclxuICAgICAgICAgICAgICAgIHNvdXJjZUxhYmVsID0gdGFyZ2V0Um91dGVUb1NvdXJjZUxhYmVsW3RhcmdldFJvdXRlXSB8fCBcInNlby1jb25maWcudHNcIjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZW9Db250ZW50KSB7XHJcbiAgICAgICAgICAgICAgaHRtbCA9IGluamVjdFNlb0ludG9IdG1sKGh0bWwsIHNlb0NvbnRlbnQsIHNvdXJjZUxhYmVsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUGFzcyB0aGUgSFRNTCB0aHJvdWdoIFZpdGUncyBpbnRlcm5hbCB0cmFuc2Zvcm1lcnMgKHByZWFtYmxlLCBITVIgY2xpZW50LCBldGMuKVxyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZEh0bWwgPSBhd2FpdCBzZXJ2ZXIudHJhbnNmb3JtSW5kZXhIdG1sKHJlcS51cmwgfHwgdXJsLCBodG1sKTtcclxuXHJcbiAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XHJcbiAgICAgICAgICAgIHJlcy5lbmQodHJhbnNmb3JtZWRIdG1sKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbmV4dChlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgY2xvc2VCdW5kbGUoKSB7XHJcbiAgICAgICAgY29uc3QgZGlzdERpciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiZGlzdFwiKTtcclxuICAgICAgICBjb25zdCBiYXNlSHRtbFBhdGggPSBwYXRoLmpvaW4oZGlzdERpciwgXCJpbmRleC5odG1sXCIpO1xyXG4gICAgICAgIGlmICghZnMuZXhpc3RzU3luYyhiYXNlSHRtbFBhdGgpKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJDb3VsZCBub3QgZmluZCBkaXN0L2luZGV4Lmh0bWwgZm9yIFNFTyBpbmplY3Rpb24uXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYmFzZUh0bWwgPSBmcy5yZWFkRmlsZVN5bmMoYmFzZUh0bWxQYXRoLCBcInV0Zi04XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBnZW5lcmF0ZVJvdXRlSHRtbCA9IChyb3V0ZTogc3RyaW5nLCBzZW9Db250ZW50OiBzdHJpbmcsIHNvdXJjZUxhYmVsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHN0cmlwcGVkID0gYmFzZUh0bWwucmVwbGFjZSgvPCEtLSBTRU9fSU5KRUNUX1NUQVJUIC0tPltcXHNcXFNdKj88IS0tIFNFT19JTkpFQ1RfRU5EIC0tPlxcbj8vZywgXCJcIik7XHJcbiAgICAgICAgICBjb25zdCBpbmplY3RlZCA9IGluamVjdFNlb0ludG9IdG1sKHN0cmlwcGVkLCBzZW9Db250ZW50LCBzb3VyY2VMYWJlbCk7XHJcblxyXG4gICAgICAgICAgaWYgKHJvdXRlID09PSBcIi9cIikge1xyXG4gICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGJhc2VIdG1sUGF0aCwgaW5qZWN0ZWQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgcm91dGVEaXIgPSBwYXRoLmpvaW4oZGlzdERpciwgcm91dGUuc3RhcnRzV2l0aChcIi9cIikgPyByb3V0ZS5zdWJzdHJpbmcoMSkgOiByb3V0ZSk7XHJcbiAgICAgICAgICAgIGZzLm1rZGlyU3luYyhyb3V0ZURpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKHJvdXRlRGlyLCBcImluZGV4Lmh0bWxcIiksIGluamVjdGVkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlc1RvUHJvY2Vzcykge1xyXG4gICAgICAgICAgbGV0IHNlb0NvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgICAgbGV0IHNvdXJjZUxhYmVsID0gXCJcIjtcclxuXHJcbiAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IHJvdXRlVG9TZW9GaWxlTmFtZVtyb3V0ZV07XHJcbiAgICAgICAgICBpZiAoZmlsZU5hbWUpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VvRmlsZVBhdGggPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIlNFTyBmaWxlc1wiLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHNlb0ZpbGVQYXRoKSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJhd0NvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoc2VvRmlsZVBhdGgsIFwidXRmLThcIik7XHJcbiAgICAgICAgICAgICAgc2VvQ29udGVudCA9IGV4dHJhY3RIdG1sRnJvbUNvbnRlbnQocmF3Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgc291cmNlTGFiZWwgPSBgU0VPIGZpbGVzLyR7ZmlsZU5hbWV9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIEZhbGxiYWNrXHJcbiAgICAgICAgICBpZiAoIXNlb0NvbnRlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0Um91dGUgPSByb3V0ZU1ldGFbcm91dGVdID8gcm91dGUgOiByb3V0ZUFsaWFzZXNbcm91dGVdIHx8IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRSb3V0ZSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG1ldGEgPSByb3V0ZU1ldGFbdGFyZ2V0Um91dGVdO1xyXG4gICAgICAgICAgICAgIHNlb0NvbnRlbnQgPSBidWlsZFNlb0h0bWwobWV0YSk7XHJcbiAgICAgICAgICAgICAgc291cmNlTGFiZWwgPSB0YXJnZXRSb3V0ZVRvU291cmNlTGFiZWxbdGFyZ2V0Um91dGVdIHx8IFwic2VvLWNvbmZpZy50c1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHNlb0NvbnRlbnQpIHtcclxuICAgICAgICAgICAgZ2VuZXJhdGVSb3V0ZUh0bWwocm91dGUsIHNlb0NvbnRlbnQsIHNvdXJjZUxhYmVsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFByZXJlbmRlciBhbGwgZHluYW1pYyBibG9nIHBvc3RzIHdpdGggc2VsZi1yZWZlcmVuY2luZyBjYW5vbmljYWwgdGFnc1xyXG4gICAgICAgIGNvbnN0IGJsb2dzID0gYXdhaXQgZmV0Y2hCbG9nUG9zdHNGb3JTZW8oKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGJsb2cgb2YgYmxvZ3MpIHtcclxuICAgICAgICAgIGNvbnN0IGNhbm9uaWNhbCA9IGAvYmxvZy8ke2Jsb2cuc2x1Z31gO1xyXG4gICAgICAgICAgY29uc3QgZnVsbENhbm9uaWNhbCA9IGAke0JBU0VfVVJMfSR7Y2Fub25pY2FsfWA7XHJcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IGAke2Jsb2cudGl0bGV9IHwgQ3liYWVtIFRlY2ggQmxvZ2A7XHJcbiAgICAgICAgICBjb25zdCBkZXNjID0gYmxvZy5leGNlcnB0IHx8IGBSZWFkICR7YmxvZy50aXRsZX0gb24gdGhlIEN5YmFlbSBUZWNoIGJsb2cuYDtcclxuICAgICAgICAgIGNvbnN0IG9nSW1nID0gYmxvZy5pbWFnZSB8fCBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2ltYWdlcy9jeWJhZW0tbG9nby53ZWJwXCI7XHJcblxyXG4gICAgICAgICAgY29uc3QgYmxvZ01ldGE6IFJvdXRlTWV0YSA9IHtcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjLFxyXG4gICAgICAgICAgICBjYW5vbmljYWwsXHJcbiAgICAgICAgICAgIGtleXdvcmRzOiBgJHtibG9nLnRpdGxlfSwgQ3liYWVtIFRlY2ggYmxvZywgSVQgc3RyYXRlZ3kgUHVuZSwgZGlnaXRhbCB0cmFuc2Zvcm1hdGlvbmAsXHJcbiAgICAgICAgICAgIG9nVGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiBkZXNjLFxyXG4gICAgICAgICAgICB0d2l0dGVyVGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICB0d2l0dGVyRGVzY3JpcHRpb246IGRlc2MsXHJcbiAgICAgICAgICAgIGpzb25MZDogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcclxuICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJCbG9nUG9zdGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJAaWRcIjogYCR7ZnVsbENhbm9uaWNhbH0jYXJ0aWNsZWAsXHJcbiAgICAgICAgICAgICAgICBoZWFkbGluZTogYmxvZy50aXRsZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG9nSW1nLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBmdWxsQ2Fub25pY2FsLFxyXG4gICAgICAgICAgICAgICAgbWFpbkVudGl0eU9mUGFnZToge1xyXG4gICAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiV2ViUGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkBpZFwiOiBmdWxsQ2Fub25pY2FsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHB1Ymxpc2hlcjoge1xyXG4gICAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiQGlkXCI6IGAke0JBU0VfVVJMfS8jb3JnYW5pemF0aW9uYCxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJDeWJhZW0gVGVjaCBQdnQuIEx0ZC5cIixcclxuICAgICAgICAgICAgICAgICAgbG9nbzoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9pbWFnZXMvY3liYWVtLWxvZ28ud2VicFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF1dGhvcjoge1xyXG4gICAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ3liYWVtIFRlY2ggRWRpdG9yaWFsIFRlYW1cIixcclxuICAgICAgICAgICAgICAgICAgdXJsOiBCQVNFX1VSTCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXHJcbiAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiQnJlYWRjcnVtYkxpc3RcIixcclxuICAgICAgICAgICAgICAgIFwiQGlkXCI6IGAke2Z1bGxDYW5vbmljYWx9I2JyZWFkY3J1bWJgLFxyXG4gICAgICAgICAgICAgICAgaXRlbUxpc3RFbGVtZW50OiBbXHJcbiAgICAgICAgICAgICAgICAgIHsgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsIHBvc2l0aW9uOiAxLCBuYW1lOiBcIkhvbWVcIiwgaXRlbTogYCR7QkFTRV9VUkx9L2AgfSxcclxuICAgICAgICAgICAgICAgICAgeyBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIiwgcG9zaXRpb246IDIsIG5hbWU6IFwiQmxvZ1wiLCBpdGVtOiBgJHtCQVNFX1VSTH0vYmxvZ2AgfSxcclxuICAgICAgICAgICAgICAgICAgeyBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIiwgcG9zaXRpb246IDMsIG5hbWU6IGJsb2cudGl0bGUsIGl0ZW06IGZ1bGxDYW5vbmljYWwgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29uc3QgYmxvZ1Nlb0NvbnRlbnQgPSBidWlsZFNlb0h0bWwoYmxvZ01ldGEpO1xyXG4gICAgICAgICAgZ2VuZXJhdGVSb3V0ZUh0bWwoY2Fub25pY2FsLCBibG9nU2VvQ29udGVudCwgYEdvb2dsZSBTaGVldHM6IC9ibG9nLyR7YmxvZy5zbHVnfWApO1xyXG5cclxuICAgICAgICAgIC8vIEFsc28gcHJlcmVuZGVyIHNsdWcgdmFyaWF0aW9ucyBzbyBjcmF3bGVycyBhbHdheXMgcmVjZWl2ZSBjYW5vbmljYWxpemVkIEhUTUxcclxuICAgICAgICAgIGlmIChibG9nLnNsdWcgPT09IFwiYmVzdC1kaWdpdGFsLW1hcmtldGluZy1zdHJhdGVneS1mb3ItcHVuZS1pdC1zYWFzLWNvbXBhbmllcy1jeWJhZW0tdGVjaFwiKSB7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlUm91dGVIdG1sKFxyXG4gICAgICAgICAgICAgIFwiL2Jsb2cvYmVzdC1kaWdpdGFsLW1hcmtldGluZy1zdHJhdGVneS1mb3ItcHVuZS1pdC1zYWFzLWNvbXBhbmllc2N5YmFlbS10ZWNoXCIsXHJcbiAgICAgICAgICAgICAgYmxvZ1Nlb0NvbnRlbnQsXHJcbiAgICAgICAgICAgICAgXCJHb29nbGUgU2hlZXRzIEFsaWFzOiAvYmxvZy9iZXN0LWRpZ2l0YWwtbWFya2V0aW5nLXN0cmF0ZWd5LWZvci1wdW5lLWl0LXNhYXMtY29tcGFuaWVzY3liYWVtLXRlY2hcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGJsb2cuc2x1ZyA9PT0gXCJzdHJlbmd0aGVuaW5nLWRpZ2l0YWwtdHJ1c3Qtd2h5LWN5YmVyc2VjdXJpdHktaXMtZXZlcnktYnVzaW5lc3NzLXByaW9yaXR5XCIpIHtcclxuICAgICAgICAgICAgZ2VuZXJhdGVSb3V0ZUh0bWwoXHJcbiAgICAgICAgICAgICAgXCIvYmxvZy9zdHJlbmd0aGVuaW5nLWRpZ2l0YWwtdHJ1c3Qtd2h5LWN5YmVyc2VjdXJpdHktaXMtZXZlcnktYnVzaW5lc3MtcHJpb3JpdHlcIixcclxuICAgICAgICAgICAgICBibG9nU2VvQ29udGVudCxcclxuICAgICAgICAgICAgICBcIkdvb2dsZSBTaGVldHMgQWxpYXM6IC9ibG9nL3N0cmVuZ3RoZW5pbmctZGlnaXRhbC10cnVzdC13aHktY3liZXJzZWN1cml0eS1pcy1ldmVyeS1idXNpbmVzcy1wcmlvcml0eVwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG59KSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcQ3liYWVtdGVjaFxcXFxDeWJhZW10ZWNoXFxcXEN5YmFlbXRlY2hcXFxcSU4gSE9VU0VcXFxcQ3liYWVtdGVjaCAyM3NlcFxcXFxzcmNcXFxcZGF0YVxcXFxzZW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXEN5YmFlbXRlY2hcXFxcQ3liYWVtdGVjaFxcXFxDeWJhZW10ZWNoXFxcXElOIEhPVVNFXFxcXEN5YmFlbXRlY2ggMjNzZXBcXFxcc3JjXFxcXGRhdGFcXFxcc2VvXFxcXHJlc291cmNlU2VvLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9DeWJhZW10ZWNoL0N5YmFlbXRlY2gvQ3liYWVtdGVjaC9JTiUyMEhPVVNFL0N5YmFlbXRlY2glMjAyM3NlcC9zcmMvZGF0YS9zZW8vcmVzb3VyY2VTZW8udHNcIjtleHBvcnQgY29uc3QgcmVzb3VyY2VTZW9EYXRhID0ge1xyXG4gIHRpdGxlOiBcIlJlc291cmNlcyAmIEJsb2cgfCBJVCwgQ2xvdWQgJiBDeWJlcnNlY3VyaXR5IEluc2lnaHRzIHwgQ3liYWVtIFRlY2hcIixcclxuICBkZXNjcmlwdGlvbjogXCJFeHBsb3JlIEN5YmFlbSBUZWNoIHJlc291cmNlcyAtIGJsb2dzLCBndWlkZXMgYW5kIGluc2lnaHRzIG9uIElUIGluZnJhc3RydWN0dXJlLCBjbG91ZCwgY3liZXJzZWN1cml0eSwgZGlnaXRhbCBtYXJrZXRpbmcsIEFNQywgbWFuYWdlZCBzZXJ2aWNlcyBhbmQgSVQgc3RyYXRlZ3kgZm9yIGJ1c2luZXNzZXMuXCIsXHJcbiAgY2Fub25pY2FsOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2Jsb2dcIixcclxuICBrZXl3b3JkczogXCJJVCBibG9nLCB0ZWNobm9sb2d5IHJlc291cmNlcywgSVQgaW5mcmFzdHJ1Y3R1cmUgYXJ0aWNsZXMsIGNsb3VkIGNvbXB1dGluZyBibG9nLCBjeWJlcnNlY3VyaXR5IGluc2lnaHRzLCBkaWdpdGFsIHRyYW5zZm9ybWF0aW9uIHJlc291cmNlcywgbWFuYWdlZCBJVCBzZXJ2aWNlcyBibG9nLCBJVCBBTUMgdGlwcywgTWljcm9zb2Z0IDM2NSBndWlkZXMsIG5ldHdvcmsgYW5kIHNlY3VyaXR5IGJlc3QgcHJhY3RpY2VzLCBDeWJhZW0gVGVjaCBibG9nLCBJVCBrbm93bGVkZ2UgY2VudGVyXCIsXHJcbiAgb2dUaXRsZTogXCJSZXNvdXJjZXMgJiBCbG9nIHwgSVQsIENsb3VkICYgQ3liZXJzZWN1cml0eSBJbnNpZ2h0c1wiLFxyXG4gIG9nRGVzY3JpcHRpb246IFwiUmVhZCBibG9ncyBhbmQgcmVzb3VyY2VzIGZyb20gQ3liYWVtIFRlY2ggb24gSVQgaW5mcmFzdHJ1Y3R1cmUsIGNsb3VkLCBjeWJlcnNlY3VyaXR5LCBkaWdpdGFsIG1hcmtldGluZyBhbmQgbWFuYWdlZCBzZXJ2aWNlcy5cIixcclxuICB0d2l0dGVyVGl0bGU6IFwiUmVzb3VyY2VzICYgQmxvZyB8IEN5YmFlbSBUZWNoXCIsXHJcbiAgdHdpdHRlckRlc2NyaXB0aW9uOiBcIkJsb2dzLCBndWlkZXMgYW5kIGluc2lnaHRzIG9uIElULCBjbG91ZCwgY3liZXJzZWN1cml0eSwgZGlnaXRhbCBtYXJrZXRpbmcgYW5kIG1hbmFnZWQgc2VydmljZXMgZnJvbSBDeWJhZW0gVGVjaC5cIixcclxuICBqc29uTGQ6IFtcclxuICAgIHtcclxuICAgICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxyXG4gICAgICBcIkB0eXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkN5YmFlbSBUZWNoXCIsXHJcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vXCIsXHJcbiAgICAgIFwibG9nb1wiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2ltYWdlcy9jeWJhZW0tbG9nby53ZWJwXCIsXHJcbiAgICAgIFwic2FtZUFzXCI6IFtcclxuICAgICAgICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2N5YmFlbXRlY2hcIixcclxuICAgICAgICBcImh0dHBzOi8veC5jb20vQ3liYWVtX1RlY2hcIixcclxuICAgICAgICBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9jeWJhZW10ZWNoXCIsXHJcbiAgICAgICAgXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2N5YmFlbXRlY2hcIixcclxuICAgICAgICBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0BjeWJhZW10ZWNoXCJcclxuICAgICAgXSxcclxuICAgICAgXCJjb250YWN0UG9pbnRcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiQHR5cGVcIjogXCJDb250YWN0UG9pbnRcIixcclxuICAgICAgICAgIFwidGVsZXBob25lXCI6IFwiKzkxLTkwMjg1NDEzODNcIixcclxuICAgICAgICAgIFwiY29udGFjdFR5cGVcIjogXCJjdXN0b21lciBzdXBwb3J0XCIsXHJcbiAgICAgICAgICBcImFyZWFTZXJ2ZWRcIjogXCJJTlwiLFxyXG4gICAgICAgICAgXCJhdmFpbGFibGVMYW5ndWFnZVwiOiBcIkVuZ2xpc2hcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxyXG4gICAgICBcIkB0eXBlXCI6IFwiV2ViU2l0ZVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJDeWJhZW0gVGVjaFwiLFxyXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL1wiLFxyXG4gICAgICBcInBvdGVudGlhbEFjdGlvblwiOiB7XHJcbiAgICAgICAgXCJAdHlwZVwiOiBcIlNlYXJjaEFjdGlvblwiLFxyXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vP3M9e3NlYXJjaF90ZXJtX3N0cmluZ31cIixcclxuICAgICAgICBcInF1ZXJ5LWlucHV0XCI6IFwicmVxdWlyZWQgbmFtZT1zZWFyY2hfdGVybV9zdHJpbmdcIlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXHJcbiAgICAgIFwiQHR5cGVcIjogXCJDb2xsZWN0aW9uUGFnZVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJDeWJhZW0gVGVjaCBSZXNvdXJjZXMgJiBCbG9nXCIsXHJcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vcmVzb3VyY2VzXCIsXHJcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCbG9ncywgZ3VpZGVzLCBhcnRpY2xlcyBhbmQgdXBkYXRlcyBmcm9tIEN5YmFlbSBUZWNoIG9uIElULCBjbG91ZCwgY3liZXJzZWN1cml0eSwgZGlnaXRhbCBtYXJrZXRpbmcgYW5kIG1hbmFnZWQgc2VydmljZXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcclxuICAgICAgXCJAdHlwZVwiOiBcIklUU2VydmljZVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJDeWJhZW0gVGVjaFwiLFxyXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vaW1hZ2VzL2N5YmFlbS1sb2dvLndlYnBcIixcclxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9cIixcclxuICAgICAgXCJ0ZWxlcGhvbmVcIjogXCIrOTEtOTAyODU0MTM4M1wiLFxyXG4gICAgICBcInByaWNlUmFuZ2VcIjogXCIkJFwiLFxyXG4gICAgICBcImFkZHJlc3NcIjoge1xyXG4gICAgICAgIFwiQHR5cGVcIjogXCJQb3N0YWxBZGRyZXNzXCIsXHJcbiAgICAgICAgXCJzdHJlZXRBZGRyZXNzXCI6IFwiMzA0LCBTdXJhdHdhbGEgTWFyayBQbGF6em8sIEhpbmpld2FkaVwiLFxyXG4gICAgICAgIFwiYWRkcmVzc0xvY2FsaXR5XCI6IFwiUHVuZVwiLFxyXG4gICAgICAgIFwiYWRkcmVzc1JlZ2lvblwiOiBcIk1haGFyYXNodHJhXCIsXHJcbiAgICAgICAgXCJwb3N0YWxDb2RlXCI6IFwiNDExMDU3XCIsXHJcbiAgICAgICAgXCJhZGRyZXNzQ291bnRyeVwiOiBcIklOXCJcclxuICAgICAgfSxcclxuICAgICAgXCJnZW9cIjoge1xyXG4gICAgICAgIFwiQHR5cGVcIjogXCJHZW9Db29yZGluYXRlc1wiLFxyXG4gICAgICAgIFwibGF0aXR1ZGVcIjogXCIxOC41OTAwXCIsXHJcbiAgICAgICAgXCJsb25naXR1ZGVcIjogXCI3My43MzYwXCJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxyXG4gICAgICBcIkB0eXBlXCI6IFwiQnJlYWRjcnVtYkxpc3RcIixcclxuICAgICAgXCJpdGVtTGlzdEVsZW1lbnRcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxyXG4gICAgICAgICAgXCJwb3NpdGlvblwiOiAxLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSG9tZVwiLFxyXG4gICAgICAgICAgXCJpdGVtXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxyXG4gICAgICAgICAgXCJwb3NpdGlvblwiOiAyLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiUmVzb3VyY2VzXCIsXHJcbiAgICAgICAgICBcIml0ZW1cIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9yZXNvdXJjZXNcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxyXG4gICAgICBcIkB0eXBlXCI6IFwiRkFRUGFnZVwiLFxyXG4gICAgICBcIm1haW5FbnRpdHlcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiQHR5cGVcIjogXCJRdWVzdGlvblwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiV2hhdCB0eXBlIG9mIGNvbnRlbnQgaXMgYXZhaWxhYmxlIGluIEN5YmFlbSBUZWNoXHUyMDE5cyByZXNvdXJjZXMgc2VjdGlvbj9cIixcclxuICAgICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xyXG4gICAgICAgICAgICBcIkB0eXBlXCI6IFwiQW5zd2VyXCIsXHJcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlRoZSByZXNvdXJjZXMgc2VjdGlvbiBvZiBDeWJhZW0gVGVjaCBpbmNsdWRlcyBibG9ncywgZ3VpZGVzLCBjaGVja2xpc3RzIGFuZCBpbnNpZ2h0cyBvbiBJVCBpbmZyYXN0cnVjdHVyZSwgY2xvdWQgY29tcHV0aW5nLCBjeWJlcnNlY3VyaXR5LCBkaWdpdGFsIG1hcmtldGluZywgSVQgQU1DLCBtYW5hZ2VkIHNlcnZpY2VzIGFuZCBJVCBzdHJhdGVneSBmb3IgbW9kZXJuIGJ1c2luZXNzZXMuXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiQHR5cGVcIjogXCJRdWVzdGlvblwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiV2hvIHNob3VsZCByZWFkIEN5YmFlbSBUZWNoXHUyMDE5cyBibG9nIGFuZCByZXNvdXJjZXM/XCIsXHJcbiAgICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcclxuICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxyXG4gICAgICAgICAgICBcInRleHRcIjogXCJCdXNpbmVzcyBvd25lcnMsIElUIG1hbmFnZXJzLCBDVE9zLCBzdGFydHVwIGZvdW5kZXJzIGFuZCBvcGVyYXRpb25zIGxlYWRlcnMgd2hvIHdhbnQgdG8gaW1wcm92ZSB0aGVpciBJVCBpbmZyYXN0cnVjdHVyZSwgc2VjdXJpdHksIGNsb3VkIGFkb3B0aW9uIGFuZCBkaWdpdGFsIHByZXNlbmNlIGNhbiBiZW5lZml0IGZyb20gQ3liYWVtIFRlY2hcdTIwMTlzIHJlc291cmNlcy5cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJIb3cgb2Z0ZW4gYXJlIG5ldyBhcnRpY2xlcyBwdWJsaXNoZWQ/XCIsXHJcbiAgICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcclxuICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxyXG4gICAgICAgICAgICBcInRleHRcIjogXCJOZXcgY29udGVudCBpcyBwdWJsaXNoZWQgcGVyaW9kaWNhbGx5IGJhc2VkIG9uIGtleSB0b3BpY3MgaW4gSVQsIGNsb3VkLCBjeWJlcnNlY3VyaXR5IGFuZCBkaWdpdGFsIHRyYW5zZm9ybWF0aW9uIHRvIGtlZXAgcmVhZGVycyB1cGRhdGVkIHdpdGggcHJhY3RpY2FsIGluc2lnaHRzIGFuZCBiZXN0IHByYWN0aWNlcy5cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJDYW4gSSByZXF1ZXN0IGEgdG9waWMgZm9yIGEgZnV0dXJlIGFydGljbGU/XCIsXHJcbiAgICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcclxuICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxyXG4gICAgICAgICAgICBcInRleHRcIjogXCJZZXMsIHlvdSBjYW4gc3VnZ2VzdCB0b3BpY3Mgb3IgcXVlc3Rpb25zIHJlbGF0ZWQgdG8gSVQsIGNsb3VkLCBjeWJlcnNlY3VyaXR5IG9yIGRpZ2l0YWwgbWFya2V0aW5nIHRocm91Z2ggdGhlIGNvbnRhY3QgZm9ybSwgYW5kIHRoZSBDeWJhZW0gVGVjaCB0ZWFtIG1heSBjb3ZlciB0aGVtIGluIGZ1dHVyZSBibG9nIHBvc3RzLlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcIkhvdyBjYW4gSSBzdGF5IHVwZGF0ZWQgd2l0aCBuZXcgcmVzb3VyY2VzIGZyb20gQ3liYWVtIFRlY2g/XCIsXHJcbiAgICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcclxuICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxyXG4gICAgICAgICAgICBcInRleHRcIjogXCJZb3UgY2FuIHJldmlzaXQgdGhlIHJlc291cmNlcyBwYWdlIHJlZ3VsYXJseSBhbmQgZm9sbG93IEN5YmFlbSBUZWNoIG9uIExpbmtlZEluLCBYLCBGYWNlYm9vaywgSW5zdGFncmFtIGFuZCBZb3VUdWJlIHRvIGdldCBub3RpZmllZCB3aGVuIG5ldyBhcnRpY2xlcyBvciB1cGRhdGVzIGFyZSBwdWJsaXNoZWQuXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICBdXHJcbn07XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcQ3liYWVtdGVjaFxcXFxDeWJhZW10ZWNoXFxcXEN5YmFlbXRlY2hcXFxcSU4gSE9VU0VcXFxcQ3liYWVtdGVjaCAyM3NlcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcQ3liYWVtdGVjaFxcXFxDeWJhZW10ZWNoXFxcXEN5YmFlbXRlY2hcXFxcSU4gSE9VU0VcXFxcQ3liYWVtdGVjaCAyM3NlcFxcXFxzZW8tY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9DeWJhZW10ZWNoL0N5YmFlbXRlY2gvQ3liYWVtdGVjaC9JTiUyMEhPVVNFL0N5YmFlbXRlY2glMjAyM3NlcC9zZW8tY29uZmlnLnRzXCI7Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTRU8gQ29uZmlnIFx1MjAxNCB1c2VkIGV4Y2x1c2l2ZWx5IGJ5IHZpdGUuY29uZmlnLnRzIGZvciBkZXYtdGltZSBIVE1MIGluamVjdGlvbi5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgaG9tZVNlb0RhdGEgPSB7XG4gIHRpdGxlOiBcIklUIFNlcnZpY2VzICYgU29mdHdhcmUgRGV2ZWxvcG1lbnQgQ29tcGFueSB8IEN5YmFlbSBUZWNoXCIsXG4gIGRlc2NyaXB0aW9uOiBcIldlIGRlbGl2ZXIgZW50ZXJwcmlzZSBzb2Z0d2FyZSwgbWFuYWdlZCBJVCwgY2xvdWQgc2VjdXJpdHksIHdlYiBkZXZlbG9wbWVudCwgSVQgc3RhZmZpbmcsIGFuZCBkaWdpdGFsIGdyb3d0aCBzb2x1dGlvbnMgZm9yIGJ1c2luZXNzZXMuXCIsXG4gIGNhbm9uaWNhbDogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9cIixcbiAga2V5d29yZHM6IFwiQ3liYWVtIFRlY2gsIElUIGNvbXBhbnkgUHVuZSwgY3liZXJzZWN1cml0eSBjb21wYW55IFB1bmUsIG1hbmFnZWQgSVQgc2VydmljZXMgUHVuZSwgY2xvdWQgY29uc3VsdGluZyBQdW5lLCBNaWNyb3NvZnQgMzY1IHNlcnZpY2VzLCBBenVyZSBtaWdyYXRpb24sIGRpZ2l0YWwgbWFya2V0aW5nIGFnZW5jeSBQdW5lLCBTRU8gc2VydmljZXMgUHVuZSwgVkFQVCBzZXJ2aWNlcyBQdW5lLCBTT0Mgc2VydmljZXMgSW5kaWEsIGNvbXB1dGVyIEFNQyBQdW5lLCBuZXR3b3JrIHNlY3VyaXR5IHNlcnZpY2VzLCBmaXJld2FsbCBtYW5hZ2VtZW50LCBJVCBpbmZyYXN0cnVjdHVyZSBtYW5hZ2VtZW50LCBzb2Z0d2FyZSBkZXZlbG9wbWVudCBjb21wYW55IFB1bmUsIHdlYiBkZXZlbG9wbWVudCBQdW5lLCBBSSBhdXRvbWF0aW9uIHNlcnZpY2VzLCBjaGF0Ym90IGRldmVsb3BtZW50LCBJVCBvdXRzb3VyY2luZyBjb21wYW55LCBJVCBjb25zdWx0aW5nIHNlcnZpY2VzLCBjbG91ZCBzZWN1cml0eSBzZXJ2aWNlcywgZW5kcG9pbnQgc2VjdXJpdHksIGRpc2FzdGVyIHJlY292ZXJ5IHNvbHV0aW9ucywgYmFja3VwIHNvbHV0aW9ucywgSVQgaGVscGRlc2sgc3VwcG9ydCwgTk9DIG1vbml0b3Jpbmcgc2VydmljZXMsIElUIHN0YWZmaW5nIHNlcnZpY2VzLCBkaWdpdGFsIHRyYW5zZm9ybWF0aW9uIGNvbXBhbnksIHRlY2hub2xvZ3kgc29sdXRpb25zIHByb3ZpZGVyIEluZGlhXCIsXG4gIG9nVGl0bGU6IFwiQ3liYWVtIFRlY2ggfCBJVCBTZXJ2aWNlcywgQ3liZXJzZWN1cml0eSAmIENsb3VkIFNvbHV0aW9uc1wiLFxuICBvZ0Rlc2NyaXB0aW9uOiBcIlRydXN0ZWQgSVQgcGFydG5lciBmb3IgY3liZXJzZWN1cml0eSwgY2xvdWQsIGRpZ2l0YWwgbWFya2V0aW5nLCBtYW5hZ2VkIElUIHNlcnZpY2VzLCBNaWNyb3NvZnQgMzY1LCBzb2Z0d2FyZSBkZXZlbG9wbWVudCBhbmQgYnVzaW5lc3MgdGVjaG5vbG9neSBzb2x1dGlvbnMuXCIsXG4gIHR3aXR0ZXJUaXRsZTogXCJDeWJhZW0gVGVjaCB8IElUIFNlcnZpY2VzLCBDeWJlcnNlY3VyaXR5ICYgQ2xvdWQgU29sdXRpb25zXCIsXG4gIHR3aXR0ZXJEZXNjcmlwdGlvbjogXCJDeWJlcnNlY3VyaXR5LCBjbG91ZCBzb2x1dGlvbnMsIG1hbmFnZWQgSVQgc2VydmljZXMsIE1pY3Jvc29mdCAzNjUsIGRpZ2l0YWwgbWFya2V0aW5nIGFuZCBzb2Z0d2FyZSBkZXZlbG9wbWVudC5cIixcbiAganNvbkxkOiBbXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiV2ViU2l0ZVwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI3dlYnNpdGVcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tXCIsXG4gICAgXCJuYW1lXCI6IFwiQ3liYWVtIFRlY2hcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3liYWVtIFRlY2ggaXMgYW4gSVNPLWNlcnRpZmllZCB0b3AgZ2xvYmFsIHRlY2hub2xvZ3kgYW5kIElUIHNlcnZpY2VzIGNvbXBhbnkgZGVsaXZlcmluZyBNYW5hZ2VkIElUIFNlcnZpY2VzLCBJVCBJbmZyYXN0cnVjdHVyZSBTZXJ2aWNlcywgSVQgQ29uc3VsdGluZywgTmV0d29yayBhbmQgU2VydmVyIE1hbmFnZW1lbnQsIENsb3VkIENvbXB1dGluZyBTb2x1dGlvbnMsIE1pY3Jvc29mdCBBenVyZSwgQVdTIENsb3VkLCBIeWJyaWQgQ2xvdWQsIENsb3VkIE1pZ3JhdGlvbiwgTWljcm9zb2Z0IDM2NSwgRGV2T3BzLCBDeWJlcnNlY3VyaXR5IFNlcnZpY2VzLCBWQVBULCBTT0MgTW9uaXRvcmluZywgRW5kcG9pbnQgU2VjdXJpdHksIEVudGVycHJpc2UgU29mdHdhcmUgRGV2ZWxvcG1lbnQsIEN1c3RvbSBTb2Z0d2FyZSBTb2x1dGlvbnMsIEVSUCBEZXZlbG9wbWVudCwgV2ViIEFwcGxpY2F0aW9uIERldmVsb3BtZW50LCBJVCBTdGFmZiBBdWdtZW50YXRpb24sIElUIFN1cHBvcnQgU2VydmljZXMsIERpZ2l0YWwgTWFya2V0aW5nLCBTRU8sIFBQQywgQXV0b21hdGlvbiwgYW5kIERpZ2l0YWwgR3Jvd3RoIFNvbHV0aW9ucy5cIixcbiAgICBcInB1Ymxpc2hlclwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyNvcmdhbml6YXRpb25cIlxuICAgIH0sXG4gICAgXCJpbkxhbmd1YWdlXCI6IFwiZW4tVVNcIlxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBbXG4gICAgICBcIk9yZ2FuaXphdGlvblwiLFxuICAgICAgXCJDb3Jwb3JhdGlvblwiLFxuICAgICAgXCJQcm9mZXNzaW9uYWxTZXJ2aWNlXCJcbiAgICBdLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiLFxuICAgIFwibmFtZVwiOiBcIkN5YmFlbSBUZWNoIFB2dC4gTHRkLlwiLFxuICAgIFwiYWx0ZXJuYXRlTmFtZVwiOiBcIkN5YmFlbSBUZWNoXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbVwiLFxuICAgIFwibG9nb1wiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2Fzc2V0cy9jeWJhZW0tbG9nby1EWDgwWmNyWS5wbmdcIixcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vYXNzZXRzL2N5YmFlbS1sb2dvLURYODBaY3JZLnBuZ1wiLFxuICAgIFwiZW1haWxcIjogXCJzYWxlc0BjeWJhZW10ZWNoLmNvbVwiLFxuICAgIFwidGVsZXBob25lXCI6IFwiKzkxLTkwMjg1NDEzODNcIixcbiAgICBcImFkZHJlc3NcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIlBvc3RhbEFkZHJlc3NcIixcbiAgICAgIFwic3RyZWV0QWRkcmVzc1wiOiBcIk9mZmljZSAzMDQsIFN1cmF0d2FsYSBNYXJrIFBsYXp6bywgSGluamV3YWRpXCIsXG4gICAgICBcImFkZHJlc3NMb2NhbGl0eVwiOiBcIlB1bmVcIixcbiAgICAgIFwiYWRkcmVzc1JlZ2lvblwiOiBcIk1haGFyYXNodHJhXCIsXG4gICAgICBcInBvc3RhbENvZGVcIjogXCI0MTEwNTdcIixcbiAgICAgIFwiYWRkcmVzc0NvdW50cnlcIjogXCJJTlwiXG4gICAgfSxcbiAgICBcImdlb1wiOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiR2VvQ29vcmRpbmF0ZXNcIixcbiAgICAgIFwibGF0aXR1ZGVcIjogMTguNTkwNDA1MSxcbiAgICAgIFwibG9uZ2l0dWRlXCI6IDczLjc0ODE4ODFcbiAgICB9LFxuICAgIFwiY29udGFjdFBvaW50XCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkNvbnRhY3RQb2ludFwiLFxuICAgICAgICBcInRlbGVwaG9uZVwiOiBcIis5MS05MDI4NTQxMzgzXCIsXG4gICAgICAgIFwiY29udGFjdFR5cGVcIjogXCJzYWxlc1wiLFxuICAgICAgICBcImVtYWlsXCI6IFwic2FsZXNAY3liYWVtdGVjaC5jb21cIixcbiAgICAgICAgXCJhdmFpbGFibGVMYW5ndWFnZVwiOiBbXG4gICAgICAgICAgXCJFbmdsaXNoXCIsXG4gICAgICAgICAgXCJIaW5kaVwiLFxuICAgICAgICAgIFwiTWFyYXRoaVwiXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuICAgIFwiZm91bmRlclwiOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xlYWRlcnNoaXAvcm9oYW4tYmhvc2FsZSNwZXJzb25cIixcbiAgICAgIFwibmFtZVwiOiBcIlJvaGFuIEJob3NhbGVcIixcbiAgICAgIFwiam9iVGl0bGVcIjogXCJGb3VuZGVyICYgQ2hpZWYgRXhlY3V0aXZlIE9mZmljZXJcIixcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vbGVhZGVyc2hpcC9yb2hhbi1iaG9zYWxlXCIsXG4gICAgICBcInNhbWVBc1wiOiBbXG4gICAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3JvaGFuYmhvc2FsZTE1L1wiXG4gICAgICBdXG4gICAgfSxcbiAgICBcInNhbWVBc1wiOiBbXG4gICAgICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2N5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly9tYXBzLmFwcGxlL3AvWC5nTDNxUVByfjcwemlcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9jeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0BjeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9jeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8veC5jb20vY3liYWVtdGVjaFwiLFxuICAgICAgXCJodHRwczovL3d3dy50dW1ibHIuY29tL2Jsb2cvY3liYWVtdGVjaFwiLFxuICAgICAgXCJodHRwczovL2luLnBpbnRlcmVzdC5jb20vY3liYWVtdGVjaC9cIixcbiAgICAgIFwiaHR0cHM6Ly9kcmliYmJsZS5jb20vY3liYWVtLXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly9teXNwYWNlLmNvbS9jeWJhZW1fdGVjaFwiLFxuICAgICAgXCJodHRwczovL3d3dy5iZWhhbmNlLm5ldC9jeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LnJlZGRpdC5jb20vdXNlci9DaXZpbF9CcmlkZ2VfOTE5NS9cIixcbiAgICAgIFwiaHR0cHM6Ly93d3cucXVvcmEuY29tL3Byb2ZpbGUvQ3liYWVtLVRlY2gtMlwiLFxuICAgICAgXCJodHRwczovL3d3dy50aHJlYWRzLmNvbS9AY3liYWVtdGVjaFwiLFxuICAgICAgXCJodHRwczovL3d3dy5hbWJpdGlvbmJveC5jb20vcmV2aWV3cy9jeWJhZW0tdGVjaC1yZXZpZXdzL1wiLFxuICAgICAgXCJodHRwczovL2Fib3V0Lm1lL2N5YmFlbVwiLFxuICAgICAgXCJodHRwczovL3NoYXJlLmdvb2dsZS93ODg4THA2R1lIek9SeUtEOVwiLFxuICAgICAgXCJodHRwczovL3RyYWN4bi5jb20vZC9sZWdhbC1lbnRpdGllcy9pbmRpYS9jeWJhZW0tdGVjaC1wcml2YXRlLWxpbWl0ZWQvX19sNkU2UmhPR2wxSDdjZ1hFNXRZMTAwOXNUbVg4dS16Sk4tcy1LTjRycmdVXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LmluZGlhbWFydC5jb20vY3liYWVtLXRlY2gvcHJvZmlsZS5odG1sXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LnRoZWNvbXBhbnljaGVjay5jb20vb3JnL2N5YmFlbS10ZWNoL2M1OWNhZDY2MjNcIixcbiAgICAgIFwiaHR0cHM6Ly90aGVvcmcuY29tL29yZy9jeWJhZW0tdGVjaFwiLFxuICAgICAgXCJodHRwczovL3d3dy5vcGVucHIuY29tL25ld3MvNDI4NjM3NC90b3AtMTAtZGlnaXRhbC1tYXJrZXRpbmctYWdlbmNpZXMtaW4tcHVuZS1jeWJhZW0tdGVjaFwiLFxuICAgICAgXCJodHRwczovL3d3dy5uZXVzb3VyY2VzdGFydHVwLmNvbS9jb21wYW5pZXMvY3liYWVtLXRlY2gtcHJpdmF0ZS1saW1pdGVkXCIsXG4gICAgICBcImh0dHBzOi8vd3d3Lmtyb3dkYmFzZS5jb20vc2VydmljZS9jeWJhZW0tdGVjaFwiLFxuICAgICAgXCJodHRwczovL3d3dy5mYWxjb25lYml6LmNvbS9jb21wYW55L0NZQkFFTS1URUNILVBSSVZBVEUtTElNSVRFRC1VNjIwOTlQTjIwMjVQVEMyMzc0MDRcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuem9vbWluZm8uY29tL2MvY3liYWVtLXRlY2gvNTYxMDEyMjQ5XCIsXG4gICAgICBcImh0dHBzOi8vd3d3LnphdWJhY29ycC5jb20vQ1lCQUVNLVRFQ0gtUFJJVkFURS1MSU1JVEVELVU2MjA5OVBOMjAyNVBUQzIzNzQwNFwiLFxuICAgICAgXCJodHRwczovL3d3dy5iaW5nLmNvbS9tYXBzL3NlYXJjaD9GT1JNPUhEUlNDNiZxPWN5YmFlbSt0ZWNoJmNwPTE4LjU5MDM4OSU3RTczLjc0ODE5OSZsdmw9MTYmc3R5bGU9clwiLFxuICAgICAgXCJodHRwczovL2dyYXZhdGFyLmNvbS9jeWJhZW10ZWNoXCJcbiAgICBdLFxuICAgIFwia25vd3NBYm91dFwiOiBbXG4gICAgICBcIk1hbmFnZWQgSVQgU2VydmljZXNcIixcbiAgICAgIFwiSVQgSW5mcmFzdHJ1Y3R1cmUgTWFuYWdlbWVudFwiLFxuICAgICAgXCJFbnRlcnByaXNlIFNvZnR3YXJlIERldmVsb3BtZW50XCIsXG4gICAgICBcIklUIFN0YWZmIEF1Z21lbnRhdGlvblwiLFxuICAgICAgXCJXZWIgU3lzdGVtcyAmIEN1c3RvbSBXZWIgRGV2ZWxvcG1lbnRcIixcbiAgICAgIFwiRGlnaXRhbCBSZXZlbnVlIEdyb3d0aCAmIFBlcmZvcm1hbmNlIE1hcmtldGluZ1wiLFxuICAgICAgXCJDeWJlcnNlY3VyaXR5ICYgVkFQVFwiLFxuICAgICAgXCJDbG91ZCBDb21wdXRpbmcgU29sdXRpb25zIChBV1MgJiBBenVyZSlcIlxuICAgIF0sXG4gICAgXCJoYXNPZmZlckNhdGFsb2dcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyQ2F0YWxvZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiSVQsIFNvZnR3YXJlICYgRGlnaXRhbCBNYXJrZXRpbmcgU2VydmljZXNcIixcbiAgICAgIFwiaXRlbUxpc3RFbGVtZW50XCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgICAgIFwiaXRlbU9mZmVyZWRcIjoge1xuICAgICAgICAgICAgXCJAdHlwZVwiOiBcIlNlcnZpY2VcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIklUIEluZnJhc3RydWN0dXJlIFNlcnZpY2VzXCIsXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1pbmZyYXN0cnVjdHVyZS1zZXJ2aWNlc1wiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkVudGVycHJpc2UtZ3JhZGUgSVQgaW5mcmFzdHJ1Y3R1cmUgbWFuYWdlbWVudCwgc2VydmVyIGFkbWluaXN0cmF0aW9uLCBuZXR3b3JrIGVuZ2luZWVyaW5nLCBhbmQgY2xvdWQgZW52aXJvbm1lbnQgb3B0aW1pemF0aW9uIGRlc2lnbmVkIHRvIG1heGltaXplIHVwdGltZSwgZW5oYW5jZSBzeXN0ZW0gZWZmaWNpZW5jeSwgYW5kIGJ1aWxkIHNlY3VyZSB0ZWNobmljYWwgZm91bmRhdGlvbnMuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJNYW5hZ2VkIElUIGFuZCBTZWN1cml0eVwiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvbWFuYWdlZC1pdC1jbG91ZC1zZWN1cml0eVwiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2FjdGl2ZSAyNC83IE1hbmFnZWQgSVQgc3VwcG9ydCwgY29udGludW91cyBuZXR3b3JrIG1vbml0b3JpbmcsIGVuZHBvaW50IHNlY3VyaXR5LCBWQVBULCBhbmQgdGhyZWF0IG1pdGlnYXRpb24gc2VydmljZXMgZW5naW5lZXJlZCB0byBlbGltaW5hdGUgZG93bnRpbWUgYW5kIHNhZmVndWFyZCBlbnRlcnByaXNlIGRhdGEuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJJVCBTdGFmZiBBdWdtZW50YXRpb25cIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2l0LXN0YWZmLWF1Z21lbnRhdGlvblwiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkZsZXhpYmxlIElUIHN0YWZmIGF1Z21lbnRhdGlvbiBhbmQgZGV2ZWxvcGVyIHN0YWZmaW5nIHNvbHV0aW9ucyBlbmFibGluZyBidXNpbmVzc2VzIHRvIHF1aWNrbHkgc2NhbGUgdGVjaG5pY2FsIHRlYW1zIHdpdGggdmV0dGVkIHNvZnR3YXJlIGVuZ2luZWVycywgQ2xvdWQgc3BlY2lhbGlzdHMsIGFuZCBJVCBleHBlcnRzLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgICAgXCJpdGVtT2ZmZXJlZFwiOiB7XG4gICAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRW50ZXJwcmlzZSBTb2Z0d2FyZSBTb2x1dGlvbnNcIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2VudGVycHJpc2Utc29mdHdhcmVcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDdXN0b20gZW50ZXJwcmlzZSBzb2Z0d2FyZSBkZXZlbG9wbWVudCwgYmVzcG9rZSBFUlAgc3lzdGVtcywgYW5kIGNsb3VkLW5hdGl2ZSBhcHBsaWNhdGlvbiBzb2x1dGlvbnMgYnVpbHQgdG8gYXV0b21hdGUgd29ya2Zsb3dzLCBpbnRlZ3JhdGUgbGVnYWN5IHN5c3RlbXMsIGFuZCBhY2NlbGVyYXRlIGVudGVycHJpc2UgZGlnaXRhbCB0cmFuc2Zvcm1hdGlvbi5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgICAgIFwiaXRlbU9mZmVyZWRcIjoge1xuICAgICAgICAgICAgXCJAdHlwZVwiOiBcIlNlcnZpY2VcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIldlYiBTeXN0ZW1zIERldmVsb3BtZW50XCIsXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy93ZWItc3lzdGVtc1wiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkhpZ2gtcGVyZm9ybWFuY2UsIHNlY3VyZSwgYW5kIFNFTy1vcHRpbWl6ZWQgd2ViIHN5c3RlbXMgYW5kIGN1c3RvbSB3ZWIgYXBwbGljYXRpb24gZGV2ZWxvcG1lbnQgZGVzaWduZWQgZm9yIGNyb3NzLXBsYXRmb3JtIHJlc3BvbnNpdmVuZXNzLCByYXBpZCBwYWdlIGxvYWQgc3BlZWQsIGFuZCBoaWdoIGxlYWQgY29udmVyc2lvbiByYXRlcy5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgICAgIFwiaXRlbU9mZmVyZWRcIjoge1xuICAgICAgICAgICAgXCJAdHlwZVwiOiBcIlNlcnZpY2VcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRpZ2l0YWwgUmV2ZW51ZSBHcm93dGhcIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2RpZ2l0YWwtcmV2ZW51ZS1ncm93dGhcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEYXRhLWRyaXZlbiBkaWdpdGFsIG1hcmtldGluZywgYWR2YW5jZWQgU0VPLCBwZXJmb3JtYW5jZSBQUEMgY2FtcGFpZ25zLCBCMkIgbGVhZCBnZW5lcmF0aW9uLCBhbmQgY29udmVyc2lvbiByYXRlIG9wdGltaXphdGlvbiAoQ1JPKSBzdHJ1Y3R1cmVkIHRvIHNjYWxlIGRpZ2l0YWwgdmlzaWJpbGl0eSBhbmQgc2FsZXMgcmV2ZW51ZS5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXVxufTtcblxuZXhwb3J0IGNvbnN0IGFib3V0U2VvRGF0YSA9IHtcbiAgdGl0bGU6IFwiQWJvdXQgQ3liYWVtIFRlY2ggfCBHbG9iYWwgSVQgU29sdXRpb25zIENvbXBhbnlcIixcbiAgZGVzY3JpcHRpb246IFwiV2UgYXJlIGFuIElTTy1jZXJ0aWZpZWQgSVQgY29tcGFueSBkZWxpdmVyaW5nIGVudGVycHJpc2Ugc29mdHdhcmUsIGNsb3VkIHNlY3VyaXR5LCBtYW5hZ2VkIElULCBhbmQgZGlnaXRhbCBncm93dGggc29sdXRpb25zLlwiLFxuICBjYW5vbmljYWw6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vYWJvdXRcIixcbiAga2V5d29yZHM6IFwiQWJvdXQgQ3liYWVtIFRlY2gsIEN5YmFlbSBUZWNoIGNvbXBhbnkgcHJvZmlsZSwgSVQgY29tcGFueSBQdW5lLCB0ZWNobm9sb2d5IHNvbHV0aW9ucyBjb21wYW55LCBtYW5hZ2VkIElUIHNlcnZpY2VzIGNvbXBhbnksIGN5YmVyc2VjdXJpdHkgY29tcGFueSBQdW5lLCBjbG91ZCBjb25zdWx0aW5nIGNvbXBhbnksIE1pY3Jvc29mdCAzNjUgcGFydG5lciwgQXp1cmUgY2xvdWQgZXhwZXJ0cywgZGlnaXRhbCB0cmFuc2Zvcm1hdGlvbiBjb21wYW55LCBJVCBpbmZyYXN0cnVjdHVyZSBjb21wYW55LCBzb2Z0d2FyZSBkZXZlbG9wbWVudCBjb21wYW55LCB3ZWIgZGV2ZWxvcG1lbnQgY29tcGFueSwgQUkgYXV0b21hdGlvbiBjb21wYW55LCBkaWdpdGFsIG1hcmtldGluZyBhZ2VuY3kgUHVuZSwgSVQgY29uc3VsdGluZyBjb21wYW55LCBuZXR3b3JrIHNlY3VyaXR5IHByb3ZpZGVyLCBjbG91ZCBtaWdyYXRpb24gZXhwZXJ0cywgSVQgc3VwcG9ydCBjb21wYW55LCBidXNpbmVzcyB0ZWNobm9sb2d5IHBhcnRuZXIsIGVudGVycHJpc2UgSVQgc29sdXRpb25zLCBJVCBvdXRzb3VyY2luZyBzZXJ2aWNlcywgY3liZXJzZWN1cml0eSBjb25zdWx0YW50cywgdGVjaG5vbG9neSBjb25zdWx0aW5nIGNvbXBhbnksIElUIGlubm92YXRpb24gY29tcGFueSBJbmRpYVwiLFxuICBvZ1RpdGxlOiBcIkFib3V0IEN5YmFlbSBUZWNoIHwgSVQsIEN5YmVyc2VjdXJpdHkgJiBDbG91ZCBTb2x1dGlvbnMgRXhwZXJ0c1wiLFxuICBvZ0Rlc2NyaXB0aW9uOiBcIkRpc2NvdmVyIEN5YmFlbSBUZWNoXCIsXG4gIHR3aXR0ZXJUaXRsZTogXCJBYm91dCBDeWJhZW0gVGVjaCB8IFRlY2hub2xvZ3ksIEN5YmVyc2VjdXJpdHkgJiBDbG91ZCBFeHBlcnRzXCIsXG4gIHR3aXR0ZXJEZXNjcmlwdGlvbjogXCJMZWFybiBhYm91dCBDeWJhZW0gVGVjaCwgYSB0cnVzdGVkIHRlY2hub2xvZ3kgcGFydG5lciBkZWxpdmVyaW5nIGN5YmVyc2VjdXJpdHksIGNsb3VkLCBtYW5hZ2VkIElUIHNlcnZpY2VzIGFuZCBkaWdpdGFsIHRyYW5zZm9ybWF0aW9uIHNvbHV0aW9ucy5cIixcbiAganNvbkxkOiBbXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiQWJvdXRQYWdlXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9hYm91dCN3ZWJwYWdlXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9hYm91dFwiLFxuICAgIFwibmFtZVwiOiBcIkFib3V0IFVzIHwgQ3liYWVtIFRlY2hcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3liYWVtIFRlY2ggaXMgYSBsZWFkaW5nIGVudGVycHJpc2UgSVQgdHJhbnNmb3JtYXRpb24gcGFydG5lciBhbmQgdG9wLXRpZXIgdGVjaG5vbG9neSBjb25zdWx0aW5nIGZpcm0gZGVkaWNhdGVkIHRvIGRlbGl2ZXJpbmcgYmVzdC1pbi1jbGFzcyBzb2Z0d2FyZSBlbmdpbmVlcmluZywgY2xvdWQgYXJjaGl0ZWN0dXJlLCBhbmQgZGlnaXRhbCBpbmZyYXN0cnVjdHVyZSBzb2x1dGlvbnMuXCIsXG4gICAgXCJtYWluRW50aXR5XCI6IHtcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIkJyZWFkY3J1bWJMaXN0XCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9hYm91dCNicmVhZGNydW1iXCIsXG4gICAgXCJpdGVtTGlzdEVsZW1lbnRcIjogW1xuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiAxLFxuICAgICAgICBcIm5hbWVcIjogXCJIb21lXCIsXG4gICAgICAgIFwiaXRlbVwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDIsXG4gICAgICAgIFwibmFtZVwiOiBcIkFib3V0IFVzXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcIkB0eXBlXCI6IFtcbiAgICAgIFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICBcIkNvcnBvcmF0aW9uXCIsXG4gICAgICBcIlByb2Zlc3Npb25hbFNlcnZpY2VcIlxuICAgIF0sXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS8jb3JnYW5pemF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwiQ3liYWVtIFRlY2ggUHZ0LiBMdGQuXCIsXG4gICAgXCJhbHRlcm5hdGVOYW1lXCI6IFwiQ3liYWVtIFRlY2hcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tXCIsXG4gICAgXCJsb2dvXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vYXNzZXRzL2N5YmFlbS1sb2dvLURYODBaY3JZLnBuZ1wiLFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9hc3NldHMvY3liYWVtLWxvZ28tRFg4MFpjclkucG5nXCIsXG4gICAgXCJlbWFpbFwiOiBcInNhbGVzQGN5YmFlbXRlY2guY29tXCIsXG4gICAgXCJ0ZWxlcGhvbmVcIjogXCIrOTEtOTAyODU0MTM4M1wiLFxuICAgIFwic2xvZ2FuXCI6IFwiUHJlbWl1bSBJVCBTZXJ2aWNlLCB6ZXJvIGNvbXByb21pc2VcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3liYWVtIFRlY2ggaXMgYSBsZWFkaW5nIGVudGVycHJpc2UgSVQgdHJhbnNmb3JtYXRpb24gcGFydG5lciBhbmQgdG9wLXRpZXIgdGVjaG5vbG9neSBjb25zdWx0aW5nIGZpcm0gZGVkaWNhdGVkIHRvIGRlbGl2ZXJpbmcgYmVzdC1pbi1jbGFzcyBzb2Z0d2FyZSBlbmdpbmVlcmluZywgY2xvdWQgYXJjaGl0ZWN0dXJlLCBhbmQgZGlnaXRhbCBpbmZyYXN0cnVjdHVyZSBzb2x1dGlvbnMuIEZvdW5kZWQgb24gYSBjb21taXRtZW50IHRvIHRlY2huaWNhbCBleGNlbGxlbmNlIGFuZCBjb250aW51b3VzIGlubm92YXRpb24sIHdlIGJyaW5nIHRvZ2V0aGVyIGV4cGVydCBzb2Z0d2FyZSBlbmdpbmVlcnMsIElUIHN0cmF0ZWdpc3RzLCBhbmQgY3liZXJzZWN1cml0eSBwcm9mZXNzaW9uYWxzIHRvIGhlbHAgbW9kZXJuIG9yZ2FuaXphdGlvbnMgb3B0aW1pemUgb3BlcmF0aW9ucywgc2NhbGUgc2VjdXJlbHksIGFuZCBhY2NlbGVyYXRlIGdyb3d0aC4gT3VyIG1pc3Npb24gaXMgdG8gZW5naW5lZXIgYWdpbGUsIGhpZ2gtcGVyZm9ybWFuY2UgSVQgZWNvc3lzdGVtcyB0YWlsb3JlZCB0byBjb21wbGV4IGJ1c2luZXNzIGRlbWFuZHMsIHdoaWxlIG91ciB2aXNpb24gZm9jdXNlcyBvbiBkcml2aW5nIHN1c3RhaW5hYmxlIGRpZ2l0YWwgcHJvZ3Jlc3MgdGhyb3VnaCBjdXR0aW5nLWVkZ2UgdGVjaG5vbG9neSBpbnRlZ3JhdGlvbi4gR3VpZGVkIGJ5IGNvcmUgdmFsdWVzIG9mIGludGVncml0eSwgdGVjaG5vbG9naWNhbCBtYXN0ZXJ5LCBjbGllbnQtY2VudHJpYyBjb2xsYWJvcmF0aW9uLCBhbmQgcmVsaWFiaWxpdHksIEN5YmFlbSBUZWNoIGhhcyBoaXQgbWFqb3IgY29tcGFueSBtaWxlc3RvbmVzLCBleHBhbmRpbmcgZnJvbSBhIGRlZGljYXRlZCBlbmdpbmVlcmluZyBjb25zdWx0YW5jeSBpbnRvIGFuIGluZHVzdHJ5LWxlYWRpbmcgcHJvdmlkZXIgb2YgZW5kLXRvLWVuZCBJVCBzZXJ2aWNlcy5cIixcbiAgICBcImtub3dzQWJvdXRcIjogW1xuICAgICAgXCJFbnRlcnByaXNlIElUIFRyYW5zZm9ybWF0aW9uXCIsXG4gICAgICBcIlNvZnR3YXJlIEVuZ2luZWVyaW5nXCIsXG4gICAgICBcIkNsb3VkIEFyY2hpdGVjdHVyZSAmIE1pZ3JhdGlvblwiLFxuICAgICAgXCJEZXZPcHMgSW1wbGVtZW50YXRpb25cIixcbiAgICAgIFwiQ3liZXJzZWN1cml0eSBTZXJ2aWNlcyAmIFZBUFRcIixcbiAgICAgIFwiRGF0YSBBbmFseXRpY3NcIixcbiAgICAgIFwiQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UgU29sdXRpb25zXCIsXG4gICAgICBcIk1hbmFnZWQgSVQgU2VydmljZXNcIixcbiAgICAgIFwiRGlnaXRhbCBJbmZyYXN0cnVjdHVyZSBTb2x1dGlvbnNcIixcbiAgICAgIFwiSVNPIFN0YW5kYXJkIENvbXBsaWFuY2VcIlxuICAgIF0sXG4gICAgXCJwdWJsaXNoaW5nUHJpbmNpcGxlc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJEaWdpdGFsRG9jdW1lbnRcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiTWlzc2lvblwiLFxuICAgICAgICBcInRleHRcIjogXCJXZSBkZWxpdmVyIHByb2plY3QtZm9jdXNlZCBJVCBzb2x1dGlvbnMgdGhhdCBkcml2ZSByZWFsIHJlc3VsdCAtIHB0aW1pemVkIHN5c3RlbXMsIHN0cm9uZ2VyIHNlY3VyaXR5LCBhbmQgc2VhbWxlc3MgZGlnaXRhbCBleHBlcmllbmNlcyB0aGF0IGhlbHAgeW91IGFjaGlldmUgYnVzaW5lc3MgZ3Jvd3RoLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiRGlnaXRhbERvY3VtZW50XCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkNvcmUgVmFsdWVzXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIldlIG9wZXJhdGUgd2l0aCBzdHJpY3QgSVNPIHN0YW5kYXJkcywgemVybyBjb21wcm9taXNlIG9uIGRhdGEgc2VjdXJpdHksIGFuZCBhIGN1bHR1cmUgb2YgZXRoaWNzIGFuZCBjdXR0aW5nIGVkZ2UgdGVjaG5vbG9neSB0aGF0IG1ha2VzIHVzIGEgdHJ1c3RlZCBwYXJ0bmVyIGZvciBsb25nLXRlcm0gc3VjY2Vzcy5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkRpZ2l0YWxEb2N1bWVudFwiLFxuICAgICAgICBcIm5hbWVcIjogXCJPdXIgQXBwcm9hY2hcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiQSBkaXNjaXBsaW5lZCB3b3JrIHByb2Nlc3MsIHRvdGFsIHByb2plY3QgdmlzaWJpbGl0eSwgYW5kIGNvbnRpbnVvdXMgaW1wcm92ZW1lbnQgZW5zdXJlIHdlIGRlbGl2ZXIgd2l0aCBwcmVjaXNpbyAtIHJvbSBzdHJhdGVneSB0byBzdWNjZXNzZnVsIGRlcGxveW1lbnQuXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwic2FtZUFzXCI6IFtcbiAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvY3liYWVtdGVjaFwiLFxuICAgICAgXCJodHRwczovL21hcHMuYXBwbGUvcC9YLmdMM3FRUHJ+NzB6aVwiLFxuICAgICAgXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2N5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vQGN5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2N5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly94LmNvbS9jeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LnR1bWJsci5jb20vYmxvZy9jeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vaW4ucGludGVyZXN0LmNvbS9jeWJhZW10ZWNoL1wiLFxuICAgICAgXCJodHRwczovL2RyaWJiYmxlLmNvbS9jeWJhZW0tdGVjaFwiLFxuICAgICAgXCJodHRwczovL215c3BhY2UuY29tL2N5YmFlbV90ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LmJlaGFuY2UubmV0L2N5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cucmVkZGl0LmNvbS91c2VyL0NpdmlsX0JyaWRnZV85MTk1L1wiLFxuICAgICAgXCJodHRwczovL3d3dy5xdW9yYS5jb20vcHJvZmlsZS9DeWJhZW0tVGVjaC0yXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LnRocmVhZHMuY29tL0BjeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LmFtYml0aW9uYm94LmNvbS9yZXZpZXdzL2N5YmFlbS10ZWNoLXJldmlld3MvXCIsXG4gICAgICBcImh0dHBzOi8vYWJvdXQubWUvY3liYWVtXCIsXG4gICAgICBcImh0dHBzOi8vc2hhcmUuZ29vZ2xlL3c4ODhMcDZHWUh6T1J5S0Q5XCIsXG4gICAgICBcImh0dHBzOi8vdHJhY3huLmNvbS9kL2xlZ2FsLWVudGl0aWVzL2luZGlhL2N5YmFlbS10ZWNoLXByaXZhdGUtbGltaXRlZC9fX2w2RTZSaE9HbDFIN2NnWEU1dFkxMDA5c1RtWDh1LXpKTi1zLUtONHJyZ1VcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuaW5kaWFtYXJ0LmNvbS9jeWJhZW0tdGVjaC9wcm9maWxlLmh0bWxcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cudGhlY29tcGFueWNoZWNrLmNvbS9vcmcvY3liYWVtLXRlY2gvYzU5Y2FkNjYyM1wiLFxuICAgICAgXCJodHRwczovL3RoZW9yZy5jb20vb3JnL2N5YmFlbS10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3Lm9wZW5wci5jb20vbmV3cy80Mjg2Mzc0L3RvcC0xMC1kaWdpdGFsLW1hcmtldGluZy1hZ2VuY2llcy1pbi1wdW5lLWN5YmFlbS10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3Lm5ldXNvdXJjZXN0YXJ0dXAuY29tL2NvbXBhbmllcy9jeWJhZW0tdGVjaC1wcml2YXRlLWxpbWl0ZWRcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cua3Jvd2RiYXNlLmNvbS9zZXJ2aWNlL2N5YmFlbS10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LmZhbGNvbmViaXouY29tL2NvbXBhbnkvQ1lCQUVNLVRFQ0gtUFJJVkFURS1MSU1JVEVELVU2MjA5OVBOMjAyNVBUQzIzNzQwNFwiLFxuICAgICAgXCJodHRwczovL3d3dy56b29taW5mby5jb20vYy9jeWJhZW0tdGVjaC81NjEwMTIyNDlcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuemF1YmFjb3JwLmNvbS9DWUJBRU0tVEVDSC1QUklWQVRFLUxJTUlURUQtVTYyMDk5UE4yMDI1UFRDMjM3NDA0XCIsXG4gICAgICBcImh0dHBzOi8vd3d3LmJpbmcuY29tL21hcHMvc2VhcmNoP0ZPUk09SERSU0M2JnE9Y3liYWVtK3RlY2gmY3A9MTguNTkwMzg5JTdFNzMuNzQ4MTk5Jmx2bD0xNiZzdHlsZT1yXCIsXG4gICAgICBcImh0dHBzOi8vZ3JhdmF0YXIuY29tL2N5YmFlbXRlY2hcIlxuICAgIF0sXG4gICAgXCJhZ2dyZWdhdGVSYXRpbmdcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIkFnZ3JlZ2F0ZVJhdGluZ1wiLFxuICAgICAgXCJyYXRpbmdWYWx1ZVwiOiBcIjQuOVwiLFxuICAgICAgXCJiZXN0UmF0aW5nXCI6IFwiNVwiLFxuICAgICAgXCJyYXRpbmdDb3VudFwiOiBcIjUwXCJcbiAgICB9XG4gIH1cbl1cbn07XG5cbmV4cG9ydCBjb25zdCBjb250YWN0U2VvRGF0YSA9IHtcbiAgdGl0bGU6IFwiQ29udGFjdCBDeWJhZW0gVGVjaCB8IERpc2N1c3MgWW91ciBJVCBSZXF1aXJlbWVudHNcIixcbiAgZGVzY3JpcHRpb246IFwiTGV0XCIsXG4gIGNhbm9uaWNhbDogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9jb250YWN0XCIsXG4gIGtleXdvcmRzOiBcIkNvbnRhY3QgQ3liYWVtIFRlY2gsIElUIHN1cHBvcnQgUHVuZSwgY3liZXJzZWN1cml0eSBjb25zdWx0YXRpb24gUHVuZSwgbWFuYWdlZCBJVCBzZXJ2aWNlcyBlbnF1aXJ5LCBjbG91ZCBzb2x1dGlvbnMgY29uc3VsdGF0aW9uLCBNaWNyb3NvZnQgMzY1IHN1cHBvcnQsIElUIEFNQyBzZXJ2aWNlcyBQdW5lLCBzb2Z0d2FyZSBkZXZlbG9wbWVudCBlbnF1aXJ5LCBkaWdpdGFsIG1hcmtldGluZyBjb25zdWx0YXRpb24gUHVuZSwgSVQgY29tcGFueSBjb250YWN0IFB1bmUsIHJlbW90ZSBJVCBzdXBwb3J0LCBjbG91ZCBtaWdyYXRpb24gc3VwcG9ydCwgSVQgaGVscGRlc2sgc2VydmljZXMsIElUIGluZnJhc3RydWN0dXJlIHN1cHBvcnQsIHRlY2hub2xvZ3kgY29uc3VsdGluZyBjb21wYW55XCIsXG4gIG9nVGl0bGU6IFwiQ29udGFjdCBDeWJhZW0gVGVjaCB8IFRhbGsgdG8gSVQgRXhwZXJ0cyBUb2RheVwiLFxuICBvZ0Rlc2NyaXB0aW9uOiBcIkdldCBpbiB0b3VjaCB3aXRoIEN5YmFlbSBUZWNoIGZvciBjeWJlcnNlY3VyaXR5LCBjbG91ZCBzb2x1dGlvbnMsIElUIGluZnJhc3RydWN0dXJlLCBtYW5hZ2VkIElUIHNlcnZpY2VzLCBzb2Z0d2FyZSBkZXZlbG9wbWVudCBhbmQgZGlnaXRhbCBtYXJrZXRpbmcuXCIsXG4gIHR3aXR0ZXJUaXRsZTogXCJDb250YWN0IEN5YmFlbSBUZWNoIHwgSVQgU2VydmljZXMgJiBUZWNobm9sb2d5IEV4cGVydHNcIixcbiAgdHdpdHRlckRlc2NyaXB0aW9uOiBcIlJlYWNoIEN5YmFlbSBUZWNoIGZvciBjeWJlcnNlY3VyaXR5LCBjbG91ZCwgbWFuYWdlZCBJVCBzZXJ2aWNlcywgc29mdHdhcmUgZGV2ZWxvcG1lbnQgYW5kIGRpZ2l0YWwgdHJhbnNmb3JtYXRpb24gY29uc3VsdGluZy5cIixcbiAganNvbkxkOiBbXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiQWJvdXRQYWdlXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9saWZlLWF0LWN5YmFlbXRlY2gjd2VicGFnZVwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vbGlmZS1hdC1jeWJhZW10ZWNoXCIsXG4gICAgXCJuYW1lXCI6IFwiTGlmZSBhdCBDeWJhZW0gVGVjaCB8IFdvcmsgQ3VsdHVyZSwgVGVhbSAmIElubm92YXRpb25cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGlzY292ZXIgbGlmZSBhdCBDeWJhZW0gVGVjaC4gTGVhcm4gYWJvdXQgb3VyIHdvcmtwbGFjZSBjdWx0dXJlLCBjb3JlIHZhbHVlcywgbGVhZGVyc2hpcCB0ZWFtLCBjZWxlYnJhdGlvbnMsIGFuZCB0ZWFtIG91dGluZ3MuXCIsXG4gICAgXCJtYWluRW50aXR5XCI6IHtcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIkJyZWFkY3J1bWJMaXN0XCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9saWZlLWF0LWN5YmFlbXRlY2gjYnJlYWRjcnVtYlwiLFxuICAgIFwiaXRlbUxpc3RFbGVtZW50XCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogMSxcbiAgICAgICAgXCJuYW1lXCI6IFwiSG9tZVwiLFxuICAgICAgICBcIml0ZW1cIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiAyLFxuICAgICAgICBcIm5hbWVcIjogXCJMaWZlIEF0IEN5YmFlbVRlY2hcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyNvcmdhbml6YXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJDeWJhZW0gVGVjaFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb21cIixcbiAgICBcImxvZ29cIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9hc3NldHMvY3liYWVtLWxvZ28tRFg4MFpjclkucG5nXCIsXG4gICAgXCJudW1iZXJPZkVtcGxveWVlc1wiOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiUXVhbnRpdGF0aXZlVmFsdWVcIixcbiAgICAgIFwidmFsdWVcIjogMjAwXG4gICAgfSxcbiAgICBcImVtcGxveWVlXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9wZW9wbGUvcm9oYW4tYmhvc2FsZSNwZXJzb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9wZW9wbGUveWFzaC1iaGFsZWthciNwZXJzb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9wZW9wbGUvYWtzaGF5LW5hdmxlI3BlcnNvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3Blb3BsZS9kaWxpcC1kc291emEjcGVyc29uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vcGVvcGxlL3NhbmpheS1ib2JkZSNwZXJzb25cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3Blb3BsZS9yb2hhbi1iaG9zYWxlI3BlcnNvblwiLFxuICAgIFwibmFtZVwiOiBcIlJvaGFuIEJob3NhbGVcIixcbiAgICBcImpvYlRpdGxlXCI6IFwiRm91bmRlciAmIENoaWVmIEV4ZWN1dGl2ZSBPZmZpY2VyXCIsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3Blb3BsZS9yb2hhbi5wbmdcIixcbiAgICBcInNhbWVBc1wiOiBbXG4gICAgICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9yb2hhbmJob3NhbGUxNS9cIlxuICAgIF0sXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlJvaGFuIEJob3NhbGUgZm91bmRlZCBDeWJhZW0gVGVjaCB3aXRoIGEgdmlzaW9uIG9mIGNyZWF0aW5nIGEgdGVjaG5vbG9neSBjb21wYW55IHRoYXQgZGVsaXZlcnMgcHJhY3RpY2FsLCBzY2FsYWJsZSwgYW5kIGJ1c2luZXNzLWZvY3VzZWQgSVQgc29sdXRpb25zLiBIZSBsZWFkcyB0aGUgY29tcGFueSdzIG92ZXJhbGwgc3RyYXRlZ3ksIGJ1c2luZXNzIGdyb3d0aCwgZ2xvYmFsIHBhcnRuZXJzaGlwcywgYW5kIGlubm92YXRpb24gaW5pdGlhdGl2ZXMuXCIsXG4gICAgXCJ3b3Jrc0ZvclwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyNvcmdhbml6YXRpb25cIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3Blb3BsZS95YXNoLWJoYWxla2FyI3BlcnNvblwiLFxuICAgIFwibmFtZVwiOiBcIllhc2ggQmhhbGVrYXJcIixcbiAgICBcImpvYlRpdGxlXCI6IFwiT3BlcmF0aW9ucyAmIEJ1c2luZXNzIFN0cmF0ZWd5IERpcmVjdG9yXCIsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3Blb3BsZS95YXNoLnBuZ1wiLFxuICAgIFwic2FtZUFzXCI6IFtcbiAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3lhc2gtYmhhbGVrYXItaW1vZXhvL1wiXG4gICAgXSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiWWFzaCBCaGFsZWthciBwbGF5cyBhIHBpdm90YWwgcm9sZSBpbiBkcml2aW5nIG9wZXJhdGlvbmFsIGV4Y2VsbGVuY2UgYW5kIHN0cmF0ZWdpYyBidXNpbmVzcyBpbml0aWF0aXZlcyBhY3Jvc3MgQ3liYWVtIFRlY2gsIG9wdGltaXppbmcgYnVzaW5lc3MgcHJvY2Vzc2VzLCBzdHJlbmd0aGVuaW5nIGludGVybmFsIG9wZXJhdGlvbnMsIGFuZCBzdXBwb3J0aW5nIGdsb2JhbCBleHBhbnNpb24uXCIsXG4gICAgXCJ3b3Jrc0ZvclwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyNvcmdhbml6YXRpb25cIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3Blb3BsZS9ha3NoYXktbmF2bGUjcGVyc29uXCIsXG4gICAgXCJuYW1lXCI6IFwiQWtzaGF5IE5hdmxlXCIsXG4gICAgXCJqb2JUaXRsZVwiOiBcIkNoaWVmIFRlY2hub2xvZ3kgJiBQcm9kdWN0IE9mZmljZXJcIixcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vcGVvcGxlL2Frc2hheS5wbmdcIixcbiAgICBcInNhbWVBc1wiOiBbXG4gICAgICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9ha3NoYXktbmF2bGUtMjkyOWEyNDUvXCJcbiAgICBdLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJBa3NoYXkgTmF2bGUgaXMgYSB0ZWNobm9sb2d5IGFuZCBwcm9kdWN0IGV4ZWN1dGl2ZSB3aXRoIDE1IHllYXJzIG9mIGV4cGVyaWVuY2UgbGVhZGluZyBlbnRlcnByaXNlIHRlY2hub2xvZ3ksIEFJLWRyaXZlbiBwcm9kdWN0IGlubm92YXRpb24sIGVudGVycHJpc2UgYXJjaGl0ZWN0dXJlLCBhbmQgbGFyZ2Utc2NhbGUgZGlnaXRhbCB0cmFuc2Zvcm1hdGlvbiBpbml0aWF0aXZlcy5cIixcbiAgICBcIndvcmtzRm9yXCI6IHtcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vcGVvcGxlL2RpbGlwLWRzb3V6YSNwZXJzb25cIixcbiAgICBcIm5hbWVcIjogXCJEaWxpcCBEJ1NvdXphXCIsXG4gICAgXCJqb2JUaXRsZVwiOiBcIkRpcmVjdG9yIC0gR2xvYmFsIEJ1c2luZXNzIFJlbGF0aW9uc1wiLFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9wZW9wbGUvRGlsaXAlMjBEJ1NvdXphLnBuZ1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJEaWxpcCBEJ1NvdXphIGxlYWRzIEN5YmFlbSBUZWNoJ3MgZ2xvYmFsIGJ1c2luZXNzIGRldmVsb3BtZW50IGFuZCBzdHJhdGVnaWMgcGFydG5lcnNoaXAgaW5pdGlhdGl2ZXMsIGZvY3VzaW5nIG9uIGV4cGFuZGluZyB0aGUgY29tcGFueSdzIGludGVybmF0aW9uYWwgcHJlc2VuY2UgYW5kIGJ1aWxkaW5nIGxhc3RpbmcgbWFya2V0IHJlbGF0aW9uc2hpcHMuXCIsXG4gICAgXCJ3b3Jrc0ZvclwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyNvcmdhbml6YXRpb25cIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3Blb3BsZS9zYW5qYXktYm9iZGUjcGVyc29uXCIsXG4gICAgXCJuYW1lXCI6IFwiU2FuamF5IE1haGFkZW8gQm9iZGVcIixcbiAgICBcImpvYlRpdGxlXCI6IFwiU3RyYXRlZ2ljIEFkdmlzb3IgLSBFbnRlcnByaXNlIFRyYW5zZm9ybWF0aW9uLCBEaWdpdGFsIEdvdmVybm1lbnQgJiBQdWJsaWMgU2VjdG9yIElubm92YXRpb25cIixcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vcGVvcGxlL1NhbmpheSUyME1haGFkZW8lMjBCb2JhZGUucG5nXCIsXG4gICAgXCJhbHVtbmlPZlwiOiBbXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJFZHVjYXRpb25hbE9yZ2FuaXphdGlvblwiLFxuICAgICAgICBcIm5hbWVcIjogXCJJSVQgQm9tYmF5XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJFZHVjYXRpb25hbE9yZ2FuaXphdGlvblwiLFxuICAgICAgICBcIm5hbWVcIjogXCJJSU0gQWhtZWRhYmFkXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJTYW5qYXkgQm9iZGUgaXMgYSBkaXN0aW5ndWlzaGVkIGJ1c2luZXNzIHRyYW5zZm9ybWF0aW9uIGV4ZWN1dGl2ZSB3aXRoIG92ZXIgdGhyZWUgZGVjYWRlcyBvZiBleHBlcmllbmNlIGxlYWRpbmcgZW50ZXJwcmlzZSBtb2Rlcm5pemF0aW9uLCBkaWdpdGFsIEdvdmVybm1lbnQsIGFuZCBwdWJsaWMgc2VjdG9yIGlubm92YXRpb24uXCIsXG4gICAgXCJ3b3Jrc0ZvclwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyNvcmdhbml6YXRpb25cIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJWaWRlb09iamVjdFwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vbGlmZS1hdC1jeWJhZW10ZWNoI3ZpZGVvXCIsXG4gICAgXCJuYW1lXCI6IFwiTGlmZSBhdCBDeWJhZW0gVGVjaFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJBbiBpbnNpZGUgbG9vayBhdCB0aGUgd29ya3BsYWNlIGN1bHR1cmUsIHRlYW0gZW52aXJvbm1lbnQsIGFuZCBkYXktdG8tZGF5IGxpZmUgYXQgQ3liYWVtIFRlY2guXCIsXG4gICAgXCJ0aHVtYm5haWxVcmxcIjogW1xuICAgICAgXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9pbWFnZXMvaGVyby12aWRlby10aHVtYm5haWwuanBnXCJcbiAgICBdLFxuICAgIFwidXBsb2FkRGF0ZVwiOiBcIjIwMjQtMDEtMDFUMDg6MDA6MDArMDA6MDBcIixcbiAgICBcImNvbnRlbnRVcmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS92aWRlby92aWRlby5tcDRcIixcbiAgICBcImVtYmVkVXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vbGlmZS1hdC1jeWJhZW10ZWNoXCJcbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJJbWFnZUdhbGxlcnlcIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xpZmUtYXQtY3liYWVtdGVjaCNnYWxsZXJ5XCIsXG4gICAgXCJuYW1lXCI6IFwiTGlmZSBhdCBDeWJhZW0gVGVjaCBQaG90byBHYWxsZXJ5XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlBob3RvcyBzaG93aW5nIGNlbGVicmF0aW9ucywgdGVhbSBsdW5jaGVzLCBmb3VuZGF0aW9uIGRheXMsIGFuZCBvdXRpbmdzIGF0IEN5YmFlbSBUZWNoLlwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vbGlmZS1hdC1jeWJhZW10ZWNoXCIsXG4gICAgXCJoYXNQYXJ0XCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkltYWdlT2JqZWN0XCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlRlYW0gTHVuY2hcIixcbiAgICAgICAgXCJjb250ZW50VXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vbGlmZWF0Y3liYWVtdGVjaC9UZWFtTHVuY2guanBnXCIsXG4gICAgICAgIFwiY2FwdGlvblwiOiBcIlRlYW0gTHVuY2ggYXQgQ3liYWVtIFRlY2hcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkltYWdlT2JqZWN0XCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkNlbGVicmF0aW9uIGF0IFBvaW50XCIsXG4gICAgICAgIFwiY29udGVudFVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xpZmVhdGN5YmFlbXRlY2gvY2VsZWJyYXRpb25hdHBvaW50LmpwZ1wiLFxuICAgICAgICBcImNhcHRpb25cIjogXCJDZWxlYnJhdGlvbiBhdCBQb2ludFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiSW1hZ2VPYmplY3RcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiRm91bmRhdGlvbiBEYXkgMjAyNlwiLFxuICAgICAgICBcImNvbnRlbnRVcmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9saWZlYXRjeWJhZW10ZWNoL0ZvdW5kYXRpb25kYXkyMDI2LmpwZ1wiLFxuICAgICAgICBcImNhcHRpb25cIjogXCJGb3VuZGF0aW9uIERheSAyMDI2IENlbGVicmF0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiLFxuICAgICAgICBcIm5hbWVcIjogXCJGb3VuZGF0aW9uIERheVwiLFxuICAgICAgICBcImNvbnRlbnRVcmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9saWZlYXRjeWJhZW10ZWNoL0ZvdW5kYXRpb25kYXkuSlBHXCIsXG4gICAgICAgIFwiY2FwdGlvblwiOiBcIkZvdW5kYXRpb24gRGF5IENlbGVicmF0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiLFxuICAgICAgICBcIm5hbWVcIjogXCJUZWFtIE91dGluZ1wiLFxuICAgICAgICBcImNvbnRlbnRVcmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9saWZlYXRjeWJhZW10ZWNoL1RlYW1PdXRpbmcuanBnXCIsXG4gICAgICAgIFwiY2FwdGlvblwiOiBcIkN5YmFlbSBUZWNoIFRlYW0gT3V0aW5nXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cbn07XG5cbmV4cG9ydCBjb25zdCBsaWZlQXRDeWJhZW10ZWNoU2VvRGF0YSA9IHtcbiAgdGl0bGU6IFwiTGlmZSBhdCBDeWJhZW0gVGVjaCB8IEN1bHR1cmUsIENhcmVlcnMgJiBHcm93dGhcIixcbiAgZGVzY3JpcHRpb246IFwiV2FsayB0aHJvdWdoIG91ciBjb2xsYWJvcmF0aXZlIHdvcmsgY3VsdHVyZSwgdGVhbSBjZWxlYnJhdGlvbnMsIGVtcGxveWVlIGV4cGVyaWVuY2VzLCBsZWFybmluZyBvcHBvcnR1bml0aWVzLCBhbmQgY2FyZWVyIGdyb3d0aC5cIixcbiAgY2Fub25pY2FsOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xpZmUtYXQtY3liYWVtdGVjaFwiLFxuICBrZXl3b3JkczogXCJsaWZlIGF0IEN5YmFlbSBUZWNoLCBDeWJhZW0gVGVjaCBjdWx0dXJlLCBJVCBjb21wYW55IHdvcmsgY3VsdHVyZSBQdW5lLCB0ZWNoIGNhcmVlcnMgZW52aXJvbm1lbnQsIGVtcGxveWVlIGV4cGVyaWVuY2UgQ3liYWVtIFRlY2gsIHdvcmstbGlmZSBiYWxhbmNlIElUIGNvbXBhbnksIGxlYXJuaW5nIGFuZCBkZXZlbG9wbWVudCBJVCwgdGVhbSBhY3Rpdml0aWVzIGluIElUIGNvbXBhbnksIHRlY2ggam9icyBjdWx0dXJlIFB1bmVcIixcbiAgb2dUaXRsZTogXCJMaWZlIGF0IEN5YmFlbSBUZWNoIHwgQ3VsdHVyZSAmIFRlYW1cIixcbiAgb2dEZXNjcmlwdGlvbjogXCJUYWtlIGEgbG9vayBpbnNpZGUgQ3liYWVtIFRlY2ggLSBvdXIgcGVvcGxlLCBjdWx0dXJlLCBjb2xsYWJvcmF0aW9uIGFuZCBob3cgd2Ugd29yayB0b2dldGhlciBvbiBJVCwgY2xvdWQsIGN5YmVyc2VjdXJpdHkgYW5kIGRpZ2l0YWwgcHJvamVjdHMuXCIsXG4gIHR3aXR0ZXJUaXRsZTogXCJMaWZlIGF0IEN5YmFlbSBUZWNoIHwgQ3VsdHVyZSwgR3Jvd3RoICYgVGVhbVwiLFxuICB0d2l0dGVyRGVzY3JpcHRpb246IFwiRXhwbG9yZSBob3cgdGVhbXMgYXQgQ3liYWVtIFRlY2ggY29sbGFib3JhdGUsIGxlYXJuIGFuZCBncm93IHdoaWxlIGRlbGl2ZXJpbmcgSVQgYW5kIGRpZ2l0YWwgc29sdXRpb25zLlwiLFxuICBqc29uTGQ6IFtcbiAge1xuICAgIFwiQHR5cGVcIjogXCJBYm91dFBhZ2VcIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xpZmUtYXQtY3liYWVtdGVjaCN3ZWJwYWdlXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9saWZlLWF0LWN5YmFlbXRlY2hcIixcbiAgICBcIm5hbWVcIjogXCJMaWZlIGF0IEN5YmFlbSBUZWNoIHwgV29yayBDdWx0dXJlLCBUZWFtICYgSW5ub3ZhdGlvblwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJEaXNjb3ZlciBsaWZlIGF0IEN5YmFlbSBUZWNoLiBMZWFybiBhYm91dCBvdXIgd29ya3BsYWNlIGN1bHR1cmUsIGNvcmUgdmFsdWVzLCBsZWFkZXJzaGlwIHRlYW0sIGNlbGVicmF0aW9ucywgYW5kIHRlYW0gb3V0aW5ncy5cIixcbiAgICBcIm1haW5FbnRpdHlcIjoge1xuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS8jb3JnYW5pemF0aW9uXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiQnJlYWRjcnVtYkxpc3RcIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xpZmUtYXQtY3liYWVtdGVjaCNicmVhZGNydW1iXCIsXG4gICAgXCJpdGVtTGlzdEVsZW1lbnRcIjogW1xuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiAxLFxuICAgICAgICBcIm5hbWVcIjogXCJIb21lXCIsXG4gICAgICAgIFwiaXRlbVwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDIsXG4gICAgICAgIFwibmFtZVwiOiBcIkxpZmUgQXQgQ3liYWVtVGVjaFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiLFxuICAgIFwibmFtZVwiOiBcIkN5YmFlbSBUZWNoXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbVwiLFxuICAgIFwibG9nb1wiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2Fzc2V0cy9jeWJhZW0tbG9nby1EWDgwWmNyWS5wbmdcIixcbiAgICBcIm51bWJlck9mRW1wbG95ZWVzXCI6IHtcbiAgICAgIFwiQHR5cGVcIjogXCJRdWFudGl0YXRpdmVWYWx1ZVwiLFxuICAgICAgXCJ2YWx1ZVwiOiAyMDBcbiAgICB9LFxuICAgIFwiZW1wbG95ZWVcIjogW1xuICAgICAge1xuICAgICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3Blb3BsZS9yb2hhbi1iaG9zYWxlI3BlcnNvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3Blb3BsZS95YXNoLWJoYWxla2FyI3BlcnNvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3Blb3BsZS9ha3NoYXktbmF2bGUjcGVyc29uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vcGVvcGxlL2RpbGlwLWRzb3V6YSNwZXJzb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9wZW9wbGUvc2FuamF5LWJvYmRlI3BlcnNvblwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vcGVvcGxlL3JvaGFuLWJob3NhbGUjcGVyc29uXCIsXG4gICAgXCJuYW1lXCI6IFwiUm9oYW4gQmhvc2FsZVwiLFxuICAgIFwiam9iVGl0bGVcIjogXCJGb3VuZGVyICYgQ2hpZWYgRXhlY3V0aXZlIE9mZmljZXJcIixcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vcGVvcGxlL3JvaGFuLnBuZ1wiLFxuICAgIFwic2FtZUFzXCI6IFtcbiAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3JvaGFuYmhvc2FsZTE1L1wiXG4gICAgXSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiUm9oYW4gQmhvc2FsZSBmb3VuZGVkIEN5YmFlbSBUZWNoIHdpdGggYSB2aXNpb24gb2YgY3JlYXRpbmcgYSB0ZWNobm9sb2d5IGNvbXBhbnkgdGhhdCBkZWxpdmVycyBwcmFjdGljYWwsIHNjYWxhYmxlLCBhbmQgYnVzaW5lc3MtZm9jdXNlZCBJVCBzb2x1dGlvbnMuIEhlIGxlYWRzIHRoZSBjb21wYW55J3Mgb3ZlcmFsbCBzdHJhdGVneSwgYnVzaW5lc3MgZ3Jvd3RoLCBnbG9iYWwgcGFydG5lcnNoaXBzLCBhbmQgaW5ub3ZhdGlvbiBpbml0aWF0aXZlcy5cIixcbiAgICBcIndvcmtzRm9yXCI6IHtcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vcGVvcGxlL3lhc2gtYmhhbGVrYXIjcGVyc29uXCIsXG4gICAgXCJuYW1lXCI6IFwiWWFzaCBCaGFsZWthclwiLFxuICAgIFwiam9iVGl0bGVcIjogXCJPcGVyYXRpb25zICYgQnVzaW5lc3MgU3RyYXRlZ3kgRGlyZWN0b3JcIixcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vcGVvcGxlL3lhc2gucG5nXCIsXG4gICAgXCJzYW1lQXNcIjogW1xuICAgICAgXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4veWFzaC1iaGFsZWthci1pbW9leG8vXCJcbiAgICBdLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJZYXNoIEJoYWxla2FyIHBsYXlzIGEgcGl2b3RhbCByb2xlIGluIGRyaXZpbmcgb3BlcmF0aW9uYWwgZXhjZWxsZW5jZSBhbmQgc3RyYXRlZ2ljIGJ1c2luZXNzIGluaXRpYXRpdmVzIGFjcm9zcyBDeWJhZW0gVGVjaCwgb3B0aW1pemluZyBidXNpbmVzcyBwcm9jZXNzZXMsIHN0cmVuZ3RoZW5pbmcgaW50ZXJuYWwgb3BlcmF0aW9ucywgYW5kIHN1cHBvcnRpbmcgZ2xvYmFsIGV4cGFuc2lvbi5cIixcbiAgICBcIndvcmtzRm9yXCI6IHtcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vcGVvcGxlL2Frc2hheS1uYXZsZSNwZXJzb25cIixcbiAgICBcIm5hbWVcIjogXCJBa3NoYXkgTmF2bGVcIixcbiAgICBcImpvYlRpdGxlXCI6IFwiQ2hpZWYgVGVjaG5vbG9neSAmIFByb2R1Y3QgT2ZmaWNlclwiLFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9wZW9wbGUvYWtzaGF5LnBuZ1wiLFxuICAgIFwic2FtZUFzXCI6IFtcbiAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Frc2hheS1uYXZsZS0yOTI5YTI0NS9cIlxuICAgIF0sXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkFrc2hheSBOYXZsZSBpcyBhIHRlY2hub2xvZ3kgYW5kIHByb2R1Y3QgZXhlY3V0aXZlIHdpdGggMTUgeWVhcnMgb2YgZXhwZXJpZW5jZSBsZWFkaW5nIGVudGVycHJpc2UgdGVjaG5vbG9neSwgQUktZHJpdmVuIHByb2R1Y3QgaW5ub3ZhdGlvbiwgZW50ZXJwcmlzZSBhcmNoaXRlY3R1cmUsIGFuZCBsYXJnZS1zY2FsZSBkaWdpdGFsIHRyYW5zZm9ybWF0aW9uIGluaXRpYXRpdmVzLlwiLFxuICAgIFwid29ya3NGb3JcIjoge1xuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS8jb3JnYW5pemF0aW9uXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9wZW9wbGUvZGlsaXAtZHNvdXphI3BlcnNvblwiLFxuICAgIFwibmFtZVwiOiBcIkRpbGlwIEQnU291emFcIixcbiAgICBcImpvYlRpdGxlXCI6IFwiRGlyZWN0b3IgLSBHbG9iYWwgQnVzaW5lc3MgUmVsYXRpb25zXCIsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3Blb3BsZS9EaWxpcCUyMEQnU291emEucG5nXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkRpbGlwIEQnU291emEgbGVhZHMgQ3liYWVtIFRlY2gncyBnbG9iYWwgYnVzaW5lc3MgZGV2ZWxvcG1lbnQgYW5kIHN0cmF0ZWdpYyBwYXJ0bmVyc2hpcCBpbml0aWF0aXZlcywgZm9jdXNpbmcgb24gZXhwYW5kaW5nIHRoZSBjb21wYW55J3MgaW50ZXJuYXRpb25hbCBwcmVzZW5jZSBhbmQgYnVpbGRpbmcgbGFzdGluZyBtYXJrZXQgcmVsYXRpb25zaGlwcy5cIixcbiAgICBcIndvcmtzRm9yXCI6IHtcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vcGVvcGxlL3NhbmpheS1ib2JkZSNwZXJzb25cIixcbiAgICBcIm5hbWVcIjogXCJTYW5qYXkgTWFoYWRlbyBCb2JkZVwiLFxuICAgIFwiam9iVGl0bGVcIjogXCJTdHJhdGVnaWMgQWR2aXNvciAtIEVudGVycHJpc2UgVHJhbnNmb3JtYXRpb24sIERpZ2l0YWwgR292ZXJubWVudCAmIFB1YmxpYyBTZWN0b3IgSW5ub3ZhdGlvblwiLFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9wZW9wbGUvU2FuamF5JTIwTWFoYWRlbyUyMEJvYmFkZS5wbmdcIixcbiAgICBcImFsdW1uaU9mXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkVkdWNhdGlvbmFsT3JnYW5pemF0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIklJVCBCb21iYXlcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkVkdWNhdGlvbmFsT3JnYW5pemF0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIklJTSBBaG1lZGFiYWRcIlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlNhbmpheSBCb2JkZSBpcyBhIGRpc3Rpbmd1aXNoZWQgYnVzaW5lc3MgdHJhbnNmb3JtYXRpb24gZXhlY3V0aXZlIHdpdGggb3ZlciB0aHJlZSBkZWNhZGVzIG9mIGV4cGVyaWVuY2UgbGVhZGluZyBlbnRlcnByaXNlIG1vZGVybml6YXRpb24sIGRpZ2l0YWwgR292ZXJubWVudCwgYW5kIHB1YmxpYyBzZWN0b3IgaW5ub3ZhdGlvbi5cIixcbiAgICBcIndvcmtzRm9yXCI6IHtcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIlZpZGVvT2JqZWN0XCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9saWZlLWF0LWN5YmFlbXRlY2gjdmlkZW9cIixcbiAgICBcIm5hbWVcIjogXCJMaWZlIGF0IEN5YmFlbSBUZWNoXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkFuIGluc2lkZSBsb29rIGF0IHRoZSB3b3JrcGxhY2UgY3VsdHVyZSwgdGVhbSBlbnZpcm9ubWVudCwgYW5kIGRheS10by1kYXkgbGlmZSBhdCBDeWJhZW0gVGVjaC5cIixcbiAgICBcInRodW1ibmFpbFVybFwiOiBbXG4gICAgICBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2ltYWdlcy9oZXJvLXZpZGVvLXRodW1ibmFpbC5qcGdcIlxuICAgIF0sXG4gICAgXCJ1cGxvYWREYXRlXCI6IFwiMjAyNC0wMS0wMVQwODowMDowMCswMDowMFwiLFxuICAgIFwiY29udGVudFVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3ZpZGVvL3ZpZGVvLm1wNFwiLFxuICAgIFwiZW1iZWRVcmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9saWZlLWF0LWN5YmFlbXRlY2hcIlxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIkltYWdlR2FsbGVyeVwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vbGlmZS1hdC1jeWJhZW10ZWNoI2dhbGxlcnlcIixcbiAgICBcIm5hbWVcIjogXCJMaWZlIGF0IEN5YmFlbSBUZWNoIFBob3RvIEdhbGxlcnlcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiUGhvdG9zIHNob3dpbmcgY2VsZWJyYXRpb25zLCB0ZWFtIGx1bmNoZXMsIGZvdW5kYXRpb24gZGF5cywgYW5kIG91dGluZ3MgYXQgQ3liYWVtIFRlY2guXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9saWZlLWF0LWN5YmFlbXRlY2hcIixcbiAgICBcImhhc1BhcnRcIjogW1xuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiSW1hZ2VPYmplY3RcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiVGVhbSBMdW5jaFwiLFxuICAgICAgICBcImNvbnRlbnRVcmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9saWZlYXRjeWJhZW10ZWNoL1RlYW1MdW5jaC5qcGdcIixcbiAgICAgICAgXCJjYXB0aW9uXCI6IFwiVGVhbSBMdW5jaCBhdCBDeWJhZW0gVGVjaFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiSW1hZ2VPYmplY3RcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiQ2VsZWJyYXRpb24gYXQgUG9pbnRcIixcbiAgICAgICAgXCJjb250ZW50VXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vbGlmZWF0Y3liYWVtdGVjaC9jZWxlYnJhdGlvbmF0cG9pbnQuanBnXCIsXG4gICAgICAgIFwiY2FwdGlvblwiOiBcIkNlbGVicmF0aW9uIGF0IFBvaW50XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiLFxuICAgICAgICBcIm5hbWVcIjogXCJGb3VuZGF0aW9uIERheSAyMDI2XCIsXG4gICAgICAgIFwiY29udGVudFVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xpZmVhdGN5YmFlbXRlY2gvRm91bmRhdGlvbmRheTIwMjYuanBnXCIsXG4gICAgICAgIFwiY2FwdGlvblwiOiBcIkZvdW5kYXRpb24gRGF5IDIwMjYgQ2VsZWJyYXRpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkltYWdlT2JqZWN0XCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkZvdW5kYXRpb24gRGF5XCIsXG4gICAgICAgIFwiY29udGVudFVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xpZmVhdGN5YmFlbXRlY2gvRm91bmRhdGlvbmRheS5KUEdcIixcbiAgICAgICAgXCJjYXB0aW9uXCI6IFwiRm91bmRhdGlvbiBEYXkgQ2VsZWJyYXRpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkltYWdlT2JqZWN0XCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlRlYW0gT3V0aW5nXCIsXG4gICAgICAgIFwiY29udGVudFVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xpZmVhdGN5YmFlbXRlY2gvVGVhbU91dGluZy5qcGdcIixcbiAgICAgICAgXCJjYXB0aW9uXCI6IFwiQ3liYWVtIFRlY2ggVGVhbSBPdXRpbmdcIlxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxufTtcblxuZXhwb3J0IGNvbnN0IGxlYWRlcnNoaXBTZW9EYXRhID0ge1xuICB0aXRsZTogXCJMZWFkZXJzaGlwIFRlYW0gfCBWaXNpb24gJiBFeHBlcnRpc2UgfCBDeWJhZW0gVGVjaFwiLFxuICBkZXNjcmlwdGlvbjogXCJNZWV0IG91ciBsZWFkZXJzaGlwIHRlYW0gZHJpdmluZyBidXNpbmVzcyBzdHJhdGVneSwgdGVjaG5vbG9neSBpbm5vdmF0aW9uLCBjbGllbnQgc3VjY2VzcywgYW5kIHN1c3RhaW5hYmxlIG9yZ2FuaXphdGlvbmFsIGdyb3d0aC5cIixcbiAgY2Fub25pY2FsOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xlYWRlcnNoaXBcIixcbiAga2V5d29yZHM6IFwiQ3liYWVtIFRlY2ggbGVhZGVyc2hpcCwgZXhlY3V0aXZlIGxlYWRlcnNoaXAgUHVuZSwgYnVzaW5lc3Mgc3RyYXRlZ3kgY29uc3VsdGluZywgdGVjaG5vbG9neSBsZWFkZXJzaGlwLCBkaWdpdGFsIHRyYW5zZm9ybWF0aW9uIGxlYWRlcnMsIGlubm92YXRpb24gbGVhZGVyc2hpcCwgQ0VPIEN5YmFlbSBUZWNoLCBleGVjdXRpdmUgbWFuYWdlbWVudCwgSVQgY29tcGFueSBsZWFkZXJzaGlwLCBzb2Z0d2FyZSBjb21wYW55IGV4ZWN1dGl2ZXMsIGVudGVycHJpc2UgdGVjaG5vbG9neSBzdHJhdGVneSwgY29ycG9yYXRlIGxlYWRlcnNoaXAsIGJ1c2luZXNzIGlubm92YXRpb24sIGRpZ2l0YWwgY29uc3VsdGluZyBsZWFkZXJzaGlwXCIsXG4gIG9nVGl0bGU6IFwiTGVhZGVyc2hpcCBUZWFtIHwgQnVzaW5lc3MgU3RyYXRlZ3kgJiBFeGVjdXRpdmUgVmlzaW9uIHwgQ3liYWVtIFRlY2hcIixcbiAgb2dEZXNjcmlwdGlvbjogXCJNZWV0IHRoZSBleGVjdXRpdmUgbGVhZGVyc2hpcCBkcml2aW5nIEN5YmFlbSBUZWNoXCIsXG4gIHR3aXR0ZXJUaXRsZTogXCJMZWFkZXJzaGlwIFRlYW0gfCBDeWJhZW0gVGVjaFwiLFxuICB0d2l0dGVyRGVzY3JpcHRpb246IFwiRGlzY292ZXIgdGhlIGV4ZWN1dGl2ZSB0ZWFtIGxlYWRpbmcgaW5ub3ZhdGlvbiwgYnVzaW5lc3Mgc3RyYXRlZ3ksIGVudGVycHJpc2UgdGVjaG5vbG9neSwgYW5kIGRpZ2l0YWwgdHJhbnNmb3JtYXRpb24gYXQgQ3liYWVtIFRlY2guXCIsXG4gIGpzb25MZDogW1xuICB7XG4gICAgXCJAdHlwZVwiOiBcIkNvbGxlY3Rpb25QYWdlXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9sZWFkZXJzaGlwI3dlYnBhZ2VcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xlYWRlcnNoaXBcIixcbiAgICBcIm5hbWVcIjogXCJMZWFkZXJzaGlwIFRlYW0gfCBDeWJhZW0gVGVjaFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJNZWV0IHRoZSBsZWFkZXJzaGlwIHRlYW0gZHJpdmluZyBzdHJhdGVneSwgdGVjaG5vbG9neSwgb3BlcmF0aW9ucywgYW5kIGdsb2JhbCBncm93dGggYXQgQ3liYWVtIFRlY2guXCIsXG4gICAgXCJpc1BhcnRPZlwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyN3ZWJzaXRlXCJcbiAgICB9LFxuICAgIFwiYnJlYWRjcnVtYlwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xlYWRlcnNoaXAjYnJlYWRjcnVtYlwiXG4gICAgfSxcbiAgICBcIm1haW5FbnRpdHlcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIkl0ZW1MaXN0XCIsXG4gICAgICBcIm5hbWVcIjogXCJDeWJhZW0gVGVjaCBFeGVjdXRpdmUgTGVhZGVyc2hpcFwiLFxuICAgICAgXCJudW1iZXJPZkl0ZW1zXCI6IDUsXG4gICAgICBcIml0ZW1MaXN0RWxlbWVudFwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIixcbiAgICAgICAgICBcInBvc2l0aW9uXCI6IDEsXG4gICAgICAgICAgXCJpdGVtXCI6IHtcbiAgICAgICAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgICAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vbGVhZGVyc2hpcC9yb2hhbi1iaG9zYWxlI3BlcnNvblwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUm9oYW4gQmhvc2FsZVwiLFxuICAgICAgICAgICAgXCJqb2JUaXRsZVwiOiBcIkZvdW5kZXIgJiBDaGllZiBFeGVjdXRpdmUgT2ZmaWNlclwiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9sZWFkZXJzaGlwL3JvaGFuLWJob3NhbGVcIixcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9wZW9wbGUvcm9oYW4ucG5nXCIsXG4gICAgICAgICAgICBcInNhbWVBc1wiOiBbXG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3JvaGFuYmhvc2FsZTE1L1wiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgICAgXCJwb3NpdGlvblwiOiAyLFxuICAgICAgICAgIFwiaXRlbVwiOiB7XG4gICAgICAgICAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgICAgICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xlYWRlcnNoaXAvYWtzaGF5LW5hdmxlI3BlcnNvblwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWtzaGF5IE5hdmxlXCIsXG4gICAgICAgICAgICBcImpvYlRpdGxlXCI6IFwiQ2hpZWYgVGVjaG5vbG9neSAmIFByb2R1Y3QgT2ZmaWNlclwiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9sZWFkZXJzaGlwL2Frc2hheS1uYXZsZVwiLFxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3Blb3BsZS9ha3NoYXkucG5nXCIsXG4gICAgICAgICAgICBcInNhbWVBc1wiOiBbXG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Frc2hheS1uYXZsZS0yOTI5YTI0NS9cIlxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICAgIFwicG9zaXRpb25cIjogMyxcbiAgICAgICAgICBcIml0ZW1cIjoge1xuICAgICAgICAgICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgICAgICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9sZWFkZXJzaGlwL3lhc2gtYmhhbGVrYXIjcGVyc29uXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJZYXNoIEJoYWxla2FyXCIsXG4gICAgICAgICAgICBcImpvYlRpdGxlXCI6IFwiRGlyZWN0b3IgLSBPcGVyYXRpb25zICYgQnVzaW5lc3MgU3RyYXRlZ3lcIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vbGVhZGVyc2hpcC95YXNoLWJoYWxla2FyXCIsXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vcGVvcGxlL3lhc2gucG5nXCIsXG4gICAgICAgICAgICBcInNhbWVBc1wiOiBbXG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3lhc2gtYmhhbGVrYXItaW1vZXhvL1wiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgICAgXCJwb3NpdGlvblwiOiA0LFxuICAgICAgICAgIFwiaXRlbVwiOiB7XG4gICAgICAgICAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgICAgICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xlYWRlcnNoaXAvZGlsaXAtZHNvdXphI3BlcnNvblwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGlsaXAgRCdTb3V6YVwiLFxuICAgICAgICAgICAgXCJqb2JUaXRsZVwiOiBcIkRpcmVjdG9yIC0gR2xvYmFsIEJ1c2luZXNzIFJlbGF0aW9uc1wiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9sZWFkZXJzaGlwL2RpbGlwLWRzb3V6YVwiLFxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3Blb3BsZS9EaWxpcCUyMEQnU291emEucG5nXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIixcbiAgICAgICAgICBcInBvc2l0aW9uXCI6IDUsXG4gICAgICAgICAgXCJpdGVtXCI6IHtcbiAgICAgICAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgICAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vbGVhZGVyc2hpcC9tci4tc2FuamF5LW1haGFkZW8tYm9iZGUjcGVyc29uXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJNci4gU2FuamF5IE1haGFkZW8gQm9iZGVcIixcbiAgICAgICAgICAgIFwiam9iVGl0bGVcIjogXCJTdHJhdGVnaWMgQWR2aXNvciAtIEVudGVycHJpc2UgVHJhbnNmb3JtYXRpb24sIERpZ2l0YWwgR292ZXJubWVudCAvIGUtR292ZXJuYW5jZSAmIFB1YmxpYyBTZWN0b3IgSW5ub3ZhdGlvblwiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9sZWFkZXJzaGlwL21yLi1zYW5qYXktbWFoYWRlby1ib2JkZVwiLFxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3Blb3BsZS9TYW5qYXklMjBNYWhhZGVvJTIwQm9iYWRlLnBuZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiLFxuICAgIFwibmFtZVwiOiBcIkN5YmFlbSBUZWNoIFB2dC4gTHRkLlwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb21cIixcbiAgICBcImxvZ29cIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9hc3NldHMvY3liYWVtLWxvZ28tRFg4MFpjclkucG5nXCIsXG4gICAgXCJlbWFpbFwiOiBcInNhbGVzQGN5YmFlbXRlY2guY29tXCIsXG4gICAgXCJ0ZWxlcGhvbmVcIjogXCIrOTEtOTAyODU0MTM4M1wiLFxuICAgIFwiYWRkcmVzc1wiOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiUG9zdGFsQWRkcmVzc1wiLFxuICAgICAgXCJzdHJlZXRBZGRyZXNzXCI6IFwiT2ZmaWNlIDMwNCwgU3VyYXR3YWxhIE1hcmsgUGxhenpvLCBIaW5qZXdhZGlcIixcbiAgICAgIFwiYWRkcmVzc0xvY2FsaXR5XCI6IFwiUHVuZVwiLFxuICAgICAgXCJhZGRyZXNzUmVnaW9uXCI6IFwiTWFoYXJhc2h0cmFcIixcbiAgICAgIFwicG9zdGFsQ29kZVwiOiBcIjQxMTA1N1wiLFxuICAgICAgXCJhZGRyZXNzQ291bnRyeVwiOiBcIklOXCJcbiAgICB9LFxuICAgIFwic2FtZUFzXCI6IFtcbiAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvY3liYWVtdGVjaFwiLFxuICAgICAgXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2N5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vQGN5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2N5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly94LmNvbS9jeWJhZW10ZWNoXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiQnJlYWRjcnVtYkxpc3RcIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xlYWRlcnNoaXAjYnJlYWRjcnVtYlwiLFxuICAgIFwiaXRlbUxpc3RFbGVtZW50XCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogMSxcbiAgICAgICAgXCJuYW1lXCI6IFwiSG9tZVwiLFxuICAgICAgICBcIml0ZW1cIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiAyLFxuICAgICAgICBcIm5hbWVcIjogXCJMZWFkZXJzaGlwXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cbn07XG5cbmV4cG9ydCBjb25zdCBwb3J0Zm9saW9TZW9EYXRhID0ge1xuICB0aXRsZTogXCJFbnRlcnByaXNlIElUIFByb2plY3RzIFBvcnRmb2xpbyAmIENhc2UgU3R1ZGllcyB8IEN5YmFlbSBUZWNoXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkV4cGxvcmUgb3VyIEVudGVycHJpc2UgSVQgUHJvamVjdHMgUG9ydGZvbGlvIGFuZCBjbGllbnQgY2FzZSBzdHVkaWVzIGFjcm9zcyBjdXN0b20gc29mdHdhcmUgZGV2ZWxvcG1lbnQsIGNsb3VkIGluZnJhc3RydWN0dXJlLCBBSSBzb2x1dGlvbnMsIHdlYiBzeXN0ZW1zLCBhbmQgbWFuYWdlZCBJVC5cIixcbiAgY2Fub25pY2FsOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3BvcnRmb2xpb1wiLFxuICBrZXl3b3JkczogXCJFbnRlcnByaXNlIElUIFByb2plY3RzIFBvcnRmb2xpbywgZW50ZXJwcmlzZSBzb2Z0d2FyZSBwcm9qZWN0cywgdGVjaG5vbG9neSBjYXNlIHN0dWRpZXMsIElUIHBvcnRmb2xpbyBQdW5lLCBjbG91ZCBtaWdyYXRpb24gc3VjY2VzcyBzdG9yaWVzLCBtYW5hZ2VkIElUIHByb2plY3RzIEluZGlhLCBkaWdpdGFsIHRyYW5zZm9ybWF0aW9uIGV4YW1wbGVzLCBjb3Jwb3JhdGUgaW5mcmFzdHJ1Y3R1cmUgZGVwbG95bWVudCwgbmV0d29yayBzZXR1cCBwb3J0Zm9saW8sIEN5YmFlbSBUZWNoIGNhc2Ugc3R1ZGllcywgc29mdHdhcmUgZGVwbG95bWVudCBQdW5lXCIsXG4gIG9nVGl0bGU6IFwiRW50ZXJwcmlzZSBJVCBQcm9qZWN0cyBQb3J0Zm9saW8gJiBDYXNlIFN0dWRpZXMgfCBDeWJhZW0gVGVjaFwiLFxuICBvZ0Rlc2NyaXB0aW9uOiBcIkV4cGxvcmUgb3VyIHRyYWNrIHJlY29yZCBvZiBlbmdpbmVlcmluZyBzdWNjZXNzLiBSZWFsLXdvcmxkIGNhc2Ugc3R1ZGllcyBkZXRhaWxpbmcgY2xvdWQgbWlncmF0aW9ucywgaW5mcmFzdHJ1Y3R1cmUgbWFuYWdlbWVudCwgYW5kIGRpZ2l0YWwgc3RyYXRlZ3kgZGVwbG95bWVudHMgYnkgQ3liYWVtIFRlY2guXCIsXG4gIHR3aXR0ZXJUaXRsZTogXCJFbnRlcnByaXNlIElUIFByb2plY3RzIFBvcnRmb2xpbyAmIENhc2UgU3R1ZGllcyB8IEN5YmFlbSBUZWNoXCIsXG4gIHR3aXR0ZXJEZXNjcmlwdGlvbjogXCJTZWUgaG93IEN5YmFlbSBUZWNoIGRyaXZlcyBlbnRlcnByaXNlIGdyb3d0aCB0aHJvdWdoIHJvYnVzdCBjbG91ZCBzb2x1dGlvbnMsIGFzc2V0IGNvbXBsaWFuY2UsIGFuZCBjdXN0b20gc3RyYXRlZ2ljIElUIHRyYW5zZm9ybWF0aW9ucy5cIixcbiAganNvbkxkOiBbXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiQ29sbGVjdGlvblBhZ2VcIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3BvcnRmb2xpbyN3ZWJwYWdlXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9wb3J0Zm9saW9cIixcbiAgICBcIm5hbWVcIjogXCJPdXIgUG9ydGZvbGlvICYgQ2xpZW50IFdvcmsgfCBDeWJhZW0gVGVjaFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJFeHBsb3JlIEN5YmFlbSBUZWNoJ3MgcG9ydGZvbGlvIG9mIGVudGVycHJpc2Ugc29mdHdhcmUgc29sdXRpb25zLCBjdXN0b20gRVJQcywgQUkgcGxhdGZvcm1zLCB3ZWJzaXRlIGRldmVsb3BtZW50LCBjbG91ZCBpbmZyYXN0cnVjdHVyZSwgYW5kIGN5YmVyc2VjdXJpdHkgY2FzZSBzdHVkaWVzLlwiLFxuICAgIFwibWFpbkVudGl0eVwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3BvcnRmb2xpbyNpdGVtbGlzdFwiXG4gICAgfSxcbiAgICBcImlzUGFydE9mXCI6IHtcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI3dlYnNpdGVcIlxuICAgIH0sXG4gICAgXCJicmVhZGNydW1iXCI6IHtcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vcG9ydGZvbGlvI2JyZWFkY3J1bWJcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJJdGVtTGlzdFwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vcG9ydGZvbGlvI2l0ZW1saXN0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ3liYWVtIFRlY2ggRmVhdHVyZWQgU29sdXRpb25zIFBvcnRmb2xpb1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJGZWF0dXJlZCBJVCBzZXJ2aWNlIHByb2plY3RzIGFuZCBlbnRlcnByaXNlIHRlY2hub2xvZ3kgY2FzZSBzdHVkaWVzIGFjcm9zcyA1IGNvdW50cmllcy5cIixcbiAgICBcIm51bWJlck9mSXRlbXNcIjogNixcbiAgICBcIml0ZW1MaXN0RWxlbWVudFwiOiBbXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDEsXG4gICAgICAgIFwibmFtZVwiOiBcIkN5YmVyc2VjdXJpdHkgJiBUaHJlYXQgUHJldmVudGlvblwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQWR2YW5jZWQgc2VjdXJpdHkgc29sdXRpb25zIGZlYXR1cmluZyB0aHJlYXQgZGV0ZWN0aW9uICYgcmVzcG9uc2UsIHplcm8gdHJ1c3QgYXJjaGl0ZWN0dXJlLCBlbmRwb2ludCBwcm90ZWN0aW9uLCBhbmQgY29tcGxpYW5jZSBtYW5hZ2VtZW50LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiAyLFxuICAgICAgICBcIm5hbWVcIjogXCJFbnRlcnByaXNlICYgQUkgU29sdXRpb25zXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBSS1wb3dlcmVkIENSTSwgRVJQIHNvZnR3YXJlIGRldmVsb3BtZW50LCBpbnRlbGxpZ2VudCBkb2N1bWVudCBtYW5hZ2VtZW50LCBhbmQgZW50ZXJwcmlzZSB3b3JrZmxvdyBwbGF0Zm9ybXMuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDMsXG4gICAgICAgIFwibmFtZVwiOiBcIldlYnNpdGUgRGV2ZWxvcG1lbnQgJiBXZWIgU3lzdGVtc1wiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSGlnaC1zcGVlZCwgcmVzcG9uc2l2ZSwgdXNlci1mcmllbmRseSwgYW5kIHNlY3VyZSBjdXN0b20gd2ViIGFwcGxpY2F0aW9uIHN5c3RlbXMuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDQsXG4gICAgICAgIFwibmFtZVwiOiBcIkNsb3VkIFNvbHV0aW9ucyAmIEluZnJhc3RydWN0dXJlXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBV1MsIEF6dXJlLCBhbmQgSHlicmlkIENsb3VkIHByb3Zpc2lvbmluZywgYXJjaGl0ZWN0dXJlIGRlc2lnbiwgc2VydmVyIG1hbmFnZW1lbnQsIGFuZCBjbG91ZCBtaWdyYXRpb24uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDUsXG4gICAgICAgIFwibmFtZVwiOiBcIk1hbmFnZWQgSVQgU2VydmljZXNcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIjI0LzcgbmV0d29yayBtb25pdG9yaW5nLCBwcm9hY3RpdmUgc3lzdGVtIG1haW50ZW5hbmNlLCBJVCBzdXBwb3J0LCBhbmQgaW5mcmFzdHJ1Y3R1cmUgZ292ZXJuYW5jZS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogNixcbiAgICAgICAgXCJuYW1lXCI6IFwiRGlnaXRhbCBNYXJrZXRpbmcgJiBSZXZlbnVlIEdyb3d0aFwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUGVyZm9ybWFuY2UgbWFya2V0aW5nIGNhbXBhaWducywgQjJCIGxlYWQgZ2VuZXJhdGlvbiwgc2VhcmNoIGVuZ2luZSBvcHRpbWl6YXRpb24gKFNFTyksIGFuZCBjb252ZXJzaW9uIHJhdGUgb3B0aW1pemF0aW9uLlwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIkhvd1RvXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9wb3J0Zm9saW8jZGV2ZWxvcG1lbnQtcHJvY2Vzc1wiLFxuICAgIFwibmFtZVwiOiBcIk91ciBEZXZlbG9wbWVudCBQcm9jZXNzXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkN5YmFlbSBUZWNoJ3Mgc3RydWN0dXJlZCA2LXN0ZXAgZW5naW5lZXJpbmcgbWV0aG9kb2xvZ3kgZm9yIGRlbGl2ZXJpbmcgZW50ZXJwcmlzZS1ncmFkZSBJVCBzb2x1dGlvbnMuXCIsXG4gICAgXCJzdGVwXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkhvd1RvU3RlcFwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDEsXG4gICAgICAgIFwibmFtZVwiOiBcIkRpc2NvdmVyeSAmIFNjb3BpbmdcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiVW5kZXJzdGFuZGluZyBidXNpbmVzcyByZXF1aXJlbWVudHMsIHByb2plY3QgZ29hbHMsIGFuZCB0ZWNobmljYWwgZmVhc2liaWxpdHkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJIb3dUb1N0ZXBcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiAyLFxuICAgICAgICBcIm5hbWVcIjogXCJBcmNoaXRlY3R1cmUgJiBEZXNpZ25cIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiRGVzaWduaW5nIHNjYWxhYmxlIHN5c3RlbSBhcmNoaXRlY3R1cmUsIGRhdGFiYXNlIG1vZGVscywgYW5kIGludHVpdGl2ZSBVSS9VWCBmcmFtZXdvcmtzLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiSG93VG9TdGVwXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogMyxcbiAgICAgICAgXCJuYW1lXCI6IFwiQWdpbGUgRGV2ZWxvcG1lbnRcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiRXhlY3V0aW5nIGl0ZXJhdGl2ZSBkZXZlbG9wbWVudCBzcHJpbnRzIHdpdGggY29udGludW91cyBjb2RlIHJldmlld3MgYW5kIHJlZ3VsYXIgbWlsZXN0b25lIGRlbW9zLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiSG93VG9TdGVwXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogNCxcbiAgICAgICAgXCJuYW1lXCI6IFwiUUEgJiBTZWN1cml0eSBBdWRpdFwiLFxuICAgICAgICBcInRleHRcIjogXCJSaWdvcm91cyBtYW51YWwgYW5kIGF1dG9tYXRlZCBRQSB0ZXN0aW5nLCB2dWxuZXJhYmlsaXR5IGFzc2Vzc21lbnRzLCBhbmQgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiSG93VG9TdGVwXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogNSxcbiAgICAgICAgXCJuYW1lXCI6IFwiRGVwbG95bWVudCAmIEdvLUxpdmVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiRXhlY3V0aW5nIHplcm8tZG93bnRpbWUgZGVwbG95bWVudCwgc2VydmVyIHNldHVwLCBhbmQgc2VhbWxlc3MgcHJvZHVjdGlvbiBsYXVuY2guXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJIb3dUb1N0ZXBcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiA2LFxuICAgICAgICBcIm5hbWVcIjogXCJTdXBwb3J0ICYgRXZvbHV0aW9uXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIlByb3ZpZGluZyAyNC83IHBvc3QtZGVwbG95bWVudCBzdXBwb3J0LCByZWd1bGFyIHN5c3RlbSB1cGRhdGVzLCBhbmQgY29udGludW91cyBwbGF0Zm9ybSBlbmhhbmNlbWVudHMuXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS8jb3JnYW5pemF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwiQ3liYWVtIFRlY2ggUHZ0LiBMdGQuXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbVwiLFxuICAgIFwibG9nb1wiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2Fzc2V0cy9jeWJhZW0tbG9nby1EWDgwWmNyWS5wbmdcIixcbiAgICBcImVtYWlsXCI6IFwic2FsZXNAY3liYWVtdGVjaC5jb21cIixcbiAgICBcInRlbGVwaG9uZVwiOiBcIis5MS05MDI4NTQxMzgzXCIsXG4gICAgXCJhZGRyZXNzXCI6IHtcbiAgICAgIFwiQHR5cGVcIjogXCJQb3N0YWxBZGRyZXNzXCIsXG4gICAgICBcInN0cmVldEFkZHJlc3NcIjogXCJPZmZpY2UgMzA0LCBTdXJhdHdhbGEgTWFyayBQbGF6em8sIEhpbmpld2FkaVwiLFxuICAgICAgXCJhZGRyZXNzTG9jYWxpdHlcIjogXCJQdW5lXCIsXG4gICAgICBcImFkZHJlc3NSZWdpb25cIjogXCJNYWhhcmFzaHRyYVwiLFxuICAgICAgXCJwb3N0YWxDb2RlXCI6IFwiNDExMDU3XCIsXG4gICAgICBcImFkZHJlc3NDb3VudHJ5XCI6IFwiSU5cIlxuICAgIH0sXG4gICAgXCJzYW1lQXNcIjogW1xuICAgICAgXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9jeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vY3liYWVtdGVjaFwiLFxuICAgICAgXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9AY3liYWVtdGVjaFwiLFxuICAgICAgXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vY3liYWVtdGVjaFwiLFxuICAgICAgXCJodHRwczovL3guY29tL2N5YmFlbXRlY2hcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJCcmVhZGNydW1iTGlzdFwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vcG9ydGZvbGlvI2JyZWFkY3J1bWJcIixcbiAgICBcIml0ZW1MaXN0RWxlbWVudFwiOiBbXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDEsXG4gICAgICAgIFwibmFtZVwiOiBcIlBvcnRmb2xpb1wiXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG59O1xuXG5leHBvcnQgY29uc3QgZW50ZXJwcmlzZVNvZnR3YXJlU2VvRGF0YSA9IHtcbiAgdGl0bGU6IFwiRW50ZXJwcmlzZSBTb2Z0d2FyZSBEZXZlbG9wbWVudCBDb21wYW55IHwgQ3liYWVtIFRlY2hcIixcbiAgZGVzY3JpcHRpb246IFwiQnVpbGQgc2NhbGFibGUgZW50ZXJwcmlzZSBzb2Z0d2FyZSwgY3VzdG9tIGJ1c2luZXNzIGFwcGxpY2F0aW9ucywgQUktcG93ZXJlZCBwbGF0Zm9ybXMsIGludGVncmF0aW9ucywgYW5kIHdvcmtmbG93IGF1dG9tYXRpb24gd2l0aCBDeWJhZW0gVGVjaC5cIixcbiAgY2Fub25pY2FsOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9lbnRlcnByaXNlLXNvZnR3YXJlXCIsXG4gIGtleXdvcmRzOiBcIkN5YmFlbSBDUk0gQWNlIFBybywgQ3liYWVtIE5vdmEgQ1JNLCBJVFNNIFRvb2wgUHVuZSwgZW50ZXJwcmlzZSBzb2Z0d2FyZSBjb21wYW55IFB1bmUsIGN1c3RvbSBlbnRlcnByaXNlIHBsYXRmb3JtcywgQUkgYnVzaW5lc3Mgc29mdHdhcmUsIERvY3VtZW50IE1hbmFnZW1lbnQgU3lzdGVtLCBQcm9qZWN0IE1hbmFnZW1lbnQgVG9vbCwgU2l0ZSBFbmdpbmVlciBFY29zeXN0ZW0sIEhSIE1hbmFnZW1lbnQgU3lzdGVtLCBjdXN0b20gQ1JNIGRldmVsb3BtZW50LCBJU08gY2VydGlmaWVkIHNvZnR3YXJlIGRldmVsb3BtZW50LCBCMkIgZW50ZXJwcmlzZSBhcHBsaWNhdGlvbnMsIHNjYWxhYmxlIGJ1c2luZXNzIHNvZnR3YXJlIEluZGlhXCIsXG4gIG9nVGl0bGU6IFwiQUktUG93ZXJlZCBFbnRlcnByaXNlIFNvZnR3YXJlIFNvbHV0aW9ucyAmIFBsYXRmb3JtcyB8IEN5YmFlbSBUZWNoXCIsXG4gIG9nRGVzY3JpcHRpb246IFwiRWxpbWluYXRlIGJvdHRsZW5lY2tzIGFuZCBhY2NlbGVyYXRlIGdyb3d0aCB3aXRoIEN5YmFlbSBUZWNoXCIsXG4gIHR3aXR0ZXJUaXRsZTogXCJBSS1Qb3dlcmVkIEVudGVycHJpc2UgU29mdHdhcmUgU29sdXRpb25zICYgUGxhdGZvcm1zIHwgQ3liYWVtIFRlY2hcIixcbiAgdHdpdHRlckRlc2NyaXB0aW9uOiBcIkZyb20gQ3liYWVtIENSTSBBY2UgUHJvIGFuZCBJVFNNIHRvIHNlY3VyZSBETVMgYW5kIEhSIG1hbmFnZW1lbnQgc3lzdGVtcy4gRHVhbCBJU08tY2VydGlmaWVkIGVuZ2luZWVyaW5nIHdpdGggemVybyBzY29wZSBjcmVlcCwgZ3VhcmFudGVlZC5cIixcbiAganNvbkxkOiBbXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiV2ViUGFnZVwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2VudGVycHJpc2Utc29mdHdhcmUjd2VicGFnZVwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2VudGVycHJpc2Utc29mdHdhcmVcIixcbiAgICBcIm5hbWVcIjogXCJFbnRlcnByaXNlIFNvZnR3YXJlIFNvbHV0aW9ucyAmIEVSUCBTb2Z0d2FyZSBEZXZlbG9wbWVudCB8IEN5YmFlbSBUZWNoXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkN5YmFlbSBUZWNoIGlzIGEgbGVhZGluZyBFUlAgc29mdHdhcmUgZGV2ZWxvcG1lbnQgY29tcGFueSBkZWxpdmVyaW5nIGN1c3RvbSBlbnRlcnByaXNlIHNvZnR3YXJlIHNvbHV0aW9ucywgRVJQIHNvZnR3YXJlIGRldmVsb3BtZW50IHNlcnZpY2VzLCBhbmQgQUktcG93ZXJlZCBidXNpbmVzcyBzb2Z0d2FyZS5cIixcbiAgICBcIm1haW5FbnRpdHlcIjoge1xuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZW50ZXJwcmlzZS1zb2Z0d2FyZSNzZXJ2aWNlXCJcbiAgICB9LFxuICAgIFwiaXNQYXJ0T2ZcIjoge1xuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS8jd2Vic2l0ZVwiXG4gICAgfSxcbiAgICBcImJyZWFkY3J1bWJcIjoge1xuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZW50ZXJwcmlzZS1zb2Z0d2FyZSNicmVhZGNydW1iXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2VudGVycHJpc2Utc29mdHdhcmUjc2VydmljZVwiLFxuICAgIFwibmFtZVwiOiBcIkVudGVycHJpc2UgU29mdHdhcmUgRGV2ZWxvcG1lbnQgJiBFUlAgU29sdXRpb25zXCIsXG4gICAgXCJzZXJ2aWNlVHlwZVwiOiBcIkVudGVycHJpc2UgU29mdHdhcmUgU29sdXRpb25zICYgRVJQIFNvZnR3YXJlIERldmVsb3BtZW50XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZW50ZXJwcmlzZS1zb2Z0d2FyZVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJDeWJhZW0gVGVjaCBpcyBhIHByZW1pZXIgZW50ZXJwcmlzZSBzb2Z0d2FyZSBkZXZlbG9wbWVudCBzZXJ2aWNlIGFuZCBsZWFkaW5nIEVSUCBzb2Z0d2FyZSBkZXZlbG9wbWVudCBjb21wYW55IHJlY29nbml6ZWQgYW1vbmcgdG9wIGVycCBzb2Z0d2FyZSBjb21wYW5pZXMgZ2xvYmFsbHkuIFdlIHByb3ZpZGUgc2NhbGFibGUgZW50ZXJwcmlzZSBzb2Z0d2FyZSBzb2x1dGlvbnMgYW5kIGNvbXByZWhlbnNpdmUgZXJwIHNvZnR3YXJlIGRldmVsb3BtZW50IHNlcnZpY2VzIHRhaWxvcmVkIGZvciBtaWQtbWFya2V0IGFuZCBnbG9iYWwgZW50ZXJwcmlzZXMuIFdoZXRoZXIgeW91IGFyZSBsb29raW5nIGZvciBhbiBlcnAgc29mdHdhcmUgZGV2ZWxvcG1lbnQgY29tcGFueSBpbiBQdW5lLCBCYW5nYWxvcmUsIENoZW5uYWksIE5vaWRhLCBBaG1lZGFiYWQsIEx1Y2tub3csIG9yIEtvbGthdGEsIG9yIHJlbGlhYmxlIGVycCBzb2Z0d2FyZSBwcm92aWRlcnMgaW4gS2VyYWxhIGFuZCBHdWphcmF0LCBDeWJhZW0gVGVjaCBkZWxpdmVycyByb2J1c3QgZW50ZXJwcmlzZSBJVCBzb2x1dGlvbnMuIEFzIGEgdHJ1c3RlZCBlcnAgc29mdHdhcmUgZGV2ZWxvcG1lbnQgY29tcGFueSwgd2UgYWxzbyBzcGVjaWFsaXplIGluIGVycCBzb2Z0d2FyZSBmb3Igc21hbGwgY29tcGFuaWVzLCBvZmZlcmluZyBjdXN0b20gRVJQIHN5c3RlbXMsIGxlZ2FjeSBzeXN0ZW0gaW50ZWdyYXRpb24sIGNsb3VkLW5hdGl2ZSBhcHBsaWNhdGlvbiBlbmdpbmVlcmluZywgYW5kIEFJLWRyaXZlbiBwbGF0Zm9ybXMgbGlrZSBDeWJhZW0gQ1JNIEFjZS5cIixcbiAgICBcInByb3ZpZGVyXCI6IHtcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiXG4gICAgfSxcbiAgICBcImFyZWFTZXJ2ZWRcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIlBsYWNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJHbG9iYWxcIlxuICAgIH0sXG4gICAgXCJoYXNPZmZlckNhdGFsb2dcIjoge1xuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZW50ZXJwcmlzZS1zb2Z0d2FyZSNzdWJzZXJ2aWNlc1wiXG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIk9mZmVyQ2F0YWxvZ1wiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2VudGVycHJpc2Utc29mdHdhcmUjc3Vic2VydmljZXNcIixcbiAgICBcIm5hbWVcIjogXCJFbnRlcnByaXNlIFNvZnR3YXJlIENhcGFiaWxpdGllcyAmIFByb2R1Y3RzXCIsXG4gICAgXCJpdGVtTGlzdEVsZW1lbnRcIjogW1xuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICAgICAgXCJpdGVtT2ZmZXJlZFwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIlNvZnR3YXJlQXBwbGljYXRpb25cIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJDeWJhZW0gQ1JNIEFjZSB8IFByb1wiLFxuICAgICAgICAgIFwiYXBwbGljYXRpb25DYXRlZ29yeVwiOiBcIkJ1c2luZXNzQXBwbGljYXRpb25cIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQUktcG93ZXJlZCBDUk0gZmVhdHVyaW5nIHByZWRpY3RpdmUgbGVhZCBzY29yaW5nLCBhdXRvbWF0ZWQgcGlwZWxpbmUgbWFuYWdlbWVudCwgYW5kIGVudGVycHJpc2Ugc3lzdGVtIGludGVncmF0aW9uLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkN1c3RvbSBFUlAgU29mdHdhcmUgRGV2ZWxvcG1lbnRcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGFpbG9yZWQgRVJQIHNvZnR3YXJlIGRldmVsb3BtZW50IHNlcnZpY2VzIGZvciBzdXBwbHkgY2hhaW4sIGZpbmFuY2lhbCBtYW5hZ2VtZW50LCBvcGVyYXRpb25zLCBhbmQgSFIuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgIFwiaXRlbU9mZmVyZWRcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJTb2Z0d2FyZUFwcGxpY2F0aW9uXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQUkgRG9jdW1lbnQgTWFuYWdlbWVudCBTeXN0ZW0gKERNUylcIixcbiAgICAgICAgICBcImFwcGxpY2F0aW9uQ2F0ZWdvcnlcIjogXCJCdXNpbmVzc0FwcGxpY2F0aW9uXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkVudGVycHJpc2UgRE1TIHdpdGggaW50ZWxsaWdlbnQgc2VhcmNoLCBPQ1IgZGF0YSBleHRyYWN0aW9uLCBhbmQgZG9jdW1lbnQgY2xhc3NpZmljYXRpb24uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgIFwiaXRlbU9mZmVyZWRcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJTb2Z0d2FyZUFwcGxpY2F0aW9uXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSVRTTSAmIFRhc2sgQXV0b21hdGlvbiBQbGF0Zm9ybVwiLFxuICAgICAgICAgIFwiYXBwbGljYXRpb25DYXRlZ29yeVwiOiBcIkJ1c2luZXNzQXBwbGljYXRpb25cIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSW50ZWxsaWdlbnQgSVQgc2VydmljZSBtYW5hZ2VtZW50IGFuZCBhdXRvbWF0ZWQgd29ya2Zsb3cgZW5naW5lZXJpbmcuXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJGQVFQYWdlXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZW50ZXJwcmlzZS1zb2Z0d2FyZSNmYXFcIixcbiAgICBcIm1haW5FbnRpdHlcIjogW1xuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiV2hhdCBBSS1wb3dlcmVkIHByb2R1Y3RzIGhhcyBDeWJhZW0gYnVpbHQ/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJXZSBoYXZlIGRldmVsb3BlZCBhIHN1aXRlIG9mIGVudGVycHJpc2UgQUkgcGxhdGZvcm1zOiBDeWJhZW0gQ1JNIEFjZSB8IFBybyAoQUktZHJpdmVuIHNhbGVzIGFuZCBjdXN0b21lciBtYW5hZ2VtZW50KSwgYSBQcm9qZWN0IE1hbmFnZW1lbnQgVG9vbCB3aXRoIGludGVsbGlnZW50IHRhc2sgYXV0b21hdGlvbiwgRG9jdW1lbnQgTWFuYWdlbWVudCBTeXN0ZW0gKERNUykgd2l0aCBBSS1wb3dlcmVkIHNlYXJjaCBhbmQgY2xhc3NpZmljYXRpb24sIElUU00gVG9vbCBmb3IgSVQgc2VydmljZSBtYW5hZ2VtZW50LCBTaXRlIEVuZ2luZWVyIEVjb3N5c3RlbSBmb3IgZmllbGQgb3BlcmF0aW9ucywgYW5kIGEgY29tcHJlaGVuc2l2ZSBIUiBNYW5hZ2VtZW50IFN5c3RlbS5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiSG93IGRvZXMgQ3liYWVtIENSTSBBY2UgfCBQcm8gZGlmZmVyIGZyb20gb2ZmLXRoZS1zaGVsZiBDUk1zP1wiLFxuICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiQ1JNIEFjZSB8IFBybyBpcyBidWlsdCB3aXRoIEFJIGF0IGl0cyBjb3JlIC0gcHJlZGljdGl2ZSBsZWFkIHNjb3JpbmcsIGF1dG9tYXRlZCBwaXBlbGluZSBtYW5hZ2VtZW50LCBpbnRlbGxpZ2VudCBjdXN0b21lciBpbnNpZ2h0cywgYW5kIHNlYW1sZXNzIGludGVncmF0aW9uIHdpdGggeW91ciBleGlzdGluZyBlbnRlcnByaXNlIHN0YWNrLiBVbmxpa2UgZ2VuZXJpYyBDUk1zLCBpdCBpcyBhcmNoaXRlY3RlZCBhcm91bmQgeW91ciBzcGVjaWZpYyB3b3JrZmxvd3MgYW5kIGRhdGEgbW9kZWxzLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICBcIm5hbWVcIjogXCJIb3cgbG9uZyBkb2VzIGEgdHlwaWNhbCBlbnRlcnByaXNlIHNvZnR3YXJlIHByb2plY3QgdGFrZT9cIixcbiAgICAgICAgXCJhY2NlcHRlZEFuc3dlclwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIk1vc3QgcHJvamVjdHMgZm9sbG93IGEgMTItMTYgd2VlayBkZWxpdmVyeSBjeWNsZSwgd2l0aCBmdW5jdGlvbmFsIHByb3RvdHlwZXMgYXZhaWxhYmxlIHdpdGhpbiB0aGUgZmlyc3QgNCB3ZWVrcy4gV2UgdXNlIGFnaWxlIHNwcmludHMgd2l0aCB3ZWVrbHkgZGVtb3Mgc28geW91IHNlZSBwcm9ncmVzcyBjb250aW51b3VzbHkuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkNhbiB5b3UgaW50ZWdyYXRlIHdpdGggb3VyIGV4aXN0aW5nIGxlZ2FjeSBzeXN0ZW1zP1wiLFxuICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiQWJzb2x1dGVseS4gV2Ugc3BlY2lhbGl6ZSBpbiBicmlkZ2luZyBsZWdhY3kgaW5mcmFzdHJ1Y3R1cmUgd2l0aCBtb2Rlcm4gYXJjaGl0ZWN0dXJlcyB0aHJvdWdoIGN1c3RvbSBBUEkgbGF5ZXJzLCBtaWRkbGV3YXJlLCBhbmQgZGF0YSBtaWdyYXRpb24gcGlwZWxpbmVzIC0gd2l0aG91dCBkaXNydXB0aW5nIHlvdXIgY3VycmVudCBvcGVyYXRpb25zLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICBcIm5hbWVcIjogXCJIb3cgZG8geW91IGVuc3VyZSBkYXRhIHNlY3VyaXR5IGFuZCBjb21wbGlhbmNlP1wiLFxuICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiRXZlcnkgc3lzdGVtIGlzIGJ1aWx0IHdpdGggSVNPIDI3MDAxIHNlY3VyaXR5IGNvbnRyb2xzLCBlbmNyeXB0ZWQgZGF0YSBhdCByZXN0IGFuZCBpbiB0cmFuc2l0LCByb2xlLWJhc2VkIGFjY2VzcywgYW5kIGNvbXByZWhlbnNpdmUgYXVkaXQgbG9nZ2luZy4gV2UgYWxzbyBzdXBwb3J0IEdEUFIsIEhJUEFBLCBhbmQgU09DIDIgY29tcGxpYW5jZSByZXF1aXJlbWVudHMuXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyNvcmdhbml6YXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJDeWJhZW0gVGVjaCBQdnQuIEx0ZC5cIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tXCIsXG4gICAgXCJsb2dvXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vYXNzZXRzL2N5YmFlbS1sb2dvLURYODBaY3JZLnBuZ1wiLFxuICAgIFwiZW1haWxcIjogXCJzYWxlc0BjeWJhZW10ZWNoLmNvbVwiLFxuICAgIFwidGVsZXBob25lXCI6IFwiKzkxLTkwMjg1NDEzODNcIixcbiAgICBcImFkZHJlc3NcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIlBvc3RhbEFkZHJlc3NcIixcbiAgICAgIFwic3RyZWV0QWRkcmVzc1wiOiBcIk9mZmljZSAzMDQsIFN1cmF0d2FsYSBNYXJrIFBsYXp6bywgSGluamV3YWRpXCIsXG4gICAgICBcImFkZHJlc3NMb2NhbGl0eVwiOiBcIlB1bmVcIixcbiAgICAgIFwiYWRkcmVzc1JlZ2lvblwiOiBcIk1haGFyYXNodHJhXCIsXG4gICAgICBcInBvc3RhbENvZGVcIjogXCI0MTEwNTdcIixcbiAgICAgIFwiYWRkcmVzc0NvdW50cnlcIjogXCJJTlwiXG4gICAgfSxcbiAgICBcInNhbWVBc1wiOiBbXG4gICAgICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2N5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9jeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0BjeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9jeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8veC5jb20vY3liYWVtdGVjaFwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIkJyZWFkY3J1bWJMaXN0XCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZW50ZXJwcmlzZS1zb2Z0d2FyZSNicmVhZGNydW1iXCIsXG4gICAgXCJpdGVtTGlzdEVsZW1lbnRcIjogW1xuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiAxLFxuICAgICAgICBcIm5hbWVcIjogXCJTb2x1dGlvbnNcIixcbiAgICAgICAgXCJpdGVtXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDIsXG4gICAgICAgIFwibmFtZVwiOiBcIkVudGVycHJpc2UgU29mdHdhcmVcIlxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxufTtcblxuZXhwb3J0IGNvbnN0IHdlYlN5c3RlbXNTZW9EYXRhID0ge1xuICB0aXRsZTogXCJDdXN0b20gV2ViIEFwcGxpY2F0aW9ucyAmIFN5c3RlbSBEZXZlbG9wbWVudCB8IEN5YmFlbSBUZWNoXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkJ1aWxkIHNlY3VyZSwgY29udmVyc2lvbi1mb2N1c2VkIHdlYnNpdGVzLCBlQ29tbWVyY2Ugc3RvcmVzLCBTYWFTIHBsYXRmb3JtcywgbGFuZGluZyBwYWdlcywgYW5kIGN1c3RvbSB3ZWIgc3lzdGVtcyB3aXRoIEN5YmFlbSBUZWNoLlwiLFxuICBjYW5vbmljYWw6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL3dlYi1zeXN0ZW1zXCIsXG4gIGtleXdvcmRzOiBcIndlYiBhcHBsaWNhdGlvbiBkZXZlbG9wbWVudCwgV2ViIFN5c3RlbXMgRGV2ZWxvcG1lbnQsIHdlYiBzeXN0ZW1zIGFyY2hpdGVjdHVyZSwgQ3liYWVtIFdlYiBTeXN0ZW1zLCBjdXN0b20gd2ViIGRldmVsb3BtZW50IGNvbXBhbnksIGNvbnZlcnNpb24gb3B0aW1pemVkIHdlYnNpdGVzLCBlbnRlcnByaXNlIFNhYVMgcGxhdGZvcm1zLCBjdXN0b20gZS1jb21tZXJjZSBhcmNoaXRlY3R1cmUsIGNvcnBvcmF0ZSB3ZWJzaXRlIGRldmVsb3BtZW50IFB1bmUsIGhpZ2ggY29udmVydGluZyBsYW5kaW5nIHBhZ2VzLCBjb3Jwb3JhdGUgQ01TIGRldmVsb3BtZW50LCBmYXN0IGxvYWRpbmcgd2ViIHN5c3RlbXMsIHNjYWxhYmxlIHdlYiBhcHBzXCIsXG4gIG9nVGl0bGU6IFwiV2ViIFN5c3RlbXMgRW5naW5lZXJlZCB0byBDb252ZXJ0IHwgQ3liYWVtIFRlY2ggUmVzZWFyY2ggQ2VudHJlXCIsXG4gIG9nRGVzY3JpcHRpb246IFwiT3ZlciAyMDAgcGxhdGZvcm1zIGxhdW5jaGVkIHdpdGggYW4gYXZlcmFnZSAwLjhzIGxvYWQgdGltZS4gRGlzY292ZXIgbGlnaHRuaW5nLWZhc3QsIHNlY3VyZSwgYW5kIGNvbnZlcnNpb24tb3B0aW1pemVkIHdlYiBwbGF0Zm9ybXMgYnVpbHQgZm9yIEQyQywgQjJCLCBhbmQgQjJDIHNjYWxlLlwiLFxuICB0d2l0dGVyVGl0bGU6IFwiV2ViIFN5c3RlbXMgRW5naW5lZXJlZCB0byBDb252ZXJ0IHwgQ3liYWVtIFRlY2ggUmVzZWFyY2ggQ2VudHJlXCIsXG4gIHR3aXR0ZXJEZXNjcmlwdGlvbjogXCJMaWdodG5pbmctZmFzdCwgY29udmVyc2lvbi1vcHRpbWl6ZWQgd2ViIHBsYXRmb3JtcyBidWlsdCB3aXRoIGVudGVycHJpc2UtZ3JhZGUgc2VjdXJpdHkgYW5kIHN0cmljdCBtaWxlc3RvbmUtZHJpdmVuIGRlbGl2ZXJ5LiBBdmcgbG9hZCB0aW1lOiAwLjggc2Vjb25kcy5cIixcbiAganNvbkxkOiBbXG4gICAge1xuICAgICAgXCJAdHlwZVwiOiBcIldlYlBhZ2VcIixcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL3dlYi1zeXN0ZW1zI3dlYnBhZ2VcIixcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL3dlYi1zeXN0ZW1zXCIsXG4gICAgICBcIm5hbWVcIjogXCJXZWIgU3lzdGVtcyAmIFdlYnNpdGUgRGV2ZWxvcG1lbnQgU2VydmljZXMgfCBDeWJhZW0gVGVjaFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkN5YmFlbSBUZWNoIGlzIGEgbGVhZGluZyB3ZWIgZGV2ZWxvcG1lbnQgY29tcGFueSBkZWxpdmVyaW5nIGN1c3RvbSB3ZWJzaXRlIGRldmVsb3BtZW50IHNlcnZpY2VzLCBoaWdoLXBlcmZvcm1hbmNlIHdlYiBzeXN0ZW1zLCBhbmQgc2NhbGFibGUgV2ViIFN5c3RlbSBTb2x1dGlvbnMuXCIsXG4gICAgICBcIm1haW5FbnRpdHlcIjoge1xuICAgICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy93ZWItc3lzdGVtcyNzZXJ2aWNlXCJcbiAgICAgIH0sXG4gICAgICBcImlzUGFydE9mXCI6IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS8jd2Vic2l0ZVwiXG4gICAgICB9LFxuICAgICAgXCJicmVhZGNydW1iXCI6IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvd2ViLXN5c3RlbXMjYnJlYWRjcnVtYlwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvd2ViLXN5c3RlbXMjc2VydmljZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiV2ViIFN5c3RlbXMgJiBXZWJzaXRlIERldmVsb3BtZW50XCIsXG4gICAgICBcInNlcnZpY2VUeXBlXCI6IFwiV2Vic2l0ZSBEZXZlbG9wbWVudCBTZXJ2aWNlcyAmIFdlYiBTeXN0ZW0gU29sdXRpb25zXCIsXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy93ZWItc3lzdGVtc1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkN5YmFlbSBUZWNoIGlzIGFuIGluZHVzdHJ5LWxlYWRpbmcgd2ViIGRldmVsb3BtZW50IGNvbXBhbnkgc3BlY2lhbGl6aW5nIGluIGVuZC10by1lbmQgd2Vic2l0ZSBkZXZlbG9wbWVudCBzZXJ2aWNlcyBhbmQgcm9idXN0IFdlYiBTeXN0ZW0gU29sdXRpb25zLiBXZSBlbmdpbmVlciBjdXN0b20sIHJlc3BvbnNpdmUsIGFuZCBzZWN1cmUgd2ViIHBsYXRmb3JtcyBvcHRpbWl6ZWQgZm9yIGZhc3QgbG9hZCBzcGVlZHMsIHNlYW1sZXNzIHVzZXIgZXhwZXJpZW5jZSwgYW5kIGhpZ2ggbGVhZCBjb252ZXJzaW9uLiBGcm9tIGNvbXBsZXggZW50ZXJwcmlzZSB3ZWIgYXBwbGljYXRpb25zIHRvIG1vZGVybiBjb3Jwb3JhdGUgcG9ydGFscywgb3VyIHdlYiBkZXZlbG9wbWVudCBjb21wYW55IGJ1aWxkcyBzY2FsYWJsZSBkaWdpdGFsIGFyY2hpdGVjdHVyZSB0YWlsb3JlZCB0byBkcml2ZSBzdXN0YWluYWJsZSBidXNpbmVzcyBncm93dGguXCIsXG4gICAgICBcInByb3ZpZGVyXCI6IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS8jb3JnYW5pemF0aW9uXCJcbiAgICAgIH0sXG4gICAgICBcImFyZWFTZXJ2ZWRcIjoge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUGxhY2VcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiR2xvYmFsXCJcbiAgICAgIH0sXG4gICAgICBcImhhc09mZmVyQ2F0YWxvZ1wiOiB7XG4gICAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL3dlYi1zeXN0ZW1zI3N1YnNlcnZpY2VzXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiQHR5cGVcIjogXCJPZmZlckNhdGFsb2dcIixcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL3dlYi1zeXN0ZW1zI3N1YnNlcnZpY2VzXCIsXG4gICAgICBcIm5hbWVcIjogXCJXZWIgU3lzdGVtIFNvbHV0aW9ucyAmIENhcGFiaWxpdGllc1wiLFxuICAgICAgXCJpdGVtTGlzdEVsZW1lbnRcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgICAgXCJpdGVtT2ZmZXJlZFwiOiB7XG4gICAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ3VzdG9tIFdlYiBBcHBsaWNhdGlvbiBEZXZlbG9wbWVudFwiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNjYWxhYmxlLCBoaWdoLXBlcmZvcm1hbmNlIHdlYiBzeXN0ZW1zIGJ1aWx0IHdpdGggbW9kZXJuIGZyYW1ld29ya3MgYW5kIGNsb3VkLW5hdGl2ZSBhcmNoaXRlY3R1cmUuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJFbnRlcnByaXNlIFBvcnRhbCAmIENNUyBEZXZlbG9wbWVudFwiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNlY3VyZSBjb250ZW50IG1hbmFnZW1lbnQgc3lzdGVtcyBhbmQgY29ycG9yYXRlIHBvcnRhbHMgY3VzdG9taXplZCBmb3Igc2VhbWxlc3MgY29udGVudCBhbmQgZGF0YSBtYW5hZ2VtZW50LlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgICAgXCJpdGVtT2ZmZXJlZFwiOiB7XG4gICAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRS1Db21tZXJjZSBTeXN0ZW0gRW5naW5lZXJpbmdcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJIaWdoLWNvbnZlcnRpbmcgb25saW5lIHN0b3JlIGFyY2hpdGVjdHVyZXMgaW50ZWdyYXRlZCB3aXRoIHNlY3VyZSBwYXltZW50IGdhdGV3YXlzIGFuZCBFUlAgcGxhdGZvcm1zLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgICAgXCJpdGVtT2ZmZXJlZFwiOiB7XG4gICAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiVUkvVVggJiBSZXNwb25zaXZlIFdlYiBEZXNpZ25cIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJVc2VyLWNlbnRyaWMgaW50ZXJmYWNlIGRlc2lnbiBlbnN1cmluZyBvcHRpbWFsIHZpc3VhbCBwZXJmb3JtYW5jZSBhbmQgcmVzcG9uc2l2ZW5lc3MgYWNyb3NzIGRlc2t0b3AgYW5kIG1vYmlsZSBkZXZpY2VzLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcIkB0eXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyNvcmdhbml6YXRpb25cIixcbiAgICAgIFwibmFtZVwiOiBcIkN5YmFlbSBUZWNoIFB2dC4gTHRkLlwiLFxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbVwiLFxuICAgICAgXCJsb2dvXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vYXNzZXRzL2N5YmFlbS1sb2dvLURYODBaY3JZLnBuZ1wiLFxuICAgICAgXCJlbWFpbFwiOiBcInNhbGVzQGN5YmFlbXRlY2guY29tXCIsXG4gICAgICBcInRlbGVwaG9uZVwiOiBcIis5MS05MDI4NTQxMzgzXCIsXG4gICAgICBcImFkZHJlc3NcIjoge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUG9zdGFsQWRkcmVzc1wiLFxuICAgICAgICBcInN0cmVldEFkZHJlc3NcIjogXCJPZmZpY2UgMzA0LCBTdXJhdHdhbGEgTWFyayBQbGF6em8sIEhpbmpld2FkaVwiLFxuICAgICAgICBcImFkZHJlc3NMb2NhbGl0eVwiOiBcIlB1bmVcIixcbiAgICAgICAgXCJhZGRyZXNzUmVnaW9uXCI6IFwiTWFoYXJhc2h0cmFcIixcbiAgICAgICAgXCJwb3N0YWxDb2RlXCI6IFwiNDExMDU3XCIsXG4gICAgICAgIFwiYWRkcmVzc0NvdW50cnlcIjogXCJJTlwiXG4gICAgICB9LFxuICAgICAgXCJzYW1lQXNcIjogW1xuICAgICAgICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2N5YmFlbXRlY2hcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2N5YmFlbXRlY2hcIixcbiAgICAgICAgXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9AY3liYWVtdGVjaFwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9jeWJhZW10ZWNoXCIsXG4gICAgICAgIFwiaHR0cHM6Ly94LmNvbS9jeWJhZW10ZWNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiQHR5cGVcIjogXCJCcmVhZGNydW1iTGlzdFwiLFxuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvd2ViLXN5c3RlbXMjYnJlYWRjcnVtYlwiLFxuICAgICAgXCJpdGVtTGlzdEVsZW1lbnRcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgICAgXCJwb3NpdGlvblwiOiAxLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlNvbHV0aW9uc1wiLFxuICAgICAgICAgIFwiaXRlbVwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9uc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIixcbiAgICAgICAgICBcInBvc2l0aW9uXCI6IDIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiV2ViIFN5c3RlbXNcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59O1xuXG5leHBvcnQgY29uc3QgaXRTdGFmZkF1Z21lbnRhdGlvblNlb0RhdGEgPSB7XG4gIHRpdGxlOiBcIk9mZnNob3JlIElUIFN0YWZmIEF1Z21lbnRhdGlvbiBTZXJ2aWNlcyB8IEN5YmFlbSBUZWNoXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlNjYWxlIHlvdXIgdGVjaCB0ZWFtIGluIDQ4IGhvdXJzIHdpdGggb3VyIElUIHN0YWZmIGF1Z21lbnRhdGlvbiBzZXJ2aWNlcy4gQWNjZXNzIHByZS12ZXR0ZWQgc2VuaW9yIHNvZnR3YXJlIGVuZ2luZWVycywgUUEgbGVhZHMsIGFuZCBjbG91ZCBhcmNoaXRlY3RzLlwiLFxuICBjYW5vbmljYWw6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2l0LXN0YWZmLWF1Z21lbnRhdGlvblwiLFxuICBrZXl3b3JkczogXCJJVCBTdGFmZiBBdWdtZW50YXRpb24gU2VydmljZXMsIFN0YWZmaW5nIFNvbHV0aW9ucywgSGlyZSBEZWRpY2F0ZWQgU29mdHdhcmUgRW5naW5lZXJzLCBJVCBTdGFmZiBBdWdtZW50YXRpb24gQ29tcGFuaWVzLCBPZmZzaG9yZSBJVCBTdGFmZiBBdWdtZW50YXRpb24gQ29tcGFueSwgSVQgc3RhZmYgYXVnbWVudGF0aW9uIFB1bmUsIElUIG91dHNvdXJjaW5nLCByZW1vdGUgSVQgc3BlY2lhbGlzdCwgY29udHJhY3QgSVQgc3RhZmZpbmcsIGRlZGljYXRlZCBJVCByZXNvdXJjZXNcIixcbiAgb2dUaXRsZTogXCJPZmZzaG9yZSBJVCBTdGFmZiBBdWdtZW50YXRpb24gU2VydmljZXMgfCBDeWJhZW0gVGVjaFwiLFxuICBvZ0Rlc2NyaXB0aW9uOiBcIlNjYWxlIHlvdXIgdGVjaCB0ZWFtIGluIDQ4IGhvdXJzIHdpdGggb3VyIElUIHN0YWZmIGF1Z21lbnRhdGlvbiBzZXJ2aWNlcy4gQWNjZXNzIHByZS12ZXR0ZWQgc2VuaW9yIHNvZnR3YXJlIGVuZ2luZWVycywgUUEgbGVhZHMsIGFuZCBjbG91ZCBhcmNoaXRlY3RzLlwiLFxuICB0d2l0dGVyVGl0bGU6IFwiT2Zmc2hvcmUgSVQgU3RhZmYgQXVnbWVudGF0aW9uIFNlcnZpY2VzIHwgQ3liYWVtIFRlY2hcIixcbiAgdHdpdHRlckRlc2NyaXB0aW9uOiBcIlNjYWxlIHlvdXIgdGVjaCB0ZWFtIGluIDQ4IGhvdXJzIHdpdGggb3VyIElUIHN0YWZmIGF1Z21lbnRhdGlvbiBzZXJ2aWNlcy4gQWNjZXNzIHByZS12ZXR0ZWQgc2VuaW9yIHNvZnR3YXJlIGVuZ2luZWVycywgUUEgbGVhZHMsIGFuZCBjbG91ZCBhcmNoaXRlY3RzLlwiLFxuICBqc29uTGQ6IFtcbiAge1xuICAgIFwiQHR5cGVcIjogXCJXZWJQYWdlXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtc3RhZmYtYXVnbWVudGF0aW9uI3dlYnBhZ2VcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1zdGFmZi1hdWdtZW50YXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJPZmZzaG9yZSBJVCBTdGFmZiBBdWdtZW50YXRpb24gU2VydmljZXMgfCBDeWJhZW0gVGVjaFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJTY2FsZSB5b3VyIHRlY2ggdGVhbSBpbiA0OCBob3VycyB3aXRoIG91ciBJVCBzdGFmZiBhdWdtZW50YXRpb24gc2VydmljZXMuIEFjY2VzcyBwcmUtdmV0dGVkIHNlbmlvciBzb2Z0d2FyZSBlbmdpbmVlcnMsIFFBIGxlYWRzLCBhbmQgY2xvdWQgYXJjaGl0ZWN0cy5cIixcbiAgICBcIm1haW5FbnRpdHlcIjoge1xuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtc3RhZmYtYXVnbWVudGF0aW9uI3NlcnZpY2VcIlxuICAgIH0sXG4gICAgXCJpc1BhcnRPZlwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyN3ZWJzaXRlXCJcbiAgICB9LFxuICAgIFwiYnJlYWRjcnVtYlwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1zdGFmZi1hdWdtZW50YXRpb24jYnJlYWRjcnVtYlwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIlNlcnZpY2VcIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1zdGFmZi1hdWdtZW50YXRpb24jc2VydmljZVwiLFxuICAgIFwibmFtZVwiOiBcIklUIFN0YWZmIEF1Z21lbnRhdGlvblwiLFxuICAgIFwic2VydmljZVR5cGVcIjogXCJJVCBTdGFmZiBBdWdtZW50YXRpb24gU2VydmljZXMgJiBUZWNobmljYWwgU3RhZmZpbmdcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1zdGFmZi1hdWdtZW50YXRpb25cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3liYWVtIFRlY2ggc3RhbmRzIGFtb25nIHRvcC10aWVyIElUIHN0YWZmIGF1Z21lbnRhdGlvbiBjb21wYW5pZXMsIG9mZmVyaW5nIGZsZXhpYmxlIElUIHN0YWZmIGF1Z21lbnRhdGlvbiBhbmQgc3BlY2lhbGl6ZWQgSVQgdGVhbSBhdWdtZW50YXRpb24gdG8gc2NhbGUgeW91ciBzb2Z0d2FyZSBkZXZlbG9wbWVudCBhbmQgZW5naW5lZXJpbmcgY2FwYWJpbGl0aWVzIHNlYW1sZXNzbHkuIE91ciBJVCBzdGFmZiBhdWdtZW50YXRpb24gc2VydmljZXMgcHJvdmlkZSBpbnN0YW50IGFjY2VzcyB0byBwcmUtdmV0dGVkIHNvZnR3YXJlIGRldmVsb3BlcnMsIGNsb3VkIGFyY2hpdGVjdHMsIERldk9wcyBzcGVjaWFsaXN0cywgYW5kIGN5YmVyc2VjdXJpdHkgdGFsZW50LiBBcyBhIHRydXN0ZWQgcGFydG5lciBmb3IgZW50ZXJwcmlzZSBJVCBzdGFmZiBhdWcsIHdlIGVuYWJsZSBidXNpbmVzc2VzIHRvIHF1aWNrbHkgcGx1ZyBza2lsbCBnYXBzLCBhY2NlbGVyYXRlIGRlbGl2ZXJ5IHRpbWVsaW5lcywgYW5kIG1haW50YWluIGNvbXBsZXRlIG9wZXJhdGlvbmFsIGNvbnRyb2wgd2l0aCBvbi1kZW1hbmQgdGFsZW50IGludGVncmF0ZWQgZGlyZWN0bHkgaW50byB5b3VyIGV4aXN0aW5nIHdvcmtmbG93cy5cIixcbiAgICBcInByb3ZpZGVyXCI6IHtcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiXG4gICAgfSxcbiAgICBcImFyZWFTZXJ2ZWRcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIlBsYWNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJHbG9iYWxcIlxuICAgIH0sXG4gICAgXCJoYXNPZmZlckNhdGFsb2dcIjoge1xuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtc3RhZmYtYXVnbWVudGF0aW9uI3N1YnNlcnZpY2VzXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiT2ZmZXJDYXRhbG9nXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtc3RhZmYtYXVnbWVudGF0aW9uI3N1YnNlcnZpY2VzXCIsXG4gICAgXCJuYW1lXCI6IFwiSVQgU3RhZmYgQXVnbWVudGF0aW9uIENhcGFiaWxpdGllc1wiLFxuICAgIFwiaXRlbUxpc3RFbGVtZW50XCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgIFwiaXRlbU9mZmVyZWRcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRGVkaWNhdGVkIFNvZnR3YXJlIERldmVsb3BlcnNcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRnVsbC1zdGFjaywgZnJvbnRlbmQsIGJhY2tlbmQsIGFuZCBtb2JpbGUgYXBwIGRldmVsb3BlcnMgc2tpbGxlZCBpbiBtb2Rlcm4gZnJhbWV3b3JrcyBhbmQgbGFuZ3VhZ2VzLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkNsb3VkICYgRGV2T3BzIEVuZ2luZWVyc1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDZXJ0aWZpZWQgQVdTLCBBenVyZSwgQ0kvQ0QgcGlwZWxpbmUsIGFuZCBpbmZyYXN0cnVjdHVyZS1hcy1jb2RlIHNwZWNpYWxpc3RzLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlFBICYgVGVzdCBBdXRvbWF0aW9uIEVuZ2luZWVyc1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNYW51YWwgYW5kIGF1dG9tYXRlZCBRQSB0ZXN0aW5nIGV4cGVydHMgZW5zdXJpbmcgaGlnaC1xdWFsaXR5IHNvZnR3YXJlIHJlbGVhc2VzLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkN5YmVyc2VjdXJpdHkgJiBOZXR3b3JrIFNwZWNpYWxpc3RzXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNlY3VyaXR5IGFuYWx5c3RzLCBWQVBUIHNwZWNpYWxpc3RzLCBhbmQgU09DIG1vbml0b3JpbmcgZXhwZXJ0cy5cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIkZBUVBhZ2VcIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1zdGFmZi1hdWdtZW50YXRpb24jZmFxXCIsXG4gICAgXCJtYWluRW50aXR5XCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkhvdyBxdWlja2x5IGNhbiB5b3UgcGxhY2UgYW4gZW5naW5lZXIgb24gb3VyIHByb2plY3Q/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJXZSBtYWludGFpbiBhIHByZS12ZXR0ZWQgdGFsZW50IHBvb2wuIE1vc3QgcGxhY2VtZW50cyBoYXBwZW4gd2l0aGluIDQ4IGhvdXJzLiBGb3IgaGlnaGx5IHNwZWNpYWxpemVkIHJvbGVzLCB3ZSBjYW4gZGVsaXZlciBjYW5kaWRhdGVzIHdpdGhpbiA1IGJ1c2luZXNzIGRheXMuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkhvdyBkbyB5b3UgZW5zdXJlIHF1YWxpdHkgYW5kIGN1bHR1cmFsIGZpdD9cIixcbiAgICAgICAgXCJhY2NlcHRlZEFuc3dlclwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkV2ZXJ5IGVuZ2luZWVyIHVuZGVyZ29lcyB0ZWNobmljYWwgYXNzZXNzbWVudHMsIHNvZnQtc2tpbGwgZXZhbHVhdGlvbnMsIGFuZCB0cmlhbCBwZXJpb2RzLiBXZSBtYXRjaCBub3QganVzdCBza2lsbHMgYnV0IGNvbW11bmljYXRpb24gc3R5bGUsIHRpbWV6b25lIGFsaWdubWVudCwgYW5kIHRlYW0gZHluYW1pY3MuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIldoYXQgaWYgYW4gZW5naW5lZXIgaXNuJ3QgdGhlIHJpZ2h0IGZpdD9cIixcbiAgICAgICAgXCJhY2NlcHRlZEFuc3dlclwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIldlIG9mZmVyIGEgcmVwbGFjZW1lbnQgZ3VhcmFudGVlLiBJZiBhbiBlbmdpbmVlciBkb2Vzbid0IG1lZXQgeW91ciBleHBlY3RhdGlvbnMgd2l0aGluIHRoZSBmaXJzdCB0d28gd2Vla3MsIHdlIHByb3ZpZGUgYSByZXBsYWNlbWVudCBhdCBubyBhZGRpdGlvbmFsIGNvc3QuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkNhbiB3ZSBjb252ZXJ0IGF1Z21lbnRlZCBzdGFmZiB0byBmdWxsLXRpbWUgaGlyZXM/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJZZXMuIFdlIG9mZmVyIGEgaGlyZS10by1jb252ZXJ0IG1vZGVsIHdpdGggdHJhbnNwYXJlbnQgYnV5b3V0IHRlcm1zLiBNYW55IG9mIG91ciBjbGllbnRzIHRyYW5zaXRpb24gYXVnbWVudGVkIGVuZ2luZWVycyBpbnRvIHBlcm1hbmVudCB0ZWFtIG1lbWJlcnMuXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyNvcmdhbml6YXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJDeWJhZW0gVGVjaCBQdnQuIEx0ZC5cIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tXCIsXG4gICAgXCJsb2dvXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vYXNzZXRzL2N5YmFlbS1sb2dvLURYODBaY3JZLnBuZ1wiLFxuICAgIFwiZW1haWxcIjogXCJzYWxlc0BjeWJhZW10ZWNoLmNvbVwiLFxuICAgIFwidGVsZXBob25lXCI6IFwiKzkxLTkwMjg1NDEzODNcIixcbiAgICBcImFkZHJlc3NcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIlBvc3RhbEFkZHJlc3NcIixcbiAgICAgIFwic3RyZWV0QWRkcmVzc1wiOiBcIk9mZmljZSAzMDQsIFN1cmF0d2FsYSBNYXJrIFBsYXp6bywgSGluamV3YWRpXCIsXG4gICAgICBcImFkZHJlc3NMb2NhbGl0eVwiOiBcIlB1bmVcIixcbiAgICAgIFwiYWRkcmVzc1JlZ2lvblwiOiBcIk1haGFyYXNodHJhXCIsXG4gICAgICBcInBvc3RhbENvZGVcIjogXCI0MTEwNTdcIixcbiAgICAgIFwiYWRkcmVzc0NvdW50cnlcIjogXCJJTlwiXG4gICAgfSxcbiAgICBcInNhbWVBc1wiOiBbXG4gICAgICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2N5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9jeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0BjeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9jeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8veC5jb20vY3liYWVtdGVjaFwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIkJyZWFkY3J1bWJMaXN0XCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtc3RhZmYtYXVnbWVudGF0aW9uI2JyZWFkY3J1bWJcIixcbiAgICBcIml0ZW1MaXN0RWxlbWVudFwiOiBbXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDEsXG4gICAgICAgIFwibmFtZVwiOiBcIlNvbHV0aW9uc1wiLFxuICAgICAgICBcIml0ZW1cIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogMixcbiAgICAgICAgXCJuYW1lXCI6IFwiSVQgU3RhZmYgQXVnbWVudGF0aW9uXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cbn07XG5cbmV4cG9ydCBjb25zdCBpdEF1Z21lbnRhdGlvblNlb0RhdGEgPSB7XG4gIHRpdGxlOiBcIk9mZnNob3JlIElUIFN0YWZmIEF1Z21lbnRhdGlvbiBTZXJ2aWNlcyB8IEN5YmFlbSBUZWNoXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlNjYWxlIHlvdXIgdGVjaCB0ZWFtIGluIDQ4IGhvdXJzIHdpdGggb3VyIElUIHN0YWZmIGF1Z21lbnRhdGlvbiBzZXJ2aWNlcy4gQWNjZXNzIHByZS12ZXR0ZWQgc2VuaW9yIHNvZnR3YXJlIGVuZ2luZWVycywgUUEgbGVhZHMsIGFuZCBjbG91ZCBhcmNoaXRlY3RzLlwiLFxuICBjYW5vbmljYWw6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2l0LXN0YWZmLWF1Z21lbnRhdGlvblwiLFxuICBrZXl3b3JkczogXCJJVCBTdGFmZiBBdWdtZW50YXRpb24gU2VydmljZXMsIFN0YWZmaW5nIFNvbHV0aW9ucywgSGlyZSBEZWRpY2F0ZWQgU29mdHdhcmUgRW5naW5lZXJzLCBJVCBTdGFmZiBBdWdtZW50YXRpb24gQ29tcGFuaWVzLCBPZmZzaG9yZSBJVCBTdGFmZiBBdWdtZW50YXRpb24gQ29tcGFueSwgSVQgc3RhZmYgYXVnbWVudGF0aW9uIFB1bmUsIElUIG91dHNvdXJjaW5nLCByZW1vdGUgSVQgc3BlY2lhbGlzdCwgY29udHJhY3QgSVQgc3RhZmZpbmcsIGRlZGljYXRlZCBJVCByZXNvdXJjZXNcIixcbiAgb2dUaXRsZTogXCJPZmZzaG9yZSBJVCBTdGFmZiBBdWdtZW50YXRpb24gU2VydmljZXMgfCBDeWJhZW0gVGVjaFwiLFxuICBvZ0Rlc2NyaXB0aW9uOiBcIlNjYWxlIHlvdXIgdGVjaCB0ZWFtIGluIDQ4IGhvdXJzIHdpdGggb3VyIElUIHN0YWZmIGF1Z21lbnRhdGlvbiBzZXJ2aWNlcy4gQWNjZXNzIHByZS12ZXR0ZWQgc2VuaW9yIHNvZnR3YXJlIGVuZ2luZWVycywgUUEgbGVhZHMsIGFuZCBjbG91ZCBhcmNoaXRlY3RzLlwiLFxuICB0d2l0dGVyVGl0bGU6IFwiT2Zmc2hvcmUgSVQgU3RhZmYgQXVnbWVudGF0aW9uIFNlcnZpY2VzIHwgQ3liYWVtIFRlY2hcIixcbiAgdHdpdHRlckRlc2NyaXB0aW9uOiBcIlNjYWxlIHlvdXIgdGVjaCB0ZWFtIGluIDQ4IGhvdXJzIHdpdGggb3VyIElUIHN0YWZmIGF1Z21lbnRhdGlvbiBzZXJ2aWNlcy4gQWNjZXNzIHByZS12ZXR0ZWQgc2VuaW9yIHNvZnR3YXJlIGVuZ2luZWVycywgUUEgbGVhZHMsIGFuZCBjbG91ZCBhcmNoaXRlY3RzLlwiLFxuICBqc29uTGQ6IFtcbiAge1xuICAgIFwiQHR5cGVcIjogXCJXZWJQYWdlXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtc3RhZmYtYXVnbWVudGF0aW9uI3dlYnBhZ2VcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1zdGFmZi1hdWdtZW50YXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJPZmZzaG9yZSBJVCBTdGFmZiBBdWdtZW50YXRpb24gU2VydmljZXMgfCBDeWJhZW0gVGVjaFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJTY2FsZSB5b3VyIHRlY2ggdGVhbSBpbiA0OCBob3VycyB3aXRoIG91ciBJVCBzdGFmZiBhdWdtZW50YXRpb24gc2VydmljZXMuIEFjY2VzcyBwcmUtdmV0dGVkIHNlbmlvciBzb2Z0d2FyZSBlbmdpbmVlcnMsIFFBIGxlYWRzLCBhbmQgY2xvdWQgYXJjaGl0ZWN0cy5cIixcbiAgICBcIm1haW5FbnRpdHlcIjoge1xuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtc3RhZmYtYXVnbWVudGF0aW9uI3NlcnZpY2VcIlxuICAgIH0sXG4gICAgXCJpc1BhcnRPZlwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyN3ZWJzaXRlXCJcbiAgICB9LFxuICAgIFwiYnJlYWRjcnVtYlwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1zdGFmZi1hdWdtZW50YXRpb24jYnJlYWRjcnVtYlwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIlNlcnZpY2VcIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1zdGFmZi1hdWdtZW50YXRpb24jc2VydmljZVwiLFxuICAgIFwibmFtZVwiOiBcIklUIFN0YWZmIEF1Z21lbnRhdGlvblwiLFxuICAgIFwic2VydmljZVR5cGVcIjogXCJJVCBTdGFmZiBBdWdtZW50YXRpb24gU2VydmljZXMgJiBUZWNobmljYWwgU3RhZmZpbmdcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1zdGFmZi1hdWdtZW50YXRpb25cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3liYWVtIFRlY2ggc3RhbmRzIGFtb25nIHRvcC10aWVyIElUIHN0YWZmIGF1Z21lbnRhdGlvbiBjb21wYW5pZXMsIG9mZmVyaW5nIGZsZXhpYmxlIElUIHN0YWZmIGF1Z21lbnRhdGlvbiBhbmQgc3BlY2lhbGl6ZWQgSVQgdGVhbSBhdWdtZW50YXRpb24gdG8gc2NhbGUgeW91ciBzb2Z0d2FyZSBkZXZlbG9wbWVudCBhbmQgZW5naW5lZXJpbmcgY2FwYWJpbGl0aWVzIHNlYW1sZXNzbHkuIE91ciBJVCBzdGFmZiBhdWdtZW50YXRpb24gc2VydmljZXMgcHJvdmlkZSBpbnN0YW50IGFjY2VzcyB0byBwcmUtdmV0dGVkIHNvZnR3YXJlIGRldmVsb3BlcnMsIGNsb3VkIGFyY2hpdGVjdHMsIERldk9wcyBzcGVjaWFsaXN0cywgYW5kIGN5YmVyc2VjdXJpdHkgdGFsZW50LiBBcyBhIHRydXN0ZWQgcGFydG5lciBmb3IgZW50ZXJwcmlzZSBJVCBzdGFmZiBhdWcsIHdlIGVuYWJsZSBidXNpbmVzc2VzIHRvIHF1aWNrbHkgcGx1ZyBza2lsbCBnYXBzLCBhY2NlbGVyYXRlIGRlbGl2ZXJ5IHRpbWVsaW5lcywgYW5kIG1haW50YWluIGNvbXBsZXRlIG9wZXJhdGlvbmFsIGNvbnRyb2wgd2l0aCBvbi1kZW1hbmQgdGFsZW50IGludGVncmF0ZWQgZGlyZWN0bHkgaW50byB5b3VyIGV4aXN0aW5nIHdvcmtmbG93cy5cIixcbiAgICBcInByb3ZpZGVyXCI6IHtcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiXG4gICAgfSxcbiAgICBcImFyZWFTZXJ2ZWRcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIlBsYWNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJHbG9iYWxcIlxuICAgIH0sXG4gICAgXCJoYXNPZmZlckNhdGFsb2dcIjoge1xuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtc3RhZmYtYXVnbWVudGF0aW9uI3N1YnNlcnZpY2VzXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiT2ZmZXJDYXRhbG9nXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtc3RhZmYtYXVnbWVudGF0aW9uI3N1YnNlcnZpY2VzXCIsXG4gICAgXCJuYW1lXCI6IFwiSVQgU3RhZmYgQXVnbWVudGF0aW9uIENhcGFiaWxpdGllc1wiLFxuICAgIFwiaXRlbUxpc3RFbGVtZW50XCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgIFwiaXRlbU9mZmVyZWRcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRGVkaWNhdGVkIFNvZnR3YXJlIERldmVsb3BlcnNcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRnVsbC1zdGFjaywgZnJvbnRlbmQsIGJhY2tlbmQsIGFuZCBtb2JpbGUgYXBwIGRldmVsb3BlcnMgc2tpbGxlZCBpbiBtb2Rlcm4gZnJhbWV3b3JrcyBhbmQgbGFuZ3VhZ2VzLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkNsb3VkICYgRGV2T3BzIEVuZ2luZWVyc1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDZXJ0aWZpZWQgQVdTLCBBenVyZSwgQ0kvQ0QgcGlwZWxpbmUsIGFuZCBpbmZyYXN0cnVjdHVyZS1hcy1jb2RlIHNwZWNpYWxpc3RzLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlFBICYgVGVzdCBBdXRvbWF0aW9uIEVuZ2luZWVyc1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNYW51YWwgYW5kIGF1dG9tYXRlZCBRQSB0ZXN0aW5nIGV4cGVydHMgZW5zdXJpbmcgaGlnaC1xdWFsaXR5IHNvZnR3YXJlIHJlbGVhc2VzLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkN5YmVyc2VjdXJpdHkgJiBOZXR3b3JrIFNwZWNpYWxpc3RzXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNlY3VyaXR5IGFuYWx5c3RzLCBWQVBUIHNwZWNpYWxpc3RzLCBhbmQgU09DIG1vbml0b3JpbmcgZXhwZXJ0cy5cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIkZBUVBhZ2VcIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1zdGFmZi1hdWdtZW50YXRpb24jZmFxXCIsXG4gICAgXCJtYWluRW50aXR5XCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkhvdyBxdWlja2x5IGNhbiB5b3UgcGxhY2UgYW4gZW5naW5lZXIgb24gb3VyIHByb2plY3Q/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJXZSBtYWludGFpbiBhIHByZS12ZXR0ZWQgdGFsZW50IHBvb2wuIE1vc3QgcGxhY2VtZW50cyBoYXBwZW4gd2l0aGluIDQ4IGhvdXJzLiBGb3IgaGlnaGx5IHNwZWNpYWxpemVkIHJvbGVzLCB3ZSBjYW4gZGVsaXZlciBjYW5kaWRhdGVzIHdpdGhpbiA1IGJ1c2luZXNzIGRheXMuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkhvdyBkbyB5b3UgZW5zdXJlIHF1YWxpdHkgYW5kIGN1bHR1cmFsIGZpdD9cIixcbiAgICAgICAgXCJhY2NlcHRlZEFuc3dlclwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkV2ZXJ5IGVuZ2luZWVyIHVuZGVyZ29lcyB0ZWNobmljYWwgYXNzZXNzbWVudHMsIHNvZnQtc2tpbGwgZXZhbHVhdGlvbnMsIGFuZCB0cmlhbCBwZXJpb2RzLiBXZSBtYXRjaCBub3QganVzdCBza2lsbHMgYnV0IGNvbW11bmljYXRpb24gc3R5bGUsIHRpbWV6b25lIGFsaWdubWVudCwgYW5kIHRlYW0gZHluYW1pY3MuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIldoYXQgaWYgYW4gZW5naW5lZXIgaXNuJ3QgdGhlIHJpZ2h0IGZpdD9cIixcbiAgICAgICAgXCJhY2NlcHRlZEFuc3dlclwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIldlIG9mZmVyIGEgcmVwbGFjZW1lbnQgZ3VhcmFudGVlLiBJZiBhbiBlbmdpbmVlciBkb2Vzbid0IG1lZXQgeW91ciBleHBlY3RhdGlvbnMgd2l0aGluIHRoZSBmaXJzdCB0d28gd2Vla3MsIHdlIHByb3ZpZGUgYSByZXBsYWNlbWVudCBhdCBubyBhZGRpdGlvbmFsIGNvc3QuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkNhbiB3ZSBjb252ZXJ0IGF1Z21lbnRlZCBzdGFmZiB0byBmdWxsLXRpbWUgaGlyZXM/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJZZXMuIFdlIG9mZmVyIGEgaGlyZS10by1jb252ZXJ0IG1vZGVsIHdpdGggdHJhbnNwYXJlbnQgYnV5b3V0IHRlcm1zLiBNYW55IG9mIG91ciBjbGllbnRzIHRyYW5zaXRpb24gYXVnbWVudGVkIGVuZ2luZWVycyBpbnRvIHBlcm1hbmVudCB0ZWFtIG1lbWJlcnMuXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyNvcmdhbml6YXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJDeWJhZW0gVGVjaCBQdnQuIEx0ZC5cIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tXCIsXG4gICAgXCJsb2dvXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vYXNzZXRzL2N5YmFlbS1sb2dvLURYODBaY3JZLnBuZ1wiLFxuICAgIFwiZW1haWxcIjogXCJzYWxlc0BjeWJhZW10ZWNoLmNvbVwiLFxuICAgIFwidGVsZXBob25lXCI6IFwiKzkxLTkwMjg1NDEzODNcIixcbiAgICBcImFkZHJlc3NcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIlBvc3RhbEFkZHJlc3NcIixcbiAgICAgIFwic3RyZWV0QWRkcmVzc1wiOiBcIk9mZmljZSAzMDQsIFN1cmF0d2FsYSBNYXJrIFBsYXp6bywgSGluamV3YWRpXCIsXG4gICAgICBcImFkZHJlc3NMb2NhbGl0eVwiOiBcIlB1bmVcIixcbiAgICAgIFwiYWRkcmVzc1JlZ2lvblwiOiBcIk1haGFyYXNodHJhXCIsXG4gICAgICBcInBvc3RhbENvZGVcIjogXCI0MTEwNTdcIixcbiAgICAgIFwiYWRkcmVzc0NvdW50cnlcIjogXCJJTlwiXG4gICAgfSxcbiAgICBcInNhbWVBc1wiOiBbXG4gICAgICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2N5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9jeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0BjeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9jeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8veC5jb20vY3liYWVtdGVjaFwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIkJyZWFkY3J1bWJMaXN0XCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtc3RhZmYtYXVnbWVudGF0aW9uI2JyZWFkY3J1bWJcIixcbiAgICBcIml0ZW1MaXN0RWxlbWVudFwiOiBbXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDEsXG4gICAgICAgIFwibmFtZVwiOiBcIlNvbHV0aW9uc1wiLFxuICAgICAgICBcIml0ZW1cIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogMixcbiAgICAgICAgXCJuYW1lXCI6IFwiSVQgU3RhZmYgQXVnbWVudGF0aW9uXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cbn07XG5cbmV4cG9ydCBjb25zdCBtYW5hZ2VkSVRTZW9EYXRhID0ge1xuICB0aXRsZTogXCJFbnRlcnByaXNlIE1hbmFnZWQgSVQgU2VydmljZXMgJiBTdXBwb3J0IHwgQ3liYWVtIFRlY2hcIixcbiAgZGVzY3JpcHRpb246IFwiUmVkdWNlIHRlY2hub2xvZ3kgcmlza3Mgd2l0aCBtYW5hZ2VkIElUIHNlcnZpY2VzLCAyNC83IG1vbml0b3JpbmcsIElUIGdvdmVybmFuY2UsIE1pY3Jvc29mdCAzNjUgbWFuYWdlbWVudCwgYW5kIHByb2FjdGl2ZSBidXNpbmVzcyBzdXBwb3J0LlwiLFxuICBjYW5vbmljYWw6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL21hbmFnZWQtaXQtY2xvdWQtc2VjdXJpdHlcIixcbiAga2V5d29yZHM6IFwiQ3liYWVtIE1hbmFnZWQgSVQsIG1hbmFnZWQgSVQgc2VydmljZXMgUHVuZSwgSVQgcmlzayBnb3Zlcm5hbmNlLCAyNC83IElUIHN1cHBvcnQgUHVuZSwgTWljcm9zb2Z0IDM2NSBhZG1pbmlzdHJhdGlvbiwgR29vZ2xlIFdvcmtzcGFjZSBtYW5hZ2VtZW50LCBlbnRlcnByaXNlIGVtYWlsIG1pZ3JhdGlvbiwgY2xvdWQgdHJhbnNpdGlvbiBzZXJ2aWNlcywgSVQgc2VjdXJpdHkgb3ZlcnNpZ2h0IFB1bmUsIHBhdGNoIG1hbmFnZW1lbnQgc29sdXRpb25zLCBJVCBjb21wbGlhbmNlIGF1ZGl0IHJlYWRpbmVzcywgcHJvZmVzc2lvbmFsIE1TUCBJbmRpYVwiLFxuICBvZ1RpdGxlOiBcIlN0cnVjdHVyZWQgTWFuYWdlZCBJVCBTZXJ2aWNlcyAmIEV4ZWN1dGl2ZSBSaXNrIEdvdmVybmFuY2UgfCBDeWJhZW0gVGVjaFwiLFxuICBvZ0Rlc2NyaXB0aW9uOiBcIldlIGRvblwiLFxuICB0d2l0dGVyVGl0bGU6IFwiU3RydWN0dXJlZCBFbnRlcnByaXNlIE1hbmFnZWQgSVQgU2VydmljZXMgJiBTdXBwb3J0IHwgQ3liYWVtIFRlY2hcIixcbiAgdHdpdHRlckRlc2NyaXB0aW9uOiBcIlR1cm4gSVQgZnJvbSBhbiBvcGVyYXRpb25hbCBsaWFiaWxpdHkgaW50byBhIGNvbXBldGl0aXZlIHN0cmVuZ3RoLiA4eDUgYW5kIDI0eDcgZW50ZXJwcmlzZSBtb25pdG9yaW5nLCBjbGVhciBlc2NhbGF0aW9uIG1hdHJpY2VzLCBhbmQgdG90YWwgY29zdCBwcmVkaWN0YWJpbGl0eS5cIixcbiAganNvbkxkOiBbXG4gICAge1xuICAgICAgXCJAdHlwZVwiOiBcIldlYlBhZ2VcIixcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL21hbmFnZWQtaXQtY2xvdWQtc2VjdXJpdHkjd2VicGFnZVwiLFxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvbWFuYWdlZC1pdC1jbG91ZC1zZWN1cml0eVwiLFxuICAgICAgXCJuYW1lXCI6IFwiTWFuYWdlZCBJVCBTZXJ2aWNlcyAmIElUIFNlY3VyaXR5IE1hbmFnZW1lbnQgfCBDeWJhZW0gVGVjaFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkN5YmFlbSBUZWNoIGlzIGEgdHJ1c3RlZCBtYW5hZ2VkIElUIHNlcnZpY2VzIHByb3ZpZGVyIG9mZmVyaW5nIG1hbmFnZWQgSVQgc3VwcG9ydCBzZXJ2aWNlcywgMjQvNyBJVCBzZWN1cml0eSBtYW5hZ2VtZW50LCBjbG91ZCBtYW5hZ2VkIElUIHNlcnZpY2VzLCBhbmQgbmV0d29yayBzZWN1cml0eSBnb3Zlcm5hbmNlLlwiLFxuICAgICAgXCJtYWluRW50aXR5XCI6IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvbWFuYWdlZC1pdC1jbG91ZC1zZWN1cml0eSNzZXJ2aWNlXCJcbiAgICAgIH0sXG4gICAgICBcImlzUGFydE9mXCI6IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS8jd2Vic2l0ZVwiXG4gICAgICB9LFxuICAgICAgXCJicmVhZGNydW1iXCI6IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvbWFuYWdlZC1pdC1jbG91ZC1zZWN1cml0eSNicmVhZGNydW1iXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9tYW5hZ2VkLWl0LWNsb3VkLXNlY3VyaXR5I3NlcnZpY2VcIixcbiAgICAgIFwibmFtZVwiOiBcIk1hbmFnZWQgSVQgJiBDbG91ZCBTZWN1cml0eSBTZXJ2aWNlc1wiLFxuICAgICAgXCJzZXJ2aWNlVHlwZVwiOiBcIk1hbmFnZWQgSVQgU3VwcG9ydCBTZXJ2aWNlcyAmIElUIFNlY3VyaXR5IE1hbmFnZW1lbnRcIixcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL21hbmFnZWQtaXQtY2xvdWQtc2VjdXJpdHlcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDeWJhZW0gVGVjaCBpcyBhIGxlYWRpbmcgbWFuYWdlZCBJVCBzZXJ2aWNlcyBwcm92aWRlciBhbmQgZGVkaWNhdGVkIG1hbmFnZWQgc2VydmljZSBJVCBwcm92aWRlciBlbmdpbmVlcmVkIHRvIHByb3RlY3QgYW5kIG9wdGltaXplIGVudGVycHJpc2UgZGlnaXRhbCBlY29zeXN0ZW1zLiBPdXIgbWFuYWdlZCBJVCBzdXBwb3J0IHNlcnZpY2VzIGRlbGl2ZXIgZW5kLXRvLWVuZCBtYW5hZ2VkIElUIG5ldHdvcmsgc2VydmljZXMsIGNsb3VkIG1hbmFnZWQgSVQgc2VydmljZXMsIE1pY3Jvc29mdCAzNjUgYWRtaW5pc3RyYXRpb24sIGFuZCBwcm9hY3RpdmUgbWFuYWdlZCBJVCBzZXJ2aWNlIG9mZmVyaW5ncyBmb3IgZ2xvYmFsIGVudGVycHJpc2VzLiBBcyBhIHRvcCBtYW5hZ2VkIElUIHNlY3VyaXR5IHNlcnZpY2VzIHBhcnRuZXIsIHdlIGltcGxlbWVudCByb2J1c3QgSVQgc2VjdXJpdHkgbWFuYWdlbWVudCBmcmFtZXdvcmtzLCBkZXBsb3lpbmcgYW4gYWR2YW5jZWQgSVQgc2VjdXJpdHkgbWFuYWdlbWVudCBzeXN0ZW0gZGVzaWduZWQgZm9yIGNvbXBsZXRlIElUIHNlY3VyaXR5IGFuZCBtYW5hZ2VtZW50LiBCdXNpbmVzc2VzIHNlZWtpbmcgYSBtYW5hZ2VkIElUIHNlcnZpY2VzIHByb3ZpZGVyIG5lYXIgbWUgcmVseSBvbiBvdXIgaW50ZWdyYXRlZCBJVCBzZXJ2aWNlcyBtYW5hZ2VkIHNlcnZpY2VzIG1vZGVsLCB3aGljaCBjb21iaW5lcyBtYW5hZ2VkIElUIHNlcnZpY2VzIHNlY3VyaXR5IHByb3RvY29scywgU09DIG1vbml0b3JpbmcsIGFuZCB6ZXJvLXRydXN0IGRhdGEgcHJvdGVjdGlvbiB0byBkZWxpdmVyIHJlbGlhYmxlLCBlbnRlcnByaXNlLWdyYWRlIG1hbmFnZWQgc2VydmljZXMgSVQgc2VydmljZXMuXCIsXG4gICAgICBcInByb3ZpZGVyXCI6IHtcbiAgICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS8jb3JnYW5pemF0aW9uXCJcbiAgICAgIH0sXG4gICAgICBcImFyZWFTZXJ2ZWRcIjoge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUGxhY2VcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiR2xvYmFsXCJcbiAgICAgIH0sXG4gICAgICBcImhhc09mZmVyQ2F0YWxvZ1wiOiB7XG4gICAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL21hbmFnZWQtaXQtY2xvdWQtc2VjdXJpdHkjc3Vic2VydmljZXNcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyQ2F0YWxvZ1wiLFxuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvbWFuYWdlZC1pdC1jbG91ZC1zZWN1cml0eSNzdWJzZXJ2aWNlc1wiLFxuICAgICAgXCJuYW1lXCI6IFwiTWFuYWdlZCBJVCAmIFNlY3VyaXR5IENvcmUgQ2FwYWJpbGl0aWVzXCIsXG4gICAgICBcIml0ZW1MaXN0RWxlbWVudFwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9hY3RpdmUgMjQvNyBJVCBJbmZyYXN0cnVjdHVyZSBTdXBwb3J0XCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ29udGludW91cyBtb25pdG9yaW5nLCBhdXRvbWF0ZWQgcGF0Y2hpbmcsIGhlbHBkZXNrIHRpY2tldCByZXNvbHV0aW9uLCBhbmQgZGV2aWNlIGxpZmVjeWNsZSBtYW5hZ2VtZW50LlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgICAgXCJpdGVtT2ZmZXJlZFwiOiB7XG4gICAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSVQgU2VjdXJpdHkgJiBTT0MgTW9uaXRvcmluZ1wiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkVuZHBvaW50IHByb3RlY3Rpb24sIFNPQyB0aHJlYXQgaHVudGluZywgdnVsbmVyYWJpbGl0eSBhc3Nlc3NtZW50cyAoVkFQVCksIGFuZCB6ZXJvLXRydXN0IGFjY2VzcyBjb250cm9sLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgICAgXCJpdGVtT2ZmZXJlZFwiOiB7XG4gICAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2xvdWQgTWFuYWdlZCBTZXJ2aWNlcyAmIE1pZ3JhdGlvblwiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFXUywgQXp1cmUsIGFuZCBIeWJyaWQgQ2xvdWQgaW5mcmFzdHJ1Y3R1cmUgbW9uaXRvcmluZywgbWlncmF0aW9uIGV4ZWN1dGlvbiwgYW5kIGNvc3Qgb3B0aW1pemF0aW9uLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgICAgXCJpdGVtT2ZmZXJlZFwiOiB7XG4gICAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWljcm9zb2Z0IDM2NSAmIEVtYWlsIE1hbmFnZW1lbnRcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUZW5hbnQgZ292ZXJuYW5jZSwgbGljZW5zZSBvcHRpbWl6YXRpb24sIHNlY3VyaXR5IHBvbGljeSBlbmZvcmNlbWVudCwgYW5kIHJpc2stZnJlZSBlbWFpbCBtaWdyYXRpb24gc2VydmljZXMuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJNYW5hZ2VkIE5ldHdvcmsgU2VydmljZXNcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZWN1cmUgU0QtV0FOIHNldHVwLCBmaXJld2FsbCBtYWludGVuYW5jZSwgVlBOIGFjY2VzcyBtYW5hZ2VtZW50LCBhbmQgbmV0d29yayB0cmFmZmljIG1vbml0b3JpbmcuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiQHR5cGVcIjogXCJGQVFQYWdlXCIsXG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9tYW5hZ2VkLWl0LWNsb3VkLXNlY3VyaXR5I2ZhcVwiLFxuICAgICAgXCJtYWluRW50aXR5XCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIldoYXQgYXJlIE1hbmFnZWQgSVQgU2VydmljZXM/XCIsXG4gICAgICAgICAgXCJhY2NlcHRlZEFuc3dlclwiOiB7XG4gICAgICAgICAgICBcIkB0eXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCJNYW5hZ2VkIElUIFNlcnZpY2VzIHByb3ZpZGUgcHJvYWN0aXZlIG1vbml0b3JpbmcsIHN1cHBvcnQsIHNlY3VyaXR5IG92ZXJzaWdodCwgYW5kIGluZnJhc3RydWN0dXJlIGdvdmVybmFuY2UgdG8gcmVkdWNlIGRvd250aW1lIGFuZCBjeWJlcnNlY3VyaXR5IHJpc2tzLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiV2hhdCBpcyBpbmNsdWRlZCBpbiBNaWNyb3NvZnQgMzY1IG1hbmFnZW1lbnQ/XCIsXG4gICAgICAgICAgXCJhY2NlcHRlZEFuc3dlclwiOiB7XG4gICAgICAgICAgICBcIkB0eXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCJMaWNlbnNlIG9wdGltaXphdGlvbiwgc2VjdXJpdHkgY29uZmlndXJhdGlvbiwgbW9uaXRvcmluZywgdXNlciBsaWZlY3ljbGUgbWFuYWdlbWVudCwgYW5kIGNvbXBsaWFuY2UgZ292ZXJuYW5jZS5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkhvdyBtdWNoIGRvIE1hbmFnZWQgSVQgU2VydmljZXMgY29zdD9cIixcbiAgICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcbiAgICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlByaWNpbmcgZGVwZW5kcyBvbiBjb21wYW55IHNpemUsIGluZnJhc3RydWN0dXJlIGNvbXBsZXhpdHksIHN1cHBvcnQgY292ZXJhZ2UgaG91cnMsIGFuZCBzZWN1cml0eSByZXF1aXJlbWVudHMuIEN5YmFlbSBwcm92aWRlcyBjdXN0b21pemVkIHByb3Bvc2FscyBhZnRlciBhc3Nlc3NtZW50LlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiV2h5IGRvZXMgYSBjb21wYW55IG5lZWQgMjQvNyBJVCBzdXBwb3J0P1wiLFxuICAgICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiQnVzaW5lc3NlcyB0aGF0IHJlbHkgb24gZGlnaXRhbCBpbmZyYXN0cnVjdHVyZSBuZWVkIGNvbnRpbnVvdXMgbW9uaXRvcmluZyB0byBwcmV2ZW50IGRvd250aW1lLCBzZWN1cml0eSBpbmNpZGVudHMsIGFuZCBvcGVyYXRpb25hbCBkaXNydXB0aW9uLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSG93IGRvIEVtYWlsIE1pZ3JhdGlvbiBTZXJ2aWNlcyByZWR1Y2Ugcmlzaz9cIixcbiAgICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcbiAgICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlByb2Zlc3Npb25hbCBtaWdyYXRpb24gZW5zdXJlcyBkYXRhIGludGVncml0eSwgc2VjdXJpdHkgY29tcGxpYW5jZSwgbWluaW1hbCBkb3dudGltZSwgYW5kIHBvc3QtdHJhbnNpdGlvbiBzdGFiaWxpemF0aW9uLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcIkB0eXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyNvcmdhbml6YXRpb25cIixcbiAgICAgIFwibmFtZVwiOiBcIkN5YmFlbSBUZWNoIFB2dC4gTHRkLlwiLFxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbVwiLFxuICAgICAgXCJsb2dvXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vYXNzZXRzL2N5YmFlbS1sb2dvLURYODBaY3JZLnBuZ1wiLFxuICAgICAgXCJlbWFpbFwiOiBcInNhbGVzQGN5YmFlbXRlY2guY29tXCIsXG4gICAgICBcInRlbGVwaG9uZVwiOiBcIis5MS05MDI4NTQxMzgzXCIsXG4gICAgICBcImFkZHJlc3NcIjoge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUG9zdGFsQWRkcmVzc1wiLFxuICAgICAgICBcInN0cmVldEFkZHJlc3NcIjogXCJPZmZpY2UgMzA0LCBTdXJhdHdhbGEgTWFyayBQbGF6em8sIEhpbmpld2FkaVwiLFxuICAgICAgICBcImFkZHJlc3NMb2NhbGl0eVwiOiBcIlB1bmVcIixcbiAgICAgICAgXCJhZGRyZXNzUmVnaW9uXCI6IFwiTWFoYXJhc2h0cmFcIixcbiAgICAgICAgXCJwb3N0YWxDb2RlXCI6IFwiNDExMDU3XCIsXG4gICAgICAgIFwiYWRkcmVzc0NvdW50cnlcIjogXCJJTlwiXG4gICAgICB9LFxuICAgICAgXCJzYW1lQXNcIjogW1xuICAgICAgICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2N5YmFlbXRlY2hcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2N5YmFlbXRlY2hcIixcbiAgICAgICAgXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9AY3liYWVtdGVjaFwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9jeWJhZW10ZWNoXCIsXG4gICAgICAgIFwiaHR0cHM6Ly94LmNvbS9jeWJhZW10ZWNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiQHR5cGVcIjogXCJCcmVhZGNydW1iTGlzdFwiLFxuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvbWFuYWdlZC1pdC1jbG91ZC1zZWN1cml0eSNicmVhZGNydW1iXCIsXG4gICAgICBcIml0ZW1MaXN0RWxlbWVudFwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIixcbiAgICAgICAgICBcInBvc2l0aW9uXCI6IDEsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiU29sdXRpb25zXCIsXG4gICAgICAgICAgXCJpdGVtXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICAgIFwicG9zaXRpb25cIjogMixcbiAgICAgICAgICBcIm5hbWVcIjogXCJNYW5hZ2VkIElUICYgQ2xvdWQgU2VjdXJpdHlcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59O1xuXG5leHBvcnQgY29uc3QgZGlnaXRhbEdyb3d0aFNlb0RhdGEgPSB7XG4gIHRpdGxlOiBcIkRpZ2l0YWwgTWFya2V0aW5nICYgQjJCIExlYWQgR2VuZXJhdGlvbiB8IEN5YmFlbSBUZWNoXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkdyb3cgcXVhbGlmaWVkIGxlYWRzIGFuZCByZXZlbnVlIHdpdGggb3VyIGVuZC10by1lbmQgU0VPLCBQUEMsIHBlcmZvcm1hbmNlIG1hcmtldGluZywgYW5kIEIyQiBkaWdpdGFsIGdyb3d0aCBzb2x1dGlvbnMuXCIsXG4gIGNhbm9uaWNhbDogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZGlnaXRhbC1yZXZlbnVlLWdyb3d0aFwiLFxuICBrZXl3b3JkczogXCJEaWdpdGFsIE1hcmtldGluZyBBZ2VuY3kgaW4gSW5kaWEsIERpZ2l0YWwgTWFya2V0aW5nIENvbXBhbnkgaW4gSW5kaWEsIERpZ2l0YWwgTWFya2V0aW5nIFNlcnZpY2VzLCBTRU8gQWdlbmN5LCBQUEMgQWRzIEFnZW5jeSwgU29jaWFsIE1lZGlhIE1hcmtldGluZywgRW1haWwgTWFya2V0aW5nLCBMZWFkIEdlbmVyYXRpb24sIGRpZ2l0YWwgbWFya2V0aW5nIHNlcnZpY2VzIFB1bmUsIFNFTyBzZXJ2aWNlcyBQdW5lLCBCMkIgZGlnaXRhbCBncm93dGgsIGNvbnZlcnNpb24gcmF0ZSBvcHRpbWl6YXRpb24gUHVuZSwgQ1JPIHNlcnZpY2VzLCBMaW5rZWRJbiBleGVjdXRpdmUgYnJhbmRpbmcsIEIyQiBsZWFkIGdlbmVyYXRpb24gYWdlbmN5LCBvcmdhbmljIHNlYXJjaCBkb21pbmFuY2UsIGNvcnBvcmF0ZSB0aG91Z2h0IGxlYWRlcnNoaXAsIGV4ZWN1dGl2ZSBwcmVzZW5jZSBtYXJrZXRpbmcsIHNvY2lhbCBtZWRpYSBtYXJrZXRpbmcgUHVuZSwgUFBDIGFnZW5jeSBQdW5lLCBHb29nbGUgQWRzIG1hbmFnZW1lbnQsIHBlcmZvcm1hbmNlIG1hcmtldGluZywgQ3liYWVtIFRlY2ggZGlnaXRhbCBtYXJrZXRpbmdcIixcbiAgb2dUaXRsZTogXCJEaWdpdGFsIE1hcmtldGluZyAmIEIyQiBHcm93dGggU2VydmljZXMgaW4gUHVuZSB8IEN5YmFlbSBUZWNoXCIsXG4gIG9nRGVzY3JpcHRpb246IFwiUmVzdWx0LWRyaXZlbiBTRU8sIENSTywgc29jaWFsIG1lZGlhLCBQUEMsIGFuZCBleGVjdXRpdmUgTGlua2VkSW4gc3RyYXRlZ2llcyBmcm9tIEN5YmFlbSBUZWNoIHRvIHR1cm4geW91ciBvbmxpbmUgcHJlc2VuY2UgaW50byByZXZlbnVlIGFuZCBxdWFsaWZpZWQgQjJCIGxlYWRzLlwiLFxuICB0d2l0dGVyVGl0bGU6IFwiRGlnaXRhbCBNYXJrZXRpbmcgJiBCMkIgR3Jvd3RoIFNlcnZpY2VzIGluIFB1bmUgfCBDeWJhZW0gVGVjaFwiLFxuICB0d2l0dGVyRGVzY3JpcHRpb246IFwiRG9taW5hdGUgc2VhcmNoIHJlc3VsdHMsIG9wdGltaXplIGNvbnZlcnNpb24gZnVubmVscywgYW5kIHNjYWxlIGV4ZWN1dGl2ZSB0aG91Z2h0IGxlYWRlcnNoaXAgdG8gZ3JvdyB5b3VyIHJldmVudWUgb25saW5lLlwiLFxuICBqc29uTGQ6IFtcbiAge1xuICAgIFwiQHR5cGVcIjogXCJXZWJQYWdlXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZGlnaXRhbC1yZXZlbnVlLWdyb3d0aCN3ZWJwYWdlXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZGlnaXRhbC1yZXZlbnVlLWdyb3d0aFwiLFxuICAgIFwibmFtZVwiOiBcIkRpZ2l0YWwgUmV2ZW51ZSBHcm93dGggJiBQZXJmb3JtYW5jZSBNYXJrZXRpbmcgU2VydmljZXMgfCBDeWJhZW0gVGVjaFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJDeWJhZW0gVGVjaCBpcyBhIHRvcCBkaWdpdGFsIGdyb3d0aCBhZ2VuY3kgYW5kIHBlcmZvcm1hbmNlIG1hcmtldGluZyBhZ2VuY3kgZGVsaXZlcmluZyBkYXRhLWRyaXZlbiBkaWdpdGFsIG1hcmtldGluZyBzZXJ2aWNlcywgU0VPLCBQUEMsIGFuZCBlY29tbWVyY2UgbWFya2V0aW5nLlwiLFxuICAgIFwibWFpbkVudGl0eVwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9kaWdpdGFsLXJldmVudWUtZ3Jvd3RoI3NlcnZpY2VcIlxuICAgIH0sXG4gICAgXCJpc1BhcnRPZlwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyN3ZWJzaXRlXCJcbiAgICB9LFxuICAgIFwiYnJlYWRjcnVtYlwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9kaWdpdGFsLXJldmVudWUtZ3Jvd3RoI2JyZWFkY3J1bWJcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZGlnaXRhbC1yZXZlbnVlLWdyb3d0aCNzZXJ2aWNlXCIsXG4gICAgXCJuYW1lXCI6IFwiRGlnaXRhbCBSZXZlbnVlIEdyb3d0aCBTZXJ2aWNlc1wiLFxuICAgIFwic2VydmljZVR5cGVcIjogXCJEaWdpdGFsIE1hcmtldGluZyBTZXJ2aWNlcyAmIFBlcmZvcm1hbmNlIE1hcmtldGluZ1wiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2RpZ2l0YWwtcmV2ZW51ZS1ncm93dGhcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3liYWVtIFRlY2ggaXMgYSBwcmVtaWVyIGRpZ2l0YWwgbWFya2V0aW5nIGNvbXBhbnkgYW5kIGxlYWRpbmcgZGlnaXRhbCBncm93dGggYWdlbmN5IHJlY29nbml6ZWQgYW1vbmcgdGhlIGJlc3QgbWFya2V0aW5nIGFnZW5jaWVzIGFuZCB0b3AgbWFya2V0aW5nIGFnZW5jeSBwcm92aWRlcnMuIEFzIGEgZnVsbC1zZXJ2aWNlIHBlcmZvcm1hbmNlIG1hcmtldGluZyBhZ2VuY3ksIG1lZGlhIG1hcmtldGluZyBhZ2VuY3ksIGFuZCBwcmVtaWVyIGRpZ2l0YWwgYWdlbmN5LCB3ZSBkZWxpdmVyIHJlc3VsdHMtZHJpdmVuIHBlcmZvcm1hbmNlIG1hcmtldGluZyBzZXJ2aWNlcywgaGlnaC1ST0kgcGVyZm9ybWFuY2UgbWFya2V0aW5nIGNvbXBhbnkgc3RyYXRlZ2llcywgYW5kIGVuZC10by1lbmQgZGlnaXRhbCBtYXJrZXRpbmcgc2VydmljZXMuIEZvciBidXNpbmVzc2VzIHNlYXJjaGluZyBmb3IgYSBtYXJrZXRpbmcgYWdlbmN5IG5lYXIgbWUgb3Igc3BlY2lhbGl6ZWQgcGVyZm9ybWFuY2UgbWFya2V0aW5nIGFnZW5jaWVzLCBDeWJhZW0gVGVjaCBleGNlbHMgaW4gZGlnaXRhbCBtYXJrZXRpbmcgZm9yIHJlYWwgZXN0YXRlLCBkaWdpdGFsIG1hcmtldGluZyBmb3IgZWNvbW1lcmNlLCBhbmQgY29tcGxldGUgZGlnaXRhbCBlY29tbWVyY2UgbWFya2V0aW5nIHN0cmF0ZWdpZXMuIFdlIGludGVncmF0ZSBlY29tbWVyY2UgbWFya2V0aW5nIGRpZ2l0YWwgc3lzdGVtcyB3aXRoIGFkdmFuY2VkIFNFTywgQjJCIGxlYWQgZ2VuZXJhdGlvbiwgQ1JPLCBhbmQgbWFya2V0aW5nIGF1dG9tYXRpb24gdG8gYnVpbGQgcHJlZGljdGFibGUgcmV2ZW51ZSBlbmdpbmVzLlwiLFxuICAgIFwicHJvdmlkZXJcIjoge1xuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS8jb3JnYW5pemF0aW9uXCJcbiAgICB9LFxuICAgIFwiYXJlYVNlcnZlZFwiOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiUGxhY2VcIixcbiAgICAgIFwibmFtZVwiOiBcIkdsb2JhbFwiXG4gICAgfSxcbiAgICBcImhhc09mZmVyQ2F0YWxvZ1wiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9kaWdpdGFsLXJldmVudWUtZ3Jvd3RoI3N1YnNlcnZpY2VzXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiT2ZmZXJDYXRhbG9nXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZGlnaXRhbC1yZXZlbnVlLWdyb3d0aCNzdWJzZXJ2aWNlc1wiLFxuICAgIFwibmFtZVwiOiBcIkRpZ2l0YWwgUmV2ZW51ZSAmIEdyb3d0aCBTb2x1dGlvbnNcIixcbiAgICBcIml0ZW1MaXN0RWxlbWVudFwiOiBbXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlBlcmZvcm1hbmNlIE1hcmtldGluZyAmIFBhaWQgQWRzXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRhdGEtZHJpdmVuIEdvb2dsZSBBZHMsIE1ldGEgQWRzLCBhbmQgTGlua2VkSW4gQWRzIGNhbXBhaWducyBmb2N1c2VkIG9uIFJPSSBhbmQgbG93ZXIgQ1BMLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlNlYXJjaCBFbmdpbmUgT3B0aW1pemF0aW9uIChTRU8gJiBHRU8pXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFkdmFuY2VkIEFFTywgR0VPLCBhbmQgU1hPIHN0cmF0ZWdpZXMgdGFyZ2V0aW5nIGhpZ2gtaW50ZW50IGtleXdvcmRzIHRvIGRyaXZlIG9yZ2FuaWMgcmV2ZW51ZS5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICAgICAgXCJpdGVtT2ZmZXJlZFwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIlNlcnZpY2VcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJFLUNvbW1lcmNlICYgRDJDIEdyb3d0aCBNYXJrZXRpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRnVsbC1mdW5uZWwgZGlnaXRhbCBlY29tbWVyY2UgbWFya2V0aW5nLCByZXRlbnRpb24gYXV0b21hdGlvbiwgYW5kIGNvbnZlcnNpb24gcmF0ZSBvcHRpbWl6YXRpb24uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgIFwiaXRlbU9mZmVyZWRcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQjJCIExlYWQgR2VuZXJhdGlvbiAmIExpbmtlZEluIEF1dGhvcml0eVwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBY2NvdW50LWJhc2VkIG1hcmtldGluZywgZGVjaXNpb24tbWFrZXIgbGVhZCBhY3F1aXNpdGlvbiwgYW5kIEIyQiBwaXBlbGluZSBkZXZlbG9wbWVudC5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICAgICAgXCJpdGVtT2ZmZXJlZFwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIlNlcnZpY2VcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJNYXJrZXRpbmcgQXV0b21hdGlvbiAmIENSTSBJbnRlZ3JhdGlvblwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJIdWJTcG90LCBab2hvLCBhbmQgU2FsZXNmb3JjZSBDUk0gaW50ZWdyYXRpb24sIGxlYWQgc2NvcmluZywgYW5kIGF1dG9tYXRlZCBlbWFpbCBudXJ0dXJpbmcuXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJGQVFQYWdlXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZGlnaXRhbC1yZXZlbnVlLWdyb3d0aCNmYXFcIixcbiAgICBcIm1haW5FbnRpdHlcIjogW1xuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiV2hhdCBtYWtlcyBDeWJhZW1UZWNoIGRpZmZlcmVudCBmcm9tIG90aGVyIGRpZ2l0YWwgbWFya2V0aW5nIGFnZW5jaWVzIGluIEluZGlhP1wiLFxuICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiQ3liYWVtVGVjaCBpcyBub3QganVzdCBhIGRpZ2l0YWwgbWFya2V0aW5nIGFnZW5jeSBpbiBJbmRpYSAtIHdlIG9wZXJhdGUgYXMgYSBEaWdpdGFsIFJldmVudWUgJiBHcm93dGggRW5naW5lZXJpbmcgcGFydG5lci4gSW5zdGVhZCBvZiBvZmZlcmluZyBpc29sYXRlZCBzZXJ2aWNlcyBsaWtlIFNFTyBvciBHb29nbGUgQWRzLCB3ZSBpbnRlZ3JhdGUgU0VPLCBQZXJmb3JtYW5jZSBNYXJrZXRpbmcsIENvbnZlcnNpb24gUmF0ZSBPcHRpbWl6YXRpb24gKENSTyksIExpbmtlZEluIE1hcmtldGluZywgYW5kIE1hcmtldGluZyBBdXRvbWF0aW9uIGludG8gb25lIG1lYXN1cmFibGUgcmV2ZW51ZSBzeXN0ZW0uIE91ciBmb2N1cyBpcyBST0ksIGxlYWQgcXVhbGl0eSwgYW5kIHByZWRpY3RhYmxlIHBpcGVsaW5lIGdyb3d0aC5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiRG8geW91IHByb3ZpZGUgQjJCIGxlYWQgZ2VuZXJhdGlvbiBzZXJ2aWNlcz9cIixcbiAgICAgICAgXCJhY2NlcHRlZEFuc3dlclwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIlllcy4gV2Ugc3BlY2lhbGl6ZSBpbiBCMkIgbGVhZCBnZW5lcmF0aW9uIHNlcnZpY2VzIGluIEluZGlhIHVzaW5nIGFkdmFuY2VkIFNFTyAoQUVPLCBHRU8sIFNYTyksIExpbmtlZEluIG1hcmtldGluZyBmb3IgQjJCLCBwZXJmb3JtYW5jZS1kcml2ZW4gR29vZ2xlIEFkcyBtYW5hZ2VtZW50LCBhbmQgbWFya2V0aW5nIGF1dG9tYXRpb24gd29ya2Zsb3dzLiBXZSBmb2N1cyBvbiBnZW5lcmF0aW5nIGRlY2lzaW9uLW1ha2VyIGxlYWRzLCBub3QganVzdCB0cmFmZmljLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICBcIm5hbWVcIjogXCJIb3cgZG8geW91IHJlZHVjZSBjb3N0IHBlciBsZWFkIChDUEwpP1wiLFxuICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiV2UgcmVkdWNlIGNvc3QgcGVyIGxlYWQgYnkgdGFyZ2V0aW5nIGhpZ2gtaW50ZW50IGtleXdvcmRzIHRocm91Z2ggU0VPIHNlcnZpY2VzLCBvcHRpbWl6aW5nIGxhbmRpbmcgcGFnZXMgdXNpbmcgQ1JPLCBpbXByb3ZpbmcgYWQgdGFyZ2V0aW5nIGluIEdvb2dsZSBBZHMgYW5kIExpbmtlZEluIEFkcywgaW1wbGVtZW50aW5nIHJldGFyZ2V0aW5nIHN0cmF0ZWdpZXMsIGFuZCBhdXRvbWF0aW5nIGxlYWQgbnVydHVyaW5nLiBUaGlzIGVuc3VyZXMgYmV0dGVyIGxlYWQgcXVhbGl0eSBhbmQgaGlnaGVyIGNvbnZlcnNpb24gcmF0ZXMuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkRvIHlvdSBvZmZlciBwZXJmb3JtYW5jZSBtYXJrZXRpbmcgc2VydmljZXMgZm9yIEQyQyBicmFuZHM/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJZZXMuIEFzIGEgcGVyZm9ybWFuY2UgbWFya2V0aW5nIGFnZW5jeSBpbiBJbmRpYSwgd2UgcHJvdmlkZSBmdWxsLWZ1bm5lbCBzdHJhdGVnaWVzIGZvciBEMkMgYnJhbmRzIGluY2x1ZGluZyBHb29nbGUgQWRzICYgTWV0YSBBZHMgbWFuYWdlbWVudCwgRS1jb21tZXJjZSBTRU8sIENvbnZlcnNpb24gcmF0ZSBvcHRpbWl6YXRpb24sIEN1c3RvbWVyIHJldGVudGlvbiBhdXRvbWF0aW9uLCBhbmQgQWR2YW5jZWQgYW5hbHl0aWNzIGFuZCBhdHRyaWJ1dGlvbiB0cmFja2luZy4gT3VyIGdvYWwgaXMgc3VzdGFpbmFibGUgc2NhbGluZyB3aXRoIGltcHJvdmVkIFJPQVMgYW5kIGxvd2VyIENBQy5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiV2hhdCBpbmR1c3RyaWVzIGRvIHlvdSB3b3JrIHdpdGg/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJXZSB3b3JrIHdpdGggSVQgJiBTYWFTIENvbXBhbmllcywgTWFudWZhY3R1cmluZyAmIEluZHVzdHJpYWwgQnVzaW5lc3NlcywgUmVhbCBFc3RhdGUgRGV2ZWxvcGVycywgRWR1Y2F0aW9uICYgRWRUZWNoLCBIZWFsdGhjYXJlICYgQ2xpbmljcywgRS1jb21tZXJjZSAmIEQyQyBCcmFuZHMsIGFuZCBDb25zdWx0YW50cyAmIFByb2Zlc3Npb25hbCBTZXJ2aWNlcy5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiRG8geW91IHByb3ZpZGUgbWFya2V0aW5nIGF1dG9tYXRpb24gc2VydmljZXM/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJZZXMuIFdlIHByb3ZpZGUgbWFya2V0aW5nIGF1dG9tYXRpb24gc2VydmljZXMgaW5jbHVkaW5nIENSTSBpbnRlZ3JhdGlvbiAoWm9obywgSHViU3BvdCwgU2FsZXNmb3JjZSksIExlYWQgc2NvcmluZywgRW1haWwgd29ya2Zsb3dzLCBBYmFuZG9uZWQgY2FydCBhdXRvbWF0aW9uLCBTYWxlcyBmdW5uZWwgYXV0b21hdGlvbiwgYW5kIEN1c3RvbWVyIHJldGVudGlvbiBjYW1wYWlnbnMuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkhvdyBsb25nIGRvZXMgaXQgdGFrZSB0byBzZWUgcmVzdWx0cz9cIixcbiAgICAgICAgXCJhY2NlcHRlZEFuc3dlclwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIlNFTyBzZXJ2aWNlcyB0eXBpY2FsbHkgc2hvdyBtZWFzdXJhYmxlIGltcHJvdmVtZW50cyB3aXRoaW4gMy02IG1vbnRocy4gUGVyZm9ybWFuY2UgbWFya2V0aW5nIGNhbXBhaWducyBjYW4gZ2VuZXJhdGUgbGVhZHMgd2l0aGluIHRoZSBmaXJzdCAzMC02MCBkYXlzLiBIb3dldmVyLCBvdXIgZm9jdXMgaXMgbG9uZy10ZXJtIHJldmVudWUgc3RhYmlsaXR5LCBub3Qgc2hvcnQtdGVybSBzcGlrZXMuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkRvIHlvdSBvZmZlciBhIGZyZWUgZGlnaXRhbCBncm93dGggYXVkaXQ/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJZZXMuIFdlIG9mZmVyIGEgRnJlZSBEaWdpdGFsIEdyb3d0aCBBdWRpdCB0aGF0IGluY2x1ZGVzIFNFTyBhbmFseXNpcywgUGFpZCBhZCBwZXJmb3JtYW5jZSByZXZpZXcsIENvbnZlcnNpb24gZ2FwIGFuYWx5c2lzLCBMaW5rZWRJbiBhdXRob3JpdHkgYXNzZXNzbWVudCwgYW5kIEF1dG9tYXRpb24gb3Bwb3J0dW5pdGllcy4gWW91IGNhbiBib29rIGl0IGRpcmVjdGx5IGZyb20gb3VyIGxhbmRpbmcgcGFnZS5cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiLFxuICAgIFwibmFtZVwiOiBcIkN5YmFlbSBUZWNoIFB2dC4gTHRkLlwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb21cIixcbiAgICBcImxvZ29cIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9hc3NldHMvY3liYWVtLWxvZ28tRFg4MFpjclkucG5nXCIsXG4gICAgXCJlbWFpbFwiOiBcInNhbGVzQGN5YmFlbXRlY2guY29tXCIsXG4gICAgXCJ0ZWxlcGhvbmVcIjogXCIrOTEtOTAyODU0MTM4M1wiLFxuICAgIFwiYWRkcmVzc1wiOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiUG9zdGFsQWRkcmVzc1wiLFxuICAgICAgXCJzdHJlZXRBZGRyZXNzXCI6IFwiT2ZmaWNlIDMwNCwgU3VyYXR3YWxhIE1hcmsgUGxhenpvLCBIaW5qZXdhZGlcIixcbiAgICAgIFwiYWRkcmVzc0xvY2FsaXR5XCI6IFwiUHVuZVwiLFxuICAgICAgXCJhZGRyZXNzUmVnaW9uXCI6IFwiTWFoYXJhc2h0cmFcIixcbiAgICAgIFwicG9zdGFsQ29kZVwiOiBcIjQxMTA1N1wiLFxuICAgICAgXCJhZGRyZXNzQ291bnRyeVwiOiBcIklOXCJcbiAgICB9LFxuICAgIFwic2FtZUFzXCI6IFtcbiAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvY3liYWVtdGVjaFwiLFxuICAgICAgXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2N5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vQGN5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2N5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly94LmNvbS9jeWJhZW10ZWNoXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiQnJlYWRjcnVtYkxpc3RcIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9kaWdpdGFsLXJldmVudWUtZ3Jvd3RoI2JyZWFkY3J1bWJcIixcbiAgICBcIml0ZW1MaXN0RWxlbWVudFwiOiBbXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDEsXG4gICAgICAgIFwibmFtZVwiOiBcIlNvbHV0aW9uc1wiLFxuICAgICAgICBcIml0ZW1cIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogMixcbiAgICAgICAgXCJuYW1lXCI6IFwiRGlnaXRhbCBSZXZlbnVlIEdyb3d0aFwiXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG59O1xuXG5leHBvcnQgY29uc3QgZGlnaXRhbE1hcmtldGluZ1Nlb0RhdGEgPSB7XG4gIHRpdGxlOiBcIkRpZ2l0YWwgTWFya2V0aW5nICYgQjJCIExlYWQgR2VuZXJhdGlvbiB8IEN5YmFlbSBUZWNoXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkdyb3cgcXVhbGlmaWVkIGxlYWRzIGFuZCByZXZlbnVlIHdpdGggb3VyIGVuZC10by1lbmQgU0VPLCBQUEMsIHBlcmZvcm1hbmNlIG1hcmtldGluZywgYW5kIEIyQiBkaWdpdGFsIGdyb3d0aCBzb2x1dGlvbnMuXCIsXG4gIGNhbm9uaWNhbDogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZGlnaXRhbC1yZXZlbnVlLWdyb3d0aFwiLFxuICBrZXl3b3JkczogXCJEaWdpdGFsIE1hcmtldGluZyBBZ2VuY3kgaW4gSW5kaWEsIERpZ2l0YWwgTWFya2V0aW5nIENvbXBhbnkgaW4gSW5kaWEsIERpZ2l0YWwgTWFya2V0aW5nIFNlcnZpY2VzLCBTRU8gQWdlbmN5LCBQUEMgQWRzIEFnZW5jeSwgU29jaWFsIE1lZGlhIE1hcmtldGluZywgRW1haWwgTWFya2V0aW5nLCBMZWFkIEdlbmVyYXRpb24sIGRpZ2l0YWwgbWFya2V0aW5nIHNlcnZpY2VzIFB1bmUsIFNFTyBzZXJ2aWNlcyBQdW5lLCBCMkIgZGlnaXRhbCBncm93dGgsIGNvbnZlcnNpb24gcmF0ZSBvcHRpbWl6YXRpb24gUHVuZSwgQ1JPIHNlcnZpY2VzLCBMaW5rZWRJbiBleGVjdXRpdmUgYnJhbmRpbmcsIEIyQiBsZWFkIGdlbmVyYXRpb24gYWdlbmN5LCBvcmdhbmljIHNlYXJjaCBkb21pbmFuY2UsIGNvcnBvcmF0ZSB0aG91Z2h0IGxlYWRlcnNoaXAsIGV4ZWN1dGl2ZSBwcmVzZW5jZSBtYXJrZXRpbmcsIHNvY2lhbCBtZWRpYSBtYXJrZXRpbmcgUHVuZSwgUFBDIGFnZW5jeSBQdW5lLCBHb29nbGUgQWRzIG1hbmFnZW1lbnQsIHBlcmZvcm1hbmNlIG1hcmtldGluZywgQ3liYWVtIFRlY2ggZGlnaXRhbCBtYXJrZXRpbmdcIixcbiAgb2dUaXRsZTogXCJEaWdpdGFsIE1hcmtldGluZyAmIEIyQiBHcm93dGggU2VydmljZXMgaW4gUHVuZSB8IEN5YmFlbSBUZWNoXCIsXG4gIG9nRGVzY3JpcHRpb246IFwiUmVzdWx0LWRyaXZlbiBTRU8sIENSTywgc29jaWFsIG1lZGlhLCBQUEMsIGFuZCBleGVjdXRpdmUgTGlua2VkSW4gc3RyYXRlZ2llcyBmcm9tIEN5YmFlbSBUZWNoIHRvIHR1cm4geW91ciBvbmxpbmUgcHJlc2VuY2UgaW50byByZXZlbnVlIGFuZCBxdWFsaWZpZWQgQjJCIGxlYWRzLlwiLFxuICB0d2l0dGVyVGl0bGU6IFwiRGlnaXRhbCBNYXJrZXRpbmcgJiBCMkIgR3Jvd3RoIFNlcnZpY2VzIGluIFB1bmUgfCBDeWJhZW0gVGVjaFwiLFxuICB0d2l0dGVyRGVzY3JpcHRpb246IFwiRG9taW5hdGUgc2VhcmNoIHJlc3VsdHMsIG9wdGltaXplIGNvbnZlcnNpb24gZnVubmVscywgYW5kIHNjYWxlIGV4ZWN1dGl2ZSB0aG91Z2h0IGxlYWRlcnNoaXAgdG8gZ3JvdyB5b3VyIHJldmVudWUgb25saW5lLlwiLFxuICBqc29uTGQ6IFtcbiAge1xuICAgIFwiQHR5cGVcIjogXCJXZWJQYWdlXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZGlnaXRhbC1yZXZlbnVlLWdyb3d0aCN3ZWJwYWdlXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZGlnaXRhbC1yZXZlbnVlLWdyb3d0aFwiLFxuICAgIFwibmFtZVwiOiBcIkRpZ2l0YWwgUmV2ZW51ZSBHcm93dGggJiBQZXJmb3JtYW5jZSBNYXJrZXRpbmcgU2VydmljZXMgfCBDeWJhZW0gVGVjaFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJDeWJhZW0gVGVjaCBpcyBhIHRvcCBkaWdpdGFsIGdyb3d0aCBhZ2VuY3kgYW5kIHBlcmZvcm1hbmNlIG1hcmtldGluZyBhZ2VuY3kgZGVsaXZlcmluZyBkYXRhLWRyaXZlbiBkaWdpdGFsIG1hcmtldGluZyBzZXJ2aWNlcywgU0VPLCBQUEMsIGFuZCBlY29tbWVyY2UgbWFya2V0aW5nLlwiLFxuICAgIFwibWFpbkVudGl0eVwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9kaWdpdGFsLXJldmVudWUtZ3Jvd3RoI3NlcnZpY2VcIlxuICAgIH0sXG4gICAgXCJpc1BhcnRPZlwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyN3ZWJzaXRlXCJcbiAgICB9LFxuICAgIFwiYnJlYWRjcnVtYlwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9kaWdpdGFsLXJldmVudWUtZ3Jvd3RoI2JyZWFkY3J1bWJcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZGlnaXRhbC1yZXZlbnVlLWdyb3d0aCNzZXJ2aWNlXCIsXG4gICAgXCJuYW1lXCI6IFwiRGlnaXRhbCBSZXZlbnVlIEdyb3d0aCBTZXJ2aWNlc1wiLFxuICAgIFwic2VydmljZVR5cGVcIjogXCJEaWdpdGFsIE1hcmtldGluZyBTZXJ2aWNlcyAmIFBlcmZvcm1hbmNlIE1hcmtldGluZ1wiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2RpZ2l0YWwtcmV2ZW51ZS1ncm93dGhcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3liYWVtIFRlY2ggaXMgYSBwcmVtaWVyIGRpZ2l0YWwgbWFya2V0aW5nIGNvbXBhbnkgYW5kIGxlYWRpbmcgZGlnaXRhbCBncm93dGggYWdlbmN5IHJlY29nbml6ZWQgYW1vbmcgdGhlIGJlc3QgbWFya2V0aW5nIGFnZW5jaWVzIGFuZCB0b3AgbWFya2V0aW5nIGFnZW5jeSBwcm92aWRlcnMuIEFzIGEgZnVsbC1zZXJ2aWNlIHBlcmZvcm1hbmNlIG1hcmtldGluZyBhZ2VuY3ksIG1lZGlhIG1hcmtldGluZyBhZ2VuY3ksIGFuZCBwcmVtaWVyIGRpZ2l0YWwgYWdlbmN5LCB3ZSBkZWxpdmVyIHJlc3VsdHMtZHJpdmVuIHBlcmZvcm1hbmNlIG1hcmtldGluZyBzZXJ2aWNlcywgaGlnaC1ST0kgcGVyZm9ybWFuY2UgbWFya2V0aW5nIGNvbXBhbnkgc3RyYXRlZ2llcywgYW5kIGVuZC10by1lbmQgZGlnaXRhbCBtYXJrZXRpbmcgc2VydmljZXMuIEZvciBidXNpbmVzc2VzIHNlYXJjaGluZyBmb3IgYSBtYXJrZXRpbmcgYWdlbmN5IG5lYXIgbWUgb3Igc3BlY2lhbGl6ZWQgcGVyZm9ybWFuY2UgbWFya2V0aW5nIGFnZW5jaWVzLCBDeWJhZW0gVGVjaCBleGNlbHMgaW4gZGlnaXRhbCBtYXJrZXRpbmcgZm9yIHJlYWwgZXN0YXRlLCBkaWdpdGFsIG1hcmtldGluZyBmb3IgZWNvbW1lcmNlLCBhbmQgY29tcGxldGUgZGlnaXRhbCBlY29tbWVyY2UgbWFya2V0aW5nIHN0cmF0ZWdpZXMuIFdlIGludGVncmF0ZSBlY29tbWVyY2UgbWFya2V0aW5nIGRpZ2l0YWwgc3lzdGVtcyB3aXRoIGFkdmFuY2VkIFNFTywgQjJCIGxlYWQgZ2VuZXJhdGlvbiwgQ1JPLCBhbmQgbWFya2V0aW5nIGF1dG9tYXRpb24gdG8gYnVpbGQgcHJlZGljdGFibGUgcmV2ZW51ZSBlbmdpbmVzLlwiLFxuICAgIFwicHJvdmlkZXJcIjoge1xuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS8jb3JnYW5pemF0aW9uXCJcbiAgICB9LFxuICAgIFwiYXJlYVNlcnZlZFwiOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiUGxhY2VcIixcbiAgICAgIFwibmFtZVwiOiBcIkdsb2JhbFwiXG4gICAgfSxcbiAgICBcImhhc09mZmVyQ2F0YWxvZ1wiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9kaWdpdGFsLXJldmVudWUtZ3Jvd3RoI3N1YnNlcnZpY2VzXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiT2ZmZXJDYXRhbG9nXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZGlnaXRhbC1yZXZlbnVlLWdyb3d0aCNzdWJzZXJ2aWNlc1wiLFxuICAgIFwibmFtZVwiOiBcIkRpZ2l0YWwgUmV2ZW51ZSAmIEdyb3d0aCBTb2x1dGlvbnNcIixcbiAgICBcIml0ZW1MaXN0RWxlbWVudFwiOiBbXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlBlcmZvcm1hbmNlIE1hcmtldGluZyAmIFBhaWQgQWRzXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRhdGEtZHJpdmVuIEdvb2dsZSBBZHMsIE1ldGEgQWRzLCBhbmQgTGlua2VkSW4gQWRzIGNhbXBhaWducyBmb2N1c2VkIG9uIFJPSSBhbmQgbG93ZXIgQ1BMLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlNlYXJjaCBFbmdpbmUgT3B0aW1pemF0aW9uIChTRU8gJiBHRU8pXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFkdmFuY2VkIEFFTywgR0VPLCBhbmQgU1hPIHN0cmF0ZWdpZXMgdGFyZ2V0aW5nIGhpZ2gtaW50ZW50IGtleXdvcmRzIHRvIGRyaXZlIG9yZ2FuaWMgcmV2ZW51ZS5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICAgICAgXCJpdGVtT2ZmZXJlZFwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIlNlcnZpY2VcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJFLUNvbW1lcmNlICYgRDJDIEdyb3d0aCBNYXJrZXRpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRnVsbC1mdW5uZWwgZGlnaXRhbCBlY29tbWVyY2UgbWFya2V0aW5nLCByZXRlbnRpb24gYXV0b21hdGlvbiwgYW5kIGNvbnZlcnNpb24gcmF0ZSBvcHRpbWl6YXRpb24uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgIFwiaXRlbU9mZmVyZWRcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQjJCIExlYWQgR2VuZXJhdGlvbiAmIExpbmtlZEluIEF1dGhvcml0eVwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBY2NvdW50LWJhc2VkIG1hcmtldGluZywgZGVjaXNpb24tbWFrZXIgbGVhZCBhY3F1aXNpdGlvbiwgYW5kIEIyQiBwaXBlbGluZSBkZXZlbG9wbWVudC5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICAgICAgXCJpdGVtT2ZmZXJlZFwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIlNlcnZpY2VcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJNYXJrZXRpbmcgQXV0b21hdGlvbiAmIENSTSBJbnRlZ3JhdGlvblwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJIdWJTcG90LCBab2hvLCBhbmQgU2FsZXNmb3JjZSBDUk0gaW50ZWdyYXRpb24sIGxlYWQgc2NvcmluZywgYW5kIGF1dG9tYXRlZCBlbWFpbCBudXJ0dXJpbmcuXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJGQVFQYWdlXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvZGlnaXRhbC1yZXZlbnVlLWdyb3d0aCNmYXFcIixcbiAgICBcIm1haW5FbnRpdHlcIjogW1xuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiV2hhdCBtYWtlcyBDeWJhZW1UZWNoIGRpZmZlcmVudCBmcm9tIG90aGVyIGRpZ2l0YWwgbWFya2V0aW5nIGFnZW5jaWVzIGluIEluZGlhP1wiLFxuICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiQ3liYWVtVGVjaCBpcyBub3QganVzdCBhIGRpZ2l0YWwgbWFya2V0aW5nIGFnZW5jeSBpbiBJbmRpYSAtIHdlIG9wZXJhdGUgYXMgYSBEaWdpdGFsIFJldmVudWUgJiBHcm93dGggRW5naW5lZXJpbmcgcGFydG5lci4gSW5zdGVhZCBvZiBvZmZlcmluZyBpc29sYXRlZCBzZXJ2aWNlcyBsaWtlIFNFTyBvciBHb29nbGUgQWRzLCB3ZSBpbnRlZ3JhdGUgU0VPLCBQZXJmb3JtYW5jZSBNYXJrZXRpbmcsIENvbnZlcnNpb24gUmF0ZSBPcHRpbWl6YXRpb24gKENSTyksIExpbmtlZEluIE1hcmtldGluZywgYW5kIE1hcmtldGluZyBBdXRvbWF0aW9uIGludG8gb25lIG1lYXN1cmFibGUgcmV2ZW51ZSBzeXN0ZW0uIE91ciBmb2N1cyBpcyBST0ksIGxlYWQgcXVhbGl0eSwgYW5kIHByZWRpY3RhYmxlIHBpcGVsaW5lIGdyb3d0aC5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiRG8geW91IHByb3ZpZGUgQjJCIGxlYWQgZ2VuZXJhdGlvbiBzZXJ2aWNlcz9cIixcbiAgICAgICAgXCJhY2NlcHRlZEFuc3dlclwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIlllcy4gV2Ugc3BlY2lhbGl6ZSBpbiBCMkIgbGVhZCBnZW5lcmF0aW9uIHNlcnZpY2VzIGluIEluZGlhIHVzaW5nIGFkdmFuY2VkIFNFTyAoQUVPLCBHRU8sIFNYTyksIExpbmtlZEluIG1hcmtldGluZyBmb3IgQjJCLCBwZXJmb3JtYW5jZS1kcml2ZW4gR29vZ2xlIEFkcyBtYW5hZ2VtZW50LCBhbmQgbWFya2V0aW5nIGF1dG9tYXRpb24gd29ya2Zsb3dzLiBXZSBmb2N1cyBvbiBnZW5lcmF0aW5nIGRlY2lzaW9uLW1ha2VyIGxlYWRzLCBub3QganVzdCB0cmFmZmljLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICBcIm5hbWVcIjogXCJIb3cgZG8geW91IHJlZHVjZSBjb3N0IHBlciBsZWFkIChDUEwpP1wiLFxuICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiV2UgcmVkdWNlIGNvc3QgcGVyIGxlYWQgYnkgdGFyZ2V0aW5nIGhpZ2gtaW50ZW50IGtleXdvcmRzIHRocm91Z2ggU0VPIHNlcnZpY2VzLCBvcHRpbWl6aW5nIGxhbmRpbmcgcGFnZXMgdXNpbmcgQ1JPLCBpbXByb3ZpbmcgYWQgdGFyZ2V0aW5nIGluIEdvb2dsZSBBZHMgYW5kIExpbmtlZEluIEFkcywgaW1wbGVtZW50aW5nIHJldGFyZ2V0aW5nIHN0cmF0ZWdpZXMsIGFuZCBhdXRvbWF0aW5nIGxlYWQgbnVydHVyaW5nLiBUaGlzIGVuc3VyZXMgYmV0dGVyIGxlYWQgcXVhbGl0eSBhbmQgaGlnaGVyIGNvbnZlcnNpb24gcmF0ZXMuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkRvIHlvdSBvZmZlciBwZXJmb3JtYW5jZSBtYXJrZXRpbmcgc2VydmljZXMgZm9yIEQyQyBicmFuZHM/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJZZXMuIEFzIGEgcGVyZm9ybWFuY2UgbWFya2V0aW5nIGFnZW5jeSBpbiBJbmRpYSwgd2UgcHJvdmlkZSBmdWxsLWZ1bm5lbCBzdHJhdGVnaWVzIGZvciBEMkMgYnJhbmRzIGluY2x1ZGluZyBHb29nbGUgQWRzICYgTWV0YSBBZHMgbWFuYWdlbWVudCwgRS1jb21tZXJjZSBTRU8sIENvbnZlcnNpb24gcmF0ZSBvcHRpbWl6YXRpb24sIEN1c3RvbWVyIHJldGVudGlvbiBhdXRvbWF0aW9uLCBhbmQgQWR2YW5jZWQgYW5hbHl0aWNzIGFuZCBhdHRyaWJ1dGlvbiB0cmFja2luZy4gT3VyIGdvYWwgaXMgc3VzdGFpbmFibGUgc2NhbGluZyB3aXRoIGltcHJvdmVkIFJPQVMgYW5kIGxvd2VyIENBQy5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiV2hhdCBpbmR1c3RyaWVzIGRvIHlvdSB3b3JrIHdpdGg/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJXZSB3b3JrIHdpdGggSVQgJiBTYWFTIENvbXBhbmllcywgTWFudWZhY3R1cmluZyAmIEluZHVzdHJpYWwgQnVzaW5lc3NlcywgUmVhbCBFc3RhdGUgRGV2ZWxvcGVycywgRWR1Y2F0aW9uICYgRWRUZWNoLCBIZWFsdGhjYXJlICYgQ2xpbmljcywgRS1jb21tZXJjZSAmIEQyQyBCcmFuZHMsIGFuZCBDb25zdWx0YW50cyAmIFByb2Zlc3Npb25hbCBTZXJ2aWNlcy5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiRG8geW91IHByb3ZpZGUgbWFya2V0aW5nIGF1dG9tYXRpb24gc2VydmljZXM/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJZZXMuIFdlIHByb3ZpZGUgbWFya2V0aW5nIGF1dG9tYXRpb24gc2VydmljZXMgaW5jbHVkaW5nIENSTSBpbnRlZ3JhdGlvbiAoWm9obywgSHViU3BvdCwgU2FsZXNmb3JjZSksIExlYWQgc2NvcmluZywgRW1haWwgd29ya2Zsb3dzLCBBYmFuZG9uZWQgY2FydCBhdXRvbWF0aW9uLCBTYWxlcyBmdW5uZWwgYXV0b21hdGlvbiwgYW5kIEN1c3RvbWVyIHJldGVudGlvbiBjYW1wYWlnbnMuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkhvdyBsb25nIGRvZXMgaXQgdGFrZSB0byBzZWUgcmVzdWx0cz9cIixcbiAgICAgICAgXCJhY2NlcHRlZEFuc3dlclwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIlNFTyBzZXJ2aWNlcyB0eXBpY2FsbHkgc2hvdyBtZWFzdXJhYmxlIGltcHJvdmVtZW50cyB3aXRoaW4gMy02IG1vbnRocy4gUGVyZm9ybWFuY2UgbWFya2V0aW5nIGNhbXBhaWducyBjYW4gZ2VuZXJhdGUgbGVhZHMgd2l0aGluIHRoZSBmaXJzdCAzMC02MCBkYXlzLiBIb3dldmVyLCBvdXIgZm9jdXMgaXMgbG9uZy10ZXJtIHJldmVudWUgc3RhYmlsaXR5LCBub3Qgc2hvcnQtdGVybSBzcGlrZXMuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkRvIHlvdSBvZmZlciBhIGZyZWUgZGlnaXRhbCBncm93dGggYXVkaXQ/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJZZXMuIFdlIG9mZmVyIGEgRnJlZSBEaWdpdGFsIEdyb3d0aCBBdWRpdCB0aGF0IGluY2x1ZGVzIFNFTyBhbmFseXNpcywgUGFpZCBhZCBwZXJmb3JtYW5jZSByZXZpZXcsIENvbnZlcnNpb24gZ2FwIGFuYWx5c2lzLCBMaW5rZWRJbiBhdXRob3JpdHkgYXNzZXNzbWVudCwgYW5kIEF1dG9tYXRpb24gb3Bwb3J0dW5pdGllcy4gWW91IGNhbiBib29rIGl0IGRpcmVjdGx5IGZyb20gb3VyIGxhbmRpbmcgcGFnZS5cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiLFxuICAgIFwibmFtZVwiOiBcIkN5YmFlbSBUZWNoIFB2dC4gTHRkLlwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb21cIixcbiAgICBcImxvZ29cIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9hc3NldHMvY3liYWVtLWxvZ28tRFg4MFpjclkucG5nXCIsXG4gICAgXCJlbWFpbFwiOiBcInNhbGVzQGN5YmFlbXRlY2guY29tXCIsXG4gICAgXCJ0ZWxlcGhvbmVcIjogXCIrOTEtOTAyODU0MTM4M1wiLFxuICAgIFwiYWRkcmVzc1wiOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiUG9zdGFsQWRkcmVzc1wiLFxuICAgICAgXCJzdHJlZXRBZGRyZXNzXCI6IFwiT2ZmaWNlIDMwNCwgU3VyYXR3YWxhIE1hcmsgUGxhenpvLCBIaW5qZXdhZGlcIixcbiAgICAgIFwiYWRkcmVzc0xvY2FsaXR5XCI6IFwiUHVuZVwiLFxuICAgICAgXCJhZGRyZXNzUmVnaW9uXCI6IFwiTWFoYXJhc2h0cmFcIixcbiAgICAgIFwicG9zdGFsQ29kZVwiOiBcIjQxMTA1N1wiLFxuICAgICAgXCJhZGRyZXNzQ291bnRyeVwiOiBcIklOXCJcbiAgICB9LFxuICAgIFwic2FtZUFzXCI6IFtcbiAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvY3liYWVtdGVjaFwiLFxuICAgICAgXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2N5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vQGN5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2N5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly94LmNvbS9jeWJhZW10ZWNoXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiQnJlYWRjcnVtYkxpc3RcIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9kaWdpdGFsLXJldmVudWUtZ3Jvd3RoI2JyZWFkY3J1bWJcIixcbiAgICBcIml0ZW1MaXN0RWxlbWVudFwiOiBbXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDEsXG4gICAgICAgIFwibmFtZVwiOiBcIlNvbHV0aW9uc1wiLFxuICAgICAgICBcIml0ZW1cIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogMixcbiAgICAgICAgXCJuYW1lXCI6IFwiRGlnaXRhbCBSZXZlbnVlIEdyb3d0aFwiXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG59O1xuXG5leHBvcnQgY29uc3QgaXRJbmZyYXN0cnVjdHVyZVNlb0RhdGEgPSB7XG4gIHRpdGxlOiBcIkVudGVycHJpc2UgSVQgSW5mcmFzdHJ1Y3R1cmUgU2VydmljZXMgJiBTb2x1dGlvbnMgfCBDeWJhZW0gVGVjaFwiLFxuICBkZXNjcmlwdGlvbjogXCJTY2FsZSB5b3VyIGJ1c2luZXNzIHdpdGggZW50ZXJwcmlzZSBJVCBpbmZyYXN0cnVjdHVyZSBzZXJ2aWNlcywgZXhwZXJ0IGNsb3VkIG1hbmFnZW1lbnQsIGN5YmVyc2VjdXJpdHksIDI0LzcgbW9uaXRvcmluZywgYW5kIGJ1c2luZXNzIGNvbnRpbnVpdHkgc29sdXRpb25zLlwiLFxuICBjYW5vbmljYWw6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2l0LWluZnJhc3RydWN0dXJlLXNlcnZpY2VzXCIsXG4gIGtleXdvcmRzOiBcIkVudGVycHJpc2UgSVQgaW5mcmFzdHJ1Y3R1cmUgc2VydmljZXMsIG1hbmFnZWQgSVQgaW5mcmFzdHJ1Y3R1cmUsIGNsb3VkIGluZnJhc3RydWN0dXJlIG1hbmFnZW1lbnQsIGl0IGluZnJhc3RydWN0dXJlIHNlcnZpY2VzIFB1bmUsIGNsb3VkIHNvbHV0aW9ucyBQdW5lLCBjbG91ZCBtaWdyYXRpb24gc2VydmljZXMsIGN5YmVyc2VjdXJpdHkgc2VydmljZXMgUHVuZSwgVkFQVCBQdW5lLCBwZW5ldHJhdGlvbiB0ZXN0aW5nIFB1bmUsIGNvbXB1dGVyIEFNQyBzZXJ2aWNlcyBQdW5lLCBJVCBBTUMgUHVuZSwgSVQgYXNzZXQgbWFuYWdlbWVudCBzZXJ2aWNlcywgaGFyZHdhcmUgcHJvY3VyZW1lbnQgSW5kaWEsIElUIGNvbnN1bHRpbmcgUHVuZSwgZGlnaXRhbCB0cmFuc2Zvcm1hdGlvbiBzdHJhdGVneSwgSVQgaW5mcmFzdHJ1Y3R1cmUgYXVkaXQsIGVudGVycHJpc2UgdGVjaG5vbG9neSByb2FkbWFwLCAyNC83IFNPQyBtb25pdG9yaW5nLCBtYW5hZ2VkIGNsb3VkIHNlcnZpY2VzLCBDeWJhZW0gVGVjaCBzb2x1dGlvbnNcIixcbiAgb2dUaXRsZTogXCJFbnRlcnByaXNlIElUIEluZnJhc3RydWN0dXJlIFNlcnZpY2VzICYgU29sdXRpb25zIHwgQ3liYWVtIFRlY2hcIixcbiAgb2dEZXNjcmlwdGlvbjogXCJTY2FsZSB5b3VyIGJ1c2luZXNzIHdpdGggZW50ZXJwcmlzZSBJVCBpbmZyYXN0cnVjdHVyZSBzZXJ2aWNlcywgZXhwZXJ0IGNsb3VkIG1hbmFnZW1lbnQsIGN5YmVyc2VjdXJpdHksIDI0LzcgbW9uaXRvcmluZywgYW5kIGJ1c2luZXNzIGNvbnRpbnVpdHkgc29sdXRpb25zLlwiLFxuICB0d2l0dGVyVGl0bGU6IFwiRW50ZXJwcmlzZSBJVCBJbmZyYXN0cnVjdHVyZSBTZXJ2aWNlcyAmIFNvbHV0aW9ucyB8IEN5YmFlbSBUZWNoXCIsXG4gIHR3aXR0ZXJEZXNjcmlwdGlvbjogXCJTY2FsZSB5b3VyIGJ1c2luZXNzIHdpdGggZW50ZXJwcmlzZSBJVCBpbmZyYXN0cnVjdHVyZSBzZXJ2aWNlcywgZXhwZXJ0IGNsb3VkIG1hbmFnZW1lbnQsIGN5YmVyc2VjdXJpdHksIDI0LzcgbW9uaXRvcmluZywgYW5kIGJ1c2luZXNzIGNvbnRpbnVpdHkgc29sdXRpb25zLlwiLFxuICBqc29uTGQ6IFtcbiAge1xuICAgIFwiQHR5cGVcIjogXCJXZWJQYWdlXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtaW5mcmFzdHJ1Y3R1cmUtc2VydmljZXMjd2VicGFnZVwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2l0LWluZnJhc3RydWN0dXJlLXNlcnZpY2VzXCIsXG4gICAgXCJuYW1lXCI6IFwiRW50ZXJwcmlzZSBJVCBJbmZyYXN0cnVjdHVyZSBTZXJ2aWNlcyAmIFNvbHV0aW9ucyB8IEN5YmFlbSBUZWNoXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkN5YmFlbSBUZWNoIGlzIGEgcHJlbWllciBJVCBpbmZyYXN0cnVjdHVyZSBzb2x1dGlvbnMgcHJvdmlkZXIgb2ZmZXJpbmcgbWFuYWdlZCBJVCBpbmZyYXN0cnVjdHVyZSwgaHlwZXItY29udmVyZ2VkIElUIGluZnJhc3RydWN0dXJlLCBuZXR3b3JrIG1hbmFnZW1lbnQsIHNlcnZlciBzdXBwb3J0LCBhbmQgZW50ZXJwcmlzZSBJVCBpbmZyYSBzZXJ2aWNlcy5cIixcbiAgICBcIm1haW5FbnRpdHlcIjoge1xuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtaW5mcmFzdHJ1Y3R1cmUtc2VydmljZXMjc2VydmljZVwiXG4gICAgfSxcbiAgICBcImlzUGFydE9mXCI6IHtcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI3dlYnNpdGVcIlxuICAgIH0sXG4gICAgXCJicmVhZGNydW1iXCI6IHtcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2l0LWluZnJhc3RydWN0dXJlLXNlcnZpY2VzI2JyZWFkY3J1bWJcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtaW5mcmFzdHJ1Y3R1cmUtc2VydmljZXMjc2VydmljZVwiLFxuICAgIFwibmFtZVwiOiBcIklUIEluZnJhc3RydWN0dXJlIFNlcnZpY2VzXCIsXG4gICAgXCJzZXJ2aWNlVHlwZVwiOiBcIk1hbmFnZWQgSVQgSW5mcmFzdHJ1Y3R1cmUgJiBJVCBJbmZyYSBTb2x1dGlvbnNcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1pbmZyYXN0cnVjdHVyZS1zZXJ2aWNlc1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJDeWJhZW0gVGVjaCBpcyBhbiBpbmR1c3RyeS1sZWFkaW5nIElUIGluZnJhc3RydWN0dXJlIHNvbHV0aW9ucyBwcm92aWRlciBkZWxpdmVyaW5nIGVuZC10by1lbmQgSVQgaW5mcmFzdHJ1Y3R1cmUgbWFuYWdlbWVudCBzZXJ2aWNlcywgY2xvdWQgYXJjaGl0ZWN0dXJlIG9wdGltaXphdGlvbiwgbmV0d29yayB2aXJ0dWFsaXphdGlvbiwgYW5kIG1hbmFnZWQgSVQgaW5mcmFzdHJ1Y3R1cmUgc29sdXRpb25zLiBPdXIgZW50ZXJwcmlzZSBJVCBpbmZyYSBzZXJ2aWNlcyBlbmNvbXBhc3MgbmV4dC1nZW5lcmF0aW9uIGh5cGVyIGNvbnZlcmdlZCBJVCBpbmZyYXN0cnVjdHVyZSBkZXBsb3ltZW50LCBzZXJ2ZXIgYWRtaW5pc3RyYXRpb24sIGF1dG9tYXRlZCBkYXRhIGJhY2t1cCwgZGlzYXN0ZXIgcmVjb3ZlcnkgcGxhbm5pbmcsIGFuZCAyNC83IHN5c3RlbSBtb25pdG9yaW5nLiBBcyBhIHRydXN0ZWQgcGFydG5lciBmb3Igc29sdXRpb24gSVQgaW5mcmFzdHJ1Y3R1cmUsIHdlIGVuZ2luZWVyIHJlc2lsaWVudCBJVCBpbmZyYSBtYW5hZ2VtZW50IGZyYW1ld29ya3MgYW5kIHJvYnVzdCBJVCBpbmZyYSBzZXJ2aWNlcyB0aGF0IGVsaW1pbmF0ZSBzeXN0ZW0gZG93bnRpbWUsIG1heGltaXplIGhhcmR3YXJlIHBlcmZvcm1hbmNlLCBlbnN1cmUgemVyby10cnVzdCBuZXR3b3JrIHNlY3VyaXR5LCBhbmQgc2NhbGUgc2VhbWxlc3NseSB0byBzdXBwb3J0IGhpZ2gtZ3Jvd3RoIGJ1c2luZXNzIGVudmlyb25tZW50cy5cIixcbiAgICBcInByb3ZpZGVyXCI6IHtcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiXG4gICAgfSxcbiAgICBcImFyZWFTZXJ2ZWRcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIlBsYWNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJHbG9iYWxcIlxuICAgIH0sXG4gICAgXCJoYXNPZmZlckNhdGFsb2dcIjoge1xuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtaW5mcmFzdHJ1Y3R1cmUtc2VydmljZXMjc3Vic2VydmljZXNcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJPZmZlckNhdGFsb2dcIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1pbmZyYXN0cnVjdHVyZS1zZXJ2aWNlcyNzdWJzZXJ2aWNlc1wiLFxuICAgIFwibmFtZVwiOiBcIldoYXQgV2UgTWFuYWdlIC0gSVQgSW5mcmEgU29sdXRpb25zXCIsXG4gICAgXCJpdGVtTGlzdEVsZW1lbnRcIjogW1xuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICAgICAgXCJpdGVtT2ZmZXJlZFwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIlNlcnZpY2VcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJNYW5hZ2VkIE5ldHdvcmsgSW5mcmFzdHJ1Y3R1cmVcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiMjQvNyBhY3RpdmUgbmV0d29yayBtYW5hZ2VtZW50LCBmaXJld2FsbCBjb25maWd1cmF0aW9uLCBTRC1XQU4gb3B0aW1pemF0aW9uLCBhbmQgc2VjdXJlIHJvdXRpbmcuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgIFwiaXRlbU9mZmVyZWRcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiU2VydmVyIE1hbmFnZW1lbnQgJiBWaXJ0dWFsaXphdGlvblwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJXaW5kb3dzICYgTGludXggc2VydmVyIGRlcGxveW1lbnQsIFZNd2FyZS9IeXBlci1WIHZpcnR1YWxpemF0aW9uLCBhbmQgY2xvdWQgc2VydmVyIHByb3Zpc2lvbmluZy5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICAgICAgXCJpdGVtT2ZmZXJlZFwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIlNlcnZpY2VcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJIeXBlci1Db252ZXJnZWQgSVQgSW5mcmFzdHJ1Y3R1cmUgKEhDSSlcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVW5pZmllZCBjb21wdXRlLCBzdG9yYWdlLCBhbmQgbmV0d29ya2luZyBhcmNoaXRlY3R1cmUgZm9yIGhpZ2gtZGVuc2l0eSB2aXJ0dWFsIGVudmlyb25tZW50cy5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICAgICAgXCJpdGVtT2ZmZXJlZFwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIlNlcnZpY2VcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJDbG91ZCBJbmZyYXN0cnVjdHVyZSAmIE1pZ3JhdGlvblwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBV1MsIEF6dXJlLCBhbmQgSHlicmlkIENsb3VkIHByb3Zpc2lvbmluZywgYXJjaGl0ZWN0dXJlIGRlc2lnbiwgYW5kIHNlYW1sZXNzIGNsb3VkIG1pZ3JhdGlvbi5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICAgICAgXCJpdGVtT2ZmZXJlZFwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIlNlcnZpY2VcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJCYWNrdXAgJiBEaXNhc3RlciBSZWNvdmVyeSAoRFJhYVMpXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkF1dG9tYXRlZCBkYXRhIHJlcGxpY2F0aW9uLCBkaXNhc3RlciByZWNvdmVyeSBwbGFubmluZywgYW5kIGJ1c2luZXNzIGNvbnRpbnVpdHkgc29sdXRpb25zLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIjI0LzcgTW9uaXRvcmluZyAmIElUIE9wZXJhdGlvbnNcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvYWN0aXZlIGVuZHBvaW50IHNlY3VyaXR5LCBwYXRjaCBtYW5hZ2VtZW50LCBTT0MgaW50ZWdyYXRpb24sIGFuZCBJVCBoZWxwZGVzayBzdXBwb3J0LlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiSG93VG9cIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1pbmZyYXN0cnVjdHVyZS1zZXJ2aWNlcyNob3d0b1wiLFxuICAgIFwibmFtZVwiOiBcIkEgNS1TdGVwIEpvdXJuZXkgdG8gSW5mcmFzdHJ1Y3R1cmUgRXhjZWxsZW5jZVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJPdXIgc3lzdGVtYXRpYyBwcm9jZXNzIGZvciBhc3Nlc3NpbmcsIGVuZ2luZWVyaW5nLCBkZXBsb3lpbmcsIG1hbmFnaW5nLCBhbmQgc2NhbGluZyBlbnRlcnByaXNlIElUIGluZnJhc3RydWN0dXJlLlwiLFxuICAgIFwic3RlcFwiOiBbXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJIb3dUb1N0ZXBcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiAxLFxuICAgICAgICBcIm5hbWVcIjogXCJBc3Nlc3NcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiRXZhbHVhdGluZyB5b3VyIGN1cnJlbnQgSVQgaW5mcmEgc2VydmljZXMsIGhhcmR3YXJlIGFzc2V0cywgc2VjdXJpdHkgcG9zdHVyZSwgYW5kIGJvdHRsZW5lY2tzLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiSG93VG9TdGVwXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogMixcbiAgICAgICAgXCJuYW1lXCI6IFwiRGVzaWduXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkFyY2hpdGVjdGluZyBjdXN0b21pemVkIGh5cGVyLWNvbnZlcmdlZCBJVCBpbmZyYXN0cnVjdHVyZSBhbmQgcmVzaWxpZW50IGNsb3VkL29uLXByZW1pc2UgSVQgaW5mcmEgc29sdXRpb25zLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiSG93VG9TdGVwXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogMyxcbiAgICAgICAgXCJuYW1lXCI6IFwiRGVwbG95XCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkV4ZWN1dGluZyBzZWFtbGVzcyBoYXJkd2FyZSwgbmV0d29yaywgYW5kIHNlcnZlciBpbnRlZ3JhdGlvbiB3aXRoIHplcm8gaW1wYWN0IG9uIGRhaWx5IG9wZXJhdGlvbnMuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJIb3dUb1N0ZXBcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiA0LFxuICAgICAgICBcIm5hbWVcIjogXCJNYW5hZ2VcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiRGVsaXZlcmluZyBjb250aW51b3VzIDI0LzcgSVQgaW5mcmFzdHJ1Y3R1cmUgbWFuYWdlbWVudCBzZXJ2aWNlcywgcHJvYWN0aXZlIHBhdGNoaW5nLCBhbmQgaGVhbHRoIGNoZWNrcy5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkhvd1RvU3RlcFwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDUsXG4gICAgICAgIFwibmFtZVwiOiBcIlNjYWxlXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIk9wdGltaXppbmcgc3lzdGVtcyBmb3IgZnV0dXJlIGdyb3d0aCwgY2xvdWQgZXhwYW5zaW9uLCBhbmQgZXZvbHZpbmcgZW50ZXJwcmlzZSB0ZWNobm9sb2d5IHJlcXVpcmVtZW50cy5cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJGQVFQYWdlXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtaW5mcmFzdHJ1Y3R1cmUtc2VydmljZXMjZmFxXCIsXG4gICAgXCJtYWluRW50aXR5XCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIldoYXQgYXJlIE1hbmFnZWQgSVQgU2VydmljZXM/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJNYW5hZ2VkIElUIFNlcnZpY2VzIG1lYW5zIG91dHNvdXJjaW5nIHRoZSBkYXktdG8tZGF5IG1hbmFnZW1lbnQgb2YgeW91ciBJVCBpbmZyYXN0cnVjdHVyZSAtIG1vbml0b3JpbmcsIG1haW50ZW5hbmNlLCBzdXBwb3J0LCBhbmQgc2VjdXJpdHkgLSB0byBDeWJhZW0gVGVjaCBmb3IgYSBmaXhlZCBtb250aGx5IGZlZS5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiV2hhdCBpcyBpbmNsdWRlZCBpbiBhbiBJVCBBTUM/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJPdXIgQU1DcyBjb3ZlciBwcmV2ZW50aXZlIG1haW50ZW5hbmNlLCBzY2hlZHVsZWQgaGVhbHRoIGNoZWNrcywgaGFyZHdhcmUgJiBzb2Z0d2FyZSBtYWludGVuYW5jZSwgc2VjdXJpdHkgdXBkYXRlcywgcGVyZm9ybWFuY2UgdHVuaW5nLCBhbmQgcHJpb3JpdHkgc3VwcG9ydCBmb3IgZGVza3RvcHMsIGxhcHRvcHMsIHNlcnZlcnMsIG5ldHdvcmtzLCBmaXJld2FsbHMsIGFuZCBzdG9yYWdlLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICBcIm5hbWVcIjogXCJEbyB5b3UgcHJvdmlkZSBib3RoIHJlbW90ZSBhbmQgb25zaXRlIHN1cHBvcnQ/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJZZXMuIE1vc3QgaXNzdWVzIGFyZSByZXNvbHZlZCBpbnN0YW50bHkgdGhyb3VnaCBzZWN1cmUgcmVtb3RlIHN1cHBvcnQsIGFuZCBvdXIgZW5naW5lZXJzIHByb3ZpZGUgb25zaXRlIGFzc2lzdGFuY2Ugd2hlbmV2ZXIgcGh5c2ljYWwgaW50ZXJ2ZW50aW9uIGlzIG5lZWRlZC5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiQ2FuIHlvdSB3b3JrIGFsb25nc2lkZSBvdXIgZXhpc3RpbmcgSVQgdGVhbT9cIixcbiAgICAgICAgXCJhY2NlcHRlZEFuc3dlclwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkFic29sdXRlbHkuIE91ciBDby1NYW5hZ2VkIElUIG1vZGVsIHN1cHBsZW1lbnRzIHlvdXIgaW50ZXJuYWwgdGVhbSB3aXRoIDI0eDcgbW9uaXRvcmluZywgc3BlY2lhbGlzdCBza2lsbHMsIGFuZCBleHRyYSBjYXBhY2l0eSBkdXJpbmcgcGVhayBkZW1hbmQuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkhvdyBxdWlja2x5IGRvIHlvdSByZXNwb25kIHRvIGlzc3Vlcz9cIixcbiAgICAgICAgXCJhY2NlcHRlZEFuc3dlclwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIlJlc3BvbnNlIHRpbWVzIGFyZSBkZWZpbmVkIGluIHlvdXIgU0xBLiBDcml0aWNhbCBpbmNpZGVudHMgcmVjZWl2ZSBpbW1lZGlhdGUgYXR0ZW50aW9uIC0gdHlwaWNhbCByZXNwb25zZSB3aXRoaW4gMTUtMzAgbWludXRlcy5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiV2hpY2ggbG9jYXRpb25zIGRvIHlvdSBzZXJ2ZT9cIixcbiAgICAgICAgXCJhY2NlcHRlZEFuc3dlclwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkhlYWRxdWFydGVyZWQgaW4gUHVuZSAoSGluamF3YWRpKSwgd2Ugc2VydmUgY2xpZW50cyBhY3Jvc3MgSW5kaWEgd2l0aCByZW1vdGUtZmlyc3Qgc3VwcG9ydCB0aGF0IGV4dGVuZHMgdG8gaW50ZXJuYXRpb25hbCBjbGllbnRzLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICBcIm5hbWVcIjogXCJIb3cgbXVjaCBkbyBNYW5hZ2VkIElUIFNlcnZpY2VzIGNvc3Q/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJQcmljaW5nIGRlcGVuZHMgb24gdXNlcnMsIGRldmljZXMsIHNlcnZlcnMsIGFuZCBzZXJ2aWNlIGxldmVsLiBXZSBvZmZlciBwZXItdXNlciBhbmQgcGVyLWRldmljZSBtb250aGx5IG1vZGVscy4gTW9zdCBjbGllbnRzIHNhdmUgMzAtNDAlIHZzLiBpbi1ob3VzZSBJVC5cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiLFxuICAgIFwibmFtZVwiOiBcIkN5YmFlbSBUZWNoIFB2dC4gTHRkLlwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb21cIixcbiAgICBcImxvZ29cIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9hc3NldHMvY3liYWVtLWxvZ28tRFg4MFpjclkucG5nXCIsXG4gICAgXCJlbWFpbFwiOiBcInNhbGVzQGN5YmFlbXRlY2guY29tXCIsXG4gICAgXCJ0ZWxlcGhvbmVcIjogXCIrOTEtOTAyODU0MTM4M1wiLFxuICAgIFwiYWRkcmVzc1wiOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiUG9zdGFsQWRkcmVzc1wiLFxuICAgICAgXCJzdHJlZXRBZGRyZXNzXCI6IFwiT2ZmaWNlIDMwNCwgU3VyYXR3YWxhIE1hcmsgUGxhenpvLCBIaW5qZXdhZGlcIixcbiAgICAgIFwiYWRkcmVzc0xvY2FsaXR5XCI6IFwiUHVuZVwiLFxuICAgICAgXCJhZGRyZXNzUmVnaW9uXCI6IFwiTWFoYXJhc2h0cmFcIixcbiAgICAgIFwicG9zdGFsQ29kZVwiOiBcIjQxMTA1N1wiLFxuICAgICAgXCJhZGRyZXNzQ291bnRyeVwiOiBcIklOXCJcbiAgICB9LFxuICAgIFwic2FtZUFzXCI6IFtcbiAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvY3liYWVtdGVjaFwiLFxuICAgICAgXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2N5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vQGN5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2N5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly94LmNvbS9jeWJhZW10ZWNoXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiQnJlYWRjcnVtYkxpc3RcIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1pbmZyYXN0cnVjdHVyZS1zZXJ2aWNlcyNicmVhZGNydW1iXCIsXG4gICAgXCJpdGVtTGlzdEVsZW1lbnRcIjogW1xuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiAxLFxuICAgICAgICBcIm5hbWVcIjogXCJTb2x1dGlvbnNcIixcbiAgICAgICAgXCJpdGVtXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDIsXG4gICAgICAgIFwibmFtZVwiOiBcIklUIEluZnJhc3RydWN0dXJlIFNlcnZpY2VzXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cbn07XG5cbmV4cG9ydCBjb25zdCBpdEluZnJhc3RydWN0dXJlU2VydmljZXNTZW9EYXRhID0ge1xuICB0aXRsZTogXCJFbnRlcnByaXNlIElUIEluZnJhc3RydWN0dXJlIFNlcnZpY2VzICYgU29sdXRpb25zIHwgQ3liYWVtIFRlY2hcIixcbiAgZGVzY3JpcHRpb246IFwiU2NhbGUgeW91ciBidXNpbmVzcyB3aXRoIGVudGVycHJpc2UgSVQgaW5mcmFzdHJ1Y3R1cmUgc2VydmljZXMsIGV4cGVydCBjbG91ZCBtYW5hZ2VtZW50LCBjeWJlcnNlY3VyaXR5LCAyNC83IG1vbml0b3JpbmcsIGFuZCBidXNpbmVzcyBjb250aW51aXR5IHNvbHV0aW9ucy5cIixcbiAgY2Fub25pY2FsOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1pbmZyYXN0cnVjdHVyZS1zZXJ2aWNlc1wiLFxuICBrZXl3b3JkczogXCJFbnRlcnByaXNlIElUIGluZnJhc3RydWN0dXJlIHNlcnZpY2VzLCBtYW5hZ2VkIElUIGluZnJhc3RydWN0dXJlLCBjbG91ZCBpbmZyYXN0cnVjdHVyZSBtYW5hZ2VtZW50LCBpdCBpbmZyYXN0cnVjdHVyZSBzZXJ2aWNlcyBQdW5lLCBjbG91ZCBzb2x1dGlvbnMgUHVuZSwgY2xvdWQgbWlncmF0aW9uIHNlcnZpY2VzLCBjeWJlcnNlY3VyaXR5IHNlcnZpY2VzIFB1bmUsIFZBUFQgUHVuZSwgcGVuZXRyYXRpb24gdGVzdGluZyBQdW5lLCBjb21wdXRlciBBTUMgc2VydmljZXMgUHVuZSwgSVQgQU1DIFB1bmUsIElUIGFzc2V0IG1hbmFnZW1lbnQgc2VydmljZXMsIGhhcmR3YXJlIHByb2N1cmVtZW50IEluZGlhLCBJVCBjb25zdWx0aW5nIFB1bmUsIGRpZ2l0YWwgdHJhbnNmb3JtYXRpb24gc3RyYXRlZ3ksIElUIGluZnJhc3RydWN0dXJlIGF1ZGl0LCBlbnRlcnByaXNlIHRlY2hub2xvZ3kgcm9hZG1hcCwgMjQvNyBTT0MgbW9uaXRvcmluZywgbWFuYWdlZCBjbG91ZCBzZXJ2aWNlcywgQ3liYWVtIFRlY2ggc29sdXRpb25zXCIsXG4gIG9nVGl0bGU6IFwiRW50ZXJwcmlzZSBJVCBJbmZyYXN0cnVjdHVyZSBTZXJ2aWNlcyAmIFNvbHV0aW9ucyB8IEN5YmFlbSBUZWNoXCIsXG4gIG9nRGVzY3JpcHRpb246IFwiU2NhbGUgeW91ciBidXNpbmVzcyB3aXRoIGVudGVycHJpc2UgSVQgaW5mcmFzdHJ1Y3R1cmUgc2VydmljZXMsIGV4cGVydCBjbG91ZCBtYW5hZ2VtZW50LCBjeWJlcnNlY3VyaXR5LCAyNC83IG1vbml0b3JpbmcsIGFuZCBidXNpbmVzcyBjb250aW51aXR5IHNvbHV0aW9ucy5cIixcbiAgdHdpdHRlclRpdGxlOiBcIkVudGVycHJpc2UgSVQgSW5mcmFzdHJ1Y3R1cmUgU2VydmljZXMgJiBTb2x1dGlvbnMgfCBDeWJhZW0gVGVjaFwiLFxuICB0d2l0dGVyRGVzY3JpcHRpb246IFwiU2NhbGUgeW91ciBidXNpbmVzcyB3aXRoIGVudGVycHJpc2UgSVQgaW5mcmFzdHJ1Y3R1cmUgc2VydmljZXMsIGV4cGVydCBjbG91ZCBtYW5hZ2VtZW50LCBjeWJlcnNlY3VyaXR5LCAyNC83IG1vbml0b3JpbmcsIGFuZCBidXNpbmVzcyBjb250aW51aXR5IHNvbHV0aW9ucy5cIixcbiAganNvbkxkOiBbXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiV2ViUGFnZVwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2l0LWluZnJhc3RydWN0dXJlLXNlcnZpY2VzI3dlYnBhZ2VcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1pbmZyYXN0cnVjdHVyZS1zZXJ2aWNlc1wiLFxuICAgIFwibmFtZVwiOiBcIkVudGVycHJpc2UgSVQgSW5mcmFzdHJ1Y3R1cmUgU2VydmljZXMgJiBTb2x1dGlvbnMgfCBDeWJhZW0gVGVjaFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJDeWJhZW0gVGVjaCBpcyBhIHByZW1pZXIgSVQgaW5mcmFzdHJ1Y3R1cmUgc29sdXRpb25zIHByb3ZpZGVyIG9mZmVyaW5nIG1hbmFnZWQgSVQgaW5mcmFzdHJ1Y3R1cmUsIGh5cGVyLWNvbnZlcmdlZCBJVCBpbmZyYXN0cnVjdHVyZSwgbmV0d29yayBtYW5hZ2VtZW50LCBzZXJ2ZXIgc3VwcG9ydCwgYW5kIGVudGVycHJpc2UgSVQgaW5mcmEgc2VydmljZXMuXCIsXG4gICAgXCJtYWluRW50aXR5XCI6IHtcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2l0LWluZnJhc3RydWN0dXJlLXNlcnZpY2VzI3NlcnZpY2VcIlxuICAgIH0sXG4gICAgXCJpc1BhcnRPZlwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyN3ZWJzaXRlXCJcbiAgICB9LFxuICAgIFwiYnJlYWRjcnVtYlwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9pdC1pbmZyYXN0cnVjdHVyZS1zZXJ2aWNlcyNicmVhZGNydW1iXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2l0LWluZnJhc3RydWN0dXJlLXNlcnZpY2VzI3NlcnZpY2VcIixcbiAgICBcIm5hbWVcIjogXCJJVCBJbmZyYXN0cnVjdHVyZSBTZXJ2aWNlc1wiLFxuICAgIFwic2VydmljZVR5cGVcIjogXCJNYW5hZ2VkIElUIEluZnJhc3RydWN0dXJlICYgSVQgSW5mcmEgU29sdXRpb25zXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtaW5mcmFzdHJ1Y3R1cmUtc2VydmljZXNcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3liYWVtIFRlY2ggaXMgYW4gaW5kdXN0cnktbGVhZGluZyBJVCBpbmZyYXN0cnVjdHVyZSBzb2x1dGlvbnMgcHJvdmlkZXIgZGVsaXZlcmluZyBlbmQtdG8tZW5kIElUIGluZnJhc3RydWN0dXJlIG1hbmFnZW1lbnQgc2VydmljZXMsIGNsb3VkIGFyY2hpdGVjdHVyZSBvcHRpbWl6YXRpb24sIG5ldHdvcmsgdmlydHVhbGl6YXRpb24sIGFuZCBtYW5hZ2VkIElUIGluZnJhc3RydWN0dXJlIHNvbHV0aW9ucy4gT3VyIGVudGVycHJpc2UgSVQgaW5mcmEgc2VydmljZXMgZW5jb21wYXNzIG5leHQtZ2VuZXJhdGlvbiBoeXBlciBjb252ZXJnZWQgSVQgaW5mcmFzdHJ1Y3R1cmUgZGVwbG95bWVudCwgc2VydmVyIGFkbWluaXN0cmF0aW9uLCBhdXRvbWF0ZWQgZGF0YSBiYWNrdXAsIGRpc2FzdGVyIHJlY292ZXJ5IHBsYW5uaW5nLCBhbmQgMjQvNyBzeXN0ZW0gbW9uaXRvcmluZy4gQXMgYSB0cnVzdGVkIHBhcnRuZXIgZm9yIHNvbHV0aW9uIElUIGluZnJhc3RydWN0dXJlLCB3ZSBlbmdpbmVlciByZXNpbGllbnQgSVQgaW5mcmEgbWFuYWdlbWVudCBmcmFtZXdvcmtzIGFuZCByb2J1c3QgSVQgaW5mcmEgc2VydmljZXMgdGhhdCBlbGltaW5hdGUgc3lzdGVtIGRvd250aW1lLCBtYXhpbWl6ZSBoYXJkd2FyZSBwZXJmb3JtYW5jZSwgZW5zdXJlIHplcm8tdHJ1c3QgbmV0d29yayBzZWN1cml0eSwgYW5kIHNjYWxlIHNlYW1sZXNzbHkgdG8gc3VwcG9ydCBoaWdoLWdyb3d0aCBidXNpbmVzcyBlbnZpcm9ubWVudHMuXCIsXG4gICAgXCJwcm92aWRlclwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyNvcmdhbml6YXRpb25cIlxuICAgIH0sXG4gICAgXCJhcmVhU2VydmVkXCI6IHtcbiAgICAgIFwiQHR5cGVcIjogXCJQbGFjZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiR2xvYmFsXCJcbiAgICB9LFxuICAgIFwiaGFzT2ZmZXJDYXRhbG9nXCI6IHtcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2l0LWluZnJhc3RydWN0dXJlLXNlcnZpY2VzI3N1YnNlcnZpY2VzXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiT2ZmZXJDYXRhbG9nXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtaW5mcmFzdHJ1Y3R1cmUtc2VydmljZXMjc3Vic2VydmljZXNcIixcbiAgICBcIm5hbWVcIjogXCJXaGF0IFdlIE1hbmFnZSAtIElUIEluZnJhIFNvbHV0aW9uc1wiLFxuICAgIFwiaXRlbUxpc3RFbGVtZW50XCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgIFwiaXRlbU9mZmVyZWRcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiTWFuYWdlZCBOZXR3b3JrIEluZnJhc3RydWN0dXJlXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIjI0LzcgYWN0aXZlIG5ldHdvcmsgbWFuYWdlbWVudCwgZmlyZXdhbGwgY29uZmlndXJhdGlvbiwgU0QtV0FOIG9wdGltaXphdGlvbiwgYW5kIHNlY3VyZSByb3V0aW5nLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgICBcIml0ZW1PZmZlcmVkXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiU2VydmljZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlNlcnZlciBNYW5hZ2VtZW50ICYgVmlydHVhbGl6YXRpb25cIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiV2luZG93cyAmIExpbnV4IHNlcnZlciBkZXBsb3ltZW50LCBWTXdhcmUvSHlwZXItViB2aXJ0dWFsaXphdGlvbiwgYW5kIGNsb3VkIHNlcnZlciBwcm92aXNpb25pbmcuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgIFwiaXRlbU9mZmVyZWRcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSHlwZXItQ29udmVyZ2VkIElUIEluZnJhc3RydWN0dXJlIChIQ0kpXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlVuaWZpZWQgY29tcHV0ZSwgc3RvcmFnZSwgYW5kIG5ldHdvcmtpbmcgYXJjaGl0ZWN0dXJlIGZvciBoaWdoLWRlbnNpdHkgdmlydHVhbCBlbnZpcm9ubWVudHMuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgIFwiaXRlbU9mZmVyZWRcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQ2xvdWQgSW5mcmFzdHJ1Y3R1cmUgJiBNaWdyYXRpb25cIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQVdTLCBBenVyZSwgYW5kIEh5YnJpZCBDbG91ZCBwcm92aXNpb25pbmcsIGFyY2hpdGVjdHVyZSBkZXNpZ24sIGFuZCBzZWFtbGVzcyBjbG91ZCBtaWdyYXRpb24uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgICAgIFwiaXRlbU9mZmVyZWRcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJTZXJ2aWNlXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQmFja3VwICYgRGlzYXN0ZXIgUmVjb3ZlcnkgKERSYWFTKVwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBdXRvbWF0ZWQgZGF0YSByZXBsaWNhdGlvbiwgZGlzYXN0ZXIgcmVjb3ZlcnkgcGxhbm5pbmcsIGFuZCBidXNpbmVzcyBjb250aW51aXR5IHNvbHV0aW9ucy5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICAgICAgXCJpdGVtT2ZmZXJlZFwiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIlNlcnZpY2VcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCIyNC83IE1vbml0b3JpbmcgJiBJVCBPcGVyYXRpb25zXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2FjdGl2ZSBlbmRwb2ludCBzZWN1cml0eSwgcGF0Y2ggbWFuYWdlbWVudCwgU09DIGludGVncmF0aW9uLCBhbmQgSVQgaGVscGRlc2sgc3VwcG9ydC5cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIkhvd1RvXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtaW5mcmFzdHJ1Y3R1cmUtc2VydmljZXMjaG93dG9cIixcbiAgICBcIm5hbWVcIjogXCJBIDUtU3RlcCBKb3VybmV5IHRvIEluZnJhc3RydWN0dXJlIEV4Y2VsbGVuY2VcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiT3VyIHN5c3RlbWF0aWMgcHJvY2VzcyBmb3IgYXNzZXNzaW5nLCBlbmdpbmVlcmluZywgZGVwbG95aW5nLCBtYW5hZ2luZywgYW5kIHNjYWxpbmcgZW50ZXJwcmlzZSBJVCBpbmZyYXN0cnVjdHVyZS5cIixcbiAgICBcInN0ZXBcIjogW1xuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiSG93VG9TdGVwXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogMSxcbiAgICAgICAgXCJuYW1lXCI6IFwiQXNzZXNzXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkV2YWx1YXRpbmcgeW91ciBjdXJyZW50IElUIGluZnJhIHNlcnZpY2VzLCBoYXJkd2FyZSBhc3NldHMsIHNlY3VyaXR5IHBvc3R1cmUsIGFuZCBib3R0bGVuZWNrcy5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkhvd1RvU3RlcFwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDIsXG4gICAgICAgIFwibmFtZVwiOiBcIkRlc2lnblwiLFxuICAgICAgICBcInRleHRcIjogXCJBcmNoaXRlY3RpbmcgY3VzdG9taXplZCBoeXBlci1jb252ZXJnZWQgSVQgaW5mcmFzdHJ1Y3R1cmUgYW5kIHJlc2lsaWVudCBjbG91ZC9vbi1wcmVtaXNlIElUIGluZnJhIHNvbHV0aW9ucy5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkhvd1RvU3RlcFwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDMsXG4gICAgICAgIFwibmFtZVwiOiBcIkRlcGxveVwiLFxuICAgICAgICBcInRleHRcIjogXCJFeGVjdXRpbmcgc2VhbWxlc3MgaGFyZHdhcmUsIG5ldHdvcmssIGFuZCBzZXJ2ZXIgaW50ZWdyYXRpb24gd2l0aCB6ZXJvIGltcGFjdCBvbiBkYWlseSBvcGVyYXRpb25zLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiSG93VG9TdGVwXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogNCxcbiAgICAgICAgXCJuYW1lXCI6IFwiTWFuYWdlXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkRlbGl2ZXJpbmcgY29udGludW91cyAyNC83IElUIGluZnJhc3RydWN0dXJlIG1hbmFnZW1lbnQgc2VydmljZXMsIHByb2FjdGl2ZSBwYXRjaGluZywgYW5kIGhlYWx0aCBjaGVja3MuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJIb3dUb1N0ZXBcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiA1LFxuICAgICAgICBcIm5hbWVcIjogXCJTY2FsZVwiLFxuICAgICAgICBcInRleHRcIjogXCJPcHRpbWl6aW5nIHN5c3RlbXMgZm9yIGZ1dHVyZSBncm93dGgsIGNsb3VkIGV4cGFuc2lvbiwgYW5kIGV2b2x2aW5nIGVudGVycHJpc2UgdGVjaG5vbG9neSByZXF1aXJlbWVudHMuXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcIkB0eXBlXCI6IFwiRkFRUGFnZVwiLFxuICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL2l0LWluZnJhc3RydWN0dXJlLXNlcnZpY2VzI2ZhcVwiLFxuICAgIFwibWFpbkVudGl0eVwiOiBbXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICBcIm5hbWVcIjogXCJXaGF0IGFyZSBNYW5hZ2VkIElUIFNlcnZpY2VzP1wiLFxuICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiTWFuYWdlZCBJVCBTZXJ2aWNlcyBtZWFucyBvdXRzb3VyY2luZyB0aGUgZGF5LXRvLWRheSBtYW5hZ2VtZW50IG9mIHlvdXIgSVQgaW5mcmFzdHJ1Y3R1cmUgLSBtb25pdG9yaW5nLCBtYWludGVuYW5jZSwgc3VwcG9ydCwgYW5kIHNlY3VyaXR5IC0gdG8gQ3liYWVtIFRlY2ggZm9yIGEgZml4ZWQgbW9udGhseSBmZWUuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIldoYXQgaXMgaW5jbHVkZWQgaW4gYW4gSVQgQU1DP1wiLFxuICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiT3VyIEFNQ3MgY292ZXIgcHJldmVudGl2ZSBtYWludGVuYW5jZSwgc2NoZWR1bGVkIGhlYWx0aCBjaGVja3MsIGhhcmR3YXJlICYgc29mdHdhcmUgbWFpbnRlbmFuY2UsIHNlY3VyaXR5IHVwZGF0ZXMsIHBlcmZvcm1hbmNlIHR1bmluZywgYW5kIHByaW9yaXR5IHN1cHBvcnQgZm9yIGRlc2t0b3BzLCBsYXB0b3BzLCBzZXJ2ZXJzLCBuZXR3b3JrcywgZmlyZXdhbGxzLCBhbmQgc3RvcmFnZS5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiRG8geW91IHByb3ZpZGUgYm90aCByZW1vdGUgYW5kIG9uc2l0ZSBzdXBwb3J0P1wiLFxuICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiWWVzLiBNb3N0IGlzc3VlcyBhcmUgcmVzb2x2ZWQgaW5zdGFudGx5IHRocm91Z2ggc2VjdXJlIHJlbW90ZSBzdXBwb3J0LCBhbmQgb3VyIGVuZ2luZWVycyBwcm92aWRlIG9uc2l0ZSBhc3Npc3RhbmNlIHdoZW5ldmVyIHBoeXNpY2FsIGludGVydmVudGlvbiBpcyBuZWVkZWQuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkNhbiB5b3Ugd29yayBhbG9uZ3NpZGUgb3VyIGV4aXN0aW5nIElUIHRlYW0/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJBYnNvbHV0ZWx5LiBPdXIgQ28tTWFuYWdlZCBJVCBtb2RlbCBzdXBwbGVtZW50cyB5b3VyIGludGVybmFsIHRlYW0gd2l0aCAyNHg3IG1vbml0b3JpbmcsIHNwZWNpYWxpc3Qgc2tpbGxzLCBhbmQgZXh0cmEgY2FwYWNpdHkgZHVyaW5nIHBlYWsgZGVtYW5kLlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICBcIm5hbWVcIjogXCJIb3cgcXVpY2tseSBkbyB5b3UgcmVzcG9uZCB0byBpc3N1ZXM/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJSZXNwb25zZSB0aW1lcyBhcmUgZGVmaW5lZCBpbiB5b3VyIFNMQS4gQ3JpdGljYWwgaW5jaWRlbnRzIHJlY2VpdmUgaW1tZWRpYXRlIGF0dGVudGlvbiAtIHR5cGljYWwgcmVzcG9uc2Ugd2l0aGluIDE1LTMwIG1pbnV0ZXMuXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIldoaWNoIGxvY2F0aW9ucyBkbyB5b3Ugc2VydmU/XCIsXG4gICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJIZWFkcXVhcnRlcmVkIGluIFB1bmUgKEhpbmphd2FkaSksIHdlIHNlcnZlIGNsaWVudHMgYWNyb3NzIEluZGlhIHdpdGggcmVtb3RlLWZpcnN0IHN1cHBvcnQgdGhhdCBleHRlbmRzIHRvIGludGVybmF0aW9uYWwgY2xpZW50cy5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiSG93IG11Y2ggZG8gTWFuYWdlZCBJVCBTZXJ2aWNlcyBjb3N0P1wiLFxuICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiUHJpY2luZyBkZXBlbmRzIG9uIHVzZXJzLCBkZXZpY2VzLCBzZXJ2ZXJzLCBhbmQgc2VydmljZSBsZXZlbC4gV2Ugb2ZmZXIgcGVyLXVzZXIgYW5kIHBlci1kZXZpY2UgbW9udGhseSBtb2RlbHMuIE1vc3QgY2xpZW50cyBzYXZlIDMwLTQwJSB2cy4gaW4taG91c2UgSVQuXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyNvcmdhbml6YXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJDeWJhZW0gVGVjaCBQdnQuIEx0ZC5cIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tXCIsXG4gICAgXCJsb2dvXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vYXNzZXRzL2N5YmFlbS1sb2dvLURYODBaY3JZLnBuZ1wiLFxuICAgIFwiZW1haWxcIjogXCJzYWxlc0BjeWJhZW10ZWNoLmNvbVwiLFxuICAgIFwidGVsZXBob25lXCI6IFwiKzkxLTkwMjg1NDEzODNcIixcbiAgICBcImFkZHJlc3NcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIlBvc3RhbEFkZHJlc3NcIixcbiAgICAgIFwic3RyZWV0QWRkcmVzc1wiOiBcIk9mZmljZSAzMDQsIFN1cmF0d2FsYSBNYXJrIFBsYXp6bywgSGluamV3YWRpXCIsXG4gICAgICBcImFkZHJlc3NMb2NhbGl0eVwiOiBcIlB1bmVcIixcbiAgICAgIFwiYWRkcmVzc1JlZ2lvblwiOiBcIk1haGFyYXNodHJhXCIsXG4gICAgICBcInBvc3RhbENvZGVcIjogXCI0MTEwNTdcIixcbiAgICAgIFwiYWRkcmVzc0NvdW50cnlcIjogXCJJTlwiXG4gICAgfSxcbiAgICBcInNhbWVBc1wiOiBbXG4gICAgICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2N5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9jeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0BjeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9jeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8veC5jb20vY3liYWVtdGVjaFwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIkJyZWFkY3J1bWJMaXN0XCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvaXQtaW5mcmFzdHJ1Y3R1cmUtc2VydmljZXMjYnJlYWRjcnVtYlwiLFxuICAgIFwiaXRlbUxpc3RFbGVtZW50XCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogMSxcbiAgICAgICAgXCJuYW1lXCI6IFwiU29sdXRpb25zXCIsXG4gICAgICAgIFwiaXRlbVwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9uc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiAyLFxuICAgICAgICBcIm5hbWVcIjogXCJJVCBJbmZyYXN0cnVjdHVyZSBTZXJ2aWNlc1wiXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG59O1xuXG5leHBvcnQgeyBibG9nU2VvRGF0YSB9IGZyb20gXCIuL3NyYy9kYXRhL3Nlby9ibG9nU2VvXCI7XG5cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcQ3liYWVtdGVjaFxcXFxDeWJhZW10ZWNoXFxcXEN5YmFlbXRlY2hcXFxcSU4gSE9VU0VcXFxcQ3liYWVtdGVjaCAyM3NlcFxcXFxzcmNcXFxcZGF0YVxcXFxzZW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXEN5YmFlbXRlY2hcXFxcQ3liYWVtdGVjaFxcXFxDeWJhZW10ZWNoXFxcXElOIEhPVVNFXFxcXEN5YmFlbXRlY2ggMjNzZXBcXFxcc3JjXFxcXGRhdGFcXFxcc2VvXFxcXGxlYWRlcnNoaXBTZW8udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L0N5YmFlbXRlY2gvQ3liYWVtdGVjaC9DeWJhZW10ZWNoL0lOJTIwSE9VU0UvQ3liYWVtdGVjaCUyMDIzc2VwL3NyYy9kYXRhL3Nlby9sZWFkZXJzaGlwU2VvLnRzXCI7ZXhwb3J0IGNvbnN0IGxlYWRlcnNoaXBTZW9EYXRhID0ge1xuICB0aXRsZTogXCJMZWFkZXJzaGlwIFRlYW0gfCBWaXNpb24gJiBFeHBlcnRpc2UgfCBDeWJhZW0gVGVjaFwiLFxuICBkZXNjcmlwdGlvbjogXCJNZWV0IG91ciBsZWFkZXJzaGlwIHRlYW0gZHJpdmluZyBidXNpbmVzcyBzdHJhdGVneSwgdGVjaG5vbG9neSBpbm5vdmF0aW9uLCBjbGllbnQgc3VjY2VzcywgYW5kIHN1c3RhaW5hYmxlIG9yZ2FuaXphdGlvbmFsIGdyb3d0aC5cIixcbiAgY2Fub25pY2FsOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xlYWRlcnNoaXBcIixcbiAga2V5d29yZHM6IFwiQ3liYWVtIFRlY2ggbGVhZGVyc2hpcCwgZXhlY3V0aXZlIGxlYWRlcnNoaXAgUHVuZSwgYnVzaW5lc3Mgc3RyYXRlZ3kgY29uc3VsdGluZywgdGVjaG5vbG9neSBsZWFkZXJzaGlwLCBkaWdpdGFsIHRyYW5zZm9ybWF0aW9uIGxlYWRlcnMsIGlubm92YXRpb24gbGVhZGVyc2hpcCwgQ0VPIEN5YmFlbSBUZWNoLCBleGVjdXRpdmUgbWFuYWdlbWVudCwgSVQgY29tcGFueSBsZWFkZXJzaGlwLCBzb2Z0d2FyZSBjb21wYW55IGV4ZWN1dGl2ZXMsIGVudGVycHJpc2UgdGVjaG5vbG9neSBzdHJhdGVneSwgY29ycG9yYXRlIGxlYWRlcnNoaXAsIGJ1c2luZXNzIGlubm92YXRpb24sIGRpZ2l0YWwgY29uc3VsdGluZyBsZWFkZXJzaGlwXCIsXG4gIG9nVGl0bGU6IFwiTGVhZGVyc2hpcCBUZWFtIHwgQnVzaW5lc3MgU3RyYXRlZ3kgJiBFeGVjdXRpdmUgVmlzaW9uIHwgQ3liYWVtIFRlY2hcIixcbiAgb2dEZXNjcmlwdGlvbjogXCJNZWV0IHRoZSBleGVjdXRpdmUgbGVhZGVyc2hpcCBkcml2aW5nIEN5YmFlbSBUZWNoXCIsXG4gIHR3aXR0ZXJUaXRsZTogXCJMZWFkZXJzaGlwIFRlYW0gfCBDeWJhZW0gVGVjaFwiLFxuICB0d2l0dGVyRGVzY3JpcHRpb246IFwiRGlzY292ZXIgdGhlIGV4ZWN1dGl2ZSB0ZWFtIGxlYWRpbmcgaW5ub3ZhdGlvbiwgYnVzaW5lc3Mgc3RyYXRlZ3ksIGVudGVycHJpc2UgdGVjaG5vbG9neSwgYW5kIGRpZ2l0YWwgdHJhbnNmb3JtYXRpb24gYXQgQ3liYWVtIFRlY2guXCIsXG4gIGpzb25MZDogW1xuICB7XG4gICAgXCJAdHlwZVwiOiBcIkNvbGxlY3Rpb25QYWdlXCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9sZWFkZXJzaGlwI3dlYnBhZ2VcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xlYWRlcnNoaXBcIixcbiAgICBcIm5hbWVcIjogXCJMZWFkZXJzaGlwIFRlYW0gfCBDeWJhZW0gVGVjaFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJNZWV0IHRoZSBsZWFkZXJzaGlwIHRlYW0gZHJpdmluZyBzdHJhdGVneSwgdGVjaG5vbG9neSwgb3BlcmF0aW9ucywgYW5kIGdsb2JhbCBncm93dGggYXQgQ3liYWVtIFRlY2guXCIsXG4gICAgXCJpc1BhcnRPZlwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyN3ZWJzaXRlXCJcbiAgICB9LFxuICAgIFwiYnJlYWRjcnVtYlwiOiB7XG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xlYWRlcnNoaXAjYnJlYWRjcnVtYlwiXG4gICAgfSxcbiAgICBcIm1haW5FbnRpdHlcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIkl0ZW1MaXN0XCIsXG4gICAgICBcIm5hbWVcIjogXCJDeWJhZW0gVGVjaCBFeGVjdXRpdmUgTGVhZGVyc2hpcFwiLFxuICAgICAgXCJudW1iZXJPZkl0ZW1zXCI6IDUsXG4gICAgICBcIml0ZW1MaXN0RWxlbWVudFwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIixcbiAgICAgICAgICBcInBvc2l0aW9uXCI6IDEsXG4gICAgICAgICAgXCJpdGVtXCI6IHtcbiAgICAgICAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgICAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vbGVhZGVyc2hpcC9yb2hhbi1iaG9zYWxlI3BlcnNvblwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUm9oYW4gQmhvc2FsZVwiLFxuICAgICAgICAgICAgXCJqb2JUaXRsZVwiOiBcIkZvdW5kZXIgJiBDaGllZiBFeGVjdXRpdmUgT2ZmaWNlclwiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9sZWFkZXJzaGlwL3JvaGFuLWJob3NhbGVcIixcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9wZW9wbGUvcm9oYW4ucG5nXCIsXG4gICAgICAgICAgICBcInNhbWVBc1wiOiBbXG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3JvaGFuYmhvc2FsZTE1L1wiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgICAgXCJwb3NpdGlvblwiOiAyLFxuICAgICAgICAgIFwiaXRlbVwiOiB7XG4gICAgICAgICAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgICAgICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xlYWRlcnNoaXAvYWtzaGF5LW5hdmxlI3BlcnNvblwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWtzaGF5IE5hdmxlXCIsXG4gICAgICAgICAgICBcImpvYlRpdGxlXCI6IFwiQ2hpZWYgVGVjaG5vbG9neSAmIFByb2R1Y3QgT2ZmaWNlclwiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9sZWFkZXJzaGlwL2Frc2hheS1uYXZsZVwiLFxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3Blb3BsZS9ha3NoYXkucG5nXCIsXG4gICAgICAgICAgICBcInNhbWVBc1wiOiBbXG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Frc2hheS1uYXZsZS0yOTI5YTI0NS9cIlxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICAgIFwicG9zaXRpb25cIjogMyxcbiAgICAgICAgICBcIml0ZW1cIjoge1xuICAgICAgICAgICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgICAgICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9sZWFkZXJzaGlwL3lhc2gtYmhhbGVrYXIjcGVyc29uXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJZYXNoIEJoYWxla2FyXCIsXG4gICAgICAgICAgICBcImpvYlRpdGxlXCI6IFwiRGlyZWN0b3IgLSBPcGVyYXRpb25zICYgQnVzaW5lc3MgU3RyYXRlZ3lcIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vbGVhZGVyc2hpcC95YXNoLWJoYWxla2FyXCIsXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vcGVvcGxlL3lhc2gucG5nXCIsXG4gICAgICAgICAgICBcInNhbWVBc1wiOiBbXG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3lhc2gtYmhhbGVrYXItaW1vZXhvL1wiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgICAgXCJwb3NpdGlvblwiOiA0LFxuICAgICAgICAgIFwiaXRlbVwiOiB7XG4gICAgICAgICAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgICAgICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xlYWRlcnNoaXAvZGlsaXAtZHNvdXphI3BlcnNvblwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGlsaXAgRCdTb3V6YVwiLFxuICAgICAgICAgICAgXCJqb2JUaXRsZVwiOiBcIkRpcmVjdG9yIC0gR2xvYmFsIEJ1c2luZXNzIFJlbGF0aW9uc1wiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9sZWFkZXJzaGlwL2RpbGlwLWRzb3V6YVwiLFxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3Blb3BsZS9EaWxpcCUyMEQnU291emEucG5nXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIixcbiAgICAgICAgICBcInBvc2l0aW9uXCI6IDUsXG4gICAgICAgICAgXCJpdGVtXCI6IHtcbiAgICAgICAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgICAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vbGVhZGVyc2hpcC9zYW5qYXktbWFoYWRlby1ib2JkZSNwZXJzb25cIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk1yLiBTYW5qYXkgTWFoYWRlbyBCb2JkZVwiLFxuICAgICAgICAgICAgXCJqb2JUaXRsZVwiOiBcIlN0cmF0ZWdpYyBBZHZpc29yIC0gRW50ZXJwcmlzZSBUcmFuc2Zvcm1hdGlvbiwgRGlnaXRhbCBHb3Zlcm5tZW50IC8gZS1Hb3Zlcm5hbmNlICYgUHVibGljIFNlY3RvciBJbm5vdmF0aW9uXCIsXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL2xlYWRlcnNoaXAvc2FuamF5LW1haGFkZW8tYm9iZGVcIixcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9wZW9wbGUvU2FuamF5JTIwTWFoYWRlbyUyMEJvYmFkZS5wbmdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwiQHR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyNvcmdhbml6YXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJDeWJhZW0gVGVjaCBQdnQuIEx0ZC5cIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tXCIsXG4gICAgXCJsb2dvXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vYXNzZXRzL2N5YmFlbS1sb2dvLURYODBaY3JZLnBuZ1wiLFxuICAgIFwiZW1haWxcIjogXCJzYWxlc0BjeWJhZW10ZWNoLmNvbVwiLFxuICAgIFwidGVsZXBob25lXCI6IFwiKzkxLTkwMjg1NDEzODNcIixcbiAgICBcImFkZHJlc3NcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIlBvc3RhbEFkZHJlc3NcIixcbiAgICAgIFwic3RyZWV0QWRkcmVzc1wiOiBcIk9mZmljZSAzMDQsIFN1cmF0d2FsYSBNYXJrIFBsYXp6bywgSGluamV3YWRpXCIsXG4gICAgICBcImFkZHJlc3NMb2NhbGl0eVwiOiBcIlB1bmVcIixcbiAgICAgIFwiYWRkcmVzc1JlZ2lvblwiOiBcIk1haGFyYXNodHJhXCIsXG4gICAgICBcInBvc3RhbENvZGVcIjogXCI0MTEwNTdcIixcbiAgICAgIFwiYWRkcmVzc0NvdW50cnlcIjogXCJJTlwiXG4gICAgfSxcbiAgICBcInNhbWVBc1wiOiBbXG4gICAgICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2N5YmFlbXRlY2hcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9jeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0BjeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9jeWJhZW10ZWNoXCIsXG4gICAgICBcImh0dHBzOi8veC5jb20vY3liYWVtdGVjaFwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJAdHlwZVwiOiBcIkJyZWFkY3J1bWJMaXN0XCIsXG4gICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9sZWFkZXJzaGlwI2JyZWFkY3J1bWJcIixcbiAgICBcIml0ZW1MaXN0RWxlbWVudFwiOiBbXG4gICAgICB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDEsXG4gICAgICAgIFwibmFtZVwiOiBcIkhvbWVcIixcbiAgICAgICAgXCJpdGVtXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb21cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogMixcbiAgICAgICAgXCJuYW1lXCI6IFwiTGVhZGVyc2hpcFwiXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxDeWJhZW10ZWNoXFxcXEN5YmFlbXRlY2hcXFxcQ3liYWVtdGVjaFxcXFxJTiBIT1VTRVxcXFxDeWJhZW10ZWNoIDIzc2VwXFxcXHNyY1xcXFxkYXRhXFxcXHNlb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcQ3liYWVtdGVjaFxcXFxDeWJhZW10ZWNoXFxcXEN5YmFlbXRlY2hcXFxcSU4gSE9VU0VcXFxcQ3liYWVtdGVjaCAyM3NlcFxcXFxzcmNcXFxcZGF0YVxcXFxzZW9cXFxcbW9iaWxlQXBwU2VvLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9DeWJhZW10ZWNoL0N5YmFlbXRlY2gvQ3liYWVtdGVjaC9JTiUyMEhPVVNFL0N5YmFlbXRlY2glMjAyM3NlcC9zcmMvZGF0YS9zZW8vbW9iaWxlQXBwU2VvLnRzXCI7ZXhwb3J0IGNvbnN0IG1vYmlsZUFwcFNlb0RhdGEgPSB7XG4gIHRpdGxlOiBcIk1vYmlsZSBBcHAgRGV2ZWxvcG1lbnQgQ29tcGFueSB8IGlPUyAmIEFuZHJvaWQgQXBwcyB8IEN5YmFlbSBUZWNoXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkJ1aWxkIGN1c3RvbSBpT1MsIEFuZHJvaWQsIGFuZCBjcm9zcy1wbGF0Zm9ybSBtb2JpbGUgYXBwcyB3aXRoIEN5YmFlbSBUZWNoLiBIaWdoLXBlcmZvcm1hbmNlLCBzZWN1cmUsIGludHVpdGl2ZSBuYXRpdmUgYW5kIGh5YnJpZCBtb2JpbGUgYXBwIHNvbHV0aW9ucy5cIixcbiAgY2Fub25pY2FsOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9tb2JpbGUtYXBwLWRldmVsb3BtZW50XCIsXG4gIGtleXdvcmRzOiBcIm1vYmlsZSBhcHAgZGV2ZWxvcG1lbnQgY29tcGFueSwgaU9TIGFwcCBkZXZlbG9wbWVudCwgQW5kcm9pZCBhcHAgZGV2ZWxvcG1lbnQsIFJlYWN0IE5hdGl2ZSBhcHAgZGV2ZWxvcG1lbnQsIEZsdXR0ZXIgYXBwIGRldmVsb3BtZW50LCBtb2JpbGUgYXBwIGNvbXBhbnkgUHVuZSwgZW50ZXJwcmlzZSBtb2JpbGl0eSBzb2x1dGlvbnMsIGN1c3RvbSBtb2JpbGUgYXBwbGljYXRpb25zIEluZGlhLCBjcm9zcy1wbGF0Zm9ybSBtb2JpbGUgYXBwc1wiLFxuICBvZ1RpdGxlOiBcIk1vYmlsZSBBcHAgRGV2ZWxvcG1lbnQgU2VydmljZXMgfCBpT1MsIEFuZHJvaWQgJiBDcm9zcy1QbGF0Zm9ybSB8IEN5YmFlbSBUZWNoXCIsXG4gIG9nRGVzY3JpcHRpb246IFwiRGVzaWduLCBidWlsZCBhbmQgc2NhbGUgaW50dWl0aXZlIG1vYmlsZSBleHBlcmllbmNlcyBmb3IgaU9TLCBBbmRyb2lkIGFuZCBjcm9zcy1wbGF0Zm9ybSB3aXRoIGR1YWwgSVNPLWNlcnRpZmllZCBlbmdpbmVlcmluZy5cIixcbiAgdHdpdHRlclRpdGxlOiBcIk1vYmlsZSBBcHAgRGV2ZWxvcG1lbnQgU2VydmljZXMgfCBDeWJhZW0gVGVjaFwiLFxuICB0d2l0dGVyRGVzY3JpcHRpb246IFwiRnJvbSBuYXRpdmUgaU9TICYgQW5kcm9pZCB0byBGbHV0dGVyICYgUmVhY3QgTmF0aXZlLiBIaWdoLXBlcmZvcm1hbmNlIG1vYmlsZSBhcHBzIGVuZ2luZWVyZWQgZm9yIHJlYWwgYnVzaW5lc3MgZ3Jvd3RoLlwiLFxuICBqc29uTGQ6IFtcbiAgICB7XG4gICAgICBcIkB0eXBlXCI6IFwiV2ViUGFnZVwiLFxuICAgICAgXCJAaWRcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvbW9iaWxlLWFwcC1kZXZlbG9wbWVudCN3ZWJwYWdlXCIsXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9tb2JpbGUtYXBwLWRldmVsb3BtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJNb2JpbGUgQXBwIERldmVsb3BtZW50IFNlcnZpY2VzIHwgQ3liYWVtIFRlY2hcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDeWJhZW0gVGVjaCBwcm92aWRlcyBlbmQtdG8tZW5kIG1vYmlsZSBhcHAgZGV2ZWxvcG1lbnQgc2VydmljZXMgaW5jbHVkaW5nIG5hdGl2ZSBpT1MsIEFuZHJvaWQsIGFuZCBjcm9zcy1wbGF0Zm9ybSBzb2x1dGlvbnMuXCIsXG4gICAgICBcIm1haW5FbnRpdHlcIjoge1xuICAgICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9tb2JpbGUtYXBwLWRldmVsb3BtZW50I3NlcnZpY2VcIlxuICAgICAgfSxcbiAgICAgIFwiaXNQYXJ0T2ZcIjoge1xuICAgICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyN3ZWJzaXRlXCJcbiAgICAgIH0sXG4gICAgICBcImJyZWFkY3J1bWJcIjoge1xuICAgICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9tb2JpbGUtYXBwLWRldmVsb3BtZW50I2JyZWFkY3J1bWJcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJAdHlwZVwiOiBcIlNlcnZpY2VcIixcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL21vYmlsZS1hcHAtZGV2ZWxvcG1lbnQjc2VydmljZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiTW9iaWxlIEFwcCBEZXZlbG9wbWVudCBTZXJ2aWNlc1wiLFxuICAgICAgXCJzZXJ2aWNlVHlwZVwiOiBcIk1vYmlsZSBBcHBsaWNhdGlvbiBEZXZlbG9wbWVudFwiLFxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnMvbW9iaWxlLWFwcC1kZXZlbG9wbWVudFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkN1c3RvbSBtb2JpbGUgYXBwbGljYXRpb24gZGV2ZWxvcG1lbnQgc2VydmljZXMgZm9yIGlPUywgQW5kcm9pZCwgYW5kIGNyb3NzLXBsYXRmb3JtIGZyYW1ld29ya3MgaW5jbHVkaW5nIEZsdXR0ZXIgYW5kIFJlYWN0IE5hdGl2ZS5cIixcbiAgICAgIFwicHJvdmlkZXJcIjoge1xuICAgICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tLyNvcmdhbml6YXRpb25cIlxuICAgICAgfSxcbiAgICAgIFwiYXJlYVNlcnZlZFwiOiB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJQbGFjZVwiLFxuICAgICAgICBcIm5hbWVcIjogXCJHbG9iYWxcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJAdHlwZVwiOiBcIkZBUVBhZ2VcIixcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vc29sdXRpb25zL21vYmlsZS1hcHAtZGV2ZWxvcG1lbnQjZmFxXCIsXG4gICAgICBcIm1haW5FbnRpdHlcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSG93IGxvbmcgZG9lcyBhcHAgZGV2ZWxvcG1lbnQgdGFrZT9cIixcbiAgICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcbiAgICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlR5cGljYWwgbW9iaWxlIE1WUCBwcm9qZWN0cyB0YWtlIGJldHdlZW4gOCB0byAxMiB3ZWVrcywgd2hpbGUgZmVhdHVyZS1yaWNoIGVudGVycHJpc2UgbW9iaWxpdHkgcGxhdGZvcm1zIHJhbmdlIGZyb20gMTIgdG8gMjAgd2Vla3Mgd2l0aCBpdGVyYXRpdmUgYWdpbGUgc3ByaW50cy5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlNob3VsZCB3ZSBidWlsZCBuYXRpdmUgb3IgY3Jvc3MtcGxhdGZvcm0/XCIsXG4gICAgICAgICAgXCJhY2NlcHRlZEFuc3dlclwiOiB7XG4gICAgICAgICAgICBcIkB0eXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCJOYXRpdmUgKFN3aWZ0L0tvdGxpbikgaXMgaWRlYWwgZm9yIGhhcmR3YXJlLWludGVuc2l2ZSBmZWF0dXJlcywgY29tcGxleCBncmFwaGljcywgb3IgcGxhdGZvcm0tc3BlY2lmaWMgVVguIENyb3NzLXBsYXRmb3JtIChGbHV0dGVyL1JlYWN0IE5hdGl2ZSkgb2ZmZXJzIGZhc3RlciB0aW1lLXRvLW1hcmtldCBhbmQgbG93ZXIgZGV2ZWxvcG1lbnQgY29zdHMgd2l0aCA5MCUrIHNoYXJlZCBjb2RlLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQ2FuIHlvdSBtb2Rlcm5pemUgYW4gZXhpc3RpbmcgYXBwP1wiLFxuICAgICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiWWVzLCB3ZSByZWZhY3RvciBsZWdhY3kgY29kZWJhc2VzLCB1cGdyYWRlIGZyYW1ld29ya3MsIHJlZGVzaWduIFVJL1VYLCBhbmQgb3B0aW1pemUgYmFja2VuZCBBUElzIGZvciBwZXJmb3JtYW5jZSBhbmQgc2VjdXJpdHkuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJIb3cgZG8geW91IHNlY3VyZSBhcHAgZGF0YT9cIixcbiAgICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcbiAgICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIldlIGVuZm9yY2UgYmlvbWV0cmljIGF1dGhlbnRpY2F0aW9uLCBUTFMgMS4zIGRhdGEgZW5jcnlwdGlvbiBpbiB0cmFuc2l0LCBTUUxDaXBoZXIgLyBLZXljaGFpbiBlbmNyeXB0aW9uIGF0IHJlc3QsIGFuZCBJU08gMjcwMDEtY2VydGlmaWVkIGRldmVsb3BtZW50IHByb3RvY29scy5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkRvIHlvdSBzdXBwb3J0IHB1Ymxpc2hpbmcgdG8gYXBwIHN0b3Jlcz9cIixcbiAgICAgICAgICBcImFjY2VwdGVkQW5zd2VyXCI6IHtcbiAgICAgICAgICAgIFwiQHR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlllcywgb3VyIHRlYW0gaGFuZGxlcyB0aGUgZW5kLXRvLWVuZCBkZXBsb3ltZW50IHByb2Nlc3Mgb24gQXBwbGUgQXBwIFN0b3JlIGFuZCBHb29nbGUgUGxheSBDb25zb2xlLCBlbnN1cmluZyBmdWxsIGFkaGVyZW5jZSB0byByZXZpZXcgZ3VpZGVsaW5lcy5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkNhbiB0aGUgYXBwIGludGVncmF0ZSB3aXRoIG91ciBleGlzdGluZyBzeXN0ZW1zP1wiLFxuICAgICAgICAgIFwiYWNjZXB0ZWRBbnN3ZXJcIjoge1xuICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiQWJzb2x1dGVseS4gV2UgZW5naW5lZXIgc2VjdXJlIFJFU1RmdWwgYW5kIEdyYXBoUUwgQVBJcyB0byBzZWFtbGVzc2x5IGJyaWRnZSBtb2JpbGUgYXBwcyB3aXRoIGV4aXN0aW5nIEVSUHMsIENSTXMsIGNsb3VkIGRhdGFiYXNlcywgYW5kIHRoaXJkLXBhcnR5IFNhYVMgc2VydmljZXMuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiQHR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly93d3cuY3liYWVtdGVjaC5jb20vI29yZ2FuaXphdGlvblwiLFxuICAgICAgXCJuYW1lXCI6IFwiQ3liYWVtIFRlY2ggUHZ0LiBMdGQuXCIsXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tXCIsXG4gICAgICBcImxvZ29cIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9hc3NldHMvY3liYWVtLWxvZ28tRFg4MFpjclkucG5nXCIsXG4gICAgICBcImVtYWlsXCI6IFwic2FsZXNAY3liYWVtdGVjaC5jb21cIixcbiAgICAgIFwidGVsZXBob25lXCI6IFwiKzkxLTkwMjg1NDEzODNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJAdHlwZVwiOiBcIkJyZWFkY3J1bWJMaXN0XCIsXG4gICAgICBcIkBpZFwiOiBcImh0dHBzOi8vd3d3LmN5YmFlbXRlY2guY29tL3NvbHV0aW9ucy9tb2JpbGUtYXBwLWRldmVsb3BtZW50I2JyZWFkY3J1bWJcIixcbiAgICAgIFwiaXRlbUxpc3RFbGVtZW50XCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICAgIFwicG9zaXRpb25cIjogMSxcbiAgICAgICAgICBcIm5hbWVcIjogXCJTb2x1dGlvbnNcIixcbiAgICAgICAgICBcIml0ZW1cIjogXCJodHRwczovL3d3dy5jeWJhZW10ZWNoLmNvbS9zb2x1dGlvbnNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgICAgXCJwb3NpdGlvblwiOiAyLFxuICAgICAgICAgIFwibmFtZVwiOiBcIk1vYmlsZSBBcHAgRGV2ZWxvcG1lbnRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5WCxTQUFTLG9CQUFvQjtBQUN0WixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sUUFBUTs7O0FDSDhaLElBQU0sa0JBQWtCO0FBQUEsRUFDbmMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUFBLEVBQ1YsU0FBUztBQUFBLEVBQ1QsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2Qsb0JBQW9CO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ047QUFBQSxNQUNFLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGdCQUFnQjtBQUFBLFFBQ2Q7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULGFBQWE7QUFBQSxVQUNiLGVBQWU7QUFBQSxVQUNmLGNBQWM7QUFBQSxVQUNkLHFCQUFxQjtBQUFBLFFBQ3ZCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxtQkFBbUI7QUFBQSxRQUNqQixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixlQUFlO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLElBQ2pCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLE1BQ2IsY0FBYztBQUFBLE1BQ2QsV0FBVztBQUFBLFFBQ1QsU0FBUztBQUFBLFFBQ1QsaUJBQWlCO0FBQUEsUUFDakIsbUJBQW1CO0FBQUEsUUFDbkIsaUJBQWlCO0FBQUEsUUFDakIsY0FBYztBQUFBLFFBQ2Qsa0JBQWtCO0FBQUEsTUFDcEI7QUFBQSxNQUNBLE9BQU87QUFBQSxRQUNMLFNBQVM7QUFBQSxRQUNULFlBQVk7QUFBQSxRQUNaLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxNQUNULG1CQUFtQjtBQUFBLFFBQ2pCO0FBQUEsVUFDRSxTQUFTO0FBQUEsVUFDVCxZQUFZO0FBQUEsVUFDWixRQUFRO0FBQUEsVUFDUixRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULFlBQVk7QUFBQSxVQUNaLFFBQVE7QUFBQSxVQUNSLFFBQVE7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsTUFDVCxjQUFjO0FBQUEsUUFDWjtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1Isa0JBQWtCO0FBQUEsWUFDaEIsU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1Isa0JBQWtCO0FBQUEsWUFDaEIsU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1Isa0JBQWtCO0FBQUEsWUFDaEIsU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1Isa0JBQWtCO0FBQUEsWUFDaEIsU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1Isa0JBQWtCO0FBQUEsWUFDaEIsU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7OztBQ3RJTyxJQUFNLGNBQWM7QUFBQSxFQUN6QixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsRUFDVCxlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxvQkFBb0I7QUFBQSxFQUNwQixRQUFRO0FBQUEsSUFDUjtBQUFBLE1BQ0UsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsZUFBZTtBQUFBLE1BQ2YsYUFBYTtBQUFBLFFBQ1gsT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBLGNBQWM7QUFBQSxJQUNoQjtBQUFBLElBQ0E7QUFBQSxNQUNFLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixpQkFBaUI7QUFBQSxNQUNqQixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxpQkFBaUI7QUFBQSxRQUNqQixtQkFBbUI7QUFBQSxRQUNuQixpQkFBaUI7QUFBQSxRQUNqQixjQUFjO0FBQUEsUUFDZCxrQkFBa0I7QUFBQSxNQUNwQjtBQUFBLE1BQ0EsT0FBTztBQUFBLFFBQ0wsU0FBUztBQUFBLFFBQ1QsWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBLGdCQUFnQjtBQUFBLFFBQ2Q7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULGFBQWE7QUFBQSxVQUNiLGVBQWU7QUFBQSxVQUNmLFNBQVM7QUFBQSxVQUNULHFCQUFxQjtBQUFBLFlBQ25CO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQVc7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGNBQWM7QUFBQSxRQUNaO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLG1CQUFtQjtBQUFBLFFBQ2pCLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLG1CQUFtQjtBQUFBLFVBQ2pCO0FBQUEsWUFDRSxTQUFTO0FBQUEsWUFDVCxlQUFlO0FBQUEsY0FDYixTQUFTO0FBQUEsY0FDVCxRQUFRO0FBQUEsY0FDUixPQUFPO0FBQUEsY0FDUCxlQUFlO0FBQUEsWUFDakI7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsU0FBUztBQUFBLFlBQ1QsZUFBZTtBQUFBLGNBQ2IsU0FBUztBQUFBLGNBQ1QsUUFBUTtBQUFBLGNBQ1IsT0FBTztBQUFBLGNBQ1AsZUFBZTtBQUFBLFlBQ2pCO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLFNBQVM7QUFBQSxZQUNULGVBQWU7QUFBQSxjQUNiLFNBQVM7QUFBQSxjQUNULFFBQVE7QUFBQSxjQUNSLE9B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LE1BQ1osU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxlQUFlO0FBQUEsTUFDZixZQUFZO0FBQUEsUUFDVixPQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxTQUFTO0FBQUEsTUFDVCxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixlQUFlO0FBQUEsTUFDZixnQkFBZ0I7QUFBQSxRQUNkO0FBQUEsTUFDRjtBQUFBLE1BQ0EsY0FBYztBQUFBLE1BQ2QsY0FBYztBQUFBLE1BQ2QsWUFBWTtBQUFBLElBQ2Q7QUFBQSxJQUNBO0FBQUEsTUFDRSxTQUFTO0FBQUEsTUFDVCxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixlQUFlO0FBQUEsTUFDZixPQUFPO0FBQUEsTUFDUCxXQUFXO0FBQUEsUUFDVDtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1IsY0FBYztBQUFBLFVBQ2QsV0FBVztBQUFBLFFBQ2I7QUFBQSxRQUNBO0FBQUEsVUFDRSxTQUFTO0FBQUEsVUFDVCxRQUFRO0FBQUEsVUFDUixjQUFjO0FBQUEsVUFDZCxXQUFXO0FBQUEsUUFDYjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxVQUNSLGNBQWM7QUFBQSxVQUNkLFdBQVc7QUFBQSxRQUNiO0FBQUEsUUFDQTtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1IsY0FBYztBQUFBLFVBQ2QsV0FBVztBQUFBLFFBQ2I7QUFBQSxRQUNBO0FBQUEsVUFDRSxTQUFTO0FBQUEsVUFDVCxRQUFRO0FBQUEsVUFDUixjQUFjO0FBQUEsVUFDZCxXQUFXO0FBQUEsUUFDYjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBO0FB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QUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsZUFBZTtBQUFBLFlBQ2IsU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFlBQ1IsdUJBQXVCO0FBQUEsWUFDdkIsZUFBZTtBQUFBLFVBQ2pCO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLFFBQ1o7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxVQUNSLGtCQUFrQjtBQUFBLFlBQ2hCLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxVQUNSLGtCQUFrQjtBQUFBLFlBQ2hCLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxVQUNSLGtCQUFrQjtBQUFBLFlBQ2hCLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxVQUNSLGtCQUFrQjtBQUFBLFlBQ2hCLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxVQUNSLGtCQUFrQjtBQUFBLFlBQ2hCLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLFFBQ1QsU0FBUztBQUFBLFFB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QVE7QUFBQSxZQUNSLGVBQWU7QUFBQSxVQUNqQjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxTQUFTO0FBQUEsVUFDVCxlQUFlO0FBQUEsWUFDYixTQUFTO0FBQUEsWUFDVCxRQUFRO0FBQUEsWUFDUixlQUFlO0FBQUEsVUFDakI7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxTQUFTO0FBQUEsTUFDVCxPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsUUFDWjtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1Isa0JBQWtCO0FBQUEsWUFDaEIsU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1Isa0JBQWtCO0FBQUEsWUFDaEIsU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1Isa0JBQWtCO0FBQUEsWUFDaEIsU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1Isa0JBQWtCO0FBQUEsWUFDaEIsU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1Isa0JBQWtCO0FBQUEsWUFDaEIsU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxTQUFTO0FBQUEsTUFDVCxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEs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SUFDQTtBQUFBLE1BQ0UsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsZUFBZTtBQUFBLE1BQ2YsUUFBUTtBQUFBLFFBQ047QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULFlBQVk7QUFBQSxVQUNaLFFBQVE7QUFBQSxVQUNSLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsWUFBWTtBQUFBLFVBQ1osUUFBUTtBQUFBLFVBQ1IsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxTQUFTO0FBQUEsVUFDVCxZQUFZO0FBQUEsVUFDWixRQUFRO0FBQUEsVUFDUixRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULFlBQVk7QUFBQSxVQUNaLFFBQVE7QUFBQSxVQUNSLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsWUFBWTtBQUFBLFVBQ1osUUFBUTtBQUFBLFVBQ1IsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxRQUNaO0FBQUEsVUFDRSxTQUFTO0FBQUEsVUFDVCxRQUFRO0FBQUEsVUFDUixrQkFBa0I7QUFBQSxZQUNoQixTQUFTO0FBQUEsWUFDVCxRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxTQUFTO0FBQUEsVUFDVCxRQUFRO0FBQUEsVUFDUixrQkFBa0I7QUFBQSxZQUNoQixTQUFTO0FBQUEsWUFDVCxRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxTQUFTO0FBQUEsVUFDVCxRQUFRO0FBQUEsVUFDUixrQkFBa0I7QUFBQSxZQUNoQixTQUFTO0FBQUEsWUFDVCxRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxT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LFFBQVE7QUFBQSxVQUNSLGtCQUFrQjtBQUFBLFlBQ2hCLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxVQUNSLGtCQUFrQjtBQUFBLFlBQ2hCLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxVQUNSLGtCQUFrQjtBQUFBLFlBQ2hCLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxVQUNSLGtCQUFrQjtBQUFBLFlBQ2hCLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxVQUNSLGtCQUFrQjtBQUFBLFlBQ2hCLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxVQUNSLGtCQUFrQjtBQUFBLFlBQ2hCLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxTQUFTO0FBQUEsTUFDVCxPQUFPO0FBQUEsTUFDUCxtQkFBbUI7QUFBQSxRQUNqQjtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsWUFBWTtBQUFBLFVBQ1osUUFBUTtBQUFBLFVBQ1IsUUFBUTtBQUFBLFFBQ1Y7QUFB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
