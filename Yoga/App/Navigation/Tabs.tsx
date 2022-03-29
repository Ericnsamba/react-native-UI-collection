/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import CustomIcon from '../../CustomIcons/CustomIcon';
import * as theme from '../Views/theme';
import HomeScreen from '../Views/Screens/HomeScreen';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      {/* <Tab.Screen name="Settings" component={SplashScreen} /> */}
    </Tab.Navigator>
  );
};

export default TabStack;

const styles = StyleSheet.create({
  tabBarOptions: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.Colors.grey,
    // bottom: 30,
    position: 'absolute',
    // marginHorizontal: 20,
    backgroundColor: theme.Colors.white,
    // borderRadius: 15,
    // height: 80,
    // paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: 10,
    // height: 70,
  },
});
