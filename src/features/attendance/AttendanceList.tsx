import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {User} from '../../types/user';
import {MemberCheckItem} from '../tour';
import {Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {IRootState} from '../../stores';
import {useQuery} from '@tanstack/react-query';
import appointmentService from '../../services/appointmentService';
import {Appointment} from '../../types/appointment';
import {Attendance} from '../../types/attendance';

type Props = {
  setOpenModal: (value: boolean) => void;
  appointment: Appointment;
};

export const AttendanceList = ({setOpenModal, appointment}: Props) => {
  const handleAttendanceMembers = () => {};

  const [usersAdd, setUsersAdd] = useState<number[]>([]);
  console.log('t', appointment);
  const {data: appointmentMembers} = useQuery({
    queryKey: ['appointmentMembers', appointment?.id],
    queryFn: () => appointmentService.getMembers(appointment.id!!),
    enabled: !!appointment?.id,
    onSuccess: data => {
      console.log('ttt', data);
      // console.log('dataa', data);
      //  setComments(data?.data);
    },
    onError(err) {
      console.log('eee', err);
    },
  });

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
          {!!appointmentMembers?.data.length ? (
            appointmentMembers?.data?.map((attendances: Attendance) => (
              <MemberCheckItem
                key={attendances.id}
                user={attendances.user!!}
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
