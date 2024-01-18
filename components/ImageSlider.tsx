"use client";
import { useState, useEffect } from "react";
import Section from "@/components/Section";
import { useSlide } from "@/context/SlideContext";

// type sectionData = {
//   head: string;
//   desc: string;
//   pic: string;
// }

// type ImageSliderProps = {
//   slides: sectionData[];
// };

const ImageSlider: React.FC = () => {
  const { ImageData } = useSlide();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [transitioning, setTransitioning] = useState<boolean>(false);

  const slideStyles = {
    // backgroundImage: `url(${slides[currentIndex].url})`,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    transition: "opacity 0.15s ease-in-out",
    opacity: transitioning ? 0 : 1,
  };

  const goToPrevious = () => {
    setTransitioning(true);
    const isFirstSlide = currentIndex == 0;
    const newIndex = isFirstSlide ? ImageData.length - 1 : currentIndex - 1;
    setTimeout(() => {
      setCurrentIndex(newIndex);
    }, 100);
  };

  const goToNext = () => {
    setTransitioning(true);
    const isLastSlide = currentIndex == ImageData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setTimeout(() => {
      setCurrentIndex(newIndex);
    }, 100);
  };

  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      setTransitioning(false);
    }, 500); // Adjust timeout to match transition duration
    return () => clearTimeout(transitionTimeout);
  }, [currentIndex]);

  return (
    <div
      style={{
        height: "100%",
        position: "relative",
        paddingBottom: "35px"
      }}
    >
      <div
        className="absolute top-2/4 left-11 text-5xl"
        onClick={goToPrevious}
        style={{
          transform: "translate(0, -500%)",
          color: "black",
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
          transform: "translate(0, -500%)",
          color: "black",
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
        <Section
          pic={ImageData[currentIndex].pic}
          head={ImageData[currentIndex].head}
          desc={ImageData[currentIndex].desc}
        />
      </div>
      <div
        className="-mt-12 text-2xl"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {currentIndex + 1}/{ImageData.length}
      </div>
    </div>
  );
};

export default ImageSlider;
