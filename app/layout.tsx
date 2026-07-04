import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CommandMenu } from "@/components/command/command-menu";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import "./globals.css";



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gwer Donatus — Backend Systems Engineer",
    template: "%s | Gwer Donatus",
  },
  description:
    "Backend Systems Engineer building AI-powered software that scales. I design and build backend infrastructure, SaaS platforms, distributed systems, AI products, payment systems, and developer tools.",
  keywords: [
    "Backend Engineer",
    "Systems Engineer",
    "AI",
    "Distributed Systems",
    "SaaS",
    "Python",
    "Django",
    "Next.js",
    "Gwer Donatus",
  ],
  authors: [{ name: "Gwer Donatus" }],
  creator: "Gwer Donatus",
  metadataBase: new URL("https://gwerdonatus.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gwerdonatus.dev",
    title: "Gwer Donatus — Backend Systems Engineer",
    description:
      "Backend Systems Engineer building AI-powered software that scales.",
    siteName: "Gwer Donatus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gwer Donatus — Backend Systems Engineer",
    description:
      "Backend Systems Engineer building AI-powered software that scales.",
    creator: "@gwerdonatus",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ScrollProgress />
          <div className="relative">
            <Navbar />
            <main className="relative">{children}</main>
            <Footer />
          </div>
          <CommandMenu />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
