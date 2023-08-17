import {ParamListBase, RouteProp} from '@react-navigation/native';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, RefreshControl} from 'react-native';
import {ModalTrigger} from '../../../components';
import {
  default as postApi,
  default as postService,
} from '../../../services/postService';
import {CommentList} from '../Comment';
import PostCreate from './PostCreate';
import PostFab from './PostFab';
import PostItem from './PostItem';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../stores';
type PostListRouteProp = RouteProp<ParamListBase, string>;

type PostListProps = {
  route: PostListRouteProp;
};

export const PostList = ({route}: PostListProps) => {
  const {tourId} = route.params as any;
  const socket = useSelector((state: IRootState) => state.socket.data);
  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    refetch,
  } = useQuery({
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
      // console.log(data);
      //handleDeleteMembers();
    },
  });

  useEffect(() => {
    const topic = `/topic/post/${tourId}/new`;
    if (socket) {
      socket.subscribe(topic, (payload: any) => {
        queryClient.invalidateQueries(['posts', tourId]);
      });
    }
    return () => {
      if (socket) {
        socket.unsubscribe(topic);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, tourId]);

  const [openComment, setOpenComment] = useState<boolean>(false);
  const [postIdComment, setPostIdComment] = useState<number>(-1);
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <View className="bg-white flex-1 h-full">
      <FlatList
        data={posts?.data}
        renderItem={({item}) => (
          <PostItem setPostIdComment={setPostIdComment} post={item} />
        )}
        keyExtractor={item => `${item.id}`}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Text className="text-gray-500">Chưa có bài đăng</Text>
          </View>
        }
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      />
      {postIdComment !== -1 && (
        <CommentList
          postIdComment={postIdComment}
          setPostIdComment={setPostIdComment}
        />
      )}
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
