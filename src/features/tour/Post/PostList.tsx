import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useState} from 'react';
import PostItem from './PostItem';
import {Post} from '../../../types/post';
import {CommentList} from '../Comment';
import PostFab from './PostFab';
import {ModalTrigger} from '../../../components';
import PostCreate from './PostCreate';
import {ParamListBase, RouteProp} from '@react-navigation/native';
type PostListRouteProp = RouteProp<ParamListBase, string>;
import {useQuery} from '@tanstack/react-query';
import postApi from '../../../services/postService';

type PostListProps = {
  route: PostListRouteProp;
};

// const posts: Post[] = [
//   {
//     content: 'Hom nay troi dep qua',
//     likes: 123,
//     id: 1,
//     files: [
//       {
//         link: 'https://vuongquocanh.com/wp-content/uploads/2018/05/london-eye-800x534.jpg',
//         postId: 1,
//       },
//       {
//         link: 'https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g',
//         postId: 1,
//       },
//       {
//         link: 'https://photo-cms-tpo.epicdn.me/w890/Uploaded/2023/pcgycivo/2014_02_18/4_QFWJ.jpg',
//         postId: 1,
//       },
//     ],
//   },
//   {
//     content: 'Hom nay troi dep qua',
//     likes: 123,
//     id: 3,
//     files: [
//       {
//         link: 'https://photo-cms-tpo.epicdn.me/w890/Uploaded/2023/pcgycivo/2014_02_18/4_QFWJ.jpg',
//         postId: 3,
//         // type: FileType.POST,
//       },
//     ],
//   },
// ];

export const PostList = ({route}: PostListProps) => {
  const {tourId} = route.params as any;

  const {data: posts} = useQuery({
    queryKey: ['posts', tourId],
    queryFn: () => postApi.getPostByTour(tourId),
    enabled: !!tourId,
    onSuccess: data => {
      // console.log('data post', data);
    },
  });

  const [openComment, setOpenComment] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <View className="bg-white flex-1 h-full">
      <FlatList
        data={posts?.data}
        renderItem={({item}) => (
          <PostItem
            setOpenComment={setOpenComment}
            openComment={openComment}
            post={item}
          />
        )}
        keyExtractor={item => `${item.id}`}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Text className="text-gray-500">Chua co bai dang</Text>
          </View>
        }
      />
      {openComment && <CommentList setOpenComment={setOpenComment} />}
      <ModalTrigger
        visible={openModal}
        setVisible={setOpenModal}
        button={<PostFab onPress={() => setOpenModal(true)} />}>
        <PostCreate setOpenModal={setOpenModal} />
      </ModalTrigger>
    </View>
  );
};

export default PostList;
