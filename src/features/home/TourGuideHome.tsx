import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import routesScreen from '../../navigations/routes';
import HomeItem from './HomeItem';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

type TourGuideProps = {};

export const TourGuideHome = ({}: TourGuideProps) => {
  const navigation = useNavigation<Nav>();
  return (
    <View className="h-full">
      <View className="flex-row justify-center ">
        <Button
          mode="elevated"
          className="w-[200] text-black bg-white"
          onPress={() => navigation.navigate(routesScreen.TourForm)}>
          <AntDesign name="plus" size={14} color="#000" />
          <Text className="ml-2 text-black">Tạo tour</Text>
        </Button>
      </View>
      <View className="flex-1  justify-center">
        <View className="flex-row flex-wrap flex mx-auto">
          <HomeItem
            onPress={() => navigation.navigate(routesScreen.TourList)}
            title="Lich sử tour"
            icon={<FontAwesome5 size={30} color={'#000'} name="history" />}
          />
          <HomeItem
            onPress={() => navigation.navigate(routesScreen.Tour)}
            title="Tour hiện tại"
            icon={<FontAwesome size={30} color={'#000'} name="calendar" />}
          />
          <HomeItem
            onPress={() => navigation.navigate(routesScreen.Tour)}
            title="Viết bài"
            icon={<Entypo size={30} color={'#000'} name="pencil" />}
          />
          <HomeItem
            onPress={() => navigation.navigate(routesScreen.Tour)}
            title="Điểm hẹn"
            icon={
              <FontAwesome5 size={30} color={'#000'} name="map-marker-alt" />
            }
          />
        </View>
      </View>
    </View>
  );
};

export default TourGuideHome;
