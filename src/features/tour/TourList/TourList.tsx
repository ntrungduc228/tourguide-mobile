import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {ScreenBackLayout} from '../../../screens/components';
import TourListItem from './TourListItem';
import {Tour} from '../../../types/tour';
import {useQuery} from '@tanstack/react-query';
import {useSelector} from 'react-redux';
import tourService from '../../../services/tourService';
import {RefreshControl} from 'react-native-gesture-handler';
import {Spinner} from '../../../components/Spinner';

type TourListProps = {};

// const tours: Tour[] = [
//   {
//     id: 1,
//     name: 'Tou moi',
//     description:
//       'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
//     destinations: [],
//     isProgress: false,
//   },
//   {
//     id: 234,
//     name: 'Tou moi',
//     description:
//       'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
//     destinations: [],
//     isProgress: false,
//   },
//   {
//     id: 1345,
//     name: 'Tou moi',
//     description:
//       'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
//     destinations: [],
//     isProgress: false,
//   },
//   {
//     id: 165,
//     name: 'Tou moi',
//     description:
//       'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
//     destinations: [],
//     isProgress: false,
//   },
//   {
//     id: 156,
//     name: 'Tou moi',
//     description:
//       'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
//     destinations: [],
//     isProgress: false,
//   },
//   {
//     id: 14556,
//     name: 'Tou moi',
//     description:
//       'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
//     destinations: [],
//     isProgress: false,
//   },
//   {
//     id: 145,
//     name: 'Tou moi',
//     description:
//       'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
//     destinations: [],
//     isProgress: false,
//   },
//   {
//     id: 651,
//     name: 'Tou moi',
//     description:
//       'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
//     destinations: [],
//     isProgress: false,
//   },
//   {
//     id: 6551,
//     name: 'Tou moi',
//     description:
//       'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
//     destinations: [],
//     isProgress: false,
//   },
//   {
//     id: 1453,
//     name: 'Tou moi123',
//     description:
//       'fdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsd',
//     destinations: [],
//     isProgress: false,
//   },
// ];

export const TourList = ({}: TourListProps) => {
  const {
    data: tours,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['toursOwn'],
    queryFn: tourService.getOwnTour,
    onSuccess: data => {
      // console.log('data  tour ', data);
    },
  });

  return (
    <SafeAreaView>
      <ScreenBackLayout>
        <ScreenBackLayout.Header title="Tour của tôi" />
        <ScreenBackLayout.Body>
          {/* {isLoading && <Spinner />} */}
          <FlatList
            data={tours?.data}
            renderItem={({item}) => <TourListItem tour={item} />}
            keyExtractor={item => `${item.id}`}
            ListEmptyComponent={
              <View className="flex-1 items-center justify-center">
                <Text className="text-gray-500">Chua co tour</Text>
              </View>
            }
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={refetch} />
            }
          />
        </ScreenBackLayout.Body>
      </ScreenBackLayout>
    </SafeAreaView>
  );
};

export default TourList;
