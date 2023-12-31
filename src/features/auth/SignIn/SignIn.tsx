import {useMutation} from '@tanstack/react-query';
import {useFormik} from 'formik';
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Button} from 'react-native-paper';
import {axiosClient} from '../../../configs/axios';
import {useDispatch} from 'react-redux';
import authService from '../../../services/authService';
import {setAccessToken} from '../../../stores/slices/userSlice';
import useToast from '../../../hooks/useToast';

type SignInProps = {};

interface SignInFormValues {
  email: string;
  password: string;
}

export const SignIn = ({}: SignInProps) => {
  const dispatch = useDispatch();
  const initialValues: SignInFormValues = {email: '', password: ''};
  const {showToast} = useToast();

  const onSubmit = async (values: any) => {
    // console.log(values);
    signInMutation(values);
    // signInMutation({email: 'hdv@gmail.com', password: '123123'});
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
  });

  const {mutate: signInMutation, isLoading} = useMutation({
    mutationFn: authService.signIn,
    onSuccess: (data: any) => {
      // console.log('data return ', data);
      if (data?.accessToken) {
        dispatch(setAccessToken({accessToken: data?.accessToken}));
      }
    },
    onError: (error: any) => {
      showToast('error', error?.message);
      console.log('erorr ', JSON.stringify(error));
    },
  });

  return (
    <View className="w-[90%] items-center ">
      <Text className="my-8 mt-[200] font-bold text-lg">Đăng Nhập</Text>
      <View className="w-full">
        <TextInput
          placeholder="Email"
          className="rounded-md px-3 shadow bg-white w-full"
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
        />
      </View>
      <View className="w-full mt-5">
        <TextInput
          placeholder="Mật khẩu"
          secureTextEntry={true}
          className="rounded-md px-3 shadow bg-white w-full"
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
        />
      </View>
      {/* <View className=" w-full mt-2">
        <Text className="italic text-red-500">Da co loi</Text>
      </View> */}
      <View className="mt-3 ">
        <TouchableOpacity>
          <Text>Quên mật khẩu</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Button
          loading={isLoading}
          disabled={isLoading}
          onPress={() => formik.handleSubmit()}
          mode="elevated"
          className={`${isLoading ? 'bg-cyan-200' : 'bg-cyan-500'}  mt-5`}>
          <Text className="text-white">Đăng Nhập</Text>
        </Button>
      </View>
    </View>
  );
};
