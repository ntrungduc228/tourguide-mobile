import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Menu} from 'react-native-paper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {ModalTrigger} from '../../../components';
import routesScreen from '../../../navigations/routes';
import {Destination} from '../../../types/destination';
import {DestinationForm} from '../TourForm';

type Props = {
  visible: boolean;
  setVisible: (value: boolean) => void;
  destination: Destination;
};

export const MenuDestinationItem = ({
  visible,
  setVisible,
  destination,
}: Props) => {
  console.log('timeê', destination);
  const navigation = useNavigation<Nav>();
  const closeMenu = () => setVisible(false);
  const [openEditDestination, setEditDestination] = useState<boolean>(false);
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
          title="Điểm hẹn"
        />
        <Menu.Item
          onPress={() => {
            setVisible(false);
            setEditDestination(true);
            //   setOpenAddMember(true);
          }}
          title=" Chỉnh sửa"
        />
      </Menu>
      <ModalTrigger
        visible={openEditDestination}
        setVisible={setEditDestination}>
        <DestinationForm
          destination={null}
          setOpenDestinationForm={setEditDestination}
        />
      </ModalTrigger>
    </View>
  );
};

export default MenuDestinationItem;
