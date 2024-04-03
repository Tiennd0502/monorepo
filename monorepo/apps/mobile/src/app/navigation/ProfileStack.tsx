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

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.PROFILE}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={SCREENS.ORDER} component={OrderScreen} />
      <Stack.Screen
        name={SCREENS.PAYMENT_METHOD}
        component={PaymentMethodScreen}
      />
      <Stack.Screen name={SCREENS.ADD_PAYMENT} component={AddPaymentScreen} />
      <Stack.Screen name={SCREENS.REVIEW} component={ReviewScreen} />
      <Stack.Screen
        name={SCREENS.REVIEW_DETAIL}
        component={ReviewDetailScreen}
      />
      <Stack.Screen name={SCREENS.SETTING} component={SettingScreen} />
      <Stack.Screen
        name={SCREENS.SHIPPING_ADDRESS}
        component={ShippingAddressScreen}
      />
      <Stack.Screen
        name={SCREENS.ADD_SHIPPING}
        component={AddShippingAddressScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
