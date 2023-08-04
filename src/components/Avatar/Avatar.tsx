import {View, Text, Image} from 'react-native';
import React from 'react';

type Props = {
  src: string;
  className?: string;
};

export const Avatar = ({src, className}: Props) => {
  return (
    <Image
      source={{
        uri:
          src ||
          'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
      }}
      className={`${className} rounded-full`}
    />
  );
};

export default Avatar;
