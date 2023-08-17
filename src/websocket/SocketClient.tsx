import SockJS from 'sockjs-client';
import React, {useEffect} from 'react';
import Config from 'react-native-config';

// var Stomp = require('stompjs/lib/stomp.js').Stomp;
import Stomp from 'webstomp-client';
import {useDispatch} from 'react-redux';
import {setSocket} from '../stores/slices/socketSlice';

type Props = {};

const SOCKET_URL = Config.REACT_APP_SERVER_URL
  ? Config.REACT_APP_SERVER_URL + '/ws'
  : 'http://localhost:8085' + '/ws';

export const SocketClient = ({}: Props): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    const socket = new SockJS(SOCKET_URL);
    const client = Stomp.over(socket);
    // client.debug = false;
    client.connect({}, () => {
      dispatch(setSocket(client));
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
