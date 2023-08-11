import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  image: string;
  listImage: string[];
  setListImage: (images: string[]) => void;
};

export const ImagePreview = ({listImage, image, setListImage}: Props) => {
  const handleRemoveImage = () => {
    const temp = listImage.filter(item => item !== image);
    setListImage(temp);
  };

  return (
    <View className="relative mx-2 mt-3" style={styles.wrap}>
      <View style={styles.close}>
        <TouchableOpacity className="ml-2" onPress={handleRemoveImage}>
          <AntDesign name="closecircleo" size={20} color={'#000'} />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.wrap}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

export default ImagePreview;

const styles = StyleSheet.create({
  wrap: {
    maxWidth: 200,
    objectFit: 'contain',
    width: 200,
    height: 100,
    borderRadius: 6,
    // width: WINDOW_WIDTH * 0.8,
    // height: WINDOW_HEIGHT * 0.2,
  },
  close: {
    position: 'absolute',
    right: -8,
    top: -8,
    zIndex: 10,
  },
});
