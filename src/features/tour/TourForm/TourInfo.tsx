import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button, TextInput} from 'react-native-paper';
import {Formik, useFormik} from 'formik';
import {Tour} from '../../../types/tour';
import {useTour} from './TourForm';

type TourInfoProps = {
  setIsEnterDestination: (value: boolean) => void;
};

interface TourFormValues {
  name: string;
  description: string;
}

export const TourInfo = ({setIsEnterDestination}: TourInfoProps) => {
  const initialValues: TourFormValues = {name: '', description: ''};

  const {setTour, tour} = useTour();

  const onSubmit = (values: any) => {
    console.log(values);
    const tourNew: Tour = {
      name: values.name,
      description: values.description,
    };
    setTour({...tour, ...tourNew});
    setIsEnterDestination(true);
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
  });

  return (
    <View className="p-4">
      <View className="flex-row justify-end pr-4">
        <Button mode="text" className="bg-red-500 w-[80] mr-10">
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
