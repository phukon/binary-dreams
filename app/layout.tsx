import type { Metadata } from "next";
import "./globals.css";
import { localTektur, localOrbitron, localPixel1, localPixel2, localhandwritten, localInter } from "@/fonts/fonts";
import { Toaster } from "react-hot-toast";

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
        className={`${localTektur.variable} ${localOrbitron.variable} ${localPixel1.variable} ${localInter.variable}  ${localPixel2.variable} ${localhandwritten.variable}`}
      >
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
