import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {BottomTabNavigator} from './index';
import routesScreen from './routes';
import {
  DestinationForm,
  TourDestination,
  TourEdit,
  TourForm,
  TourInfo,
  TourList,
  TourView,
  Travel,
} from '../features/tour';
import {
  AppointmentForm,
  AppointmentItem,
  AppointmentList,
} from '../features/appointment';
import ProfileEdit from '../screens/ProfileEdit';
import {MapDirection} from '../features/map';
import ChangePassword from '../screens/ChangePassword';

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
      <MainStack.Screen
        name={routesScreen.TourView}
        component={TourView}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={routesScreen.TourEdit}
        component={TourEdit}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={routesScreen.AppointmentForm}
        component={AppointmentForm}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={routesScreen.MapDirection}
        component={MapDirection}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={routesScreen.ProfileEdit}
        component={ProfileEdit}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={routesScreen.ChangePassword}
        component={ChangePassword}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
}
