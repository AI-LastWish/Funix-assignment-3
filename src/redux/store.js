import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import ReduxLogger from "redux-logger";
import ShowPopupSlice from "./slices/popupSlice";

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(ReduxLogger);

export const store = configureStore({
  // middleware,
  reducer: {
    showPopup: ShowPopupSlice,
  },
});
