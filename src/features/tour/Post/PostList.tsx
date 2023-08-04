import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useState} from 'react';
import PostItem from './PostItem';
import {Post} from '../../../types/post';
import {FileType, RootType} from '../../../types/file';
import {CommentList} from '../Comment';

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
        root: RootType.POST,
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
        root: RootType.POST,
      },
    ],
  },
];

export const PostList = ({}: PostListProps) => {
  const [openComment, setOpenComment] = useState<boolean>(false);
  return (
    <View className="bg-white flex-1 h-full">
      <FlatList
        data={posts}
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
      {openComment ? <CommentList setOpenComment={setOpenComment} /> : ''}
    </View>
  );
};

export default PostList;
