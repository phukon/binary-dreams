"use client";
import Header from "@/components/Header";
import CaroPlay from "./CaroPlay";
import Footer from "@/components/Footer";
import { SlideProvider } from "@/context/SlideContext";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <SlideProvider>
        <Header />
        <CaroPlay />
        <Footer />
      </SlideProvider>
    </div>
  );
}
