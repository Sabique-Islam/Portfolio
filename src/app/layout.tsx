import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/components/theme-provider"

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sabique Islam | Portfolio",
  description: "Computer Science Engineering student passionate about building innovative solutions. Explore my projects in machine learning, web development, and software engineering.",
  keywords: ["Sabique Islam", "Portfolio", "Computer Science", "Machine Learning", "Web Development", "Software Engineer"],
  authors: [{ name: "Sabique Islam" }],
  creator: "Sabique Islam",
  publisher: "Sabique Islam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sabique.page",
    siteName: "Sabique | Portfolio",
    title: "Sabique | Portfolio",
    description: "Computer Science Engineering student passionate about building innovative solutions. Explore my projects in machine learning, web development, and software engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabique | Portfolio",
    description: "Computer Science Engineering student passionate about building innovative solutions.",
    creator: "@nopeJS",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "mIo3P0IZTuqEjLnewHE-0WMcJrPieDymtHbCfXZnflw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${firaCode.variable} antialiased font-mono`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <ReactLenis root>{children}</ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}