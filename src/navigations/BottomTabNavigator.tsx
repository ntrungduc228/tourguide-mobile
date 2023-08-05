import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
  TourScreen,
} from '../screens';
import routesScreen from './routes';
import React from 'react';
import {IconWrapper} from '../components';

const BottomTab = createBottomTabNavigator();

const BottomTitles = {
  Home: 'Trang chủ',
  Tour: 'Hành trình',
  Notification: 'Thông báo',
  Profile: 'Cá nhân',
};

export function BottomTabNavigator(): JSX.Element {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={routesScreen.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: BottomTitles.Home,
        }}
      />
      <BottomTab.Screen
        name={routesScreen.Tour}
        component={TourScreen}
        options={{
          headerShown: false,
          tabBarLabel: BottomTitles.Tour,
        }}
      />

      <BottomTab.Screen
        name={routesScreen.Notification}
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarLabel: BottomTitles.Notification,
        }}
      />
      <BottomTab.Screen
        name={routesScreen.Profile}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: BottomTitles.Profile,
        }}
      />
    </BottomTab.Navigator>
  );
}

const IconSwitch = ({
  focused,
  activeIcon,
  inActiveIcon,
}: {
  focused: boolean;
  activeIcon: JSX.Element;
  inActiveIcon: JSX.Element;
}) => {
  return (
    <IconWrapper size={24}>{focused ? activeIcon : inActiveIcon}</IconWrapper>
  );
};
