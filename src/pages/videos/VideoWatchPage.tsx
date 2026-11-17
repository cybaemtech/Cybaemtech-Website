import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronRight, Play, Film, Share2, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { getVideoBySlug, videosData } from "@/data/videosData";

interface VideoWatchPageProps {
  slugOverride?: string;
}

export default function VideoWatchPage({ slugOverride }: VideoWatchPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = slugOverride || slug || "";
  const video = getVideoBySlug(activeSlug);
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // When active video changes (e.g. clicking recommended video at bottom):
  // 1. Reset play state so thumbnail is displayed
  // 2. Stop and reload the video element to the new source
  // 3. Scroll user smoothly to the top of the watch page
  useEffect(() => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSlug]);

  if (!video) {
    return <Navigate to="/videos" replace />;
  }

  const handleStartPlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: video.title,
          text: video.description,
          url: video.url,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(video.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const videoObjectSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${video.url}#video`,
    name: video.title,
    description: video.description,
    thumbnailUrl: video.fullThumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: `https://cybaemtech.com${video.videoUrl}`,
    url: video.url,
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${video.url}#breadcrumb`,
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
      {
        "@type": "ListItem",
        position: 3,
        name: video.title,
        item: video.url,
      },
    ],
  };

  return (
    <div key={activeSlug} className="min-h-screen flex flex-col bg-[#FDFDFE]">
      <SEOHead
        title={`${video.title} | Cybaem Tech Videos`}
        description={video.description}
        canonical={video.url}
        ogTitle={video.title}
        ogDescription={video.description}
        ogImage={video.fullThumbnailUrl || video.thumbnailUrl}
        ogType="video.other"
        twitterTitle={video.title}
        twitterDescription={video.description}
        jsonLd={[videoObjectSchema, breadcrumbSchema]}
      />

      <Navbar />

      <main className="flex-1 pt-24 pb-16 lg:pt-28 lg:pb-24">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#F8FAFD] border-b border-slate-100/80 mb-6 lg:mb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-3">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-medium text-slate-500 overflow-x-auto whitespace-nowrap"
            >
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight size={13} className="text-slate-400 shrink-0" />
              <Link to="/videos" className="hover:text-primary transition-colors">
                Videos
              </Link>
              <ChevronRight size={13} className="text-slate-400 shrink-0" />
              <span className="text-primary font-semibold truncate max-w-[240px] sm:max-w-md">
                {video.title}
              </span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-5xl">
          {/* Above the fold: Title/H1 */}
          <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              {video.category && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-primary border border-sky-100 mb-2.5">
                  <Film size={12} />
                  <span>{video.category}</span>
                </div>
              )}
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1435] tracking-tight leading-tight">
                {video.title}
              </h1>
            </div>

            <button
              onClick={handleShare}
              type="button"
              className="inline-flex items-center gap-2 self-start sm:self-center px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer shrink-0"
              title="Share this video"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 size={14} />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>

          {/* Above the fold: Embedded Video Player with Thumbnail Preview */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-black shadow-xl ring-1 ring-slate-900/10 aspect-video mb-8 sm:mb-10 group">
            <video
              key={video.slug}
              ref={videoRef}
              src={video.videoUrl}
              className="w-full h-full object-contain"
              controls
              playsInline
              preload="metadata"
              poster={video.thumbnailUrl}
              onPlay={() => setIsPlaying(true)}
              onPause={() => {}}
            >
              <source src={video.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Thumbnail Poster Overlay prior to playback */}
            {!isPlaying && (
              <div
                onClick={handleStartPlay}
                className="absolute inset-0 z-10 cursor-pointer bg-black flex items-center justify-center transition-all duration-300"
                role="button"
                tabIndex={0}
                aria-label={`Play ${video.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleStartPlay();
                }}
              >
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 ring-4 ring-white/30">
                    <Play size={28} className="ml-1 fill-current" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Below video: Description */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-xs">
            <h2 className="text-base sm:text-lg font-bold text-[#0A1435] mb-3">
              Description
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {video.description}
            </p>
          </div>

          {/* Other Videos in Directory */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900">
                More Videos from Cybaem Tech
              </h3>
              <Link
                to="/videos"
                className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
              >
                <span>View all</span>
                <ChevronRight size={12} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {videosData
                .filter((v) => v.slug !== video.slug)
                .map((v) => (
                  <Link
                    key={v.slug}
                    to={`/videos/${v.slug}`}
                    className="group flex flex-col bg-white rounded-xl border border-slate-200/80 hover:border-primary/40 hover:shadow-md transition-all overflow-hidden"
                  >
                    <div className="relative aspect-video bg-slate-900 overflow-hidden">
                      <img
                        src={v.thumbnailUrl}
                        alt={v.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play size={16} className="ml-0.5 fill-current" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <h4 className="font-semibold text-sm text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                        {v.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                        {v.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
