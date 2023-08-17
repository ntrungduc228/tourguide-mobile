import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextInput, Button} from 'react-native-paper';
import {User} from '../../../types/user';
import {MemberCheckItem} from './MemberSearchList';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import userService from '../../../services/userService';
import tourService from '../../../services/tourService';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../stores';
import useToast from '../../../hooks/useToast';

type MemberApproveProps = {
  setOpenModal: (value: boolean) => void;
};

export const MemberApprove = ({setOpenModal}: MemberApproveProps) => {
  const [usersAdd, setUsersAdd] = useState<number[]>([]);
  const tourId = useSelector((state: IRootState) => state.tour.tourId);
  const socket = useSelector((state: IRootState) => state.socket.data);
  const queryClient = useQueryClient();
  const {showToast} = useToast();
  const {mutate: ApproveMember} = useMutation({
    mutationFn: tourService.approveMembers,
    onError: (error: any) => {
      console.log('erorr ', JSON.stringify(error));
      showToast('error', 'Duyệt thất bại');
    },
    onSuccess: () => {
      showToast('success', 'Duyệt thành công');
      queryClient.invalidateQueries(['memberRequest', tourId]);
    },
  });

  const {data: userRequests} = useQuery({
    queryKey: ['memberRequest', tourId],
    queryFn: () => tourService.getListMembersRequest(tourId!),
    enabled: !!tourId,
    onSuccess(data) {
      //  setDestination(data?.data);
      // setMembers(data);
    },
    // enabled: !!valueInput,
  });

  // useEffect(() => {
  //   const topic = `/topic/tour/${tourId}/members/join`;
  //   if (socket) {
  //     socket.subscribe(topic, (payload: any) => {
  //       // const data = payload ? JSON.parse(payload.body) : {};
  //       queryClient.invalidateQueries(['memberRequest', tourId]);
  //     });
  //   }
  //   return () => {
  //     if (socket) {
  //       socket.unsubscribe(topic);
  //     }
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [socket, tourId]);

  const handleApproveMember = () => {
    //dữ liệu giả
    console.log('testusser', usersAdd);
    if (!!usersAdd.length) {
      ApproveMember({data: {userIds: usersAdd}, id: tourId!!});
    } else console.log('ban loi');

    setOpenModal(false);
  };
  return (
    <View className="h-full w-[97%] px-2 bg-slate-100 rounded-md mx-auto">
      <View className="flex-row justify-between items-center border-b-0.5 border-[#DEDEDE]">
        <TouchableOpacity className="ml-2" onPress={() => setOpenModal(false)}>
          <AntDesign name="close" size={20} color={'#000'} />
        </TouchableOpacity>
        <Text className="font-bold  p-3 text-md text-black">Duyệt</Text>
      </View>
      {/* <View className="h-[80] px-3">
        <TextInput
          className="w-full bg-white rounded-md"
          underlineColor="#fff"
          activeUnderlineColor="#fff"
          cursorColor="#000"
          autoFocus={true}
          value={valueInput}
          onChangeText={text => setValueInput(text)}
        />
      </View> */}
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
        <ScrollView>
          {!!userRequests?.data?.length ? (
            userRequests?.data?.map((user: User) => (
              <MemberCheckItem
                key={user.id}
                user={user}
                setUsersAdd={setUsersAdd}
                usersAdd={usersAdd}
              />
            ))
          ) : (
            <View className="flex-1 items-center justify-center">
              <Text className="text-gray-500">Không có thành viên</Text>
            </View>
          )}
        </ScrollView>
      </View>
      <View className="my-4 justify-end flex-row">
        <Button
          mode="contained"
          disabled={!userRequests?.data.length || !usersAdd.length}
          style={{borderRadius: 10}}
          className={`w-[170] h-10 ${
            !userRequests?.data.length || !usersAdd.length
              ? `bg-slate-400`
              : `bg-blue-400`
          }`}
          onPress={handleApproveMember}>
          Xác nhận
        </Button>
      </View>
    </View>
  );
};

export default MemberApprove;
