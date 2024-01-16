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
        className="absolute top-2/4 left-11 text-5xl"
        onClick={goToPrevious}
        style={{
          transform: "translate(0, -50%)",
          color: "#fff",
          zIndex: 1,
          cursor: "pointer",
        }}
      >
        <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
          <path
            fillRule="evenodd"
            d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"
          />
        </svg>
      </div>
      <div
        className="absolute top-2/4 right-11 text-5xl"
        onClick={goToNext}
        style={{
          transform: "translate(0, -50%)",
          color: "#fff",
          zIndex: 1,
          cursor: "pointer",
        }}
      >
        <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
          <path
            fillRule="evenodd"
            d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z"
          />
        </svg>
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
        {currentIndex + 1}/{slides.length}
      </div>
    </div>
  );
};

export default ImageSlider;
