"use client";
import Header from "@/components/Header";
import { SlideProvider } from "@/context/SlideContext";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header isTitle={true}/>
      <SlideProvider>{children}</SlideProvider>;
    </div>
  );
}
