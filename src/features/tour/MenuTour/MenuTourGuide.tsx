import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Menu} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import routesScreen from '../../../navigations/routes';
import {MemberAdd} from '../Member';
import {OutTour} from '../OutTour';
import {DialogConfirm, ModalTrigger} from '../../../components';

type MenuTourGuideProps = {
  visible: boolean;
  setVisible: (value: boolean) => void;
  closeMenu: () => void;
};

export const MenuTourGuide = ({
  visible,
  setVisible,
  closeMenu,
}: MenuTourGuideProps) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const navigation = useNavigation<Nav>();

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
        <Menu.Item
          onPress={() => {
            setVisible(false);
            navigation.navigate(routesScreen.TourView);
          }}
          title="Thông tin tour"
        />

        {/* <Divider /> */}
      </Menu>
      <View>
        <DialogConfirm visible={openDialog} setVisible={setOpenDialog}>
          <OutTour setVisible={setOpenDialog} />
        </DialogConfirm>
      </View>
    </View>
  );
};

export default MenuTourGuide;
