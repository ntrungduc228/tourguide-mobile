import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet, Text, View} from 'react-native';
import {DestinationList, MemberList, MenuOption, PostList} from './index';
import {RouteProp} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/native';
import {getParamsNav} from '../../utils/getParamsNavigation';

import {SingleResponse} from '../../types/api';
import {Post} from '../../types/post';
import {Tour} from '../../types/tour';
type CurTourRouteProp = RouteProp<ParamListBase, string>;
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setTour, setTourId} from '../../stores/slices/tourSlice';
import {AppointmentList} from '../appointment';
// import PushNotification from 'react-native-push-notification';
import {IRootState} from '../../stores';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import tourService from '../../services/tourService';

const Tab = createMaterialTopTabNavigator();

type CurTourProps = PropsWithChildren<{route: CurTourRouteProp}>;

export type CurTourContextType = {
  tour: Tour | null;
  setTour: (tour: Tour | null) => void;
  tourId: number | null;
  // setTourId: (tourId: number | null) => void;
};

export const CurTourContext = createContext<CurTourContextType>(
  {} as CurTourContextType,
);

export const useCurTour = () => {
  return useContext(CurTourContext);
};

export const CurTour = ({route}: CurTourProps) => {
  //   const {tourId} = getParamsNav(route);
  const user = useSelector((state: IRootState) => state.user.data.info);
  const socket = useSelector((state: IRootState) => state.socket.data);
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(setTourId(tourId));
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [tourId]);

  const queryClient = useQueryClient();

  const {data: curTourData} = useQuery({
    queryKey: ['CurTour'],
    queryFn: tourService.getTourProgess,
    onSuccess: (data: any) => {
      // console.log('data tour', data?.data);
      dispatch(setTour(data?.data));
    },
  });

  useEffect(() => {
    const topic = `/topic/tours/${user?.id}/update`;
    if (socket) {
      socket.subscribe(topic, (payload: any) => {
        queryClient.invalidateQueries(['CurTour']);
      });
    }
    return () => {
      if (socket) {
        socket.unsubscribe(topic);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, user?.id]);

  console.log('curTour ', curTourData?.data);

  if (!curTourData?.data) {
    return (
      <View className="h-full items-center justify-center">
        <Text>Chưa có tour</Text>
      </View>
    );
  }

  return (
    // <CurTourContext.Provider value={{tourId, tour, setTour}}>
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
          initialParams={{tourId: curTourData?.data?.id}}
          options={{
            title: 'Bài đăng',
          }}
        />
        <Tab.Screen
          name="Appointment"
          component={AppointmentList}
          options={{
            title: 'Điểm hẹn',
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
    // </CurTourContext.Provider>
  );
};

export default CurTour;

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
