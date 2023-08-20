import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useFormik} from 'formik';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, TextInput, Checkbox} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import useToast from '../../hooks/useToast';
import appointmentService from '../../services/appointmentService';
import {IRootState} from '../../stores';
import {formatDateTime} from '../../utils/formatDate';
import AppointmentMember from './AppointmentMember';
import routesScreen from '../../navigations/routes';

type Props = {};

interface AppointmentFormValues {
  content: string;
  address: string;
  time: Date;
}

export const AppointmentForm = (props: Props) => {
  const {appointment} = useSelector((state: IRootState) => state.appointment);
  const [usersIds, setUsersIds] = React.useState<number[]>([]);

  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState<'date' | 'time'>('date');
  const [openDate, setOpenDate] = React.useState(false);
  const tourId = useSelector((state: IRootState) => state.tour.tourId);
  const [isInviteAll, setIsInviteAll] = React.useState<boolean>(false);
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
    console.log('values appointment ', values, usersIds);
    const {address, content, time} = values;

    createAppointment({
      tourId: tourId!!,
      address,
      content,
      userIds: usersIds,
      inviteAll: isInviteAll,
      time,
    });
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
    curDate.setHours(curDate.getHours() + 7);
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
          <TouchableOpacity
            className="ml-2"
            onPress={() => navigation.goBack()}>
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
                timeZoneOffsetInMinutes={60 * 7}
                // minimumDate={new Date(Date.now() + 7 * 60 * 60 * 1000)}
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
        <View className="flex-row items-center">
          <Checkbox
            status={isInviteAll ? 'checked' : 'unchecked'}
            onPress={() => {
              setIsInviteAll(!isInviteAll);
            }}
          />
          <Text>Mời tất cả</Text>
        </View>
        <View>
          <AppointmentMember setUsersAdd={setUsersIds} usersAdd={usersIds} />
        </View>
      </View>
    </ScrollView>
  );
};

export default AppointmentForm;
