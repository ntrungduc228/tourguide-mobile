import {View, SafeAreaView, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {User} from '../../../types/user';
import Member from './Member';
import {useQuery} from '@tanstack/react-query';
import tourService from '../../../services/tourService';

type Props = {};

export const MemberList = (props: Props) => {
  const [members, setMembers] = useState<User[]>();
  //dữ liệu giả
  const {data: membersTour} = useQuery({
    queryKey: ['userTour', 1],
    queryFn: () => tourService.getMembersTour(1),
    onSuccess(data: User[]) {
      setMembers(data);
    },
    // enabled: !!valueInput,
  });

  return (
    <SafeAreaView className="bg-slate-100">
      <FlatList
        data={members}
        renderItem={({item}) => <Member user={item} />}
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
