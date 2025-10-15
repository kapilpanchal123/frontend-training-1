import { useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import type { CartItemType, ShoppingCartType } from './Data/Data';
import { DUMMY_PRODUCTS } from './Data/dummy-products';
import Product from './component/Product/Product';
import { CartContext } from './store/shopping-cart-context';

function App() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartType> ({
    items: []
  });

  const handleAddItemToCart = (id: string) => {
      setShoppingCart((prevShoppingCart) => {
        const updatedItems = [...prevShoppingCart.items];
        const existingCartItemIndex = updatedItems.findIndex(
          (cartItem) => cartItem.id === id
        );
        const existingCartItem = updatedItems[existingCartItemIndex];
  
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          };
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          const product = DUMMY_PRODUCTS.find((product) => product.id === id);
          updatedItems.push({
            id: id,
            name: product?.title ?? "",
            price: product?.price ?? 0.0,
            quantity: 1,
          });
        }
        return {
          items: updatedItems,
        };
      });
  }

  const handleUpdateCartItemQuantity = (cart: CartItemType, amount: number) => {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === cart.id
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  const ctxValue = {
    items: shoppingCart.items,
    addItemsToCart: handleAddItemToCart
  }

  return (
    <>
      <CartContext.Provider value={ctxValue}>
        <Header cart={shoppingCart} onUpdateCartItemQuantity={handleUpdateCartItemQuantity} />
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
              <li key={product.id}>
                <Product {...product} onAddToCart={handleAddItemToCart} />
              </li>
            ))}
        </Shop>
      </CartContext.Provider>
    </>
  );
};

export default App;