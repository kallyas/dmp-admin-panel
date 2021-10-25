import { createSlice } from '@reduxjs/toolkit';
import axios from'../../config/axios';
const axiosInstance = axios.initiate();
// import { postData } from '../../api/index';

export const userSlice=  createSlice({
    name: 'user',
    initialState: {
        data: null,
        error: null
    },
    reducers: {
        loginSuccess: (state, action) => {
            console.log(action, state)
            state.data = action.payload
        },
        loginError: (state, action) => {
            state.error = action.payload
        }
    }
});

export const { loginSuccess, loginError } = userSlice.actions;

export const signin = userDetails => async dispatch => {
    // perform the login
    try {
        // success
        const response =  await axiosInstance.post('/login', userDetails);
        console.log(response);
        dispatch(loginSuccess(response.data))
    } catch(error) {
        // error occured
        console.log(error);
        dispatch(loginError(error));
    }
  };

  export default userSlice.reducer;