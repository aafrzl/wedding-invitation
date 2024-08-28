import type { Metadata } from "next";
import { Niconne, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

const niconne = Niconne({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-niconne",
});

export const metadata: Metadata = {
  title: "Wedding of Pipit & Bubung",
  description:
    "Kepada Yth. Bapak/Ibu/Saudara/i kami undang untuk hadir dalam acara pernikahan kami.",
  openGraph: {
    title: "Wedding of Pipit & Bubung",
    description:
      "Kepada Yth. Bapak/Ibu/Saudara/i kami undang untuk hadir dalam acara pernikahan kami.",
    images: [
      {
        url: `${process.env.BASE_URL}/feature-images.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding of Pipit & Bubung",
    description:
      "Kepada Yth. Bapak/Ibu/Saudara/i kami undang untuk hadir dalam acara pernikahan kami.",
    creator: "@aafrzl",
    images: [
      {
        url: `${process.env.BASE_URL}/feature-images.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", poppins.variable, niconne.variable)}>
        {children}
      </body>
    </html>
  );
}
