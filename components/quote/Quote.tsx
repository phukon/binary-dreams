import { useCanvas, Position } from "@/context/CanvasContext";
import Draggable from "react-draggable";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

export default function Quote() {
  const {
    quote,
    setPosition,
    position,
    style,
    selectedNeonGlowStyle,
    neonGlowEnabled,
  } = useCanvas();

  // const handleDrag = (_: any, ui: any) => {
  //   const { x, y } = ui;
  //   setPosition({ x, y });
  // };

  /**
   * Updating the position too frequently is not a good idea, getting errors and warnings
   * So I had to debounce position updates.
   */
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
            "--local-pixel1": style === "pixel1",
            "--local-pixel2": style === "pixel2",
            "--local-tektur": style === "bold",
            "--local-handwritten": style === "handwritten",
          }
        )}
      >
        {quote && (
          <span
            className="text-md md:text-2xl text-white text-opacity-95"
            style={{
              textShadow: neonGlowEnabled
                ? getNeonGlowStyle(selectedNeonGlowStyle)
                : "none",
                whiteSpace: "pre-wrap",
            }}
          >
            {quote}
          </span>
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
