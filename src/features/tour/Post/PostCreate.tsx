import {default as React, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {TextInput} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {ImagePreviewList} from '../../../components';
import {IRootState} from '../../../stores';
import {Post} from '../../../types/post';
import {uploadImage} from '../../../utils/uploadImage';

type PostCreateProps = {
  setOpenModal: (value: boolean) => void;
  createPost: any;
  postInit?: Post;
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

export const PostCreate = ({
  setOpenModal,
  createPost,
  postInit,
}: PostCreateProps) => {
  // const {tourId} = useTravel();

  const tourId = useSelector((state: IRootState) => state.tour.tourId);
  const [valueInput, setValueInput] = useState<string>(
    !!postInit ? postInit?.content : '',
  );
  const [listImage, setListImage] = useState<string[]>([]);
  useEffect(() => {
    if (!!postInit?.files?.length) {
      const temp = postInit?.files.map(item => {
        return item.link;
      });
      setListImage(temp);
    }
  }, [postInit]);
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

  const handleCreatePost = async () => {
    if (!!valueInput || !!listImage.length) {
      const uploadPromises: any = [];
      const alreadyUploaded: any = [];
      listImage.forEach(image => {
        if (image.startsWith('https://')) {
          console.log('daaa');
          alreadyUploaded.push(image);
        } else {
          console.log('chuaa');
          uploadPromises.push(uploadImage(image));
        }
      });
      const result = await Promise.all(uploadPromises);
      const temp = result.concat(alreadyUploaded).map(image => ({
        link: image,
      }));
      if (!!postInit) {
        //update
        createPost({...postInit, files: temp, content: valueInput});
      } else {
        createPost({files: temp, content: valueInput, tourId: tourId!});
      }

      console.log('chayy', {files: temp, content: valueInput, tourId: tourId});
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
