import {Text, View} from 'react-native';
import React from 'react';

type Props = {};

export const HomeScreen = ({}: Props) => {
  return (
    <View className="h-full aligns-center justify-center">
      <Text className="font-bold text-2xl">Home</Text>
    </View>
  );
};

export default HomeScreen;
