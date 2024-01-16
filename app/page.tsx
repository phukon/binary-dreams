import Header from "@/components/Header";
import CaroPlay from "./CaroPlay";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <CaroPlay />
    </div>
  );
}
