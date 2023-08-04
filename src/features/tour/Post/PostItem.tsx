import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Post} from '../../../types/post';
import {Avatar} from '../../../components';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

type PostItemProps = {
  post: Post;
};

export const PostItem = ({post}: PostItemProps) => {
  return (
    <View className="border-b-0.5 py-2 border-gray-300 bg-white">
      <View className="p-[15] flex flex-row items-center ">
        <Avatar
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          className="w-[30] h-[30]"
        />
        <View className="ml-2 flex-1">
          <Text className="font-bold text-[15] text-black break-all">
            Nguyen Trung duc
          </Text>
        </View>
      </View>
      <View className="justify-center items-center">
        <Image
          source={{
            uri: 'https://ik.imagekit.io/tvlk/blog/2023/04/go-and-share-bai-bien-viet-nam-5.jpeg',
          }}
          className="w-full h-[300]"
        />
      </View>
      <View className="flex flex-row items-center px-[12] py-[12] ">
        <TouchableOpacity onPress={() => {}}>
          <AntDesign
            name="heart"
            color="red"
            size={27}
            // className="border-8 border-black"
          />
        </TouchableOpacity>
        <Text className="ml-1 text-black">12</Text>
        <TouchableOpacity className="ml-5">
          <Ionic name="chatbubble-outline" size={27} />
        </TouchableOpacity>
        <Text className="ml-1 text-black">12</Text>
      </View>
      <View className="px-[15] w-full">
        {/* <Text>1000</Text> */}
        <Text className="font-bold text-[14px] text-black break-all">
          this is captionthis is captionthis is ca ptiont his is captionthis is
          captionthis is captionthis is caption
        </Text>
      </View>
    </View>
  );
};

export default PostItem;
