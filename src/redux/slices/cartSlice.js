import { createSlice } from "@reduxjs/toolkit";
import { CART } from "../../constants/localStorage";

const initialState = {
  cart: JSON.parse(localStorage.getItem(CART)) ?? [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const id = action.payload?._id?.["$oid"];
      const quantity = action.payload.quantity;
      const selected = state.cart.find((x) => x?._id?.["$oid"] === id);
      if (!selected) {
        const newCart = [...state.cart];
        newCart.push(action.payload);
        state.cart = newCart;
      } else {
        state.cart.find((x) => x?._id?.["$oid"] === id).quantity =
          selected.quantity + quantity;
      }
      localStorage.setItem(CART, JSON.stringify(state.cart));
    },
    updateCart(state, action) {
      const id = action.payload?._id?.["$oid"];
      const quantity = action.payload.quantity;
      state.cart.find((x) => x?._id?.["$oid"] === id).quantity = quantity;
      localStorage.setItem(CART, JSON.stringify(state.cart));
    },
    deleteCart(state, action) {
      const id = action.payload;
      const newCart = state.cart.filter((x) => x?._id?.["$oid"] !== id);
      state.cart = newCart;
      localStorage.setItem(CART, JSON.stringify(state.cart));
    },
  },
});

export const { addCart, updateCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
