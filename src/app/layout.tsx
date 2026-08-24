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
  title: "Redemption | 2 — 4 SEPTEMBER 2026",
  description: '"In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God\'s grace." — Ephesians 1:7',
  openGraph: {
    title: "Redemption | 2 — 4 SEPTEMBER 2026",
    description: '"In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God\'s grace." — Ephesians 1:7',
    siteName: "Reflect Presents",
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
