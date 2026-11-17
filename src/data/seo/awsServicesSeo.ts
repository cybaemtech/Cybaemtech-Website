import { SEOData } from "@/types/seo";

export const awsServicesSeoData: SEOData = {
  title: "AWS Cloud Services & Managed AWS Solutions | CybaemTech",
  description: "CybaemTech provides AWS consulting, migration, security, DevOps, backup, disaster recovery, cost optimization and managed AWS services.",
  canonical: "https://www.cybaemtech.com/cloud-services/aws",
  keywords: "AWS cloud services, AWS managed services, AWS consulting services, AWS migration services, AWS cloud support, AWS cost optimization, AWS security services, AWS disaster recovery services, AWS DevOps services",
  ogTitle: "AWS Cloud Services Designed Around Your Business | CybaemTech",
  ogDescription: "CybaemTech provides AWS consulting, migration, security, DevOps, backup, disaster recovery, cost optimization and managed AWS services.",
  twitterTitle: "AWS Cloud Services Designed Around Your Business | CybaemTech",
  twitterDescription: "CybaemTech provides AWS consulting, migration, security, DevOps, backup, disaster recovery, cost optimization and managed AWS services.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "AWS Cloud Services",
        "provider": {
          "@type": "Organization",
          "name": "CybaemTech"
        },
        "description": "CybaemTech provides AWS consulting, migration, security, DevOps, backup, disaster recovery, cost optimization and managed AWS services."
      },
      {
        "@type": "Organization",
        "name": "CybaemTech",
        "url": "https://www.cybaemtech.com",
        "logo": "https://www.cybaemtech.com/images/cybaem-logo.webp"
      }
    ]
  }
};
