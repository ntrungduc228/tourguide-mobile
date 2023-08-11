import {View, Text} from 'react-native';
import React from 'react';
import {ScreenBackLayout} from '../../screens/components';
import {RouteProp} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/native';
import AppointmentItem from './AppointmentItem';

type AppoimentListScreenRouteProp = RouteProp<ParamListBase, string>;

type AppoimentListScreenProps = {
  route: AppoimentListScreenRouteProp;
};

export const AppointmentList = ({}: AppoimentListScreenProps) => {
  return (
    <ScreenBackLayout>
      <ScreenBackLayout.Header title="Điểm hẹn" />
      <AppointmentItem />
    </ScreenBackLayout>
  );
};

export default AppointmentList;