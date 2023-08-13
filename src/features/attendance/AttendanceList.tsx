import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {User} from '../../types/user';
import {MemberCheckItem} from '../tour';
import {Button} from 'react-native-paper';

type Props = {
  setOpenModal: (value: boolean) => void;
};

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

export const AttendanceList = ({setOpenModal}: Props) => {
  const handleAttendanceMembers = () => {};

  const [usersAdd, setUsersAdd] = useState<number[]>([]);
  return (
    <View className="bg-white px-2 w-full rounded-md mx-auto">
      <View className="flex-row justify-between items-center border-b-0.5 border-[#DEDEDE]">
        <TouchableOpacity className="ml-2" onPress={() => setOpenModal(false)}>
          <AntDesign name="close" size={20} color={'#000'} />
        </TouchableOpacity>
        <Text className="font-bold  p-3 text-md text-black">Điểm danh</Text>
        <TouchableOpacity className="p-3 " onPress={() => {}}>
          <Text className="text-md text-black">Chọn tất cả</Text>
        </TouchableOpacity>
      </View>
      <View className="max-h-[200] bg-slate-100 ">
        <ScrollView>
          {!!users?.length ? (
            users?.map((user: User) => (
              <MemberCheckItem
                key={user.id}
                user={user}
                setUsersAdd={setUsersAdd}
                usersAdd={usersAdd}
              />
            ))
          ) : (
            <View className="flex-1 items-center justify-center">
              <Text className="text-gray-500">Chưa có thành viên</Text>
            </View>
          )}
        </ScrollView>
      </View>
      <View className="my-4 justify-end flex-row">
        <Button
          mode="contained"
          style={{borderRadius: 10}}
          className="w-[170] h-10 bg-blue-400"
          onPress={handleAttendanceMembers}>
          Xác nhận
        </Button>
      </View>
    </View>
  );
};

export default AttendanceList;
