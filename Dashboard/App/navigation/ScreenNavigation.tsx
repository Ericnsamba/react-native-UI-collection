import React, {Component} from 'react';
import {createSwitchNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Text, View} from 'react-native';
import Root from './RootNavigation';
import Onboarding from '../screens/Onboarding';
import Profile from '../screens/Profile';
import Login from '../screens/Login';

const Stack = createStackNavigator();

function ScreenNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProfileScreen">
        <Stack.Screen name="ProfileScreen" component={Profile} />
        <Stack.Screen name="LoginScreen" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ScreenNavigation;
