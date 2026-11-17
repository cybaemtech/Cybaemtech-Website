import { enterpriseSoftwareSeoData } from "./enterpriseSoftwareSeo";
import { webSystemsSeoData } from "./webSystemsSeo";
import { itStaffAugmentationSeoData } from "./itStaffAugmentationSeo";
import { managedITSeoData } from "./managedITSeo";
import { digitalGrowthSeoData } from "./digitalGrowthSeo";
import { itInfrastructureSeoData } from "./itInfrastructureSeo";

export interface SolutionSeo {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImageAlt: string;
  twitterTitle?: string;
  twitterDescription: string;
  twitterImageAlt?: string;
  jsonLdSchemas: unknown[];
}

export const solutionsSeoData: Record<string, SolutionSeo> = {
  "enterprise-software": {
    metaTitle: enterpriseSoftwareSeoData.title,
    metaDescription: enterpriseSoftwareSeoData.description,
    keywords: enterpriseSoftwareSeoData.keywords,
    ogTitle: enterpriseSoftwareSeoData.ogTitle,
    ogDescription: enterpriseSoftwareSeoData.ogDescription,
    ogImageAlt: "Cybaem Tech enterprise software solutions",
    twitterTitle: enterpriseSoftwareSeoData.twitterTitle,
    twitterDescription: enterpriseSoftwareSeoData.twitterDescription,
    twitterImageAlt: "Cybaem Tech enterprise software solutions",
    jsonLdSchemas: enterpriseSoftwareSeoData.jsonLd as unknown[],
  },

  "web-systems": {
    metaTitle: webSystemsSeoData.title,
    metaDescription: webSystemsSeoData.description,
    keywords: webSystemsSeoData.keywords,
    ogTitle: webSystemsSeoData.ogTitle,
    ogDescription: webSystemsSeoData.ogDescription,
    ogImageAlt: "Web Systems Development Services | Cybaem Tech",
    twitterTitle: webSystemsSeoData.twitterTitle,
    twitterDescription: webSystemsSeoData.twitterDescription,
    twitterImageAlt: "Web Systems Development Services",
    jsonLdSchemas: webSystemsSeoData.jsonLd as unknown[],
  },

  "it-staff-augmentation": {
    metaTitle: itStaffAugmentationSeoData.title,
    metaDescription: itStaffAugmentationSeoData.description,
    keywords: itStaffAugmentationSeoData.keywords,
    ogTitle: itStaffAugmentationSeoData.ogTitle,
    ogDescription: itStaffAugmentationSeoData.ogDescription,
    ogImageAlt: "IT Staff Augmentation Services | Cybaem Tech",
    twitterTitle: itStaffAugmentationSeoData.twitterTitle,
    twitterDescription: itStaffAugmentationSeoData.twitterDescription,
    twitterImageAlt: "IT Staff Augmentation Services",
    jsonLdSchemas: itStaffAugmentationSeoData.jsonLd as unknown[],
  },

  "managed-it-cloud-security": {
    metaTitle: managedITSeoData.title,
    metaDescription: managedITSeoData.description,
    keywords: managedITSeoData.keywords,
    ogTitle: managedITSeoData.ogTitle,
    ogDescription: managedITSeoData.ogDescription,
    ogImageAlt: "Managed IT & Cloud Security Services | Cybaem Tech",
    twitterTitle: managedITSeoData.twitterTitle,
    twitterDescription: managedITSeoData.twitterDescription,
    twitterImageAlt: "Managed IT & Cloud Security Services",
    jsonLdSchemas: managedITSeoData.jsonLd as unknown[],
  },

  "digital-revenue-growth": {
    metaTitle: digitalGrowthSeoData.title,
    metaDescription: digitalGrowthSeoData.description,
    keywords: digitalGrowthSeoData.keywords,
    ogTitle: digitalGrowthSeoData.ogTitle,
    ogDescription: digitalGrowthSeoData.ogDescription,
    ogImageAlt: "Digital Growth & B2B Marketing Services | Cybaem Tech",
    twitterTitle: digitalGrowthSeoData.twitterTitle,
    twitterDescription: digitalGrowthSeoData.twitterDescription,
    twitterImageAlt: "Digital Growth & B2B Marketing Services",
    jsonLdSchemas: digitalGrowthSeoData.jsonLd as unknown[],
  },

  "it-infrastructure-services": {
    metaTitle: itInfrastructureSeoData.title,
    metaDescription: itInfrastructureSeoData.description,
    keywords: itInfrastructureSeoData.keywords,
    ogTitle: itInfrastructureSeoData.ogTitle,
    ogDescription: itInfrastructureSeoData.ogDescription,
    ogImageAlt: "IT Infrastructure Management Services | Cybaem Tech",
    twitterTitle: itInfrastructureSeoData.twitterTitle,
    twitterDescription: itInfrastructureSeoData.twitterDescription,
    twitterImageAlt: "IT Infrastructure Management Services",
    jsonLdSchemas: itInfrastructureSeoData.jsonLd as unknown[],
  },
};
