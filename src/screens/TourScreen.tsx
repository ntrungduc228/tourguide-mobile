import {ParamListBase, RouteProp} from '@react-navigation/native';
import React from 'react';
import CurTour from '../features/tour/CurTour';
type TourRouteProp = RouteProp<ParamListBase, string>;

type Props = {
  route: TourRouteProp;
};

export const TourScreen = ({route}: Props) => {
  return <CurTour route={route} />;
};

export default TourScreen;
