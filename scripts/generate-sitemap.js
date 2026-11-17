import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.cybaemtech.com';
const lastmod = new Date().toISOString().split('T')[0];

const pages = [
  // Core Main Pages
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/life-at-cybaemtech', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/portfolio', changefreq: 'monthly', priority: '0.9' },
  { path: '/leadership', changefreq: 'monthly', priority: '0.8' },
  { path: '/careers', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },

  // Solutions: Cloud & Security Pillar & Services
  { path: '/cloud-security', changefreq: 'monthly', priority: '0.9' },
  { path: '/cloud-security/it-infrastructure-services', changefreq: 'monthly', priority: '0.9' },
  { path: '/cloud-security/cloud-solutions', changefreq: 'monthly', priority: '0.9' },
  { path: '/cloud-security/cybersecurity', changefreq: 'monthly', priority: '0.9' },
  { path: '/cloud-services/aws', changefreq: 'monthly', priority: '0.8' },
  { path: '/cloud-services/microsoft-azure', changefreq: 'monthly', priority: '0.8' },

  // Solutions: Software & Platforms Pillar & Services
  { path: '/software-platforms', changefreq: 'monthly', priority: '0.9' },
  { path: '/software-platforms/enterprise-software', changefreq: 'monthly', priority: '0.9' },
  { path: '/software-platforms/mobile-app-development', changefreq: 'monthly', priority: '0.9' },
  { path: '/software-platforms/web-systems', changefreq: 'monthly', priority: '0.9' },
  { path: '/solutions/it-staff-augmentation', changefreq: 'monthly', priority: '0.9' },

  // Solutions: Growth & Revenue Pillar & Services
  { path: '/digital-growth', changefreq: 'monthly', priority: '0.9' },
  { path: '/digital-growth/performance-marketing', changefreq: 'monthly', priority: '0.9' },
  { path: '/digital-growth/seo-aeo-geo', changefreq: 'monthly', priority: '0.9' },
  { path: '/digital-growth/social-media-management', changefreq: 'monthly', priority: '0.9' },

  // Industry Technology Solutions (8 specialized industries)
  { path: '/industries/healthcare-technology-solutions', changefreq: 'monthly', priority: '0.9' },
  { path: '/industries/logistics-supply-chain-technology-solutions', changefreq: 'monthly', priority: '0.9' },
  { path: '/industries/financial-services-technology-solutions', changefreq: 'monthly', priority: '0.9' },
  { path: '/industries/retail-ecommerce-technology-solutions', changefreq: 'monthly', priority: '0.9' },
  { path: '/industries/education-technology-solutions', changefreq: 'monthly', priority: '0.9' },
  { path: '/industries/hospitality-technology-solutions', changefreq: 'monthly', priority: '0.9' },
  { path: '/industries/manufacturing-technology-solutions', changefreq: 'monthly', priority: '0.9' },
  { path: '/industries/real-estate-technology-solutions', changefreq: 'monthly', priority: '0.9' },

  // Location Pages
  { path: '/in/software-company-in-pune', changefreq: 'monthly', priority: '0.8' },

  // Official Video Watch Pages (Google Search Console compliant)
  { path: '/videos', changefreq: 'monthly', priority: '0.8' },
  { path: '/videos/foundation-day-celebration-2026', changefreq: 'monthly', priority: '0.8' },
  { path: '/videos/it-infrastructure-setup-for-smarter-business-connectivity', changefreq: 'monthly', priority: '0.8' },

  // Products
  { path: '/product', changefreq: 'monthly', priority: '0.8' },
  { path: '/product/crm', changefreq: 'monthly', priority: '0.8' },

  // Legal & Compliance
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms-of-service', changefreq: 'yearly', priority: '0.3' },
  { path: '/cookie-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/refund-cancellation-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/accessibility', changefreq: 'yearly', priority: '0.3' }
];

const leaders = [
  'rohan-bhosale',
  'akshay-navle',
  'yash-bhalekar',
  'dilip-dsouza',
  'sanjay-mahadeo-bobde'
];

// Rich page-to-images mapping for image sitemap
const staticPageImages = {
  '/': [
    { loc: `${BASE_URL}/images/hero-bg.webp`, title: "Cybaem Tech Enterprise IT & Software Solutions" },
    { loc: `${BASE_URL}/images/cybaem-logo.webp`, title: "Cybaem Tech Logo" },
    { loc: `${BASE_URL}/images/world-map.svg`, title: "Global Technology Infrastructure Map" }
  ],
  '/about': [
    { loc: `${BASE_URL}/images/about-code.avif`, title: "Software Engineering & Architecture" },
    { loc: `${BASE_URL}/images/about-datacenter.avif`, title: "Global Cloud Datacenter Infrastructure" },
    { loc: `${BASE_URL}/images/about-mission.avif`, title: "Cybaem Tech Mission & Vision" },
    { loc: `${BASE_URL}/images/team.webp`, title: "Cybaem Tech Core Engineering Team" }
  ],
  '/life-at-cybaemtech': [
    { loc: `${BASE_URL}/images/it-bg.png`, title: "Life at Cybaem Tech Culture & Collaboration" }
  ],
  '/contact': [
    { loc: `${BASE_URL}/images/contact-hero-new.webp`, title: "Contact Cybaem Tech Hinjewadi Pune" },
    { loc: `${BASE_URL}/images/contact-hero.avif`, title: "Consultation & Strategic Support" }
  ],
  '/portfolio': [
    { loc: `${BASE_URL}/images/portfolio-header.webp`, title: "Cybaem Tech Client Case Studies & Portfolio" },
    { loc: `${BASE_URL}/images/CRM-website.webp`, title: "Enterprise CRM Solution" },
    { loc: `${BASE_URL}/images/Ecomm-website.webp`, title: "E-Commerce Experience Platform" },
    { loc: `${BASE_URL}/images/corporate-websites.webp`, title: "Corporate Digital Web Systems" },
    { loc: `${BASE_URL}/images/saas-website.webp`, title: "Scalable B2B SaaS Platform" },
    { loc: `${BASE_URL}/images/education.webp`, title: "EdTech Learning Management Solution" }
  ],
  '/leadership': [
    { loc: `${BASE_URL}/images/leadership-hero.webp`, title: "Cybaem Tech Executive Leadership" }
  ],
  '/cloud-security': [
    { loc: `${BASE_URL}/images/cloud/cloud-header.png`, title: "Cloud & Security Architecture" },
    { loc: `${BASE_URL}/images/cta.png`, title: "Enterprise Cloud Protection" }
  ],
  '/cloud-security/it-infrastructure-services': [
    { loc: `${BASE_URL}/images/it-infra1.png`, title: "Managed IT Infrastructure Services" }
  ],
  '/cloud-security/cloud-solutions': [
    { loc: `${BASE_URL}/images/cloud/cloud-header.png`, title: "Enterprise Cloud Solutions & Migration" }
  ],
  '/cloud-security/cybersecurity': [
    { loc: `${BASE_URL}/images/cybersecurity/proactive-cybersecurity.jpg`, title: "Proactive Cybersecurity Shield & Global Protection" },
    { loc: `${BASE_URL}/images/cybersecurity/security-operations-center.jpg`, title: "24/7 Security Operations Center (SOC)" }
  ],
  '/software-platforms': [
    { loc: `${BASE_URL}/images/Cybaem%20nova.png`, title: "Software & Digital Platforms Engineering" }
  ],
  '/software-platforms/enterprise-software': [
    { loc: `${BASE_URL}/images/enterprise-hero-1.avif`, title: "Enterprise Software Custom Development" },
    { loc: `${BASE_URL}/images/enterprise-hero-2.avif`, title: "Business Workflow Modernization" },
    { loc: `${BASE_URL}/images/Tech-port/Enterprise%20Custom%20Software.png`, title: "Enterprise Platform Architecture" }
  ],
  '/software-platforms/mobile-app-development': [
    { loc: `${BASE_URL}/images/mobile-header.png`, title: "Native iOS, Android & Cross-Platform Mobile Applications" }
  ],
  '/software-platforms/web-systems': [
    { loc: `${BASE_URL}/images/web-systems-hero.webp`, title: "High-Performance Web Systems" },
    { loc: `${BASE_URL}/images/web-hero.avif`, title: "Enterprise Web Architecture" },
    { loc: `${BASE_URL}/images/web-corporate.avif`, title: "Corporate Web Design" },
    { loc: `${BASE_URL}/images/web-ecommerce.avif`, title: "Omnichannel eCommerce Systems" },
    { loc: `${BASE_URL}/images/Tech-port/High-Performance%20Web%20systems.png`, title: "Web Platforms Portfolio" }
  ],
  '/solutions/it-staff-augmentation': [
    { loc: `${BASE_URL}/images/it.webp`, title: "Elite IT Staff Augmentation" },
    { loc: `${BASE_URL}/images/it1.webp`, title: "Dedicated Onsite IT Engineers" },
    { loc: `${BASE_URL}/images/Tech-port/Elite%20IT%20Staff.png`, title: "48-Hour Talent Deployment" }
  ],
  '/digital-growth': [
    { loc: `${BASE_URL}/images/digihero.webp`, title: "Turn Digital Presence into Business Growth" },
    { loc: `${BASE_URL}/images/Tech-port/Digital%20revenue%20and%20growth.png`, title: "Growth & Revenue Architecture" }
  ],
  '/digital-growth/performance-marketing': [
    { loc: `${BASE_URL}/images/digihero.png`, title: "Performance Marketing Google & Meta Ads" }
  ],
  '/digital-growth/seo-aeo-geo': [
    { loc: `${BASE_URL}/images/digihero.webp`, title: "AI-Powered Search Optimization SEO AEO GEO" }
  ],
  '/digital-growth/social-media-management': [
    { loc: `${BASE_URL}/images/cta.png`, title: "Social Media Brand Growth & Engagement" }
  ],
  '/videos/foundation-day-celebration-2026': [
    { loc: `${BASE_URL}/video/thumbnails/foundation-day-celebration-2026.jpg`, title: "Foundation day celebration 2026" }
  ],
  '/videos/it-infrastructure-setup-for-smarter-business-connectivity': [
    { loc: `${BASE_URL}/video/thumbnails/it-infrastructure-setup-for-smarter-business-connectivity.jpg`, title: "IT Infrastructure Setup for Smarter Business Connectivity" }
  ],
  '/in/software-company-in-pune': [
    { loc: `${BASE_URL}/images/location/surat-wala-mark-plzao.webp`, title: "Cybaem Tech Office at Suratwala Mark Plazzo Hinjewadi" },
    { loc: `${BASE_URL}/images/location/rajiv-gandhi-infotech-park.webp`, title: "Rajiv Gandhi Infotech Park Hinjewadi Pune" }
  ]
};

const GOOGLE_SHEETS_API = "https://docs.google.com/spreadsheets/d/1fI_YaQF9y53wjRBKwi_T7SGCTqkz_1gLDvWbA1zp8P4/gviz/tq?tqx=out:json&sheet=Sheet1";

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function extractVideos(content) {
  const videos = [];
  if (!content) return videos;
  
  const iframeRegex = /<iframe[^>]+src=["'](https?:\/\/[^"']+)["'][^>]*><\/iframe>/gi;
  let match;
  while ((match = iframeRegex.exec(content)) !== null) {
    const url = match[1];
    if (url.includes('youtube') || url.includes('vimeo') || url.includes('video')) {
      videos.push({ url, type: 'iframe' });
    }
  }

  const videoRegex = /<video[^>]+src=["'](https?:\/\/[^"']+)["'][^>]*>/gi;
  while ((match = videoRegex.exec(content)) !== null) {
    videos.push({ url: match[1], type: 'video' });
  }

  return videos;
}

function extractImages(content) {
  const images = [];
  if (!content) return images;
  
  const imgRegex = /<img[^>]+src=["'](https?:\/\/[^"']+)["'][^>]*>/gi;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    images.push(match[1]);
  }
  return images;
}

const DECOMMISSIONED_BLOG_SLUGS = new Set([
  "how-pune-clinics-doctors-can-get-more-leads-with-digital-marketing",
  "how-saas-startups-in-pune-can-scale-faster-with-seo-google-ads",
  "how-saas-startups-in-pune-can-scale-faster-with-seo-googleads",
  "the-role-of-content-marketing-in-building-a-strong-business-brand-online",
  "the-role-of-content-marketing-in-building-a-strong-business-brandonline",
  "business-technology-trends-in-2026-smarter-digital-solutions-for-growth",
  "business-technology-trends-in-2026-smarter-digital-solutionsfor-growth",
  "from-data-to-delight-how-ai-personalization-shapes-the-modern-customer-journey",
  "real-estate-co-working-lead-generation-with-meta-and-google-ads-digital-marketing-company-in-pune",
  "the-rise-of-ai-driven-personalization-crafting-experiences-that-convert",
  "how-to-build-a-brand-from-the-ground-up-with-digital-marketing",
  "why-authenticity-beats-algorithms-in-modern-marketing",
  "brand-storytelling-that-actually-resonates-in-a-noisy-world",
]);

async function fetchBlogPosts() {
  try {
    const response = await fetch(GOOGLE_SHEETS_API);
    if (!response.ok) throw new Error("Google Sheets fetch failed");
    const text = await response.text();
    const jsonStr = text.substring(47).slice(0, -2);
    const json = JSON.parse(jsonStr);

    const headers = json.table.cols.map(col => col.label);
    const data = json.table.rows.map(row => {
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = row.c?.[index]?.v ?? "";
      });
      return obj;
    });

    const posts = data
      .filter(row => {
        const isBlog = String(row["Blog"]).trim().toUpperCase() === "YES";
        const slug = String(row["Slug"] || "").trim();
        return isBlog && !DECOMMISSIONED_BLOG_SLUGS.has(slug);
      })
      .map((row, index) => ({
        slug: row["Slug"] || `wordpress-post-${index}`,
        title: row["Title"] || "Untitled",
        image: row["Image URL"] || null,
        content: row["Content"] || ""
      }));
    return posts;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

async function generateSitemaps() {
  console.log(`Starting sitemap generation for ${BASE_URL}...`);
  const blogs = await fetchBlogPosts();
  console.log(`Fetched ${blogs.length} active blog posts.`);
  
  // 1. Primary Comprehensive Sitemap (sitemap.xml)
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  for (const page of pages) {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${page.path}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  }

  for (const leader of leaders) {
    const escapedLeader = escapeXml(leader);
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/leadership/${escapedLeader}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += '  </url>\n';
  }

  for (const blog of blogs) {
    const escapedSlug = escapeXml(blog.slug);
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/blog/${escapedSlug}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += '  </url>\n';
  }

  xml += '</urlset>\n';
  fs.writeFileSync(path.resolve('public/sitemap.xml'), xml, 'utf8');
  console.log('Main Sitemap generated in public/sitemap.xml');

  // 2. Pages-Only Sitemap (public/pagesSitemap.xml)
  let pagesXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  pagesXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  for (const page of pages) {
    pagesXml += '  <url>\n';
    pagesXml += `    <loc>${BASE_URL}${page.path}</loc>\n`;
    pagesXml += `    <lastmod>${lastmod}</lastmod>\n`;
    pagesXml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    pagesXml += `    <priority>${page.priority}</priority>\n`;
    pagesXml += '  </url>\n';
  }
  for (const leader of leaders) {
    const escapedLeader = escapeXml(leader);
    pagesXml += '  <url>\n';
    pagesXml += `    <loc>${BASE_URL}/leadership/${escapedLeader}</loc>\n`;
    pagesXml += `    <lastmod>${lastmod}</lastmod>\n`;
    pagesXml += `    <changefreq>monthly</changefreq>\n`;
    pagesXml += `    <priority>0.6</priority>\n`;
    pagesXml += '  </url>\n';
  }
  pagesXml += '</urlset>\n';
  fs.writeFileSync(path.resolve('public/pagesSitemap.xml'), pagesXml, 'utf8');
  console.log('Pages Sitemap generated in public/pagesSitemap.xml');

  // 3. Blog-Only Sitemap (public/blogSitemap.xml)
  let blogXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  blogXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  blogXml += '  <url>\n';
  blogXml += `    <loc>${BASE_URL}/blog</loc>\n`;
  blogXml += `    <lastmod>${lastmod}</lastmod>\n`;
  blogXml += `    <changefreq>weekly</changefreq>\n`;
  blogXml += `    <priority>0.8</priority>\n`;
  blogXml += '  </url>\n';
  for (const blog of blogs) {
    const escapedSlug = escapeXml(blog.slug);
    blogXml += '  <url>\n';
    blogXml += `    <loc>${BASE_URL}/blog/${escapedSlug}</loc>\n`;
    blogXml += `    <lastmod>${lastmod}</lastmod>\n`;
    blogXml += `    <changefreq>weekly</changefreq>\n`;
    blogXml += `    <priority>0.6</priority>\n`;
    blogXml += '  </url>\n';
  }
  blogXml += '</urlset>\n';
  fs.writeFileSync(path.resolve('public/blogSitemap.xml'), blogXml, 'utf8');
  console.log('Blog Sitemap generated in public/blogSitemap.xml');

  // 4. Comprehensive Image Sitemap (public/imagesSitemap.xml & public/sitemap-images.xml)
  let imgXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  imgXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  imgXml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n\n';

  // 4a. Static pages and their images
  for (const [pagePath, imgs] of Object.entries(staticPageImages)) {
    imgXml += '  <url>\n';
    imgXml += `    <loc>${BASE_URL}${pagePath}</loc>\n`;
    for (const img of imgs) {
      imgXml += '    <image:image>\n';
      imgXml += `      <image:loc>${escapeXml(img.loc)}</image:loc>\n`;
      if (img.title) {
        imgXml += `      <image:title>${escapeXml(img.title)}</image:title>\n`;
      }
      imgXml += '    </image:image>\n';
    }
    imgXml += '  </url>\n\n';
  }

  // 4b. Blog posts and their images
  for (const blog of blogs) {
    let images = extractImages(blog.content);
    if (blog.image) images.unshift(blog.image);
    images = [...new Set(images)];
    
    if (images.length > 0) {
      imgXml += '  <url>\n';
      imgXml += `    <loc>${BASE_URL}/blog/${escapeXml(blog.slug)}</loc>\n`;
      for (const imgUrl of images) {
        if (!imgUrl.startsWith('http')) continue;
        imgXml += `    <image:image>\n`;
        imgXml += `      <image:loc>${escapeXml(imgUrl)}</image:loc>\n`;
        imgXml += `      <image:title>${escapeXml(blog.title)}</image:title>\n`;
        imgXml += `    </image:image>\n`;
      }
      imgXml += '  </url>\n\n';
    }
  }
  imgXml += '</urlset>\n';

  fs.writeFileSync(path.resolve('public/imagesSitemap.xml'), imgXml, 'utf8');
  fs.writeFileSync(path.resolve('public/sitemap-images.xml'), imgXml, 'utf8');
  console.log('Image Sitemaps generated in public/imagesSitemap.xml & public/sitemap-images.xml');

  // 5. Video Sitemap (public/sitemap-videos.xml) - Watch Pages
  const watchPageVideos = [
    {
      loc: `${BASE_URL}/videos/foundation-day-celebration-2026`,
      thumbnailLoc: `${BASE_URL}/video/thumbnails/foundation-day-celebration-2026.jpg`,
      title: "Foundation Day Celebration 2026",
      description: "Here are the highlights from Cybaem Tech's 6th Foundation Day Celebration! From the grand cake cutting and team speeches to gift exchanges and memorable group moments, see how the Cybaem Tech family celebrated six years of innovation, growth, and going Beyond Limits.",
      contentLoc: "https://cybaemtech.com/video/video.mp4",
      playerLoc: `${BASE_URL}/videos/foundation-day-celebration-2026`,
      duration: 40,
      publicationDate: "2026-11-06",
    },
    {
      loc: `${BASE_URL}/videos/it-infrastructure-setup-for-smarter-business-connectivity`,
      thumbnailLoc: `${BASE_URL}/video/thumbnails/it-infrastructure-setup-for-smarter-business-connectivity.jpg`,
      title: "IT Infrastructure Setup for Smarter Business Connectivity",
      description: "We build a reliable, high-performance IT foundation designed for seamless business operations and growth. From robust firewall security and high-speed networking to optimized servers, VLANs, enterprise Wi-Fi, and automated backup solutions, we cover everything needed to keep your organization connected and secure.",
      contentLoc: "https://cybaemtech.com/video/it-infrastructure-setup.mp4",
      playerLoc: `${BASE_URL}/videos/it-infrastructure-setup-for-smarter-business-connectivity`,
      duration: 47,
      publicationDate: "2026-11-06",
    }
  ];

  let vidXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  vidXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n';
  
  for (const v of watchPageVideos) {
    vidXml += '  <url>\n';
    vidXml += `    <loc>${v.loc}</loc>\n`;
    vidXml += `    <video:video>\n`;
    vidXml += `      <video:thumbnail_loc>${escapeXml(v.thumbnailLoc)}</video:thumbnail_loc>\n`;
    vidXml += `      <video:title>${escapeXml(v.title)}</video:title>\n`;
    vidXml += `      <video:description>${escapeXml(v.description)}</video:description>\n`;
    vidXml += `      <video:content_loc>${escapeXml(v.contentLoc)}</video:content_loc>\n`;
    vidXml += `      <video:player_loc>${escapeXml(v.playerLoc)}</video:player_loc>\n`;
    if (v.duration) {
      vidXml += `      <video:duration>${v.duration}</video:duration>\n`;
    }
    vidXml += `      <video:publication_date>${v.publicationDate}</video:publication_date>\n`;
    vidXml += `      <video:family_friendly>yes</video:family_friendly>\n`;
    vidXml += `    </video:video>\n`;
    vidXml += '  </url>\n';
  }

  for (const blog of blogs) {
    const videos = extractVideos(blog.content);
    if (videos.length > 0) {
      vidXml += '  <url>\n';
      vidXml += `    <loc>${BASE_URL}/blog/${escapeXml(blog.slug)}</loc>\n`;
      for (const vid of videos) {
        vidXml += `    <video:video>\n`;
        vidXml += `      <video:thumbnail_loc>${blog.image ? escapeXml(blog.image) : `${BASE_URL}/images/cybaem-logo.webp`}</video:thumbnail_loc>\n`;
        vidXml += `      <video:title>${escapeXml(blog.title)} Video</video:title>\n`;
        vidXml += `      <video:description>Video content from ${escapeXml(blog.title)}</video:description>\n`;
        if (vid.type === 'iframe') {
            vidXml += `      <video:player_loc>${escapeXml(vid.url)}</video:player_loc>\n`;
        } else {
            vidXml += `      <video:content_loc>${escapeXml(vid.url)}</video:content_loc>\n`;
        }
        vidXml += `    </video:video>\n`;
      }
      vidXml += '  </url>\n';
    }
  }
  vidXml += '</urlset>\n';
  fs.writeFileSync(path.resolve('public/sitemap-videos.xml'), vidXml, 'utf8');
  console.log('Video Sitemap generated in public/sitemap-videos.xml');
}

generateSitemaps().catch(console.error);
