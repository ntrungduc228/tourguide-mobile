import {Text, View, SafeAreaView} from 'react-native';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import React from 'react';
import {Travel} from '../features/tour';
type TourRouteProp = RouteProp<ParamListBase, string>;

type Props = {
  route: TourRouteProp;

};

export const TourScreen = ({route}: Props) => {
  return (
    // <SafeAreaView>
    <Travel route={route}/>
    // </SafeAreaView>
  );
};

export default TourScreen;
