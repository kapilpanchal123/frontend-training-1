import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { ResultModalHandle } from '../Data';

type Props = {
  children?: React.ReactNode;
  buttonTitle: string;
};

const Modal = forwardRef<ResultModalHandle, Props>(({ children, buttonTitle }, ref) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal();
    }
  }));

  return createPortal(
    <>
      <dialog ref={ dialog }>
        { children }
        <form method="dialog">
          <button>{ buttonTitle }</button>
        </form>
      </dialog>
    </>, document.getElementById("modal-root")!
  )
});

export default Modal;