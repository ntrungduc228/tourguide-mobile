// import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import React, {useEffect} from 'react';
import Config from 'react-native-config';

var Stomp = require('stompjs/lib/stomp.js').Stomp;

type Props = {};

const SOCKET_URL = Config.REACT_APP_API_URL
  ? Config.REACT_APP_API_URL + '/ws'
  : 'http://localhost:8085' + '/ws';

export const SocketClient = ({}: Props): JSX.Element => {
  useEffect(() => {
    const socket = new SockJS(SOCKET_URL);
    const client = Stomp.over(socket);
    // client.debug = false;
    client.connect({}, () => {
      // client.subscribe('/topic/messages', (message: any) => {
      //   const receivedMessage = message;
      //   console.log('received message: ', receivedMessage.body);
      // });
      // client.send(
      //   '/app/message',
      //   {},
      //   JSON.stringify('Connect websocket with server'),
      // );
    });

    return () => {
      client.disconnect(() => {});
    };
  }, []);

  return <></>;
};

export default SocketClient;
