import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextInput, Button} from 'react-native-paper';

type JoinTourProps = {
  setVisible: (value: boolean) => void;
};

export const JoinTour = ({setVisible}: JoinTourProps) => {
  return (
    <View className="bg-white m-4 rounded-lg">
      <View className="flex-row justify-between items-center border-b-0.5 border-[#DEDEDE]">
        <TouchableOpacity className="ml-2" onPress={() => setVisible(false)}>
          <AntDesign name="close" size={20} color={'#000'} />
        </TouchableOpacity>
        <Text className="font-bold  p-3 text-md text-black">Tham gia tour</Text>
        <TouchableOpacity className="p-3 " onPress={() => {}}>
          {/* <Text className="text-md text-black">Đăng</Text> */}
        </TouchableOpacity>
      </View>
      <View className="px-2">
        <TextInput
          className="bg-slate-100 text-sm"
          placeholder="Nhập mã tour"
          cursorColor="#000"
        />
        <Button className="my-5 self-end bg-cyan-500 w-[100] ">
          <Text className="text-white">Tham gia</Text>
        </Button>
      </View>
    </View>
  );
};

export default JoinTour;
