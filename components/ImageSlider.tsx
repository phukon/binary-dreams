"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type Slide = {
  url: StaticImageData;
  title: string;
};

type ImageSliderProps = {
  slides: Slide[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex == 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex == slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      style={{
        height: "100%",
        position: "relative",
      }}
    >
      <div
        onClick={goToPrevious}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translate(0, -50%)",
          left: "32px",
          fontSize: "45px",
          color: "#fff",
          zIndex: 1,
          cursor: "pointer",
        }}
      >
        ◄
      </div>
      <div
        onClick={goToNext}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translate(0, -50%)",
          right: "32px",
          fontSize: "45px",
          color: "#fff",
          zIndex: 1,
          cursor: "pointer",
        }}
      >
        ►
      </div>
      <div style={slideStyles}>
        <Image
          style={{
            height: "100%",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          src={slides[currentIndex].url}
          alt="d"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {currentIndex+1}/{slides.length}
      </div>
    </div>
  );
};

export default ImageSlider;
