import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {MemberSearchList} from '../tour';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {User} from '../../types/user';
import {IRootState} from '../../stores';
import {TextInput} from 'react-native-paper';
import {useQuery} from '@tanstack/react-query';
import userService from '../../services/userService';

type Props = {
  usersAdd: number[];
  setUsersAdd: (value: number[]) => void;
};

export const AppointmentMember = ({usersAdd, setUsersAdd}: Props) => {
  const [valueInput, setValueInput] = useState<string>('');
  const [usersFind, setUsersFind] = useState<User[]>([]);
  // const [usersAdd, setUsersAdd] = useState<number[]>([]);
  const tourId = useSelector((state: IRootState) => state.tour.tourId);

  useQuery({
    queryKey: ['userPhone', valueInput],
    queryFn: () => userService.getUserByPhone(valueInput),
    onSuccess(data: User[]) {
      setUsersFind(data);
    },
    enabled: !!valueInput,
  });

  return (
    <View className="h-[350] w-[97%] px-2 bg-slate-100 rounded-md mx-auto">
      <View className="flex-row justify-between items-center border-b-0.5 border-[#DEDEDE]">
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
          value={valueInput}
          onChangeText={text => setValueInput(text)}
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
        <MemberSearchList
          users={usersFind}
          setUsersAdd={setUsersAdd}
          usersAdd={usersAdd}
        />
      </View>
    </View>
  );
};

export default AppointmentMember;
