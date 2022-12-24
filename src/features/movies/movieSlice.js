import { createSlice } from "@reduxjs/toolkit";
import { fetchMovie } from "../../app/actions/fetchMovie";

const initialState = {
  isLoading: false,
  error: "",
  movie: [],
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
        state.isLoading =false;
        state.error = action.payload;
      });
  },
});

export default movieSlice.reducer;
