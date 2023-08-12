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

  let children: JSX.Element = <></>;
  if (user && verifyTourist(user?.role)) {
    children = <TouristHome />;
  } else {
    children = <TourGuideHome />;
  }

  return (
    <View className="h-full bg-slate-200">
      <View className="absolute bg-cyan-500 -top-8 h-[300] rounded-3xl w-full" />
      {children}
    </View>
  );
};

export default HomeScreen;
