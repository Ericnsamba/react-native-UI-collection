import {createSwitchNavigator} from 'react-navigation';
// import {
//   createFluidNavigator,
//   FluidNavigator,
//   Transition,
// } from 'react-navigation-fluid-transitions';
import {createAppContainer} from 'react-navigation';
import TabStack from '../Navigation/Tabs';
import SplashScreen from '../Views/Screens/SplashScreen';
import HomeScreen from '../Views/Screens/HomeScreen';

const RootStack = createSwitchNavigator(
  {
    TabStack,
    // HomeScreen,
    SplashScreen,
  },
  {
    // initialRouteName: 'TabStack',
    initialRouteName: 'SplashScreen',
  },
);
const RootNavigator = createAppContainer(RootStack);
export default RootNavigator;
