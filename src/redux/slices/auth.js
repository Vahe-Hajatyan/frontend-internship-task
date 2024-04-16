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
      if (
        action.payload.email === "user@gmail.com" &&
        action.payload.pas === "password"
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
  },
});
export const authReducer = authSlice.reducer;
export const { login , signup } = authSlice.actions;
