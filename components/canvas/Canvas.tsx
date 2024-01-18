import Image from "next/image";
import { useCanvas } from "@/context/CanvasContext";

const Canvas = () => {
  const { image } = useCanvas();

  return (
    <div className="h-screen">
      <Image
        src={image.pic}
        alt={image.value}
        width={1920}
        height={1080}
        objectFit="contain"
        objectPosition="top left"
      />
    </div>
  );
};

export default Canvas;
