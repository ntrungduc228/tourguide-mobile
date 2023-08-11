import {View, Text} from 'react-native';
import React from 'react';
import {ScreenBackLayout} from '../../screens/components';

import {RouteProp} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/native';

type AppoimentItemScreenRouteProp = RouteProp<ParamListBase, 'AppoimentItem'>;

type AppoimentItemScreenProps = {
  route: ParamListBase;
};

export const AppointmentItem = ({route}: AppoimentItemScreenProps) => {
  console.log('route ', route.params);
  return (
    <ScreenBackLayout>
      <ScreenBackLayout.Header title="Diem hen" />
      <ScreenBackLayout.Body>
        <Text>AppointmentItem</Text>
      </ScreenBackLayout.Body>
    </ScreenBackLayout>
  );
};

export default AppointmentItem;
