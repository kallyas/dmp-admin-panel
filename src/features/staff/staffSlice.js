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
    deleteStaff: builder.mutation({
      query: (id) => ({
        url: `/v1.0/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    getStaff: builder.query({
      query: (id) => `/v1.0/user/${id}`,
    }),
    updateStaff: builder.mutation({
      query: (data) => ({
        url: `/v1.0/user/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateStaffMutation,
  useGetStaffsQuery,
  useDeleteStaffMutation,
  useGetStaffQuery,
} = staffSlice;
