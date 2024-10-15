import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { TProductState, TProductWithQuantity } from "../types";
import {
  getFromLocalStorage,
  setIntoLocalStorage,
} from "../utils/localStorage";

const initialState: TProductState = {
  cart: JSON.parse(localStorage.getItem("cart") as string) || [],
  parsedProduct: [] as TProductWithQuantity[] | null,
  quantity: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductInCart: (state, action) => {
      const isExistProduct = state.cart?.find(
        (item) => item.product.id === action.payload.id
      );

      if (!isExistProduct) {
        state.cart?.push({ product: action.payload, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(state.cart));
        toast.success("successfully product add on cart");
      } else {
        toast.info("Product is already exist");
      }
    },

    setParsedProduct: (state, action) => {
      state.parsedProduct = action.payload;
    },

    removeProductFromCart: (state, action) => {
      const data = getFromLocalStorage("cart");

      const findItem = data.filter(
        (item: TProductWithQuantity) => item.product.id !== action.payload
      );

      setIntoLocalStorage("cart", findItem);
    },

    setQuantity: (state, action) => {
      const cart = getFromLocalStorage("cart");

      const productIndex = cart.findIndex(
        (item: TProductWithQuantity) => item.product.id === action.payload
      );

      if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
        state.cart = cart;

        setIntoLocalStorage("cart", cart);

        toast.success(
          `Updated quantity for ${cart[productIndex].product.title}`
        );
      }
    },

    decreaseQuantity: (state, action) => {
      const cart = getFromLocalStorage("cart");

      const productIndex = cart.findIndex(
        (item: TProductWithQuantity) => item.product.id === action.payload
      );

      if (productIndex !== -1) {
        cart[productIndex].quantity -= 1;
        state.cart = cart;

        setIntoLocalStorage("cart", cart);

        toast.success(
          `Updated quantity for ${cart[productIndex].product.title}`
        );
      }
    },
  },
});

export const {
  setProductInCart,
  setParsedProduct,
  removeProductFromCart,
  setQuantity,
  decreaseQuantity,
} = productSlice.actions;
export default productSlice.reducer;
