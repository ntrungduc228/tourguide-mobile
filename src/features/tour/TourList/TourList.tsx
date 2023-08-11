import {View, Text} from 'react-native';
import React from 'react';
import {ScreenBackLayout} from '../../../screens/components';

type TourListProps = {};

export const TourList = ({}: TourListProps) => {
  return (
    <ScreenBackLayout>
      <ScreenBackLayout.Header title="" />
      <Text>TourList</Text>
    </ScreenBackLayout>
  );
};

export default TourList;
