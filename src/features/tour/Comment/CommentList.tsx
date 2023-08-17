import React, {useState, useMemo} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Comment} from '../../../types/comment';
import {generateComment} from '../../../utils/generateComments';
import CommentInput from './CommentInput';
import CommentItem from './CommentItem';
import CommentLayout from './CommentLayout';
import {useQuery} from '@tanstack/react-query';
import commentService from '../../../services/commentService';

type CommentListProps = {
  setPostIdComment: (value: number) => void;
  postIdComment: number;
};

export const CommentList = ({
  postIdComment,
  setPostIdComment,
}: CommentListProps) => {
  const [commentParent, setCommentParent] = useState<Comment | null>(null);
  const [commentEdit, setCommentEdit] = useState<Comment | null>(null);
  const {data: commentL} = useQuery({
    queryKey: ['comments', postIdComment],
    queryFn: () => commentService.getComments(postIdComment),
    enabled: postIdComment !== -1,
    onSuccess: data => {
      // console.log('dataa', data);
    },
    onError(err) {
      console.log('eee', err);
    },
  });

  const comments = useMemo(
    () => generateComment(commentL?.data),
    [commentL?.data],
  );

  return (
    <CommentLayout setPostIdComment={setPostIdComment}>
      <View className="h-full">
        <FlatList
          data={comments}
          renderItem={({item}) => (
            <>
              <CommentItem
                key={item.id}
                comment={item}
                setCommentParent={setCommentParent}
                setCommentEdit={setCommentEdit}
              />
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
        {!!commentParent && (
          <View className="w-full p-0 m-0">
            <View className="bg-slate-200 h-[30] px-3 flex-row items-center w-full">
              <Text className="flex-1">
                Đang trả lời{' '}
                <Text className="font-bold">
                  {commentParent.user?.fullName}
                </Text>
              </Text>
              <TouchableOpacity
                className=""
                onPress={() => {
                  setCommentParent(null);
                }}>
                <Feather name="x" size={18} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        )}

        <CommentInput
          // handleCreate={handleCreate}
          // comments={comments}
          // setComments={setComments}
          comment={commentEdit}
          setComment={setCommentEdit}
          postId={postIdComment}
          commentParent={commentParent}
          setCommentParent={setCommentParent}
        />
      </View>
    </CommentLayout>
  );
};

export default CommentList;
