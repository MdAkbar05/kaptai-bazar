import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_URL;

// Async thunk to fetchMediaReview
export const fetchMediaReview = createAsyncThunk(
  "mediaReviews/fetchMediaReview",
  async () => {
    const response = await axios.get(`${baseUrl}/api/mediaReview`);
    return response.data;
  }
);

// Async thunk to createMediaReview
export const createMediaReview = createAsyncThunk(
  "mediaReviews/createMediaReview",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/mediaReview`,
        data,

        { withCredentials: true }
      );

      return response?.data || response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to deleteMediaReview
export const deleteMediaReview = createAsyncThunk(
  "mediaReviews/deleteMediaReview",
  async (id) => {
    const response = await axios.delete(`${baseUrl}/api/mediaReview/${id}`);

    return response.data;
  }
);

const mediaReviewSlice = createSlice({
  name: "mediaReviews",
  initialState: {
    mediaReviews: [],
    isloading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // fetching media review
    builder
      .addCase(fetchMediaReview.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchMediaReview.fulfilled, (state, action) => {
        state.isloading = false;
        state.mediaReviews = action.payload.reviews;
      })
      .addCase(fetchMediaReview.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload.message;
      })
      // creating a review
      .addCase(createMediaReview.pending, (state) => {
        state.isloading = true;
      })
      .addCase(createMediaReview.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.mediaReviews.push(action.payload.review);
      })
      .addCase(createMediaReview.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload?.message;
      })
      .addCase(deleteMediaReview.fulfilled, (state, action) => {
        state.mediaReviews = state.mediaReviews.filter(
          (r) => r?._id !== action.payload.mediaReview._id
        );
      });
  },
});

export default mediaReviewSlice.reducer;
