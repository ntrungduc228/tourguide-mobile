import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SignIn} from '../features/auth';
import {useNavigation} from '@react-navigation/native';
import routesScreen from '../navigations/routes';

type SignInProps = {};

export const SignInScreen = ({}: SignInProps) => {
  const navigation = useNavigation<Nav>();

  return (
    <View className="h-full items-center p-5 ">
      <SignIn />
      <View className="flex-row  mt-4">
        <Text>Chưa có tài khoản</Text>
        <TouchableOpacity
          className="ml-2 "
          onPress={() => navigation.navigate(routesScreen.SignUp)}>
          <Text className="font-bold">Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
