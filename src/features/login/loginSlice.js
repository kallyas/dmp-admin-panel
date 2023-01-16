/* eslint-disable */
import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { logout } from "../auth/authSlice";

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();

const loginSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/admin/login",
        method: "POST",
        body,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      onQueryStarted: (args, { dispatch }) => {
        dispatch(logout());
      },
    }),
    loggedInSessions: builder.query({
      query: () => "/admin/sessions",
    }),
  }),
  //   overrideExisting: true,
});

export const { useLoginMutation, useLogoutUserMutation, useLoggedInSessionsQuery } = loginSlice;
