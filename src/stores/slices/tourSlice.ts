import {createSlice} from '@reduxjs/toolkit';
import {Tour} from '../../types/tour';

const initialState: {
  tourId: number | null;
  tour: Tour | null;
} = {
  tour: null,
  tourId: null,
};

const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    setTour: (state, action): void => {
      state.tour = action.payload;
    },
    setTourId: (state, action): void => {
      state.tourId = action.payload;
    },
  },
});

export const {setTour, setTourId} = tourSlice.actions;

const tourReducer = tourSlice.reducer;
export default tourReducer;
