import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  Platform,
} from 'react-native';
import React, {PropsWithChildren, useEffect, useRef} from 'react';
import {WINDOW_HEIGHT} from '../../../utils';

type CommentLayoutProps = PropsWithChildren<{
  setOpenComment: (value: boolean) => void;
}>;

const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.8;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.1;
const MAX_UPWARD_TRANSLATE_Y =
  BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
const MAX_DOWNWARD_TRANSLATE_Y = 0;

export const CommentLayout = ({
  setOpenComment,
  children,
}: CommentLayoutProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        lastGestureDy.current += gesture.dy;
        if (lastGestureDy.current < MAX_UPWARD_TRANSLATE_Y) {
          lastGestureDy.current = MAX_UPWARD_TRANSLATE_Y;
        } else if (lastGestureDy.current > MAX_DOWNWARD_TRANSLATE_Y) {
          setOpenComment(false);
          lastGestureDy.current = MAX_DOWNWARD_TRANSLATE_Y;
        }
      },
    }),
  ).current;

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  useEffect(() => {
    return () => {
      setOpenComment(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
      <View style={styles.draggableArea} {...panResponder.panHandlers}>
        <View style={styles.dragHandle} />
      </View>
      <View className="my-2 pb-9">{children}</View>
    </Animated.View>
  );
};

export default CommentLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    position: 'absolute',
    zIndex: 1000,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddindBottom: 20,
    paddingHorizontal: 10,
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    shadowColor: '#a8bed2',
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowOffset: {
      width: 2,
      height: 2,
    },

    // ...Platform.select({
    //   android: {
    //     elevation: 3,
    //   },
    //   ios: {
    //     shadowColor: '#a8bed2',
    //     shadowOpacity: 1,
    //     shadowRadius: 6,
    //     shadowOffset: {
    //       width: 2,
    //       height: 2,
    //     },
    //   },
    // }),
  },
  draggableArea: {
    width: 132,
    height: 32,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
  },
});
