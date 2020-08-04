import React, {Component} from 'react';
import {createSwitchNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import Onboarding from '../screens/Onboarding';
import Profile from '../screens/Profile';
import ScreenNavigation from '../navigation/screenNavigation';

const RootStack = createSwitchNavigator(
  {
    Onboarding,
    Profile,
  },
  {
    initialRouteName: 'Onboarding',
  },
);
const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;
