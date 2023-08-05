import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {ImagePreview} from '../ImagePreview';

type Props = {};

export const ImagePreviewList = ({}: Props) => {
  const images = [1, 2, 3];

  return (
    <View>
      <View className="">
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          className="w-full flex-row gap-2">
          {images?.length &&
            images?.map(e => <ImagePreview key={e} onPress={() => {}} />)}
        </ScrollView>
      </View>
    </View>
  );
};

export default ImagePreviewList;
