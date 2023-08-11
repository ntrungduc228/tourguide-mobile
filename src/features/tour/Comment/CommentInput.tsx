import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

type CommentInputProps = {};

export const CommentInput = ({}: CommentInputProps) => {
  return (
    <View className="p-0 mb-1 border-t-0.5">
      <View className="flex-row items-center">
        <TextInput
          underlineColor="#fff"
          activeUnderlineColor="#fff"
          cursorColor="#000"
          className="bg-white  text-sm w-[90%]"
          placeholder="Nhập nội dung..."
        />
        <TouchableOpacity className="mr-4" onPress={() => {}}>
          <Feather name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentInput;
