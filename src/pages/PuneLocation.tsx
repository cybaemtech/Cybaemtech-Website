import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Plane,
  Train,
  Bus,
  Smartphone,
  Navigation,
  ExternalLink,
  ArrowRight,
  Check,
  CheckCircle2,
  Users,
  Wifi,
  Coffee,
  ArrowUpDown,
  DoorOpen,
  ChevronDown,
  ChevronUp,
  UserCheck,
  Layers,
  Handshake,
  Building2,
  Calendar,
  Sparkles,
} from "lucide-react";

// Building & Location images
import suratWalaMarkPlazzoImg from "@/assets/location/surat wala mark plzao.webp";

// Landmark images from location folder
import rajivGandhiInfotechParkImg from "@/assets/location/rajiv-gandhi-infotech-park.webp";
import dmartHinjewadiImg from "@/assets/location/demart.jpg";
import highwayImg from "@/assets/location/Mumbai-Bengaluru Highway (NH48).png";
import wakadDangeChowkImg from "@/assets/location/Wakad and Dange Chowk.jpg";
import hinjewadiMetroImg from "@/assets/location/Hinjewadi Metro Station (Upcoming).avif";

export default function PuneLocation() {
  const { openConsultationModal } = useConsultationModal();

  // FAQ open/close state
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
  });

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const MAP_EXTERNAL_LINK = "https://maps.app.goo.gl/oDm5vWwp3U88mZ3u6";

  // Schema LD+JSON as specified by requirements
  const locationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.cybaemtech.com/in/software-company-in-pune#localbusiness",
        "name": "Cybaem Tech Private Limited - Pune Head Office",
        "alternateName": "Cybaem Tech",
        "description":
          "Cybaem Tech is the best IT & software company in Pune, located in Hinjewadi, providing custom software development, enterprise software, managed IT services, IT infrastructure, cloud solutions, cybersecurity, web development, and digital transformation (including SEO, GEO, Meta & Google Ads performance marketing, social media management, and email marketing) services to businesses in Pune, India, and globally.",
        "url": "https://www.cybaemtech.com/in/software-company-in-pune",
        "telephone": "+91-9028541383",
        "email": "sales@cybaemtech.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office 304, Suratwala Mark Plazzo, Hinjewadi",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411057",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 18.5904051,
          "longitude": 73.7456132,
        },
        "hasMap": "https://maps.app.goo.gl/oDm5vWwp3U88mZ3u6",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "https://schema.org/Monday",
            "https://schema.org/Tuesday",
            "https://schema.org/Wednesday",
            "https://schema.org/Thursday",
            "https://schema.org/Friday",
          ],
          "opens": "09:00",
          "closes": "18:00",
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Pune",
          },
          {
            "@type": "Place",
            "name": "Hinjewadi",
          },
        ],
        "parentOrganization": {
          "@id": "https://www.cybaemtech.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.cybaemtech.com/in/software-company-in-pune#webpage",
        "url": "https://www.cybaemtech.com/in/software-company-in-pune",
        "name": "Software Company in Pune | Cybaem Tech, Hinjewadi",
        "description":
          "We are a leading software company in Pune offering custom software, cloud, and digital solutions. Visit us in Hinjewadi or book an expert call today.",
        "inLanguage": "en-IN",
        "about": {
          "@id": "https://www.cybaemtech.com/in/software-company-in-pune#localbusiness",
        },
        "breadcrumb": {
          "@id": "https://www.cybaemtech.com/in/software-company-in-pune#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.cybaemtech.com/in/software-company-in-pune#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.cybaemtech.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Software Company in Pune",
          },
        ],
      },
    ],
  };

  const transportWays = [
    {
      icon: Car,
      title: "By Road",
      desc: "From Wakad or Baner, take the Hinjewadi road toward Phase 1. We are close to Rajiv Gandhi Infotech Park and NH48.",
    },
    {
      icon: Plane,
      title: "By Air",
      desc: "Pune International Airport is roughly 25 km away. Allow 45–75 minutes by cab, depending on traffic.",
    },
    {
      icon: Train,
      title: "By Train",
      desc: "Chinchwad Junction is the nearest major railhead. Take a cab or app-based ride to Hinjewadi; it's about 10 km.",
    },
    {
      icon: Bus,
      title: "By Public Transport",
      desc: "PMPML buses serve Hinjewadi. The Hinjewadi–Shivajinagar Pune Metro Line 3 is the planned metro link.",
    },
    {
      icon: Smartphone,
      title: "By Cab or Auto",
      desc: "Uber, Ola, and Rapido serve Hinjewadi. Share 'Suratwala Mark Plazzo, Hinjewadi' as the drop-off point.",
    },
  ];

  const landmarks = [
    {
      name: "Rajiv Gandhi Infotech Park, Hinjewadi",
      dist: "~ 2 km",
      img: rajivGandhiInfotechParkImg,
    },
    {
      name: "Dmart - Hinjewadi",
      dist: "~ 1 km",
      img: dmartHinjewadiImg,
    },
    {
      name: "Mumbai-Bengaluru Highway (NH48)",
      dist: "~ 3 km",
      img: highwayImg,
    },
    {
      name: "Wakad and Dange Chowk",
      dist: "~ 4 km",
      img: wakadDangeChowkImg,
    },
    {
      name: "Hinjewadi Metro Station (Upcoming)",
      dist: "~ 1 km",
      img: hinjewadiMetroImg,
    },
  ];

  const amenities = [
    {
      icon: Users,
      title: "Meeting & Conference Room",
      desc: "Client discussions & presentations",
    },
    {
      icon: Wifi,
      title: "High-Speed Wi-Fi",
      desc: "High-speed enterprise internet",
    },
    {
      icon: Coffee,
      title: "Drinking Water, Tea & Coffee",
      desc: "Refreshments for team & visitors",
    },
    {
      icon: ArrowUpDown,
      title: "Elevator & Lift",
      desc: "Direct access to 3rd floor office",
    },
    {
      icon: DoorOpen,
      title: "Walk-ins Welcome",
      desc: "Prior booking recommended for expert calls",
    },
  ];

  const faqs = [
    {
      num: "01",
      q: "What services or solutions does Cybaem Tech provide?",
      a: "Cybaem Tech provides managed IT & IT Infra solutions, cloud solutions, cyber security, enterprise software development, and digital transformation.",
    },
    {
      num: "02",
      q: "What are the official office hours?",
      a: "Our Pune head office is open Monday to Friday, 9:00 to 18:00 IST from Monday to Friday. Business days are affected by calendar events. So, we suggest booking an appointment call before you visit the office to make your visit.",
    },
    {
      num: "03",
      q: "Which industries does Cybaem Tech cater to?",
      a: "We serve clients across multiple sectors ranging from manufacturing, e-commerce, BFSI, pharmaceuticals, hospital and healthcare, real estate, retail, logistics, education and many.",
    },
    {
      num: "04",
      q: "How do I book an expert call?",
      a: "Use the Book an Expert Call button on this page or call +91 9028541383, or email sales@cybaemtech.com with your preferred time. Our team will confirm the slot.",
    },
    {
      num: "05",
      q: "Is parking available for visitors?",
      a: "Yes, visitor parking is available at the building. Contact us before your visit if you need help with entry.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      <SEOHead
        title="Software Company in Pune | Cybaem Tech, Hinjewadi"
        description="We are a leading software company in Pune offering custom software, cloud, and digital solutions. Visit us in Hinjewadi or book an expert call today."
        canonical="https://www.cybaemtech.com/in/software-company-in-pune"
        keywords="Software Company in Pune, software company in Hinjewadi, custom software development Pune, IT services Hinjewadi"
        jsonLd={locationSchema}
      />

      <Navbar />

      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/70 to-white overflow-hidden">
        {/* Soft ambient lighting */}
        <div className="absolute top-12 right-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Heading + Pitch + CTAs */}
            <div className="lg:col-span-6 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-0.5 bg-blue-600 inline-block rounded-full" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-blue-600">
                  PUNE LOCATION
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6">
                Software Company <br />
                <span className="text-slate-900">in Pune</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                We, Cybaem Tech, are a software company in Pune, based at our head office in Hinjewadi, the
                city's IT hub. We design and build custom software, cloud, and digital solutions for businesses
                in India and globally.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                <button
                  onClick={openConsultationModal}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#0A101D] hover:bg-slate-800 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all group cursor-pointer"
                >
                  <span>Book an Expert Call</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <a
                  href={MAP_EXTERNAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 font-semibold text-sm px-7 py-3.5 rounded-full transition-all shadow-2xs hover:shadow-xs cursor-pointer group"
                >
                  <Navigation size={15} className="text-blue-600 group-hover:rotate-12 transition-transform" />
                  <span>Open in Maps</span>
                </a>
              </div>

              {/* 3 Highlights Strip */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">
                      Pune (Hinjewadi)
                    </span>
                    <span className="text-[11px] text-slate-500">Head Office</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Navigation size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">
                      IT Hub Location
                    </span>
                    <span className="text-[11px] text-slate-500">Easy Accessibility</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Users size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">
                      Modern Workspace
                    </span>
                    <span className="text-[11px] text-slate-500">For Collaboration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Pune Building Image with Location Badge */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[580px] group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-sky-400/15 to-transparent rounded-3xl blur-2xl transform scale-95 -z-10" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-950/5">
                  <img
                    src="/images/why-choose-us-office.jpg"
                    alt="Cybaem Tech Pune Head Office Building in Hinjewadi"
                    className="w-full h-[380px] sm:h-[420px] object-cover transform group-hover:scale-102 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      // Fallback if needed
                      (e.currentTarget as HTMLImageElement).src = "/images/contact-hero-new.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Badge */}
                  <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin size={17} />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">
                        Our Office
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                        Hinjewadi, Pune
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CONTACT DETAILS                                        */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-24 bg-white border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: 4 Contact Cards */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-0.5 bg-blue-600 inline-block rounded-full" />
                <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-blue-600">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Contact Details
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                Reach us for inquiries, partnerships, career opportunities or to book an expert consultation.
              </p>

              {/* 2x2 Grid of Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Address Card */}
                <div className="bg-[#F8FAFC]/90 rounded-2xl p-5 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-300 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                    <MapPin size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block mb-1">
                      Address
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Office 304, Suratwala Mark Plazzo, Hinjewadi, Pune, Maharashtra 411057, India
                    </p>
                  </div>
                </div>

                {/* 2. Phone Card */}
                <div className="bg-[#F8FAFC]/90 rounded-2xl p-5 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-300 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                    <Phone size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block mb-1">
                      Phone
                    </span>
                    <a
                      href="tel:+919028541383"
                      className="text-xs text-slate-600 hover:text-blue-600 transition-colors font-medium block"
                    >
                      +91 9028541383
                    </a>
                  </div>
                </div>

                {/* 3. Email Card */}
                <div className="bg-[#F8FAFC]/90 rounded-2xl p-5 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-300 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                    <Mail size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block mb-1">
                      Email
                    </span>
                    <a
                      href="mailto:sales@cybaemtech.com"
                      className="text-xs text-slate-600 hover:text-blue-600 transition-colors font-medium block truncate max-w-[200px]"
                    >
                      sales@cybaemtech.com
                    </a>
                  </div>
                </div>

                {/* 4. Hours Card */}
                <div className="bg-[#F8FAFC]/90 rounded-2xl p-5 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-300 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                    <Clock size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block mb-1">
                      Office Hours
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Monday – Friday <br />
                      9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: About Us Header Photo */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[500px] flex items-center justify-center group">
                <img
                  src="/images/about-team-1.webp"
                  alt="Cybaem Tech Team"
                  className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.12)] transform group-hover:scale-102 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/images/why-choose-us-office.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. HOW TO REACH US                                        */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC]/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-blue-600 inline-block rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-blue-600">
              DIRECTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            How to Reach Us
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-14">
            Our office is located in Hinjewadi, close to Rajiv Gandhi Infotech Park and the Mumbai–Bengaluru highway (NH48). Here are different ways to reach us.
          </p>

          {/* 5 Transit Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 text-left">
            {transportWays.map((way, idx) => {
              const IconComp = way.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon Circle */}
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                      <IconComp size={22} strokeWidth={2.2} />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                      {way.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {way.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. OUR OFFICE LOCATION & PARKING                          */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-24 bg-white border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-left mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-blue-600 inline-block rounded-full" />
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-blue-600">
                FIND US
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              Our Office Location
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl">
              Visit us at our Pune office or get directions using the map below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 7 Columns: Google Map Embed */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative w-full h-[400px] sm:h-[450px] lg:h-full min-h-[380px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6368242378644!2d73.74561317519337!3d18.59040508251676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b71e64b665df%3A0xf2de2df843c281ce!2sCybaem%20Tech!5e0!3m2!1sen!2sin!4v1791193523450!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Cybaem Tech Pune office map"
                  className="w-full h-full"
                />

                {/* Floating "Open in Google Maps" Button Overlay */}
                <div className="absolute bottom-4 left-4 z-10">
                  <a
                    href={MAP_EXTERNAL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0A101D] hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg transition-all hover:scale-105"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Parking Info & Photo */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {/* Parking Info Card */}
              <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center shrink-0 shadow-sm">
                    P
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      Parking Information
                    </h3>
                    <span className="text-[11px] text-slate-500">Visitor Parking Facility</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>Visitor parking is available at Suratwala Mark Plazzo.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>
                      Hinjewadi traffic peaks around 9:00–10:30 and 17:30–19:30, so plan your journey accordingly.
                    </span>
                  </div>
                </div>
              </div>

              {/* Suratwala Mark Plazzo Building Photo */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-md aspect-[16/10] bg-slate-100 group">
                <img
                  src={suratWalaMarkPlazzoImg}
                  alt="Suratwala Mark Plazzo - Cybaem Tech Pune Head Office Building"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 text-white text-xs font-semibold bg-slate-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Building2 size={13} className="text-blue-400" />
                  <span>Suratwala Mark Plazzo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. LANDMARKS NEARBY                                       */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC]/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-blue-600 inline-block rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-blue-600">
              AROUND OUR OFFICE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Landmarks Nearby
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-14">
            Our Pune office is surrounded by key business hubs and convenient amenities.
          </p>

          {/* 5 Landmark Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 text-left">
            {landmarks.map((landmark, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Photo */}
                <div className="w-full aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={landmark.img}
                    alt={landmark.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <h3 className="text-sm font-bold text-slate-900 leading-snug mb-3">
                    {landmark.name}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full self-start">
                    <MapPin size={12} />
                    <span>{landmark.dist}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. OFFICE AMENITIES                                       */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-24 bg-white border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: 5 Amenity Cards */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-0.5 bg-blue-600 inline-block rounded-full" />
                <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-blue-600">
                  WHAT TO EXPECT
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Office Amenities
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                We provide a comfortable and professional environment for client meetings and expert sessions.
              </p>

              {/* Amenity Icons Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {amenities.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-white text-blue-600 flex items-center justify-center mb-3 shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 border border-slate-200/60">
                        <IconComp size={20} strokeWidth={2.2} />
                      </div>
                      <span className="text-xs font-bold text-slate-900 block leading-tight">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Conference Room Photo */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[560px] group">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[16/11] bg-slate-100">
                  <img
                    src="/images/office-meeting.png"
                    alt="Cybaem Tech Conference Room and Client Meeting Space"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/images/why-choose-us-office.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. FREQUENTLY ASKED QUESTIONS                             */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC]/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-blue-600 inline-block rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-blue-600">
              FAQ
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-14">
            Quick answers to common questions about our Pune office and services.
          </p>

          {/* 2-Column FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqs[idx] !== false;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-start justify-between gap-3 text-left cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        {faq.num}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.q}
                      </h3>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 mt-1">
                      {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pl-11 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 mt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. PRE-FOOTER CTA                                         */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-24 bg-[#0A1428] text-white overflow-hidden">
        {/* Ambient lighting glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading + Pitch + Buttons */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-0.5 bg-blue-400 inline-block rounded-full" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-blue-400">
                  LET'S CONNECT
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.12] mb-5">
                Visit Our Pune Office or <br />
                Book an Expert Call
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
                Discuss your project requirements with our experts and explore how we can help your business grow.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={openConsultationModal}
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm px-7 py-3.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-all group cursor-pointer"
                >
                  <span>Book an Expert Call</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <a
                  href={MAP_EXTERNAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white/60 font-semibold text-sm px-7 py-3.5 rounded-full transition-all cursor-pointer group"
                >
                  <Navigation size={15} className="text-blue-400 group-hover:rotate-12 transition-transform" />
                  <span>Open in Maps</span>
                </a>
              </div>
            </div>

            {/* Right Column: 3 Value Props */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-400/20">
                  <UserCheck size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                    Expert Consultation
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Discuss your ideas with our senior software and technical architects.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-400/20">
                  <Layers size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                    Tailored Solutions
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Custom software, cloud architecture and digital transformation built for your needs.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-400/20">
                  <Handshake size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                    Long-Term Partnership
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    More than just a technology provider — your trusted execution partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. DARK FOOTER                                            */}
      {/* ========================================================= */}
      <Footer variant="dark" />
    </div>
  );
}
