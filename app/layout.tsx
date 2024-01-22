import type { Metadata } from "next";
import "./globals.css";
import { localTektur, localOrbitron, localPixel1, localPixel2, localhandwritten } from "@/fonts/fonts";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Binary Dreams",
  description: "The coolest e/acc art on the internet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${localTektur.variable} ${localOrbitron.variable} ${localPixel1.variable} ${localPixel2.variable} ${localhandwritten.variable}`}
      >
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
