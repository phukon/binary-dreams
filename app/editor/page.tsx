"use client";
import React from "react";
import Canvas from "@/components/canvas/Canvas";
import { CanvasProvider } from "@/context/CanvasContext";

const Editor = () => {
  return (
    <CanvasProvider>
      <Canvas />
    </CanvasProvider>
  );
};

export default Editor;
