import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Avatar} from '../../../components';
import {Comment} from '../../../types/comment';
import AntDesign from 'react-native-vector-icons/AntDesign';

type CommentItemProps = {
  comment: Comment;
};

export const CommentItem = ({comment}: CommentItemProps) => {
  const [openChild, setOpenChild] = useState<boolean>(false);
  return (
    <ScrollView>
      <CommentContent
        openChild={openChild}
        setOpenChild={setOpenChild}
        comment={comment}
      />
      {openChild &&
        comment?.children?.length &&
        comment.children?.map((child: Comment) => (
          <View className="ml-10" key={child.id}>
            <CommentItem comment={child} />
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
}: {
  comment: Comment;
  openChild: boolean;
  setOpenChild: (value: boolean) => void;
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
          <TouchableOpacity className="mt-1.5" onPress={() => {}}>
            <Text className=" text-slate-500">Trả lời</Text>
          </TouchableOpacity>
          {comment?.children?.length && (
            <TouchableOpacity
              className="mt-1.5 ml-3"
              onPress={() => setOpenChild(!openChild)}>
              <View className="flex flex-row items-center">
                <AntDesign name={openChild ? 'up' : 'down'} size={20} />
                <Text className=" text-slate-500">2 Phản hồi</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
