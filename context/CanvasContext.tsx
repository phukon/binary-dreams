import { ImageOption, ImageOptions } from "@/imgBuffer/imgBuffer";
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
  date: Date;
  style: string;
  quote: string;
  timezone: string;
  description: string;
  ImageOptions: ImageOption[];
  currentImage: ImageOption;
  position: Position;
  share: boolean;
  setQuote: React.Dispatch<React.SetStateAction<string>>;
  setStyle: React.Dispatch<React.SetStateAction<string>>;
  setShare: React.Dispatch<React.SetStateAction<boolean>>;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  setTimezone: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
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
  const defaultDescription = (new Date().getFullYear() + 1).toString();
  const defaultStyle = "traditional";
  const defaultTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const defaultBackground = ImageOptions[0];
  const defaultDate = new Date(
    `${new Date().getFullYear() + 1}-01-01T00:00:00.000Z`
  );

  const setUi = useSetAtom(uiAtom);
  setUi((prev) => ({ ...prev, modal: true }));

  // ------------------

  const parseString = (value: string | string[] | undefined): string => {
    if (typeof value === "string") {
      return value;
    }
    return "";
  };

  const parseDateArguments = (dateStr: string): number[] => {
    const parts = dateStr.split(/[- :]/);
    return parts.map((part) => parseInt(part));
  };

  const parseDate = (value: string | string[] | undefined): Date => {
    if (typeof value === "string") {
      const [year, month, day, hour = 0, minute = 0] =
        parseDateArguments(value);
      return new Date(Date.UTC(year, month - 1, day, hour, minute));
    }
    return defaultDate;
  };

  // ---------------
  const [share, setShare] = useState<boolean>(
    JSON.parse(searchParams.get("share") || "false")
  );

  if (share === true) {
    setUi((prev) => ({ ...prev, modal: true }));
  } else if (share === false) {
    setUi((prev) => ({ ...prev, modal: false }));
  }

  const [date, setDate] = useState<Date>(
    searchParams.get("date")
      ? parseDate(`${searchParams.get("date")!} ${searchParams.get("time")}`)
      : defaultDate
  );

  const [timezone, setTimezone] = useState<string>(
    parseString(searchParams.get("timezone") || defaultTimezone)
  );

  const [position, setPosition] = useState<Position>({
    x: parseFloat(searchParams.get("x") || "130"),
    y: parseFloat(searchParams.get("y") || "-208"),
    x1: parseFloat(searchParams.get("x1") || "130"),
    y1: parseFloat(searchParams.get("y1") || "-208"),
  });

  const [quote, setQuote] = useState<string>(
    parseString(searchParams.get("quote") || defaultQuote)
  );

  const [description, setDescription] = useState<string>(
    parseString(searchParams.get("desc") || defaultDescription)
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

    params.set("timezone", timezone);
    params.set("quote", quote);
    params.set("desc", description);
    params.set("style", style);
    params.set("bg", currentImage.value);
    params.set("x", position.x.toString());
    params.set("y", position.y.toString());
    params.set("x1", position.x1.toString());
    params.set("y1", position.y1.toString());
    params.set("date", date.toISOString().split("T")[0]);
    params.set("time", date.toISOString().split("T")[1].substring(0, 5));
    params.set("share", share.toString());
    router.replace(`/editor?${params.toString()}`, undefined);

    document.title = quote;
  }, [quote, style, currentImage.value, position, share]);

  const contextValue = {
    quote,
    date,
    timezone,
    style,
    currentImage,
    description,
    ImageOptions,
    position,
    share,
    setDate,
    setTimezone,
    setShare,
    setQuote,
    setStyle,
    setDescription,
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
