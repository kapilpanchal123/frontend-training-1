import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
}

const Modal = forwardRef(({children}: Props, ref) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current?.showModal();
      },
      close: () => {
        dialog.current?.close();
      }
    }
  });

  return createPortal(
    <dialog className="modal" ref={dialog}>{children}</dialog>, 
      document.getElementById("modal")!
  )
});

export default Modal;