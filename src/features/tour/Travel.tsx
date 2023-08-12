import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet, View} from 'react-native';
import {DestinationList, MemberList, MenuOption, PostList} from './index';
import {RouteProp} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/native';
import {getParamsNav} from '../../utils/getParamsNavigation';

import {SingleResponse} from '../../types/api';
import {Post} from '../../types/post';
import {Tour} from '../../types/tour';
type TravelRouteProp = RouteProp<ParamListBase, string>;
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {useDispatch} from 'react-redux';
import {setTourId} from '../../stores/slices/tourSlice';
const Tab = createMaterialTopTabNavigator();

type TravelProps = PropsWithChildren<{route: TravelRouteProp}>;

export type TravelContextType = {
  tour: Tour | null;
  setTour: (tour: Tour | null) => void;
  tourId: number | null;
  // setTourId: (tourId: number | null) => void;
};

export const TravelContext = createContext<TravelContextType>(
  {} as TravelContextType,
);

export const useTravel = () => {
  return useContext(TravelContext);
};

export const Travel = ({route}: TravelProps) => {
  const {tourId} = getParamsNav(route);
  // const [tour, setTour] = useState<Tour | null>(null);
  // console.log('tourId travel ', tourId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTourId(tourId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tourId]);

  return (
    // <TravelContext.Provider value={{tourId, tour, setTour}}>
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
    // </TravelContext.Provider>
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
