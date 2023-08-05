import {View, SafeAreaView, Text, FlatList} from 'react-native';
import React from 'react';
import {Avatar} from '../../../components';
import {User} from '../../../types/user';

type MemberProps = {
  user: User;
};

export const Member = ({user}: MemberProps) => {
  return (
    <View className="p-4 bg-slate-100 shadow-lg border-1">
      <View className="flex flex-row gap-x-3 items-center">
        <Avatar
          src={user.avatar}
          className="h-[40px] ml-1 w-[40px] rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold break-all">{user.fullName}</Text>
          <Text className="text-sm">SDT: {user.phone}</Text>
        </View>
      </View>
    </View>
  );
};

export default Member;
