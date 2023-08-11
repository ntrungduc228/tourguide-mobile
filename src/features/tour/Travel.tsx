import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DestinationList, MemberList, MenuOption, PostList} from './index';
import {RouteProp} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/native';
import {getParamsNav} from '../../utils/getParamsNavigation';

import {SingleResponse} from '../../types/api';
import {Post} from '../../types/post';
type TravelRouteProp = RouteProp<ParamListBase, string>;

const Tab = createMaterialTopTabNavigator();

type TravelProps = {
  route: TravelRouteProp;
};

export const Travel = ({route}: TravelProps) => {
  const {tourId} = getParamsNav(route);

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
          initialParams={{tourId: tourId}}
          options={{
            title: 'Bài đăng',
          }}
        />
        <Tab.Screen
          name="Destination"
          component={DestinationList}
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
