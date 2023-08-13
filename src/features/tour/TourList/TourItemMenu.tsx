import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Menu} from 'react-native-paper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
import routesScreen from '../../../navigations/routes';
import {useMutation} from '@tanstack/react-query';
import tourService from '../../../services/tourService';
import {Tour} from '../../../types/tour';
import useToast from '../../../hooks/useToast';

type Props = {
  visible: boolean;
  setVisible: (value: boolean) => void;
  tour: Tour;
};

export const TourItemMenu = ({visible, setVisible, tour}: Props) => {
  const navigation = useNavigation<Nav>();
  const closeMenu = () => setVisible(false);
  const {showToast} = useToast();

  const {mutate: beginTour} = useMutation({
    mutationFn: tourService.beginTourById,
    onSuccess: () => {
      showToast('success', 'Bắt đầu tour thành công');
    },
    onError: (error: any) => {
      showToast('error', 'Bắt đầu tour thất bại');
      console.log('erorr ', JSON.stringify(error));
    },
  });
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Menu
        visible={visible}
        // eslint-disable-next-line react-native/no-inline-styles
        contentStyle={{
          backgroundColor: '#fff',
        }}
        style={{}}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity onPress={() => setVisible(true)}>
            <SimpleLineIcons name="options-vertical" size={20} />
          </TouchableOpacity>
        }>
        <Menu.Item
          onPress={() => {
            setVisible(false);
            beginTour(tour.id!!);
          }}
          title="Bắt đầu tour"
        />
      </Menu>
    </View>
  );
};

export default TourItemMenu;
