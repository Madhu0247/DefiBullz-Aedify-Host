import "../styles/globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Defi Bullz - AI Trading Journal",
  description: "Transform your trading with AI-powered analytics. Track trades, analyze performance, and make data-driven decisions with our advanced trading journal platform.",
  keywords: "trading journal, AI trading, cryptocurrency trading, trade analytics, portfolio tracking",
  openGraph: {
    title: "Defi Bullz - AI Trading Journal",
    description: "Transform your trading with AI-powered analytics. Track trades, analyze performance, and make data-driven decisions.",
    type: "website",
    url: "https://defibullz.com",
    siteName: "Defi Bullz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Defi Bullz - AI Trading Journal",
    description: "Transform your trading with AI-powered analytics. Track trades, analyze performance, and make data-driven decisions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}