import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const routesAdapter = createEntityAdapter();

const initialState = routesAdapter.getInitialState();

const routesSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createRoute: builder.mutation({
      query: (data) => ({
        url: "/v1.0/route/create",
        method: "POST",
        body: data,
      }),
    }),
    getRoutes: builder.query({
      query: () => "/v1.0/routes",
    }),
  }),
  overrideExisting: false,
});

export const { useCreateRouteMutation, useGetRoutesQuery } = routesSlice;
