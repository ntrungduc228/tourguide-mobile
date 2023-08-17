import {Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {Button} from 'react-native-paper';
import storage from '@react-native-firebase/storage';
import {uploadImage} from '../utils/uploadImage';
import {useSelector} from 'react-redux';
import {IRootState} from '../stores';
import {useNavigation} from '@react-navigation/native';
import routesScreen from '../navigations/routes';
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
    <View className="h-full pt-4 px-2">
      <Text className="font-bold text-2xl mb-5">Profile</Text>
      <AvatarUpload uriAvatar={uriAvatar} handlePickImage={handlePickImage} />
      {/* <Button
        onPress={() => {
          console.log('uriAvatar', uriAvatar);
          if (uriAvatar) {
            uploadImage(uriAvatar);
          }
        }}>
        Upload
      </Button> */}
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
  const profile = useSelector((state: IRootState) => state?.user?.data?.info);
  const navigation = useNavigation();
  return (
    <View className="px-4 py-2 ">
      <View className="flex flex-row items-center">
        <View>
          <Image
            source={{
              uri:
                uriAvatar ||
                'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg',
            }}
            className="h-[60] w-[60] rounded-full"
          />
        </View>
        <View className="ml-4 flex-1">
          <Text className="text-black font-bold text-lg">
            {profile?.fullName}
          </Text>
        </View>
      </View>
      <View className="mt-6">
        <Button
          className="rounded-full mx-0 text-white bg-black"
          mode="outlined"
          onPress={() => navigation.navigate(routesScreen.ProfileEdit)}
          textColor="#fff">
          Edit your profile
        </Button>
      </View>
    </View>

    // <View className="bg-white flex-row m-4 items-center">
    //   <Image
    //     source={{
    //       uri: uriAvatar,
    //     }}
    //     className="h-[60px] w-[60px] rounded-full"
    //   />
    //   <Button
    //     mode="text"
    //     textColor="#4caf50"
    //     className="ml-3"
    //     onPress={handlePickImage}>
    //     Choose an image
    //   </Button>
    // </View>
  );
};
