/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Animated, View, StyleSheet} from 'react-native';

// import useTranslation from '@/hooks/useTranslation.effect';
import CustomIcon from '../../App/CustomIcons/CustomIcon';
import HomeScreen from '../../App/Views/Screens/HomeScreen';

import * as theme from '../../App/Views/theme';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabStyle: {
          paddingTop: 15,
        },
        tabBarIcon: ({focused, color, size, backgroundColor}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused ? 'Status' : 'Status';
            size = focused ? 30 : 30;
            // backgroundColor = focused ? 'rgba(8, 119, 247, 0.15)' : '#fff';
            color = focused ? theme.Colors.black : theme.Colors.grey;
          } else if (route.name === 'HomeScreen2') {
            iconName = focused ? 'Note---3' : 'Note---3';
            size = focused ? 30 : 30;
            // backgroundColor = focused ? 'rgba(167, 107, 227, 0.15)' : '#fff';
            color = focused ? theme.Colors.black : theme.Colors.grey;
          } else if (route.name === 'HomeScreen3') {
            iconName = focused ? 'Setting---3' : 'Setting---3';
            size = focused ? 30 : 30;
            // backgroundColor = focused ? 'rgba(255, 177, 60, 0.15)' : '#fff';
            color = focused ? theme.Colors.black : theme.Colors.grey;
          }

          return (
            <View
              style={[
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: backgroundColor,
                  borderRadius: 15,
                },
              ]}>
              <View style={styles.icons}>
                <CustomIcon
                  name={iconName}
                  size={size}
                  color={color}
                  style={styles.iconItem}
                />
              </View>
            </View>
          );
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="HomeScreen2" component={HomeScreen} />
      <Tab.Screen name="HomeScreen3" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TabStack;

const styles = StyleSheet.create({
  tabBarOptions: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.Colors.grey,
    // bottom: 30,
    // position: 'absolute',
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
