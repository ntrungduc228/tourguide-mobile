import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Menu} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DialogConfirm, ModalTrigger} from '../../../components';
import routesScreen from '../../../navigations/routes';
import {MemberAdd} from '../Member';
import {OutTour} from '../OutTour';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../stores';
import MenuTourGuide from './MenuTourGuide';
import MenuTourist from './MenuTourist';
import {verifyTourist} from '../../../utils/verifyRole';

// type SourceScreenNavigationProp = StackNavigationProp<ParamListBase>;

type MenuTourProps = {
  visible: boolean;
  setVisible: (value: boolean) => void;
};

export const MenuTour = ({visible, setVisible}: MenuTourProps) => {
  const user = useSelector((state: IRootState) => state.user.data.info);
  const navigation = useNavigation<Nav>();
  const closeMenu = () => setVisible(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openAddMember, setOpenAddMember] = useState<boolean>(false);
  if (user && verifyTourist(user?.role)) {
    return (
      <MenuTourist
        visible={visible}
        closeMenu={closeMenu}
        setVisible={setVisible}
      />
    );
  }

  return (
    <MenuTourGuide
      visible={visible}
      closeMenu={closeMenu}
      setVisible={setVisible}
    />
  );
};

export default MenuTour;
