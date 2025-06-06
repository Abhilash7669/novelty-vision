import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import MainLayout from "@/components/layout/main-layout";

const neueMontreal = localFont({
  src: [
    {
      path: "../../public/fonts/neue-montreal-medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/neue-montreal-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Novelty Visions",
  description: "Novelty Visions version-2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${neueMontreal.variable} antialiased`}
      >
        <MainLayout className="limit-width mx-auto">{children}</MainLayout>
      </body>
    </html>
  );
}
