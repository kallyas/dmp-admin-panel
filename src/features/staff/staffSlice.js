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
      providesTags: (result, error, arg) => [
        ...result.map(({ id }) => ({ type: "User", id })),
        { type: "User", id: "LIST" },
      ],
    }),
    deleteStaff: builder.mutation({
      query: (id) => ({
        url: `/v1.0/user/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "User", id }], // (result, error, arg
    }),
    getStaff: builder.query({
      query: (id) => `/v1.0/user/${id}`,
    }),
    updateStaff: builder.mutation({
      query: (data) => ({
        url: `/v1.0/user/${data.id}/update`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, data) => [{ type: "User", id: data.id }], // (result, error, arg
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateStaffMutation,
  useGetStaffsQuery,
  useDeleteStaffMutation,
  useGetStaffQuery,
  useUpdateStaffMutation,
} = staffSlice;
