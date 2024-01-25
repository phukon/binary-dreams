import { useCanvas, Position } from "@/context/CanvasContext";
import Draggable from "react-draggable";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Quote() {
  const {
    quote,
    progress,
    position,
    style,
    selectedNeonGlowStyle,
    neonGlowEnabled,
    setPosition,
  } = useCanvas();

  // const handleDrag = (_: any, ui: any) => {
  //   const { x, y } = ui;
  //   setPosition({ x, y });
  // };

  /**
   * Updating the position too frequently is not a good idea, getting errors and warnings
   * So I had to debounce position updates.
   */

  // --------

  const [yearProgress, setYearProgress] = useState<number>(0);

  const calculateYearProgress = useCallback(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1); // Start of this year
    const end = new Date(now.getFullYear() + 1, 0, 1); // End of this year
    const done =
      (now.getTime() - start.getTime()) / (end.getTime() - start.getTime());
    const percent = (100.0 * done).toFixed(6);
    setYearProgress(parseFloat(percent));
  }, []);

  useEffect(() => {
    const updateYearProgress = () => {
      calculateYearProgress();
      requestAnimationFrame(updateYearProgress);
    };

    // Start the animation loop when the component mounts
    const animationFrameId = requestAnimationFrame(updateYearProgress);

    // Cleanup the animation loop when the component unmounts
    return () => cancelAnimationFrame(animationFrameId);
  }, [calculateYearProgress]);

  // --------
  function debounce(func: any, delay: any) {
    let timeoutId: any;

    return function (...args: any[]) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
  const debouncedSetPosition = useCallback(
    debounce(({ x, y, setPosition }: DebouncedSetPositionType) => {
      setPosition((prevPosition) => ({ ...prevPosition, x, y }));
    }, 1000),
    []
  );

  type DebouncedSetPositionType = {
    x: number;
    y: number;
    setPosition: React.Dispatch<React.SetStateAction<Position>>;
  };

  const handleDrag = (_: any, ui: any) => {
    const { x, y } = ui;

    debouncedSetPosition({ x, y, setPosition });
  };

  // -------------

  return (
    <Draggable onDrag={handleDrag} bounds="parent" defaultPosition={position}>
      <div
        className={cn(
          "text-center z-10 absolute max-w-[500px] p-10 hover:border-1 hover:rounded-lg hover:cursor-move",
          {
            "--local-pixel1": style === "pixel",
            "--local-tektur": style === "bold",
            "--local-berkeley": style === "terminal",
            "--local-handwritten": style === "handwritten",
          }
        )}
      >
        {quote && (
          <div
            className="text-md md:text-2xl text-white text-opacity-95"
            style={{
              textShadow: neonGlowEnabled
                ? getNeonGlowStyle(selectedNeonGlowStyle)
                : "none",
              whiteSpace: "pre-wrap",
            }}
          >
            {" "}
            {progress && (
              <div className="text-white flex flex-col">
                <span className="text-md md:text-4xl">
                  {yearProgress}%
                </span>
                complete
                {/* <span>{yearProgress.toString().split(".")[1]} </span> */}
              </div>
            )}
            {quote}
          </div>
        )}
      </div>
    </Draggable>
  );
}

const getNeonGlowStyle = (style: string) => {
  switch (style) {
    case "red":
      return "0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 0, 0, 0.8), 0 0 40px rgba(255, 0, 0, 0.8)";
    case "yellow":
      return "0 0 10px rgba(255, 255, 0, 0.8), 0 0 20px rgba(255, 255, 0, 0.8), 0 0 30px rgba(255, 255, 0, 0.8), 0 0 40px rgba(255, 255, 0, 0.8)";
    case "green":
      return "0 0 10px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 255, 0, 0.8), 0 0 30px rgba(0, 255, 0, 0.8), 0 0 40px rgba(0, 255, 0, 0.8)";
    default:
      return "0 0 10px #000, 0 0 2px #fff, 0 0 3px #fff, 0 0 40px #fff";
  }
};
