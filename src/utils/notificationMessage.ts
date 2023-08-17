export enum NotificationType {
  COMMENT = 'COMMENT',
  REPLY_COMMENT = 'REPLY_COMMENT',
  BEGIN_TOUR = 'BEGIN_TOUR',
  END_TOUR = 'END_TOUR',
  LIKE_POST = 'LIKE_POST',
  ADD_ROOM = 'ADD_ROOM',
  APPROVE_ROOM = 'APPROVE_ROOM',
  NEW_APPOINTMENT = 'NEW_APPOINTMENT',
}

export const notificationMessage = (type: NotificationType, data: any) => {
  let notification: any = {};
  switch (type) {
    case NotificationType.BEGIN_TOUR: {
      notification.message = `Tour ${data?.data?.name} đã bắt đầu, chúc bạn có trải nghiệm vui vẻ`;
      break;
    }
    case NotificationType.END_TOUR: {
      notification.message = `Tour ${data?.data?.name} đã kết thúc, hẹn gặp lại`;
      break;
    }
  }
  return notification;
};
