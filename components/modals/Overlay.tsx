// import { createPortal } from "react-dom";
// import { useEffect, useRef } from "react";
// import ShareModal from "./ShareModal";

// import { useAtomValue } from "jotai";
// import { uiAtom } from "@/state/State";

// const Overlay = () => {
//   const ref = useRef<HTMLElement | null>(null);
//   ref.current = document.getElementById("outPortal");
//   const ui = useAtomValue(uiAtom);

//   useEffect(() => {
//     if (ref.current) {
//       if (ui.modal) {
//         document.documentElement.classList.add("no-scroll");
//       } else {
//         document.documentElement.classList.remove("no-scroll");
//       }
//     }
//   }, [ui.modal]);

//   return createPortal(
//     <>{ui.modal && <ShareModal />}</>,
//     ref.current as HTMLElement
//   );
// };
// export default Overlay;
