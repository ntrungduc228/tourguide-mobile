import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Tour} from '../../../types/tour';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import routesScreen from '../../../navigations/routes';
import TourItemMenu from './TourItemMenu';

type TourListITemProps = {
  tour: Tour;
};

export const TourListItem = ({tour}: TourListITemProps) => {
  const navigation = useNavigation<Nav>();
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <View className="flex-row items-center bg-cyan-500 p-3 mx-2 my-2  rounded-md">
      <TouchableOpacity
        className="flex-1"
        onPress={() => {
          navigation.navigate(
            routesScreen.TourDetail,
            JSON.stringify({tourId: tour.id}),
          );
        }}>
        <View className="">
          <Text className="font-bold text-lg text-white">{tour.name}</Text>
          <Text className="break-all text-slate-100">
            Mô tả: {tour.description}
          </Text>
        </View>
      </TouchableOpacity>
      <View>
        <TourItemMenu visible={visible} setVisible={setVisible} tour={tour} />
      </View>
    </View>
  );
};

export default TourListItem;
