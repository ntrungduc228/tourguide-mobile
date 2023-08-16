import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Avatar} from '../../../components';
import {Comment} from '../../../types/comment';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CommentMenu from './CommentMenu';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../stores';

type CommentItemProps = {
  comment: Comment;

  setCommentParent: (comment: Comment | null) => void;
};

export const CommentItem = ({
  comment,

  setCommentParent,
}: CommentItemProps) => {
  const [openChild, setOpenChild] = useState<boolean>(false);
  return (
    <ScrollView>
      <CommentContent
        openChild={openChild}
        setOpenChild={setOpenChild}
        comment={comment}
        setCommentParent={setCommentParent}
      />
      {openChild &&
        comment?.children?.length &&
        comment.children?.map((child: Comment) => (
          <View className="ml-10" key={child.id}>
            <CommentItem comment={child} setCommentParent={setCommentParent} />
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
}: // setComments,
{
  comment: Comment;
  openChild: boolean;
  setOpenChild: (value: boolean) => void;
  setCommentParent: (comment: Comment | null) => void;
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const user = useSelector((state: IRootState) => state.user?.data?.info);
  return (
    <View className="flex flex-row my-1">
      <View>
        <Avatar
          src={
            comment?.user?.avatar ||
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
          }
          className="h-[30] w-[30]"
        />
      </View>
      <View className="ml-2 flex-1">
        <Text className="break-all font-bold text-black">
          {comment?.user?.fullName}
        </Text>
        <View className="flex-1 flex-row flex justify-between">
          <Text className="break-all">{comment?.content}</Text>
          {user?.id && user?.id === comment?.user?.id && (
            <View className="mr-3">
              <CommentMenu
                comment={comment}
                visible={visible}
                setVisible={setVisible}
              />
            </View>
          )}
        </View>
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
