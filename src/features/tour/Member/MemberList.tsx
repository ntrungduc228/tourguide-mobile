import {View, SafeAreaView, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {User} from '../../../types/user';
import Member from './Member';
import {useQuery} from '@tanstack/react-query';
import tourService from '../../../services/tourService';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../stores';
import {Button} from 'react-native-paper';
import {ModalTrigger} from '../../../components';
import MemberAdd from './MemberAdd';

type Props = {};

export const MemberList = ({}: Props) => {
  const tourId = useSelector((state: IRootState) => state.tour.tourId);
  const [members, setMembers] = useState<User[]>([]);
  const [openAddMember, setOpenAddMember] = useState<boolean>(false);
  //dữ liệu giả
  useQuery({
    queryKey: ['userTour', tourId],
    queryFn: () => tourService.getMembersTour(tourId!),
    enabled: !!tourId,
    onSuccess(data: User[]) {
      setMembers(data);
    },
    // enabled: !!valueInput,
  });

  return (
    <SafeAreaView className="bg-slate-100 h-full">
      <View className="">
        <Button
          mode="elevated"
          onPress={() => setOpenAddMember(true)}
          className="bg-cyan-500 w-[200] mt-5 ml-2">
          <Text className="text-white">Thêm thành viên</Text>
        </Button>
        <Button mode="elevated" className="bg-cyan-500 w-[180] mt-2 ml-2">
          <Text className="text-white">Duyệt thành viên</Text>
        </Button>
      </View>
      <View className="flex-1">
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
        />
      </View>
      <ModalTrigger visible={openAddMember} setVisible={setOpenAddMember}>
        <MemberAdd setOpenModal={setOpenAddMember} />
      </ModalTrigger>
    </SafeAreaView>
  );
};

export default MemberList;
