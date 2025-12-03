import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoxusDynamics - Robotics & AI Solutions | Kottayam, Kerala",
  description: "NoxusDynamics designs intelligent machines for agriculture, accessibility, and human augmentation. Leading robotics innovation in Kottayam, Saintgits. Founded by Abhinav Varghese Abraham.",
  keywords: [
    "NoxusDynamics",
    "Noxus Dynamics",
    "Noxus",
    "robotics",
    "robotics Kottayam",
    "robotics Kerala",
    "Noxus Dynamics Kottayam",
    "Noxus Dynamics Saintgits",
    "Saintgits robotics",
    "Abhinav Varghese Abraham",
    "Noxus Abhinav",
    "agricultural robotics",
    "accessibility technology",
    "human augmentation",
    "AI solutions",
    "intelligent machines",
    "robotics company India",
  ],
  authors: [{ name: "Abhinav Varghese Abraham" }, { name: "NoxusDynamics" }],
  creator: "Abhinav Varghese Abraham",
  publisher: "NoxusDynamics",
  metadataBase: new URL("https://www.noxusdynamics.tech"),
  alternates: {
    canonical: "https://www.noxusdynamics.tech",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.noxusdynamics.tech",
    title: "NoxusDynamics - Robotics & AI Solutions",
    description: "NoxusDynamics designs intelligent machines for agriculture, accessibility, and human augmentation. Leading robotics innovation in Kottayam, Kerala.",
    siteName: "NoxusDynamics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NoxusDynamics - Robotics & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NoxusDynamics - Robotics & AI Solutions",
    description: "Designing intelligent machines for agriculture, accessibility, and human augmentation.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "xlLrjre5hv0XfhTGBxv5oRzqxSMntik9jk7T7QWqbEs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NoxusDynamics',
    alternateName: ['Noxus Dynamics', 'Noxus'],
    url: 'https://www.noxusdynamics.tech',
    logo: 'https://www.noxusdynamics.tech/logo.png',
    description: 'NoxusDynamics designs intelligent machines for agriculture, accessibility, and human augmentation.',
    founder: {
      '@type': 'Person',
      name: 'Abhinav Varghese Abraham',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kottayam',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    sameAs: [
      // Add your social media links here
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'noxusdynamics@gmail.com',
      contactType: 'Customer Service',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
