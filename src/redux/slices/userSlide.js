import { createSlice } from "@reduxjs/toolkit";
import { CURRENT_USER } from "../../constants/localStorage";

const defaultUser = {
  name: "",
  email: "",
  password: "",
  phone: "",
};

const initialState = {
  user: JSON.parse(localStorage.getItem(CURRENT_USER)) ?? defaultUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      localStorage.setItem(CURRENT_USER, JSON.stringify(action.payload));
    },
    logout(state, _) {
      state.user = defaultUser;
      localStorage.setItem(CURRENT_USER, JSON.stringify(defaultUser));
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
