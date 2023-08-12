import {View, Text} from 'react-native';
import React from 'react';
import {ScreenBackLayout} from '../../../screens/components';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../stores';
import {useQuery} from '@tanstack/react-query';
import tourService from '../../../services/tourService';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

type TourViewProps = {};

export const TourView = ({}: TourViewProps) => {
  const navigation = useNavigation<Nav>();
  const tourId = useSelector((state: IRootState) => state.tour.tourId);
  const {data} = useQuery({
    queryKey: ['tourDetail', tourId],
    enabled: !!tourId,
    queryFn: () => tourService.getTourById(tourId!),
  });

  return (
    <ScreenBackLayout>
      <ScreenBackLayout.Header title="Thông tin tour" />
      <View className="p-3">
        <View className="flex-row items-center">
          <Text className="text-lg font-bold text-black">Tên tour: </Text>
          <Text className="break-all text-lg">{data?.data.name}</Text>
        </View>
        <View className="mt-4 flex-row items-center">
          <Text className="text-lg font-bold text-black">Mô tả: </Text>
          <Text className="break-all text-lg">{data?.data.description}</Text>
        </View>
        <View className="items-center mt-10">
          <Button mode="elevated" className="w-[200] bg-cyan-400">
            <Text className="text-white">Sửa thông tin</Text>
          </Button>
        </View>
      </View>
    </ScreenBackLayout>
  );
};

export default TourView;
