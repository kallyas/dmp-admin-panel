import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { logout } from "../auth/authSlice";

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();

const loginSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
  }),
  //   overrideExisting: true,
});

export const { useLoginMutation } = loginSlice;
