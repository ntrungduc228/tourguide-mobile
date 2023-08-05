import {View, Text} from 'react-native';
import React from 'react';
import {FAB} from 'react-native-paper';

type Props = {
  onPress: () => void;
};

export const PostFab = ({onPress}: Props) => {
  return (
    <FAB
      icon="plus"
      color="#000"
      onPress={() => onPress()}
      size="medium"
      className="absolute right-4 bottom-14  bg-white"
    />
  );
};

export default PostFab;
