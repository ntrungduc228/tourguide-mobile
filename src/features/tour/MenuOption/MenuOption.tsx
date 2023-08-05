import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MenuTour} from '../MenuTour';

type Props = {};

export const MenuOption = (props: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <View className="flex bg-white flex-row justify-between p-3">
      <View>
        <Text className="font-bold text-md text-black">
          chuyen di hanh trinh
        </Text>
      </View>
      <View>
        <MenuTour visible={visible} setVisible={setVisible} />
      </View>
    </View>
  );
};

export default MenuOption;
