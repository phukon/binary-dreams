import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaroPlay from "@/app/caroPlay";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <CaroPlay/>
      <Footer/>
    </div>
  );
}
