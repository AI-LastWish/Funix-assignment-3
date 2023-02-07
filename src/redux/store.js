import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import ReduxLogger from "redux-logger";
import ShowPopupSlice from "./slices/popupSlice";
import UserSlice from "./slices/userSlide.js";
import CartSlice from "./slices/cartSlice";

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(ReduxLogger);

export const store = configureStore({
  // middleware,
  reducer: {
    showPopup: ShowPopupSlice,
    user: UserSlice,
    cart: CartSlice,
  },
});
