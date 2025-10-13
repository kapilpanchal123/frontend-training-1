import { useImperativeHandle, useRef, forwardRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  remainingTime: number;
  targetTime: number;
  onReset: () => void;
};

export type ResultModalHandle = {
  open: () => void;
};

const ResultModal = forwardRef<ResultModalHandle, Props>(({ remainingTime, targetTime, onReset }, ref) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - (remainingTime / (targetTime * 1000)))*100);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal();
    }
  }));

  return createPortal(
    <>
      <dialog ref={ dialog } className="result-modal" onClose={onReset}>
        { userLost && <h2>You Lost</h2> }
        { !userLost && <h2>Your Score: {score}</h2> }
        <p>The Target Time was <strong>{ targetTime }</strong> seconds.</p>
        <p>You Stopped the timer with <strong>{ formattedRemainingTime }</strong> seconds left.</p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>
    </>
  , document.getElementById("modal")!);
});

export default ResultModal;




/***
 * 
 * import Toast from './Toast';
import React from 'react';
import ReactDOM, { createPortal } from "react-dom";

function App() {
    const[showToast, setShowToast] = React.useState(false);
    const portalContainer = document.querySelector('body') || document.querySelector('#root');
  function handleEnrol() {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  return ReactDOM.createPortal((
    <>
      <article>
        <h2>React Course</h2>
        <p>A course that teaches you React from the ground up and in great depth!</p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>

      {showToast &&
          <Toast message="Enrolled successfully!" />
      }
    </>
  ), document.querySelector('body'));
}

export default App;
 * 
 */