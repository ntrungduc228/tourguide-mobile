import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {User} from '../../../types/user';
import {Checkbox} from 'react-native-paper';
import {Avatar} from '../../../components';

type MemberSearchListProps = {
  users: User[];
  setUsersAdd: (id: number[]) => void;
  usersAdd: number[];
};

export const MemberSearchList = ({
  users,
  setUsersAdd,
  usersAdd,
}: MemberSearchListProps) => {
  return (
    <View>
      <ScrollView>
        {!!users?.length ? (
          users?.map((user: User) => (
            <MemberCheckItem
              key={user.id}
              user={user}
              setUsersAdd={setUsersAdd}
              usersAdd={usersAdd}
            />
          ))
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="text-gray-500">Chưa có thành viên</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default MemberSearchList;

export const MemberCheckItem = ({
  user,
  setUsersAdd,
  usersAdd,
}: {
  user: User;
  setUsersAdd: (id: number[]) => void;
  usersAdd: number[];
}) => {
  const [checked, setChecked] = React.useState(false);
  useEffect(() => {
    if (usersAdd.includes(user.id!!)) {
      setChecked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersAdd]);
  useEffect(() => {
    if (checked) {
      setUsersAdd(!!usersAdd.length ? [user.id!!, ...usersAdd] : [user.id!!]);
    } else {
      const temp = usersAdd.filter(item => item !== user.id);
      setUsersAdd(temp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);
  return (
    <View>
      <View className="flex-row w-full items-center">
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <View className="p-2 flex-1 bg-slate-100 flex-row justify-between shadow-lg border-1">
          <View className="flex-row gap-x-3 w-full items-center">
            <Avatar
              src={user.avatar}
              className="h-[40px] ml-1 w-[40px] rounded-full"
            />
            <View className="flex-1">
              <Text className="font-bold break-all">{user.fullName}</Text>
              <Text className="text-sm">SDT: {user.phone}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export const MemberItemChecked = ({user}: {user: User}) => {
  return (
    <View>
      <View className="flex-row w-full items-center">
        <Checkbox color="#808080" status={'checked'} onPress={() => {}} />
        <View className="p-2 flex-1 bg-slate-100 flex-row justify-between shadow-lg border-1">
          <View className="flex-row gap-x-3 w-full items-center">
            <Avatar
              src={user.avatar}
              className="h-[40px] ml-1 w-[40px] rounded-full"
            />
            <View className="flex-1">
              <Text className="font-bold break-all">{user.fullName}</Text>
              <Text className="text-sm">SDT: {user.phone}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
