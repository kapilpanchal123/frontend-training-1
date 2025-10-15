import { createContext, useReducer } from "react";
import type { CartItemType, ShoppingCartAction, ShoppingCartType, ShoppingCartTypeWithFunctions } from "../Data/Data";
import { DUMMY_PRODUCTS } from "../Data/dummy-products";

export const CartContext = createContext<ShoppingCartTypeWithFunctions>({
  items: [],
  addItemsToCart: () => {},
  updateItemQuantity: () => {},
});

type CartContextProviderProps = {
  children: React.ReactNode;
};

const shoppingCartReducer = (state: ShoppingCartType, action: ShoppingCartAction) => {
  if(action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];
      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id.toString(),
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload.id.toString());
        updatedItems.push({
          id: action.payload.id.toString(),
          name: product?.title ?? "",
          price: product?.price ?? 0.0,
          quantity: 1,
        });
      }
      return {
        ...state,
        items: updatedItems,
      };
  };

  if(action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.cart.id,
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  return state;
};

export default function CartContextProvider({ children }: CartContextProviderProps) {

  const [ shoppingCartState, shoppingCartDispatch ] = useReducer(shoppingCartReducer, {
    items: []
  });

  const handleAddItemToCart = (id: string) => {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: {
        id
      },
    });
  };

  const handleUpdateCartItemQuantity = (cart: CartItemType, amount: number) => {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        cart: cart,
        amount: amount
      },
    });
  };

  const ctxValue = {
    items: shoppingCartState.items,
    addItemsToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
};