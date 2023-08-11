import {Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {Button} from 'react-native-paper';
import storage from '@react-native-firebase/storage';
import {uploadImage} from '../utils/uploadImage';
interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}

const options: Action = {
  title: 'Select Image',
  type: 'library',
  options: {
    selectionLimit: 0,
    mediaType: 'photo',
    includeBase64: false,
  },
};

type Props = {};

export const ProfileScreen = ({}: Props) => {
  const [uriAvatar, setUriAvatar] = useState(
    'https://photo-cms-tpo.epicdn.me/w890/Uploaded/2023/pcgycivo/2014_02_18/4_QFWJ.jpg',
  );

  const handlePickImage = async () => {
    const res: ImagePicker.ImagePickerResponse =
      await ImagePicker.launchImageLibrary(options.options);
    if (res.didCancel) {
      return;
    }

    const uri: string | undefined = res?.assets
      ? res?.assets[0].uri
      : 'https://photo-cms-tpo.epicdn.me/w890/Uploaded/2023/pcgycivo/2014_02_18/4_QFWJ.jpg';

    setUriAvatar(uri || '');

    // const url = await uploadImage(res.assets[0].uri);
    // console.log('url ', url);

    console.log('my res', res);
  };

  return (
    <View className="h-full aligns-center justify-center">
      <Text className="font-bold text-2xl">Profile</Text>
      <AvatarUpload uriAvatar={uriAvatar} handlePickImage={handlePickImage} />
      <Button
        onPress={() => {
          console.log('uriAvatar', uriAvatar);
          if (uriAvatar) {
            uploadImage(uriAvatar);
          }
        }}>
        Upload
      </Button>
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
