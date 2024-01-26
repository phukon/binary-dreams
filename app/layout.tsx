import type { Metadata } from "next";
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
import { PHProvider } from "@/context/PostHog";
import dynamic from "next/dynamic";

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

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
      <PHProvider>
        <body
          className={`${localTektur.variable} ${localBerkeley.variable} ${localOrbitron.variable} ${localPixel1.variable} ${localInter.variable}  ${localhandwritten.variable}`}
        >
          {" "}
          <PostHogPageView />
          <AudioPlayer />
          <Toaster />
          {children}
        </body>
      </PHProvider>
    </html>
  );
}
