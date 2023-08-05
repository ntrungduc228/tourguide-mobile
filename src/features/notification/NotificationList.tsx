import {View, Text, FlatList} from 'react-native';
import React from 'react';
import NotificationItem from './NotificationItem';
import {Notification} from '../../types/notification';
import {User} from '../../types/user';

type NotiListProps = {};

const user: User = {
  id: 8,
  fullName: 'Nguyen Thi Khanh Vi',
  avatar:
    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
  phone: '555-555-5555',
};

const notifications: Notification[] = [
  {
    id: 1,
    content: 'da thich binh luan cuar ban',
    createrId: 8,
    member: [],
    creater: user,
  },
  {
    id: 2,
    content: 'da thich binh luan cuar ban',
    createrId: 8,
    member: [],
    creater: user,
  },
  {
    id: 3,
    content: 'da thich binh luan cuar ban',
    createrId: 8,
    member: [],
    creater: user,
  },
  {
    id: 4,
    content: 'da thich binh luan cuar ban',
    createrId: 8,
    member: [],
    creater: user,
  },
  {
    id: 5,
    content: 'da thich binh luan cuar ban',
    createrId: 8,
    member: [],
    creater: user,
  },
  {
    id: 6,
    content: 'da thich binh luan cuar ban',
    createrId: 8,
    member: [],
    creater: user,
  },
  {
    id: 7,
    content: 'da thich binh luan cuar ban',
    createrId: 8,
    member: [],
    creater: user,
  },
  {
    id: 8,
    content: 'da thich binh luan cuar ban',
    createrId: 8,
    member: [],
    creater: user,
  },
  {
    id: 9,
    content: 'da thich binh luan cuar ban',
    createrId: 8,
    member: [],
    creater: user,
  },
  {
    id: 74,
    content: 'da thich binh luan cuar ban',
    createrId: 8,
    member: [],
    creater: user,
  },
  {
    id: 86,
    content: 'da thich binh luan cuar ban',
    createrId: 8,
    member: [],
    creater: user,
  },
];

export const NotificationList = ({}: NotiListProps) => {
  return (
    <View className="">
      <FlatList
        data={notifications}
        renderItem={({item}) => <NotificationItem notification={item} />}
        keyExtractor={item => `${item.id}`}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Text className="text-gray-500">Chua co thong bao</Text>
          </View>
        }
      />
    </View>
  );
};

export default NotificationList;
