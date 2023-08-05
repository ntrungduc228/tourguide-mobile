import {
  View,
  Text,
  Image,
  ScrollView,
  NativeScrollEvent,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils';
import {File} from '../../types/file';

type SwipeProps = {
  images: File[];
};

export const Swipe = ({images}: SwipeProps) => {
  const [imgActive, setImgActive] = useState<number>(0);
  const onChange = (nativeEvent: NativeScrollEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== imgActive) {
        setImgActive(slide);
      }
    }
  };

  return (
    <View>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({nativeEvent}) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}>
          {images?.length &&
            images?.map(e => (
              <Image key={e.link} style={styles.wrap} source={{uri: e.link}} />
            ))}
        </ScrollView>
        {images?.length > 1 && (
          <View className="absolute top-1 right-2 bg-black opacity-0.3 p-1 py-0.5 rounded-md">
            <Text className="text-xs text-white">
              {imgActive + '/' + images?.length}
            </Text>
          </View>
        )}
      </View>
      {images?.length > 1 && (
        <View style={styles.wrapDot}>
          {images?.map((e, index) => (
            <Text
              key={e.link}
              style={imgActive === index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default Swipe;

const styles = StyleSheet.create({
  wrap: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT * 0.3,
  },
  wrapDot: {
    // position: 'absolute',
    // bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    marginTop: 1,
    marginHorizontal: 3,
    color: 'black',
  },
  dot: {
    marginTop: 1,
    marginHorizontal: 3,
    color: '#888',
  },
});
