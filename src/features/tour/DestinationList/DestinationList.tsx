import {View, Text} from 'react-native';
import React from 'react';
import DestinationItem from './DestinationItem';

type DestinationListProps = {};

export const DestinationList = ({}: DestinationListProps) => {
  return (
    <View>
      <DestinationItem />
    </View>
  );
};

export default DestinationList;
