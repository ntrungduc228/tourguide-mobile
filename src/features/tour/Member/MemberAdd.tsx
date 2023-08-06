import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextInput, Button} from 'react-native-paper';
import {User} from '../../../types/user';
import MemberSearchList from './MemberSearchList';

type MemberAddProps = {
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

export const MemberAdd = ({setOpenModal}: MemberAddProps) => {
  return (
    <View className="h-full w-[97%] px-2 bg-slate-100 rounded-md mx-auto">
      <View className="flex-row justify-between items-center border-b-0.5 border-[#DEDEDE]">
        <TouchableOpacity className="ml-2" onPress={() => setOpenModal(false)}>
          <AntDesign name="close" size={20} color={'#000'} />
        </TouchableOpacity>
        <Text className="font-bold  p-3 text-md text-black">
          Thêm thành viên
        </Text>
      </View>
      <View className="h-[80] px-3">
        <TextInput
          className="w-full bg-white rounded-md"
          underlineColor="#fff"
          activeUnderlineColor="#fff"
          cursorColor="#000"
          autoFocus={true}
        />
      </View>
      <View className="max-h-[200]">
        {/* <FlatList
          data={users}
          nestedScrollEnabled={true}
          // scrollEnabled={false}
          renderItem={({item}) => <MemberSearchItem user={item} />}
          keyExtractor={item => `${item.id}`}
          ListEmptyComponent={
            <View className="flex-1 items-center justify-center">
              <Text className="text-gray-500">Chua co bai dang</Text>
            </View>
          }
        /> */}
        <MemberSearchList users={users} />
      </View>
      <View className="my-4 justify-end flex-row">
        <Button
          mode="contained"
          style={{borderRadius: 10}}
          className="w-[100] h-10 bg-blue-400"
          onPress={() => console.log('Pressed')}>
          Them
        </Button>
      </View>
    </View>
  );
};

export default MemberAdd;
