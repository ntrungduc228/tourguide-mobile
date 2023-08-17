import {useMutation, useQueryClient} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {Keyboard, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import commentService from '../../../services/commentService';
import {Comment} from '../../../types/comment';

type CommentInputProps = {
  comment: Comment | null;
  // setComments: (comments: Comment[]) => void;
  setCommentParent: (comments: Comment | null) => void;
  commentParent: Comment | null;
  postId: number;
  setComment: (comment: Comment | null) => void;

  // handleCreate: () => void;
};

export const CommentInput = ({
  // comments,
  setCommentParent,
  commentParent,
  postId,
  comment,
  setComment,
}: // setComments,
// handleCreate,
CommentInputProps) => {
  const [textValue, setTextValue] = useState(comment ? comment.content : '');
  useEffect(() => {
    setTextValue(comment ? comment.content : '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comment?.content]);

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
      queryClient.invalidateQueries(['comments', postId]);
      // setComments([data?.data, ...comments]);
      //handleDeleteMembers();
    },
  });

  const {mutate: updateComment} = useMutation({
    mutationFn: commentService.updateComment,
    onError: (error: any) => {
      console.log('erorr ', JSON.stringify(error));
    },
    onSuccess: data => {
      queryClient.invalidateQueries(['comments', postId]);
      // setComments([data?.data, ...comments]);
      //handleDeleteMembers();
    },
  });
  const handleCreateComment = () => {
    if (textValue && postId !== -1) {
      //dữ liệu giả
      if (commentParent) {
        console.log('vo1');
        createComment({
          content: textValue,
          postId: postId,
          parentId: commentParent?.id,
        });
      } else if (!commentParent && !comment) {
        console.log('vo2');
        createComment({content: textValue, postId: postId});
      }
      if (comment) {
        console.log('vo3');
        updateComment({id: comment.id!!, content: textValue});
      }
      setTextValue('');
      setCommentParent(null);
      setComment(null);
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
          className="bg-white text-sm w-[90%]"
          placeholder="Nhập nội dung..."
          value={textValue}
          autoFocus={!!textValue}
          onChangeText={text => setTextValue(text)}
          // value={textValue}
        />
        <TouchableOpacity className="mr-4" onPress={handleCreateComment}>
          <Feather name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentInput;
