import React, {PropsWithChildren} from 'react';
import {View, Text} from 'react-native';
import {Button, Dialog, Portal} from 'react-native-paper';

type DialogConfirmProps = PropsWithChildren<{
  visible: boolean;
  setVisible: (value: boolean) => void;
}>;

export const DialogConfirm = ({
  setVisible,
  visible,
  children,
}: DialogConfirmProps) => {
  const hideDialog = () => {
    setVisible(false);
  };
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        {/* <Text>dsfsdfdf</Text> */}
        {children}
      </Dialog>
    </Portal>
  );
};
