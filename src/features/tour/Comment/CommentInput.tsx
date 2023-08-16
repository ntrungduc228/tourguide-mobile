import {View, TouchableOpacity, Keyboard} from 'react-native';
import {TextInput} from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import commentService from '../../../services/commentService';
import {Comment} from '../../../types/comment';

type CommentInputProps = {
  // comments: Comment[];
  // setComments: (comments: Comment[]) => void;
  setCommentParent: (comments: Comment | null) => void;
  commentParent: Comment | null;
  postId: number;

  // handleCreate: () => void;
};

export const CommentInput = ({
  // comments,
  setCommentParent,
  commentParent,
  postId,
}: // setComments,
// handleCreate,
CommentInputProps) => {
  const [textValue, setTextValue] = useState('');
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  const queryClient = useQueryClient();

  const {mutate: createComment} = useMutation({
    mutationFn: commentService.createComment,
    onError: (error: any) => {
      console.log('erorr ', JSON.stringify(error));
    },
    onSuccess: data => {
      queryClient.invalidateQueries(['comments', 11]);
      // setComments([data?.data, ...comments]);
      //handleDeleteMembers();
    },
  });
  const handleCreateComment = () => {
    if (textValue && postId !== -1) {
      //dữ liệu giả
      if (commentParent) {
        createComment({
          content: textValue,
          postId: postId,
          parentId: commentParent?.id,
        });
      } else {
        createComment({content: textValue, postId: postId});
      }
      setTextValue('');
      setCommentParent(null);
    }

    // createComment({
    //   content: 'comment id 46',
    //   postId: 11,
    //   parentId: 2,
    // });
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
