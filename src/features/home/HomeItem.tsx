import {View, Text} from 'react-native';
import React from 'react';
import {Avatar, Button, Card} from 'react-native-paper';

type Props = {
  title: string;
  onPress: () => void;
};

export const HomeItem = ({title, onPress}: Props) => {
  return (
    <View className="w-[40%] m-4">
      <Card onPress={onPress}>
        <Card.Content>
          <Text>{title}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default HomeItem;
