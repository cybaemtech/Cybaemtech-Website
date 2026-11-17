import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, ShieldCheck, CheckSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticButton } from "./Navbar";
import { containerVariants, itemVariants } from "@/lib/animations";
import ctaImg from "@/assets/cta.png";

const CTASection = () => {
  return (
    <section id="contact" className="py-10 lg:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ backgroundImage: `url(${ctaImg})` }}
          className="rounded-[2rem] border border-blue-100/80 p-6 sm:p-9 lg:p-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 relative overflow-hidden bg-cover bg-center bg-no-repeat shadow-[0_20px_50px_rgba(0,82,204,0.06)]"
        >
          {/* Subtle light white gradient shade on the left */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[70%] lg:w-[58%] bg-gradient-to-r from-white/95 via-white/80 to-transparent pointer-events-none z-0" />

          {/* Decorative background glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          {/* Left Side: Content */}
          <div className="lg:w-[48%] relative z-10 text-left">
            <motion.h2 variants={itemVariants} className="font-display text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-slate-900 leading-[1.2] mb-3 tracking-tight">
              <span className="whitespace-nowrap block">Ready to Build a System</span>
              <span className="text-primary italic font-serif">That Scales?</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed mb-6 max-w-lg">
              Stop settling for vendors. Partner with a technology team that guarantees delivery, security, and performance. Speak directly with our technical leadership today.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="mb-4">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                >
                  Let's Connect
                  <ArrowRight size={16} />
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Contact Email & Phone Lines */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 text-[13px] text-slate-500 pt-1">
              <a href="mailto:sales@cybaemtech.com" className="flex items-center gap-2 hover:text-primary transition-colors font-medium">
                <Mail size={14} className="text-primary" />
                sales@cybaemtech.com
              </a>
              <span className="flex items-center gap-2 font-medium">
                <Phone size={14} className="text-primary" />
                Global Support Lines
              </span>
            </motion.div>
          </div>

          {/* Center Graphic Spacer */}
          <div className="lg:w-[14%] hidden lg:block h-36 relative z-10" />

          {/* Right Side: Stacked Feature Cards */}
       
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

