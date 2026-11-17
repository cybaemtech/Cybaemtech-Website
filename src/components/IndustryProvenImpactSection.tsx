import React from "react";

export interface ImpactMetric {
  value: string;
  label: string;
}

export interface IndustryProvenImpactSectionProps {
  industryName?: string;
  tag?: string;
  title?: React.ReactNode;
  subtitle?: string;
  metrics?: ImpactMetric[];
  bgImage?: string;
  className?: string;
}

const DEFAULT_METRICS: ImpactMetric[] = [
  {
    value: "100+",
    label: "Projects Delivered",
  },
  {
    value: "3x",
    label: "Average Increase in Lead Conversion",
  },
  {
    value: "85%",
    label: "Client Retention Rate",
  },
  {
    value: "6+",
    label: "Years of Industry Experience",
  },
];

const COMMON_BG_IMAGE =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80";

export default function IndustryProvenImpactSection({
  industryName,
  tag = "PROVEN IMPACT",
  title,
  subtitle,
  metrics = DEFAULT_METRICS,
  bgImage = COMMON_BG_IMAGE,
  className = "",
}: IndustryProvenImpactSectionProps) {
  const displayTitle =
    title ||
    (industryName ? (
      <>
        Helping {industryName} Businesses <br className="hidden sm:inline" />
        Grow Faster
      </>
    ) : (
      <>
        Helping Businesses <br className="hidden sm:inline" />
        Grow Faster
      </>
    ));

  const displaySubtitle =
    subtitle ||
    "Our solutions help enterprises accelerate growth, streamline operations, and deliver exceptional experiences.";

  return (
    <section className={`py-16 sm:py-20 bg-[#07162c] text-white relative overflow-hidden ${className}`}>
      {/* Subtle tech grid lines */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Common architecture / city skyline background visual */}
      <div
        className="absolute right-0 top-0 w-full md:w-3/4 lg:w-3/5 h-full opacity-60 lg:opacity-75 pointer-events-none bg-cover bg-center md:bg-right contrast-105 brightness-110"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      />
      {/* Smooth gradient: dark on left for text readability, clear and light on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07162c] from-35% via-[#07162c]/75 via-65% to-transparent pointer-events-none" />
      {/* Ambient light glow on the right to brighten the section */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block mb-2">
            {tag}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {displayTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            {displaySubtitle}
          </p>
        </div>

        {/* 4 Metrics in Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4 border-t border-white/10">
          {metrics.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <span className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white block">
                {item.value}
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
