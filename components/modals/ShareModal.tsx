import { useSetAtom } from "jotai";
import { uiAtom } from "@/state/State";
import InPortal from "../InPortal";

const ShareModal = () => {
  const setUi = useSetAtom(uiAtom);
  return (
    <InPortal wrapperId="idkmaybe">
      <div className="modal">
        <div className="modal-content">
          <button
            onClick={() =>
              setUi((prev) => ({
                ...prev,
                modal: false,
              }))
            }
          >
            &times;
          </button>
          <h2>Prologue</h2>
          <p>
            The FitnessGram Pacer Test is a multistage aerobic capacity test
            that progressively gets more difficult as it continues. The running
            speed starts slowly, but gets faster each minute after you hear this
            signal.
          </p>
        </div>
      </div>
    </InPortal>
  );
};
export default ShareModal;
