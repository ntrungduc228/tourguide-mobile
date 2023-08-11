import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Menu} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DialogConfirm, ModalTrigger} from '../../../components';
import routesScreen from '../../../navigations/routes';
import {MemberAdd} from '../Member';
import {OutTour} from '../OutTour';

// type SourceScreenNavigationProp = StackNavigationProp<ParamListBase>;

type MenuTourProps = {
  visible: boolean;
  setVisible: (value: boolean) => void;
};

export const MenuTour = ({visible, setVisible}: MenuTourProps) => {
  const navigation = useNavigation<Nav>();
  const closeMenu = () => setVisible(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openAddMember, setOpenAddMember] = useState<boolean>(false);
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
            setOpenAddMember(true);
          }}
          title="Thêm thành viên"
        />
        <Menu.Item
          onPress={() => {
            setVisible(false);
            setOpenDialog(true);
          }}
          title="Rời khỏi tour"
        />
        <Menu.Item
          onPress={() => {
            setVisible(false);
            navigation.navigate(
              routesScreen.AppointmentItem,
              JSON.stringify({tour: 3453, abc: 23432}),
            );
          }}
          title="Diem hen"
        />
        {/* <Divider /> */}
      </Menu>
      <View>
        <ModalTrigger visible={openAddMember} setVisible={setOpenAddMember}>
          <MemberAdd setOpenModal={setOpenAddMember} />
        </ModalTrigger>
        <DialogConfirm visible={openDialog} setVisible={setOpenDialog}>
          <OutTour setVisible={setOpenDialog} />
        </DialogConfirm>
      </View>
    </View>
  );
};

export default MenuTour;
