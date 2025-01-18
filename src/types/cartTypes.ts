import { CartProduct } from "./cartProduct";
import { Product } from "./product";

export type CartState = {
  products: CartProduct[];
  total: number;
};

export type CartActions = {
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  incQty: (productId: number) => void;
  decQty: (productId: number) => void;
  getProductById: (productId: number) => CartProduct | undefined;
  setTotal: (total: number) => void;
  reset: () => void;
};

export type CartSlice = CartState & CartActions;
