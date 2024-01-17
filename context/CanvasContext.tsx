import { ImageOption, ImageOptions } from "@/imgBuffer/imgBuffer";

import { useRouter, useSearchParams } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

type CanvasContextState = {
  style: string;
  image: ImageOption;
  quote: string;
  ImageOptions: ImageOption[];
  setQuote: React.Dispatch<React.SetStateAction<string>>;
  setStyle: React.Dispatch<React.SetStateAction<string>>;
  setImage: React.Dispatch<React.SetStateAction<ImageOption>>;
};

const CanvasContext = createContext<CanvasContextState | undefined>(undefined);

export const CanvasProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const defaultQuote = "yooo hoooo";
  const defaultStyle = "minimal";
  const defaultBackground = ImageOptions[0];

  const parseString = (value: string | string[] | undefined): string => {
    if (typeof value === "string") {
      return value;
    }
    return "";
  };

  const [quote, setQuote] = useState<string>(
    parseString(searchParams.get("desc") || defaultQuote)
  );

  const [style, setStyle] = useState<string>(
    parseString(searchParams.get("style") || defaultStyle)
  );
  const [image, setImage] = useState<ImageOption>(
    ImageOptions.find(
      (o) =>
        o.value ===
        parseString(searchParams.get("bg") || defaultBackground.value)
    ) || defaultBackground
  );

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("desc", quote);
    params.set("style", style);
    params.set("bg", image.value);
    router.replace(`/?${params.toString()}`, undefined);

    document.title = quote;
  }, [quote, style, image.value]);

  const contextValue = {
    quote,
    style,
    image,
    ImageOptions,
    setQuote,
    setStyle,
    setImage,
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
