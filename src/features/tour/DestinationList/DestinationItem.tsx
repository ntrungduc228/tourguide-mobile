import {View, Text} from 'react-native';
import React from 'react';
import {List} from 'react-native-paper';
import {Destination} from '../../../types/destination';
import {formatDate, formatTime} from '../../../utils/formatDate';

type DestinationitemProps = {
  destination: Destination;
};

export const DestinationItem = ({destination}: DestinationitemProps) => {
  return (
    <View className="flex p-3 px-2 flex-row">
      <View>
        <Text>{formatDate(destination.departureTime)}</Text>
        <Text>{formatTime(destination.departureTime)}</Text>
      </View>
      <View className="ml-1 bg-blue-100 p-2 rounded-lg flex-1">
        <Text className="font-bold text-black break-all">
          {destination.name}
        </Text>
        <Text className="break-all">{destination.address}</Text>
        <Text className="break-all">{destination.content}</Text>
      </View>
    </View>
  );
};

export default DestinationItem;
