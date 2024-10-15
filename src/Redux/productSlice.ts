import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../types";
import { toast } from "sonner";

export type TProductState = {
  cart: TProduct[] | null;
};

const initialState: TProductState = {
  cart: JSON.parse(localStorage.getItem("cart") as string) || [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductInCart: (state, action) => {
      const isExistProduct = state.cart?.find(
        (product) => product.id === action.payload.id
      );

      if (!isExistProduct) {
        state.cart?.push(action.payload);
        localStorage.setItem("cart", JSON.stringify(state.cart));
        toast.success("successfully product add on cart");
      } else {
        toast.info("Product is already exist");
      }
    },
  },
});

export const { setProductInCart } = productSlice.actions;
export default productSlice.reducer;
