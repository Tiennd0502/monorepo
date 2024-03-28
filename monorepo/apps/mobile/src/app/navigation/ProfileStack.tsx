import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS, StackParamList } from '../types';

import {
  OrderScreen,
  ReviewScreen,
  ProfileScreen,
  AddPaymentScreen,
  PaymentMethodScreen,
} from '../screens';

const Stack = createNativeStackNavigator<StackParamList>();

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
    </Stack.Navigator>
  );
};

export default ProfileStack;
