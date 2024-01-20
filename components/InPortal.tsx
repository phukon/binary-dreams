import React, { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

const createWrapperAndAppendToBody = (wrapperId: string) => {
  if (!document) return null;
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

function InPortal({
  children,
  wrapperId,
  onClick,
}: {
  children: React.ReactElement;
  wrapperId: string;
  onClick?: () => void;
}) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    // create and append
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }

    setWrapperElement(element!); // non-null assertion operator
    document.documentElement.classList.add("no-scroll");

    if (onClick && element) {
      element.addEventListener("click", onClick);
    }

    return () => {

      if (onClick && element) {
        element.removeEventListener("click", onClick);
      }

      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
        document.documentElement.classList.remove("no-scroll");
      }
    };
  }, [wrapperId, onClick]);

  if (!wrapperElement) return null;
  return createPortal(children, wrapperElement);
}

export default InPortal;
