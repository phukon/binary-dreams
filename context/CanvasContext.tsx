import { ImageOption, ImageOptions } from "@/imgBuffer/imgBuffer";

import { useRouter, useSearchParams } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

type CanvasContextState = {
  style: string;
  quote: string;
  ImageOptions: ImageOption[];
  currentImage: ImageOption;
  position: Position;
  setQuote: React.Dispatch<React.SetStateAction<string>>;
  setStyle: React.Dispatch<React.SetStateAction<string>>;
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
  const defaultStyle = "minimal";
  const defaultBackground = ImageOptions[0];

  const parseString = (value: string | string[] | undefined): string => {
    if (typeof value === "string") {
      return value;
    }
    return "";
  };

  const [position, setPosition] = useState<Position>({
    x: parseFloat(searchParams.get("x") || "50"),
    y: parseFloat(searchParams.get("y") || "-50"),
  });

  const [quote, setQuote] = useState<string>(
    parseString(searchParams.get("quote") || defaultQuote)
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
    router.replace(`/editor?${params.toString()}`, undefined);

    document.title = quote;
  }, [quote, style, currentImage.value, position.x, position.y]);

  const contextValue = {
    quote,
    style,
    currentImage,
    ImageOptions,
    position,
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
