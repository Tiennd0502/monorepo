import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS, StackParamList } from '../types';
import { ProductDetailScreen } from '../screens';

import MainTabNavigator from './MainTab';

const Stack = createNativeStackNavigator<StackParamList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.MAIN_TAB}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={SCREENS.MAIN_TAB} component={MainTabNavigator} />
      <Stack.Screen
        name={SCREENS.PRODUCT_DETAIL}
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};
export default MainStackNavigator;
