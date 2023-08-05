import {View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import {Portal, Text, Button, Provider, Modal} from 'react-native-paper';

type ModalTriggerProps = PropsWithChildren<{
  button: string | JSX.Element;
  visible: boolean;
  setVisible: (value: boolean) => void;
}>;

export const ModalTrigger = ({
  button = 'press',
  children,
  visible,
  setVisible,
}: ModalTriggerProps) => {
  const handleOpen = () => {
    setVisible(true);
  };
  return (
    <>
      <View className="">
        <TouchableOpacity onPress={handleOpen}>{button}</TouchableOpacity>
      </View>
      <Portal>
        <Modal
          style={styles.modal}
          visible={visible}
          onDismiss={() => setVisible(false)}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View>{children}</View>
          </ScrollView>
        </Modal>
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {},
});
