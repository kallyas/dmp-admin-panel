import { createSlice } from "@reduxjs/toolkit";
import APIService from "../../config/Api";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    createRouteRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    createRouteSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    createRouteFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getRoutesRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getRoutesSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getRoutesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  createRouteRequest,
  createRouteSuccess,
  createRouteFailure,
  getRoutesFailure,
  getRoutesRequest,
  getRoutesSuccess,
} = routesSlice.actions;

export const routesSelector = (state) => state.routes;

export const createRoute = (data) => async (dispatch) => {
  try {
    dispatch(createRouteRequest());
    const response = await APIService.postData("/route/create", data);
    dispatch(createRouteSuccess(response.data));
  } catch (error) {
    dispatch(createRouteFailure(error));
  }
};

export const getRoutes = () => async (dispatch) => {
  try {
    dispatch(getRoutesRequest());
    const response = await APIService.getData("/routes");
    dispatch(getRoutesSuccess(response.data));
  } catch (error) {
    dispatch(getRoutesFailure(error));
  }
};

export default routesSlice.reducer;
