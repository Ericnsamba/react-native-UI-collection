import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'blue'}}>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
      </SafeAreaView>
    );
  }
}
