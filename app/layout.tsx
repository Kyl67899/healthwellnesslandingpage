import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/component/Footer";
import Header from "@/component/navBar";
import { Analytics } from "@vercel/analytics/next"

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
      className=""
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
