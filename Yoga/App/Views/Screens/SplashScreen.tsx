import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomIcon from '../../CustomIcons/CustomIcon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as theme from '../theme';

interface typeDefinition {
  navigation: any;
}

const SplashScreen: FC<typeDefinition> = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.SafeAreaView]}>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require('../../assets/Images/girl-yoga.png')}
        />
      </View>

      <View style={styles.icons} />
      <View style={styles.bottomSection}>
        <Text style={styles.bottomTile}>Welcome, and start Meditation</Text>
        <Text style={styles.bottomText}>
          Yoga is a practice of attaining a state of physical, mental, and
          spiritual well-being through the exercise of a discipline of movement.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabStack')}
          style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#F7E5FF',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    width: theme.ScreenDimensions.width,
  },
  ImageContainer: {
    height: '45%',
    resizeMode: 'cover',
    marginBottom: 40,
    padding: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    backgroundColor: theme.Colors.white,
    padding: 30,
    borderRadius: 30,
    position: 'absolute',
    bottom: -30,
    paddingBottom: 60,
    alignSelf: 'center',
    width: theme.ScreenDimensions.width,
  },
  bottomTile: {
    fontFamily: 'PlayfairDisplay-Black',
    fontSize: 30,
    marginBottom: 20,
    color: theme.Colors.black,
  },
  bottomText: {
    // fontFamily: 'PlayfairDisplay-Black',
    fontSize: 14,
    color: theme.Colors.grey,
    lineHeight: 25,
  },
  button: {
    backgroundColor: theme.Colors.amber,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // paddingVertical: 10,
    height: 45,
    paddingHorizontal: 30,
    marginVertical: 30,
    borderRadius: 30,
    width: 160,
    alignSelf: 'flex-end',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.Colors.black,
    lineHeight: 25,
    // backgroundColor: theme.Colors.grey,
  },
  iconStyle: {
    color: theme.Colors.black,
    marginTop: 4,
    marginHorizontal: 10,
  },
});
