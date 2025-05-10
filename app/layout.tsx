import type { Metadata } from "next";
import "./global.css";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wejhe – Software Developer",
  description:
    "Crafting reliable, intuitive, and seamless web experiences for everyone with the power of cutting-edge technologies and human-centric design",
  icons: {
    icon: "/favicon.svg",
  },
  authors: [
    { name: "Wahyu Wijiyanto", url: "https://www.linkedin.com/in/wejhe/" },
  ],
  keywords: ["react", "server components"],
  openGraph: {
    type: "website",
    url: "https://wejhe.vercel.app/",
    title: "Wejhe – Software Developer",
    description:
      "Crafting reliable, intuitive, and seamless web experiences for everyone with the power of cutting-edge technologies and human-centric design",
    siteName: "Wejhe – Software Developer",
    images: [{ url: "https://wejhe.vercel.com/opengraph-image.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
