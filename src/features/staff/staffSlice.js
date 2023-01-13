/* eslint-disable */
import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const staffAdapter = createEntityAdapter();

const initialState = staffAdapter.getInitialState();

export const staffSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createStaff: builder.mutation({
      query: (data) => ({
        url: "/v1.0/user/create",
        method: "POST",
        body: data,
      }),
    }),
    getStaffs: builder.query({
      query: () => "/v1.0/users",
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateStaffMutation,
  useGetStaffsQuery,
} = staffSlice;
