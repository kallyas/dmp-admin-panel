import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/login/userSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
});
