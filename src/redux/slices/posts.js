import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("auth/fetchPosts", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  data.length = 20;
  return data;
});
export const fetchComment = createAsyncThunk("auth/fetchComment", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );

  data.length = 20;
  return data;
});
export const fetchImages = createAsyncThunk("auth/fetchImages", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );
  data.length = 20;
  return data;
});

const initialState = {
  data: null,
  status: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchComment.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchComment.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchComment.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchImages.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchImages.rejected, (state) => {
        state.data = "rejected";
      });
  },
});

export const postReducer = postsSlice.reducer;
