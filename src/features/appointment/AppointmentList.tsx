import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {ScreenBackLayout} from '../../screens/components';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/native';
import AppointmentItem from './AppointmentItem';
import {Button} from 'react-native-paper';
import {ModalTrigger} from '../../components';
import AppointmentForm from './AppointmentForm';
import routesScreen from '../../navigations/routes';
import {useQuery} from '@tanstack/react-query';
import {useSelector} from 'react-redux';
import appointmentService from '../../services/appointmentService';

type AppoimentListScreenRouteProp = RouteProp<ParamListBase, string>;

type AppoimentListScreenProps = {
  route: AppoimentListScreenRouteProp;
};

export const AppointmentList = ({}: AppoimentListScreenProps) => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const navigation = useNavigation<Nav>();
  const tourId = useSelector((state: IRootState) => state.tour.tourId);
  const {data: appointmentList} = useQuery({
    queryKey: ['appointmentList', tourId],
    queryFn: () => appointmentService.getAppointments(tourId),
    enabled: !!tourId,
    onSuccess: data => {
      // console.log('dataa', data);
      //  setComments(data?.data);
    },
    onError(err) {
      console.log('eee', err);
    },
  });
  console.log('list', appointmentList?.data);
  return (
    <View className="bg-emerald-100 h-full">
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
