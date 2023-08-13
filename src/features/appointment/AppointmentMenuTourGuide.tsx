import {View, Text, TouchableOpacity} from 'react-native';
import {Menu} from 'react-native-paper';
import React, {useState} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {AttendanceList} from '../attendance';
import {ModalTrigger} from '../../components';

type Props = {
  visible: boolean;
  setVisible: (value: boolean) => void;
};

export const AppointmentMenuTourGuide = ({visible, setVisible}: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
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
        onDismiss={() => setVisible(false)}
        anchor={
          <TouchableOpacity onPress={() => setVisible(true)}>
            <SimpleLineIcons name="options-vertical" size={24} color={'#000'} />
          </TouchableOpacity>
        }>
        <Menu.Item
          onPress={() => {
            setVisible(false);
            setOpenModal(true);
          }}
          title="Điểm danh"
        />
      </Menu>
      <ModalTrigger visible={openModal} setVisible={setOpenModal}>
        <AttendanceList setOpenModal={setOpenModal}/>
      </ModalTrigger>
    </View>
  );
};

export default AppointmentMenuTourGuide;
