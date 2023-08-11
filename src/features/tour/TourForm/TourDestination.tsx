import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Button} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Destination} from '../../../types/destination';
import {formatDateTime} from '../../../utils/formatDate';
import DestinationForm from './DestinationForm';
import {useTour} from './TourForm';
import {useMutation} from '@tanstack/react-query';
import tourService from '../../../services/tourService';

type TourDestinationProps = {};

export const TourDestination = ({}: TourDestinationProps) => {
  const [openDestinationForm, setOpenDestinationForm] =
    useState<boolean>(false);
  const [itemEdit, setItemEdit] = useState<Destination | null>(null);

  const {tour} = useTour();

  const {mutate: createTourMutation} = useMutation({
    mutationFn: tourService.createTour,
    onError: (error: any) => {
      console.log('erorr ', JSON.stringify(error));
    },
  });

  const handleCreateTour = () => {
    if (!!tour?.destinations) {
      console.log('muta');
      createTourMutation(tour!!);
    } else {
      console.log('ban loi');
    }
  };

  return (
    <View>
      {!openDestinationForm && (
        <View className="py-4">
          <View className="flex-row justify-between px-3 mb-2 items-center pr-4">
            <TouchableOpacity>
              <AntDesign name="arrowleft" size={20} />
            </TouchableOpacity>
            <Button mode="text" className="bg-red-500 w-[80] mr-10">
              <Text className="text-white">Hủy</Text>
            </Button>
            <TouchableOpacity
              className="ml-2"
              onPress={() => {
                console.log('click');
                handleCreateTour();
              }}>
              <Text className=""> Tạo</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Button
              mode="text"
              className="bg-cyan-500 max-w-[150] mr-10"
              onPress={() => {
                setOpenDestinationForm(true);
                setItemEdit(null);
              }}>
              <Text className="text-white">+</Text>
            </Button>
          </View>
          <View className="mt-5 ">
            {!!tour?.destinations?.length && (
              <FlatList
                data={tour.destinations}
                renderItem={({item}) => (
                  <TourDestinationItem
                    destination={item}
                    onEdit={() => {
                      setItemEdit(item);
                      setOpenDestinationForm(true);
                    }}
                  />
                )}
                keyExtractor={(item, index) => `${index}`}
                ListEmptyComponent={
                  <View className="flex-1 items-center justify-center">
                    <Text className="text-gray-500">Chưa có bài đăng</Text>
                  </View>
                }
              />
            )}
          </View>
        </View>
      )}
      {openDestinationForm && (
        <DestinationForm
          setOpenDestinationForm={setOpenDestinationForm}
          destination={itemEdit}
        />
      )}
    </View>
  );
};

export default TourDestination;

export const TourDestinationItem = ({
  destination,
  onEdit,
}: // onDelete,
{
  // setIsEditing: (value: boolean) => void;
  destination: Destination;
  onEdit: () => void;
  // onDelete: () => void;
}) => {
  const {tour, setTour} = useTour();
  const handleDeleteDestination = (destination: Destination) => {
    if (tour) {
      const temp = tour.destinations.filter(item => {
        return item !== destination;
      });

      setTour({...tour, destinations: temp});
    }
  };
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
        <TouchableOpacity
          onPress={() => {
            console.log('click');
            handleDeleteDestination(destination);
          }}>
          <AntDesign name="delete" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
