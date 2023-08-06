import {Text, View} from 'react-native';
import React from 'react';
import {TourGuideHome} from '../features/home';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

type HomeProps = {
  navigation: NavigationProp<any, any>;
};

export const HomeScreen = ({}: HomeProps): JSX.Element => {
  return (
    <View className="h-full bg-slate-200 p-3">
      <TourGuideHome />
    </View>
  );
};

export default HomeScreen;
