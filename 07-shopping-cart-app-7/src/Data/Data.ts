export type ProductDataType = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

export type CartItemType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type ShoppingCartType = {
  items: CartItemType[];
};

export type ShoppingCartTypeWithFunctions = ShoppingCartType & {
  addItemsToCart: (id: string) => void;
  updateItemQuantity: (cart: CartItemType, amount: number) => void;
};

export type ShoppingCartAction =
  { type: 'ADD_ITEM'; payload: {id: string} }
  | { type: 'UPDATE_ITEM'; payload: { cart: CartItemType, amount: number } }
  | { type: 'CLEAR_CART' };