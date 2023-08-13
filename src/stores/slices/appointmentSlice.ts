import {createSlice} from '@reduxjs/toolkit';
import {Appointment} from '../../types/appointment';

const initialState: {
  appointment: Appointment | null;
  isEdit: boolean;
} = {
  appointment: null,
  isEdit: false,
};

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    setAppointment: (state, action): void => {
      state.appointment = action.payload;
    },

    setIsEdit: (state, action): void => {
      state.isEdit = action.payload;
    },
  },
});

export const {setAppointment, setIsEdit} = appointmentSlice.actions;

const appointmentReducer = appointmentSlice.reducer;
export default appointmentReducer;
