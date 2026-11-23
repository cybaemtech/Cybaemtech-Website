import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { containerVariants, itemVariants } from "@/lib/animations";
import awsLogo from "@/assets/aws-logo.svg";
import microsoftLogo from "@/assets/microsoft-logo.svg";
import iso27017Logo from "@/assets/CT images/Homepage/iso-27001-logo.webp";
import iso27001Logo from "@/assets/iso-27001-logo.jpeg";

// Partner logos
import partnerAws from "@/assets/partners/aws.svg";
import partnerMicrosoft from "@/assets/partners/microsoft.svg";
import partnerDell from "@/assets/partners/dell.svg";
import partnerHp from "@/assets/partners/hp.svg";
import partnerLenovo from "@/assets/partners/lenovo.svg";
import partnerAzure from "@/assets/partners/azure.svg";
import partnerFortinet from "@/assets/partners/fortinet.svg";
import partnerSophos from "@/assets/partners/sophos.png";
import partnerTataTele from "@/assets/partners/tata-tele.png";
import partnerEset from "@/assets/partners/eset.svg";
import partnerRedington from "@/assets/partners/redington.png";
import partnerMass from "@/assets/partners/mass.webp";
import partnerEnticesoft from "@/assets/partners/enticesoft.png";
import partnerRazorpay from "@/assets/partners/razorpay.png";

const useCounter = (end: number, duration: number = 2000, start: number = 0, inView: boolean = false) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start, inView]);
  return count;
};

const CertBadge = ({ children, subtitle }: { children: React.ReactNode; subtitle: string }) => (
  <motion.div className="flex flex-col items-center justify-center py-10 px-6 rounded-[2rem] bg-white shadow-[0_0_35px_rgba(29,78,216,0.12)] hover:shadow-[0_0_45px_rgba(29,78,216,0.22)] transition-all duration-300 border border-blue-50/50">
    <div className="h-16 flex items-center justify-center mb-6">
      {children}
    </div>
    <span className="text-[13px] font-bold text-[#0a1128] text-center whitespace-pre-line leading-relaxed">{subtitle}</span>
  </motion.div>
);

/* ── Partner logos ── */
const partners = [
  { name: "GlobalSign", logo: null },
  { name: "Microsoft", logo: partnerMicrosoft },
  { name: "Dell", logo: partnerDell },
  { name: "HP", logo: partnerHp },
  { name: "Lenovo", logo: partnerLenovo },
  { name: "AWS", logo: partnerAws },
  { name: "Azure", logo: partnerAzure },
  { name: "Fortinet", logo: partnerFortinet },
  { name: "Sophos", logo: partnerSophos },
];

const PartnerLogo = ({ name, logo }: { name: string; logo: string | null }) => (
  <div className="flex-shrink-0 flex items-center justify-center w-[140px] h-[80px] px-2">
    {logo ? (
      <img
        src={logo}
        alt={name}
        className="h-16 max-w-[120px] object-contain mix-blend-multiply"
        loading="lazy"
        width={120}
        height={64}
      />
    ) : (
      <span className="font-display font-bold text-sm text-muted-foreground/70 whitespace-nowrap tracking-wide">
        {name}
      </span>
    )}
  </div>
);

const ClientLogosMarquee = () => (
  <motion.div variants={itemVariants} className="pb-8 w-full">
    <div className="text-center mb-4">
      <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#1d4ed8]">
        # OUR PARTNERS
      </span>
    </div>
    <div className="relative py-4 overflow-hidden">
      <div className="flex items-center gap-8 animate-marquee hover:[animation-play-state:paused]">
        {[...partners, ...partners, ...partners].map((p, i) => (
          <PartnerLogo key={`${p.name}-${i}`} name={p.name} logo={p.logo} />
        ))}
      </div>
    </div>
  </motion.div>
);

const TrustAnchorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="section-border py-10 lg:py-16 bg-white relative overflow-hidden">

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <motion.div variants={itemVariants} className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-primary mb-3">WHY IT COMPLIANCE</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Enterprise-Grade <span className="text-primary italic font-light">IT Service Credentials</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10 max-w-5xl mx-auto">
            <CertBadge subtitle="ISO 27001 Certified">
              <img src={iso27001Logo} alt="ISO 27001 Certified" className="h-full w-auto object-contain" />
            </CertBadge>
            <CertBadge subtitle={"ISO 9001:2015\nCertified"}>
              <img src={iso27017Logo} alt="ISO 9001:2015 Certified" className="h-full w-auto object-contain mix-blend-multiply" />
            </CertBadge>
            <CertBadge subtitle={"AWS\nAdvanced Partner"}>
              <img src={awsLogo} alt="AWS Advanced Partner" className="h-full w-auto object-contain" />
            </CertBadge>
            <CertBadge subtitle="SOC 2 Certified">
              <img src={microsoftLogo} alt="SOC 2 Certified" className="h-full w-auto object-contain scale-[1.6]" />
            </CertBadge>
          </motion.div>
        </motion.div>
      </div>

      {/* Client Logos Marquee - Full Width */}
      <ClientLogosMarquee />
    </section>
  );
};

export default TrustAnchorSection;
