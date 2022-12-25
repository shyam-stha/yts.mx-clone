import { createSlice } from "@reduxjs/toolkit";
import {
  fetchMovie,
  fetchUpcommingMovie,
  fetchSuggestedMovie,
} from "../../app/actions/fetchMovie";

const initialState = {
  isLoading: false,
  error: "",
  movie: [],
  upCommingMovie: [],
  suggestedMovie: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movie = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchUpcommingMovie.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUpcommingMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.upCommingMovie = action.payload;
      })
      .addCase(fetchUpcommingMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchSuggestedMovie.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchSuggestedMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.suggestedMovie = action.payload;
      })
      .addCase(fetchSuggestedMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default movieSlice.reducer;
