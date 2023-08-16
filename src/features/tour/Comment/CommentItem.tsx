import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Avatar} from '../../../components';
import {Comment} from '../../../types/comment';
import AntDesign from 'react-native-vector-icons/AntDesign';

type CommentItemProps = {
  comment: Comment;
  // comments: Comment[];
  // setComments: (comments: Comment[]) => void;
  setCommentParent: (comment: Comment | null) => void;
};

export const CommentItem = ({
  comment,
  // setComments,
  setCommentParent,
}: CommentItemProps) => {
  const [openChild, setOpenChild] = useState<boolean>(false);
  return (
    <ScrollView>
      <CommentContent
        openChild={openChild}
        setOpenChild={setOpenChild}
        comment={comment}
        // comments={comments}
        // setComments={setComments}
        setCommentParent={setCommentParent}
      />
      {openChild &&
        comment?.children?.length &&
        comment.children?.map((child: Comment) => (
          <View className="ml-10" key={child.id}>
            <CommentItem
              comment={child}
              // comments={comments}
              // setComments={setComments}
              setCommentParent={setCommentParent}
            />
          </View>
        ))}
    </ScrollView>
  );
};

export default CommentItem;

export const CommentContent = ({
  comment,
  openChild,
  setOpenChild,
  setCommentParent,
}: // comments,
// setComments,
{
  comment: Comment;
  openChild: boolean;
  setOpenChild: (value: boolean) => void;
  // comments: Comment[];
  // setComments: (comments: Comment[]) => void;
  setCommentParent: (comment: Comment | null) => void;
}) => {
  return (
    <View className="flex flex-row my-1">
      <View>
        <Avatar
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          className="h-[30] w-[30]"
        />
      </View>
      <View className="ml-2 flex-1">
        <Text className="break-all font-bold text-black">
          Nguyuen trung duc
        </Text>
        <Text className="break-all">{comment?.content}</Text>
        <View className="flex flex-row items-center">
          <TouchableOpacity
            className="mt-1.5"
            onPress={() => {
              setCommentParent(comment);
            }}>
            <Text className=" text-slate-500">Trả lời</Text>
          </TouchableOpacity>
          {!!comment?.children?.length && (
            <TouchableOpacity
              className="mt-1.5 ml-3"
              onPress={() => setOpenChild(!openChild)}>
              <View className="flex flex-row items-center">
                <AntDesign name={openChild ? 'up' : 'down'} size={20} />
                <Text className=" text-slate-500">
                  {comment?.children?.length} Phản hồi
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
