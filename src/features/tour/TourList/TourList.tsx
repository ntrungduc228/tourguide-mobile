import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {ScreenBackLayout} from '../../../screens/components';
import TourListItem from './TourListItem';
import {Tour} from '../../../types/tour';

type TourListProps = {};

const tours: Tour[] = [
  {
    id: 1,
    name: 'Tou moi',
    description:
      'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
    destinations: [],
    isProgress: false,
  },
  {
    id: 234,
    name: 'Tou moi',
    description:
      'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
    destinations: [],
    isProgress: false,
  },
  {
    id: 1345,
    name: 'Tou moi',
    description:
      'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
    destinations: [],
    isProgress: false,
  },
  {
    id: 165,
    name: 'Tou moi',
    description:
      'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
    destinations: [],
    isProgress: false,
  },
  {
    id: 156,
    name: 'Tou moi',
    description:
      'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
    destinations: [],
    isProgress: false,
  },
  {
    id: 14556,
    name: 'Tou moi',
    description:
      'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
    destinations: [],
    isProgress: false,
  },
  {
    id: 145,
    name: 'Tou moi',
    description:
      'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
    destinations: [],
    isProgress: false,
  },
  {
    id: 651,
    name: 'Tou moi',
    description:
      'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
    destinations: [],
    isProgress: false,
  },
  {
    id: 6551,
    name: 'Tou moi',
    description:
      'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
    destinations: [],
    isProgress: false,
  },
  {
    id: 1453,
    name: 'Tou moi',
    description:
      'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
    destinations: [],
    isProgress: false,
  },
];

export const TourList = ({}: TourListProps) => {
  return (
    <ScreenBackLayout>
      <ScreenBackLayout.Header title="Tour cua toi" />
      <ScreenBackLayout.Body>
        <FlatList
          data={tours}
          renderItem={({item}) => <TourListItem tour={item} />}
          keyExtractor={item => `${item.id}`}
          ListEmptyComponent={
            <View className="flex-1 items-center justify-center">
              <Text className="text-gray-500">Chua co tour</Text>
            </View>
          }
        />
      </ScreenBackLayout.Body>
    </ScreenBackLayout>
  );
};

export default TourList;
