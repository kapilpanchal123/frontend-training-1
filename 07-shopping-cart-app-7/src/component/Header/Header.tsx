import { useContext, useRef } from 'react';
import CartModal from '../CartModal/CartModal';
import type { CartItemType, ShoppingCartType, ShoppingCartTypeWithFunctions } from '../../Data/Data';
import { CartContext } from '../../store/shopping-cart-context';

const Header = () => {
  const { items } = useContext<ShoppingCartTypeWithFunctions>(CartContext);
  const modal = useRef<HTMLDialogElement>(null);
  const cartQuantity = items.length;

  const handleOpenCartClick = () => {
    modal.current?.open();
  };

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({ cartQuantity })</button>
        </p>
      </header>
    </>
  )
};

export default Header;