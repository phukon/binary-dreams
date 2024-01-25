import { ImageOption, ImageOptions } from "@/types/types";
import { useSetAtom } from "jotai";
import { uiAtom } from "@/state/State";
import { useRouter, useSearchParams } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface Position {
  x: number;
  y: number;
  x1: number;
  y1: number;
}

type CanvasContextState = {
  style: string;
  quote: string;
  progress: boolean;
  ImageOptions: ImageOption[];
  currentImage: ImageOption;
  position: Position;
  share: boolean;
  neonGlowEnabled: boolean;
  selectedNeonGlowStyle: string;
  setProgress: React.Dispatch<React.SetStateAction<boolean>>;
  setQuote: React.Dispatch<React.SetStateAction<string>>;
  setStyle: React.Dispatch<React.SetStateAction<string>>;
  setShare: React.Dispatch<React.SetStateAction<boolean>>;
  setNeonGlowEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedNeonGlowStyle: React.Dispatch<React.SetStateAction<string>>;
  setCurrentImage: React.Dispatch<React.SetStateAction<ImageOption>>;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
};

const CanvasContext = createContext<CanvasContextState | undefined>(undefined);

export const CanvasProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const defaultQuote = "Your text here";
  const defaultStyle = "default";
  const defaultNeonStyle = "white";
  const defaultBackground = ImageOptions[0];

  const setUi = useSetAtom(uiAtom);
  setUi((prev) => ({ ...prev, modal: true }));

  // ------------------

  const parseString = (value: string | string[] | undefined): string => {
    if (typeof value === "string") {
      return value;
    }
    return "";
  };

  // ---------------

  const [neonGlowEnabled, setNeonGlowEnabled] = useState<boolean>(
    JSON.parse(searchParams.get("neon") || "false")
  );
  const [selectedNeonGlowStyle, setSelectedNeonGlowStyle] = useState<string>(
    parseString(searchParams.get("neonstyle") || defaultNeonStyle)
  );

  const [share, setShare] = useState<boolean>(
    JSON.parse(searchParams.get("share") || "false")
  );

  if (share === true) {
    setUi((prev) => ({ ...prev, modal: true }));
  } else if (share === false) {
    setUi((prev) => ({ ...prev, modal: false }));
  }

  const [position, setPosition] = useState<Position>({
    x: parseFloat(searchParams.get("x") || "130"),
    y: parseFloat(searchParams.get("y") || "-208"),
    x1: parseFloat(searchParams.get("x1") || "130"),
    y1: parseFloat(searchParams.get("y1") || "-208"),
  });

  const [quote, setQuote] = useState<string>(
    parseString(searchParams.get("quote") || defaultQuote)
  );

  const [progress, setProgress] = useState<boolean>(
    JSON.parse(searchParams.get("progress") || "false")
  );

  const [style, setStyle] = useState<string>(
    parseString(searchParams.get("style") || defaultStyle)
  );
  const [currentImage, setCurrentImage] = useState<ImageOption>(
    ImageOptions.find(
      (o) =>
        o.value ===
        parseString(searchParams.get("bg") || defaultBackground.value)
    ) || defaultBackground
  );

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("quote", quote);
    params.set("style", style);
    params.set("bg", currentImage.value);
    params.set("x", position.x.toString());
    params.set("y", position.y.toString());
    params.set("x1", position.x1.toString());
    params.set("y1", position.y1.toString());
    params.set("progress", progress.toString())
    params.set("neon", neonGlowEnabled.toString());
    params.set("neonstyle", selectedNeonGlowStyle);

    params.set("share", share.toString());
    router.replace(`/editor?${params.toString()}`, undefined);

    document.title = quote;
  }, [
    quote,
    style,
    progress,
    currentImage.value,
    position,
    share,
    neonGlowEnabled,
    selectedNeonGlowStyle,
  ]);

  const contextValue = {
    quote,
    style,
    currentImage,
    ImageOptions,
    position,
    share,
    progress,
    neonGlowEnabled,
    selectedNeonGlowStyle,
    setShare,
    setProgress,
    setNeonGlowEnabled,
    setSelectedNeonGlowStyle,
    setQuote,
    setStyle,
    setCurrentImage,
    setPosition,
  };

  return (
    <CanvasContext.Provider value={contextValue}>
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error("useCanvas must be used within a CanvasContext Provider");
  }
  return context;
};
