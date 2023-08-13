import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import commentReducer from './slices/commentSlice';
import tourReducer from './slices/tourSlice';
import appointmentReducer from './slices/appointmentSlice';
import socketReducer from './slices/socketSlice';

const rootReducer = combineReducers({
  user: userReducer,
  comment: commentReducer,
  tour: tourReducer,
  appointment: appointmentReducer,
  socket: socketReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type IRootState = ReturnType<typeof rootReducer>;
