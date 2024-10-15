import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { TProductState, TProductWithQuantity } from "../types";

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

    setQuantity: (state, action) => {
      const cart = localStorage.getItem("cart");
      let parseCart;
      if (cart) {
        parseCart = JSON.parse(cart);
      }

      const productIndex = parseCart.findIndex(
        (item: TProductWithQuantity) => item.product.id === action.payload
      );

      if (productIndex !== -1) {
        parseCart[productIndex].quantity += 1;
        state.cart = parseCart;

        localStorage.setItem("cart", JSON.stringify(parseCart));

        toast.success(
          `Updated quantity for ${parseCart[productIndex].product.title}`
        );
      }
    },


  },
});

export const {
  setProductInCart,
  setParsedProduct,
  setQuantity,
  
} = productSlice.actions;
export default productSlice.reducer;
