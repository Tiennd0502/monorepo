import { SCREENS } from '../types';
import { CartScreen, ProductDetailScreen, CheckOutScreen } from '../screens';

import { Stack } from './Stack';
import MainTab from './MainTab';
import { Header } from '../components';

const MAIN_STACK_SCREENS = [
  {
    name: SCREENS.MAIN_TAB,
    component: MainTab,
  },
  {
    name: SCREENS.PRODUCT_DETAIL,
    component: ProductDetailScreen,
  },
  {
    name: SCREENS.CART,
    component: CartScreen,
  },
  {
    name: SCREENS.CHECK_OUT,
    component: CheckOutScreen,
  },
];

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.MAIN_TAB}
      screenOptions={{
        headerShadowVisible: false,
        animation: 'slide_from_right',
        headerTransparent: false,
        header: (props) => <Header {...props} />,
      }}
    >
      {MAIN_STACK_SCREENS.map(({ name, component }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            headerShown:
              name !== SCREENS.MAIN_TAB && name !== SCREENS.PRODUCT_DETAIL,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};
export default MainStackNavigator;
