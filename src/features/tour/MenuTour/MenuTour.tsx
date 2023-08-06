import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Button, Menu, Divider, PaperProvider} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DialogConfirm} from '../../../components';
import {OutTour} from '../OutTour';

type MenuTourProps = {
  visible: boolean;
  setVisible: (value: boolean) => void;
};

export const MenuTour = ({visible, setVisible}: MenuTourProps) => {
  const closeMenu = () => setVisible(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
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
        <Menu.Item
          onPress={() => {
            setVisible(false);
            setOpenDialog(true);
          }}
          title="Rời khỏi tour"
        />
        {/* <Divider /> */}
        <Menu.Item onPress={() => {}} title="Item 3" />
      </Menu>
      <View>
        <DialogConfirm visible={openDialog} setVisible={setOpenDialog}>
          <OutTour setVisible={setOpenDialog} />
        </DialogConfirm>
      </View>
    </View>
  );
};

export default MenuTour;
