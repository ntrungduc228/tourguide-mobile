import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Tour} from '../../../types/tour';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import routesScreen from '../../../navigations/routes';

type TourListITemProps = {
  tour: Tour;
};

export const TourListItem = ({tour}: TourListITemProps) => {
  const navigation = useNavigation<Nav>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(
          routesScreen.TourDetail,
          JSON.stringify({tourId: tour.id}),
        );
      }}>
      <View className="p-3 mx-2 my-2 bg-cyan-200 rounded-md">
        <Text className="font-bold text-lg text-black">{tour.name}</Text>
        <Text className="break-all">Mô tả: {tour.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TourListItem;
