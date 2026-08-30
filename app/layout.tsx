import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pedro Belentani — Trust & Safety · AI Evaluation · UX Research",
  description:
    "Portfolio y blog de Pedro Belentani. Analista de comportamiento humano, evaluador de IA, arquitecto de sistemas de confianza. Barcelona, España.",
  keywords: [
    "Pedro Belentani",
    "Trust & Safety",
    "AI Evaluation",
    "UX Research",
    "Behavioral Analysis",
    "Threat Intelligence",
    "Barcelona",
  ],
  openGraph: {
    title: "Pedro Belentani — Trust & Safety · AI Evaluation",
    description:
      "Analista de comportamiento humano. Arquitecto de sistemas de confianza.",
    type: "website",
    locale: "es_ES",
    siteName: "Pedro Belentani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Belentani — Trust & Safety · AI Evaluation",
    description:
      "Analista de comportamiento humano. Arquitecto de sistemas de confianza.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-bg text-neutral-200">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
