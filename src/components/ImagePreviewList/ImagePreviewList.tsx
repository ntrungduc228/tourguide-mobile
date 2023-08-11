import React from 'react';
import {ScrollView, View} from 'react-native';
import {ImagePreview} from '../ImagePreview';

type Props = {
  listImage: string[];
  setListImage: (images: string[]) => void;
};

export const ImagePreviewList = ({listImage, setListImage}: Props) => {
  console.log('listssss', listImage);
  return (
    <View>
      <View className="">
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          className="w-full flex-row gap-2">
          {!!listImage?.length &&
            listImage?.map(e => (
              <ImagePreview
                key={e}
                image={e}
                setListImage={setListImage}
                listImage={listImage}
              />
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ImagePreviewList;
