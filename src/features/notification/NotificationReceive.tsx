import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {IRootState} from '../../stores';
import PushNotification from 'react-native-push-notification';
import {notificationMessage} from '../../utils/notificationMessage';
import {useQuery} from '@tanstack/react-query';
import notificationService from '../../services/notificationService';
import {Notification} from '../../types/notification';

type Props = {};

export const NotificationReceive = ({}: Props) => {
  const socket = useSelector((state: IRootState) => state.socket.data);
  const user = useSelector((state: IRootState) => state.user.data.info);

  const createChannels = (id: number) => {
    PushNotification.createChannel(
      {
        channelId: `${id}-push`,
        channelName: 'TESTT',
      },
      created => {
        console.log(`createChannel returned '${created}'`);
      },
    );
  };

  useQuery({
    queryKey: ['notifications', user?.id],
    queryFn: notificationService.getNotificationsByUserId,
    staleTime: Infinity,
    enabled: !!user?.id,
    onSuccess: data => {
      if (data?.data) {
        let count: number = 0;
        data?.data.forEach((item: Notification) => {
          if (!item?.isRead) {
            count++;
          }
        });
        if (count) {
          PushNotification.localNotification({
            channelId: `${user?.id}-push`,
            title: 'Thông báo mới',
            message: `${user?.fullName} ơi, bạn có ${count} thông báo mới`,
            // bigText: notiMessage.message,
          });
        }
      }
    },
  });

  useEffect(() => {
    if (user) {
      createChannels(user?.id || -1);
    }
  }, [user]);

  useEffect(() => {
    const topic = `/topic/noti/${user?.id}/new`;
    // console.log('topic ', topic);
    if (socket) {
      socket.subscribe(topic, (payload: any) => {
        const data = payload ? JSON.parse(payload.body) : {};
        // console.log('receive notif: ', data);
        if (Object.keys(data).length) {
          const notiMessage = notificationMessage(data?.type, data);
          PushNotification.localNotification({
            channelId: `${user?.id}-push`,
            title: 'Thông báo mới',
            message: notiMessage,
            // bigText: notiMessage.message,
          });
        }
      });
    }
    return () => {
      if (socket) {
        socket.unsubscribe(topic);
      }
    };
  }, [socket, user]);

  return <></>;
};

export default NotificationReceive;
