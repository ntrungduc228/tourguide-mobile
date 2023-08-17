import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {IRootState} from '../../stores';
import {Appointment} from '../../types/appointment';
import {formatDateTime} from '../../utils/formatDate';
import {verifyTourist} from '../../utils/verifyRole';
import AppointmentMenuTourGuide from './AppointmentMenuTourGuide';
import AppointmentMenuTourist from './AppointmentMenuTourist';
import {useNavigation} from '@react-navigation/native';
import routesScreen from '../../navigations/routes';

type AppoimentItemScreenProps = {
  appointment: Appointment;
};

export const AppointmentItem = ({appointment}: AppoimentItemScreenProps) => {
  const user = useSelector((state: IRootState) => state.user.data.info);
  const [visibleOptions, setVisibleOptions] = useState<boolean>(false);

  const navigation = useNavigation<Nav>();

  let menu: JSX.Element = <></>;

  if (user && verifyTourist(user?.role)) {
    menu = (
      <AppointmentMenuTourGuide
        setVisible={setVisibleOptions}
        visible={visibleOptions}
        appointment={appointment}
      />
    );
  } else {
    menu = (
      <AppointmentMenuTourGuide
        setVisible={setVisibleOptions}
        visible={visibleOptions}
        appointment={appointment}
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
        <TouchableOpacity
          className="mr-5"
          onPress={() => navigation.navigate(routesScreen.MapDirection)}>
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
