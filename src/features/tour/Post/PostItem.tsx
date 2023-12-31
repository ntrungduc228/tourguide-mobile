import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import {Avatar, Swipe} from '../../../components';
import {Post} from '../../../types/post';
import {PostItemMenu} from './PostMenuItem';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import postService from '../../../services/postService';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../stores';
import {CommentList} from '../Comment';

type PostItemProps = {
  post: Post;
  setPostIdComment: (value: number) => void;
};

export const PostItem = ({post, setPostIdComment}: PostItemProps) => {
  const tourId = useSelector((state: IRootState) => state.tour.tourId);
  const user = useSelector((state: IRootState) => state.user.data.info);
  const [visible, setVisible] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const [isLike, setIsLike] = useState(false);
  const {mutate: likePost} = useMutation({
    mutationFn: postService.likePost,
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

  return (
    <View className="border-b-0.5 py-2 border-gray-300 bg-white">
      <View className="p-[15] flex flex-row items-center ">
        <Avatar
          src={
            post?.user?.avatar ||
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
          }
          className="w-[30] h-[30]"
        />
        <View className="ml-2 flex-1">
          <Text className="font-bold text-[15] text-black break-all">
            {post?.user?.fullName}
          </Text>
        </View>
        <View>
          {post.user?.id === user?.id && (
            <PostItemMenu
              visible={visible}
              setVisible={setVisible}
              post={post}
            />
          )}
        </View>
      </View>

      <View className="flex w-full justify-center items-center">
        {!!post?.files?.length && <Swipe images={post?.files || []} />}

        {/* <Image
          source={{
            uri:
              post?.files?.[0].link ||
              'https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g',
          }}
          className={`w-full h-[300] object-contain`}
        /> */}
      </View>
      <View className="px-[15] w-full py-[12] ">
        <Text className="font-bold text-[14px] text-black break-all">
          {post.content}
        </Text>
      </View>
      <View className="flex flex-row items-center px-[12] ">
        {/* <TouchableOpacity
          onPress={() => {
            likePost({id: post.id!!, likes: 1});
          }}>
          <AntDesign
            name="heart"
            color="red"
            size={27}
            // className="border-8 border-black"
          />
          <AntDesign
            name="hearto"
            color="gray"
            size={27}
            // className="border-8 border-black"
          />
        </TouchableOpacity>
        <Text className="ml-1 text-black">{post.likes}</Text> */}
        <TouchableOpacity
          className="ml-5"
          onPress={() => setPostIdComment(post?.id || -1)}>
          <Ionic name="chatbubble-outline" size={27} />
        </TouchableOpacity>
        {/* <Text className="ml-1 text-black">12</Text> */}
      </View>
    </View>
  );
};

export default PostItem;
