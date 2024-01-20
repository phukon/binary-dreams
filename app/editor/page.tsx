"use client";
import React from "react";
import { CanvasProvider } from "@/context/CanvasContext";
import dynamic from 'next/dynamic'
 
const NoSSR = dynamic(() => import('@/app/editor/Canvas2'), { ssr: false })
const Editor = () => {
  return (
    <CanvasProvider>
      <NoSSR />
    </CanvasProvider>
  );
};

export default Editor;
