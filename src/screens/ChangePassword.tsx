import {useFormik} from 'formik';
import {default as React} from 'react';
import {Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import authService from '../services/authService';
import {useMutation} from '@tanstack/react-query';
import useToast from '../hooks/useToast';
import {useNavigation} from '@react-navigation/native';

type Props = {};
interface ProfileEditFormValues {
  password: string;
  newPass: string;
  rePass: string;
}
const ChangePassword = (props: Props) => {
  const navigation = useNavigation<Nav>();
  const initialValues: ProfileEditFormValues = {
    password: '',
    newPass: '',
    rePass: '',
  };
  const {showToast} = useToast();

  const {mutate: updatePassword} = useMutation({
    mutationFn: authService.changePassword,
    onError: (error: any) => {
      showToast('error', 'Cập nhật thất bại');
      console.log('erorr ', JSON.stringify(error));
    },
    onSuccess: data => {
      showToast('success', 'Cập nhật thành công');
      navigation.goBack();
      console.log('da', data.data);
      //dispatch(updateUserInfo(data.data));
      //queryClient.invalidateQueries(['appointmentMembers', appointment?.id]);
      //handleDeleteMembers();
    },
  });
  const onSubmit = (values: any) => {
    console.log('lcicck');
    if (values.rePass === values.newPass) {
      updatePassword({
        password: values.password,
        newPassword: values.newPass,
      });
    } else {
      showToast('error', 'Mật khẩu mới không trùng');
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
  });

  return (
    <View>
      <View className="flex-col mx-4 mt-2">
        <TextInput
          className="bg-white border-b-1 h-[60]"
          mode="flat"
          label="Mật khẩu"
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
          secureTextEntry={true}
          activeUnderlineColor="#000"
        />

        <TextInput
          className="bg-white border-b-1 h-[60] mt-5"
          mode="flat"
          label="Mật khẩu mới"
          onChangeText={formik.handleChange('newPass')}
          onBlur={formik.handleBlur('newPass')}
          value={formik.values.newPass}
          secureTextEntry={true}
          // value={userInfo.bio}
          activeUnderlineColor="#000"
          // onChangeText={e => setUserInfo(prev => ({...prev, bio: e}))}
        />
        <TextInput
          className="bg-white border-b-1 h-[60] mt-5"
          mode="flat"
          label="Nhập lại mật khẩu"
          onChangeText={formik.handleChange('rePass')}
          onBlur={formik.handleBlur('rePass')}
          value={formik.values.rePass}
          secureTextEntry={true}
          // value={userInfo.bio}
          activeUnderlineColor="#000"
          // onChangeText={e => setUserInfo(prev => ({...prev, bio: e}))}
        />
      </View>
      <Button
        mode="text"
        className="rounded-full w-24 mt-10 mx-auto text-white bg-green-500"
        textColor="#fff"
        onPress={() => formik.handleSubmit()}>
        Lưu
      </Button>
    </View>
  );
};

export default ChangePassword;
