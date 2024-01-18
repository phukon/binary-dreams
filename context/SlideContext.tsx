import { createContext, useContext } from "react";
import { ImageOption, ImageOptions } from "@/imgBuffer/imgBuffer";

type SlideContextType = {
  ImageData: ImageOption[];
};

export const SlideContext = createContext<SlideContextType | undefined>(undefined);

export const SlideProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const contextValue = { ImageData: ImageOptions };
  return (
    <SlideContext.Provider value={contextValue}>
      {children}
    </SlideContext.Provider>
  );
};

export const useSlide = () => {
  const context = useContext(SlideContext);
  if (!context) {
    throw new Error("useSlide must be used within a SlideContext Provider");
  }
  return context;
};
