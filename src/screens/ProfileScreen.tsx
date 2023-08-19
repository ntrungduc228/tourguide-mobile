import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import routesScreen from '../navigations/routes';
import {IRootState} from '../stores';
import {logoutFunc} from '../utils/logoutFunc';

export const ProfileScreen = () => {
  const profile = useSelector((state: IRootState) => state?.user?.data?.info);
  const [uriAvatar, setUriAvatar] = useState(
    profile?.avatar
      ? profile.avatar
      : 'https://photo-cms-tpo.epicdn.me/w890/Uploaded/2023/pcgycivo/2014_02_18/4_QFWJ.jpg',
  );

  return (
    <View className="h-full ">
      {/* <Button
        onPress={() => {
          console.log('uriAvatar', uriAvatar);
          if (uriAvatar) {
            uploadImage(uriAvatar);
          }
        }}>
        Upload
      </Button> */}

      <View className="h-full w-full bg-white">
        <View className="my-3 flex-row items-center justify-between px-4">
          <Text className="font-bold text-xl text-black">Trang cá nhân</Text>
          <TouchableOpacity onPress={() => logoutFunc()}>
            <Text className="text-red-600">Đăng xuất</Text>
          </TouchableOpacity>
        </View>
        <View>
          <AvatarUpload
            uriAvatar={uriAvatar}
            //  handlePickImage={handlePickImage}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const AvatarUpload = ({
  // handlePickImage,
  uriAvatar,
}: {
  uriAvatar: string;
  //  handlePickImage: () => void;
}) => {
  const profile = useSelector((state: IRootState) => state?.user?.data?.info);
  const navigation = useNavigation();
  return (
    <View className="py-2 px-4 w-full bg-white">
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
          Chỉnh sửa thông tin
        </Button>
      </View>
      <View className="mt-6">
        <Button
          className="rounded-full mx-0 text-white bg-black"
          mode="outlined"
          onPress={() => navigation.navigate(routesScreen.ChangePassword)}
          textColor="#fff">
          Đổi mật khẩu
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
