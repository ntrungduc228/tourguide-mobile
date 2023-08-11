import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Tour} from '../../../types/tour';
import Toast from 'react-native-toast-message';

type TourListITemProps = {
  tour: Tour;
};

export const TourListItem = ({tour}: TourListITemProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Toast.show({
          type: 'success',
          text1: 'Reported post',
          visibilityTime: 5000,
          position: 'bottom',
          bottomOffset: 70,
        });
      }}>
      <View className="p-3 mx-2 my-2 bg-cyan-200 rounded-md">
        <Text className="font-bold text-lg text-black">{tour.name}</Text>
        <Text className="break-all">Mô tả: {tour.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TourListItem;
