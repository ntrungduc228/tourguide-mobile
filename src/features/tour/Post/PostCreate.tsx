import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native-paper';
import {ImagePreview, ImagePreviewList} from '../../../components';

type PostCreateProps = {
  setOpenModal: (value: boolean) => void;
};

export const PostCreate = ({setOpenModal}: PostCreateProps) => {
  return (
    <View className="h-full w-[97%] px-2 bg-slate-100 rounded-md mx-auto">
      <View className="flex-row justify-between items-center border-b-0.5 border-[#DEDEDE]">
        <TouchableOpacity className="ml-2" onPress={() => setOpenModal(false)}>
          <AntDesign name="close" size={20} color={'#000'} />
        </TouchableOpacity>
        <Text className="font-bold  p-3 text-md text-black">Viết bài</Text>
        <TouchableOpacity className="p-3 " onPress={() => {}}>
          <Text className="text-md text-black">Đăng</Text>
        </TouchableOpacity>
      </View>
      <View className="bg-white w-full rounded-md h-[200]">
        <TextInput
          // value={}
          mode={'flat'}
          autoFocus={true}
          cursorColor={'#000'}
          activeUnderlineColor={'#fff'}
          underlineColor={'#fff'}
          className="bg-white border-0 outline-0"
          multiline={true}
          onChangeText={() => {}}
        />
      </View>
      <View className="w-full mt-4">
        <ImagePreviewList />
      </View>
      <View className="my-3">
        <IconFontAwesome5 name="image" size={25} />
      </View>
    </View>
  );
};

export default PostCreate;
