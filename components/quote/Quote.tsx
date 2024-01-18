"use client";

import { useCanvas } from "@/context/CanvasContext";
// import { useEffect, useState } from "react"
import Draggable from "react-draggable";

export default function Quote() {
  const { quote } = useCanvas();

  return (
    <Draggable bounds="parent">
      <div className="text-center relative w-fit hover:border-1 hover:rounded-lg hover:cursor-move">
        {quote && (
          <span className="text-md md:text-2xl text-white text-opacity-95">
            {quote}
          </span>
        )}
      </div>
    </Draggable>
  );
}
