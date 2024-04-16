import { Dimensions } from 'react-native';

export const BASE_SCREEN_WIDTH = 412;
export const BASE_SCREEN_HEIGHT = 842;

export const SCREEN_WIDTH: number = Dimensions.get('window').width;
export const SCREEN_HEIGHT: number = Dimensions.get('window').height;

export const CONTENT_WIDTH: number = SCREEN_WIDTH - 40;
