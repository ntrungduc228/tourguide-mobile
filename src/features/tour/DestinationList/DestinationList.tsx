import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import DestinationItem from './DestinationItem';
import {Destination} from '../../../types/destination';
import {useQuery} from '@tanstack/react-query';
import tourService from '../../../services/tourService';

type DestinationListProps = {};

// const destinations: Destination[] = [
//   {
//     id: 1,
//     name: 'Quy phu',
//     address: 'bien dao',
//     tourId: 1,
//     departureTime: new Date(),
//     content:
//       'anan choi thoa thichan choi thoa thichan choi thoa thichan choi thoa thich choi thoa thich',
//   },
//   {
//     id: 41,
//     name: 'Quy phu',
//     address: 'bien dao',
//     tourId: 1,
//     departureTime: new Date(),
//     content:
//       'anan choi thoa thichan choi thoa thichan choi thoa thichan choi thoa thich choi thoa thich',
//   },
//   {
//     id: 15,
//     name: 'Quy phu',
//     address: 'bien dao',
//     tourId: 1,
//     departureTime: new Date(),
//     content:
//       'anan choi thoa thichan choi thoa thichan choi thoa thichan choi thoa thich choi thoa thich',
//   },
//   {
//     id: 31,
//     name: 'Quy phu',
//     address: 'bien dao',
//     tourId: 1,
//     departureTime: new Date(),
//     content:
//       'anan choi thoa thichan choi thoa thichan choi thoa thichan choi thoa thich choi thoa thich',
//   },
//   {
//     id: 154,
//     name: 'Quy phu',
//     address: 'bien dao',
//     tourId: 1,
//     departureTime: new Date(),
//     content:
//       'anan choi thoa thichan choi thoa thichan choi thoa thichan choi thoa thich choi thoa thich',
//   },
//   {
//     id: 1123,
//     name: 'Quy phu',
//     address: 'bien dao',
//     tourId: 1,
//     departureTime: new Date(),
//     content:
//       'anan choi thoa thichan choi thoa thichan choi thoa thichan choi thoa thich choi thoa thich',
//   },
//   {
//     id: 1246,
//     name: 'Quy phu',
//     address: 'bien dao',
//     tourId: 1,
//     departureTime: new Date(),
//     content:
//       'anan choi thoa thichan choi thoa thichan choi thoa thichan choi thoa thich choi thoa thich',
//   },
//   {
//     id: 168,
//     name: 'Quy phu',
//     address: 'bien dao',
//     tourId: 1,
//     departureTime: new Date(),
//     content:
//       'anan choi thoa thichan choi thoa thichan choi thoa thichan choi thoa thich choi thoa thich',
//   },
// ];

export const DestinationList = ({}: DestinationListProps) => {
  const [destinations, setDestination] = useState<Destination[]>([]);
  //dữ liệu giả
  const {data: destinationTour} = useQuery({
    queryKey: ['destination', 1],
    queryFn: () => tourService.getDestinationsTour(1),
    onSuccess(data) {
      setDestination(data?.data);
      // setMembers(data);
    },
    // enabled: !!valueInput,
  });
  console.log(destinations);
  return (
    <View>
      <FlatList
        data={destinations}
        renderItem={({item}) => <DestinationItem destination={item} />}
        keyExtractor={item => `${item.id}`}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Text className="text-gray-500">Chưa có lịch trình</Text>
          </View>
        }
      />
    </View>
  );
};

export default DestinationList;
