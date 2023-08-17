import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import routesScreen from '../navigations/routes';
import {SignUp} from '../features/auth';

type SignUpProps = {};

export const SignUpScreen = ({}: SignUpProps) => {
  const navigation = useNavigation<Nav>();

  return (
    <ScrollView>
      <View className="h-full items-center p-5 ">
        <View className="w-[90%] items-center">
          <Text className="my-8 mt-[100] font-bold text-lg">Đăng ký</Text>
          <View className="w-full">
            <SignUp />
          </View>
          <View className="flex-row mt-4">
            <Text>Đã có tài khoản</Text>
            <TouchableOpacity
              className="ml-2 "
              onPress={() => navigation.navigate(routesScreen.SignIn)}>
              <Text className="font-bold">Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
