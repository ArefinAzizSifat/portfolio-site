import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arefin Aziz Sifat | AI Engineer & Systems Specialist",
  description:
    "Portfolio of Arefin Aziz Sifat - AI Engineering student and research assistant focused on autonomous systems, machine learning, and cloud infrastructure.",
  keywords: [
    "AI Engineering",
    "Machine Learning",
    "Deep Learning",
    "Cloud Computing",
    "System Engineering",
  ],
  authors: [{ name: "Arefin Aziz Sifat" }],
  openGraph: {
    title: "Arefin Aziz Sifat | AI Engineer & Systems Specialist",
    description:
      "AI Engineering student and research assistant focused on autonomous systems and ML pipelines",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
