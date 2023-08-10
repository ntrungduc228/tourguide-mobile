import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../types/user';

const initialState: {
  loading: boolean;
  data: {
    info: User | null;
    accessToken: null | string;
    isLogin: boolean;
  };
  error: undefined | string;
} = {
  loading: false,
  data: {
    info: null,
    accessToken: null,
    isLogin: false,
  },
  error: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action): void => {
      state.data.info = action.payload;
      state.data.isLogin = true;
      AsyncStorage.mergeItem(
        'user',
        JSON.stringify({
          info: state.data.info,
        }),
      );
    },
    updateUserInfo: (state, action): void => {
      state.data.info = {...(state.data.info as any), ...action.payload};
      AsyncStorage.mergeItem(
        'user',
        JSON.stringify({
          info: state.data.info,
        }),
      );
    },
    setAccessToken: (state, action): void => {
      console.log('action ', action);
      state.data.accessToken = action.payload?.accessToken;
      state.data.isLogin = true;
      try {
        AsyncStorage.setItem(
          'user',
          JSON.stringify({
            accessToken: action.payload?.accessToken,
          }),
        );
        console.log('sett accessToken');
      } catch (err) {
        console.log('sdfsd', err);
      }
    },
    logout: (state): void => {
      state.data.isLogin = false;
      state.data.info = null;
      state.data.accessToken = null;
      AsyncStorage.removeItem('user');
    },
  },
});

export const {setUser, setAccessToken, logout, updateUserInfo} =
  userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
