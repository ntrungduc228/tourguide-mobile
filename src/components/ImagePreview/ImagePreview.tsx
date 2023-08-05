import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  onPress: () => void;
};

export const ImagePreview = ({onPress}: Props) => {
  return (
    <View className="relative mx-2 mt-3" style={styles.wrap}>
      <View style={styles.close}>
        <TouchableOpacity className="ml-2" onPress={() => onPress()}>
          <AntDesign name="closecircleo" size={20} color={'#000'} />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.wrap}
        source={{
          uri: 'https://vuongquocanh.com/wp-content/uploads/2018/05/london-eye-800x534.jpg',
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
