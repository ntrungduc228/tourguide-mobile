import {Text, View} from 'react-native';
import React from 'react';
import {NotificationList} from '../features/notification';

type Props = {};

export const NotificationScreen = ({}: Props) => {
  return (
    <View className="h-full w-full bg-white">
      <Text className="font-bold border-b-0.5 border-[#DEDEDE] p-3 text-lg text-black">
        Thông báo
      </Text>
      <View>
        <NotificationList />
      </View>
    </View>
  );
};

export default NotificationScreen;
