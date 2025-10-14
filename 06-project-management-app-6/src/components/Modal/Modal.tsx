import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { ResultModalHandle } from '../Data';
import Button from '../Button/Button';

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
      <dialog ref={ dialog } className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md ">
        { children }
        <form method="dialog" className="mt-4 text-right ">
          <Button>{ buttonTitle }</Button>
        </form>
      </dialog>
    </>, document.getElementById("modal-root")!
  )
});

export default Modal;