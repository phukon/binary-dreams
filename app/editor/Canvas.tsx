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
                v0.2.0
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
            {/* <a
              style={{ boxShadow: "6px 6px 0px rgba(0, 0, 0, 1)" }}
              className="inline-flex select-none items-center border-2 dark:!shadow-none dark:!border-none group space-x-4 rounded-md px-6 py-3 text-base shadow-md sm:rounded-lg border-black text-black hover:bg-blue-100 dark:border-gray-800 dark:bg-gray-900 hover:border-blue-200 dark:hover:bg-white dark:text-gray-300 dark:hover:text-black cursor-pointer"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="flex-shrink-0 fill-current object-contain transition ease-in-out duration-300 h-6 w-6 text-gray-700 dark:text-gray-300 dark:group-hover:text-black"
              >
                <path d="M 16 2.59375 L 15.28125 3.28125 L 2.28125 16.28125 L 3.71875 17.71875 L 5 16.4375 L 5 28 L 14 28 L 14 18 L 18 18 L 18 28 L 27 28 L 27 16.4375 L 28.28125 17.71875 L 29.71875 16.28125 L 16.71875 3.28125 Z M 16 5.4375 L 25 14.4375 L 25 26 L 20 26 L 20 16 L 12 16 L 12 26 L 7 26 L 7 14.4375 Z"></path>
              </svg>
              <span>Home</span>
            </a>
            <a
              style={{ boxShadow: "6px 6px 0px rgba(0, 0, 0, 1)" }}
              href="/about"
              rel="noreferrer"
              className="inline-flex select-none items-center border-2 dark:!shadow-none dark:!border-none group space-x-4 rounded-md px-6 py-3 text-base shadow-md sm:rounded-lg border-black text-black hover:bg-blue-100 dark:border-gray-800 dark:bg-gray-900 hover:border-blue-200 dark:hover:bg-white dark:text-gray-300 dark:hover:text-black cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="flex-shrink-0 fill-current object-contain transition ease-in-out duration-300 h-6 w-6 text-gray-700 dark:text-gray-300 dark:group-hover:text-black"
              >
                <path d="M 4 6 L 4 8 L 26 8 L 26 24 L 12 24 L 12 26 L 30 26 L 30 24 L 28 24 L 28 6 L 4 6 z M 8.0019531 9 C 5.8032706 9 4 10.802666 4 13 C 4 15.198683 5.8040743 17 8.0019531 17 C 10.197134 17 12 15.198683 12 13 C 12 10.802666 10.19794 9 8.0019531 9 z M 14 10 L 14 12 L 19 12 L 19 10 L 14 10 z M 21 10 L 21 12 L 24 12 L 24 10 L 21 10 z M 8.0019531 11 C 9.1159662 11 10 11.883334 10 13 C 10 14.119317 9.1167719 15 8.0019531 15 C 6.881832 15 6 14.119317 6 13 C 6 11.883334 6.8826357 11 8.0019531 11 z M 14 14 L 14 16 L 24 16 L 24 14 L 14 14 z M 4 18 L 4 26 L 6 26 L 6 20 L 9 20 L 9 26 L 11 26 L 11 20.658203 L 13.064453 21.75 C 13.648752 22.060158 14.351587 22.058921 14.935547 21.75 L 14.935547 21.751953 L 18.466797 19.884766 L 17.533203 18.115234 L 14.001953 19.982422 L 10.90625 18.347656 C 10.475078 18.120046 9.9935054 18 9.5039062 18 L 4 18 z"></path>
              </svg>
              <span>About</span>
            </a>
            <a
              style={{ boxShadow: "6px 6px 0px rgba(0, 0, 0, 1)" }}
              href="https://github.com/phukon/binary-dreams"
              target="_blank"
              rel="noreferrer"
              className="inline-flex select-none items-center border-2 dark:!shadow-none dark:!border-none group space-x-4 rounded-md px-6 py-3 text-base shadow-md sm:rounded-lg border-black text-black hover:bg-blue-100 dark:border-gray-800 dark:bg-gray-900 hover:border-blue-200 dark:hover:bg-white dark:text-gray-300 dark:hover:text-black cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="flex-shrink-0 fill-current object-contain transition ease-in-out duration-300 h-6 w-6 text-gray-700 dark:text-gray-300 dark:group-hover:text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
                ></path>
              </svg>
              <span>Repository</span>
            </a> */}
          </div>
        </div>
        <div className="mt-6 inline-flex flex-col space-y-1.5 text-center">
          <a
            href="https://twitter.com/kungfukon"
            target="_blank"
            rel="noreferrer"
            className="select-none border dark:!shadow-none dark:!border-none group space-x-2 rounded px-3 py-1.5 text-xs shadow-sm sm:rounded-md border-gray-800 bg-gray-900 text-gray-300 cursor-pointer inline-flex items-center justify-center"
            title="Riki Phukon"
            style={{ width: "150px" }}
          >
            <span>
              app by <span className="font-semibold">Riki Phukon</span>
            </span>
          </a>
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
                  v0.1.1
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
          <Settings className="min-[1024px]:hidden"/>
        </main>
      </div>
    </div>
  );
};

export default Canvas2;
