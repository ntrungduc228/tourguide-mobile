import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import routesScreen from '../../navigations/routes';
import HomeItem from './HomeItem';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ModalTrigger} from '../../components';
import {JoinTour} from '../tour';

type TouristHomeProps = {};

export const TouristHome = ({}: TouristHomeProps) => {
  const navigation = useNavigation<Nav>();
  const [joinTour, setJoinTour] = useState<boolean>(false);
  return (
    <View className="h-full px-4">
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
            onPress={() => setJoinTour(true)}
            title="Tham gia"
            icon={
              <MaterialCommunityIcons
                size={30}
                color={'#000'}
                name="wallet-travel"
              />
            }
          />
        </View>
      </View>
      <ModalTrigger visible={joinTour} setVisible={setJoinTour}>
        <JoinTour setVisible={setJoinTour} />
      </ModalTrigger>
    </View>
  );
};

export default TouristHome;
