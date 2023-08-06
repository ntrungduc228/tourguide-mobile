import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import routesScreen from '../../navigations/routes';

type TourGuideProps = {};

export const TourGuideHome = ({}: TourGuideProps) => {
  const navigation = useNavigation<Nav>();
  return (
    <View>
      <View className="flex-row justify-center ">
        <Button
          mode="elevated"
          className="w-[200] text-black bg-white"
          onPress={() => navigation.navigate(routesScreen.TourForm)}>
          <AntDesign name="plus" size={14} color="#000" />
          <Text className="ml-2 text-black">Tạo tour</Text>
        </Button>
      </View>
    </View>
  );
};

export default TourGuideHome;
