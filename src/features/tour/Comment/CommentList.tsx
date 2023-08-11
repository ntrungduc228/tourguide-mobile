import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  Platform,
  FlatList,
} from 'react-native';
import React from 'react';
import CommentItem from './CommentItem';
import CommentLayout from './CommentLayout';
import {Comment} from '../../../types/comment';
import {generateComment} from '../../../utils/generateComments';
import {FileType} from '../../../types/file';

type CommentListProps = {
  setOpenComment: (value: boolean) => void;
};

export const CommentList = ({setOpenComment}: CommentListProps) => {
  const comments: Comment[] = [
    {
      id: 1,
      postId: 1,
      content: 'comment 1',
      isDelete: false,
      commentParentId: null,
    },
    {
      id: 2,
      content: 'comment 2',
      isDelete: false,
      postId: 1,
      commentParentId: 1,
    },
    {
      id: 3,
      content: 'comment 3',
      isDelete: false,
      postId: 1,
      commentParentId: 1,
    },
    {
      id: 4,
      content: 'comment 4',
      isDelete: false,
      postId: 1,
      commentParentId: 2,
    },
    {
      id: 5,
      postId: 1,
      content: 'comment 1',
      isDelete: false,
      commentParentId: null,
    },
    {
      id: 6,
      content: 'comment 2',
      isDelete: false,
      postId: 1,
      commentParentId: 5,
    },
    {
      id: 7,
      content: 'comment 3',
      isDelete: false,
      postId: 1,
      commentParentId: 5,
    },
    {
      id: 8,
      content: 'comment 4',
      isDelete: false,
      postId: 1,
      commentParentId: 6,
    },
    {
      id: 9,
      content: 'comment 4',
      isDelete: false,
      postId: 1,
      commentParentId: null,
    },
    {
      id: 10,
      content: 'comment 4',
      isDelete: false,
      postId: 1,
      commentParentId: null,
    },
    {
      id: 11,
      content: 'comment 4',
      isDelete: false,
      postId: 1,
      commentParentId: null,
    },
    {
      id: 12,
      content: 'comment 4',
      isDelete: false,
      postId: 1,
      commentParentId: null,
    },
    {
      id: 13,
      content: 'comment 4',
      isDelete: false,
      postId: 1,
      commentParentId: null,
    },
  ];
  const commentList = generateComment(comments);
  console.log('commentList ', commentList);
  return (
    <CommentLayout setOpenComment={setOpenComment}>
      <FlatList
        data={commentList}
        renderItem={({item}) => (
          <>
            <CommentItem key={item.id} comment={item} />
            {/* {item?.children?.length &&
              item.children?.map((child: Comment) => (
                <View className="ml-10">
                  <CommentItem key={child.id} comment={child} />
                </View>
              ))} */}
          </>
        )}
        keyExtractor={item => `${item.id}`}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Text className="text-gray-500">Chua co bai dang</Text>
          </View>
        }
      />
      {/* <View>
        <CommentItem />
        <View className="ml-10">
          <CommentItem />
          <View className="ml-10">
            <CommentItem />
          </View>
        </View>
      </View> */}
    </CommentLayout>
  );
};

export default CommentList;
