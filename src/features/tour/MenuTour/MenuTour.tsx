import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button, Menu, Divider, PaperProvider} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

type MenuTourProps = {
  visible: boolean;
  setVisible: (value: boolean) => void;
};

export const MenuTour = ({visible, setVisible}: MenuTourProps) => {
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
        style={
          {
            //   marginRight: 0,
          }
        }
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Ionicons name="options" size={25} />
          </TouchableOpacity>
        }>
        <Menu.Item onPress={() => {}} title="Thêm thành viên" />
        <Menu.Item onPress={() => {}} title="Item 2" />
        {/* <Divider /> */}
        <Menu.Item onPress={() => {}} title="Item 3" />
      </Menu>
    </View>
  );
};

export default MenuTour;
