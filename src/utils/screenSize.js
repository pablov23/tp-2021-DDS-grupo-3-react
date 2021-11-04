import { MAX_MEDIUM_DEVICE_WIDTH, MAX_SMALL_DEVICE_WIDTH } from '~constants/screenSizes';

export const isSmallDevice = () => (window.innerWidth || window.screen.width) < MAX_SMALL_DEVICE_WIDTH;

export const isMediumDevice = () => (window.innerWidth || window.screen.width) < MAX_MEDIUM_DEVICE_WIDTH;

export const scssVariableToNumber = variable =>
  variable.endsWith('px') ? parseInt(variable.split('px')[0]) : 0;
