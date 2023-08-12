import {View, SafeAreaView, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {User} from '../../../types/user';
import Member from './Member';
import {useQuery} from '@tanstack/react-query';
import tourService from '../../../services/tourService';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../stores';

type Props = {};

export const MemberList = ({}: Props) => {
  const tourId = useSelector((state: IRootState) => state.tour.tourId);
  const [members, setMembers] = useState<User[]>([]);
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
    <SafeAreaView className="bg-slate-100">
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
    </SafeAreaView>
  );
};

export default MemberList;
