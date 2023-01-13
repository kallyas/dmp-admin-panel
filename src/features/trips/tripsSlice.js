import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const tripsAdapter = createEntityAdapter();

const initialState = tripsAdapter.getInitialState();

export const tripsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrips: builder.query({
      query: () => "/trips",
    }),
  }),
  overrideExisting: false,
});

export const { useGetTripsQuery } = tripsSlice;
