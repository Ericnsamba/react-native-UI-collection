import React, {Component} from 'react';
import {createSwitchNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import Onboarding from '../screens/Onboarding';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import ScreenNavigation from '../navigation/screenNavigation';

const RootStack = createSwitchNavigator(
  {
    Onboarding,
    // ScreenNavigation,
    Profile,
    Login,
  },
  {
    initialRouteName: 'Onboarding',
  },
);
const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;
