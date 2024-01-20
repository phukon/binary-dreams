"use client";

import Footer from "@/components/Footer";
import { SlideProvider } from "@/context/SlideContext";
import CaroPlay from "@/app/caroPlay";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <SlideProvider>
      <Header isTitle={true} />
        <CaroPlay/>
        <Footer />
      </SlideProvider>
    </div>
  );
}
