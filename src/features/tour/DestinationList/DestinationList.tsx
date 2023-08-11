import {View, Text, FlatList} from 'react-native';
import React from 'react';
import DestinationItem from './DestinationItem';
import {Destination} from '../../../types/destination';

type DestinationListProps = {};

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Quy phu',
    address: 'bien dao',
    tourId: 1,
    departureTime: new Date(),
    content:
      'anan choi thoa thichan choi thoa thichan choi thoa thichan choi thoa thich choi thoa thich',
  },
  {
    id: 41,
    name: 'Quy phu',
    address: 'bien dao',
    tourId: 1,
    departureTime: new Date(),
    content:
      'anan choi thoa thichan choi thoa thichan choi thoa thichan choi thoa thich choi thoa thich',
  },
  {
    id: 15,
    name: 'Quy phu',
    address: 'bien dao',
    tourId: 1,
    departureTime: new Date(),
    content:
      'anan choi thoa thichan choi thoa thichan choi thoa thichan choi thoa thich choi thoa thich',
  },
  {
    id: 31,
    name: 'Quy phu',
    address: 'bien dao',
    tourId: 1,
    departureTime: new Date(),
    content:
      'anan choi thoa thichan choi thoa thichan choi thoa thichan choi thoa thich choi thoa thich',
  },
  {
    id: 154,
    name: 'Quy phu',
    address: 'bien dao',
    tourId: 1,
    departureTime: new Date(),
    content:
      'anan choi thoa thichan choi thoa thichan choi thoa thichan choi thoa thich choi thoa thich',
  },
  {
    id: 1123,
    name: 'Quy phu',
    address: 'bien dao',
    tourId: 1,
    departureTime: new Date(),
    content:
      'anan choi thoa thichan choi thoa thichan choi thoa thichan choi thoa thich choi thoa thich',
  },
  {
    id: 1246,
    name: 'Quy phu',
    address: 'bien dao',
    tourId: 1,
    departureTime: new Date(),
    content:
      'anan choi thoa thichan choi thoa thichan choi thoa thichan choi thoa thich choi thoa thich',
  },
  {
    id: 168,
    name: 'Quy phu',
    address: 'bien dao',
    tourId: 1,
    departureTime: new Date(),
    content:
      'anan choi thoa thichan choi thoa thichan choi thoa thichan choi thoa thich choi thoa thich',
  },
];

export const DestinationList = ({}: DestinationListProps) => {
  return (
    <View>
      <FlatList
        data={destinations}
        renderItem={({item}) => <DestinationItem destination={item} />}
        keyExtractor={item => `${item.id}`}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Text className="text-gray-500">Chua co bai dang</Text>
          </View>
        }
      />
    </View>
  );
};

export default DestinationList;
