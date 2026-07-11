import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import ScrollReveal from "@/components/ScrollReveal";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veritycleaning.co"),
  title: "Premium Cleaning Services in Shelby County, AL | Verity Cleaning",
  description:
    "Licensed, bonded, and insured home & office cleaning service serving Pelham, Alabaster, Helena, & Hoover. Meticulous checksheets, background-checked staff. Call or text (205) 888-0199.",
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
  icons: { icon: "/clean-home.png" },
  openGraph: {
    title: "Premium Cleaning Services in Shelby County, AL | Verity Cleaning",
    description:
      "Licensed, bonded, and insured cleaning service with a 100% satisfaction guarantee. Serving Pelham, Alabaster, Hoover, and Helena. Call or text (205) 888-0199.",
    type: "website",
    url: "https://veritycleaning.co",
    siteName: "Verity Cleaning, LLC",
    locale: "en_US",
    images: [{ url: "/clean-home.png", width: 800, height: 600, alt: "Verity Cleaning Pristine Home" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Cleaning Services in Shelby County, AL | Verity Cleaning",
    description:
      "Licensed, bonded, and insured cleaning service with a 100% satisfaction guarantee. Call or text (205) 888-0199.",
    images: ["/clean-home.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${inter.variable}`}>
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
        <TopBar />
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
