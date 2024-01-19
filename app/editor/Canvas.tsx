"use client";
import Quote from "@/components/quote/Quote";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";
import { createFileName, useScreenshot } from "use-react-screenshot";
import { useCanvas } from "@/context/CanvasContext";
import { useAtomValue, useSetAtom } from "jotai";
import { uiAtom } from "@/state/State";
import InPortal from "@/components/InPortal";

export default function Canvas() {
  const ui = useAtomValue(uiAtom);
  // --- ss logic ---
  const [image, takeScreenshot] = useScreenshot({
    quality: 1.0,
  });
  const refSS = useRef(null);

  const download = (
    image: string,
    { name = "riki", extension = "png" } = {}
  ) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadSS = () => {
    takeScreenshot(refSS.current).then(download);
  };

  // ------
  const setUi = useSetAtom(uiAtom);
  const { currentImage } = useCanvas();

  return (
    <div className="flex flex-col p-4 md:px-5 lg:px-20 h-screen">
      {ui.modal && (
        <div suppressHydrationWarning>
          <InPortal wrapperId="idkmaybe">
            <div className="modal" suppressHydrationWarning>
              <div className="modal-content">
                <button
                  onClick={() =>
                    setUi((prev) => ({
                      ...prev,
                      modal: false,
                    }))
                  }
                >
                  yooo
                </button>
                <h2>Prologue</h2>
                <p>
                  The FitnessGram Pacer Test is a multistage aerobic capacity
                  test that progressively gets more difficult as it continues.
                  The running speed starts slowly, but gets faster each minute
                  after you hear this signal.
                </p>
              </div>
            </div>
          </InPortal>
        </div>
      )}
      <header className="flex items-center justify-between p-4 border-b dark:bg-gray-800">
        <h1 className="text-xl font-semibold">Editor</h1>
        <div className="flex items-center gap-4">
          {" "}
          <button
            className="bg-black text-white px-3 py-2 font-semibold underline decoration-neutral-400"
            onClick={() =>
              setUi((prev) => ({
                ...prev,
                modal: true,
              }))
            }
          >
            Share
          </button>
          <Button
            onClick={downloadSS}
            variant="brutal"
            size="default"
            style={{ boxShadow: "6px 6px 0px rgba(0, 0, 0, 1)" }}
          >
            Save
          </Button>
        </div>
      </header>
      <main
        style={{ boxShadow: "15px 15px 0px rgba(0, 0, 0, 1)" }}
        className="flex border-2 md:min-h-[950px] border-black flex-col min-[1026px]:flex-row flex-1"
      >
        <div className="md:max-h-screen border rounded-lg">
          <div
            ref={refSS}
            className="relative max-h-[700px] max-w-[900px] border rounded-lg"
          >
            <Image
              width={1920}
              height={1080}
              alt="canvas image"
              className="h-full w-full object-cover md:object-cover rounded-md"
              src={currentImage.pic}
            />
            <Quote />
          </div>
        </div>
        <aside className="flex flex-col gap-4 p-4 md:p-4 border-r w-full md:w-[550px]">
          <h2 className="text-lg font-semibold">Tools</h2>
          <div className="grid grid-cols-2 gap-2">
            <Button className="justify-start" size="sm" variant="ghost">
              <PencilIcon className="h-4 w-4 mr-2" />
              Draw
            </Button>
            <Button className="justify-start" size="sm" variant="ghost">
              <TextIcon className="h-4 w-4 mr-2" />
              Text
            </Button>
            <Button className="justify-start" size="sm" variant="ghost">
              <FilterIcon className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button className="justify-start" size="sm" variant="ghost">
              <CropIcon className="h-4 w-4 mr-2" />
              Crop
            </Button>
            <Button className="justify-start" size="sm" variant="ghost">
              <RotateCwIcon className="h-4 w-4 mr-2" />
              Rotate
            </Button>
            <Button className="justify-start" size="sm" variant="ghost">
              <FlipVerticalIcon className="h-4 w-4 mr-2" />
              Flip
            </Button>
          </div>

          <h2 className="text-lg font-semibold">Settings</h2>
          <div className="flex flex-col gap-2">
            {/* <Label htmlFor="brush-size">Brush Size</Label>
            <Input id="brush-size" max="100" min="1" type="range" />
            <Label htmlFor="color">Color</Label>
            <Input id="color" type="color" />
            <Label htmlFor="opacity">Opacity</Label>
            <Input id="opacity" max="1" min="0" step="0.1" type="range" /> */}
          </div>
        </aside>
      </main>
    </div>
  );
}

function CropIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2v14a2 2 0 0 0 2 2h14" />
      <path d="M18 22V8a2 2 0 0 0-2-2H2" />
    </svg>
  );
}

function FilterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function FlipVerticalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
      <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
      <path d="M4 12H2" />
      <path d="M10 12H8" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
    </svg>
  );
}

function PencilIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function RotateCwIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  );
}

function TextIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}
