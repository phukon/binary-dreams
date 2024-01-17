import Header from "@/components/Header";
import CaroPlay from "./CaroPlay";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <CaroPlay />
      <Footer/>
    </div>
  );
}
