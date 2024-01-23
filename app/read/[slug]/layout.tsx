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
      <Header isTitle={true} />
      <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
        {" "}
        <SlideProvider>{children}</SlideProvider>;
      </div>
    </div>
  );
}
