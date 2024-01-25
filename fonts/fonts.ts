import localFont from "next/font/local";
import { Orbitron, Tektur } from "next/font/google";

// ---- local ----

export const localPixel1 = localFont({
  src: "./PixelifySans-VariableFont_wght.ttf",
  variable: "--local-pixel1",
});

export const localhandwritten = localFont({
  src: './Caveat-VariableFont_wght.ttf',
  variable: "--local-handwritten"
})

export const localOrbitron = localFont({
  src: "./Orbitron-VariableFont_wght.ttf",
  variable: "--local-orbitron",
});

export const localTektur = localFont({
  src: "./Tektur-VariableFont_wdth,wght.ttf",
  variable: "--local-tektur",
});


export const localInter = localFont({
  src: "./Inter-VariableFont_slnt,wght.ttf",
  variable: "--local-inter",
});


export const localBerkeley = localFont({
  src: "./OcrA.ttf",
  variable: "--local-berkeley",
});


// ------ for dev ------

export const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});
export const tektur = Tektur({ subsets: ["latin"], variable: "--font-tektur" });
// -------
