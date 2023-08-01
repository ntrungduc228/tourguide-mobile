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
      <BottomTab.Screen name={routesScreen.Home} component={HomeScreen} />
      <BottomTab.Screen name={routesScreen.Tour} component={TourScreen} />

      <BottomTab.Screen
        name={routesScreen.Notification}
        component={NotificationScreen}
      />
      <BottomTab.Screen name={routesScreen.Profile} component={ProfileScreen} />
    </BottomTab.Navigator>
  );
}
