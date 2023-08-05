import {View, SafeAreaView, Text, FlatList} from 'react-native';
import React from 'react';
import {Avatar} from '../../../components';
import {User} from '../../../types/user';
import AntDesign from 'react-native-vector-icons/AntDesign';

type MemberProps = {
  user: User;
};

export const Member = ({user}: MemberProps) => {
  return (
    <View className="p-4 bg-slate-100 flex-row justify-between shadow-lg border-1">
      <View className="flex flex-row gap-x-3 w-full items-center">
        <Avatar
          src={user.avatar}
          className="h-[40px] ml-1 w-[40px] rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold break-all">{user.fullName}</Text>
          <Text className="text-sm">SDT: {user.phone}</Text>
        </View>
      </View>
      <View>
        <AntDesign name="delete" size={20} />
      </View>
    </View>
  );
};

export default Member;
