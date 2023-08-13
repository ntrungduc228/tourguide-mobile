import {View, Text} from 'react-native';
import React from 'react';
import {ScreenBackLayout} from '../../../screens/components';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '../../../stores';
import {useQuery} from '@tanstack/react-query';
import tourService from '../../../services/tourService';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {
  setIsEdit,
  setIsEnterDestination,
  setTour,
} from '../../../stores/slices/tourSlice';
import routesScreen from '../../../navigations/routes';
import {DestinationList} from '../DestinationList';
import {verifyTourist} from '../../../utils/verifyRole';

type TourViewProps = {};

export const TourView = ({}: TourViewProps) => {
  const navigation = useNavigation<Nav>();
  const tourId = useSelector((state: IRootState) => state.tour.tourId);
  const user = useSelector((state: IRootState) => state.user.data.info);
  const {data} = useQuery({
    queryKey: ['tourDetail', tourId],
    enabled: !!tourId,
    queryFn: () => tourService.getTourById(tourId!),
  });

  let editComponent: JSX.Element = <></>;

  if (user && !verifyTourist(user?.role)) {
    editComponent = (
      <View className="items-center mt-10">
        <Button
          mode="elevated"
          className="w-[200] bg-cyan-400"
          onPress={() => {
            dispatch(setTour(data?.data));
            dispatch(setIsEdit(true));
            dispatch(setIsEnterDestination(false));
            navigation.navigate(
              routesScreen.TourForm,
              // JSON.stringify({isEdit: true}),
            );
          }}>
          <Text className="text-white">Sửa thông tin</Text>
        </Button>
      </View>
    );
  }

  const dispatch = useDispatch();

  return (
    <ScreenBackLayout>
      <ScreenBackLayout.Header title="Thông tin tour" />
      {editComponent}
      <View className="p-3">
        <View className="flex-row items-center">
          <Text className="text-lg font-bold text-black">Tên tour: </Text>
          <Text className="break-all text-lg">{data?.data.name}</Text>
        </View>
        <View className="mt-4 flex-row items-center">
          <Text className="text-lg font-bold text-black">Mô tả: </Text>
          <Text className="break-all text-lg">{data?.data.description}</Text>
        </View>

        <View>
          <DestinationList />
        </View>
      </View>
    </ScreenBackLayout>
  );
};

export default TourView;
