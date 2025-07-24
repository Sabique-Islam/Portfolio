const siteURL = "https://sabique.vercel.app";
const siteName = "Sabique | Portfolio";
const siteDescription = "A CSE Student based in Bangalore, Karnataka.";
const ogImage = `${siteURL}/favicon.ico`;

export const SEO_CONFIG = {
  siteURL,
  siteName,
  siteDescription,
  ogImage,
  metadata: {
    title: siteName,
    description: siteDescription,
    keywords: [
      "Sabique",
      "Portfolio",
      "Web Developer",
      "NLP in C",
      "GitHub Actions",
      "Automation",
      "Next.js Developer",
      "React Developer",
      "Open Source Contributor",
      "Software Engineer",
      "Student",
    ],
    authors: [{ name: "Sabique", url: siteURL }],
    openGraph: {
      title: siteName,
      description: siteDescription,
      url: siteURL,
      siteName: siteName,
      images: [
        {
          url: ogImage,
          width: 512,
          height: 512,
          alt: "Portfolio",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteName,
      description: siteDescription,
      images: [ogImage],
      creator: "@Sabique_",
    },
    alternates: {
      canonical: siteURL,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/favicon.ico",
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sabique",
    url: siteURL,
    image: `${siteURL}/favicon.ico`,
    sameAs: [
      "https://www.linkedin.com/in/sabique-islam/",
      "https://github.com/Sabique-Islam",
      "https://x.com/Sabique_",
      "https://www.instagram.com/bunsamosaa/",
    ],
    description: siteDescription,
  },
};