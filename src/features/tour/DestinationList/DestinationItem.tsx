import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Destination} from '../../../types/destination';
import {formatDate, formatTime} from '../../../utils/formatDate';
import MenuDestinationItem from './MenuDestinationItem';

type DestinationitemProps = {
  destination: Destination;
};

export const DestinationItem = ({destination}: DestinationitemProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <View className="flex p-3 px-2 flex-row">
      <View className="ml-1 bg-blue-100 p-2 rounded-lg flex-1">
        <View className="flex-row justify-between">
          <View className="mr-2">
            <Text className="font-bold text-black break-all">
              {destination.name}
            </Text>
            <Text className="break-all">{destination.address}</Text>
          </View>
          <View>
            <Text>{formatDate(destination.departureTime)}</Text>
            <Text>{formatTime(destination.departureTime)}</Text>
          </View>
          <View>
            {/* <TouchableOpacity onPress={() => setVisible(true)}>
              <SimpleLineIcons name="options-vertical" size={20} />
            </TouchableOpacity> */}
            {/* <MenuDestinationItem
              visible={visible}
              setVisible={setVisible}
              destination={destination}
            /> */}
          </View>
        </View>

        <Text className="break-all">{destination.content}</Text>
      </View>
      {/* {visible && (
      )} */}
    </View>
  );
};

export default DestinationItem;
