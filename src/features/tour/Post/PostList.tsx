import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import PostItem from './PostItem';
import {Post} from '../../../types/post';
import {FileType} from '../../../types/file';

type PostListProps = {};

const posts: Post[] = [
  {
    content: 'Hom nay troi dep qua',
    likes: 123,
    id: 1,
    files: [
      {
        link: 'https://photo-cms-tpo.epicdn.me/w890/Uploaded/2023/pcgycivo/2014_02_18/4_QFWJ.jpg',
        type: FileType.IMAGE,
      },
    ],
  },
  {
    content: 'Hom nay troi dep qua',
    likes: 123,
    id: 3,
    files: [
      {
        link: 'https://photo-cms-tpo.epicdn.me/w890/Uploaded/2023/pcgycivo/2014_02_18/4_QFWJ.jpg',
        type: FileType.IMAGE,
      },
    ],
  },
];

export const PostList = (PostListprops: PostListProps) => {
  return (
    <SafeAreaView className="bg-white">
      <FlatList
        data={posts}
        renderItem={({item}) => <PostItem post={item} />}
        keyExtractor={item => `${item.id}`}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Text className="text-gray-500">Chua co bai dang</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default PostList;
