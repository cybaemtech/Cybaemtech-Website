import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import SEOHead from "@/components/SEOHead";
import { homeSeoData } from "@/data/seo/homeSeo";
import TrustAnchorSection from "@/components/TrustAnchorSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import DifferenceSection from "@/components/DifferenceSection";
import IndustriesSection from "@/components/IndustriesSection";
import GlobalReachSection from "@/components/GlobalReachSection";
import OrbitSection from "@/components/OrbitSection";
import ClientTestimonialsSection from "@/components/ClientTestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={homeSeoData.title}
        description={homeSeoData.description}
        canonical={homeSeoData.canonical}
        keywords={homeSeoData.keywords}
        ogTitle={homeSeoData.ogTitle}
        ogDescription={homeSeoData.ogDescription}
        ogImageAlt={homeSeoData.ogImageAlt}
        twitterTitle={homeSeoData.twitterTitle}
        twitterDescription={homeSeoData.twitterDescription}
        twitterImageAlt={homeSeoData.twitterImageAlt}
        jsonLd={homeSeoData.jsonLd}
      />
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <SolutionsSection />
      <WhyChooseUsSection />
      <DifferenceSection />
      <IndustriesSection />
      <TrustAnchorSection />
      <GlobalReachSection />
      <OrbitSection />
      <ClientTestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
