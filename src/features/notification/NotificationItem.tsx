import {View, Text, Image} from 'react-native';
import React from 'react';
import {Notification} from '../../types/notification';

type NotiItemProps = {
  notification: Notification;
};

export const NotificationItem = ({notification}: NotiItemProps) => {
  return (
    <View className="w-full border-b-0.5 border-slate-300 p-4">
      <View className="flex-row items-center px-2">
        <Image
          source={{
            uri:
              notification?.creater?.avatar ||
              'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
          }}
          className="h-[40] w-[40] rounded-full mr-2"
        />
        <View className="flex-1">
          <Text className="text-md text-black break-all">
            <Text className="font-bold">{notification?.creater?.fullName}</Text>{' '}
            {notification?.content}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationItem;
