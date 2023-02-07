import { createSlice } from "@reduxjs/toolkit";
import { CART } from "../../constants/localStorage";

const initialState = {
  cart: JSON.parse(localStorage.getItem(CART)) ?? {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const id = Object.keys(action.payload);
      const quantity = Object.values(action.payload);
      const newQuantity = +state.cart[id] ? +state.cart[id] + +quantity : +quantity;
      const newCart = { ...state.cart, [id]: newQuantity };
      state.cart = newCart;
      localStorage.setItem(CART, JSON.stringify(newCart));
    },
    updateCart(state, action) {
      state.cart = action.payload;
      localStorage.setItem(CART, JSON.stringify(action.payload));
    },
    deleteCart(state, action) {
      const newCart = {...state.cart}
      delete newCart[action.payload]
      state.cart = newCart
      localStorage.setItem(CART, JSON.stringify(newCart));
    },
  },
});

export const { addCart, updateCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
