import { createSlice } from '@reduxjs/toolkit';
import APIService from "../../config/Api";

const initialState = {
    trips: [],
    loading: false,
    error: null,
};

const tripsSlice = createSlice({
    name: 'trips',
    initialState,
    reducers: {
        tripsRequest: (state) => {
            state.loading = true;
        },
        tripsSuccess: (state, action) => {
            state.trips = action.payload;
            state.loading = false;
        },
        tripsFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { tripsRequest, tripsSuccess, tripsFailure } = tripsSlice.actions;

export const tripsSelector = state => state.trips;

export const fetchTrips = () => async dispatch => {
    dispatch(tripsRequest());
    try {
        const response = await APIService.getData('/trips');
        dispatch(tripsSuccess(response.data));
    } catch (error) {
        dispatch(tripsFailure(error));
    }
}

export default tripsSlice.reducer;