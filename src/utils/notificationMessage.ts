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
  let message: string = '';
  switch (type) {
    case NotificationType.BEGIN_TOUR: {
      message = `Tour ${data?.data?.name} đã bắt đầu, chúc bạn có trải nghiệm vui vẻ`;
      break;
    }
    case NotificationType.END_TOUR: {
      message = `Tour ${data?.data?.name} đã kết thúc, hẹn gặp lại`;
      break;
    }
    case NotificationType.COMMENT: {
      message = `đã bình luận bài viết của bạn`;
      break;
    }
    case NotificationType.REPLY_COMMENT: {
      message = `đã phản hồi bình luận của bạn`;
      break;
    }
    case NotificationType.ADD_ROOM: {
      message = `Tour ${data?.data?.name} đã kết thúc, hẹn gặp lại`;
      break;
    }
    case NotificationType.APPROVE_ROOM: {
      message = `đã vào phòng`;
      break;
    }
    case NotificationType.NEW_APPOINTMENT: {
      message = `đã tạo cuộc hẹn mới`;
      break;
    }
  }
  return message;
};
