import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Member, Destination, Post} from './index';

const Tab = createMaterialTopTabNavigator();

type Props = {};

export const Travel = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: Styles.tabBarLabel,
        // tabBarItemStyle: Styles.tabBarItemStyle,
        tabBarStyle: Styles.tabBarStyle,
        tabBarPressColor: '#d7cbcb',
        // tabBarIndicatorStyle: Styles.tabBarIndicatorStyle,
        // tabBarGap: 0,
      }}>
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          title: 'Post',
        }}
      />
      <Tab.Screen
        name="Destination"
        component={Destination}
        options={{
          title: 'Lists',
        }}
      />
      <Tab.Screen
        name="Member"
        component={Member}
        options={{
          title: 'About',
        }}
      />
    </Tab.Navigator>
  );
};

export default Travel;

const Styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 14,
    textTransform: 'none',
  },
  //   tabBarItemStyle: {width: 80},
  tabBarStyle: {backgroundColor: '#fff'},
  //   tabBarIndicatorStyle: {
  //     backgroundColor: '#767373',
  //     width: 50,
  //     marginLeft: 16,
  //   },
});
