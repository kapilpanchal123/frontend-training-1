import { forwardRef, useImperativeHandle, useRef, type JSX } from 'react';
import { createPortal } from 'react-dom';
import Cart from '../Cart/Cart';

type Props = {
  title: string;
  actions: JSX.Element;
}

const CartModal = forwardRef(function Modal({ title, actions }: Props, ref) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current?.showModal();
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')!
  );
});

export default CartModal;