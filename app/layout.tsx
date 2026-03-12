import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmileCare Dental Clinic | Best Dentist in Bangalore – Indiranagar",
  description:
    "SmileCare Dental Clinic in Indiranagar, Bangalore offers comprehensive dental care: teeth cleaning, whitening, implants, braces & more. 10+ years experience. Book appointment today!",
  keywords:
    "dental clinic bangalore, dentist indiranagar, teeth whitening bangalore, dental implants bangalore, best dentist bangalore, orthodontics bangalore, root canal bangalore",
  authors: [{ name: "SmileCare Dental Clinic" }],
  metadataBase: new URL("https://smilecare-dental.vercel.app"),
  openGraph: {
    title: "SmileCare Dental Clinic | Best Dentist in Bangalore",
    description:
      "Professional dental care with modern technology and experienced dentists. Visit us in Indiranagar, Bangalore. Book your appointment today!",
    url: "https://smilecare-dental.vercel.app",
    siteName: "SmileCare Dental Clinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SmileCare Dental Clinic Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileCare Dental Clinic | Best Dentist in Bangalore",
    description:
      "Professional dental care with modern technology. Book appointment at Indiranagar, Bangalore.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
