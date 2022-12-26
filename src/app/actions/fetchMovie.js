import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios/axiosInstance";

export const fetchMovie = createAsyncThunk(
  "movie/fetchMovie",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/list_movies.json?page=2");
      const data = response.data;
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
      return data.data.movies;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchSuggestedMovie = createAsyncThunk(
  "movie/fetchSuggestedMovie",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/movie_suggestions.json?movie_id=10");
      const data = response.data;
      return data.data.movies;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchSelectedMovie = createAsyncThunk(
  "movie/fetchSelectedMovie",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`);
      const data = response.data;
      return data.data.movie;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error);
    }
  }
);
