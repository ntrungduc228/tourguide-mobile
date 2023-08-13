import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {RouteProp} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/native';
import {formatDateTime} from '../../utils/formatDate';
import {Appointment} from '../../types/appointment';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppointmentMenuTourGuide from './AppointmentMenuTourGuide';
import {useSelector} from 'react-redux';
import {IRootState} from '../../stores';
import AppointmentMenuTourist from './AppointmentMenuTourist';
import {verifyTourist} from '../../utils/verifyRole';

type AppoimentItemScreenProps = {
  appointment: Appointment;
};

export const AppointmentItem = ({appointment}: AppoimentItemScreenProps) => {
  const user = useSelector((state: IRootState) => state.user.data.info);
  const [visibleOptions, setVisibleOptions] = useState<boolean>(false);

  let menu: JSX.Element = <></>;

  if (user && verifyTourist(user?.role)) {
    menu = (
      <AppointmentMenuTourist
        setVisible={setVisibleOptions}
        visible={visibleOptions}
      />
    );
  } else {
    menu = (
      <AppointmentMenuTourGuide
        setVisible={setVisibleOptions}
        visible={visibleOptions}
      />
    );
  }

  return (
    <View className="bg-white my-3 shadow p-3 mx-2 rounded-lg py-4 flex-row items-center justify-between">
      <View className="max-w-[80%]">
        <Text className="font-bold text-black ">
          {formatDateTime(appointment.time)}
        </Text>
        <Text className="text-cyan-800">{appointment.address}</Text>
        <View>
          <Text className="italic">{appointment.content}</Text>
        </View>
      </View>
      <View className="flex-row">
        <TouchableOpacity className="mr-5">
          <FontAwesome5 name="map-marker-alt" size={24} color={'#000'} />
        </TouchableOpacity>
        <TouchableOpacity>
          {menu}
          {/* <SimpleLineIcons name="options-vertical" size={24} color={'#000'} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppointmentItem;
