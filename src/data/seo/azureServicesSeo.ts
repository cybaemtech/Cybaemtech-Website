import { SEOData } from "@/types/seo";

export const azureServicesSeoData: SEOData = {
  title: "Microsoft Azure Services & Managed Azure Solutions | CybaemTech",
  description: "CybaemTech provides Microsoft Azure consulting, migration, managed services, Entra ID, AVD, security, backup, disaster recovery, DevOps and cloud optimization.",
  canonical: "https://www.cybaemtech.com/cloud-services/microsoft-azure",
  keywords: "Microsoft Azure services, Azure managed services, Azure consulting services, Azure migration services, Azure cloud services, Azure support services, Azure Virtual Desktop services, Azure backup services, Azure disaster recovery, Azure security services, Azure server migration, Azure website hosting, Azure DevOps services, managed Azure services India, Azure cloud consulting India",
  ogTitle: "Microsoft Azure Services Designed Around Your Business | CybaemTech",
  ogDescription: "CybaemTech provides Microsoft Azure consulting, migration, managed services, Entra ID, AVD, security, backup, disaster recovery, DevOps and cloud optimization.",
  twitterTitle: "Microsoft Azure Services Designed Around Your Business | CybaemTech",
  twitterDescription: "CybaemTech provides Microsoft Azure consulting, migration, managed services, Entra ID, AVD, security, backup, disaster recovery, DevOps and cloud optimization.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Microsoft Azure Services",
        "provider": {
          "@type": "Organization",
          "name": "CybaemTech"
        },
        "description": "CybaemTech provides Microsoft Azure consulting, migration, managed services, Entra ID, AVD, security, backup, disaster recovery, DevOps and cloud optimization."
      },
      {
        "@type": "Organization",
        "name": "CybaemTech",
        "url": "https://www.cybaemtech.com",
        "logo": "https://www.cybaemtech.com/images/cybaem-logo.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": []
      }
    ]
  }
};
