import { useImperativeHandle, useRef, forwardRef } from "react";

type Props = {
  result: string;
  targetTime: number;
};

export type ResultModalHandle = {
  open: () => void;
};

const ResultModal = forwardRef<ResultModalHandle, Props>(({ result, targetTime }, ref) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal();
    }
  }));

  return (
    <>
      <dialog ref={dialog} className="result-modal">
        <h2>
          You {result}
        </h2>
        <p>The Target Time was <strong>{targetTime}</strong> seconds.</p>
        <p>You Stopped the timer with <strong>{targetTime}</strong> seconds left.</p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
});

export default ResultModal;