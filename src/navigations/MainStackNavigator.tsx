import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {BottomTabNavigator} from './index';
import routesScreen from './routes';

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
    </MainStack.Navigator>
  );
}
