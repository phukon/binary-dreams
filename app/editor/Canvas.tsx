import { useEffect, useRef } from "react";
import Quote from "@/components/quote/Quote";
import { createFileName, useScreenshot } from "use-react-screenshot";
import { Button } from "@/components/ui/button";
import { useAtomValue, useSetAtom } from "jotai";
import { uiAtom } from "@/state/State";
import InPortal from "@/components/InPortal";
import Header from "@/components/Header";
import { useCanvas } from "@/context/CanvasContext";
import { useScrollPosition } from "@/lib/useScrollPosition";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Settings from "@/components/Settings";

const Canvas2 = () => {
  // --- ss logic ---
  const [image, takeScreenshot] = useScreenshot({
    quality: 1.0,
  });
  const refSS = useRef(null);

  const download = (
    image: string,
    { name = "binary-dreams", extension = "png" } = {}
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

  const notify = () =>
    toast.success(
      <div>
        <span className="text-xl">link copied!</span>
        <br />
        <p className="text-2xl font-bold">Share it with the world!</p>
      </div>,
      { duration: 3000 }
    );

  // --- State ---
  const ui = useAtomValue(uiAtom);
  const setUi = useSetAtom(uiAtom);
  const { currentImage, share, setShare } = useCanvas();

  /**
   * Scroll position resets due to useContext re renders
   * So I made a hook to set the scroll position to the one
   * before the re render, due to url change.
   */
  const searchParams = useSearchParams();
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
    share && navigator.clipboard.writeText(window.location.href);
  }, [searchParams]);

  return (
    <div className="relative flex flex-col lg:mx-auto lg:max-w-[1920px] lg:flex-row lg:justify-around ">
      {ui.modal && (
        <InPortal
          wrapperId="idkmaybe"
          onClick={() => {
            setShare(!share);
            setUi((prev) => ({
              ...prev,
              modal: false,
            }));
          }}
        >
          <div>
            <div className="relative max-w-[390px] h-full md:max-w-[700px] md:max-h-screen md:ml-32 border rounded-lg">
              <img
                width={1920}
                height={1920}
                alt="canvas image"
                className="h-full w-full object-cover md:object-cover rounded-md"
                src={currentImage.src}
              />
              <Quote />
            </div>
          </div>
        </InPortal>
      )}
      <aside className="sticky top-0 hidden h-full max-h-screen min-h-full w-full flex-shrink-0 flex-col justify-between overflow-y-auto p-8 lg:flex lg:max-w-[300px] xl:max-w-[390px] xl:p-16 2xl:max-w-[455px]">
        <div className="flex-grow">
          <div>
            <h2>
              <a
                className="inline-block rounded-lg focus:ring-offset-4"
                href="/"
              >
                <h1 className="text-gray-300 text-9xl transition duration-300 ease-in-out hover:text-black dark:text-white dark:hover:text-white  w-full max-w-[12rem] lg:max-w-[16rem] 2xl:max-w-[18rem]">
                  bndr
                </h1>
              </a>
              <span className="sr-only">Binary Dreams</span>
            </h2>
            <div className="mt-2 space-x-6 text-gray-400 lg:space-x-4 2xl:mt-6 2xl:space-x-6 flex items-center">
              <div className="text-lg 2xl:text-xl whitespace-nowrap">
                v0.4.0
              </div>
              <div className="text-sm leading-snug 2xl:text-base">
                The coolest e/acc art on the internet
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col space-y-4">
            <div className="flex items-center mt-10 gap-4">
              {" "}
              <Button
                variant="brutal"
                size="default"
                style={{ boxShadow: "6px 6px 0px rgba(0, 0, 0, 1)" }}
                onClick={() => {
                  notify();
                  setShare(!share);
                  setUi((prev) => ({
                    ...prev,
                    modal: true,
                  }));
                }}
              >
                <img src="/icons/share.svg" alt="share" />
                Share
              </Button>
              <Button
                onClick={downloadSS}
                variant="brutal"
                size="default"
                style={{ boxShadow: "6px 6px 0px rgba(0, 0, 0, 1)" }}
              >
                {" "}
                <img src="/icons/download.svg" alt="download" />
                Download
              </Button>
            </div>
            <Settings />
          </div>
        </div>
      </aside>

      <div className="flex flex-col">
        {" "}
        <Header isTitle={false} className="hidden lg:block lg:py-2" />
        {/* this is a quick fix lol */}
        <Header isTitle={true} className="py-2 lg:hidden" />
        <main className="p-6 sm:p-8 lg:w-full lg:max-w-prose lg:flex-shrink xl:max-w-4xl xl:p-16 2xl:max-w-5xl mb-5 dotted-div">
          <header>
            <div className="flex items-center space-x-4 sm:space-x-8 sm:px-16 lg:px-0">
              <div className="relative w-1/3 max-w-[215px] lg:w-1/4">
                <img
                  src="/logo/logo.png"
                  title="Logo, generated using DALLE"
                  alt="Logo, generated using DALLE"
                />
                <div className="absolute -right-2 -bottom-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-black text-white shadow-md dark:bg-white dark:text-black dark:!shadow-none lg:-right-4 lg:-bottom-6 lg:h-[4.5rem] lg:w-[4.5rem] lg:text-[2rem]">
                  v0.4
                </div>
              </div>
              <div
                style={{ boxShadow: "15px 15px 0px rgba(0, 0, 0, 1)" }}
                className="bg-white custom-1 border-2 custom-inter border-black relative w-2/3 space-y-4 rounded bg- p-4 text-sm leading-snug text-gray-800 dark:bg-gray-900 dark:text-gray-300 sm:text-base md:text-lg lg:w-3/4 lg:p-8 lg:leading-normal"
              >
                <div>
                  Make wallpapers/countdowns with the coolest e/acc art on the
                  internet. Can be downloaded or shared.
                </div>
                <div>
                  Tap the <u>share</u> button to get the link to your art or
                  download.
                </div>
              </div>
            </div>
            <div className="flex min-[1024px]:hidden items-center mt-10 gap-4">
              {" "}
              <Button
                variant="brutal"
                size="default"
                style={{ boxShadow: "6px 6px 0px rgba(0, 0, 0, 1)" }}
                onClick={() => {
                  notify();
                  setShare(!share);
                  setUi((prev) => ({
                    ...prev,
                    modal: true,
                  }));
                }}
              >
                <img src="/icons/share.svg" alt="share" />
                Share
              </Button>
              <Button
                onClick={downloadSS}
                variant="brutal"
                size="default"
                style={{ boxShadow: "6px 6px 0px rgba(0, 0, 0, 1)" }}
              >
                {" "}
                <img src="/icons/download.svg" alt="download" />
                Download
              </Button>
            </div>
          </header>
          <div className="mt-5 mb-10 space-y-12 lg:mt-0 lg:space-y-24">
            <div
              style={{ boxShadow: "15px 15px 0px rgba(0, 0, 0, 1)" }}
              ref={refSS}
              className="relative mt-10 border md:max-w-[650px] rounded-lg"
            >
              <img
                width={1920}
                height={1920}
                alt="canvas image"
                className="h-full w-full rounded-md"
                src={currentImage.src}
              />
              <Quote />
            </div>
          </div>
          <Settings className="min-[1024px]:hidden" />
        </main>
      </div>
    </div>
  );
};

export default Canvas2;
