import { useCanvas, Position } from "@/context/CanvasContext";
import Draggable from "react-draggable";
import { useCallback } from "react";

export default function Quote() {
  const { quote, setPosition, position } = useCanvas();

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
      <div className="text-center z-10 absolute w-fit hover:border-1 hover:rounded-lg hover:cursor-move">
        {quote && (
          <span className="text-md md:text-2xl text-white text-opacity-95">
            {quote}
          </span>
        )}
      </div>
    </Draggable>
  );
}
