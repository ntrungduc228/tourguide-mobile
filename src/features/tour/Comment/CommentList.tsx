import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Comment} from '../../../types/comment';
import {generateComment} from '../../../utils/generateComments';
import CommentInput from './CommentInput';
import CommentItem from './CommentItem';
import CommentLayout from './CommentLayout';

type CommentListProps = {
  setOpenComment: (value: boolean) => void;
};

export const CommentList = ({setOpenComment}: CommentListProps) => {
  const commentsT: Comment[] = [
    {
      id: 1,
      postId: 1,
      content: 'comment 1',
      isDelete: false,
      parentId: null,
    },
    {
      id: 2,
      content: 'comment 2',
      isDelete: false,
      postId: 1,
      parentId: 1,
    },
    {
      id: 3,
      content: 'comment 3',
      isDelete: false,
      postId: 1,
      parentId: 1,
    },
    {
      id: 4,
      content: 'comment 4',
      isDelete: false,
      postId: 1,
      parentId: 2,
    },
    {
      id: 5,
      postId: 1,
      content: 'comment 1',
      isDelete: false,
      parentId: null,
    },
    {
      id: 6,
      content: 'comment 2',
      isDelete: false,
      postId: 1,
      parentId: 5,
    },
    {
      id: 7,
      content: 'comment 3',
      isDelete: false,
      postId: 1,
      parentId: 5,
    },
    {
      id: 8,
      content: 'comment 4',
      isDelete: false,
      postId: 1,
      parentId: 6,
    },
    {
      id: 9,
      content: 'comment 4',
      isDelete: false,
      postId: 1,
      parentId: null,
    },
    {
      id: 10,
      content: 'comment 4',
      isDelete: false,
      postId: 1,
      parentId: null,
    },
    {
      id: 11,
      content: 'comment 4',
      isDelete: false,
      postId: 1,
      parentId: null,
    },
    {
      id: 12,
      content: 'comment 4',
      isDelete: false,
      postId: 1,
      parentId: null,
    },
    {
      id: 13,
      content: 'comment 41231',
      isDelete: false,
      postId: 1,
      parentId: null,
    },
  ];
  const [comments, setComments] = useState(commentsT);
  const commentList = generateComment(comments);
  // console.log('commentList ', commentList);
  return (
    <CommentLayout setOpenComment={setOpenComment}>
      <View className="h-full">
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
          keyExtractor={(item, index) => `${index}`}
          ListEmptyComponent={
            <View className="flex-1 items-center justify-center">
              <Text className="text-gray-500">Không có bình luận</Text>
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
        <View>
          <View className="bg-slate-200 h-[30] px-3 flex-row items-center">
            <Text className="flex-1">Đang trả lời</Text>
            <TouchableOpacity className="" onPress={() => {}}>
              <Feather name="x" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <CommentInput comments={comments} setComments={setComments} />
      </View>
    </CommentLayout>
  );
};

export default CommentList;
