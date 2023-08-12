import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {ScreenBackLayout} from '../../screens/components';
import {RouteProp} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/native';
import AppointmentItem from './AppointmentItem';
import {Button} from 'react-native-paper';

type AppoimentListScreenRouteProp = RouteProp<ParamListBase, string>;

type AppoimentListScreenProps = {
  route: AppoimentListScreenRouteProp;
};

const appointments = {
  data: [
    {
      id: 1,
      time: new Date(),
      content: 'tao diem hen',
      address: 'Hoc vien cong nghe buu chinh vien thong',
    },
    {
      id: 2,
      time: new Date(),
      content: 'tao diem hen',
      address: 'Hoc vien cong nghe buu chinh vien thong',
    },
    {
      id: 3,
      time: new Date(),
      content: 'tao diem hen',
      address: 'Hoc vien cong nghe buu chinh vien thong',
    },
    {
      id: 4,
      time: new Date(),
      content: 'tao diem hen',
      address: 'Hoc vien cong nghe buu chinh vien thong',
    },
    {
      id: 14,
      time: new Date(),
      content: 'tao diem hen',
      address: 'Hoc vien cong nghe buu chinh vien thong',
    },
    {
      id: 25,
      time: new Date(),
      content: 'tao diem hen',
      address: 'Hoc vien cong nghe buu chinh vien thong',
    },
    {
      id: 36,
      time: new Date(),
      content: 'tao diem hen',
      address: 'Hoc vien cong nghe buu chinh vien thong',
    },
    {
      id: 46,
      time: new Date(),
      content: 'tao diem hen',
      address: 'Hoc vien cong nghe buu chinh vien thong',
    },
  ],
};

export const AppointmentList = ({}: AppoimentListScreenProps) => {
  return (
    <View className="bg-emerald-100 h-full">
      <View>
        <Button mode="elevated" className="bg-cyan-500 w-[150] mt-5 ml-2">
          <Text className="text-white">Tạo điểm hẹn</Text>
        </Button>
      </View>
      <View className="py-3 flex-1">
        <FlatList
          data={appointments?.data}
          renderItem={({item}) => <AppointmentItem appointment={item} />}
          keyExtractor={item => `${item.id}`}
          ListEmptyComponent={
            <View className="flex-1 items-center justify-center">
              <Text className="text-gray-500">Chua co bai dang</Text>
            </View>
          }
        />
      </View>
    </View>
  );
};

export default AppointmentList;
