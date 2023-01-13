import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authSlice } from "../auth/authSlice";
import { Mutex } from "async-mutex";

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  },
});

const baseQueryWithRetry = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (
    result?.error &&
    result?.error?.status === 401 &&
    result?.error?.data?.message === "Token has expired"
  ) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const { getState } = api;
        const refreshToken = getState().auth.refreshToken;
        //  add refresh token to headers
        const headers = new Headers();
        headers.set("Authorization", `Bearer ${refreshToken}`);
        const refreshResult = await baseQuery(
          { url: "/refresh", method: "POST", headers },
          api,
          extraOptions
        );
        if (refreshResult?.data) {
          // update access token in store
          api.dispatch(authSlice.actions.setToken(refreshResult.data));
          // retry original request
          result = await baseQuery(args, api, extraOptions);
        } else {
          // refresh token expired
          api.dispatch(authSlice.actions.logout());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithRetry,
  endpoints: (builder) => ({}),
  tagTypes: ["User"],
});
