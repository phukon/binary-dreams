import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";
import {
  localTektur,
  localOrbitron,
  localPixel1,
  localhandwritten,
  localInter,
  localBerkeley,
} from "@/fonts/fonts";
import { Toaster } from "react-hot-toast";
import AudioPlayer from "@/components/AudioPlayer";

export const metadata: Metadata = {
  title: "Binary Dreams",
  description: "The coolest e/acc art on the internet.",
  openGraph: {
    title: "Binary Dreams",
    description: "The coolest e/acc art on the internet.",
    url: `https://bndr.rkph.me`,
    images: [
      {
        url: "https://bndr.rkph.me/api/og?title=This+is+Binary+Dreams&image=/pics/collage.jpg",
        alt: "Binary Dreams",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${localTektur.variable} ${localBerkeley.variable} ${localOrbitron.variable} ${localPixel1.variable} ${localInter.variable}  ${localhandwritten.variable}`}
      ><Script async src="https://analytics.rkph.me/script.js" data-website-id="0f723b44-327e-4da3-84b8-baca6e74f536"/>
        <AudioPlayer />
        <Toaster />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
