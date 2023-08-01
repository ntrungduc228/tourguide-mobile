import {Text, View} from 'react-native';
import React from 'react';

type Props = {};

export const ProfileScreen = ({}: Props) => {
  return (
    <View className="h-full aligns-center justify-center">
      <Text className="font-bold text-2xl">Profile</Text>
    </View>
  );
};

export default ProfileScreen;
