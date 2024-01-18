"use client";
import React from "react";
import { CanvasProvider } from "@/context/CanvasContext";
import Canvas from "./Canvas";
const Editor = () => {
  return (
    <CanvasProvider>
      <Canvas />
    </CanvasProvider>
  );
};

export default Editor;
