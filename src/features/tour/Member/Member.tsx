import {View, SafeAreaView, Text} from 'react-native';
import React from 'react';

type Props = {};

export const Member = (props: Props) => {
  return (
    <SafeAreaView className="bg-red-300">
      <Text>Member</Text>
    </SafeAreaView>
  );
};

export default Member;

export const MemberItem = () => {
  return <></>;
};
