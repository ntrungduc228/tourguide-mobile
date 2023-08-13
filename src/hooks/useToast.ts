import Toast from 'react-native-toast-message';

const useToast = () => {
  const showToast = (type = 'info', text1 = '', text2 = '', ...props: any) => {
    Toast.show({
      type: type,
      text1: text1,
      text2: text2,
      ...props,
    });
  };
  return {
    showToast,
  };
};

export default useToast;
