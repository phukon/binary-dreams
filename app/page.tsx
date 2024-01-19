"use client";

import Footer from "@/components/Footer";
import { SlideProvider } from "@/context/SlideContext";
import CaroPlay from "@/app/caroPlay";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <SlideProvider>
        <CaroPlay/>
        <Footer />
      </SlideProvider>
    </div>
  );
}
