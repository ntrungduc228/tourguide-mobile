import {Text, View} from 'react-native';
import React from 'react';
import {TourGuideHome, TouristHome} from '../features/home';
import {NavigationProp} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {IRootState} from '../stores';
import {ROLE} from '../types/user';
import {verifyTourist} from '../utils/verifyRole';

type HomeProps = {
  navigation: NavigationProp<any, any>;
};

export const HomeScreen = ({}: HomeProps): JSX.Element => {
  const user = useSelector((state: IRootState) => state.user.data.info);

  if (user && verifyTourist(user?.role)) {
    return (
      <View className="h-full bg-slate-200 p-3">
        <TouristHome />
      </View>
    );
  }

  return (
    <View className="h-full bg-slate-200 p-3">
      <TourGuideHome />
    </View>
  );
};

export default HomeScreen;
