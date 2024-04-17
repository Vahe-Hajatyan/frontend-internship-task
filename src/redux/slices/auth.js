import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  status: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      let data = localStorage.getItem(action.payload.email);
      data = JSON.parse(data);
      if (
        data &&
        data.email === action.payload.email &&
        data.pas === action.payload.pas
      ) {
        state.data = action.payload;
        state.status = true;
      } else {
        state.data = null;
        state.status = "notSuccessful";
      }
    },
    signup(state, action) {
      state.data = action.payload;
      state.status = "successful";
    },
    logout(state) {
      state.data = null;
      state.status = "";
    },
  },
});
export const authReducer = authSlice.reducer;
export const { login, signup, logout } = authSlice.actions;
