import { ImageOption, ImageOptions } from "@/imgBuffer/imgBuffer";
import { useSetAtom } from "jotai";
import { uiAtom } from "@/state/State";
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
  share: boolean;
  setQuote: React.Dispatch<React.SetStateAction<string>>;
  setStyle: React.Dispatch<React.SetStateAction<string>>;
  setShare: React.Dispatch<React.SetStateAction<boolean>>;
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
  const setUi = useSetAtom(uiAtom);
  setUi((prev) => ({ ...prev, modal: true }));

  const parseString = (value: string | string[] | undefined): string => {
    if (typeof value === "string") {
      return value;
    }
    return "";
  };

  const [share, setShare] = useState<boolean>(JSON.parse(searchParams.get("share") || "false"));


  if (share === true) {
    setUi((prev) => ({ ...prev, modal: true }));
  } else if (share === false) {
    setUi((prev) => ({ ...prev, modal: false }));
  }

  const [position, setPosition] = useState<Position>({
    x: parseFloat(searchParams.get("x") || "130"),
    y: parseFloat(searchParams.get("y") || "-208"),
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
    params.set("share", share.toString());
    router.replace(`/editor?${params.toString()}`, undefined);

    document.title = quote;
  }, [quote, style, currentImage.value, position.x, position.y, share]);

  const contextValue = {
    quote,
    style,
    currentImage,
    ImageOptions,
    position,
    share,
    setShare,
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
