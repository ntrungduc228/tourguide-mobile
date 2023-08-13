import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button, TextInput} from 'react-native-paper';
import {useFormik} from 'formik';
import {Tour} from '../../../types/tour';
import {useTour} from './TourForm';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '../../../stores';
import {setIsEnterDestination, setTour} from '../../../stores/slices/tourSlice';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/native';
type TourInfoRouteProp = RouteProp<ParamListBase, string>;

type TourInfoProps = {
  route?: TourInfoRouteProp;
};

interface TourFormValues {
  name: string;
  description: string;
}

export const TourInfo = ({route}: TourInfoProps): JSX.Element => {
  const {tour, isEdit} = useSelector((state: IRootState) => state.tour);

  // const {isEdit} =
  //   typeof route?.params === 'string' ? JSON.parse(route?.params) : false;
  // console.log('route ', isEdit);

  useEffect(() => {
    if (!isEdit) {
      dispatch(setTour(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit]);

  const dispatch = useDispatch();
  const navigation = useNavigation<Nav>();

  const initialValues: TourFormValues = {
    name: isEdit ? tour?.name || '' : '',
    description: isEdit ? tour?.description || '' : '',
  };

  // const {setTour, tour, setIsEnterDestination} = useTour();

  const onSubmit = (values: any) => {
    console.log(values);
    const tourNew: Tour = {
      name: values.name,
      description: values.description,
    };

    dispatch(setTour({...tour, ...tourNew}));
    dispatch(setIsEnterDestination(true));
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    enableReinitialize: true,
  });

  return (
    <View className="p-4">
      <View className="flex-row justify-end pr-4">
        <Button
          mode="text"
          className="bg-red-500 w-[80] mr-10"
          onPress={() => {
            dispatch(setTour(null));
            navigation.goBack();
          }}>
          <Text className="text-white">Hủy</Text>
        </Button>
        <TouchableOpacity
          className="ml-2"
          onPress={() => formik.handleSubmit()}>
          <AntDesign name="arrowright" size={30} color={'#000'} />
        </TouchableOpacity>
      </View>
      <View className="mt-5  rounded-md">
        <View className="h-full">
          <View className="p-2">
            <View>
              <Text className="text-gray font-medium text-md">Tên tour</Text>
              <TextInput
                autoFocus={true}
                className="bg-white rounded-md mt-2 "
                onChangeText={formik.handleChange('name')}
                onBlur={formik.handleBlur('name')}
                value={formik.values.name}
              />
            </View>
            <View className="mt-3">
              <Text className="text-gray font-medium text-md">Mô tả</Text>
              <View className="bg-white rounded-md h-[120]">
                <TextInput
                  className="bg-white rounded-md "
                  multiline={true}
                  onChangeText={formik.handleChange('description')}
                  onBlur={formik.handleBlur('description')}
                  value={formik.values.description}
                  mode={'flat'}
                  autoFocus={true}
                  cursorColor={'#000'}
                  activeUnderlineColor={'#fff'}
                  underlineColor={'#fff'}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TourInfo;

// {({handleChange, handleBlur, handleSubmit, values}) => (
//     <View className="p-2">
//       <View>
//         <Text className="text-gray font-medium text-md">Tên tour</Text>
//         <TextInput
//           className="bg-white rounded-md mt-2 "
//           onChangeText={handleChange('name')}
//           onBlur={handleBlur('name')}
//           value={values.name}
//         />
//       </View>
//       <View className="mt-3">
//         <Text className="text-gray font-medium text-md">Mô tả</Text>
//         <TextInput
//           className="bg-white rounded-md mt-2 h-[120] "
//           multiline={true}
//           onChangeText={handleChange('description')}
//           onBlur={handleBlur('description')}
//           value={values.description}
//         />
//       </View>
//     </View>
//   )}
