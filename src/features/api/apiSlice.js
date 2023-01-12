import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authSlice } from "../auth/authSlice";

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
  try {
    return await baseQuery(args, api, extraOptions);
  } catch (error) {
    if (error.status === 401 && error.data?.message === "Token expired") {
      //   refresh token and retry the request
      const { dispatch, getState } = api;
      const { data } = await api.util.fetchBaseQuery(
        `${import.meta.env.VITE_API_URL}/auth/refresh-token`,
        {
          method: "POST",
          body: JSON.stringify({ token: getState().auth.refreshToken }),
        },
        { refetchOnReconnect: false, refetchOnFocus: false }
      );
      //   update the token in the store
      dispatch(authSlice.actions.setToken(data.token));
      //   retry the request
      return await baseQuery(args, api, extraOptions);
    }
    throw error;
  }
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithRetry,
  endpoints: builder => ({}),
  tagTypes: ["User"],
});
