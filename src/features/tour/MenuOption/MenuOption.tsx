import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MenuTour} from '../MenuTour';
import {useNavigation} from '@react-navigation/native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../stores';

type Props = {};

export const MenuOption = ({}: Props) => {
  const navigation = useNavigation<Nav>();
  const tour = useSelector((state: IRootState) => state.tour.tour);
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <View className="flex bg-white flex-row justify-between p-3">
      <View>
        <TouchableOpacity className="" onPress={() => navigation.goBack()}>
          <IconFontAwesome5 name="arrow-left" size={20} />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="font-bold text-md text-black">{tour?.name}</Text>
        <Text className="text-black">Mã tour: {tour?.id}</Text>
      </View>
      <View>
        <MenuTour visible={visible} setVisible={setVisible} />
      </View>
    </View>
  );
};

export default MenuOption;
