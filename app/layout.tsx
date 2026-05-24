import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/component/Footer";
import Header from "@/component/navBar";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rocket Ready - The Ultimate Active Sitting Solution",
  description: "Experience the future of active sitting with Rocket Ready's innovative motion technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("", "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Analytics />
        <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
