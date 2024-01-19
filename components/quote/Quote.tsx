"use client";

import { useCanvas } from "@/context/CanvasContext";
// import { useEffect, useState } from "react"
import Draggable from "react-draggable";
import { useState } from "react";

export default function Quote() {
  const { quote, setPosition, position } = useCanvas();

  const handleDrag = (_: any, ui: any) => {
    const { x, y } = ui;
    setPosition({ x, y });
  };

  return (
    <Draggable
      onDrag={handleDrag}
      bounds="parent"
      defaultPosition={position}
    >
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
