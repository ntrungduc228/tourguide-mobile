import {View, SafeAreaView, Text, FlatList, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import {User} from '../../../types/user';
import Member from './Member';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import tourService from '../../../services/tourService';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../stores';
import {Button} from 'react-native-paper';
import {ModalTrigger} from '../../../components';
import MemberAdd from './MemberAdd';
import MemberApprove from './MemberApprove';

type Props = {};

export const MemberList = ({}: Props) => {
  const tourId = useSelector((state: IRootState) => state.tour.tourId);
  const [members, setMembers] = useState<User[]>([]);
  const [openAddMember, setOpenAddMember] = useState<boolean>(false);
  const [openApproveMember, setOpenApproveMember] = useState<boolean>(false);
  const socket = useSelector((state: IRootState) => state.socket.data);
  const user = useSelector((state: IRootState) => state.user.data.info);

  const queryClient = useQueryClient();

  //dữ liệu giả
  const {isLoading, refetch} = useQuery({
    queryKey: ['userTour', tourId],
    queryFn: () => tourService.getMembersTour(tourId!),
    enabled: !!tourId,
    onSuccess(data: User[]) {
      setMembers(data);
    },
    // enabled: !!valueInput,
  });

  useEffect(() => {
    const topic = `/topic/room/${user?.id}/approve`;
    if (socket) {
      socket.subscribe(topic, (payload: any) => {
        const data = payload ? JSON.parse(payload.body) : {};
        // console.log('receive notif: ', data);
        queryClient.invalidateQueries(['userTour', tourId]);
      });
    }
    return () => {
      if (socket) {
        socket.unsubscribe(topic);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, tourId]);

  return (
    <SafeAreaView className="bg-slate-100 h-full">
      <View className="">
        <Button
          mode="elevated"
          onPress={() => setOpenAddMember(true)}
          className="bg-cyan-500 w-[200] mt-5 ml-2">
          <Text className="text-white">Thêm thành viên</Text>
        </Button>
        <Button
          mode="elevated"
          className="bg-cyan-500 w-[180] mt-2 ml-2"
          onPress={() => setOpenApproveMember(true)}>
          <Text className="text-white">Duyệt thành viên</Text>
        </Button>
      </View>
      <View className="flex-1 mr-2">
        <FlatList
          data={members}
          renderItem={({item}) => (
            <Member members={members} setMembers={setMembers} user={item} />
          )}
          keyExtractor={item => `${item.id}`}
          ListEmptyComponent={
            <View className="flex-1 items-center justify-center">
              <Text className="text-gray-500">Chưa có thành viên</Text>
            </View>
          }
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
        />
      </View>
      <ModalTrigger visible={openAddMember} setVisible={setOpenAddMember}>
        <MemberAdd setOpenModal={setOpenAddMember} />
      </ModalTrigger>
      <ModalTrigger
        visible={openApproveMember}
        setVisible={setOpenApproveMember}>
        <MemberApprove setOpenModal={setOpenApproveMember} />
      </ModalTrigger>
    </SafeAreaView>
  );
};

export default MemberList;
