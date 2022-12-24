import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios/axiosInstance";

export const fetchMovie = createAsyncThunk(
  "movie/fetchMovie",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/");
      const data = response.data;
      console.log(data.data.movies)
      return data.data.movies;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error);
    }
  }
);
