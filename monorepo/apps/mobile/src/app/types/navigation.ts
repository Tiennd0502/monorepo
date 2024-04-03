import { Blog, Product } from '@monorepo/types';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum SCREENS {
  AUTH_STACK = 'AuthStack',
  MAIN_TAB = 'MainTab',
  MAIN_STACK = 'MainStack',
  PROFILES_STACK = 'ProfilesStack',
  LANDING = 'Landing',
  SIGN_UP = 'SignUp',
  VERIFY_OTP = 'VerifyOTP',
  LOGIN = 'Login',
  HOME = 'Home',
  PRODUCT_DETAIL = 'ProductDetail',
  FAVORITE = 'Favorite',
  CART = 'Cart',
  CHECK_OUT = 'CheckOut',
  NOTIFICATION = 'Notification',
  CONGRATS = 'Congrats',
  REVIEW = 'Review',
  REVIEW_DETAIL = 'Review Detail',
  PROFILE = 'Profile',
  ORDER = 'Order',
  SHIPPING_ADDRESS = 'ShippingAddress',
  PAYMENT_METHOD = 'PaymentMethod',
  ADD_SHIPPING = 'AddShipping',
  ADD_PAYMENT = 'AddPayment',
  SETTING = 'Setting',
}

export type TabParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.FAVORITE]: undefined;
  [SCREENS.NOTIFICATION]: undefined;
  [SCREENS.PROFILE]: undefined;
};

export type StackParamList = {
  [SCREENS.LANDING]: undefined;
  [SCREENS.SIGN_UP]: undefined;
  [SCREENS.VERIFY_OTP]: undefined;
  [SCREENS.LOGIN]: undefined;
  [SCREENS.HOME]: undefined;
  [SCREENS.FAVORITE]: undefined;
  [SCREENS.CART]: undefined;
  [SCREENS.NOTIFICATION]: undefined;
  [SCREENS.CONGRATS]: undefined;
  [SCREENS.REVIEW]: undefined;
  [SCREENS.PROFILE]: undefined;
  [SCREENS.ORDER]: undefined;
  [SCREENS.SHIPPING_ADDRESS]: undefined;
  [SCREENS.PAYMENT_METHOD]: undefined;
  [SCREENS.ADD_SHIPPING]: undefined;
  [SCREENS.ADD_PAYMENT]: undefined;
  [SCREENS.SETTING]: undefined;
  [SCREENS.PRODUCT_DETAIL]: { product: Product };
  [SCREENS.REVIEW_DETAIL]: { item: Blog };
  [SCREENS.CHECK_OUT]: { id: string };
};

export type StackScreenProps = NativeStackNavigationProp<StackParamList>;

export type ProfileScreenProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, SCREENS.PROFILE>,
  NativeStackNavigationProp<StackParamList>
>;
