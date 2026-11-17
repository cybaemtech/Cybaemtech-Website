export interface VideoItem {
  slug: string;
  title: string;
  url: string;
  videoUrl: string;
  thumbnailUrl: string;
  fullThumbnailUrl: string;
  description: string;
  uploadDate: string;
  duration?: string;
  category?: string;
}

export const videosData: VideoItem[] = [
  {
    slug: "foundation-day-celebration-2026",
    title: "Foundation Day Celebration 2026",
    url: "https://www.cybaemtech.com/videos/foundation-day-celebration-2026",
    videoUrl: "/video/video.mp4",
    thumbnailUrl: "/video/thumbnails/foundation-day-celebration-2026.jpg",
    fullThumbnailUrl: "https://www.cybaemtech.com/video/thumbnails/foundation-day-celebration-2026.jpg",
    description:
      "Here are the highlights from Cybaem Tech's 6th Foundation Day Celebration! From the grand cake cutting and team speeches to gift exchanges and memorable group moments, see how the Cybaem Tech family celebrated six years of innovation, growth, and going Beyond Limits.",
    uploadDate: "2026-11-06",
    duration: "PT40S",
    category: "Company Culture & Celebrations",
  },
  {
    slug: "it-infrastructure-setup-for-smarter-business-connectivity",
    title: "IT Infrastructure Setup for Smarter Business Connectivity",
    url: "https://www.cybaemtech.com/videos/it-infrastructure-setup-for-smarter-business-connectivity",
    videoUrl: "/video/it-infrastructure-setup.mp4",
    thumbnailUrl: "/video/thumbnails/it-infrastructure-setup-for-smarter-business-connectivity.jpg",
    fullThumbnailUrl: "https://www.cybaemtech.com/video/thumbnails/it-infrastructure-setup-for-smarter-business-connectivity.jpg",
    description:
      "We build a reliable, high-performance IT foundation designed for seamless business operations and growth. From robust firewall security and high-speed networking to optimized servers, VLANs, enterprise Wi-Fi, and automated backup solutions, we cover everything needed to keep your organization connected and secure.",
    uploadDate: "2026-11-06",
    duration: "PT47S",
    category: "IT Infrastructure & Cloud",
  },
];

export const getVideoBySlug = (slug: string): VideoItem | undefined => {
  return videosData.find((v) => v.slug === slug);
};
