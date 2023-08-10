import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import routesScreen from '../navigations/routes';

type SignInProps = {};

export const SignInScreen = ({}: SignInProps) => {
  const navigation = useNavigation<Nav>();
  return (
    <View className="h-full items-center p-5 ">
      <View className="w-[90%] items-center">
        <Text className="my-8 mt-[200] font-bold text-lg">Đăng Nhập</Text>
        <View className="w-full">
          <TextInput
            placeholder="Email"
            className="rounded-md shadow bg-white w-full"
          />
        </View>
        <View className="w-full mt-5">
          <TextInput
            placeholder="Mat khau"
            className="rounded-md shadow bg-white w-full"
          />
        </View>
        <View className="mt-3 items-start">
          <TouchableOpacity>
            <Text>Quen mat khau</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Button mode="elevated" className="bg-cyan-400 mt-5">
            <Text className="text-white">Đăng Nhập</Text>
          </Button>
        </View>
        <View className="flex-row mt-4">
          <Text>Chua co tai khoan</Text>
          <TouchableOpacity
            className="ml-2 "
            onPress={() => navigation.navigate(routesScreen.SignUp)}>
            <Text className="font-bold">Dang ky</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
