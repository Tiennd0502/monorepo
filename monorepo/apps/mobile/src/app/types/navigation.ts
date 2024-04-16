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
  [SCREENS.PRODUCT_DETAIL]: { product: Product };
  [SCREENS.REVIEW_DETAIL]: { item: Blog };
  [SCREENS.CHECK_OUT]: { id: string };
} & Record<
  Exclude<
    SCREENS,
    SCREENS.PRODUCT_DETAIL | SCREENS.CHECK_OUT | SCREENS.REVIEW_DETAIL
  >,
  undefined
>;

export type StackScreenProps = NativeStackNavigationProp<StackParamList>;

export type ProfileScreenProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, SCREENS.PROFILE>,
  NativeStackNavigationProp<StackParamList>
>;
