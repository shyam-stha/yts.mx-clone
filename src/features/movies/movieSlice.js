import { createSlice } from "@reduxjs/toolkit";
import {
  fetchMovie,
  fetchUpcommingMovie,
  fetchSuggestedMovie,
  fetchSelectedMovie,
} from "../../app/actions/fetchMovie";

const initialState = {
  isLoading: false,
  error: "",
  movie: [],
  upCommingMovie: [],
  suggestedMovie: [],
  selectedMovieId: null,
  selectedMovie: {},
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    movieSelected(state, action) {
      state.selectedMovieId = action.payload;
    },
  },
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
      })
      .addCase(fetchSelectedMovie.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchSelectedMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedMovie = action.payload;
      })
      .addCase(fetchSelectedMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { movieSelected } = movieSlice.actions;
export default movieSlice.reducer;
