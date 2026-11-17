import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { ConsultationModalProvider } from "@/context/ConsultationModalContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);
  return null;
};

const CookieConsentBanner = lazy(() => import("./components/CookieConsentBanner"));

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Approach = lazy(() => import("./pages/Approach"));
const Leadership = lazy(() => import("./pages/Leadership"));
const LeaderProfile = lazy(() => import("./pages/LeaderProfile"));
const SolutionPage = lazy(() => import("./components/solutions/SolutionPage"));

// Services & Solutions Pages
const WebSystems = lazy(() => import("./pages/services/WebSystems"));
const ITStaffAugmentation = lazy(() => import("./pages/services/ITStaffAugmentation"));
const DigitalGrowth = lazy(() => import("./pages/services/DigitalGrowth"));
const PerformanceMarketing = lazy(() => import("./pages/services/PerformanceMarketing"));
const SeoAeoGeo = lazy(() => import("./pages/services/SeoAeoGeo"));
const SocialMediaManagement = lazy(() => import("./pages/services/SocialMediaManagement"));
const ManagedIT = lazy(() => import("./pages/services/ManagedIT"));
const ITInfrastructure = lazy(() => import("./pages/services/ITInfrastructure"));
const EnterpriseSoftware = lazy(() => import("./pages/services/EnterpriseSoftware"));
const SoftwareDevelopment = lazy(() => import("./pages/services/SoftwareDevelopment"));
const MobileApp = lazy(() => import("./pages/services/MobileApp"));
const AWSServices = lazy(() => import("./pages/services/AWSServices"));
const AzureServices = lazy(() => import("./pages/services/AzureServices"));
const CloudSolutions = lazy(() => import("./pages/services/CloudSolutions"));
const CloudSecurity = lazy(() => import("./pages/services/CloudSecurity"));
const GrowthRevenue = lazy(() => import("./pages/services/GrowthRevenue"));
const Cybersecurity = lazy(() => import("./pages/services/Cybersecurity"));

// General / Corporate Pages
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Login = lazy(() => import("./pages/Login"));
const Admin = lazy(() => import("./pages/Admin"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Careers = lazy(() => import("./pages/Careers"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const PuneLocation = lazy(() => import("./pages/PuneLocation"));
const Product = lazy(() => import("./product"));
const Crm = lazy(() => import("./product/crm"));

// Industries Pages
const RealEstateTechnologySolutions = lazy(() => import("./pages/industries/RealEstateTechnologySolutions"));
const HealthcareTechnologySolutions = lazy(() => import("./pages/industries/HealthcareTechnologySolutions"));
const ManufacturingTechnologySolutions = lazy(() => import("./pages/industries/ManufacturingTechnologySolutions"));
const TransportationLogisticsTechnologySolutions = lazy(() => import("./pages/industries/TransportationLogisticsTechnologySolutions"));
const RetailEcommerceTechnologySolutions = lazy(() => import("./pages/industries/RetailEcommerceTechnologySolutions"));
const FinancialServicesTechnologySolutions = lazy(() => import("./pages/industries/FinancialServicesTechnologySolutions"));
const HospitalityTechnologySolutions = lazy(() => import("./pages/industries/HospitalityTechnologySolutions"));
const EducationTechnologySolutions = lazy(() => import("./pages/industries/EducationTechnologySolutions"));
const IndustryTechnologySolutions = lazy(() => import("./pages/industries/IndustryTechnologySolutions"));
const VideosHub = lazy(() => import("./pages/videos/VideosHub"));
const VideoWatchPage = lazy(() => import("./pages/videos/VideoWatchPage"));

const queryClient = new QueryClient();

const SkipToContent = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:text-sm focus:font-medium"
  >
    Skip to main content
  </a>
);

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id) || document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }, 100);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ConsultationModalProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <SmoothScroll />
            <SkipToContent />
            <ScrollToTop />
            <Suspense fallback={null}><CookieConsentBanner /></Suspense>
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/in/software-company-in-pune" element={<PuneLocation />} />
                <Route path="/software-company-in-pune" element={<Navigate to="/in/software-company-in-pune" replace />} />
                <Route path="/pune-office" element={<Navigate to="/in/software-company-in-pune" replace />} />
                <Route path="/life-at-cybaemtech" element={<Approach />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="/leadership/mr-sanjay-mahadeo-bobde" element={<Navigate to="/leadership/sanjay-mahadeo-bobde" replace />} />
                <Route path="/leadership/mr.-sanjay-mahadeo-bobde" element={<Navigate to="/leadership/sanjay-mahadeo-bobde" replace />} />
                <Route path="/leadership/:id" element={<LeaderProfile />} />
                <Route path="/approach" element={<Navigate to="/life-at-cybaemtech" replace />} />
                <Route path="/solutions" element={<Navigate to="/" replace />} />
                <Route path="/software-platforms/web-systems" element={<WebSystems />} />
                <Route path="/solutions/web-systems" element={<Navigate to="/software-platforms/web-systems" replace />} />
                <Route path="/web-systems" element={<Navigate to="/software-platforms/web-systems" replace />} />
                <Route path="/solutions/it-staff-augmentation" element={<Navigate to="/cloud-security/it-infrastructure-services" replace />} />
                <Route path="/digital-growth/performance-marketing" element={<PerformanceMarketing />} />
                <Route path="/digital-growth/seo-aeo-geo" element={<SeoAeoGeo />} />
                <Route path="/digital-marketing/seo-aeo-geo" element={<Navigate to="/digital-growth/seo-aeo-geo" replace />} />
                <Route path="/seo-aeo-geo" element={<Navigate to="/digital-growth/seo-aeo-geo" replace />} />
                <Route path="/solutions/seo-aeo-geo" element={<Navigate to="/digital-growth/seo-aeo-geo" replace />} />
                <Route path="/digital-marketing/seo" element={<Navigate to="/digital-growth/seo-aeo-geo" replace />} />
                <Route path="/digital-growth/social-media-management" element={<SocialMediaManagement />} />
                <Route path="/social-media-management" element={<Navigate to="/digital-growth/social-media-management" replace />} />
                <Route path="/solutions/social-media-management" element={<Navigate to="/digital-growth/social-media-management" replace />} />
                <Route path="/digital-growth" element={<GrowthRevenue />} />
                <Route path="/growth-revenue" element={<Navigate to="/digital-growth" replace />} />
                <Route path="/growth-and-revenue" element={<Navigate to="/digital-growth" replace />} />
                <Route path="/solutions/growth-revenue" element={<Navigate to="/digital-growth" replace />} />
                <Route path="/solutions/Growth-Revenue" element={<Navigate to="/digital-growth" replace />} />
                <Route path="/solutions/Growth & Revenue" element={<Navigate to="/digital-growth" replace />} />
                <Route path="/solutions/Growth%20&%20Revenue" element={<Navigate to="/digital-growth" replace />} />
                <Route path="/solutions/growth-and-revenue" element={<Navigate to="/digital-growth" replace />} />
                <Route path="/solutions/digital-revenue-growth" element={<Navigate to="/digital-growth" replace />} />
                <Route path="/solutions/digital-marketing" element={<Navigate to="/digital-growth" replace />} />
                <Route path="/performance-marketing" element={<Navigate to="/digital-growth/performance-marketing" replace />} />
                <Route path="/solutions/managed-it-cloud-security" element={<Navigate to="/cloud-security" replace />} />
                <Route path="/cloud-security/it-infrastructure-services" element={<ITInfrastructure />} />
                <Route path="/solutions/it-infrastructure-services" element={<Navigate to="/cloud-security/it-infrastructure-services" replace />} />
                <Route path="/solutions/it-infrastructure" element={<Navigate to="/cloud-security/it-infrastructure-services" replace />} />
                <Route path="/it-infrastructure-services" element={<Navigate to="/cloud-security/it-infrastructure-services" replace />} />
                <Route path="/it-infrastructure" element={<Navigate to="/cloud-security/it-infrastructure-services" replace />} />
                <Route path="/it-staff-augmentation" element={<Navigate to="/cloud-security/it-infrastructure-services" replace />} />
                <Route path="/managed-it" element={<Navigate to="/cloud-security/it-infrastructure-services" replace />} />
                <Route path="/managed-it-cloud-security" element={<Navigate to="/cloud-security" replace />} />
                <Route path="/digital-marketing" element={<Navigate to="/digital-growth/performance-marketing" replace />} />
                <Route path="/software-platforms" element={<SoftwareDevelopment />} />
                <Route path="/solutions/software-platforms" element={<Navigate to="/software-platforms" replace />} />
                <Route path="/solutions/Software-Platforms" element={<Navigate to="/software-platforms" replace />} />
                <Route path="/solutions/Software & Platforms" element={<Navigate to="/software-platforms" replace />} />
                <Route path="/solutions/Software%20&%20Platforms" element={<Navigate to="/software-platforms" replace />} />
                <Route path="/solutions/software-and-platforms" element={<Navigate to="/software-platforms" replace />} />
                <Route path="/software-and-platforms" element={<Navigate to="/software-platforms" replace />} />
                <Route path="/solutions/software-development" element={<Navigate to="/software-platforms" replace />} />
                <Route path="/software-development" element={<Navigate to="/software-platforms" replace />} />
                <Route path="/solutions/software" element={<Navigate to="/software-platforms" replace />} />
                <Route path="/software-platforms/enterprise-software" element={<EnterpriseSoftware />} />
                <Route path="/solutions/enterprise-software" element={<Navigate to="/software-platforms/enterprise-software" replace />} />
                <Route path="/solutions/enterprise-software-development" element={<Navigate to="/software-platforms/enterprise-software" replace />} />
                <Route path="/enterprise-software-development" element={<Navigate to="/software-platforms/enterprise-software" replace />} />
                <Route path="/enterprise-software" element={<Navigate to="/software-platforms/enterprise-software" replace />} />
                <Route path="/software-platforms/mobile-app-development" element={<MobileApp />} />
                <Route path="/solutions/mobile-app-development" element={<Navigate to="/software-platforms/mobile-app-development" replace />} />
                <Route path="/solutions/mobile-app" element={<Navigate to="/software-platforms/mobile-app-development" replace />} />
                <Route path="/solutions/mobile-apps" element={<Navigate to="/software-platforms/mobile-app-development" replace />} />
                <Route path="/mobile-app-development" element={<Navigate to="/software-platforms/mobile-app-development" replace />} />
                <Route path="/mobile-app" element={<Navigate to="/software-platforms/mobile-app-development" replace />} />
                <Route path="/mobile-apps" element={<Navigate to="/software-platforms/mobile-app-development" replace />} />
                <Route path="/solutions/:slug" element={<SolutionPage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/career" element={<Navigate to="/careers" replace />} />
                <Route path="/carrier" element={<Navigate to="/careers" replace />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/refund-cancellation-policy" element={<RefundPolicy />} />
                <Route path="/accessibility" element={<Accessibility />} />
                <Route path="/cloud-services/aws" element={<AWSServices />} />
                <Route path="/cloud-services/microsoft-azure" element={<AzureServices />} />
                <Route path="/cloud-security" element={<CloudSecurity />} />
                <Route path="/solutions/cloud-security" element={<Navigate to="/cloud-security" replace />} />
                <Route path="/solutions/Cloud & Security" element={<Navigate to="/cloud-security" replace />} />
                <Route path="/solutions/Cloud%20&%20Security" element={<Navigate to="/cloud-security" replace />} />
                <Route path="/solutions/cloud-and-security" element={<Navigate to="/cloud-security" replace />} />
                <Route path="/cloud-security/cloud-solutions" element={<CloudSolutions />} />
                <Route path="/cloud-solutions" element={<Navigate to="/cloud-security/cloud-solutions" replace />} />
                <Route path="/cloud-services" element={<Navigate to="/cloud-security/cloud-solutions" replace />} />
                <Route path="/solutions/cloud" element={<Navigate to="/cloud-security/cloud-solutions" replace />} />
                <Route path="/solutions/cloud-solutions" element={<Navigate to="/cloud-security/cloud-solutions" replace />} />
                <Route path="/cloud-security/cybersecurity" element={<Cybersecurity />} />
                <Route path="/cybersecurity" element={<Navigate to="/cloud-security/cybersecurity" replace />} />
                <Route path="/solutions/cybersecurity" element={<Navigate to="/cloud-security/cybersecurity" replace />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/crm" element={<Crm />} />
                <Route path="/industries/real-estate-technology-solutions" element={<RealEstateTechnologySolutions />} />
                <Route path="/industries/real-estate" element={<Navigate to="/industries/real-estate-technology-solutions" replace />} />
                <Route path="/industries/healthcare-technology-solutions" element={<HealthcareTechnologySolutions />} />
                <Route path="/industries/healthcare" element={<Navigate to="/industries/healthcare-technology-solutions" replace />} />
                <Route path="/industries/manufacturing-technology-solutions" element={<ManufacturingTechnologySolutions />} />
                <Route path="/industries/manufacturing" element={<Navigate to="/industries/manufacturing-technology-solutions" replace />} />
                <Route path="/industries/transportation-logistics-technology-solutions" element={<TransportationLogisticsTechnologySolutions />} />
                <Route path="/industries/transportation-logistics" element={<Navigate to="/industries/transportation-logistics-technology-solutions" replace />} />
                <Route path="/industries/logistics" element={<Navigate to="/industries/transportation-logistics-technology-solutions" replace />} />
                <Route path="/industries/logistics-supply-chain-technology-solutions" element={<Navigate to="/industries/transportation-logistics-technology-solutions" replace />} />
                <Route path="/industries/retail-ecommerce-technology-solutions" element={<RetailEcommerceTechnologySolutions />} />
                <Route path="/industries/retail-ecommerce" element={<Navigate to="/industries/retail-ecommerce-technology-solutions" replace />} />
                <Route path="/industries/retail" element={<Navigate to="/industries/retail-ecommerce-technology-solutions" replace />} />
                <Route path="/industries/ecommerce" element={<Navigate to="/industries/retail-ecommerce-technology-solutions" replace />} />
                <Route path="/industries/financial-services-technology-solutions" element={<FinancialServicesTechnologySolutions />} />
                <Route path="/industries/financial-services" element={<Navigate to="/industries/financial-services-technology-solutions" replace />} />
                <Route path="/industries/financial-services-fintech-technology-solutions" element={<Navigate to="/industries/financial-services-technology-solutions" replace />} />
                <Route path="/industries/hospitality-technology-solutions" element={<HospitalityTechnologySolutions />} />
                <Route path="/industries/hospitality" element={<Navigate to="/industries/hospitality-technology-solutions" replace />} />
                <Route path="/industries/hotel-hospitality-technology-solutions" element={<Navigate to="/industries/hospitality-technology-solutions" replace />} />
                <Route path="/industries/education-technology-solutions" element={<EducationTechnologySolutions />} />
                <Route path="/industries/education" element={<Navigate to="/industries/education-technology-solutions" replace />} />
                <Route path="/industries/professional-services-technology-solutions" element={<Navigate to="/industries/real-estate-technology-solutions" replace />} />
                <Route path="/industries/professional-services" element={<Navigate to="/industries/real-estate-technology-solutions" replace />} />
                <Route path="/industries" element={<Navigate to="/industries/real-estate-technology-solutions" replace />} />
                <Route path="/industries/:slug" element={<IndustryTechnologySolutions />} />
                <Route path="/videos" element={<VideosHub />} />
                <Route path="/videos/foundation-day-celebration-2026" element={<VideoWatchPage key="foundation-day" slugOverride="foundation-day-celebration-2026" />} />
                <Route path="/videos/it-infrastructure-setup-for-smarter-business-connectivity" element={<VideoWatchPage key="it-infra" slugOverride="it-infrastructure-setup-for-smarter-business-connectivity" />} />
                <Route path="/videos/:slug" element={<VideoWatchPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ConsultationModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
