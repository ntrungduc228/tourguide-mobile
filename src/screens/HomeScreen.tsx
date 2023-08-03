import {Text, View} from 'react-native';
import React from 'react';

type Props = {};

export const HomeScreen = ({}: Props): JSX.Element => {
  return (
    <View className="h-full aligns-center justify-center">
      <Text className="font-bold text-2xl text-red-600">Home</Text>
    </View>
  );
};

export default HomeScreen;
