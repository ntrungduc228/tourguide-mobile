import {View, TouchableOpacity} from 'react-native';
import React, {PropsWithChildren} from 'react';

type IconWrapperProps = PropsWithChildren<{
  size: number;
  onPress?: () => void;
}>;

export const IconWrapper = ({
  size = 24,
  children,
  onPress,
  ...props
}: IconWrapperProps) => {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <View
        style={{
          width: size,
          height: size,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};
