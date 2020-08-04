/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RootNavigation from './App/navigation/RootNavigation';

declare const global: {HermesInternal: null | {}};

export default class App extends Component {
  render() {
    return <RootNavigation />;
  }
}
