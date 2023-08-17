import {useMutation} from '@tanstack/react-query';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useToast from '../../../hooks/useToast';
import tourService from '../../../services/tourService';

type JoinTourProps = {
  setVisible: (value: boolean) => void;
};

export const JoinTour = ({setVisible}: JoinTourProps) => {
  const {showToast} = useToast();
  const [textValue, setTextValue] = useState<number | null>(null);
  const {mutate: joiRoom} = useMutation({
    mutationFn: tourService.joinRoom,
    onError: (error: any) => {
      console.log('erorr ', JSON.stringify(error));
      showToast('error', error?.message);

      setVisible(false);
    },
    onSuccess: data => {
      showToast('success', 'Yêu cầu thành công');
      setVisible(false);
      //handleDeleteMembers();
    },
  });

  return (
    <View className="bg-white m-4 rounded-lg">
      <View className="flex-row justify-between items-center border-b-0.5 border-[#DEDEDE]">
        <TouchableOpacity className="ml-2" onPress={() => setVisible(false)}>
          <AntDesign name="close" size={20} color={'#000'} />
        </TouchableOpacity>
        <Text className="font-bold  p-3 text-md text-black">Tham gia tour</Text>
      </View>
      <View className="px-2">
        <TextInput
          className="bg-slate-100 text-sm"
          placeholder="Nhập mã tour"
          cursorColor="#000"
          onChangeText={text => {
            setTextValue(+text);
          }}
        />
        <Button
          className={`my-5 self-end  w-[100] ${
            !textValue ? `bg-slate-400` : `bg-cyan-500`
          }`}
          disabled={!textValue}
          onPress={() => {
            if (!!textValue) joiRoom(textValue!!);
          }}>
          <Text className="text-white">Tham gia</Text>
        </Button>
      </View>
    </View>
  );
};

export default JoinTour;
