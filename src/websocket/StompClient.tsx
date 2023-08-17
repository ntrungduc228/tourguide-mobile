import {View, Text} from 'react-native';
import React from 'react';
import {Client} from '@stomp/stompjs';

import {WebSocket} from 'ws';
Object.assign(global, {WebSocket});

type StmopClientProps = {};

export const StompClient = ({}: StmopClientProps) => {
  const client = new Client({
    brokerURL: 'ws://192.168.2.105:8085/api/ws',
    // onConnect: () => {
    //   console.log('init socket');
    //   client.publish({destination: '/app/message', body: 'First Message'});
    // },
  });

  if (client) {
    client.activate();
  }
  return (
    <View>
      <Text>StompClient</Text>
    </View>
  );
};

export default StompClient;
