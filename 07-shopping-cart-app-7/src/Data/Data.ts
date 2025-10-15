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
}