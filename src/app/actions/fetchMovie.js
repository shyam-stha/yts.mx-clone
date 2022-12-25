import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios/axiosInstance";

export const fetchMovie = createAsyncThunk(
  "movie/fetchMovie",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/list_movies.json");
      const data = response.data;
      console.log(data.data.movies);
      return data.data.movies;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchUpcommingMovie = createAsyncThunk(
  "movie/fetchUpcommingMovie",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/list_upcoming.json");
      const data = response.data;
      console.log(data.data.movies);
      return data.data.movies;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error);
    }
  }
);
