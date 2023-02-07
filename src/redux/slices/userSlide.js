import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.email = action.payload;
    },
    logout(state, _) {
      state.email = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
