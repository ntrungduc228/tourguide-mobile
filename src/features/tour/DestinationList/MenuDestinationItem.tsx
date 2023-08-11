import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Menu} from 'react-native-paper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
import routesScreen from '../../../navigations/routes';

type Props = {
  visible: boolean;
  setVisible: (value: boolean) => void;
};

export const MenuDestinationItem = ({visible, setVisible}: Props) => {
  const navigation = useNavigation<Nav>();
  const closeMenu = () => setVisible(false);
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Menu
        visible={visible}
        // eslint-disable-next-line react-native/no-inline-styles
        contentStyle={{
          backgroundColor: '#fff',
        }}
        style={{}}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity onPress={() => setVisible(true)}>
            <SimpleLineIcons name="options-vertical" size={20} />
          </TouchableOpacity>
        }>
        <Menu.Item
          onPress={() => {
            setVisible(false);
            //   setOpenAddMember(true);
            navigation.navigate(routesScreen.AppointmentList);
          }}
          title=" diem hen"
        />
      </Menu>
    </View>
  );
};

export default MenuDestinationItem;
