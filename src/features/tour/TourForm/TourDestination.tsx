import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTour} from './TourForm';
import {Destination} from '../../../types/destination';
import {formatDateTime} from '../../../utils/formatDate';

type TourDestinationProps = {};

export const TourDestination = ({}: TourDestinationProps) => {
  const {tour} = useTour();
  return (
    <View className="py-4">
      <View className="flex-row justify-between px-3 mb-2 items-center pr-4">
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={20} />
        </TouchableOpacity>
        <Button mode="text" className="bg-red-500 w-[80] mr-10">
          <Text className="text-white">Hủy</Text>
        </Button>
        <TouchableOpacity className="ml-2" onPress={() => {}}>
          <Text className=""> Tạo</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Button mode="text" className="bg-cyan-500 max-w-[150] mr-10">
          <Text className="text-white">+</Text>
        </Button>
      </View>
      <View className="mt-5 ">
        {tour?.destinations?.length && (
          <FlatList
            data={tour.destinations}
            renderItem={({item}) => <TourDestinationItem destination={item} />}
            keyExtractor={item => `${item.id}`}
            ListEmptyComponent={
              <View className="flex-1 items-center justify-center">
                <Text className="text-gray-500">Chua co bai dang</Text>
              </View>
            }
          />
        )}
      </View>
    </View>
  );
};

export default TourDestination;

export const TourDestinationItem = ({
  destination,
}: {
  destination: Destination;
}) => {
  return (
    <View className="flex-row mb-4 mx-3 rounded-lg justify-between items-center  border-slate-400 shadow-lg bg-white  p-4">
      <View className="flex gap-1 max-w-[80%] ">
        <Text>{formatDateTime(destination.departureTime)}</Text>
        <Text className="break-all">{destination.name}</Text>
      </View>
      <View className="flex-row gap-4 pr-3">
        <TouchableOpacity>
          <AntDesign name="edit" size={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="delete" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
