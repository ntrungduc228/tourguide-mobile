import {ParamListBase, RouteProp} from '@react-navigation/native';

export const getParamsNav = (route: RouteProp<ParamListBase, string>): any => {
  return typeof route?.params === 'string' ? JSON.parse(route?.params) : '';
};
