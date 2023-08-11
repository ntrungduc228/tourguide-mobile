import {default as React, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {TextInput} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ImagePreviewList} from '../../../components';
import {useMutation} from '@tanstack/react-query';
import postService from '../../../services/postService';
import {uploadImage} from '../../../utils/uploadImage';

type PostCreateProps = {
  setOpenModal: (value: boolean) => void;
};
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

export const PostCreate = ({setOpenModal}: PostCreateProps) => {
  const [valueInput, setValueInput] = useState<string>('');
  const [listImage, setListImage] = useState<string[]>([]);
  const handlePickImage = async () => {
    const res: ImagePicker.ImagePickerResponse =
      await ImagePicker.launchImageLibrary(options.options);
    if (res.didCancel) {
      return;
    }
    let temp = listImage;
    res.assets?.forEach(item => temp.unshift(item.uri!!));
    setListImage([...temp]);
  };

  const {mutate: createPost} = useMutation({
    mutationFn: postService.createPost,
    onError: (error: any) => {
      console.log('erorr ', JSON.stringify(error));
    },
    onSuccess: data => {
      console.log(data);
      //handleDeleteMembers();
    },
  });
  const onClick = () => {};

  const handleCreatePost = async () => {
    if (!!valueInput || !!listImage.length) {
      const uploadPromises: any = [];
      listImage.forEach(image => {
        uploadPromises.push(uploadImage(image));
      });
      const result = await Promise.all(uploadPromises);
      const temp = result.map(image => ({
        link: image,
      }));
      //dữ liệu giả
      createPost({files: temp, content: valueInput, tourId: 1});
      console.log('chayy', {file: temp, content: valueInput, tourId: 1});
    } else {
      console.log('ban loi');
    }
    setOpenModal(false);
  };
  return (
    <View className="h-full w-[97%] px-2 bg-slate-100 rounded-md mx-auto">
      <View className="flex-row justify-between items-center border-b-0.5 border-[#DEDEDE]">
        <TouchableOpacity className="ml-2" onPress={() => setOpenModal(false)}>
          <AntDesign name="close" size={20} color={'#000'} />
        </TouchableOpacity>
        <Text className="font-bold  p-3 text-md text-black">Viết bài</Text>
        <TouchableOpacity className="p-3 " onPress={handleCreatePost}>
          <Text className="text-md text-black">Đăng</Text>
        </TouchableOpacity>
      </View>
      <View className="bg-white w-full rounded-md h-[200]">
        <TextInput
          value={valueInput}
          mode={'flat'}
          autoFocus={true}
          cursorColor={'#000'}
          activeUnderlineColor={'#fff'}
          underlineColor={'#fff'}
          className="bg-white border-0 outline-0"
          multiline={true}
          onChangeText={text => {
            setValueInput(text);
          }}
        />
      </View>
      <View className="w-full mt-4">
        <ImagePreviewList setListImage={setListImage} listImage={listImage} />
      </View>
      <View className="my-3">
        <TouchableOpacity onPress={handlePickImage}>
          <IconFontAwesome5 name="image" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostCreate;
