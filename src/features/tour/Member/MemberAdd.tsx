import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextInput, Button} from 'react-native-paper';
import {User} from '../../../types/user';
import MemberSearchList from './MemberSearchList';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import userService from '../../../services/userService';
import tourService from '../../../services/tourService';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../stores';
import useToast from '../../../hooks/useToast';

type MemberAddProps = {
  setOpenModal: (value: boolean) => void;
};

export const MemberAdd = ({setOpenModal}: MemberAddProps) => {
  const [valueInput, setValueInput] = useState<string>('');
  const [usersFind, setUsersFind] = useState<User[]>([]);
  const [usersAdd, setUsersAdd] = useState<number[]>([]);
  const tourId = useSelector((state: IRootState) => state.tour.tourId);
  const {showToast} = useToast();
  useQuery({
    queryKey: ['userPhone', valueInput],
    queryFn: () => userService.getUserByPhone(valueInput),
    onSuccess(data: User[]) {
      setUsersFind(data);
    },
    enabled: !!valueInput,
  });
  const queryClient = useQueryClient();

  const {mutate: addMembersTourMutation} = useMutation({
    mutationFn: tourService.addMembers,
    onSuccess: () => {
      showToast('success', 'Thêm thành công');
      queryClient.invalidateQueries(['userTour', tourId]);
    },
    onError: (error: any) => {
      showToast('error', 'Thêm thất bại');
      console.log('erorr ', JSON.stringify(error));
    },
  });
  const handleAddMember = () => {
    //dữ liệu giả
    console.log('testusser', usersAdd);
    if (!!usersAdd.length)
      addMembersTourMutation({members: usersAdd, id: tourId});
    else console.log('ban loi');

    setOpenModal(false);
  };
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
      <View className="my-4 justify-end flex-row">
        <Button
          mode="contained"
          style={{borderRadius: 10}}
          className="w-[100] h-10 bg-blue-400"
          onPress={handleAddMember}>
          Thêm
        </Button>
      </View>
    </View>
  );
};

export default MemberAdd;
