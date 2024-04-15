import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});
export const authReducer = authSlice.reducer;
