import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Platform, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Onboarding extends Component {
  render() {
    const imageLink = { uri: "https://i.pinimg.com/originals/89/eb/82/89eb824e2797da9c108b2289967dde8c.png" }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground source={imageLink}
            style={styles.bgImage}>
            <View>

            </View>
          </ImageBackground>
        </View>

        <View style={styles.footer}></View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flex: Platform.OS === 'ios' ? 2 : 5,
    backgroundColor: '#fff',
    borderRadius: 60,
  },
  bgImage: {
    flex: 1,
    width: width,
    height: 510,
    borderRadius: 60,

  },
  footer: {
    flex: 1,
    backgroundColor: '#166FFF',
  },

});
