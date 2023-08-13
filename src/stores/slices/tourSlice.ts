import {createSlice} from '@reduxjs/toolkit';
import {Tour} from '../../types/tour';
import {Destination} from '../../types/destination';

const initialState: {
  tourId: number | null;
  tour: Tour | null;
  isEnterDestination: boolean;
  isEdit: boolean;
} = {
  tour: null,
  tourId: null,
  isEnterDestination: false,
  isEdit: false,
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
    setIsEnterDestination: (state, action): void => {
      console.log('checkcc', action.payload);
      state.isEnterDestination = action.payload;
    },
    setIsEdit: (state, action): void => {
      state.isEdit = action.payload;
    },
  },
});

export const {setTour, setTourId, setIsEnterDestination, setIsEdit} =
  tourSlice.actions;

const tourReducer = tourSlice.reducer;
export default tourReducer;
