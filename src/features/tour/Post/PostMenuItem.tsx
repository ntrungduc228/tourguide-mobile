import {useNavigation} from '@react-navigation/native';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Menu} from 'react-native-paper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import useToast from '../../../hooks/useToast';
import tourService from '../../../services/tourService';
import {Tour} from '../../../types/tour';

type Props = {
  visible: boolean;
  setVisible: (value: boolean) => void;
};

export const PostItemMenu = ({visible, setVisible}: Props) => {
  const queryClient = useQueryClient();
  const closeMenu = () => setVisible(false);
  const {showToast} = useToast();

  const {mutate: beginTour} = useMutation({
    mutationFn: tourService.beginTourById,
    onSuccess: () => {
      showToast('success', 'Bắt đầu tour thành công');
      queryClient.invalidateQueries(['toursOwn']);
    },
    onError: (error: any) => {
      showToast('error', 'Bắt đầu tour thất bại');

      console.log('erorr ', JSON.stringify(error));
    },
  });
  const {mutate: endTour} = useMutation({
    mutationFn: tourService.endTourById,
    onSuccess: () => {
      showToast('success', 'Kết thúc tour thành công');
      queryClient.invalidateQueries(['toursOwn']);
    },
    onError: (error: any) => {
      showToast('error', 'Kết thúc tour thất bại');
      console.log('erorr ', JSON.stringify(error));
    },
  });
  //   const handleClick = () => {
  //     if (!!tour.isProgress) {
  //       endTour(tour.id!!);
  //     } else {
  //       beginTour(tour.id!!);
  //     }
  //   };
  //   console.log('í', tour.isProgress);

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
            //  handleClick();
          }}
          title="Chỉnh sửa"
        />
        <Menu.Item
          onPress={() => {
            setVisible(false);
            //  handleClick();
          }}
          title="Xóa"
        />
      </Menu>
    </View>
  );
};

export default PostItemMenu;
