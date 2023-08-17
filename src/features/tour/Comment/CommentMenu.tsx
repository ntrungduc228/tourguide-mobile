import {useMutation, useQueryClient} from '@tanstack/react-query';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Menu} from 'react-native-paper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import useToast from '../../../hooks/useToast';
import {useDispatch} from 'react-redux';
import {Comment} from '../../../types/comment';
import {setComment} from '../../../stores/slices/commentSlice';

type Props = {
  visible: boolean;
  setVisible: (value: boolean) => void;
  comment: Comment;
  setCommentEdit: (comment: Comment | null) => void;
  setCommentParent: (comment: Comment | null) => void;
};

export const CommentMenu = ({
  visible,
  setVisible,
  comment,
  setCommentEdit,
  setCommentParent,
}: Props) => {
  const closeMenu = () => setVisible(false);

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Menu
        visible={visible}
        // eslint-disable-next-line react-native/no-inline-styles
        contentStyle={{
          backgroundColor: '#fff',
        }}
        style={{}}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity onPress={() => setVisible(true)}>
            <SimpleLineIcons name="options-vertical" size={20} />
          </TouchableOpacity>
        }>
        <Menu.Item
          onPress={() => {
            setVisible(false);
            //dispatch(setComment({comment, isEdit: true}));
            setCommentEdit(comment);
            setCommentParent(null);
            console.log('click');
            //updatePost(post.id!!);
          }}
          title="Chỉnh sửa"
        />
        <Menu.Item
          onPress={() => {
            setVisible(false);
            // deletePost(post.id!!);
            //  handleClick();
          }}
          title="Xóa"
        />
      </Menu>
    </View>
  );
};

export default CommentMenu;
