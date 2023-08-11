import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Tour} from '../../../types/tour';

type TourListITemProps = {
  tour: Tour;
};

export const TourListItem = ({tour}: TourListITemProps) => {
  return (
    <TouchableOpacity onPress={() => console.log('dfkhgglk')}>
      <View className="p-3 mx-2 my-2 bg-slate-300 rounded-md">
        <Text className="font-bold text-lg text-black">{tour.name}</Text>
        <Text className="break-all">Mô tả: {tour.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TourListItem;
