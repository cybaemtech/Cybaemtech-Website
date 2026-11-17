import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { contactSeoData } from "@/data/seo/contactSeo";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Send,
  User,
  Building2,
  Globe2,
  Users,
  LayoutGrid,
  Clock,
  ShieldCheck,
  Lock,
  BadgeCheck,
  Handshake,
  Layers,
  UserCheck,
  ExternalLink,
  Check
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveLocationMap from "@/components/InteractiveLocationMap";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { containerVariants, itemVariants } from "@/lib/animations";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Link } from "react-router-dom";

// Submit to our PHP script instead of Google Apps Script
const API_URL = "/contact.php";

const serviceCategories = [
  "Enterprise Software",
  "Website Designing",
  "IT Augmentation",
  "Cloud / Managed IT & Security",
  "Digital Growth Plan",
];

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email address")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email format"
    )
    .max(255, "Email must not exceed 255 characters"),
  mobile: z
    .string()
    .trim()
    .min(1, "Mobile number is required")
    .regex(/^\+?[0-9\s\-()]{7,20}$/, "Invalid mobile number format")
    .refine((val) => /[0-9]/.test(val), "Mobile number must contain at least one digit"),
  city: z.string().optional(),
  category: z.string().min(1, "Please select a service category"),
  message: z
    .string()
    .trim()
    .optional()
    .default(""),
});

const faqs = [
  {
    icon: LayoutGrid,
    question: "What services does Cybaem Tech provide?",
    answer:
      "Cybaem Tech is a one-stop IT, Software Product Development (NPD), Networking, and Digital Marketing company in India. We specialize in Digital Marketing Services (SEO, SMM, PPC, Branding), IT Infrastructure Management, Server Implementation & Support (Windows & Linux), Microsoft 365 Services, Cloud Hosting Solutions, Website Development, and Cybersecurity Services. Our goal is to empower businesses with end-to-end technology and marketing solutions that deliver measurable growth.",
  },
  {
    icon: Clock,
    question: "How quickly will you respond?",
    answer:
      "We typically respond to all inquiries within 2-4 business hours. For urgent matters, please call us directly at +91 90 2854 1383.",
  },
  {
    icon: User,
    question: "Do you offer a free initial consultation?",
    answer:
      "Yes, we provide a complimentary 30-minute consultation to understand your requirements and discuss how our services can benefit your business.",
  },
  {
    icon: ShieldCheck,
    question: "Can you sign an NDA before we discuss details?",
    answer:
      "Absolutely. We understand the importance of confidentiality and are happy to sign a Non-Disclosure Agreement before discussing your project details.",
  },
  {
    icon: Users,
    question: "What engagement models do you support?",
    answer:
      "We offer flexible engagement models including project-based, dedicated team, staff augmentation, and managed services to suit your specific needs and budget.",
  },
  {
    icon: LayoutGrid,
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer comprehensive post-deployment support including maintenance, updates, monitoring, and technical assistance based on agreed SLAs.",
  },
  {
    icon: Building2,
    question: "What industries do you specialize in?",
    answer:
      "We serve various industries including healthcare, finance, e-commerce, manufacturing, education, and government sectors with tailored technology solutions.",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    category: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSending(true);
    try {
      const formData = new URLSearchParams();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.mobile);
      formData.append("city", form.city || "");
      formData.append("category", form.category);
      formData.append("message", form.message);
      formData.append("sourcePage", window.location.href);

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Failed to send message.");
      }

      setForm({
        name: "",
        email: "",
        mobile: "",
        city: "",
        category: "",
        message: "",
      });
      setShowSuccess(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again.";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#fafcff] overflow-x-hidden font-sans text-slate-800">
      <SEOHead
        title={contactSeoData.title}
        description={contactSeoData.description}
        canonical={contactSeoData.canonical}
        keywords={contactSeoData.keywords}
        ogTitle={contactSeoData.ogTitle}
        ogDescription={contactSeoData.ogDescription}
        twitterTitle={contactSeoData.twitterTitle}
        twitterDescription={contactSeoData.twitterDescription}
        jsonLd={contactSeoData.jsonLd}
      />
      <Navbar />

      {/* Hero + Form Combined Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white"
      >
        {/* Subtle decorative dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #004E98 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* Left Column: Heading, Badges, Details & Building Graphic */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              className="lg:col-span-6 flex flex-col justify-between h-full"
            >
              <div>
                {/* Pill Tag */}
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 rounded-full mb-5 border border-blue-100/80 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,82,204,0.6)] shrink-0" />
                  <span className="text-[11px] font-bold tracking-[0.12em] text-primary uppercase">
                    LET'S CONNECT
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[1.18] font-extrabold text-slate-900 tracking-tight mb-4"
                >
                  Let's Build <br />
                  Smarter Solutions <br />
                  <span className="text-primary">for a Better Tomorrow</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={itemVariants}
                  className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-lg font-normal"
                >
                  Partner with Cybaem Tech for secure, scalable, and risk-free enterprise software development, cloud security, and dedicated IT staff augmentation.
                </motion.p>

                {/* 3 Key Feature Badges */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-xs">
                    <ShieldCheck size={14} className="text-primary" />
                    <span>Trusted Technology Partner</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-xs">
                    <Layers size={14} className="text-primary" />
                    <span>Scalable &amp; Future-Ready</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-xs">
                    <UserCheck size={14} className="text-primary" />
                    <span>Client-Centric Approach</span>
                  </div>
                </motion.div>
              </div>

              {/* Consultation Card with Sky Blue Box Shadow */}
              <motion.div
                variants={itemVariants}
                className="relative w-full bg-white rounded-2xl sm:rounded-3xl border border-sky-200/80 shadow-[0_12px_40px_rgba(56,189,248,0.25),0_4px_14px_rgba(14,165,233,0.12)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.35),0_6px_20px_rgba(14,165,233,0.18)] hover:border-sky-300 transition-all duration-300 p-6 sm:p-7 mt-3 group"
              >
                {/* Top Calendar Icon */}
                <div className="w-12 h-12 rounded-full bg-[#EEF4FF] flex items-center justify-center mx-auto mb-3 shadow-xs">
                  <svg
                    className="w-7 h-7 text-[#2563eb]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="3" y="4" width="18" height="17" rx="3.5" fill="#2563eb" />
                    <path d="M3 8.5H21" stroke="white" strokeWidth="1.2" />
                    <circle cx="7.5" cy="12.5" r="1.1" fill="white" />
                    <circle cx="12" cy="12.5" r="1.1" fill="white" />
                    <circle cx="16.5" cy="12.5" r="1.1" fill="white" />
                    <circle cx="7.5" cy="16.5" r="1.1" fill="white" />
                    <circle cx="12" cy="16.5" r="1.1" fill="white" />
                    <circle cx="16.5" cy="16.5" r="1.1" fill="white" />
                  </svg>
                </div>

                {/* Title and Subtitle */}
                <div className="text-center mb-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-1">
                    Book a Consultation
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 max-w-[340px] mx-auto leading-relaxed">
                    Choose your preferred calendar platform to schedule a meeting with our team.
                  </p>
                </div>

                {/* Booking Option Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Google Calendar Option */}
                  <a
                    href="https://calendar.app.google/j4S7F6maThRjSfrY7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-between px-3.5 py-3 rounded-xl border border-slate-200 bg-white hover:bg-blue-50/50 hover:border-blue-300 shadow-xs hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 font-medium block leading-none">
                          Book via
                        </span>
                        <span className="text-xs sm:text-[13px] font-semibold text-slate-900 block leading-tight mt-0.5 whitespace-nowrap">
                          Google Calendar
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-primary group-hover/btn:translate-x-0.5 transition-all shrink-0 ml-1" />
                  </a>

                  {/* Microsoft Bookings Option */}
                  <a
                    href="https://bookings.cloud.microsoft/book/ScheduleaConsultationwithCybaemTech1@cybaemtech.com/s/qIzFTeYQw0KQHzyhc4Ufrw2?ismsaljsauthenabled"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-between px-3.5 py-3 rounded-xl border border-slate-200 bg-white hover:bg-blue-50/50 hover:border-blue-300 shadow-xs hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 flex items-center justify-center shrink-0">
                        <svg className="w-4.5 h-4.5" viewBox="0 0 23 23">
                          <path fill="#f35325" d="M1 1h10v10H1z" />
                          <path fill="#81bc06" d="M12 1h10v10H12z" />
                          <path fill="#05a6f0" d="M1 12h10v10H1z" />
                          <path fill="#ffba08" d="M12 12h10v10H12z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 font-medium block leading-none">
                          Book via
                        </span>
                        <span className="text-xs sm:text-[13px] font-semibold text-slate-900 block leading-tight mt-0.5 whitespace-nowrap">
                          Microsoft Bookings
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-primary group-hover/btn:translate-x-0.5 transition-all shrink-0 ml-1" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              id="contact-form"
              ref={formRef}
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl border border-blue-100 shadow-[0_12px_40px_rgba(0,50,150,0.06)] p-6 sm:p-8 lg:p-9"
            >
              {/* Form Header */}
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100/80 flex items-center justify-center text-primary shadow-xs shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-[26px] font-bold text-slate-900 leading-tight">
                    Get in <span className="text-primary">Touch</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Fill out the form and our team will get back to you shortly.
                  </p>
                </div>
              </div>

              {/* Form Elements */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email (2 Cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="text-xs font-semibold text-slate-700 flex items-center gap-1.5"
                    >
                      <User size={13} className="text-primary" />
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      className={`h-11 rounded-xl text-sm border-slate-200 bg-slate-50/50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-blue-100 transition-all ${errors.name ? "border-red-400 focus:border-red-500" : ""
                        }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Work Email ID */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-xs font-semibold text-slate-700 flex items-center gap-1.5"
                    >
                      <Mail size={13} className="text-primary" />
                      Work Email ID <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                      className={`h-11 rounded-xl text-sm border-slate-200 bg-slate-50/50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-blue-100 transition-all ${errors.email ? "border-red-400 focus:border-red-500" : ""
                        }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone & City (2 Cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Contact Number */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="mobile"
                      className="text-xs font-semibold text-slate-700 flex items-center gap-1.5"
                    >
                      <Phone size={13} className="text-primary" />
                      Contact Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="Enter mobile number"
                      value={form.mobile}
                      onChange={handleChange}
                      className={`h-11 rounded-xl text-sm border-slate-200 bg-slate-50/50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-blue-100 transition-all ${errors.mobile ? "border-red-400 focus:border-red-500" : ""
                        }`}
                    />
                    {errors.mobile && (
                      <p className="text-[11px] text-red-500">{errors.mobile}</p>
                    )}
                  </div>

                  {/* City or Location */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="city"
                      className="text-xs font-semibold text-slate-700 flex items-center gap-1.5"
                    >
                      <MapPin size={13} className="text-primary" />
                      City or Location
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="Enter your city"
                      value={form.city}
                      onChange={handleChange}
                      className="h-11 rounded-xl text-sm border-slate-200 bg-slate-50/50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                {/* Service Category */}
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <LayoutGrid size={13} className="text-primary" />
                    Service Category <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={form.category}
                    onValueChange={(value) => {
                      setForm({ ...form, category: value });
                      if (errors.category) {
                        setErrors({ ...errors, category: "" });
                      }
                    }}
                  >
                    <SelectTrigger className="h-11 rounded-xl text-sm border-slate-200 bg-slate-50/50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-blue-100">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceCategories.map((cat) => (
                        <SelectItem key={cat} value={cat} className="text-sm">
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.category && (
                    <p className="text-[11px] text-red-500">{errors.category}</p>
                  )}
                </div>

                {/* Message Requirement */}
                <div className="space-y-1.5">
                  <Textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Let us know your requirements..."
                    value={form.message}
                    onChange={handleChange}
                    className="rounded-xl text-sm border-slate-200 bg-slate-50/50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-blue-100 resize-none min-h-[90px]"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full h-12 bg-[#004E98] hover:bg-[#003c75] text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                >
                  <Send size={15} />
                  {sending ? "Sending Message..." : "Send Message"}
                </button>

                {/* Privacy disclaimer */}
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                  <Lock size={12} className="text-slate-400 shrink-0" />
                  <span>Your information is safe with us. We respect your privacy.</span>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence, Local Expertise (3 Office Cards) */}
      <section
        id="office-locations"
        className="py-16 sm:py-20 bg-[#f8fbff] border-t border-b border-blue-50 scroll-mt-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.14em] uppercase text-primary mb-2">
              OUR OFFICE LOCATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Global Presence, <span className="text-primary italic font-serif">Local Expertise</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We are present across multiple locations to serve our clients better. Get in touch with our nearest office.
            </p>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Head Office - Pune */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-blue-100/80 shadow-[0_4px_25px_rgba(0,50,150,0.04)] p-6 sm:p-7 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,50,150,0.08)] transition-all">
              <div>
                {/* Header Icon + Title */}
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#eef4ff] text-primary flex items-center justify-center shrink-0 border border-blue-100 shadow-xs">
                    <Building2 size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg leading-snug">
                      Head Office - Pune
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Office 304, Suratwala Mark Plazzo, Hinjewadi, Pune, Maharashtra 411057, India
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-100 my-5" />

                {/* Call Us */}
                <div className="space-y-1 mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                    <Phone size={13} />
                    <span>Call Us</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 pl-5 space-y-0.5 font-medium">
                    <p>
                      <a href="tel:+919028541383" className="hover:text-primary transition-colors">
                        +91 9028541383
                      </a>
                    </p>
                    <p>
                      <a href="tel:0202069010200" className="hover:text-primary transition-colors">
                        020 2069010200
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                    <Mail size={13} />
                    <span>Email Us</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 pl-5 font-medium">
                    <a href="mailto:sales@cybaemtech.com" className="hover:text-primary transition-colors">
                      sales@cybaemtech.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: North America Office */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-blue-100/80 shadow-[0_4px_25px_rgba(0,50,150,0.04)] p-6 sm:p-7 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,50,150,0.08)] transition-all">
              <div>
                {/* Header Icon + Title */}
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#eef4ff] text-primary flex items-center justify-center shrink-0 border border-blue-100 shadow-xs">
                    <Globe2 size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg leading-snug">
                      North America Office
                    </h3>
                    <p className="text-[11px] text-primary font-medium mt-0.5">
                      In Association with RMDG Technology Consultants LLC
                    </p>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      16107 Kensington Drive, Suite 227, Sugar Land, TX 77479, USA
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-100 my-5" />

                {/* Call Us */}
                <div className="space-y-1 mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                    <Phone size={13} />
                    <span>Call Us</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 pl-5 font-medium">
                    <p>
                      <a href="tel:+17132347916" className="hover:text-primary transition-colors">
                        +1 (713) 234-7916
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                    <Mail size={13} />
                    <span>Email Us</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 pl-5 font-medium">
                    <a href="mailto:ralph@cybaemtech.com" className="hover:text-primary transition-colors">
                      ralph@cybaemtech.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Career & Support */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-blue-100/80 shadow-[0_4px_25px_rgba(0,50,150,0.04)] p-6 sm:p-7 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,50,150,0.08)] transition-all">
              <div>
                {/* Header Icon + Title */}
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#eef4ff] text-primary flex items-center justify-center shrink-0 border border-blue-100 shadow-xs">
                    <Users size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg leading-snug">
                      Career &amp; Support
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Join our team or get assistance
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-100 my-5" />

                {/* Call Us */}
                <div className="space-y-1 mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                    <Phone size={13} />
                    <span>Call Us</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 pl-5 space-y-0.5 font-medium">
                    <p>
                      <a href="tel:+918484815905" className="hover:text-primary transition-colors">
                        +91 8484815905
                      </a>
                    </p>
                    <p>
                      <a href="tel:+919325139634" className="hover:text-primary transition-colors">
                        +91 9325139634
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                    <Mail size={13} />
                    <span>Email Us</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 pl-5 font-medium">
                    <a href="mailto:hr@cybaemtech.com" className="hover:text-primary transition-colors">
                      hr@cybaemtech.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Here / Our Office Locations (World Map with Interactive Pins & Map Embeds) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.14em] uppercase text-primary mb-2">
              FIND US HERE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Our Office <span className="text-primary italic font-serif">Locations</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore our global presence across key locations. Hover over the markers for details or click to view directions.
            </p>
          </div>

          {/* Real Interactive Map Component with World View & Location Zoom */}
          <div>
            <InteractiveLocationMap />
          </div>

          {/* 
          // OLD 2 MAPS GRID (COMMENTED OUT)
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
              <div className="h-72 w-full relative bg-slate-100">
                <iframe
                  title="Pune Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.635261367137!2d73.74575887496471!3d18.59047548251667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b71e64b665df%3A0xf2de2df843c281ce!2sCybaem%20Tech!5e0!3m2!1sen!2sin!4v1758686264653!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-between border-t border-slate-100 bg-white">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200 shadow-xs">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                      alt="India Flag"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Cybaem Tech Private Limited
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Office 304, Suratwala Mark Plazzo, Hinjewadi, Pune, Maharashtra 411057, India
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Cybaem+Tech+Suratwala+Mark+Plazzo+Hinjewadi+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-primary flex items-center justify-center shrink-0 transition-colors"
                  aria-label="Open Pune location in Google Maps"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
              <div className="h-72 w-full relative bg-slate-100">
                <iframe
                  title="North America Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.862378873724!2d-95.6146244244253!3d29.665725275116744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e6761dbb0a03%3A0x6b801a6104bc1ec9!2s16107%20Kensington%20Dr%20%23227%2C%20Sugar%20Land%2C%20TX%2077479%2C%20USA!5e0!3m2!1sen!2sin!4v1718854497645!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-between border-t border-slate-100 bg-white">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200 shadow-xs">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                      alt="USA Flag"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Cybaem Tech Private Limited
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      16107 Kensington Drive, Suite 227, Sugar Land, TX 77479, United States
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=16107+Kensington+Drive+Suite+227+Sugar+Land+TX+77479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-primary flex items-center justify-center shrink-0 transition-colors"
                  aria-label="Open US location in Google Maps"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
          */}
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section ref={faqRef} className="py-16 sm:py-24 bg-[#f8fbff] border-t border-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.14em] uppercase text-primary mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Got Questions? <span className="text-primary italic font-serif">We've Got Answers</span>
            </h2>
          </div>

          {/* FAQ 2 Columns Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
            {/* Left Card: Need more clarity? */}
            <div className="lg:col-span-4 bg-gradient-to-b from-[#eaf2ff] to-[#f4f8ff] rounded-3xl p-7 sm:p-8 border border-blue-100 shadow-sm flex flex-col justify-between relative overflow-hidden min-h-[380px]">
              {/* Background decorative curved accent */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-4 border-blue-200/40 pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-60 h-60 rounded-full border-4 border-blue-200/20 pointer-events-none" />

              <div>
                {/* 3D-styled Speech Bubble Icon */}
                <div className="relative w-24 h-24 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-tr from-primary to-[#3d8aff] rounded-3xl shadow-lg flex items-center justify-center text-white transform -rotate-3">
                    <span className="text-4xl font-bold font-sans">?</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-white rounded-2xl shadow-md flex items-center justify-center border border-blue-50">
                    <div className="flex gap-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 mb-2 leading-tight">
                  Need more <br /> clarity?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  We're here to help. Reach out and our team will get back to you shortly.
                </p>
              </div>

              <button
                type="button"
                onClick={scrollToForm}
                className="w-full h-11 bg-primary hover:bg-primary/90 text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all relative z-10 cursor-pointer"
              >
                Contact Us
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Right Accordion */}
            <div className="lg:col-span-8">
              <Accordion type="single" collapsible className="space-y-3 w-full">
                {faqs.map((faq, i) => {
                  const Icon = faq.icon;
                  return (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="bg-white rounded-2xl border border-blue-100/60 shadow-[0_2px_12px_rgba(0,50,150,0.03)] px-4 sm:px-5 overflow-hidden transition-all data-[state=open]:border-blue-200"
                    >
                      <AccordionTrigger className="text-left font-bold text-slate-800 text-sm sm:text-[15px] hover:no-underline py-4 flex items-center gap-3.5 group">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                          <Icon size={15} />
                        </div>
                        <span className="flex-1 leading-snug">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 text-xs sm:text-sm leading-relaxed pb-4 pl-11 pr-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>

          {/* 4 Trust Feature Badges */}
          <div className="bg-[#f0f6ff]/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Feature 1 */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Confidential</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    Your information is safe with us.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3.5 sm:border-l sm:border-blue-200/60 sm:pl-6 lg:pl-6">
                <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Quick Response</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    We respond within 24 business hours.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3.5 lg:border-l lg:border-blue-200/60 lg:pl-6">
                <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                  <BadgeCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Expert Guidance</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    Get advice from industry experts.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-3.5 sm:border-l sm:border-blue-200/60 sm:pl-6 lg:pl-6">
                <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Handshake size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Client First</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    Your success is our top priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section: Not Quite Ready to Talk? */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          <div className="relative bg-gradient-to-br from-[#edf4ff] via-[#f5f9ff] to-[#e5efff] rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-[0_0_35px_rgba(0,82,204,0.12)] hover:shadow-[0_0_45px_rgba(0,82,204,0.18)] transition-shadow duration-300 border border-blue-100/80">
            {/* World Map Background overlay */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "url('/images/world-map.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            {/* Soft subtle glow */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200/40 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-200/40 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block px-3.5 py-1 bg-white/80 text-primary rounded-full text-[11px] font-bold tracking-[0.14em] uppercase mb-4 border border-blue-200/60 shadow-xs">
                READY TO GET STARTED?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Not Quite Ready to Talk?
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-7 font-normal">
                That's okay! Let our work speak for itself. Explore the innovative solutions we've built for businesses worldwide.
              </p>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-bold bg-primary hover:bg-primary/90 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Explore Our Portfolio
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Thank You Modal */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md text-center p-6 sm:p-8 rounded-2xl">
          <DialogHeader className="items-center">
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
              <Check className="w-8 h-8 text-emerald-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-slate-900">
              Thank You!
            </DialogTitle>
            <DialogDescription className="text-sm text-slate-600 leading-relaxed mt-2">
              Your message has been sent successfully. Our team will get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <button
            onClick={() => setShowSuccess(false)}
            className="mt-6 inline-flex items-center justify-center px-8 py-2.5 text-sm font-semibold bg-primary hover:bg-primary/90 text-white rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            Got it
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
