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
}: {
  children: React.ReactElement;
  wrapperId: string;
}) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    let systemCreated = false
    // create and append
    if(!element) {
      systemCreated = true
      element = createWrapperAndAppendToBody(wrapperId)
    }
    setWrapperElement(element!) // non-null assertion operator

    return () => {
      // delete the created element programatically
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [wrapperId])

  if (!wrapperElement) return null
  return createPortal(children, wrapperElement)
}

export default InPortal;
