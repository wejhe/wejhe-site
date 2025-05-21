import type { Metadata } from "next";
import "./styles/global.css";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wejhe – Software Developer",
  description:
    "Crafting reliable, intuitive, and seamless digital experiences for everyone with the power of cutting-edge technologies and human-centric design",
  icons: {
    icon: "/favicon.svg",
  },
  authors: [
    { name: "Wahyu Wijiyanto", url: "https://www.linkedin.com/in/wejhe/" },
  ],
  keywords: [
    "wahyu wijiyanto",
    "wejhe",
    "software developer",
    "web developer",
    "programmer",
    "software development",
    "web development",
    "software engineer",
    "software engineering",
    "web design",
    "web designer",
    "information technology",
    "technology",
    "programming",
    "coding",
    "computer science",
    "digital product",
    "digital product design",
    "digital product development",
    "digital solution",
    "digital experience",
    "IT project",
    "IT development",
    "web application",
    "web app",
    "application development",
    "app development",
    "application design",
    "system design",
    "system architecture",
    "ui design",
    "ux design",
    "user experience design",
    "user interface design",
    "user experience",
    "user interface",
    "ui/ux design",
    "ui/ux",
    "ui/ux designer",
    "devops",
    "cloud computing",
    "ci/cd",
    "continuous integration",
    "continuous deployment",
    "continuous delivery",
    "mobile development",
    "mobile app development",
    "mobile application development",
    "mobile application",
    "mobile app",
    "mobile design",
    "mobile app developer",
    "mobile developer",
  ],
  openGraph: {
    type: "website",
    url: "https://wejhe.co.id/",
    title: "Wejhe – Software Developer",
    description:
      "Crafting reliable, intuitive, and seamless digital experiences for everyone with the power of cutting-edge technologies and human-centric design",
    siteName: "Wejhe – Software Developer",
    images: [{ url: "https://wejhe.co.id/opengraph-image.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="flex flex-col min-h-[100dvh]">
        <Navbar />
        <div className="py-y-padding">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
