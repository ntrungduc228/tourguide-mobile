import {View, Text, TouchableOpacity} from 'react-native';
import React, {PropsWithChildren} from 'react';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

type Props = PropsWithChildren<{}>;

export const ScreenBackLayout = ({children}: Props) => {
  return <View>{children}</View>;
};

const Header = ({title}: {title: string}) => {
  const navigation = useNavigation<Nav>();
  return (
    <View className="h-14 w-full flex-row items-center justify-between">
      <View className="flex-row items-center">
        <TouchableOpacity className="mx-5" onPress={() => navigation.goBack()}>
          <IconFontAwesome5 name="arrow-left" size={20} />
        </TouchableOpacity>
        <Text className="font-medium text-xl text-black">{title}</Text>
      </View>
    </View>
  );
};

const Body = ({children}: PropsWithChildren<{}>) => {
  return <View className="">{children}</View>;
};

ScreenBackLayout.Header = Header;

ScreenBackLayout.Body = Body;

export default ScreenBackLayout;
