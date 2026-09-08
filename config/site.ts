export const siteConfig = {
  name: "Ali Kayar",
  role: "Full-Stack Software Engineer",
  url: "https://alikayar.com",

  description:
    "Full-stack software engineer building web applications, websites, data systems, workflow automation, and industrial software.",

  openGraphDescription:
    "Full-stack web applications, websites, data systems, workflow automation, and industrial software.",

  location: "Türkiye",
  locationFlag: "/icons/turkey.svg",
  availability: "Available for international B2B contracts",

  socials: {
    linkedin: "https://www.linkedin.com/in/ali-kayar-b59420224/",
    github: "https://github.com/alikayar",
  },
} as const;

export const socialPreview = {
  assetPath: "/images/og-default.jpg",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.role}`,
} as const;

export const getOpenGraphMetadata = (imageUrl: string, url?: string) => ({
  type: "website" as const,
  locale: "en_US" as const,
  ...(url ? { url } : {}),
  siteName: siteConfig.name,
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.openGraphDescription,
  images: [
    {
      url: imageUrl,
      width: socialPreview.width,
      height: socialPreview.height,
      alt: socialPreview.alt,
    },
  ],
});
