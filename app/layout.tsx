import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react'
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
      >
        <AudioPlayer />
        <Toaster />
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
