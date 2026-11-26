import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Three Main Services Images for the cards (Serial-wise: Software, Cloud & Security, Growth & Revenue)
import swHeroImg from "@/assets/services-card-software.jpg";
import cloudHeroImg from "@/assets/services-card-cloud.jpg";
import growthHeroImg from "@/assets/services-card-growth.jpg";

// Panoramic visual composition combining the three services into one image
import servicesCombinedBanner from "@/assets/services-combined-banner.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const servicesData: ServiceCardItem[] = [
  {
    id: "software-platforms",
    title: "Software & Platforms",
    description:
      "Custom enterprise software, modern web platforms, and mobile apps engineered to streamline operations and scale your business.",
    image: swHeroImg,
    link: "/software-platforms",
  },
  {
    id: "cloud-security",
    title: "Cloud & Security",
    description:
      "Managed IT infrastructure, certified cloud migrations, and 24/7 proactive cybersecurity to safeguard enterprise assets.",
    image: cloudHeroImg,
    link: "/cloud-security",
  },
  {
    id: "growth-revenue",
    title: "Growth & Revenue",
    description:
      "Targeted performance marketing, SEO, and social media strategies designed to attract, engage, and convert qualified leads.",
    image: growthHeroImg,
    link: "/digital-growth",
  },
];

const SolutionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerLabelRef = useRef<HTMLHeadingElement>(null);
  const headerTitleRef = useRef<HTMLParagraphElement>(null);
  const headerArrowsRef = useRef<HTMLDivElement>(null);

  const singleHeroWrapperRef = useRef<HTMLDivElement>(null);
  const singleHeroRef = useRef<HTMLDivElement>(null);

  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const flipperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const card = scrollContainerRef.current.firstElementChild as HTMLElement;
    const scrollAmount = card ? card.offsetWidth + 24 : 360;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

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
          headerRef.current &&
          headerLabelRef.current &&
          headerTitleRef.current &&
          headerArrowsRef.current &&
          singleHeroWrapperRef.current &&
          singleHeroRef.current &&
          cardsContainerRef.current &&
          cardsGridRef.current &&
          cardRefs.current[0] &&
          cardRefs.current[1] &&
          cardRefs.current[2]
        ) {
          const section = sectionRef.current;
          const header = headerRef.current;
          const headerLabel = headerLabelRef.current;
          const headerTitle = headerTitleRef.current;
          const headerArrows = headerArrowsRef.current;

          const singleHeroWrapper = singleHeroWrapperRef.current;
          const singleHero = singleHeroRef.current;

          const cardsContainer = cardsContainerRef.current;
          const grid = cardsGridRef.current;
          const c0 = cardRefs.current[0];
          const c1 = cardRefs.current[1];
          const c2 = cardRefs.current[2];

          const flip0 = flipperRefs.current[0];
          const flip1 = flipperRefs.current[1];
          const flip2 = flipperRefs.current[2];

          const t0 = textRefs.current[0];
          const t1 = textRefs.current[1];
          const t2 = textRefs.current[2];

          // Calculate current natural gap between Card 0 and Card 1
          const getGap = () => {
            const r0 = c0.getBoundingClientRect();
            const r1 = c1.getBoundingClientRect();
            const c0x = (gsap.getProperty(c0, "x") as number) || 0;
            const c1x = (gsap.getProperty(c1, "x") as number) || 0;
            const untransformedR0Right = r0.right - c0x;
            const untransformedR1Left = r1.left - c1x;
            const g = untransformedR1Left - untransformedR0Right;
            return g > 0 ? g : 32;
          };

          const initialGap = getGap();

          const getCardImageHeight = () => {
            const cardImg = c0.querySelector(".aspect-\\[16\\/10\\]");
            return cardImg ? cardImg.clientHeight : 240;
          };

          // ── INITIAL STATE (STAGE 1: 0–15% Progress) ──
          // 1. Single Continuous Hero Image is at its large presentation size (~92% width, generous 460px height)
          gsap.set(singleHeroWrapper, {
            opacity: 1,
            visibility: "visible",
            zIndex: 30,
          });
          gsap.set(singleHero, {
            scale: 1.05,
            height: 460,
            transformOrigin: "center center",
          });

          // 2. Hide section label, heading, and navigation arrows initially
          gsap.set([headerLabel, headerTitle], {
            opacity: 0,
            y: 25,
            visibility: "hidden",
          });
          gsap.set(headerArrows, {
            opacity: 0,
            visibility: "hidden",
          });

          // 3. Three-card split container is initially transparent behind the single hero
          gsap.set(cardsContainer, {
            opacity: 0,
          });

          // 4. In cards container: cards are touching with 0 gap (Card 0 shifted right, Card 2 shifted left)
          gsap.set(c0, {
            x: initialGap,
            rotateZ: 0,
            rotateY: 0,
          });
          gsap.set(c1, {
            x: 0,
            rotateZ: 0,
            rotateY: 0,
          });
          gsap.set(c2, {
            x: -initialGap,
            rotateZ: 0,
            rotateY: 0,
          });

          // 5. Flippers start at 0deg (front face with sliced panoramic view facing forward)
          [flip0, flip1, flip2].forEach((f) => {
            if (f) gsap.set(f, { rotateY: 0 });
          });

          // 6. Card titles and descriptions are hidden initially
          [t0, t1, t2].forEach((t) => {
            if (t) gsap.set(t, { opacity: 0, y: 24 });
          });

          // ── BUILD COORDINATED 5-STAGE GSAP SCROLLTRIGGER TIMELINE ──
          // Total distance: 2600px with scrub: 1.5, pin: true
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=2600",
              pin: true,
              pinSpacing: true,
              scrub: 1.5,
              anticipatePin: 1,
              refreshPriority: 2,
              invalidateOnRefresh: true,
            },
          });

          // ── STAGE 1: Hold large single hero image (0.00 -> 0.15) ──
          tl.addLabel("stage1", 0);
          tl.to({}, { duration: 0.15 }, 0);

          // ── STAGE 2: Smooth Image Zoom-Out & Heading Reveal (0.15 -> 0.35) ──
          tl.addLabel("stage2", 0.15);

          // Zoom out image from 460px height to card image height
          tl.to(
            singleHero,
            {
              scale: 1.0,
              height: () => getCardImageHeight(),
              ease: "power2.inOut",
              duration: 0.2,
            },
            0.15
          );

          // Reveal section label "OUR SERVICES"
          tl.to(
            headerLabel,
            {
              opacity: 1,
              y: 0,
              visibility: "visible",
              ease: "power2.out",
              duration: 0.12,
            },
            0.18
          );

          // Reveal main heading "In focus"
          tl.to(
            headerTitle,
            {
              opacity: 1,
              y: 0,
              visibility: "visible",
              ease: "power2.out",
              duration: 0.12,
            },
            0.22
          );

          // Reveal navigation arrows
          tl.to(
            headerArrows,
            {
              opacity: 1,
              visibility: "visible",
              ease: "power2.out",
              duration: 0.1,
            },
            0.26
          );

          // ── STAGE 3: Image Splitting Into Three Panels (0.35 -> 0.60) ──
          tl.addLabel("stage3", 0.35);

          // Seamless transition from single hero to the 3-panel split container
          tl.to(
            singleHeroWrapper,
            {
              opacity: 0,
              visibility: "hidden",
              duration: 0.05,
            },
            0.35
          ).to(
            cardsContainer,
            {
              opacity: 1,
              duration: 0.05,
            },
            0.35
          );

          // Gradually split image into three panels by opening horizontal gaps
          tl.to(
            c0,
            {
              x: 0,
              ease: "power2.inOut",
              duration: 0.25,
            },
            0.35
          ).to(
            c2,
            {
              x: 0,
              ease: "power2.inOut",
              duration: 0.25,
            },
            0.35
          );

          // ── STAGE 4: 3D Flip and Service Image Reveal (0.60 -> 0.80) ──
          tl.addLabel("stage4", 0.60);

          // Genuine 3D Card Flip around vertical Y-axis from 0deg to 180deg
          // Front face (panoramic slice) flips away, back face (service hero photo) flips forward
          [flip0, flip1, flip2].forEach((f, i) => {
            if (f) {
              tl.to(
                f,
                {
                  rotateY: 180,
                  ease: "power2.inOut",
                  duration: 0.18,
                },
                0.60 + i * 0.03
              );
            }
          });

          // ── STAGE 5: Final Service Cards Layout & Content (0.80 -> 1.00) ──
          tl.addLabel("stage5", 0.80);

          // Reveal service titles and descriptions below the cards
          [t0, t1, t2].forEach((t, i) => {
            if (t) {
              tl.to(
                t,
                {
                  opacity: 1,
                  y: 0,
                  ease: "power2.out",
                  duration: 0.12,
                },
                0.80 + i * 0.04
              );
            }
          });

          // Hold state (0.95 -> 1.00) so user sees the fully aligned cards before unpinning
          tl.to({}, { duration: 0.05 }, 0.95);

          // Synchronize and refresh all ScrollTriggers in DOM order
          ScrollTrigger.sort();
          ScrollTrigger.refresh();
        } else {
          // Reset styling for mobile and reduced-motion modes
          if (singleHeroWrapperRef.current) {
            gsap.set(singleHeroWrapperRef.current, { display: "none" });
          }
          if (headerLabelRef.current) {
            gsap.set(headerLabelRef.current, { clearProps: "all" });
          }
          if (headerTitleRef.current) {
            gsap.set(headerTitleRef.current, { clearProps: "all" });
          }
          if (headerArrowsRef.current) {
            gsap.set(headerArrowsRef.current, { clearProps: "all" });
          }
          if (cardsContainerRef.current) {
            gsap.set(cardsContainerRef.current, { clearProps: "all" });
          }
          if (cardsGridRef.current) {
            gsap.set(cardsGridRef.current, { clearProps: "all" });
          }
          cardRefs.current.forEach((c) => {
            if (c) gsap.set(c, { clearProps: "all" });
          });
          flipperRefs.current.forEach((f) => {
            if (f) gsap.set(f, { rotateY: 180 }); // Show back face (service photos) directly on mobile
          });
          textRefs.current.forEach((t) => {
            if (t) gsap.set(t, { clearProps: "all" });
          });
        }
      }
    );

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative lg:min-h-screen pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-24 bg-white overflow-hidden border-t border-b border-slate-100 flex flex-col justify-start lg:justify-center"
    >
      {/* ── BACKGROUND: Clean White with subtle enterprise dots and ambient blue glow ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/70 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10 max-w-7xl w-full flex flex-col justify-center">
        {/* ── SECTION HEADER: Centered Title & Subtitle + Nav Arrows on Right ── */}
        <div
          ref={headerRef}
          className="relative flex flex-col items-center justify-center text-center mb-6 sm:mb-8 lg:mb-12 will-change-[opacity,transform]"
        >
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
            <h2
              ref={headerLabelRef}
              className="font-display text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#0a1435] tracking-tight leading-tight"
            >
              OUR SERVICES
            </h2>
            <p
              ref={headerTitleRef}
              className="text-sm sm:text-base text-primary font-semibold tracking-wide mt-2 sm:mt-2.5"
            >
              Smart Tech Stronger Tomorrow
            </p>
          </div>

          {/* Minimal Navigation Arrows matching the clean light theme (Desktop only) */}
          <div
            ref={headerArrowsRef}
            className="hidden lg:flex absolute right-0 bottom-1 items-center gap-2.5"
          >
            <button
              onClick={() => handleScroll("left")}
              type="button"
              aria-label="Previous service"
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 shadow-xs flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            >
              <ArrowLeft size={18} strokeWidth={1.8} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              type="button"
              aria-label="Next service"
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 shadow-xs flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            >
              <ArrowRight size={18} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* ── STAGE CONTAINER ── */}
        <div className="relative w-full">
          {/* STAGE 1 & 2: Single Continuous Hero Image (Desktop only) */}
          <div
            ref={singleHeroWrapperRef}
            className="hidden lg:block absolute inset-0 z-30 pointer-events-none"
          >
            <div
              ref={singleHeroRef}
              className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200/80 bg-slate-100"
              style={{
                width: "92%",
                height: "460px",
                maxHeight: "480px",
              }}
            >
              <img
                src={servicesCombinedBanner}
                alt="Cybaem Tech Enterprise Services"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* STAGE 3, 4, 5: 3-Card Split & 3D Flip Layout */}
          <div
            ref={cardsContainerRef}
            className="w-full will-change-transform"
          >
            <div
              ref={scrollContainerRef}
              className="w-full"
            >
              <div
                ref={cardsGridRef}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-8 items-start w-full relative"
                style={{ perspective: 1200 }}
              >
                {servicesData.map((service, index) => (
                  <div
                    key={service.id}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="w-full will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Link
                      to={service.link}
                      className="group flex flex-col h-full cursor-pointer focus:outline-hidden"
                    >
                      {/* 3D Flip Card Container */}
                      <div
                        className="relative w-full aspect-[16/10]"
                        style={{ perspective: 1200 }}
                      >
                        <div
                          ref={(el) => (flipperRefs.current[index] = el)}
                          className="w-full h-full relative will-change-transform"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          {/* FRONT FACE: One-third sliced portion of the panoramic composition */}
                          <div
                            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xl shadow-slate-900/5"
                            style={{
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                              transform: "rotateY(0deg)",
                            }}
                          >
                            <img
                              src={servicesCombinedBanner}
                              alt=""
                              className="absolute top-0 h-full w-[300%] max-w-none object-cover pointer-events-none select-none"
                              style={{
                                left:
                                  index === 0
                                    ? "0%"
                                    : index === 1
                                    ? "-100%"
                                    : "-200%",
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                          </div>

                          {/* BACK FACE: Dedicated Individual Service Photo (Facing forward when flipped 180°) */}
                          <div
                            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 group-hover:border-primary/50 shadow-xl shadow-slate-900/5 group-hover:shadow-[0_12px_30px_rgba(29,78,216,0.18)] transition-all duration-300"
                            style={{
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                              transform: "rotateY(180deg)",
                            }}
                          >
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                              loading="lazy"
                            />
                            {/* Subtle dark vignette gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none opacity-50 group-hover:opacity-20 transition-opacity duration-300" />

                            {/* Corner Accent Hover Arrow */}
                            <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 z-30">
                              <ArrowUpRight size={15} strokeWidth={2} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 2. Below Image: Service Title Heading, Description & Hover Know More */}
                      <div
                        ref={(el) => (textRefs.current[index] = el)}
                        className="flex flex-col will-change-[opacity,transform]"
                      >
                        <h3 className="font-display text-lg sm:text-xl font-bold text-primary transition-colors duration-200 mt-4 sm:mt-5 leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-[14px] text-slate-600 group-hover:text-slate-800 leading-relaxed mt-2 line-clamp-2 transition-colors duration-200">
                          {service.description}
                        </p>

                        {/* Know More: Only visible when hovering on the card */}
                        <div className="mt-3 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                          <span>Know More</span>
                          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
