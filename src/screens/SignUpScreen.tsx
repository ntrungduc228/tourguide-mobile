import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

type SignUpProps = {};

export const SignUpScreen = ({}: SignUpProps) => {
  return (
    <View className="h-full items-center p-5 ">
      <View className="w-[90%] items-center">
        <Text className="my-8 mt-[100] font-bold text-lg">Đăng ky</Text>
        <View className="w-full">
          <TextInput
            placeholder="ho ten"
            className="rounded-md shadow bg-white w-full"
          />
        </View>
        <View className="w-full mt-5">
          <TextInput
            placeholder="Email"
            className="rounded-md shadow bg-white w-full"
          />
        </View>
        <View className="w-full mt-5">
          <TextInput
            placeholder="sdt"
            className="rounded-md shadow bg-white w-full"
          />
        </View>
        <View className="w-full mt-5">
          <TextInput
            placeholder="Mat khau"
            className="rounded-md shadow bg-white w-full"
          />
        </View>
        <View className="w-full mt-5">
          <TextInput
            placeholder="nhap lai mat khau"
            className="rounded-md shadow bg-white w-full"
          />
        </View>

        <View>
          <Button mode="elevated" className="bg-cyan-400 mt-5">
            <Text className="text-white">Đăng Nhập</Text>
          </Button>
        </View>
        <View className="flex-row mt-4">
          <Text>Chua co tai khoan</Text>
          <TouchableOpacity className="ml-2 ">
            <Text className="font-bold">Dang ky</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
