import {createStackNavigator} from '@react-navigation/stack';
import routesScreen from './routes';
import {SignInScreen, SignUpScreen} from '../screens';
import React from 'react';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={routesScreen.SignIn}
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={routesScreen.SignUp}
        component={SignUpScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
