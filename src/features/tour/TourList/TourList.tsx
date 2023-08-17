import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {ScreenBackLayout} from '../../../screens/components';
import TourListItem from './TourListItem';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Tour} from '../../../types/tour';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {useSelector} from 'react-redux';
import tourService from '../../../services/tourService';
import {RefreshControl} from 'react-native-gesture-handler';
import {Spinner} from '../../../components/Spinner';
import {IRootState} from '../../../stores';
import {useNavigation} from '@react-navigation/native';
import routesScreen from '../../../navigations/routes';

type TourListProps = {};

export const TourList = ({}: TourListProps) => {
  const queryClient = useQueryClient();
  const navigation = useNavigation<Nav>();
  const socket = useSelector((state: IRootState) => state.socket.data);
  const user = useSelector((state: IRootState) => state.user.data.info);

  const {
    data: tours,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['toursOwn'],
    queryFn: tourService.getOwnTour,
    onSuccess: data => {
      // console.log('data  tour ', data);
    },
  });

  useEffect(() => {
    // console.log('use r', user);
    const topic = `/topic/tours/${user?.id}/update`;
    if (socket) {
      socket.subscribe(topic, (payload: any) => {
        console.log('real time ', payload.body);
        queryClient.invalidateQueries(['toursOwn']);
      });
    }
    return () => {
      if (socket) {
        socket.unsubscribe(topic);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, user]);

  return (
    <SafeAreaView>
      <ScreenBackLayout>
        {/* <ScreenBackLayout.Header title="Tour của tôi" /> */}
        <View className="flex-row items-center">
          <TouchableOpacity
            className="mx-5"
            onPress={() => navigation.navigate(routesScreen.Home)}>
            <IconFontAwesome5 name="arrow-left" size={20} />
          </TouchableOpacity>
          <Text className="font-medium text-xl text-black">Tour của tôi</Text>
        </View>
        <ScreenBackLayout.Body>
          {/* {isLoading && <Spinner />} */}
          <FlatList
            data={tours?.data}
            renderItem={({item}) => <TourListItem tour={item} />}
            keyExtractor={item => `${item.id}`}
            ListEmptyComponent={
              <View className="flex-1 items-center justify-center">
                <Text className="text-gray-500">Chua co tour</Text>
              </View>
            }
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={refetch} />
            }
          />
        </ScreenBackLayout.Body>
      </ScreenBackLayout>
    </SafeAreaView>
  );
};

export default TourList;
