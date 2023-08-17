import {View, Text} from 'react-native';
import React from 'react';
import {TextInput, Button} from 'react-native-paper';
import {useMutation} from '@tanstack/react-query';
import {useFormik} from 'formik';
import useToast from '../../../hooks/useToast';
import {useNavigation} from '@react-navigation/native';
import routesScreen from '../../../navigations/routes';
import authService from '../../../services/authService';

type Props = {};

interface SignUpFormValues {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  confirmPassword: string;
}

export const SignUp = (props: Props) => {
  const navigation = useNavigation<Nav>();
  const initialValues: SignUpFormValues = {
    email: '',
    password: '',
    fullName: '',
    phone: '',
    confirmPassword: '',
  };

  const {showToast} = useToast();

  const onSubmit = async (values: any) => {
    console.log(values);
    signUpMutation({
      email: values.email,
      password: values.password,
      fullName: values.fullName,
      phone: values.phone,
    });
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
  });

  const {mutate: signUpMutation, isLoading} = useMutation({
    mutationFn: authService.signUp,
    onSuccess: () => {
      showToast('success', 'Đăng ký tài khoản thành công');
      navigation.navigate(routesScreen.SignIn);
    },
    onError: (error: any) => {
      console.log('erorr ', JSON.stringify(error));
    },
  });

  return (
    <View className="">
      <View className="w-full">
        <View className="">
          <TextInput
            placeholder="Họ tên"
            className="rounded-md shadow bg-white "
            onChangeText={formik.handleChange('fullName')}
            onBlur={formik.handleBlur('fullName')}
            value={formik.values.fullName}
          />
        </View>
        <View className=" mt-5">
          <TextInput
            placeholder="Email"
            className="rounded-md shadow bg-white w-full"
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            value={formik.values.email}
          />
        </View>
        <View className="w-full mt-5">
          <TextInput
            placeholder="Điện thoại"
            className="rounded-md shadow bg-white w-full"
            onChangeText={formik.handleChange('phone')}
            onBlur={formik.handleBlur('phone')}
            value={formik.values.phone}
          />
        </View>
        <View className="w-full mt-5">
          <TextInput
            placeholder="Mật khẩu"
            className="rounded-md shadow bg-white w-full"
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            secureTextEntry={true}
            value={formik.values.password}
          />
        </View>
        <View className="w-full mt-5">
          <TextInput
            placeholder="Nhập lại mật khẩu"
            className="rounded-md shadow bg-white w-full"
            secureTextEntry={true}
            onChangeText={formik.handleChange('confirmPassword')}
            onBlur={formik.handleBlur('confirmPassword')}
            value={formik.values.confirmPassword}
          />
        </View>
      </View>
      <View className="items-center">
        <Button
          loading={isLoading}
          disabled={isLoading}
          onPress={() => formik.handleSubmit()}
          mode="elevated"
          className={`${isLoading ? 'bg-cyan-200' : 'bg-cyan-500'}  mt-5`}>
          <Text className="text-white">Đăng ký</Text>
        </Button>
      </View>
    </View>
  );
};

export default SignUp;
