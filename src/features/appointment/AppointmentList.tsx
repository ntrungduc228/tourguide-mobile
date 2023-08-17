import {
  ParamListBase,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import routesScreen from '../../navigations/routes';
import appointmentService from '../../services/appointmentService';
import {IRootState} from '../../stores';
import AppointmentItem from './AppointmentItem';

type AppoimentListScreenRouteProp = RouteProp<ParamListBase, string>;

type AppoimentListScreenProps = {
  route: AppoimentListScreenRouteProp;
};

export const AppointmentList = ({}: AppoimentListScreenProps) => {
  const queryClient = useQueryClient();
  const socket = useSelector((state: IRootState) => state.socket.data);
  const user = useSelector((state: IRootState) => state.user.data.info);
  const [openForm, setOpenForm] = useState<boolean>(false);
  const navigation = useNavigation<Nav>();
  const tourId = useSelector((state: IRootState) => state.tour.tourId);
  const {data: appointmentList} = useQuery({
    queryKey: ['appointmentList', tourId],
    queryFn: () => appointmentService.getAppointments(tourId!!),
    enabled: !!tourId,
    onSuccess: data => {
      // console.log('dataa', data);
      //  setComments(data?.data);
    },
    onError(err) {
      console.log('eee', err);
    },
  });

  useEffect(() => {
    const topic = `/topic/appointment/${user?.id}/new`;
    if (socket) {
      socket.subscribe(topic, (payload: any) => {
        queryClient.invalidateQueries(['appointmentList', tourId]);
      });
    }
    return () => {
      if (socket) {
        socket.unsubscribe(topic);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, user]);

  // console.log('list', appointmentList?.data);
  return (
    <View className="bg-cyan-100 h-full">
      <View>
        <Button
          mode="elevated"
          className="bg-cyan-500 w-[150] mt-5 ml-2"
          onPress={() => navigation.navigate(routesScreen.AppointmentForm)}>
          <Text className="text-white">Tạo điểm hẹn</Text>
        </Button>
      </View>
      <View className="py-3 flex-1">
        <FlatList
          data={appointmentList?.data}
          renderItem={({item}) => <AppointmentItem appointment={item} />}
          keyExtractor={(item, index) => `${index}`}
          ListEmptyComponent={
            <View className="flex-1 items-center justify-center">
              <Text className="text-gray-500">Chưa có điểm hẹn</Text>
            </View>
          }
        />
      </View>
      {/* <ModalTrigger visible={openForm} setVisible={setOpenForm}>
        <AppointmentForm />
      </ModalTrigger> */}
    </View>
  );
};

export default AppointmentList;
