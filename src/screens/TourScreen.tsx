import {Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {Travel} from '../features/tour';

type Props = {};

export const TourScreen = ({}: Props) => {
  return (
    // <SafeAreaView>
    <Travel />
    // </SafeAreaView>
  );
};

export default TourScreen;
