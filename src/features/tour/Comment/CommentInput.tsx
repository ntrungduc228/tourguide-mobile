import {View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useMutation} from '@tanstack/react-query';
import commentService from '../../../services/commentService';
import {Comment} from '../../../types/comment';

type CommentInputProps = {
  comments: Comment[];
  setComments: (comments: Comment[]) => void;
};

export const CommentInput = ({comments, setComments}: CommentInputProps) => {
  const [textValue, setTextValue] = useState('');

  const {mutate: createComment} = useMutation({
    mutationFn: commentService.createComment,
    onError: (error: any) => {
      console.log('erorr ', JSON.stringify(error));
    },
    onSuccess: data => {
      setComments([data?.data, ...comments]);
      //handleDeleteMembers();
    },
  });
  const handleCreateComment = () => {
    if (!!textValue) {
      //dữ liệu giả
      createComment({content: textValue, postId: 1});
    }
  };
  return (
    <View className="p-0 mb-1 border-t-0.5">
      <View className="flex-row items-center">
        <TextInput
          underlineColor="#fff"
          activeUnderlineColor="#fff"
          cursorColor="#000"
          className="bg-white  text-sm w-[90%]"
          placeholder="Nhập nội dung..."
          onChangeText={text => setTextValue(text)}
          value={textValue}
        />
        <TouchableOpacity className="mr-4" onPress={handleCreateComment}>
          <Feather name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentInput;
