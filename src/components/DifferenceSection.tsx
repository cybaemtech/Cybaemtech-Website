import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UserCheck, Layers, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TOP_OFFSET = 92; // Distance from top of viewport to clear navbar with balanced breathing room

const DifferenceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const targetPlaceholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        isMobileOrReduced: "(max-width: 1023px), (prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop } = context.conditions as {
          isDesktop: boolean;
          isMobileOrReduced: boolean;
        };

        if (
          isDesktop &&
          sectionRef.current &&
          imageWrapperRef.current &&
          rightContentRef.current &&
          targetPlaceholderRef.current
        ) {
          const section = sectionRef.current;
          const imageWrapper = imageWrapperRef.current;
          const rightContent = rightContentRef.current;
          const targetPlaceholder = targetPlaceholderRef.current;

          const getTargetBounds = () => {
            const sRect = section.getBoundingClientRect();
            const tRect = targetPlaceholder.getBoundingClientRect();
            return {
              top: Math.round(tRect.top - sRect.top),
              left: Math.round(Math.max(0, tRect.left - sRect.left)),
              width: Math.round(tRect.width),
              height: Math.round(tRect.height),
            };
          };

          // Initial state: full-width, image starting below navbar with equal breathing room, no right content visible
          gsap.set(rightContent, { opacity: 0, x: 60 });
          gsap.set(imageWrapper, {
            position: "absolute",
            top: TOP_OFFSET,
            left: 0,
            width: "100%",
            height: section.offsetHeight - TOP_OFFSET,
            borderRadius: 0,
            boxShadow: "none",
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=1100",
              pin: true,
              pinSpacing: true,
              scrub: 1.5,
              anticipatePin: 1,
              refreshPriority: 1,
              invalidateOnRefresh: true,
            },
          });

          ScrollTrigger.sort();
          ScrollTrigger.refresh();

          // Slowly shrink the full-screen image toward the left side while progressively revealing right content
          tl.to(
            imageWrapper,
            {
              top: () => getTargetBounds().top,
              left: () => getTargetBounds().left,
              width: () => getTargetBounds().width,
              height: () => getTargetBounds().height,
              borderRadius: 24,
              boxShadow:
                "0 25px 60px -15px rgba(0, 82, 204, 0.15), 0 12px 25px -8px rgba(10, 27, 57, 0.08)",
              ease: "power2.out",
              duration: 1,
            },
            0
          )
            .to(
              rightContent,
              {
                opacity: 1,
                x: 0,
                ease: "power2.out",
                duration: 0.85,
              },
              0.15
            )
            // Maintain final layout briefly before allowing normal page scrolling to continue
            .to({}, { duration: 0.25 });
        } else if (rightContentRef.current) {
          // Mobile or reduced motion: make content immediately visible without pinning
          gsap.set(rightContentRef.current, { opacity: 1, x: 0 });
        }
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      id="approach"
      ref={sectionRef}
      className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-gradient-to-b from-[#f8faff] via-[#ffffff] to-[#f4f8ff] border-b border-slate-100 flex items-center py-16 lg:py-0 lg:pt-[92px]"
    >
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[130px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-indigo-100/35 rounded-full blur-[110px] translate-x-1/3 pointer-events-none" />

      {/* Decorative corner grid accents */}
      <div className="absolute top-0 left-0 w-36 sm:w-56 h-36 sm:h-56 bg-[radial-gradient(#475569_1.2px,transparent_1.2px)] [background-size:18px_18px] opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-36 sm:w-56 h-36 sm:h-56 bg-[radial-gradient(#475569_1.2px,transparent_1.2px)] [background-size:18px_18px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
          {/* ── Left Column Target Anchor (42%): Office Image ── */}
          <div
            ref={targetPlaceholderRef}
            className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] lg:h-[480px] xl:h-[520px] max-h-[75vh]"
          >
            {/* Fallback image display for mobile devices */}
            <div className="lg:hidden w-full h-full rounded-3xl overflow-hidden shadow-xl border border-slate-200/80">
              <img
                src="/images/cybaem-difference-office.jpg"
                alt="Cybaem Tech Workspace - Office Engineering Environment"
                className="w-full h-full object-cover object-[8%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* ── Right Column (58%): Content & Value Benefits ── */}
          <div
            ref={rightContentRef}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Small Section Label with Accent Line */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] text-primary uppercase">
                THE CYBAEM DIFFERENCE
              </span>
              <span className="w-12 h-[2.5px] bg-gradient-to-r from-primary to-primary/20 rounded-full" />
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-extrabold text-[#0a1435] tracking-tight leading-[1.18] mb-5 font-display">
              Premium IT Service Solutions: <br className="hidden sm:inline" />
              Eliminating Risk in Offshore <br className="hidden sm:inline" />
              Software Engineering
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 sm:mb-10 max-w-xl font-normal">
              We combine experienced engineering, accountable project ownership, clearly defined scope, and internationally aligned security practices to deliver reliable offshore software solutions.
            </p>

            {/* Three Benefits in a Horizontal Row with Subtle Vertical Dividers */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-5 sm:gap-7 lg:gap-8 pt-6 border-t border-slate-200/70">
              {/* 1. Single Point of Accountability */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2.5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50/90 text-primary flex items-center justify-center border border-blue-100/70 shadow-2xs">
                  <UserCheck size={22} strokeWidth={1.8} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0a1435] leading-snug">
                  Single Point of<br />Accountability
                </span>
              </div>

              <div className="hidden sm:block w-[1px] h-12 bg-slate-200/80 shrink-0" />

              {/* 2. Zero Scope-Creep */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2.5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50/90 text-primary flex items-center justify-center border border-blue-100/70 shadow-2xs">
                  <Layers size={22} strokeWidth={1.8} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0a1435] leading-snug">
                  Zero<br />Scope-Creep
                </span>
              </div>

              <div className="hidden sm:block w-[1px] h-12 bg-slate-200/80 shrink-0" />

              {/* 3. Compliance Assurance */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2.5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50/90 text-primary flex items-center justify-center border border-blue-100/70 shadow-2xs">
                  <ShieldCheck size={22} strokeWidth={1.8} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0a1435] leading-snug">
                  Compliance<br />Assurance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Pinned Full-Screen Animated Image Layer (Shrinks Left) */}
      <div
        ref={imageWrapperRef}
        className="hidden lg:block absolute z-20 overflow-hidden shadow-2xl border border-slate-200/60"
        style={{
          top: "92px",
          left: 0,
          width: "100%",
          height: "calc(100% - 92px)",
          borderRadius: "0px",
        }}
      >
        <img
          src="/images/cybaem-difference-office.jpg"
          alt="Cybaem Tech Workspace - Office Engineering Environment"
          className="w-full h-full object-cover object-[8%_center]"
          loading="eager"
        />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default DifferenceSection;
