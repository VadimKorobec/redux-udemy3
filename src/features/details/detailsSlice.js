import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCountryByName = createAsyncThunk(
  "details/loadCountryByName",
  (name, { extra: { client, api } }) => {
    return client.get(api.searchByCountry(name));
  }
);

export const loadNeighborsByBorder = createAsyncThunk(
  "details/loadNeighborsByBorder",
  (borders, { extra: { client, api } }) => {
    return client.get(api.filterByCode(borders));
  }
);

const initialState = {
  currentCountry: null,
  neighbors: [],
  status: "idle",
  error: null,
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    clearDetails: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state) => {
        return {
          ...state,
          status: "loading",
          error: null,
        };
      })
      .addCase(loadCountryByName.rejected, (state, action) => {
        return {
          ...state,
          status: "rejected",
          error: action.payload || action.meta.error,
        };
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        return {
          ...state,
          status: "received",
          currentCountry: action.payload.data[0],
        };
      })
      .addCase(loadNeighborsByBorder.pending, (state) => {
        return {
          ...state,
          status: "loading",
          error: null,
        };
      })
      .addCase(loadNeighborsByBorder.rejected, (state, action) => {
        return {
          ...state,
          status: "rejected",
          error: action.payload || action.meta.error,
        };
      })
      .addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
        return {
          ...state,
          status: "received",
          neighbors: action.payload.data.map((country) => country.name),
        };
      });
  },
});

export const { clearDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;

export const selectCurrentCountry = (state) => state.details.currentCountry;
export const selectDetails = (state) => state.details;
export const selectNeighbors = (state) => state.details.neighbors;
