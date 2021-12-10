import { createSlice } from "@reduxjs/toolkit";
import APIService from "../../config/Api";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
  vendors: [],
};

const vendorSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {
    createVendorRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    createVendorSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    createVendorFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getVendorRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getVendorSuccess: (state, action) => {
      state.isLoading = false;
      state.vendors = action.payload;
    },
    getVendorFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { createVendorRequest, createVendorSuccess, createVendorFailure, getVendorFailure, getVendorRequest, getVendorSuccess } =
  vendorSlice.actions;

export const vendorSelector = (state) => state.vendor;

export const createVendor = (data) => async (dispatch) => {
  try {
    dispatch(createVendorRequest());
    const response = await APIService.postData("/vendor/create", data);
    dispatch(createVendorSuccess(response.data));
  } catch (error) {
    dispatch(createVendorFailure(error));
  }
};

export const fetchVendors = () => async (dispatch) => {
  try {
    dispatch(getVendorRequest());
    const response = await APIService.getData("/vendors");
    dispatch(getVendorSuccess(response.data));
  } catch (error) {
    dispatch(getVendorFailure(error));
  }
};

export default vendorSlice.reducer;
