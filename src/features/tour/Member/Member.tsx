import {useMutation} from '@tanstack/react-query';
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Avatar} from '../../../components';
import tourService from '../../../services/tourService';
import {User} from '../../../types/user';

type MemberProps = {
  user: User;
  setMembers: (members: User[]) => void;
  members: User[];
};

export const Member = ({user, members, setMembers}: MemberProps) => {
  const handleDeleteMembers = () => {
    const temp = members.filter(item => {
      return item !== user;
    });

    setMembers(temp);
  };

  //dữ liệu giả
  const {mutate: removeMember} = useMutation({
    mutationFn: tourService.removeMembers,
    onError: (error: any) => {
      console.log('erorr ', JSON.stringify(error));
    },
    onSuccess: () => {
      handleDeleteMembers();
    },
  });
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
        <TouchableOpacity
          className="ml-2"
          onPress={() => {
            if (user) {
              removeMember({members: [user.id!!], id: 1});
            }
          }}>
          <AntDesign name="delete" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Member;
