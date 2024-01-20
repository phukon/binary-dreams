import { Inter, Orbitron, Tektur, Pixelify_Sans } from "next/font/google";

export const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const pixelify_sans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify_sans",
});

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const tektur = Tektur({ subsets: ["latin"], variable: "--font-tektur" });
