import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Button} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useToast from '../../hooks/useToast';
import appointmentService from '../../services/appointmentService';
import {Appointment} from '../../types/appointment';
import {Attendance} from '../../types/attendance';
import {MemberCheckItem} from '../tour';

type Props = {
  setOpenModal: (value: boolean) => void;
  appointment: Appointment;
};

export const AttendanceList = ({setOpenModal, appointment}: Props) => {
  const {showToast} = useToast();
  const queryClient = useQueryClient();
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
  const {mutate: updateAttendance} = useMutation({
    mutationFn: appointmentService.updateAttendance,
    onError: (error: any) => {
      showToast('error', 'Duyệt thất bại');
      console.log('erorr ', JSON.stringify(error));
    },
    onSuccess: data => {
      showToast('success', 'Duyệt thành công');
      queryClient.invalidateQueries(['appointmentMembers', appointment?.id]);
      //handleDeleteMembers();
    },
  });
  const handleAttendanceMembers = () => {
    updateAttendance({id: appointment.id!!, userIds: usersAdd});
    setOpenModal(false);
  };

  const handleAddAll = () => {
    const temp: number[] = [];
    appointmentMembers?.data?.map((attendances: Attendance) =>
      temp.push(attendances.user?.id!!),
    );
    setUsersAdd(temp);
    console.log(temp);
  };

  return (
    <View className="bg-white px-2 w-full rounded-md mx-auto">
      <View className="flex-row justify-between items-center border-b-0.5 border-[#DEDEDE]">
        <TouchableOpacity className="ml-2" onPress={() => setOpenModal(false)}>
          <AntDesign name="close" size={20} color={'#000'} />
        </TouchableOpacity>
        <Text className="font-bold  p-3 text-md text-black">Điểm danh</Text>
        <TouchableOpacity
          className="p-3 "
          onPress={() => {
            handleAddAll();
          }}>
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
