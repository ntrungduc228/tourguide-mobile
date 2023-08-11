import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {BottomTabNavigator} from './index';
import routesScreen from './routes';
import {
  DestinationForm,
  TourDestination,
  TourForm,
  TourInfo,
  TourList,
  Travel,
} from '../features/tour';
import {AppointmentItem, AppointmentList} from '../features/appointment';

const MainStack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={routesScreen.BottomTab}
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={routesScreen.TourForm}
        component={TourForm}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={routesScreen.TourFormInfo}
        component={TourInfo}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={routesScreen.TourDestination}
        component={TourDestination}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={routesScreen.DestinationForm}
        component={DestinationForm}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={routesScreen.TourList}
        component={TourList}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={routesScreen.AppointmentItem}
        component={AppointmentItem}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={routesScreen.AppointmentList}
        component={AppointmentList}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={routesScreen.TourDetail}
        component={Travel}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
}
