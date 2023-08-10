import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Destination} from '../../../types/destination';
import {useFormik} from 'formik';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextInput, Button} from 'react-native-paper';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {formatDateTime} from '../../../utils/formatDate';
import {useTour} from './TourForm';

type DestinationFormProps = {
  // destination: Destination;
  // setDestination: (destination: Destination) => void;
  // setIsEditing: (value: boolean) => void;
};

interface DestinationFormValues {
  name: string;
  address: string;
  departureTime: Date;
  content: string;
}

export const DestinationForm = ({}: // destination,
// setDestination,
// setIsEditing,
DestinationFormProps) => {
  const {destination} = useTour();
  const initialValues: DestinationFormValues = {
    name: destination?.name || '',
    content: destination?.content || '',
    address: destination?.address || '',
    departureTime: destination?.departureTime || new Date(),
  };

  const onSubmit = (values: any) => {
    console.log('values ', values);
    console.log('values after ', formatDateTime(formik.values.departureTime));
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
  });

  const onChangeDate = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    console.log('ny ', event);
    setOpenDate(false);
    const curDate = selectedDate || date;
    console.log(formatDateTime(new Date(curDate)));
    setDate(curDate);
    formik.setFieldValue('departureTime', curDate);
  };

  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState<'date' | 'time'>('date');
  const [openDate, setOpenDate] = React.useState(false);

  return (
    <View className="bg-white">
      <View className="flex-row justify-between items-center border-b-0.5 border-[#DEDEDE]">
        <TouchableOpacity className="ml-2" onPress={() => {}}>
          <AntDesign name="close" size={20} color={'#000'} />
        </TouchableOpacity>
        <Text className="font-bold  p-3 text-md text-black">
          Thông tin lịch trình
        </Text>
        <TouchableOpacity
          className="p-3 "
          onPress={() => formik.handleSubmit()}>
          <Text className="text-md text-black">Xác nhận</Text>
        </TouchableOpacity>
      </View>
      <View className="p-2 pb-10 gap-3">
        <View>
          <Text className="text-gray font-medium text-md">Tên tour</Text>
          <TextInput
            autoFocus={true}
            className="bg-slate-200 shadow rounded-md mt-2 "
            onChangeText={formik.handleChange('name')}
            onBlur={formik.handleBlur('name')}
            value={formik.values.name}
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
          <Text>{formik.values.departureTime.toLocaleDateString('vn')}</Text>

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
          <Text>{formik.values.departureTime.toLocaleTimeString('vn')}</Text>
        </View>

        <View>
          <Text className="text-gray font-medium text-md">Tên tour</Text>
          <TextInput
            autoFocus={true}
            className="bg-slate-200 shadow  rounded-md mt-2 "
            onChangeText={formik.handleChange('address')}
            onBlur={formik.handleBlur('address')}
            value={formik.values.address}
          />
        </View>
        <View>
          <Text className="text-gray font-medium text-md">Tên tour</Text>
          <TextInput
            autoFocus={true}
            className="bg-slate-200 shadow  rounded-md mt-2 "
            onChangeText={formik.handleChange('content')}
            onBlur={formik.handleBlur('content')}
            value={formik.values.content}
          />
        </View>
      </View>
    </View>
  );
};

export default DestinationForm;