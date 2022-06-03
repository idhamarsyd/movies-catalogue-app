import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovie = createAsyncThunk(
  "movie/fetchMovie",
  async (keyword) => {
    const res = await axios.get(
      `http://www.omdbapi.com/?s=${keyword}&apikey=32de02a1`
    );
    const formatRes = await res.data.Search;
    console.log(formatRes);
    return formatRes;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    data: [],
    loadingState: false,
  },
  reducers: {},
  extraReducers: {
    [fetchMovie.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loadingState = false;
    },
    [fetchMovie.pending]: (state) => {
      state.loadingState = true;
    },
  },
});

// export const { showLoading } = newsSlice.actions;

export default movieSlice.reducer;
