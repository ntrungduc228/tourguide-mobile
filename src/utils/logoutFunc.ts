import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from '../stores/';
import {logout} from '../stores/slices/userSlice';

export const logoutFunc = async () => {
  const user = await AsyncStorage.getItem('user');
  const data = user ? JSON.parse(user) : null;
  if (!data) {
    return null;
  }

  store.dispatch(logout());
};
