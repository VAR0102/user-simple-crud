
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import { thunk } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

