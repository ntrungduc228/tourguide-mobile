// import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import React, {useEffect} from 'react';
import Config from 'react-native-config';
import {useDispatch, useSelector} from 'react-redux';
import {setSocket} from '../stores/slices/socketSlice';
import {IRootState} from '../stores';

var Stomp = require('stompjs/lib/stomp.js').Stomp;

type Props = {};

const SOCKET_URL = Config.REACT_APP_SERVER_URL
  ? Config.REACT_APP_SERVER_URL + '/ws'
  : 'http://localhost:8085/api' + '/ws';

export const SocketClient = ({}: Props): JSX.Element => {
  const dispatch = useDispatch();
  const id = useSelector((state: IRootState) => state.user.data?.info?.id);

  useEffect(() => {
    try {
      const socket = new SockJS(SOCKET_URL);
      const client = Stomp.over(socket);
      // client.debug = false;
      client.connect(
        {},
        () => {
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
        },
        (err: any) => {
          console.log(JSON.stringify(err));
        },
      );

      return () => {
        client.disconnect(() => {});
      };
    } catch (err) {
      console.log('connect_socket: ', err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return <></>;
};

export default SocketClient;
