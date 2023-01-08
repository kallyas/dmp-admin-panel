import { createSlice } from "@reduxjs/toolkit";
// import APIService from "../../config/Api";
import axios from "../../config/axios"
const axiosInstance = axios.initiate();

const initialState = {
  isLoggedIn: false,
  loading: false,
  user: {},
  error: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest: (state, action) => {
      state.isLoggedIn = false;
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;

export const loginSelector = (state) => state.login;

export const loginUser = (data) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axiosInstance.post("/login", { username: data.email, password: data.password });
    //save token to local storage
    localStorage.setItem("DPMAccessToken", response.data?.access_token);
    localStorage.setItem("DPMRefreshToken", response.data?.refresh_token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(loginFailure(error));
  }
};

export const logoutUser = () => async (dispatch) => {
  //remove token from local storage
  localStorage.removeItem("DPMAccessToken");
  localStorage.removeItem("DPMRefreshToken");
  dispatch(loginFailure());
}

export default loginSlice.reducer;
