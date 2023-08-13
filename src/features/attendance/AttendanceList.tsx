import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  setOpenModal: (value: boolean) => void;
};

export const AttendanceList = ({setOpenModal}: Props) => {
  return (
    <View className="bg-white">
      <View className="flex-row justify-between items-center border-b-0.5 border-[#DEDEDE]">
        <TouchableOpacity className="ml-2" onPress={() => setOpenModal(false)}>
          <AntDesign name="close" size={20} color={'#000'} />
        </TouchableOpacity>
        <Text className="font-bold  p-3 text-md text-black">Điểm danh</Text>
        <TouchableOpacity className="p-3 " onPress={() => {}}>
          {/* <Text className="text-md text-black">Chọn tất cả</Text> */}
        </TouchableOpacity>
      </View>
      <Text>AttendanceList</Text>
    </View>
  );
};

export default AttendanceList;
