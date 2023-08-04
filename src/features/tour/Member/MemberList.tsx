import {View, SafeAreaView, Text, FlatList} from 'react-native';
import React from 'react';
import {User} from '../../../types/user';
import Member from './Member';

type Props = {};

const users: User[] = [
  {
    id: 1,
    fullName: 'Nguyen Trung Duc',
    avatar:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
    phone: '555-555-5555',
  },
  {
    id: 2,
    fullName: 'Nguyen Thi Khanh Vi',
    avatar:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
    phone: '555-555-5555',
  },
  {
    id: 8,
    fullName: 'Nguyen Thi Khanh Vi',
    avatar:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
    phone: '555-555-5555',
  },
  {
    id: 3,
    fullName: 'Nguyen Thi Khanh Vi',
    avatar:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
    phone: '555-555-5555',
  },
  {
    id: 4,
    fullName: 'Nguyen Thi Khanh Vi',
    avatar:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
    phone: '555-555-5555',
  },

  {
    id: 5,
    fullName: 'Nguyen Thi Khanh Vi',
    avatar:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
    phone: '555-555-5555',
  },
  {
    id: 67,
    fullName: 'Nguyen Thi Khanh Vi',
    avatar:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
    phone: '555-555-5555',
  },
  {
    id: 48,
    fullName: 'Nguyen Thi Khanh Vi',
    avatar:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
    phone: '555-555-5555',
  },

  {
    id: 57,
    fullName: 'Nguyen Thi Khanh Vi',
    avatar:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
    phone: '555-555-5555',
  },
];

export const MemberList = (props: Props) => {
  return (
    <SafeAreaView className="bg-slate-100">
      <FlatList
        data={users}
        renderItem={({item}) => <Member user={item} />}
        keyExtractor={item => `${item.id}`}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Text className="text-gray-500">Chua co thanh vien</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default MemberList;
