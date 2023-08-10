/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
// import type {PropsWithChildren} from 'react';

// import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator, AuthStackNavigator} from './src/navigations';
import {SocketClient} from './src/websocket';
import {PaperProvider} from 'react-native-paper';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {IRootState, store} from './src/stores';
import {logout, setAccessToken} from './src/stores/slices/userSlice';
import {tokenIsExpired} from './src/utils/verifyJwt';

const queryClient = new QueryClient();

function AppScreen(): JSX.Element {
  const {isLogin, accessToken} = useSelector(
    (state: IRootState) => state.user.data,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    checkIsLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isLogin]);

  const checkIsLogin = async () => {
    const user = await AsyncStorage.getItem('user');
    if (!user) {
      console.log('User not found ');
      return false;
    }

    const userInfo = JSON.parse(user);
    console.log('userINfo', userInfo);
    if (!userInfo?.hasOwnProperty('accessToken')) {
      dispatch(logout());
      return;
    }

    // if (await tokenIsExpired(userInfo?.accessToken)) {
    //   dispatch(logout());
    //   return;
    // }

    if (!accessToken) {
      dispatch(setAccessToken({accessToken: userInfo?.accessToken}));
    }
  };

  return (
    // <SafeAreaView>
    <NavigationContainer>
      {isLogin ? <MainStackNavigator /> : <AuthStackNavigator />}
      {isLogin && <SocketClient />}
    </NavigationContainer>
    // </SafeAreaView>
  );
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <AppScreen />
        </PaperProvider>
      </QueryClientProvider>
    </Provider>
  );
}

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function App(): JSX.Element {
//   useEffect(() => {
//     createChannels();
//   }, []);

//   const handleNotification = () => {
//     PushNotification.localNotification({
//       channelId: 'test-channel',
//       title: 'You click me',
//       message: 'You click me! fuck cuk',
//       bigText: 'This is bgitextis bgitextis bgitextis bgitext',
//     });
//     console.log('handle Notification');

//     PushNotification.localNotificationSchedule({
//       channelId: 'test-channel',
//       title: 'YlocalNotificationSchedulee',
//       message: 'schedule notificaitno',
//       date: new Date(Date.now() + 20 * 1000),
//       allowWhileIdle: true,
//     });
//   };

//   const createChannels = () => {
//     PushNotification.createChannel(
//       {
//         channelId: 'test-channel',
//         channelName: 'TESTT',
//       },
//       created => {
//         console.log(`createChannel returned '${created}'`);
//       },
//     );
//   };

//   return (
//     <SafeAreaView>
//       <Button title="click me" onPress={() => handleNotification()} />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
