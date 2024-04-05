import { SCREENS } from '../types';
import { Stack } from './Stack';
import {
  OrderScreen,
  ReviewScreen,
  SettingScreen,
  ProfileScreen,
  AddPaymentScreen,
  ReviewDetailScreen,
  PaymentMethodScreen,
  ShippingAddressScreen,
  AddShippingAddressScreen,
} from '../screens';
import { Header } from '../components';

const PROFILE_STACK_SCREENS = [
  {
    name: SCREENS.PROFILE,
    component: ProfileScreen,
  },
  {
    name: SCREENS.ORDER,
    component: OrderScreen,
  },
  {
    name: SCREENS.ADD_PAYMENT,
    component: AddPaymentScreen,
  },
  {
    name: SCREENS.PAYMENT_METHOD,
    component: PaymentMethodScreen,
  },
  {
    name: SCREENS.ADD_SHIPPING,
    component: AddShippingAddressScreen,
  },
  {
    name: SCREENS.SHIPPING_ADDRESS,
    component: ShippingAddressScreen,
  },
  {
    name: SCREENS.REVIEW,
    component: ReviewScreen,
  },
  {
    name: SCREENS.REVIEW_DETAIL,
    component: ReviewDetailScreen,
  },
  {
    name: SCREENS.SETTING,
    component: SettingScreen,
  },
];

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.PROFILE}
      screenOptions={{
        animation: 'slide_from_right',
        headerShadowVisible: false,
        headerTransparent: false,
        header: Header,
      }}
    >
      {PROFILE_STACK_SCREENS.map(({ name, component }) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
};

export default ProfileStack;
