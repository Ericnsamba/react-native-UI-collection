import React, {FC} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomIcon from '../../CustomIcons/CustomIcon';

interface typeDefinition {
  navigation: any;
}

const SplashScreen: FC<typeDefinition> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.Views}>
        <Text style={{fontFamily: 'PlayfairDisplay-Black'}}>SplashScreen</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabStack')}
          style={styles.button}>
          <Text >Press me</Text>
        </TouchableOpacity>
        <View style={styles.icons}>
          {/* <CustomIcon
            name="Bag"
            size={80}
            color={'red'}
            style={styles.iconItem}
          /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
