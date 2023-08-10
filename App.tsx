/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Button,
} from 'react-native';
// import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './src/navigations';
import {SocketClient} from './src/websocket';
import {PaperProvider} from 'react-native-paper';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './src/stores';
const queryClient = new QueryClient();

function AppScreen(): JSX.Element {
  // useEffect(() => {}, [])

  const checkIsLogin = async () => {
    const user = await AsyncStorage.getItem('user');
    if (!user) {
      console.log('User not found ');
      return false;
    }
    const userInfo = JSON.parse(user);
    console.log('userINfo', userInfo);
  };

  checkIsLogin();

  return (
    // <SafeAreaView>
    <NavigationContainer>
      <MainStackNavigator />
      <SocketClient />
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
