import type { Metadata } from "next";
import "./global.css";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/navbar/navbar";

export const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wejhe – Software Developer",
  description: "Professional Software Developer based in Indonesia",
  icons: {
    icon: "/favicon.svg",
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
