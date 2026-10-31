import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import ChatWidget from "@/components/ChatWidget";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import ScrollReveal from "@/components/ScrollReveal";

/* Self-hosted copies of the Google Fonts latin variable files (app/fonts/).
   next/font/google downloads them during every build, and that download
   intermittently failed on Vercel and locally ("next/font/google queries have
   exactly one entry"), failing the deploy. Same files, same weight ranges. */
const playfair = localFont({
  src: [
    { path: "./fonts/playfair-display.woff2", weight: "600 700", style: "normal" },
    { path: "./fonts/playfair-display-italic.woff2", weight: "600 700", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const inter = localFont({
  src: "./fonts/inter.woff2",
  weight: "400 700",
  variable: "--font-inter",
  display: "swap",
});

const caveat = localFont({
  src: "./fonts/caveat.woff2",
  weight: "500 600",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.veritycleaning.co"),
  title: "Pelham, Hoover & Vestavia Hills House Cleaning | Verity",
  description:
    "House cleaning across Birmingham's over-the-mountain suburbs: Hoover, Vestavia Hills, Mountain Brook, Homewood and Pelham. Licensed, bonded & insured.",
  alternates: { canonical: "/" },
  keywords: [
    "cleaning service Shelby County",
    "home cleaning Pelham AL",
    "house cleaning Alabaster AL",
    "house cleaning Hoover AL",
    "maid service Hoover AL",
    "house cleaning Vestavia Hills AL",
    "deep cleaning Helena AL",
    "office cleaning Chelsea AL",
    "licensed insured cleaning company",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Verity Cleaning — A Clean Home, More Time Back",
    description:
      "Licensed, bonded, and insured cleaning with a 100% satisfaction guarantee. Serving Hoover, Vestavia Hills, Mountain Brook, Homewood and Pelham. Call or text (205) 946-0304.",
    type: "website",
    url: "https://www.veritycleaning.co",
    siteName: "Verity Cleaning LLC",
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 800, height: 600, alt: "A tidy, sunlit home" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verity Cleaning — A Clean Home, More Time Back",
    description:
      "Licensed, bonded, and insured cleaning with a 100% satisfaction guarantee. Call or text (205) 946-0304.",
    images: ["/og-image.jpg"],
  },
  /* Bing Webmaster Tools site ownership. Not a secret — it exists to be read
     back off the public page. Leave it in place: removing it after
     verification can un-verify the site on Bing's next re-check, which would
     silently stop sitemap processing. */
  verification: {
    other: { "msvalidate.01": "0EDC619DB136F64B4425E055E69ECF21" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0B2A4A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable} ${caveat.variable}`}>
      <body>
        {/* Mark JS active before paint so the reveal animation only hides
            content when it can actually un-hide it (no-JS users see everything). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <MobileBar />
        <ScrollReveal />
        <Analytics />
        <GoogleAnalytics />
        <ChatWidget />
      </body>
    </html>
  );
}
