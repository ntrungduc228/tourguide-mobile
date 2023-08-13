import {View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import {Portal, Text, Button, Provider, Modal} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

type ModalTriggerProps = PropsWithChildren<{
  button?: string | JSX.Element;
  visible: boolean;
  setVisible: (value: boolean) => void;
}>;

export const ModalTrigger = ({
  button,
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

// const Header = ({}) => {
//   <View className="flex-row justify-between items-center border-b-0.5 border-[#DEDEDE]">
//     <TouchableOpacity className="ml-2" onPress={() => setOpenModal(false)}>
//       <AntDesign name="close" size={20} color={'#000'} />
//     </TouchableOpacity>
//     <Text className="font-bold  p-3 text-md text-black">Viết bài</Text>
//     <TouchableOpacity className="p-3 " onPress={() => {}}>
//       <Text className="text-md text-black">Đăng</Text>
//     </TouchableOpacity>
//   </View>;
// };

const styles = StyleSheet.create({
  modal: {},
});
