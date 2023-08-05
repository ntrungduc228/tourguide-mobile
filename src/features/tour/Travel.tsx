import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Destination, PostList, MemberList, MenuOption} from './index';

const Tab = createMaterialTopTabNavigator();

type Props = {};

export const Travel = (props: Props) => {
  return (
    <>
      <View>
        <MenuOption />
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: Styles.tabBarLabel,
          // tabBarItemStyle: Styles.tabBarItemStyle,
          tabBarStyle: Styles.tabBarStyle,
          tabBarPressColor: '#d7cbcb',
          swipeEnabled: false,
          // tabBarIndicatorStyle: Styles.tabBarIndicatorStyle,
          // tabBarGap: 0,
        }}>
        <Tab.Screen
          name="Post"
          component={PostList}
          options={{
            title: 'Bài đăng',
          }}
        />
        <Tab.Screen
          name="Destination"
          component={Destination}
          options={{
            title: 'Lịch trình',
          }}
        />
        <Tab.Screen
          name="Member"
          component={MemberList}
          options={{
            title: 'Thành viên',
          }}
        />
      </Tab.Navigator>
    </>
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
