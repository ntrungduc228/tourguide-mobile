import {useMutation, useQueryClient} from '@tanstack/react-query';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Menu} from 'react-native-paper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useSelector} from 'react-redux';
import {ModalTrigger} from '../../../components';
import useToast from '../../../hooks/useToast';
import postService from '../../../services/postService';
import {IRootState} from '../../../stores';
import {Post} from '../../../types/post';
import PostCreate from './PostCreate';

type Props = {
  visible: boolean;
  setVisible: (value: boolean) => void;
  post: Post;
};

export const PostItemMenu = ({visible, setVisible, post}: Props) => {
  const queryClient = useQueryClient();
  const closeMenu = () => setVisible(false);
  const {showToast} = useToast();
  const tourId = useSelector((state: IRootState) => state.tour.tourId);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const {mutate: updatePost} = useMutation({
    mutationFn: postService.updatePost,
    onSuccess: () => {
      showToast('success', 'Chỉnh sửa bài viết thành công');
      queryClient.invalidateQueries(['posts', tourId]);
    },
    onError: (error: any) => {
      showToast('error', 'Chỉnh sửa bài viết thất bại');
      console.log('erorr ', JSON.stringify(error));
    },
  });

  const {mutate: deletePost} = useMutation({
    mutationFn: postService.deletePost,
    onSuccess: () => {
      showToast('success', 'Xóa bài viết thành công');
      queryClient.invalidateQueries(['posts', tourId]);
    },
    onError: (error: any) => {
      showToast('error', 'Xóa bài viết thất bại');
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
            setOpenModal(true);
            //updatePost(post.id!!);
          }}
          title="Chỉnh sửa"
        />
        <Menu.Item
          onPress={() => {
            setVisible(false);
            deletePost(post.id!!);
            //  handleClick();
          }}
          title="Xóa"
        />
      </Menu>
      <ModalTrigger
        visible={openModal}
        setVisible={setOpenModal}
        //</View>button={<PostFab onPress={() => setOpenModal(true)} />}>
      >
        <PostCreate
          createPost={updatePost}
          postInit={post}
          setOpenModal={setOpenModal}
        />
      </ModalTrigger>
    </View>
  );
};

export default PostItemMenu;
