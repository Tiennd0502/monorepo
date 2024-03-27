import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS, StackParamList } from '../types';
import { CartScreen, CheckOutScreen, ProductDetailScreen } from '../screens';

import MainTabNavigator from './MainTab';

const Stack = createNativeStackNavigator<StackParamList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.HOME}
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <Stack.Screen name={SCREENS.HOME} component={MainTabNavigator} />
      <Stack.Screen
        name={SCREENS.PRODUCT_DETAIL}
        component={ProductDetailScreen}
      />
      <Stack.Screen name={SCREENS.CART} component={CartScreen} />
      <Stack.Screen name={SCREENS.CHECK_OUT} component={CheckOutScreen} />
      <Stack.Screen name={SCREENS.MAIN_TAB} component={MainTabNavigator} />
    </Stack.Navigator>
  );
};
export default MainStackNavigator;
