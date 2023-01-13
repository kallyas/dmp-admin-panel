import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: localStorage.getItem("accessToken") ?? null,
    refreshToken: localStorage.getItem("refreshToken") ?? null,
  },
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
      state.regionName = action.payload.regionName;
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      localStorage.setItem("regionName", action.payload.regionName);
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.regionName = null;
      localStorage.clear();
    },
  },
});

export const { setToken, logout } = authSlice.actions;
export const selectAccessToken = (state) => state.auth.accessToken;
export const selectRefreshToken = (state) => state.auth.refreshToken;
export const selectRegionName = (state) => state.auth.regionName;

export default authSlice.reducer;
