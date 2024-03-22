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

export type StackParamList = Record<SCREENS, undefined>;

export type NavigationProps = NativeStackNavigationProp<StackParamList>;
