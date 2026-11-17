import { Link } from "react-router-dom";
import { ChevronRight, Play, Film, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { videosData } from "@/data/videosData";

export default function VideosHub() {
  const collectionSchema = {
    "@type": "CollectionPage",
    "@id": "https://www.cybaemtech.com/videos#webpage",
    name: "Cybaem Tech Videos & Watch Pages",
    description:
      "Watch official videos from Cybaem Tech covering enterprise software, cloud infrastructure setups, celebrations, and technology insights.",
    url: "https://www.cybaemtech.com/videos",
    isPartOf: {
      "@id": "https://www.cybaemtech.com/#website",
    },
    hasPart: videosData.map((v) => ({
      "@type": "VideoObject",
      name: v.title,
      description: v.description,
      thumbnailUrl: [v.thumbnailUrl],
      uploadDate: v.uploadDate,
      contentUrl: v.videoUrl.startsWith("http")
        ? v.videoUrl
        : `https://www.cybaemtech.com${v.videoUrl}`,
      embedUrl: v.url,
    })),
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": "https://www.cybaemtech.com/videos#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.cybaemtech.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Videos",
        item: "https://www.cybaemtech.com/videos",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFE]">
      <SEOHead
        title="Official Videos & Watch Pages | Cybaem Tech"
        description="Explore official videos from Cybaem Tech featuring our IT infrastructure setups, corporate milestones, team culture, and enterprise tech solutions."
        canonical="https://www.cybaemtech.com/videos"
        ogTitle="Cybaem Tech Videos & Tech Highlights"
        ogDescription="Watch highlights from our foundation day celebrations and enterprise IT infrastructure setups."
        ogType="website"
        jsonLd={[collectionSchema, breadcrumbSchema]}
      />

      <Navbar />

      <main className="flex-1 pt-24 pb-16 lg:pt-28 lg:pb-24">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#F8FAFD] border-b border-slate-100/80 mb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-3">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-medium text-slate-500"
            >
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight size={13} className="text-slate-400" />
              <span className="text-primary font-semibold">Videos</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-primary border border-sky-100 mb-3">
              <Sparkles size={13} />
              <span>OFFICIAL MEDIA</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1435] tracking-tight">
              Cybaem Tech Videos
            </h1>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore our tech demonstrations, infrastructure setups, and corporate milestone celebrations.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videosData.map((v) => (
              <article
                key={v.slug}
                className="group bg-white rounded-2xl border border-slate-200/80 hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <Link
                  to={`/videos/${v.slug}`}
                  className="relative aspect-video bg-black overflow-hidden block"
                >
                  <img
                    src={v.thumbnailUrl}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={22} className="ml-0.5 fill-current" />
                    </div>
                  </div>
                  {v.category && (
                    <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-black/70 text-white backdrop-blur-xs">
                      {v.category}
                    </span>
                  )}
                </Link>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A1435] group-hover:text-primary transition-colors leading-snug">
                      <Link to={`/videos/${v.slug}`}>{v.title}</Link>
                    </h2>
                    <p className="mt-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {v.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/videos/${v.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                    >
                      <span>Watch Video</span>
                      <ChevronRight size={13} />
                    </Link>
                    <span className="text-[11px] text-slate-400">
                      Cybaem Tech Media
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

