import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {User} from '../../../types/user';
import {Checkbox} from 'react-native-paper';
import {Avatar} from '../../../components';

type MemberSearchListProps = {
  users: User[];
};

export const MemberSearchList = ({users}: MemberSearchListProps) => {
  return (
    <View>
      <ScrollView>
        {users?.length ? (
          users?.map((user: User) => (
            <MemberSearchItem key={user.id} user={user} />
          ))
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="text-gray-500">Chua co thanh vien</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default MemberSearchList;

export const MemberSearchItem = ({user}: {user: User}) => {
  return (
    <View>
      <View className="flex-row w-full items-center">
        <Checkbox status={'checked'} />
        <View className="p-2 flex-1 bg-slate-100 flex-row justify-between shadow-lg border-1">
          <View className="flex-row gap-x-3 w-full items-center">
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
      </View>
    </View>
  );
};
