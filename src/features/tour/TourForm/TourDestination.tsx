import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTour} from './TourForm';
import {Destination} from '../../../types/destination';
import {formatDateTime} from '../../../utils/formatDate';
import {ModalTrigger} from '../../../components';
import DestinationForm from './DestinationForm';
import {useNavigation} from '@react-navigation/native';
import routesScreen from '../../../navigations/routes';

type TourDestinationProps = {};

export const TourDestination = ({}: TourDestinationProps) => {
  const [openDestinationForm, setOpenDestinationForm] =
    useState<boolean>(false);
  // const [destination, setDestination] = useState<Destination>(
  //   {} as Destination,
  // );

  const navigation = useNavigation<Nav>();

  // useEffect(() => {
  //   if(openDestinationForm){
  //     navigation.navigate(routesScreen.DestinationForm))
  //   }
  // }, [openDestinationForm]);

  const {tour, setDestination} = useTour();
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
            renderItem={({item}) => (
              <TourDestinationItem
                // setIsEditing={setOpenDestinationForm}
                destination={item}
                onEdit={() => {
                  setDestination(item);
                  navigation.navigate(routesScreen.DestinationForm);
                }}
              />
            )}
            keyExtractor={item => `${item.id}`}
            ListEmptyComponent={
              <View className="flex-1 items-center justify-center">
                <Text className="text-gray-500">Chua co bai dang</Text>
              </View>
            }
          />
        )}
      </View>
      {/* <ModalTrigger
        visible={openDestinationForm}
        setVisible={setOpenDestinationForm}>
        <DestinationForm
          setIsEditing={setOpenDestinationForm}
          destination={destination}
          setDestination={setDestination}
        />
      </ModalTrigger> */}
    </View>
  );
};

export default TourDestination;

export const TourDestinationItem = ({
  destination,
  onEdit,
}: {
  // setIsEditing: (value: boolean) => void;
  destination: Destination;
  onEdit: () => void;
}) => {
  return (
    <View className="flex-row mb-4 mx-3 rounded-lg justify-between items-center  border-slate-400 shadow-lg bg-white  p-4">
      <View className="flex gap-1 max-w-[80%] ">
        <Text>{formatDateTime(destination.departureTime)}</Text>
        <Text className="break-all">{destination.name}</Text>
      </View>
      <View className="flex-row gap-4 pr-3">
        <TouchableOpacity onPress={() => onEdit()}>
          <AntDesign name="edit" size={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="delete" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
