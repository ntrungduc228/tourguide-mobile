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

  const initialValues: AppointmentFormValues = {
    content: appointment?.content || '',
    address: appointment?.content || '',
    time: appointment?.time || new Date(),
  };

  const onSubmit = (values: any) => {};

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
    enableReinitialize: true,
    onSubmit: onSubmit,
  });
  return (
    <View className="bg-white h-full">
      <View className="flex-row justify-between items-center border-b-0.5 border-[#DEDEDE]">
        <TouchableOpacity className="ml-2" onPress={() => {}}>
          <AntDesign name="close" size={20} color={'#000'} />
        </TouchableOpacity>
        <Text className="font-bold  p-3 text-md text-black">Điểm hẹn</Text>
        <TouchableOpacity className="p-3 " onPress={() => {}}>
          <Text className="text-md text-black">Tạo</Text>
        </TouchableOpacity>
      </View>
      <View className="p-2 pb-10 gap-3">
        <View>
          <Text className="text-gray font-medium text-md">Địa điểm</Text>
          {/* <TextInput
            autoFocus={true}
            className="bg-slate-200 shadow rounded-md mt-2 "
            onChangeText={formik.handleChange('address')}
            onBlur={formik.handleBlur('address')}
            value={formik.values.address}
          /> */}
        </View>
        <View>
          <Text className="text-gray font-medium text-md">Nội dung</Text>
          {/* <TextInput
            autoFocus={true}
            className="bg-slate-200 shadow rounded-md mt-2 "
            onChangeText={formik.handleChange('content')}
            onBlur={formik.handleBlur('content')}
            value={formik.values.content}
          /> */}
        </View>
        <View className="flex-row items-center">
          <Button
            className="mr-3"
            onPress={() => {
              // setMode('date');
              // setOpenDate(true);
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
              // setMode('time');
              // setOpenDate(true);
            }}
            uppercase={false}
            mode="outlined">
            Chọn giờ
          </Button>
          <Text>{formik.values.time.toLocaleTimeString('vn')}</Text>
        </View>
      </View>
    </View>
  );
};

export default AppointmentForm;
