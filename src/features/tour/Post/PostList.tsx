import {ParamListBase, RouteProp} from '@react-navigation/native';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {ModalTrigger} from '../../../components';
import {
  default as postApi,
  default as postService,
} from '../../../services/postService';
import {CommentList} from '../Comment';
import PostCreate from './PostCreate';
import PostFab from './PostFab';
import PostItem from './PostItem';
type PostListRouteProp = RouteProp<ParamListBase, string>;

type PostListProps = {
  route: PostListRouteProp;
};

export const PostList = ({route}: PostListProps) => {
  const {tourId} = route.params as any;

  const queryClient = useQueryClient();

  const {data: posts} = useQuery({
    queryKey: ['posts', tourId],
    queryFn: () => postApi.getPostByTour(tourId),
    enabled: !!tourId,
    onSuccess: data => {
      // console.log('data post', data);
    },
  });

  const {mutate: createPost} = useMutation({
    mutationFn: postService.createPost,
    onError: (error: any) => {
      console.log('erorr ', JSON.stringify(error));
    },
    onSuccess: data => {
      // Toast.show({})
      queryClient.invalidateQueries(['posts', tourId]);
      console.log(data);
      //handleDeleteMembers();
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
        <PostCreate createPost={createPost} setOpenModal={setOpenModal} />
      </ModalTrigger>
    </View>
  );
};

export default PostList;
