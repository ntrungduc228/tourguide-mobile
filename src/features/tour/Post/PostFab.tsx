import {View, Text} from 'react-native';
import React from 'react';
import {FAB} from 'react-native-paper';

type Props = {};

export const PostFab = ({}: Props) => {
  return (
    <FAB
      icon="plus"
      color="#000"
      onPress={() => console.log('Pressed')}
      size="medium"
      className="absolute right-4 bottom-14  bg-white"
    />
  );
};

export default PostFab;
