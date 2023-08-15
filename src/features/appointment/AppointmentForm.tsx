import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useFormik} from 'formik';
import {useSelector} from 'react-redux';
import {IRootState} from '../../stores';
import {TextInput, Button} from 'react-native-paper';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {formatDateTime} from '../../utils/formatDate';
import AppointmentMember from './AppointmentMember';
import {ScrollView} from 'react-native-gesture-handler';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import appointmentService from '../../services/appointmentService';
import useToast from '../../hooks/useToast';
import {useNavigation} from '@react-navigation/native';
import routesScreen from '../../navigations/routes';

type Props = {};

interface AppointmentFormValues {
  content: string;
  address: string;
  time: Date;
}

export const AppointmentForm = (props: Props) => {
  const {appointment} = useSelector((state: IRootState) => state.appointment);
  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState<'date' | 'time'>('date');
  const [openDate, setOpenDate] = React.useState(false);
  const tourId = useSelector((state: IRootState) => state.tour.tourId);
  const {showToast} = useToast();
  const navigation = useNavigation<Nav>();
  const queryClient = useQueryClient();
  const initialValues: AppointmentFormValues = {
    content: appointment?.content || '',
    address: appointment?.content || '',
    time: appointment?.time || new Date(),
  };
  const {mutate: createAppointment} = useMutation({
    mutationFn: appointmentService.createAppointment,
    onSuccess: () => {
      showToast('success', 'Thêm thành công');
      queryClient.invalidateQueries(['appointmentList', tourId]);
      navigation.goBack();
    },
    onError: (error: any) => {
      showToast('error', 'Thêm thất bại');
      console.log('erorr ', JSON.stringify(error));
    },
  });

  const onSubmit = (values: any) => {
    console.log(values);
    const {address, content, userIds, time} = values;
    createAppointment({tourId: tourId!!, address, content, userIds, time});
  };

  const onChangeDate = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    console.log('ny ', event);
    setOpenDate(false);
    const curDate = selectedDate || date;
    console.log(formatDateTime(new Date(curDate)));
    // setDate(curDate);
    formik.setFieldValue('time', curDate);
  };

  const formik = useFormik({
    initialValues: initialValues,
    // enableReinitialize: true,
    onSubmit: onSubmit,
  });

  return (
    <ScrollView>
      <View className="bg-white h-full">
        <View className="flex-row justify-between items-center border-b-0.5 border-[#DEDEDE]">
          <TouchableOpacity className="ml-2" onPress={() => {}}>
            <AntDesign name="close" size={20} color={'#000'} />
          </TouchableOpacity>
          <Text className="font-bold  p-3 text-md text-black">Điểm hẹn</Text>
          <TouchableOpacity
            className="p-3 "
            onPress={() => {
              formik.handleSubmit();
            }}>
            <Text className="text-md text-black">Tạo</Text>
          </TouchableOpacity>
        </View>
        <View className="p-2 pb-10 gap-3">
          <View>
            <Text className="text-gray font-medium text-md">Địa điểm</Text>
            <TextInput
              className="bg-slate-200 shadow rounded-md mt-2 "
              onChangeText={formik.handleChange('address')}
              onBlur={formik.handleBlur('address')}
              value={formik.values.address}
            />
          </View>
          <View>
            <Text className="text-gray font-medium text-md">Nội dung</Text>
            <TextInput
              className="bg-slate-200 shadow rounded-md mt-2 "
              onChangeText={formik.handleChange('content')}
              onBlur={formik.handleBlur('content')}
              value={formik.values.content}
            />
          </View>
          <View className="flex-row items-center">
            <Button
              className="mr-3"
              onPress={() => {
                setMode('date');
                setOpenDate(true);
              }}
              uppercase={false}
              mode="outlined">
              Chọn ngày
            </Button>
            <Text>{formik.values.time.toLocaleDateString('vn')}</Text>

            {openDate && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                onChange={onChangeDate}
              />
            )}
          </View>
          <View className="flex-row items-center">
            <Button
              className="mr-3"
              onPress={() => {
                setMode('time');
                setOpenDate(true);
              }}
              uppercase={false}
              mode="outlined">
              Chọn giờ
            </Button>
            <Text>{formik.values.time.toLocaleTimeString('vn')}</Text>
          </View>
        </View>
        <View>
          <AppointmentMember />
        </View>
      </View>
    </ScrollView>
  );
};

export default AppointmentForm;
