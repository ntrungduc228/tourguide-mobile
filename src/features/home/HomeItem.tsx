import {View, Text} from 'react-native';
import React from 'react';
import {Avatar, Button, Card} from 'react-native-paper';

type Props = {
  title: string;
  onPress: () => void;
  icon?: JSX.Element;
};

export const HomeItem = ({icon, title, onPress}: Props) => {
  return (
    <Card
      onPress={onPress}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.23,
        shadowRadius: 11.27,
        elevation: 14,
      }}
      className={
        'flex justify-center m-4 items-center h-[150] w-[40%] bg-white'
      }>
      <Card.Content className="items-center gap-2">
        {icon}
        <Text className="font-bold text-black">{title}</Text>
      </Card.Content>
    </Card>
  );
};

export default HomeItem;
