import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {useFormik} from 'formik';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  formatDate,
  formatDateTime,
  formatTime,
} from '../../../utils/formatDate';
import {useTour} from './TourForm';
import {Destination} from '../../../types/destination';
import {RouteProp} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/native';
import {IRootState} from '../../../stores';
import {useDispatch, useSelector} from 'react-redux';
import {setIsEnterDestination, setTour} from '../../../stores/slices/tourSlice';
type DestinationFormRouteProp = RouteProp<ParamListBase, string>;

type DestinationFormProps = {
  setOpenDestinationForm: (state: boolean) => void;
  destination: Destination | null;
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

export const DestinationForm = ({
  setOpenDestinationForm,
  destination,
}: DestinationFormProps) => {
  // const {tour, setTour} = useTour();
  const dispatch = useDispatch();
  const {tour} = useSelector((state: IRootState) => state.tour);
  const initialValues: DestinationFormValues = {
    name: destination?.name || '',
    content: destination?.content || '',
    address: destination?.address || '',
    departureTime: destination?.departureTime || new Date(),
  };

  const onSubmit = (values: any) => {
    if (tour && !destination) {
      dispatch(
        setTour({
          ...tour,
          destinations: !!tour?.destinations
            ? [...tour.destinations, values]
            : [values],
        }),
      );
    } else if (tour && destination) {
      const temp = tour?.destinations.map(item => {
        if (item === destination) return values;
        else return item;
      });
      dispatch(setTour({...tour, destinations: temp}));
    }

    setOpenDestinationForm(false);
    // dispatch(setIsEnterDestination(false));
  };

  const formik = useFormik({
    initialValues: initialValues,
    // enableReinitialize: true,
    onSubmit: onSubmit,
  });

  const onChangeDate = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    // console.log('ny ', event);
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
        <TouchableOpacity
          className="ml-2"
          onPress={() => {
            setOpenDestinationForm(false);
          }}>
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
          {/* <Text>{formik.values?.departureTime?.toLocaleDateString('vn')}</Text> */}
          <Text>{formatDate(formik.values?.departureTime)}</Text>

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
          {/* <Text>{formik.values?.departureTime?.toLocaleTimeString('vn')}</Text> */}
          <Text>{formatTime(formik.values?.departureTime)}</Text>
        </View>

        <View>
          <Text className="text-gray font-medium text-md">Địa chỉ</Text>
          <TextInput
            className="bg-slate-200 shadow  rounded-md mt-2 "
            onChangeText={formik.handleChange('address')}
            onBlur={formik.handleBlur('address')}
            value={formik.values.address}
          />
        </View>
        <View>
          <Text className="text-gray font-medium text-md">Nội dung</Text>
          <TextInput
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
