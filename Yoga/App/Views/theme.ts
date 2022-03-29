import {Dimensions} from 'react-native';

/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ScreenDimensions = {
  height: windowHeight,
  width: windowWidth,
};

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  amber: '#ffd991',
  amber_15: 'rgba(255, 217, 145, 0.15)',
  white: '#ffffff',
  purple: '#e7a6ff',
  purple_15: 'rgba(231, 166, 255, 0.15)',
  black: '#3B3B3B',
  red: '#FC2966',
  red_15: 'rgba(252, 41, 102, 0.15)',
  green: '#08BEA0',
  green_15: 'rgba(8, 190, 160, 0.15)',
  grey: '#ADB5BD',
  background: '#FAFCFF',
  transparent: 'rgba(0,0,0,0)',
};

/**
 * FontSize
 */
export const FontSize = {
  small: 14,
  regular: 16,
  large: 22,
};

/**
 * Border
 */
export const DefaultBorder = {
  borderWidth: 1,
  borderBottomWidth: 6,
};

/**
 * Metrics Sizes
 */
const tiny = 5; // 10
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30

export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};
