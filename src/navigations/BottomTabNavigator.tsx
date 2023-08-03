import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
  TourScreen,
} from '../screens';
import routesScreen from './routes';
import React from 'react';

const BottomTab = createBottomTabNavigator();

export function BottomTabNavigator(): JSX.Element {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={routesScreen.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name={routesScreen.Tour}
        component={TourScreen}
        options={{
          headerShown: false,
        }}
      />

      <BottomTab.Screen
        name={routesScreen.Notification}
        component={NotificationScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name={routesScreen.Profile}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}
