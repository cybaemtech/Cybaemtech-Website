import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "@/lib/animations";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import whyChooseUsImg from "@/assets/why choose us.png";

const features = [
  {
    id: "expertise",
    title: "Proven Expertise",
    description: "Experienced team delivering reliable and scalable IT solutions.",
    icon: (
      // Award Rosette with Ribbons
      <svg
        className="w-6 h-6 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="5.5" />
        <path d="M15.4 12.5 17 22l-5-2.8L7 22l1.6-9.5" />
      </svg>
    ),
  },
  {
    id: "client-centric",
    title: "Client-Centric Approach",
    description: "We understand your business needs and focus on long-term partnerships.",
    icon: (
      // 3 People Group / Team
      <svg
        className="w-6 h-6 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="3.5" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "support",
    title: "End-to-End Support",
    description: "From strategy to deployment and ongoing maintenance — all under one roof.",
    icon: (
      // Vertical Bars with upward trend line
      <svg
        className="w-6 h-6 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
        <path d="M4 8l5-4 4 4 7-6" />
      </svg>
    ),
  },
];

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "8+", label: "Countries Served" },
];

const WhyChooseUsSection = () => {
  const { openConsultationModal } = useConsultationModal();

  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Soft background blue aura glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[520px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          {/* LEFT COLUMN: Headings, Stats & CTA Buttons */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            {/* Tag line with blue bar */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-4">
              <span className="w-10 h-[2px] bg-primary rounded-full inline-block" />
              <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-slate-700">
                WHY CHOOSE US
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-[48px] font-bold text-slate-950 leading-[1.12] tracking-tight mb-4"
            >
              Focused on <br />
              Your <span className="text-primary">Success</span>
            </motion.h2>

            {/* Subtitle / Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed mb-8 max-w-md"
            >
              We combine technical expertise, a client-first approach, and operational excellence to deliver solutions that create real business impact.
            </motion.p>

            {/* Floating Stats Row with Vertical Dividers */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 sm:gap-8 mb-8"
            >
              {stats.map((stat, idx) => (
                <div key={stat.label} className="flex items-center gap-6 sm:gap-8">
                  <div>
                    <div className="font-display text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-[13px] text-slate-500 font-medium mt-1 leading-snug whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                  {idx < stats.length - 1 && (
                    <div className="h-10 w-[1px] bg-slate-200 shrink-0" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* Action Buttons: Partner With Us & Learn More */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2">
              <button
                type="button"
                onClick={openConsultationModal}
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#071330] hover:bg-primary text-white text-sm font-semibold rounded-lg shadow-[0_4px_16px_rgba(7,19,48,0.2)] hover:shadow-[0_8px_25px_rgba(0,82,204,0.3)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Partner With Us</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-primary transition-colors pb-0.5 border-b-2 border-primary"
              >
                <span>Learn More</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* CENTER COLUMN: Collaboration Image with Orbit Ring & Accent Nodes */}
          <div className="lg:col-span-5 flex items-center justify-center relative my-6 lg:my-0">
            <div className="relative w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[540px] aspect-square flex items-center justify-center">
              {/* Crescent gradient glow behind the circular graphic */}
              <div
                className="absolute inset-y-2 -left-8 w-[320px] sm:w-[380px] lg:w-[420px] rounded-full bg-gradient-to-tr from-blue-100/90 via-sky-50/70 to-transparent pointer-events-none"
                style={{
                  filter: "blur(6px)",
                }}
              />

              {/* Orbit Ring with 3 Blue Dots */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
                viewBox="0 0 500 500"
                fill="none"
              >
                {/* Blue curved orbit line tracing the right side */}
                <path
                  d="M 250 30 A 220 220 0 0 1 310 465"
                  stroke="#3b82f6"
                  strokeWidth="1.75"
                  strokeOpacity="0.5"
                />

                {/* Node 1 - Upper right */}
                <circle cx="315" cy="48" r="6" fill="primary" />
                <circle cx="315" cy="48" r="11" fill="primary" fillOpacity="0.18" />

                {/* Node 2 - Mid right */}
                <circle cx="430" cy="185" r="6" fill="primary" />
                <circle cx="430" cy="185" r="11" fill="primary" fillOpacity="0.18" />

                {/* Node 3 - Lower right */}
                <circle cx="415" cy="340" r="6" fill="primary" />
                <circle cx="415" cy="340" r="11" fill="primary" fillOpacity="0.18" />
              </svg>

              {/* Bottom right soft accent shape */}
              <div
                className="absolute -bottom-4 right-2 w-36 h-36 rounded-full bg-gradient-to-tr from-blue-100/60 to-transparent blur-lg pointer-events-none"
              />

              {/* Main Image: src/assets/why choose us.png */}
              <motion.div
                variants={itemVariants}
                className="relative z-10 w-[330px] sm:w-[420px] md:w-[460px] lg:w-[480px] xl:w-[510px] aspect-square flex items-center justify-center"
              >
                <img
                  src={whyChooseUsImg}
                  alt="Cybaem Tech dedicated IT engineering team collaborating"
                  className="w-full h-full object-contain drop-shadow-[0_20px_45px_rgba(0,82,204,0.18)] transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: 3 Feature Cards with Dividers */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <div className="space-y-6 sm:space-y-7">
              {features.map((feature, index) => (
                <motion.div key={feature.id} variants={itemVariants}>
                  <div className="flex items-start gap-4 sm:gap-5 group">
                    {/* Circular Icon Container */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#f0f6ff] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#e4efff] group-hover:border-blue-300 transition-all duration-300">
                      {feature.icon}
                    </div>

                    {/* Feature Text */}
                    <div className="flex-1 pt-1">
                      <h3 className="font-display font-bold text-slate-900 text-base sm:text-[17px] mb-1 leading-snug group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-[13.5px] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Divider line between features */}
                  {index < features.length - 1 && (
                    <div className="h-[1px] bg-slate-100 mt-6 sm:mt-7" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
