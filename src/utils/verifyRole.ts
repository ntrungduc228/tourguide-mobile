import {ROLE} from '../types/user';

export const verifyTourist = (role: ROLE) => {
  return role === ROLE.TOURIST;
};

export const verifyTourGuide = (role: ROLE) => {
  return role === ROLE.TOURIST_GUIDE;
};
