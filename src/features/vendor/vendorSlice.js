/* eslint-disable */
import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const vendorAdapter = createEntityAdapter();

const initialState = vendorAdapter.getInitialState();

export const vendorSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createVendor: builder.mutation({
      query: (data) => ({
        url: "/v1.0/vendor/create",
        method: "POST",
        body: data,
      }),
    }),
    getVendors: builder.query({
      query: () => "/v1.0/vendors",
    }),
  }),
  overrideExisting: false,
});

export const { useCreateVendorMutation, useGetVendorsQuery } = vendorSlice;
