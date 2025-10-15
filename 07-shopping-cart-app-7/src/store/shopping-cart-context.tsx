import { createContext } from "react";
import type { ShoppingCartTypeWithFunctions } from "../Data/Data";

export const CartContext = createContext<ShoppingCartTypeWithFunctions>({
  items: [],
  addItemsToCart: () => {},
});