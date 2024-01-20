import type { Metadata } from "next";
import "./globals.css";
import { orbitron, inter, pixelify_sans, tektur } from "@/fonts";
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
        className={`${orbitron.variable} ${inter.variable} ${pixelify_sans.variable} ${tektur.variable}`}
      >
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
