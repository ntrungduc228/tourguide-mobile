import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '../stores';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import userService from '../services/userService';
import useToast from '../hooks/useToast';
import {updateUserInfo} from '../stores/slices/userSlice';
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
const ProfileEdit = () => {
  const profile = useSelector((state: IRootState) => state?.user?.data?.info);
  const [uriAvatar, setUriAvatar] = useState(
    profile?.avatar
      ? profile.avatar
      : 'https://photo-cms-tpo.epicdn.me/w890/Uploaded/2023/pcgycivo/2014_02_18/4_QFWJ.jpg',
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
  const {showToast} = useToast();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const {mutate: updateProfile} = useMutation({
    mutationFn: userService.updateProfile,
    onError: (error: any) => {
      showToast('error', 'Cập nhật thất bại');
      console.log('erorr ', JSON.stringify(error));
    },
    onSuccess: data => {
      showToast('success', 'Cập nhật thành công');
      dispatch(updateUserInfo(data.data));
      //queryClient.invalidateQueries(['appointmentMembers', appointment?.id]);
      //handleDeleteMembers();
    },
  });

  return (
    <View>
      <AvatarUpload uriAvatar={uriAvatar} handlePickImage={handlePickImage} />

      {/* anh */}
      <View className="flex-col mx-4 mt-2">
        <TextInput
          className="bg-white border-b-1 h-[60]"
          mode="flat"
          label="Họ tên"
          // value={userInfo.username}
          activeUnderlineColor="#000"
          //   {...register('username', {
          //     required: 'user name is required filed',
          //     maxLength: 60,
          //   })}
          // onChangeText={e => setUserInfo(prev => ({...prev, username: e}))}
        />
        {/* <Text>{errors.username}</Text> */}
        <TextInput
          className="bg-white border-b-1 h-[60] mt-5 bg-slate-200"
          mode="flat"
          label="Email"
          editable={false}
          value="Khanhvi@"
          activeUnderlineColor="#000"
          // onChangeText={e => setUserInfo(prev => ({...prev, bio: e}))}
        />
        <TextInput
          className="bg-white border-b-1 h-[60] mt-5"
          mode="flat"
          label="Địa chỉ"
          // value={userInfo.bio}
          activeUnderlineColor="#000"
          // onChangeText={e => setUserInfo(prev => ({...prev, bio: e}))}
        />
        <TextInput
          className="bg-white border-b-1 h-[60] mt-5"
          mode="flat"
          label="SĐT"
          // value={userInfo.bio}
          activeUnderlineColor="#000"
          // onChangeText={e => setUserInfo(prev => ({...prev, bio: e}))}
        />
      </View>
      <Button
        mode="text"
        className="rounded-full w-24 mt-10 mx-auto text-white bg-green-500"
        textColor="#fff"
        //onPress={() => }
      >
        Lưu
      </Button>
    </View>
  );
};
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

export default ProfileEdit;
