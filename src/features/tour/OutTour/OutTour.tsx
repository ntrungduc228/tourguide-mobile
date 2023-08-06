import {View} from 'react-native';
import React from 'react';
import {Button, Dialog, Portal, Text} from 'react-native-paper';

type OurTourProps = {
  setVisible: (value: boolean) => void;
};

export const OutTour = ({setVisible}: OurTourProps) => {
  return (
    <View className="bg-white p-3">
      {/* <Dialog.Title>Alert</Dialog.Title> */}
      <Dialog.Content>
        <Text className="mt-4">Bạn có chắc chắn muốn rời nhóm</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button className="bg-red-500 px-2 " onPress={() => {}}>
          <Text className="text-white">Xác nhận</Text>
        </Button>
        <Button
          className="bg-yellow-500 px-3 ml-3"
          onPress={() => setVisible(false)}>
          <Text className="text-white">Hủy</Text>
        </Button>
      </Dialog.Actions>
    </View>
  );
};

export default OutTour;
