"use client";
import { SlideProvider } from "@/context/SlideContext";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SlideProvider>{children}</SlideProvider>;
    </div>
  );
}
