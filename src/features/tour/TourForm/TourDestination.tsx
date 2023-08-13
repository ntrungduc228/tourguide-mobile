import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Button} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import useToast from '../../../hooks/useToast';
import routesScreen from '../../../navigations/routes';
import tourService from '../../../services/tourService';
import {IRootState} from '../../../stores';
import {setTour} from '../../../stores/slices/tourSlice';
import {Destination} from '../../../types/destination';
import {formatDateTime} from '../../../utils/formatDate';
import DestinationForm from './DestinationForm';

type TourDestinationProps = {};

export const TourDestination = ({}: TourDestinationProps) => {
  const navigation = useNavigation<Nav>();
  const {tour, isEdit} = useSelector((state: IRootState) => state.tour);
  const [openDestinationForm, setOpenDestinationForm] =
    useState<boolean>(false);
  const [itemEdit, setItemEdit] = useState<Destination | null>(null);
  const {showToast} = useToast();

  // const {tour} = useTour();

  const {mutate: createTourMutation} = useMutation({
    mutationFn: tourService.createTour,
    onSuccess: () => {
      navigation.navigate(routesScreen.TourList);
    },
    onError: (error: any) => {
      console.log('erorr ', JSON.stringify(error));
    },
  });

  const {mutate: updateTourMutation} = useMutation({
    mutationFn: tourService.updateTour,
    onSuccess: data => {
      showToast('success', 'Cập nhật tour thành công');
      // navigation.navigate(routesScreen.TourList);
      console.log('data return', data);
    },
    onError: (error: any) => {
      console.log('erorr ', JSON.stringify(error));
    },
  });

  const handleCreateTour = () => {
    if (!!tour?.destinations) {
      createTourMutation(tour!!);
    } else {
      console.log('ban loi');
    }
  };

  const handleUpdateTour = () => {
    console.log('tour', tour);
    updateTourMutation(tour!!);
  };

  return (
    <View>
      {!openDestinationForm && (
        <View className="py-4">
          <View className="flex-row mb-15 justify-between px-3 mb-2 items-center pr-4">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={30} />
            </TouchableOpacity>
            {/* <Button
              mode="text"
              className="bg-red-500 w-[80] mr-10"
              onPress={() => navigation.goBack()}>
              <Text className="text-white">Hủy</Text>
            </Button> */}
            <TouchableOpacity
              className="ml-2"
              onPress={() => {
                if (!isEdit) {
                  handleCreateTour();
                } else {
                  handleUpdateTour();
                }
              }}>
              <Text className=""> {!isEdit ? 'Tạo' : 'Sửa'}</Text>
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
  // const {tour, setTour} = useTour();
  const {tour} = useSelector((state: IRootState) => state.tour);
  const dispatch = useDispatch();
  const handleDeleteDestination = (destination: Destination) => {
    if (tour) {
      const temp = tour.destinations.filter(item => {
        return item !== destination;
      });
      console.log('teom ', temp);
      dispatch(setTour({...tour, destinations: temp}));
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
            handleDeleteDestination(destination);
          }}>
          <AntDesign name="delete" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
