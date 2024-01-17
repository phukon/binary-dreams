"use client";
import Header from "@/components/Header";
import CaroPlay from "./CaroPlay";
import Footer from "@/components/Footer";
import { CanvasProvider } from "@/context/CanvasContext";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <CanvasProvider>
        <Header />
        <CaroPlay />
        <Footer />
      </CanvasProvider>
    </div>
  );
}
