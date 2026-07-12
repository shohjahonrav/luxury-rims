import Hero from "./components/Hero";
import ChooseYourRims from "./components/ChooseYourRims";
import Testimonials from "./components/Testimonials";
import Benefits from "./components/Benefits";
import Steps from "./components/4Steps";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import News from "./components/News";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://luxury-rims.vercel.app"), // Replace with your domain

  title: {
    default: "Luxury Rims | Premium Forged Wheels & Performance Alloy Rims",
    template: "%s | Luxury Rims",
  },

  description:
    "Discover premium forged wheels and luxury alloy rims designed for performance, elegance, and precision. Shop exclusive rims for BMW, Mercedes-Benz, Audi, Porsche, Tesla, Lexus, and more.",

  keywords: [
    "Luxury Rims",
    "Forged Wheels",
    "Alloy Wheels",
    "Premium Rims",
    "Performance Wheels",
    "Custom Wheels",
    "Luxury Car Wheels",
    "BMW Wheels",
    "Mercedes Wheels",
    "Audi Wheels",
    "Porsche Wheels",
    "Tesla Wheels",
    "Lexus Wheels",
    "Wheel Store",
    "High Performance Rims",
    "Custom Alloy Wheels",
    "Concave Wheels",
    "Monoblock Wheels",
    "Luxury Automotive",
    "Sports Car Wheels",
  ],

  authors: [
    {
      name: "Luxury Rims",
      url: "https://luxury-rims.vercel.app",
    },
  ],

  creator: "Luxury Rims",
  publisher: "Luxury Rims",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  category: "Automotive",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luxury-rims.vercel.app",
    siteName: "Luxury Rims",
    title: "Luxury Rims | Premium Forged Wheels for Luxury & Sports Cars",
    description:
      "Upgrade your vehicle with premium forged wheels crafted for luxury, style, and performance. Exclusive collections for the world's finest automobiles.",
    images: [
      {
        url: "/hero/hero1.avif",
        width: 1200,
        height: 630,
        alt: "Luxury forged wheels displayed in a premium automotive setting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Rims | Premium Forged Wheels",
    description:
      "Discover exclusive forged wheels engineered for luxury, performance, and timeless design.",
    creator: "@LuxuryRims", // Replace if you have X/Twitter
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

const Landing = () => {
  return (
    <div>
      <Hero />
      <ChooseYourRims />
      <Benefits />
      <Testimonials />
      <Steps />
      <section id="service">
        <Services />
      </section>
      <FAQ />
      <News />
    </div>
  );
};

export default Landing;
