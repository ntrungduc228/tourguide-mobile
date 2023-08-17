import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {Button} from 'react-native-paper';
import storage from '@react-native-firebase/storage';
import {uploadImage} from '../utils/uploadImage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {logoutFunc} from '../utils/logoutFunc';

type Props = {};

export const ProfileScreen = ({}: Props) => {
  const [uriAvatar, setUriAvatar] = useState(
    'https://photo-cms-tpo.epicdn.me/w890/Uploaded/2023/pcgycivo/2014_02_18/4_QFWJ.jpg',
  );

  return (
    <View className="h-full bg-white">
      <View className="my-3 flex-row items-center justify-between px-4">
        <Text className="font-bold text-xl text-black">Trang cá nhân</Text>
        <TouchableOpacity onPress={() => logoutFunc()}>
          <Text className="text-red-600">Đăng xuất</Text>
        </TouchableOpacity>
      </View>

      <View></View>
    </View>
  );
};

export default ProfileScreen;

const AvatarUpload = ({
  handlePickImage,
  uriAvatar,
}: {
  uriAvatar: string;
  handlePickImage: () => void;
}) => {
  return (
    <View className="bg-white flex-row m-4 items-center">
      <Image
        source={{
          uri: uriAvatar,
        }}
        className="h-[60px] w-[60px] rounded-full"
      />
      <Button
        mode="text"
        textColor="#4caf50"
        className="ml-3"
        onPress={handlePickImage}>
        Choose an image
      </Button>
    </View>
  );
};
