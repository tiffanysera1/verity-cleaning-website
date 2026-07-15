import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import ScrollReveal from "@/components/ScrollReveal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veritycleaning.co"),
  title: "Verity Cleaning — A Clean Home, More Time Back",
  description:
    "Licensed, bonded, and insured home & office cleaning in Shelby County, AL. Personalized quotes, background-checked cleaners, and a modern, effortless experience. Call or text (205) 888-0199.",
  alternates: { canonical: "/" },
  keywords: [
    "cleaning service Shelby County",
    "home cleaning Pelham AL",
    "house cleaning Alabaster AL",
    "maid service Hoover AL",
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
      "Licensed, bonded, and insured cleaning with a 100% satisfaction guarantee. Serving Pelham, Alabaster, Hoover, and Helena. Call or text (205) 888-0199.",
    type: "website",
    url: "https://veritycleaning.co",
    siteName: "Verity Cleaning, LLC",
    locale: "en_US",
    images: [{ url: "/clean-home.png", width: 800, height: 600, alt: "A tidy, sunlit home" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verity Cleaning — A Clean Home, More Time Back",
    description:
      "Licensed, bonded, and insured cleaning with a 100% satisfaction guarantee. Call or text (205) 888-0199.",
    images: ["/clean-home.png"],
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
      </body>
    </html>
  );
}
