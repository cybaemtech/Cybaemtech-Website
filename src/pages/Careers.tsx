import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Rocket,
  GraduationCap,
  Globe2,
  Users,
  User,
  Mail,
  Phone,
  MapPin,
  Upload,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  FileText,
  X,
  Building2,
  Sparkles,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { careersSeoData } from "@/data/seo/careersSeo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { containerVariants, itemVariants } from "@/lib/animations";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const API_URL = "/careers.php";

const positionsList = [
  "Frontend Developer (React / Next.js)",
  "Backend Developer (Node.js / Python / Java)",
  "Full Stack Software Engineer",
  "Cloud & DevOps Engineer (AWS / Azure)",
  "Cloud Security & Managed IT Specialist",
  "UI / UX Product Designer",
  "QA / Automation Test Engineer",
  "Digital Growth & Performance Marketer",
  "SEO & Content Strategist",
  "IT Support & Infrastructure Engineer",
  "Business Development & Inside Sales",
  "Other / Open Application",
];

const experienceLevels = [
  "Fresher (0 - 1 year)",
  "1 - 3 years",
  "3 - 5 years",
  "5 - 8 years",
  "8+ years",
];

const careerSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email address"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^\+?[0-9\s\-()]{7,20}$/, "Invalid phone number format"),
  location: z
    .string()
    .trim()
    .min(2, "Please enter your current location"),
  position: z
    .string()
    .min(1, "Please select a position"),
  experience: z
    .string()
    .min(1, "Please select your years of experience"),
  message: z.string().trim().optional().default(""),
});

const Careers = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    position: "",
    experience: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const contentInView = useInView(contentRef, { once: true, margin: "-50px" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (field: "position" | "experience", val: string) => {
    setForm((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateAndSetFile = (file: File) => {
    const allowedExtensions = ["pdf", "doc", "docx"];
    const extension = file.name.split(".").pop()?.toLowerCase();
    const maxSizeBytes = 5 * 1024 * 1024; // 5MB

    if (!extension || !allowedExtensions.includes(extension)) {
      setErrors((prev) => ({
        ...prev,
        resume: "Allowed formats: PDF, DOC, DOCX only",
      }));
      return;
    }

    if (file.size > maxSizeBytes) {
      setErrors((prev) => ({
        ...prev,
        resume: "File size exceeds maximum limit of 5 MB",
      }));
      return;
    }

    setResumeFile(file);
    setErrors((prev) => ({ ...prev, resume: "" }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const [submittedCandidate, setSubmittedCandidate] = useState<{
    name: string;
    email: string;
    position: string;
    location: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = careerSchema.safeParse(form);
    const newErrors: Record<string, string> = {};

    if (!result.success) {
      result.error.errors.forEach((err) => {
        if (err.path[0]) newErrors[err.path[0] as string] = err.message;
      });
    }

    if (!resumeFile) {
      newErrors.resume = "Please upload your resume (PDF/DOC/DOCX)";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast({
        title: "Please complete all required fields",
        description: "Make sure all details and resume are properly filled in.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    const currentName = form.fullName;
    const currentEmail = form.email;
    const currentPosition = form.position;
    const currentLocation = form.location;

    try {
      const formData = new FormData();
      formData.append("name", form.fullName);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("city", form.location);
      formData.append("category", `Career: ${form.position}`);
      formData.append(
        "message",
        `[CAREER APPLICATION]\nPosition: ${form.position}\nExperience: ${form.experience}\nLocation: ${form.location}\nResume: ${resumeFile?.name} (${(
          (resumeFile?.size || 0) / 1024
        ).toFixed(1)} KB)\n\nApplicant Notes:\n${form.message || "N/A"}`
      );
      formData.append("sourcePage", window.location.href);
      if (resumeFile) {
        formData.append("resume", resumeFile);
      }

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json().catch(() => ({ success: true }));

      if (!response.ok && data.error) {
        throw new Error(data.error || "Failed to submit application.");
      }

      setSubmittedCandidate({
        name: currentName,
        email: currentEmail,
        position: currentPosition,
        location: currentLocation,
      });

      setForm({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        position: "",
        experience: "",
        message: "",
      });
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";

      toast({
        title: "Application Submitted Successfully!",
        description: `Thank you, ${currentName}! A confirmation email has been sent to ${currentEmail} and our HR team.`,
      });
      setShowSuccess(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Failed to submit application. Please reach out directly to hr@cybaemtech.com";
      toast({
        title: "Submission Error",
        description: msg,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafcff] overflow-x-hidden font-sans text-slate-800">
      <SEOHead
        title={careersSeoData.title}
        description={careersSeoData.description}
        canonical={careersSeoData.canonical}
        keywords={careersSeoData.keywords}
        ogTitle={careersSeoData.ogTitle}
        ogDescription={careersSeoData.ogDescription}
        twitterTitle={careersSeoData.twitterTitle}
        twitterDescription={careersSeoData.twitterDescription}
        jsonLd={careersSeoData.jsonLd}
      />
      <Navbar />

      {/* ══════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden bg-gradient-to-b from-[#f3f7fd] via-[#f8faff] to-[#ffffff] border-b border-slate-100 flex items-center pt-28 pb-14 lg:pt-36 lg:pb-20"
      >
        {/* Soft Background Glow Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-indigo-100/40 rounded-full blur-[100px] translate-x-1/3 pointer-events-none" />

        {/* Decorative corner grid accents */}
        <div className="absolute top-0 left-0 w-36 sm:w-56 h-36 sm:h-56 bg-[radial-gradient(#475569_1.2px,transparent_1.2px)] [background-size:18px_18px] opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-0 w-36 sm:w-56 h-36 sm:h-56 bg-[radial-gradient(#475569_1.2px,transparent_1.2px)] [background-size:18px_18px] opacity-25 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            {/* Left Column (55%): Headline & Value Highlights */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Category Pill Tag with Accent Line */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] text-primary uppercase">
                  CAREERS AT CYBAEMTECH
                </span>
                <span className="w-8 h-[2px] bg-primary" />
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-5 font-display">
                Build Your Future <br />
                With <span className="text-primary">CybaemTech</span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-xl font-normal">
                Be part of a team that builds innovative technology solutions, solves real-world challenges, and creates meaningful impact for global enterprises.
              </p>

              {/* 4 Value Badges in Horizontal Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 pt-4 border-t border-slate-200/60">
                {/* 1. Innovative Projects */}
                <div className="flex items-center gap-2.5 py-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0 border border-blue-100/60 shadow-2xs">
                    <Rocket size={17} />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    Innovative <br className="hidden sm:inline" />
                    Projects
                  </span>
                </div>

                {/* 2. Learning & Growth */}
                <div className="flex items-center gap-2.5 py-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100/60 shadow-2xs">
                    <GraduationCap size={17} />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    Learning <br className="hidden sm:inline" />
                    &amp; Growth
                  </span>
                </div>

                {/* 3. Global Exposure */}
                <div className="flex items-center gap-2.5 py-2">
                  <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 border border-cyan-100/60 shadow-2xs">
                    <Globe2 size={17} />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    Global <br className="hidden sm:inline" />
                    Exposure
                  </span>
                </div>

                {/* 4. Supportive Culture */}
                <div className="flex items-center gap-2.5 py-2">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100/60 shadow-2xs">
                    <Users size={17} />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    Supportive <br className="hidden sm:inline" />
                    Culture
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (45%): Hero Image */}
            <div className="lg:col-span-5 relative w-full aspect-[16/10.5] max-h-[400px] my-auto rounded-2xl overflow-hidden shadow-xl border border-slate-200/80">
              <img
                src="/images/careers-hero.jpg"
                alt="Cybaem Tech Careers - Team Collaboration"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FORM & WHY JOIN SECTION
      ══════════════════════════════════════════════════ */}
      <section ref={contentRef} className="py-12 sm:py-16 lg:py-20 bg-[#fafcff]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* ── Left Column: Career Application Form (7 cols) ── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,50,150,0.04)] p-6 sm:p-8 lg:p-10"
            >
              {showSuccess && submittedCandidate ? (
                <div className="py-6 sm:py-8 text-center space-y-6 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shadow-[0_8px_25px_rgba(16,185,129,0.18)]">
                    <CheckCircle2 size={36} className="stroke-[2.5]" />
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                      <Sparkles size={13} /> Application Received
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                      Thank You, {submittedCandidate.name}!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                      We have successfully received your application for{" "}
                      <span className="font-semibold text-primary">
                        {submittedCandidate.position}
                      </span>
                      .
                    </p>
                  </div>

                  {/* Highlight card indicating emails sent */}
                  <div className="bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-100 rounded-2xl p-5 sm:p-6 text-left space-y-3.5 max-w-lg mx-auto">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Mail size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          Confirmation Email Dispatched
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                          A thank-you email with your application details has been sent to{" "}
                          <strong className="text-slate-900">{submittedCandidate.email}</strong>.
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-slate-200/80 pt-3 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Building2 size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          HR & Talent Team Notification
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                          Your resume has been delivered to{" "}
                          <strong className="text-slate-900">hr@cybaemtech.com</strong>. If your profile is shortlisted, our HR team will reach out for the next round.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setShowSuccess(false);
                        setSubmittedCandidate(null);
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold bg-primary text-white rounded-xl shadow-[0_6px_20px_rgba(0,82,204,0.2)] hover:bg-[#0040a8] hover:-translate-y-0.5 transition-all"
                    >
                      <span>Submit Another Application</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Form Title Tag */}
                  <motion.div variants={itemVariants} className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold tracking-[0.14em] text-primary uppercase">
                      JOIN OUR TEAM
                    </span>
                    <span className="w-6 h-[2px] bg-primary" />
                  </motion.div>

                  {/* Form Heading & Subtitle */}
                  <motion.h2
                    variants={itemVariants}
                    className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-2"
                  >
                    Career <span className="text-primary">Application Form</span>
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="text-xs sm:text-sm text-slate-500 mb-8"
                  >
                    Share your details and we'll get in touch if there's a suitable opportunity for you.
                  </motion.p>

                  {/* The Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1: Full Name & Email Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName" className="text-xs font-bold text-slate-700 mb-1.5 block">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <User
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                          <Input
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            value={form.fullName}
                            onChange={handleInputChange}
                            className={`pl-10 h-11 text-xs sm:text-sm rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 ${errors.fullName ? "border-red-500 bg-red-50/20" : ""
                              }`}
                          />
                        </div>
                        {errors.fullName && (
                          <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-xs font-bold text-slate-700 mb-1.5 block">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Mail
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={form.email}
                            onChange={handleInputChange}
                            className={`pl-10 h-11 text-xs sm:text-sm rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 ${errors.email ? "border-red-500 bg-red-50/20" : ""
                              }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Phone Number & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-xs font-bold text-slate-700 mb-1.5 block">
                          Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Phone
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={form.phone}
                            onChange={handleInputChange}
                            className={`pl-10 h-11 text-xs sm:text-sm rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 ${errors.phone ? "border-red-500 bg-red-50/20" : ""
                              }`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="location" className="text-xs font-bold text-slate-700 mb-1.5 block">
                          Location <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <MapPin
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                          <Input
                            id="location"
                            name="location"
                            type="text"
                            placeholder="Enter your current location"
                            value={form.location}
                            onChange={handleInputChange}
                            className={`pl-10 h-11 text-xs sm:text-sm rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 ${errors.location ? "border-red-500 bg-red-50/20" : ""
                              }`}
                          />
                        </div>
                        {errors.location && (
                          <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.location}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Position Interested In & Years of Experience */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs font-bold text-slate-700 mb-1.5 block">
                          Position Interested In <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={form.position}
                          onValueChange={(val) => handleSelectChange("position", val)}
                        >
                          <SelectTrigger
                            className={`h-11 text-xs sm:text-sm rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 ${errors.position ? "border-red-500 bg-red-50/20" : ""
                              }`}
                          >
                            <SelectValue placeholder="Select a position" />
                          </SelectTrigger>
                          <SelectContent className="max-h-60 bg-white">
                            {positionsList.map((pos) => (
                              <SelectItem key={pos} value={pos} className="text-xs sm:text-sm">
                                {pos}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.position && (
                          <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.position}</p>
                        )}
                      </div>

                      <div>
                        <Label className="text-xs font-bold text-slate-700 mb-1.5 block">
                          Years of Experience <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={form.experience}
                          onValueChange={(val) => handleSelectChange("experience", val)}
                        >
                          <SelectTrigger
                            className={`h-11 text-xs sm:text-sm rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 ${errors.experience ? "border-red-500 bg-red-50/20" : ""
                              }`}
                          >
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            {experienceLevels.map((lvl) => (
                              <SelectItem key={lvl} value={lvl} className="text-xs sm:text-sm">
                                {lvl}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.experience && (
                          <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.experience}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 4: Upload Resume (Interactive Drag & Drop) */}
                    <div>
                      <Label className="text-xs font-bold text-slate-700 mb-1.5 block">
                        Upload Resume <span className="text-red-500">*</span>
                      </Label>

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={handleFileChange}
                      />

                      {!resumeFile ? (
                        <div
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                          onClick={() => fileInputRef.current?.click()}
                          className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center gap-2 ${isDragging
                              ? "border-primary bg-blue-50/50"
                              : errors.resume
                                ? "border-red-400 bg-red-50/20"
                                : "border-slate-200 hover:border-primary hover:bg-slate-50/60"
                            }`}
                        >
                          <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center">
                            <Upload size={18} />
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-slate-800">
                            Drag and drop your resume here
                          </p>
                          <p className="text-[11px] sm:text-xs text-slate-400">
                            or click to browse (PDF, DOC, DOCX | Max 5 MB)
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between p-3.5 bg-blue-50/60 border border-blue-200/80 rounded-xl">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center shrink-0">
                              <FileText size={18} />
                            </div>
                            <div className="truncate">
                              <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                                {resumeFile.name}
                              </p>
                              <p className="text-[11px] text-slate-500">
                                {(resumeFile.size / 1024).toFixed(1)} KB • Resume ready
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                            <button
                              type="button"
                              onClick={handleRemoveFile}
                              className="p-1 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                              title="Remove file"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        </div>
                      )}

                      {errors.resume && (
                        <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.resume}</p>
                      )}
                    </div>

                    {/* Row 5: Additional Message (Optional) */}
                    <div>
                      <Label htmlFor="message" className="text-xs font-bold text-slate-700 mb-1.5 block">
                        Additional Message (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Tell us a bit about yourself, your skills, or the type of opportunities you're looking for..."
                        value={form.message}
                        onChange={handleInputChange}
                        className="text-xs sm:text-sm rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center justify-center gap-2 px-7 py-3 text-xs sm:text-sm font-bold bg-primary text-white rounded-xl shadow-[0_6px_20px_rgba(0,82,204,0.25)] hover:bg-[#0040a8] hover:shadow-[0_8px_25px_rgba(0,82,204,0.35)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Submitting Application...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Application</span>
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>

            {/* ── Right Column: Why Join & Have Questions (5 cols) ── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              className="lg:col-span-5 space-y-6"
            >
              {/* Card 1: Why Join CybaemTech? */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,50,150,0.04)] p-6 sm:p-8">
                <h3 className="text-xl sm:text-[22px] font-extrabold text-slate-900 mb-2">
                  Why Join CybaemTech?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                  We empower people to do their best work and build rewarding careers in a collaborative environment.
                </p>

                {/* 4 Feature Cards */}
                <div className="space-y-3.5">
                  {/* 1. Impactful Projects */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <Rocket size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight mb-0.5">
                        Work on Impactful Projects
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
                        Build solutions for global enterprises.
                      </p>
                    </div>
                  </div>

                  {/* 2. Continuous Learning */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <TrendingUp size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight mb-0.5">
                        Continuous Learning
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
                        Upskill with the latest technologies.
                      </p>
                    </div>
                  </div>

                  {/* 3. Supportive Team Culture */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                      <Users size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight mb-0.5">
                        Supportive Team Culture
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
                        Collaborate, innovate and grow together.
                      </p>
                    </div>
                  </div>

                  {/* 4. Flexible Work */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Lightbulb size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight mb-0.5">
                        Flexible Work
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
                        Work-life balance and modern work options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Have Questions? */}
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-blue-100/60 rounded-2xl sm:rounded-3xl border border-blue-200/70 shadow-[0_8px_30px_rgba(0,50,150,0.04)] p-6 sm:p-8">
                {/* Decorative Building Silhouette Graphic in Bottom Right */}
                <div className="absolute right-0 bottom-0 pointer-events-none opacity-25 translate-x-3 translate-y-3">
                  <div className="w-36 h-36 rounded-full bg-blue-400/20 blur-xl absolute -top-4 -left-4" />
                  <Building2 size={120} className="text-primary" strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1">
                    Have Questions?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-5">
                    Feel free to reach out to our HR team.
                  </p>

                  <div className="space-y-3">
                    <a
                      href="mailto:hr@cybaemtech.com"
                      className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-primary flex items-center justify-center shrink-0">
                        <Mail size={14} />
                      </div>
                      <span>hr@cybaemtech.com</span>
                    </a>

                    <div>
                      <a
                        href="tel:+918530171515"
                        className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
                      >
                        <div className="w-7 h-7 rounded-lg bg-blue-100 text-primary flex items-center justify-center shrink-0">
                          <Phone size={14} />
                        </div>
                        <span>+91 8600170900</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SUCCESS DIALOG
      ══════════════════════════════════════════════════ */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="max-w-md bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-blue-100 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100 shadow-sm">
            <CheckCircle2 size={32} />
          </div>
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-slate-900 text-center">
              Application Sent Successfully!
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-slate-600 mt-2 text-center leading-relaxed">
              Thank you for applying to Cybaem Tech! Your application and resume have been forwarded directly to our HR team at <span className="font-semibold text-primary">hr@cybaemtech.com</span>. We will review your profile and reach out if there is a suitable opportunity.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowSuccess(false)}
              className="px-6 py-2.5 text-xs sm:text-sm font-bold bg-primary text-white rounded-xl hover:bg-[#0040a8] transition-colors"
            >
              Done
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Careers;
