import {Text, View, SafeAreaView} from 'react-native';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import React from 'react';
import {Travel} from '../features/tour';
import CurTour from '../features/tour/CurTour';
type TourRouteProp = RouteProp<ParamListBase, string>;

type Props = {
  route: TourRouteProp;
};

export const TourScreen = ({route}: Props) => {
  return <CurTour route={route} />;
};

export default TourScreen;
