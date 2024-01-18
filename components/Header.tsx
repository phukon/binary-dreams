"use client";

import React from "react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(true);

  // to stop scroll when header menu is open
  useEffect(() => {
    if (!isActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isActive]);

  return (
    <div className="container px-4 mx-auto pt-4">
      <div className="pr-2 w-full">
        <div className="border border-black bg-black mt-2 ml-2 w-full h-full">
          <div className="border-2 border-black bg-white mr-2 -ml-2 mb-2 -mt-2 flex px-6 justify-between items-center">
            <div className="h-[24px] w-[104px] md:h-[28px] md:w-[120px]">
              <span className="text-lg">
                binary<b>dreams</b>
              </span>
            </div>
            <nav
              className={`md:flex fixed md:relative top-24 md:top-0 left-0 right-0 bottom-0 z-10 bg-white overflow-none ${
                isActive && "hidden"
              }`}
            >
              <ul className="container px-4 md:px-0 mx-auto flex flex-1 flex-col min-h-full md:flex-row md:gap-x-8 md:items-center relative">
                <li className="my-4 md:my-3 underline font-semibold decoration-neutral-400">
                  <p className="text-5xl font-bold md:text-base">
                    <a
                      href="https://rikiphukon.com"
                      className="tracking-[-2px] md:tracking-[-1px]"
                    >
                      phukon
                    </a>
                  </p>
                </li>
                <li className="my-4 md:my-3 underline font-semibold decoration-neutral-400">
                  <p className="text-5xl font-bold md:text-base">
                    <a
                      href="https://github.com/phukon"
                      className="tracking-[-2px] md:tracking-[-1px]"
                    >
                      source
                    </a>
                  </p>
                </li>
                <li className="my-4 md:my-3 underline font-semibold decoration-neutral-400">
                  <p className="text-5xl font-bold md:text-base">
                    <a
                      href="https://donate.stripe.com/5kA4joa4ObNKatyfYY"
                      className="tracking-[-2px] md:tracking-[-1px]"
                    >
                      sponsor
                    </a>
                  </p>
                </li>
              </ul>
            </nav>

            <button
              className="w-8 h-8 my-3 md:hidden"
              onClick={() => setIsActive(!isActive)}
            >
              <div id="open" className={`${!isActive && "hidden"}`}>
                <div className="bg-black w-full h-[5px] my-1" />
                <div className="bg-black w-full h-[5px] my-1" />
                <div className="bg-black w-full h-[5px] my-1" />
              </div>
              <div id="close" className={`${isActive && "hidden"}`}>
                <div className="bg-black w-4/5 h-[5px] my-1 rotate-45 translate-x-[4px] translate-y-[4px]" />
                <div className="bg-black w-4/5 h-[5px] my-1 -rotate-45 translate-x-[3px] -translate-y-[5px]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
