import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import commentReducer from './slices/commentSlice';
import tourReducer from './slices/tourSlice';

const rootReducer = combineReducers({
  user: userReducer,
  comment: commentReducer,
  tour: tourReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type IRootState = ReturnType<typeof rootReducer>;
