import React, {FC} from 'react';
import {
  StatusBar,
  View,
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import * as theme from '../theme';
import CustomIcon from '../../CustomIcons/CustomIcon';

interface typeDefinition {
  navigation: any;
}

const HomeScreen: FC<typeDefinition> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const headerCard = () => (
    <View style={styles.bodyCard}>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require('../../assets/Images/girl-yoga.png')}
        />
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.cardFeature}>Feature</Text>
        <Text style={styles.cardTitle}>Anusara Yoga Meditation</Text>
        <Text style={styles.cardDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={[backgroundStyle, styles.SafeAreaView]}>
      <View>
        <View style={styles.header}>
          <Text style={styles.tile}>Discover</Text>
          <View style={styles.iconContainer}>
            <CustomIcon
              size={28}
              name="Message---3"
              color={isDarkMode ? Colors.white : Colors.black}
            />
          </View>
        </View>
        {headerCard()}
      </View>

      <View style={styles.tabStyle}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={styles.buttonActive}>
          <Text style={styles.buttonActiveText}>Styles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={styles.button}>
          <Text>Classes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={styles.button}>
          <Text>Teachers</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ListView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.ListViewItem}>
            <View style={styles.ListViewItemImage}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={require('../../assets/Images/girl-yoga.png')}
              />
            </View>
            <View style={styles.ListViewItemTextContainer}>
              <Text style={styles.ListViewItemTitle}>Yin Yoga</Text>
              <Text style={styles.ListViewItemText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </View>
          </View>
          <View style={styles.ListViewItem}>
            <View style={styles.ListViewItemImage}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={require('../../assets/Images/girl-yoga.png')}
              />
            </View>
            <View style={styles.ListViewItemTextContainer}>
              <Text style={styles.ListViewItemTitle}>Yin Yoga</Text>
              <Text style={styles.ListViewItemText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </View>
          </View>
          <View style={styles.ListViewItem}>
            <View style={styles.ListViewItemImage}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={require('../../assets/Images/girl-yoga.png')}
              />
            </View>
            <View style={styles.ListViewItemTextContainer}>
              <Text style={styles.ListViewItemTitle}>Yin Yoga</Text>
              <Text style={styles.ListViewItemText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </View>
          </View>
          <View style={styles.ListViewItem}>
            <View style={styles.ListViewItemImage}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={require('../../assets/Images/girl-yoga.png')}
              />
            </View>
            <View style={styles.ListViewItemTextContainer}>
              <Text style={styles.ListViewItemTitle}>Yin Yoga</Text>
              <Text style={styles.ListViewItemText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: theme.Colors.background,
    paddingHorizontal: 30,
    // justifyContent: 'space-between',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    // backgroundColor: theme.Colors.green,
    height: 80,
  },
  tile: {
    fontFamily: 'PlayfairDisplay-Black',
    fontSize: 30,
    marginBottom: 20,
    color: theme.Colors.black,
  },
  iconContainer: {
    padding: 12,
    backgroundColor: theme.Colors.amber,
    borderRadius: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  bodyCard: {
    height: 220,
    backgroundColor: theme.Colors.purple,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginBottom: 40,
  },
  cardDetails: {
    padding: 10,
    backgroundColor: theme.Colors.white,
    borderRadius: 10,
    minHeight: '15%',
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    bottom: -40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,

    elevation: 2,
  },
  cardFeature: {
    color: theme.Colors.purple,
    fontSize: 14,
    fontWeight: '500',
  },
  cardTitle: {
    color: theme.Colors.black,
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
    fontFamily: 'PlayfairDisplay-Black',
  },
  cardDescription: {
    color: theme.Colors.grey,
    fontSize: 14,
    marginBottom: 5,
  },
  ImageContainer: {
    width: '52%',
    height: 140,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  tabStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  buttonActive: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: theme.Colors.white,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,

    elevation: 2,
  },
  buttonActiveText: {
    fontWeight: '500',
    color: theme.Colors.purple,
  },
  button: {
    marginHorizontal: 20,
    color: theme.Colors.black,
  },
  ListView: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    height: '34%',
    alignSelf: 'center',
    // backgroundColor: theme.Colors.grey
  },
  ListViewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.Colors.amber_15,
    borderRadius: 20,
    padding: 20,
    width: '100%',
    marginBottom: 20,
  },
  ListViewItemImage: {
    width: '24%',
    height: 80,
    padding: 10,
    borderRadius: 15,
    backgroundColor: theme.Colors.purple,
  },
  ListViewItemTextContainer: {
    marginLeft: 20,
  },
  ListViewItemText: {
    width: '50%',
    color: theme.Colors.grey,
  },
  ListViewItemTitle: {
    color: theme.Colors.black,
    fontSize: 18,
    marginBottom: 5,
    fontFamily: 'PlayfairDisplay-Bold',
  },
});

export default HomeScreen;
