import { createSlice } from "@reduxjs/toolkit";
import APIService from "../../config/Api";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    createStaffRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    createStaffSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    createStaffFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getStaffRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getStaffSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getStaffFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  createStaffRequest,
  createStaffSuccess,
  createStaffFailure,
  getStaffFailure,
  getStaffRequest,
  getStaffSuccess,
} = staffSlice.actions;

export const staffSelector = (state) => state.staff;

export const createStaff = (data) => async (dispatch) => {
  try {
    dispatch(createStaffRequest());
    const response = await APIService.postData("/user/create", data);
    dispatch(createStaffSuccess(response.data));
  } catch (error) {
    dispatch(createStaffFailure(error));
  }
};

export const getStaff = () => async (dispatch) => {
  try {
    dispatch(getStaffRequest());
    const response = await APIService.getData("/users");
    dispatch(getStaffSuccess(response.data));
  } catch (error) {
    dispatch(getStaffFailure(error));
  }
};

export default staffSlice.reducer;
